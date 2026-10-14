// Geometry generator for round-14 task 14-e3 CLRS ch21/24/25 figures. v2

const f1 = n => (Math.round(n * 10) / 10).toString();

function txt(x, y, s, o = {}) {
  const { size = 12.5, anchor = "middle", weight = null, style = null, color = null, opacity = null } = o;
  let a = `x="${f1(x)}" y="${f1(y)}" font-family="ui-sans-serif, system-ui" font-size="${size}" fill="${color || "currentColor"}" text-anchor="${anchor}"`;
  if (weight) a += ` font-weight="${weight}"`;
  if (style) a += ` font-style="${style}"`;
  if (opacity != null) a += ` opacity="${opacity}"`;
  return `<text ${a}>${s}</text>`;
}

function node(x, y, label, o = {}) {
  const { r = 15, settled = false, hot = false } = o;
  let s = "";
  if (settled) s += `<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="#10b981" fill-opacity="0.14"/>`;
  else if (hot) s += `<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="#f59e0b" fill-opacity="0.16"/>`;
  else s += `<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="currentColor" fill-opacity="0.06"/>`;
  s += `<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="none" stroke="currentColor" stroke-width="1.8"/>`;
  s += txt(x, y + 4.5, label, { size: 13, style: "italic" });
  return s;
}

function arrow(x1, y1, x2, y2, o = {}) {
  const { t1 = 19, t2 = 19, color = "currentColor", width = 1.6, dash = null, opacity = null, head = 9, hw = 4.4 } = o;
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
  const ux = dx / L, uy = dy / L;
  const sx = x1 + t1 * ux, sy = y1 + t1 * uy;
  const tx = x2 - t2 * ux, ty = y2 - t2 * uy;
  const bx = tx - head * ux, by = ty - head * uy;
  const px = -uy, py = ux;
  let s = `<line x1="${f1(sx)}" y1="${f1(sy)}" x2="${f1(bx)}" y2="${f1(by)}" stroke="${color}" stroke-width="${width}"`;
  if (dash) s += ` stroke-dasharray="${dash}"`;
  if (opacity != null) s += ` opacity="${opacity}"`;
  s += `/>`;
  s += `<polygon points="${f1(tx)},${f1(ty)} ${f1(bx + hw * px)},${f1(by + hw * py)} ${f1(bx - hw * px)},${f1(by - hw * py)}" fill="${color}"/>`;
  return s;
}

function mid(x1, y1, x2, y2, off) {
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const L = Math.hypot(x2 - x1, y2 - y1);
  return [mx + (-(y2 - y1) / L) * off, my + ((x2 - x1) / L) * off];
}

const parts = [];
const emit = (name, svg) => { parts.push({ name, svg }); };

// ============================ FIG 1: weighted-union list splice ============
{
  let s = `<svg viewBox="0 0 720 330" width="100%" role="img" aria-label="Two linked lists and the result of splicing the shorter list in front of the longer one">`;
  s += txt(360, 24, "list A — 5 objects", { size: 13, weight: "600" });
  const ay = 58, ax = [230, 320, 410, 500, 590];
  const an = ["a", "b", "c", "d", "e"];
  s += txt(150, 63, "head", { size: 11, anchor: "end" });
  s += arrow(158, 58, 212, 58, { t1: 0, t2: 0 });
  s += txt(665, 63, "tail", { size: 11, anchor: "start" });
  s += arrow(596, 58, 648, 58, { t1: 0, t2: 0 });
  for (let i = 0; i < 4; i++) s += arrow(ax[i], ay, ax[i + 1], ay, { t1: 15, t2: 15 });
  for (let i = 0; i < 5; i++) s += node(ax[i], ay, an[i]);
  s += txt(360, 118, "list B — 2 objects", { size: 13, weight: "600" });
  const by = 152, bx = [320, 410];
  s += txt(250, 157, "head", { size: 11, anchor: "end" });
  s += arrow(258, 152, 303, 152, { t1: 0, t2: 0 });
  s += txt(472, 157, "tail", { size: 11, anchor: "start" });
  s += arrow(421, 152, 468, 152, { t1: 0, t2: 0 });
  s += arrow(bx[0], by, bx[1], by, { t1: 15, t2: 15 });
  s += node(bx[0], by, "p");
  s += node(bx[1], by, "q");
  s += txt(360, 218, "UNION(A, B) — weighted union splices the SHORTER list in front", { size: 13, weight: "600" });
  const ry = 272, rx = [100, 180, 262, 344, 426, 508, 590];
  const rn = ["q", "p", "a", "b", "c", "d", "e"];
  s += txt(60, 277, "head", { size: 11, anchor: "end" });
  s += arrow(64, 272, 84, 272, { t1: 0, t2: 0 });
  for (let i = 0; i < 6; i++) s += arrow(rx[i], ry, rx[i + 1], ry, { t1: 15, t2: 15, color: i < 2 ? "#10b981" : "currentColor", width: i < 2 ? 2.4 : 1.6 });
  for (let i = 0; i < 7; i++) s += node(rx[i], ry, rn[i], { hot: i < 2 });
  s += txt(360, 312, "only the 2 spliced objects (amber) need their set-object back-pointers rewritten: \u0398(min(|A|, |B|))", { size: 11.5 });
  s += txt(360, 328, "each rewritten object has just seen its list at least double \u21d2 at most \u2308lg n\u2309 rewrites per object", { size: 11.5 });
  s += `</svg>`;
  emit("fig1-list-splice", s);
}

// ============================ FIG 2: path compression ======================
{
  let s = `<svg viewBox="0 0 720 366" width="100%" role="img" aria-label="A chain-shaped tree before and after a FIND-SET that flattens the whole path">`;
  s += txt(180, 26, "before — FIND-SET(a) walks 5 hops", { size: 13, weight: "600" });
  const X = 150, ys = [75, 125, 175, 225, 275, 325], names = ["f", "e", "d", "c", "b", "a"];
  for (let i = 5; i >= 1; i--) s += arrow(X, ys[i], X, ys[i - 1], { t1: 17, t2: 17 });
  for (let i = 0; i < 6; i++) s += node(X, ys[i], names[i]);
  s += txt(178, 80, "root", { size: 11, anchor: "start", opacity: 0.7 });
  s += txt(178, 330, "query", { size: 11, anchor: "start", opacity: 0.7 });
  s += txt(540, 26, "after — every visited node points at the root", { size: 13, weight: "600" });
  const fx = 560, fy = 75;
  const fan = [
    ["a", 560, 325, -95],
    ["b", 560, 275, 95],
    ["c", 560, 225, -55],
    ["d", 560, 175, 55],
    ["e", 560, 125, -28],
  ];
  for (const [nm, x, y, off] of fan) {
    const cx = x + off, cy = (y + fy) / 2;
    const dirx = fx - cx, diry = fy - cy, L2 = Math.hypot(dirx, diry);
    const tipX = fx - 16 * dirx / L2, tipY = fy - 16 * diry / L2;
    const b1x = tipX - 9 * dirx / L2, b1y = tipY - 9 * diry / L2;
    const px = -diry / L2, py = dirx / L2;
    const sdx = cx - x, sdy = cy - y, SL = Math.hypot(sdx, sdy);
    const sxp = x + 15 * sdx / SL, syp = y + 15 * sdy / SL;
    s += `<path d="M ${f1(sxp)} ${f1(syp)} Q ${f1(cx)} ${f1(cy)} ${f1(b1x)} ${f1(b1y)}" fill="none" stroke="#10b981" stroke-width="2.2"/>`;
    s += `<polygon points="${f1(tipX)},${f1(tipY)} ${f1(b1x + 4.4 * px)},${f1(b1y + 4.4 * py)} ${f1(b1x - 4.4 * px)},${f1(b1y - 4.4 * py)}" fill="#10b981"/>`;
  }
  s += node(fx, fy, "f");
  s += txt(fx + 24, 80, "root", { size: 11, anchor: "start", opacity: 0.7 });
  for (const [nm, x, y, off] of fan) s += node(x, y, nm);
  s += txt(540, 352, "the next FIND on a, b, c, d or e costs one hop", { size: 11, opacity: 0.8 });
  s += `</svg>`;
  emit("fig2-path-compression", s);
}

// ====================== shared 5-vertex graph skeleton ====================
const G = {
  s: [75, 170], t: [225, 70], x: [370, 165], y: [220, 268], z: [398, 272],
};
function drawGraph(edges, opts = {}) {
  const { width = 1.5, hot = null } = opts;
  let s = "";
  const has = (u, v) => edges.some(e => e[0] === u && e[1] === v);
  for (const [u, v] of edges) {
    const [x1, y1] = G[u], [x2, y2] = G[v];
    const mutual = has(v, u);
    const L = Math.hypot(x2 - x1, y2 - y1);
    const px = -(y2 - y1) / L, py = (x2 - x1) / L;
    const off = mutual ? 6 : 0;
    const isHot = hot && hot[0] === u && hot[1] === v;
    s += arrow(x1 + px * off, y1 + py * off, x2 + px * off, y2 + py * off, { color: isHot ? "#f59e0b" : "currentColor", width: isHot ? 3 : width, t1: 17, t2: 17 });
  }
  return s;
}
function drawEdgeLabels(edges, color = null) {
  let s = "";
  for (const [u, v, w, off] of edges) {
    const [x1, y1] = G[u], [x2, y2] = G[v];
    const [lx, ly] = mid(x1, y1, x2, y2, off);
    s += txt(lx, ly + 4, String(w).replace("-", "\u2212"), { size: 12.5, color });
  }
  return s;
}

// ============================ FIG 3: Bellman-Ford passes ====================
{
  let s = `<svg viewBox="0 0 720 340" width="100%" role="img" aria-label="Bellman-Ford graph and the d-values after each relaxation pass">`;
  s += txt(240, 26, "Bellman-Ford on the running example", { size: 13, weight: "600" });
  const bfEdges = [
    ["s", "t", 6, -13], ["s", "y", 7, -13], ["t", "x", 5, -12], ["t", "y", 8, 14],
    ["t", "z", -4, -12], ["x", "t", -2, -12], ["y", "x", -3, -13], ["y", "z", 9, 15],
    ["z", "x", 7, 13], ["z", "s", 2, 13],
  ];
  s += drawGraph(bfEdges);
  s += drawEdgeLabels(bfEdges);
  for (const k of ["s", "t", "x", "y", "z"]) { const [x, y] = G[k]; s += node(x, y, k, { hot: k === "s" }); }
  const rows = [
    ["init", "0", "\u221e", "\u221e", "\u221e", "\u221e"],
    ["pass 1", "0", "6", "4", "7", "2"],
    ["pass 2", "0", "2", "4", "7", "2"],
    ["pass 3", "0", "2", "4", "7", "\u22122"],
    ["pass 4", "0", "2", "4", "7", "\u22122"],
  ];
  const changed = { 1: [1, 2, 3, 4], 2: [1], 3: [4] };
  const tx0 = 500, ty0 = 60, cw = 36, rh = 26;
  s += txt(tx0 + 2 * cw, ty0 - 22, "d-values after each pass", { size: 12, weight: "600" });
  const heads = ["s", "t", "x", "y", "z"];
  for (let c = 0; c < 5; c++) s += txt(tx0 + 28 + c * cw, ty0 - 4, heads[c], { size: 11, style: "italic" });
  for (let r = 0; r < rows.length; r++) {
    s += txt(tx0 + 18, ty0 + 14 + r * rh, rows[r][0], { size: 10.5, anchor: "end" });
    for (let c = 0; c < 5; c++) {
      const isCh = changed[r] && changed[r].includes(c);
      if (isCh) s += `<rect x="${f1(tx0 + 24 + c * cw - 15)}" y="${f1(ty0 + 4 + r * rh)}" width="30" height="19" rx="3" fill="#10b981" fill-opacity="0.14"/>`;
      s += txt(tx0 + 28 + c * cw, ty0 + 17 + r * rh, rows[r][c + 1], { size: 11, color: isCh ? "#10b981" : "currentColor", weight: isCh ? "700" : null });
    }
  }
  s += txt(tx0 + 2 * cw, ty0 + 5 * rh + 22, "pass 4 changes nothing \u2014 done", { size: 11, opacity: 0.8 });
  s += `</svg>`;
  emit("fig3-bellman-ford", s);
}

// ============================ FIG 4: Dijkstra relaxation ===================
{
  let s = `<svg viewBox="0 0 720 340" width="100%" role="img" aria-label="Dijkstra mid-run extracting vertex t and relaxing edge t to x from 13 down to 9">`;
  s += txt(240, 26, "Dijkstra mid-run \u2014 extracting t, relaxing t\u2192x", { size: 13, weight: "600" });
  const djEdges = [
    ["s", "t", 10, -13], ["s", "y", 5, -13], ["t", "x", 1, -12], ["t", "y", 2, 15],
    ["x", "z", 4, -16], ["y", "t", 3, 13], ["y", "x", 9, -13], ["y", "z", 2, -13],
    ["z", "x", 6, -16], ["z", "s", 7, 13],
  ];
  s += drawGraph(djEdges, { hot: ["t", "x"] });
  s += drawEdgeLabels(djEdges);
  for (const k of ["s", "y", "z"]) { const [x, y] = G[k]; s += node(x, y, k, { settled: true }); }
  for (const k of ["t", "x"]) { const [x, y] = G[k]; s += node(x, y, k, { hot: true }); }
  const chips = { s: ["d = 0", 52, 200], t: ["d = 8", 181, 70], x: ["d = 13 \u2192 9", 415, 129], y: ["d = 5", 221, 297], z: ["d = 7", 394, 301] };
  for (const k of ["s", "t", "x", "y", "z"]) {
    const [label, cx, cy] = chips[k];
    s += `<rect x="${f1(cx - 30)}" y="${f1(cy - 9)}" width="60" height="18" rx="4" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="1"/>`;
    s += txt(cx, cy + 4, label, { size: 10.5, color: k === "x" ? "#f59e0b" : "currentColor" });
  }
  s += txt(240, 330, "S = {s, y, z} settled (teal);  relax t\u2192x:  8 + 1 = 9 < 13  \u21d2  d[x] = 9, \u03c0[x] = t", { size: 12, weight: "600" });
  s += `</svg>`;
  emit("fig4-dijkstra", s);
}

// ============================ FIG 5: constraint graph =====================
{
  let s = `<svg viewBox="0 0 720 360" width="100%" role="img" aria-label="Constraint graph with a virtual source vertex v0 and three constraint edges">`;
  s += txt(360, 26, "Constraint graph for  x\u2082\u2212x\u2081 \u2264 3,  x\u2081\u2212x\u2083 \u2264 \u22125,  x\u2083\u2212x\u2082 \u2264 2", { size: 13, weight: "600" });
  const v0 = [360, 92], x1 = [180, 262], x2 = [540, 262], x3 = [360, 318];
  for (const p of [x1, x2, x3]) s += arrow(v0[0], v0[1], p[0], p[1], { t1: 19, t2: 19, dash: "5 4", opacity: 0.55, width: 1.4 });
  s += arrow(x1[0], x1[1], x2[0], x2[1], { t1: 19, t2: 19, width: 2 });
  s += arrow(x3[0], x3[1], x1[0], x1[1], { t1: 19, t2: 19, width: 2 });
  s += arrow(x2[0], x2[1], x3[0], x3[1], { t1: 19, t2: 19, width: 2 });
  s += node(v0[0], v0[1], "v\u2080", { hot: true });
  s += node(x1[0], x1[1], "x\u2081"); s += node(x2[0], x2[1], "x\u2082"); s += node(x3[0], x3[1], "x\u2083");
  for (const [p, o] of [[x1, -14], [x2, -14], [x3, -16]]) {
    const [lx, ly] = mid(v0[0], v0[1], p[0], p[1], o);
    s += txt(lx, ly + 4, "0", { size: 12, opacity: 0.6 });
  }
  s += txt(360, 252, "3", { size: 13, weight: "600" });
  s += txt(252, 278, "\u22125", { size: 13, weight: "600" });
  s += txt(468, 254, "2", { size: 13, weight: "600" });
  s += txt(360, 60, "virtual source \u2014 0-weight edge to every vertex", { size: 11, opacity: 0.75 });
  s += txt(360, 348, "feasible \u27fa no negative cycle;  the maximum solution is  x\u1c62 = \u03b4(v\u2080, v\u1c62) = (\u22125, \u22122, 0)", { size: 11.5 });
  s += `</svg>`;
  emit("fig5-constraints", s);
}

// ============================ FIG 6: Floyd-Warshall D^(k) =================
{
  let s = `<svg viewBox="0 0 720 380" width="100%" role="img" aria-label="Floyd-Warshall matrix with row k and column k highlighted and two improved entries">`;
  s += txt(220, 30, "D\u207d\u00b3\u207e \u2014 intermediates {1, 2, 3} allowed", { size: 13, weight: "600" });
  const D3 = [
    ["0", "3", "8", "4", "\u22124"],
    ["\u221e", "0", "\u221e", "1", "7"],
    ["\u221e", "4", "0", "5", "11"],
    ["2", "\u22121", "\u22125", "0", "\u22122"],
    ["\u221e", "\u221e", "\u221e", "6", "0"],
  ];
  const x0 = 70, y0 = 62, cw = 52, rh = 52;
  s += `<rect x="${f1(x0 + 3 * cw)}" y="${f1(y0)}" width="${f1(cw)}" height="${f1(5 * rh)}" fill="#10b981" fill-opacity="0.10"/>`;
  s += `<rect x="${f1(x0)}" y="${f1(y0 + 3 * rh)}" width="${f1(5 * cw)}" height="${f1(rh)}" fill="#10b981" fill-opacity="0.10"/>`;
  for (let c = 0; c < 5; c++) s += txt(x0 + c * cw + cw / 2, y0 - 8, String(c + 1), { size: 12, style: "italic" });
  for (let r = 0; r < 5; r++) s += txt(x0 - 12, y0 + r * rh + rh / 2 + 4, String(r + 1), { size: 12, style: "italic" });
  for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) {
    s += txt(x0 + c * cw + cw / 2, y0 + r * rh + rh / 2 + 4.5, D3[r][c], { size: 13 });
  }
  for (const [r, c] of [[2, 3], [1, 3]]) {
    s += `<rect x="${f1(x0 + (c - 1) * cw + 3)}" y="${f1(y0 + (r - 1) * rh + 3)}" width="${f1(cw - 6)}" height="${f1(rh - 6)}" fill="none" stroke="#f59e0b" stroke-width="2"/>`;
  }
  for (let c = 0; c <= 5; c++) s += `<line x1="${f1(x0 + c * cw)}" y1="${f1(y0)}" x2="${f1(x0 + c * cw)}" y2="${f1(y0 + 5 * rh)}" stroke="currentColor" stroke-width="0.8" opacity="0.35"/>`;
  for (let r = 0; r <= 5; r++) s += `<line x1="${f1(x0)}" y1="${f1(y0 + r * rh)}" x2="${f1(x0 + 5 * cw)}" y2="${f1(y0 + r * rh)}" stroke="currentColor" stroke-width="0.8" opacity="0.35"/>`;
  const cx = 380;
  s += txt(cx + 150, 30, "k = 4: every path may poke through vertex 4", { size: 13, weight: "600" });
  s += txt(cx + 150, 60, "d\u207d\u2074\u207e\u1c62\u2c7c = min( d\u207d\u00b3\u207e\u1c62\u2c7c ,  d\u207d\u00b3\u207e\u1c62\u2084 + d\u207d\u00b3\u207e\u2084\u2c7c )", { size: 14 });
  s += txt(cx + 150, 92, "keep the old estimate, or route through the new vertex", { size: 11, opacity: 0.75 });
  s += `<line x1="${f1(cx + 30)}" y1="112" x2="${f1(cx + 270)}" y2="112" stroke="currentColor" stroke-width="0.8" opacity="0.35"/>`;
  s += txt(cx + 150, 140, "entry (2, 3):  min( \u221e , 1 + (\u22125) ) = \u22124", { size: 13, color: "#f59e0b", weight: "600" });
  s += txt(cx + 150, 162, "2 \u2192 4 \u2192 3 beats anything through {1, 2, 3}", { size: 11, opacity: 0.8 });
  s += txt(cx + 150, 200, "entry (1, 3):  min( 8 , 4 + (\u22125) ) = \u22121", { size: 13, color: "#f59e0b", weight: "600" });
  s += txt(cx + 150, 222, "1 \u2192 2 \u2192 4 \u2192 3 replaces the direct edge", { size: 11, opacity: 0.8 });
  s += `<line x1="${f1(cx + 30)}" y1="242" x2="${f1(cx + 270)}" y2="242" stroke="currentColor" stroke-width="0.8" opacity="0.35"/>`;
  s += txt(cx + 150, 272, "row 4 and column 4 (teal) are the raw material:", { size: 11.5 });
  s += txt(cx + 150, 292, "each new table re-uses ALL of the previous one", { size: 11.5 });
  s += txt(cx + 150, 312, "in place \u2014 \u0398(n\u00b3) time, \u0398(n\u00b2) space, no superscripts", { size: 11.5 });
  s += txt(220, 368, "after k = 5 the matrix holds every \u03b4(i, j): no path needs an intermediate twice", { size: 11, opacity: 0.8 });
  s += `</svg>`;
  emit("fig6-floyd-warshall", s);
}

// ============================ FIG 7: Johnson potentials ===================
{
  let s = `<svg viewBox="0 0 720 350" width="100%" role="img" aria-label="Vertices placed at heights equal to their Johnson potentials with reweighted nonnegative edges">`;
  s += txt(360, 24, "Johnson potential landscape \u2014 vertex heights are h(v) = \u03b4(v\u2080, v)", { size: 13, weight: "600" });
  const P = { 1: [120, 72], 4: [450, 72], 2: [280, 112], 5: [610, 252], 3: [170, 297] };
  const h = { 1: 0, 2: -1, 3: -5, 4: 0, 5: -4 };
  const guides = [[72, "h = 0"], [112, "h = \u22121"], [252, "h = \u22124"], [297, "h = \u22125"]];
  for (const [gy, gl] of guides) {
    s += `<line x1="40" y1="${gy}" x2="680" y2="${gy}" stroke="currentColor" stroke-width="1" stroke-dasharray="4 5" opacity="0.25"/>`;
    s += txt(36, gy - 5, gl, { size: 10.5, anchor: "end", opacity: 0.7 });
  }
  const E = [
    [1, 2, 4, -12], [1, 3, 13, 12], [1, 5, 0, -14], [2, 4, 0, -12], [2, 5, 10, -12],
    [3, 2, 0, -13], [4, 1, 2, 13], [4, 3, 0, 12], [5, 4, 2, 13],
  ];
  for (const [u, v] of E) {
    const [x1, y1] = P[u], [x2, y2] = P[v];
    s += arrow(x1, y1, x2, y2, { t1: 17, t2: 17, width: 1.6 });
  }
  for (const [u, v, w, off] of E) {
    const [x1, y1] = P[u], [x2, y2] = P[v];
    const [lx, ly] = mid(x1, y1, x2, y2, off);
    s += txt(lx, ly + 4, String(w), { size: 12.5, weight: "600" });
  }
  for (const k of Object.keys(P)) {
    const [x, y] = P[k];
    s += node(x, y, String(k));
    s += txt(x, y - 22, `h = ${h[k]}`, { size: 10.5, opacity: 0.75 });
  }
  s += txt(360, 336, "every reweighted cost  w\u2032(u,v) = w(u,v) + h(u) \u2212 h(v) \u2265 0  \u2014  the climb pays for the edge", { size: 12, weight: "600" });
  s += `</svg>`;
  emit("fig7-johnson", s);
}

for (const p of parts) {
  console.log("\n===== " + p.name + " =====");
  console.log(p.svg);
}
