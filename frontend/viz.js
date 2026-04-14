/**
 * viz.js — dynamic display: ring canvases, coherence meter, EDCM, echo log.
 * Driven by WebSocket messages from /ws.
 */

const RING_COLORS = {
  phi:   "#4a9eff",
  psi:   "#a78bfa",
  omega: "#34d399",
};

// ------------------------------------------------------------------
// Ring node-coherence sparkline canvas
// ------------------------------------------------------------------
function drawRingCanvas(canvasId, nodeCoherence, color) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const n = nodeCoherence.length;
  if (n === 0) return;

  const barW = W / n;

  for (let i = 0; i < n; i++) {
    const v = nodeCoherence[i];
    const barH = Math.max(2, Math.floor(v * H));
    const alpha = 0.35 + v * 0.65;
    ctx.fillStyle = hexWithAlpha(color, alpha);
    ctx.fillRect(i * barW, H - barH, Math.max(1, barW - 1), barH);
  }

  // Overlay average line
  const avg = nodeCoherence.reduce((a, b) => a + b, 0) / n;
  const lineY = H - avg * H;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.8;
  ctx.beginPath();
  ctx.moveTo(0, lineY);
  ctx.lineTo(W, lineY);
  ctx.stroke();
  ctx.globalAlpha = 1;
}

function hexWithAlpha(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

// ------------------------------------------------------------------
// Public update function — called by app.js on each WS message
// ------------------------------------------------------------------
window.updateDisplay = function (data) {
  if (!data || data.type !== "state") return;

  const rings = data.rings || {};
  const nc    = data.node_coherence || {};

  // Ring cards
  for (const [name, color] of Object.entries(RING_COLORS)) {
    const info = rings[name] || {};
    const coh  = typeof info.coherence === "number" ? info.coherence : null;

    // Canvas sparkline
    if (nc[name]) drawRingCanvas(`canvas-${name}`, nc[name], color);

    // Coherence value
    const cohEl = document.getElementById(`coh-${name}`);
    if (cohEl) cohEl.textContent = coh !== null ? coh.toFixed(3) : "—";

    // Active winner highlight
    const card = document.getElementById(`card-${name}`);
    if (card) {
      card.classList.remove("active-phi", "active-psi", "active-omega");
      if (data.last_winner === name) card.classList.add(`active-${name}`);
    }
  }

  // Guardian bar
  const theta = rings.theta || {};
  const tCoh  = typeof theta.coherence === "number" ? theta.coherence : 0;
  const guardBar = document.getElementById("guardian-bar");
  if (guardBar) guardBar.style.width = `${(tCoh * 100).toFixed(1)}%`;
  const guardStats = document.getElementById("guardian-stats");
  if (guardStats) {
    const open = theta.gates_open ?? "—";
    guardStats.textContent = `gates: ${open}/29 | coh: ${tCoh.toFixed(3)}`;
  }

  // Overall coherence meter
  const overall = typeof data.overall_coherence === "number" ? data.overall_coherence : 0;
  const fill = document.getElementById("coh-fill");
  const val  = document.getElementById("coh-value");
  if (fill) {
    fill.style.width = `${(overall * 100).toFixed(1)}%`;
    fill.classList.toggle("fired", overall >= 0.45);
  }
  if (val) val.textContent = overall.toFixed(3);

  // Winner label
  const winnerEl = document.getElementById("winner-ring");
  if (winnerEl) winnerEl.textContent = data.last_winner || "—";

  // Header stats
  const inferEl = document.getElementById("infer-count");
  if (inferEl) inferEl.textContent = `∑ ${data.infer_count ?? 0}`;
  const iEventEl = document.getElementById("i-event-count");
  if (iEventEl) iEventEl.textContent = `⊙ ${data.i_event_count ?? 0}`;

  // Echo log
  const echoRecent = data.echo_recent || [];
  const log = document.getElementById("echo-log");
  if (log && echoRecent.length) {
    log.innerHTML = echoRecent
      .slice()
      .reverse()
      .map((e) => {
        const coh = typeof e.coherence === "number" ? e.coherence.toFixed(3) : "?";
        const provider = e.provider || e.agent || "?";
        return `<div class="echo-entry"><span class="coh-val">${coh}</span> ${provider}</div>`;
      })
      .join("");
  }
};

// ------------------------------------------------------------------
// EDCM strip update — called by app.js after each /chat response
// ------------------------------------------------------------------
window.updateEdcm = function (edcm) {
  if (!edcm) return;
  const map = {
    "em-cm":    edcm.cm,
    "em-da":    edcm.da,
    "em-drift": edcm.drift,
    "em-dvg":   edcm.dvg,
    "em-int":   edcm.int_val,
    "em-tbf":   edcm.tbf,
  };
  for (const [id, v] of Object.entries(map)) {
    const el = document.getElementById(id);
    if (el) el.textContent = typeof v === "number" ? v.toFixed(3) : "—";
  }
};
