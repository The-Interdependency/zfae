/**
 * app.js — chat UI + WebSocket client.
 * Connects to /ws for live display updates.
 * Sends chat via POST /chat.
 */

(function () {
  "use strict";

  // ------------------------------------------------------------------
  // WebSocket
  // ------------------------------------------------------------------
  let ws = null;
  let wsRetries = 0;

  function connectWS() {
    const proto = location.protocol === "https:" ? "wss:" : "ws:";
    ws = new WebSocket(`${proto}//${location.host}/ws`);

    ws.addEventListener("open", () => {
      wsRetries = 0;
      setStatus("live");
    });

    ws.addEventListener("message", (ev) => {
      try {
        const data = JSON.parse(ev.data);
        if (typeof window.updateDisplay === "function") window.updateDisplay(data);
      } catch (_) {}
    });

    ws.addEventListener("close", () => {
      setStatus("idle");
      const delay = Math.min(1000 * Math.pow(2, wsRetries++), 16000);
      setTimeout(connectWS, delay);
    });

    ws.addEventListener("error", () => setStatus("error"));
  }

  function setStatus(state) {
    const dot   = document.getElementById("status-dot");
    const label = document.getElementById("status-label");
    if (!dot || !label) return;
    dot.className = "dot";
    if (state === "live") {
      dot.classList.add("dot-live");
      label.textContent = "live";
    } else if (state === "error") {
      dot.classList.add("dot-error");
      label.textContent = "error";
    } else {
      dot.classList.add("dot-idle");
      label.textContent = "reconnecting…";
    }
  }

  // ------------------------------------------------------------------
  // Chat form
  // ------------------------------------------------------------------
  const form       = document.getElementById("chat-form");
  const input      = document.getElementById("chat-input");
  const msgList    = document.getElementById("chat-messages");
  const sendBtn    = document.getElementById("send-btn");
  const chatMeta   = document.getElementById("chat-meta");
  let   sending    = false;

  form && form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const text = input.value.trim();
    if (!text || sending) return;
    sending = true;
    sendBtn.disabled = true;

    appendMessage("user", text);
    input.value = "";
    input.style.height = "";

    const typingId = appendTyping();
    chatMeta.textContent = "inferring…";

    try {
      const res = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      removeTyping(typingId);
      if (!res.ok) {
        const err = await res.text();
        appendMessage("system", `[error ${res.status}] ${err}`);
      } else {
        const data = await res.json();
        appendAssistantMessage(data);
        if (typeof window.updateEdcm === "function") window.updateEdcm(data.edcm || {});
      }
    } catch (e) {
      removeTyping(typingId);
      appendMessage("system", `[network error] ${e.message}`);
    } finally {
      sending = false;
      sendBtn.disabled = false;
      chatMeta.textContent = "";
      input.focus();
    }
  });

  // Enter to send (Shift+Enter for newline)
  input && input.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter" && !ev.shiftKey) {
      ev.preventDefault();
      form && form.dispatchEvent(new Event("submit", { cancelable: true }));
    }
  });

  // Auto-resize textarea
  input && input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = Math.min(input.scrollHeight, 120) + "px";
  });

  // ------------------------------------------------------------------
  // Message builders
  // ------------------------------------------------------------------
  function appendMessage(role, text) {
    const div = document.createElement("div");
    div.className = `msg ${role}`;
    const txt = document.createElement("div");
    txt.className = "msg-text";
    txt.textContent = text;
    div.appendChild(txt);
    msgList.appendChild(div);
    scrollBottom();
    return div;
  }

  function appendAssistantMessage(data) {
    const div  = document.createElement("div");
    div.className = "msg assistant";

    const fired = data.fired === true;
    const coh   = typeof data.coherence_score === "number"
      ? data.coherence_score.toFixed(3) : "?";
    const winner = data.winner || "?";

    const txt = document.createElement("div");
    txt.className = "msg-text";
    txt.textContent = data.response || "(no response)";

    const meta = document.createElement("div");
    meta.className = "msg-meta";

    const tag = document.createElement("span");
    tag.className = fired ? "tag-i" : "tag-part";
    tag.textContent = fired ? "[I-EVENT]" : "[PARTIAL]";

    const winnerTag = document.createElement("span");
    winnerTag.className = `tag-${winner}`;
    winnerTag.textContent = winner;

    const cohBadge = document.createElement("span");
    cohBadge.className = "coh-badge";
    cohBadge.textContent = `ε=${coh}`;

    const msTag = document.createElement("span");
    msTag.textContent = `${data.elapsed_ms ?? 0}ms`;

    meta.appendChild(tag);
    meta.appendChild(winnerTag);
    meta.appendChild(cohBadge);
    meta.appendChild(msTag);

    div.appendChild(txt);
    div.appendChild(meta);

    if (fired) {
      div.classList.add("i-event-flash");
    }

    msgList.appendChild(div);
    scrollBottom();
  }

  let _typingCounter = 0;
  function appendTyping() {
    const id = `typing-${++_typingCounter}`;
    const div = document.createElement("div");
    div.className = "msg assistant";
    div.id = id;
    const txt = document.createElement("div");
    txt.className = "msg-text";
    txt.style.color = "var(--dim)";
    txt.textContent = "…";
    div.appendChild(txt);
    msgList.appendChild(div);
    scrollBottom();
    return id;
  }

  function removeTyping(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function scrollBottom() {
    msgList.scrollTop = msgList.scrollHeight;
  }

  // ------------------------------------------------------------------
  // Boot
  // ------------------------------------------------------------------
  connectWS();
})();
