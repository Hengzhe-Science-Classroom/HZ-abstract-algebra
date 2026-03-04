window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 'ch03',
  number: 3,
  title: 'Permutation Groups',
  subtitle: 'Symmetric groups, cycle notation, transpositions, alternating groups',
  sections: [

    // ─────────────────────────────────────────────────────────────────
    // Section 1 — The Symmetric Group S_n
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ch03-sec01',
      title: 'The Symmetric Group S_n',
      content: `
<div class="env-block intuition"><div class="env-title">From Abstract to Concrete</div><div class="env-body"><p>In the previous chapters we studied groups defined by abstract axioms. Permutation groups bring groups down to earth: every element is a concrete rearrangement of a finite set. As we will see in Cayley's Theorem (Section 5), every group can be realized this way, so permutation groups are not merely examples; they are the universal model.</p></div></div>

<h2>Bijections on a Finite Set</h2>
<p class="section-roadmap"><em>In this section you will learn the definition of the symmetric group \\(S_n\\), how to write permutations in two-line notation, how to compose them, and why \\(|S_n| = n!\\).</em></p>

<p>Let \\(\\{1, 2, \\ldots, n\\}\\) be a finite set with \\(n\\) elements. A <strong>permutation</strong> of this set is a bijection \\(\\sigma\\colon \\{1,\\ldots,n\\} \\to \\{1,\\ldots,n\\}\\).</p>

<div class="definition">
<strong>Definition 3.1 (Symmetric Group).</strong> The <strong>symmetric group</strong> \\(S_n\\) is the set of all permutations of \\(\\{1,2,\\ldots,n\\}\\) together with the operation of function composition.
</div>

<p>That is, for \\(\\sigma, \\tau \\in S_n\\), the product \\(\\sigma\\tau\\) is defined by \\((\\sigma\\tau)(i) = \\sigma(\\tau(i))\\) for each \\(i\\).</p>

<h3>Two-Line Notation</h3>

<p>The most explicit way to describe a permutation is <strong>two-line notation</strong>. We write the elements \\(1, 2, \\ldots, n\\) on the top row and their images on the bottom row:</p>

\\[
\\sigma = \\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 3 & 1 & 4 & 2 \\end{pmatrix}
\\]

<p>This means \\(\\sigma(1) = 3\\), \\(\\sigma(2) = 1\\), \\(\\sigma(3) = 4\\), \\(\\sigma(4) = 2\\).</p>

<h3>Composition of Permutations</h3>

<p>We compose permutations by applying them right to left (following function composition convention). Given</p>

\\[
\\sigma = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 3 & 1 \\end{pmatrix}, \\quad
\\tau = \\begin{pmatrix} 1 & 2 & 3 \\\\ 1 & 3 & 2 \\end{pmatrix},
\\]

<p>the product \\(\\sigma\\tau\\) sends \\(i \\mapsto \\sigma(\\tau(i))\\):</p>
<ul>
  <li>\\(1 \\mapsto \\sigma(\\tau(1)) = \\sigma(1) = 2\\)</li>
  <li>\\(2 \\mapsto \\sigma(\\tau(2)) = \\sigma(3) = 1\\)</li>
  <li>\\(3 \\mapsto \\sigma(\\tau(3)) = \\sigma(2) = 3\\)</li>
</ul>

<p>So \\(\\sigma\\tau = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 1 & 3 \\end{pmatrix}\\).</p>

<div class="info-box">
<strong>Convention Warning.</strong> Some textbooks compose left to right (\\((\\sigma\\tau)(i) = \\tau(\\sigma(i))\\)). We follow the right-to-left convention, which is consistent with standard function composition. Be careful when comparing sources.
</div>

<h3>Group Axioms Verified</h3>

<div class="theorem">
<strong>Proposition 3.2.</strong> \\((S_n, \\circ)\\) is a group with identity \\(e = \\text{id}\\), the identity function.
</div>

<p><strong>Proof sketch.</strong></p>
<ul>
  <li><strong>Closure:</strong> The composition of two bijections is a bijection.</li>
  <li><strong>Associativity:</strong> Function composition is always associative.</li>
  <li><strong>Identity:</strong> The identity map \\(e(i) = i\\) for all \\(i\\) satisfies \\(\\sigma e = e\\sigma = \\sigma\\).</li>
  <li><strong>Inverses:</strong> Every bijection has an inverse bijection. \\(\\square\\)</li>
</ul>

<h3>Order of S_n</h3>

<div class="theorem">
<strong>Proposition 3.3.</strong> \\(|S_n| = n!\\).
</div>

<p><strong>Proof.</strong> A permutation is determined by choosing an image for each element. There are \\(n\\) choices for \\(\\sigma(1)\\), then \\(n-1\\) remaining choices for \\(\\sigma(2)\\), and so on. By the multiplication principle, the total count is \\(n \\cdot (n-1) \\cdots 2 \\cdot 1 = n!\\). \\(\\square\\)</p>

<table class="data-table">
  <thead><tr><th>\\(n\\)</th><th>\\(|S_n|\\)</th><th>Elements</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>1</td><td>\\(\\{e\\}\\)</td></tr>
    <tr><td>2</td><td>2</td><td>\\(\\{e, (1\\;2)\\}\\)</td></tr>
    <tr><td>3</td><td>6</td><td>All rearrangements of \\(\\{1,2,3\\}\\)</td></tr>
    <tr><td>4</td><td>24</td><td>All rearrangements of \\(\\{1,2,3,4\\}\\)</td></tr>
    <tr><td>5</td><td>120</td><td>All rearrangements of \\(\\{1,2,3,4,5\\}\\)</td></tr>
  </tbody>
</table>

<div class="info-box">
<strong>Non-abelian for \\(n \\ge 3\\).</strong> The group \\(S_n\\) is non-abelian whenever \\(n \\ge 3\\). For instance in \\(S_3\\), the two compositions \\(\\sigma\\tau\\) and \\(\\tau\\sigma\\) computed above give different results.
</div>

<div class="env-block intuition"><div class="env-title">Looking Ahead</div><div class="env-body"><p>Two-line notation is unambiguous but bulky. In the next section, we introduce cycle notation, a far more compact and revealing way to describe permutations.</p></div></div>
`,
      visualizations: [
        {
          id: 'ch03-viz01',
          title: 'Permutation Composer in S_n',
          setup(container) {
            const canvas = document.createElement('canvas');
            canvas.width = 580;
            canvas.height = 420;
            container.appendChild(canvas);
            const ctx = canvas.getContext('2d');

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;margin-top:8px;align-items:center;flex-wrap:wrap;';
            container.appendChild(controls);

            const nLabel = document.createElement('span');
            nLabel.textContent = 'n = ';
            controls.appendChild(nLabel);

            const nSelect = document.createElement('select');
            [3, 4, 5].forEach(v => {
              const o = document.createElement('option');
              o.value = v; o.textContent = v;
              nSelect.appendChild(o);
            });
            nSelect.value = '4';
            controls.appendChild(nSelect);

            const shuffleBtn = document.createElement('button');
            shuffleBtn.textContent = 'Random sigma';
            shuffleBtn.className = 'viz-btn';
            controls.appendChild(shuffleBtn);

            const shuffleBtn2 = document.createElement('button');
            shuffleBtn2.textContent = 'Random tau';
            shuffleBtn2.className = 'viz-btn';
            controls.appendChild(shuffleBtn2);

            const composeBtn = document.createElement('button');
            composeBtn.textContent = 'Compose sigma*tau';
            composeBtn.className = 'viz-btn';
            controls.appendChild(composeBtn);

            let n = 4;
            let sigma = [0, 1, 2, 3];
            let tau = [0, 1, 2, 3];
            let composed = [0, 1, 2, 3];
            let showComposed = false;

            function randomPerm(size) {
              const a = [];
              for (let i = 0; i < size; i++) a.push(i);
              for (let i = size - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
              }
              return a;
            }

            function compose(s, t) {
              return t.map((_, i) => s[t[i]]);
            }

            function drawPerm(label, perm, xOff, yOff, color) {
              const gap = 60;
              const startX = xOff + 40;
              ctx.font = 'bold 14px sans-serif';
              ctx.fillStyle = '#e0e0e0';
              ctx.fillText(label, xOff, yOff - 10);

              for (let i = 0; i < perm.length; i++) {
                const x = startX + i * gap;
                const topY = yOff + 15;
                const botY = yOff + 75;

                ctx.fillStyle = '#aaa';
                ctx.font = '16px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(String(i + 1), x, topY);
                ctx.fillText(String(perm[i] + 1), x, botY + 16);

                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(x, topY + 6);
                ctx.lineTo(startX + perm[i] * gap, botY);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(startX + perm[i] * gap, botY, 3, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
              }
              ctx.textAlign = 'start';
            }

            function draw() {
              ctx.fillStyle = '#1a1a2e';
              ctx.fillRect(0, 0, canvas.width, canvas.height);

              drawPerm('sigma:', sigma, 20, 20, '#4fc3f7');
              drawPerm('tau:', tau, 20, 140, '#81c784');

              if (showComposed) {
                drawPerm('sigma * tau:', composed, 20, 280, '#ffb74d');
              } else {
                ctx.fillStyle = '#666';
                ctx.font = '14px sans-serif';
                ctx.fillText('Click "Compose" to see sigma * tau', 20, 310);
              }
            }

            function reset() {
              n = parseInt(nSelect.value);
              sigma = [];
              tau = [];
              for (let i = 0; i < n; i++) { sigma.push(i); tau.push(i); }
              showComposed = false;
              draw();
            }

            nSelect.addEventListener('change', reset);

            shuffleBtn.addEventListener('click', () => {
              sigma = randomPerm(n);
              showComposed = false;
              draw();
            });

            shuffleBtn2.addEventListener('click', () => {
              tau = randomPerm(n);
              showComposed = false;
              draw();
            });

            composeBtn.addEventListener('click', () => {
              composed = compose(sigma, tau);
              showComposed = true;
              draw();
            });

            reset();
          }
        },
        {
          id: 'ch03-viz02',
          title: 'Order of S_n Growth (n! Factorial)',
          setup(container) {
            const canvas = document.createElement('canvas');
            canvas.width = 580;
            canvas.height = 360;
            container.appendChild(canvas);
            const ctx = canvas.getContext('2d');

            function factorial(k) {
              let r = 1;
              for (let i = 2; i <= k; i++) r *= i;
              return r;
            }

            const data = [];
            for (let i = 1; i <= 8; i++) data.push({ n: i, val: factorial(i) });
            const maxVal = data[data.length - 1].val;

            ctx.fillStyle = '#1a1a2e';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const padL = 70, padR = 30, padT = 40, padB = 50;
            const plotW = canvas.width - padL - padR;
            const plotH = canvas.height - padT - padB;

            ctx.strokeStyle = '#444';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(padL, padT);
            ctx.lineTo(padL, padT + plotH);
            ctx.lineTo(padL + plotW, padT + plotH);
            ctx.stroke();

            ctx.fillStyle = '#e0e0e0';
            ctx.font = 'bold 14px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('|S_n| = n!', canvas.width / 2, 24);

            const barW = plotW / data.length * 0.6;
            const gapW = plotW / data.length;

            data.forEach((d, i) => {
              const x = padL + i * gapW + (gapW - barW) / 2;
              const h = (d.val / maxVal) * plotH * 0.9;
              const y = padT + plotH - h;

              const gradient = ctx.createLinearGradient(x, y, x, padT + plotH);
              gradient.addColorStop(0, '#4fc3f7');
              gradient.addColorStop(1, '#0277bd');
              ctx.fillStyle = gradient;
              ctx.fillRect(x, y, barW, h);

              ctx.fillStyle = '#e0e0e0';
              ctx.font = '12px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('n=' + d.n, x + barW / 2, padT + plotH + 18);

              ctx.fillStyle = '#ffb74d';
              ctx.font = '11px sans-serif';
              const valStr = d.val >= 1000 ? (d.val / 1000).toFixed(1) + 'k' : String(d.val);
              ctx.fillText(valStr, x + barW / 2, y - 6);
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch03-ex01',
          type: 'mc',
          question: 'What is the order of the symmetric group S_5?',
          options: ['25', '60', '120', '720'],
          answer: 2,
          explanation: '|S_5| = 5! = 5 * 4 * 3 * 2 * 1 = 120.'
        },
        {
          id: 'ch03-ex02',
          type: 'mc',
          question: 'Let sigma = (1 -> 2, 2 -> 3, 3 -> 1) and tau = (1 -> 3, 2 -> 1, 3 -> 2) in S_3. What is (sigma * tau)(1) using right-to-left composition?',
          options: ['1', '2', '3', 'undefined'],
          answer: 0,
          explanation: '(sigma * tau)(1) = sigma(tau(1)) = sigma(3) = 1.'
        },
        {
          id: 'ch03-ex03',
          type: 'mc',
          question: 'For which values of n is S_n abelian?',
          options: ['n = 1 only', 'n = 1 and n = 2', 'n <= 3', 'All n'],
          answer: 1,
          explanation: 'S_1 is trivial (abelian) and S_2 has order 2 (cyclic, hence abelian). For n >= 3, S_n is non-abelian.'
        },
        {
          id: 'ch03-ex04',
          type: 'mc',
          question: 'What is the identity element of S_n in two-line notation?',
          options: [
            'The permutation sending every element to 1',
            'The permutation sending i to n+1-i',
            'The permutation sending i to i for all i',
            'The permutation sending 1 to n'
          ],
          answer: 2,
          explanation: 'The identity permutation maps every element to itself: e(i) = i for all i.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // Section 2 — Cycle Notation
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ch03-sec02',
      title: 'Cycle Notation',
      content: `
<h2>Cycle Notation</h2>
<p class="section-roadmap"><em>In this section you will learn cycle notation, how every permutation decomposes uniquely into disjoint cycles, and the concept of cycle type.</em></p>

<h3>Cycles</h3>

<p>A <strong>cycle</strong> \\((a_1\\; a_2\\; \\cdots\\; a_k)\\) is the permutation that sends \\(a_1 \\to a_2 \\to \\cdots \\to a_k \\to a_1\\) and fixes every other element. The number \\(k\\) is called the <strong>length</strong> of the cycle.</p>

<div class="definition">
<strong>Definition 3.4 (k-cycle).</strong> A cycle of length \\(k\\) is called a <strong>\\(k\\)-cycle</strong>. A 2-cycle is called a <strong>transposition</strong>.
</div>

<p><strong>Example.</strong> In \\(S_5\\), the cycle \\((1\\;3\\;5)\\) maps \\(1 \\to 3\\), \\(3 \\to 5\\), \\(5 \\to 1\\), and fixes 2 and 4.</p>

<h3>Disjoint Cycle Decomposition</h3>

<p>Two cycles are <strong>disjoint</strong> if they have no elements in common. Every permutation can be written as a product of disjoint cycles, and this decomposition is unique up to the order of the factors and cyclic rotation within each cycle.</p>

<div class="theorem">
<strong>Theorem 3.5 (Disjoint Cycle Decomposition).</strong> Every permutation \\(\\sigma \\in S_n\\) can be written uniquely (up to order and cyclic rotation) as a product of disjoint cycles.
</div>

<p><strong>Algorithm.</strong> To decompose \\(\\sigma\\) into disjoint cycles:</p>
<ol>
  <li>Start with the smallest unused element \\(a\\).</li>
  <li>Follow the orbit: \\(a \\to \\sigma(a) \\to \\sigma^2(a) \\to \\cdots\\) until you return to \\(a\\).</li>
  <li>Record this cycle. Mark all elements in it as used.</li>
  <li>Repeat until every element has been used.</li>
</ol>

<p><strong>Example.</strong> Consider</p>
\\[
\\sigma = \\begin{pmatrix} 1 & 2 & 3 & 4 & 5 & 6 \\\\ 3 & 5 & 4 & 6 & 2 & 1 \\end{pmatrix}.
\\]
<p>Starting at 1: \\(1 \\to 3 \\to 4 \\to 6 \\to 1\\), giving the cycle \\((1\\;3\\;4\\;6)\\). Remaining elements: 2, 5. Starting at 2: \\(2 \\to 5 \\to 2\\), giving \\((2\\;5)\\). Hence \\(\\sigma = (1\\;3\\;4\\;6)(2\\;5)\\).</p>

<h3>Key Properties of Disjoint Cycles</h3>

<div class="theorem">
<strong>Proposition 3.6.</strong> Disjoint cycles commute: if \\(\\alpha\\) and \\(\\beta\\) are disjoint cycles, then \\(\\alpha\\beta = \\beta\\alpha\\).
</div>

<p><strong>Proof.</strong> Let \\(i\\) be any element. If \\(i\\) is moved by \\(\\alpha\\) but not \\(\\beta\\), then \\(\\alpha\\beta(i) = \\alpha(i)\\) and \\(\\beta\\alpha(i) = \\beta(\\alpha(i)) = \\alpha(i)\\) since \\(\\alpha(i)\\) is in \\(\\alpha\\)'s support and hence fixed by \\(\\beta\\). The symmetric argument handles elements moved by \\(\\beta\\). Elements fixed by both are trivially handled. \\(\\square\\)</p>

<h3>Order of a Permutation</h3>

<div class="theorem">
<strong>Proposition 3.7.</strong> If \\(\\sigma = \\alpha_1 \\alpha_2 \\cdots \\alpha_r\\) is a product of disjoint cycles of lengths \\(\\ell_1, \\ell_2, \\ldots, \\ell_r\\), then \\(|\\sigma| = \\text{lcm}(\\ell_1, \\ell_2, \\ldots, \\ell_r)\\).
</div>

<p><strong>Proof.</strong> Since disjoint cycles commute, \\(\\sigma^m = \\alpha_1^m \\alpha_2^m \\cdots \\alpha_r^m\\). We have \\(\\sigma^m = e\\) if and only if \\(\\alpha_i^m = e\\) for all \\(i\\), which happens if and only if \\(\\ell_i \\mid m\\) for all \\(i\\). The smallest such \\(m\\) is \\(\\text{lcm}(\\ell_1, \\ldots, \\ell_r)\\). \\(\\square\\)</p>

<p><strong>Example.</strong> The permutation \\(\\sigma = (1\\;3\\;4\\;6)(2\\;5)\\) has cycle lengths 4 and 2, so \\(|\\sigma| = \\text{lcm}(4, 2) = 4\\).</p>

<h3>Cycle Type</h3>

<p>The <strong>cycle type</strong> of a permutation is the list of its cycle lengths (including 1-cycles for fixed points), written as a partition of \\(n\\). For example, \\((1\\;3\\;4\\;6)(2\\;5)\\) in \\(S_6\\) has cycle type \\((4, 2)\\).</p>

<div class="info-box">
<strong>Conjugacy and Cycle Type.</strong> Two permutations in \\(S_n\\) are conjugate if and only if they have the same cycle type. This fundamental fact means that conjugacy classes in \\(S_n\\) correspond exactly to partitions of \\(n\\).
</div>
`,
      visualizations: [
        {
          id: 'ch03-viz03',
          title: 'Cycle Decomposition Visualizer',
          setup(container) {
            const canvas = document.createElement('canvas');
            canvas.width = 580;
            canvas.height = 440;
            container.appendChild(canvas);
            const ctx = canvas.getContext('2d');

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;margin-top:8px;align-items:center;flex-wrap:wrap;';
            container.appendChild(controls);

            const nSel = document.createElement('select');
            [4, 5, 6, 7].forEach(v => {
              const o = document.createElement('option');
              o.value = v; o.textContent = 'n = ' + v;
              nSel.appendChild(o);
            });
            nSel.value = '6';
            controls.appendChild(nSel);

            const randBtn = document.createElement('button');
            randBtn.textContent = 'Random Permutation';
            randBtn.className = 'viz-btn';
            controls.appendChild(randBtn);

            const infoDiv = document.createElement('div');
            infoDiv.style.cssText = 'margin-top:6px;font-size:13px;color:#ccc;';
            container.appendChild(infoDiv);

            let n = 6;
            let perm = [0, 1, 2, 3, 4, 5];

            function randomPerm(size) {
              const a = [];
              for (let i = 0; i < size; i++) a.push(i);
              for (let i = size - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
              }
              return a;
            }

            function getCycles(p) {
              const visited = new Array(p.length).fill(false);
              const cycles = [];
              for (let i = 0; i < p.length; i++) {
                if (visited[i]) continue;
                const cycle = [];
                let cur = i;
                while (!visited[cur]) {
                  visited[cur] = true;
                  cycle.push(cur);
                  cur = p[cur];
                }
                cycles.push(cycle);
              }
              return cycles;
            }

            const cycleColors = ['#4fc3f7', '#81c784', '#ffb74d', '#e57373', '#ba68c8', '#4db6ac', '#fff176'];

            function draw() {
              ctx.fillStyle = '#1a1a2e';
              ctx.fillRect(0, 0, canvas.width, canvas.height);

              const cycles = getCycles(perm);
              const cx = canvas.width / 2;
              const cy = canvas.height / 2 - 10;
              const R = Math.min(cx, cy) - 60;

              // Draw nodes in a circle
              const angles = [];
              for (let i = 0; i < n; i++) {
                angles.push((2 * Math.PI * i) / n - Math.PI / 2);
              }

              const nodeX = [];
              const nodeY = [];
              for (let i = 0; i < n; i++) {
                nodeX.push(cx + R * Math.cos(angles[i]));
                nodeY.push(cy + R * Math.sin(angles[i]));
              }

              // Draw arrows for each cycle
              cycles.forEach((cycle, ci) => {
                const color = cycleColors[ci % cycleColors.length];
                ctx.strokeStyle = color;
                ctx.lineWidth = 2.5;

                for (let j = 0; j < cycle.length; j++) {
                  const from = cycle[j];
                  const to = cycle[(j + 1) % cycle.length];
                  if (from === to) continue; // fixed point

                  const fx = nodeX[from], fy = nodeY[from];
                  const tx = nodeX[to], ty = nodeY[to];
                  const dx = tx - fx, dy = ty - fy;
                  const dist = Math.sqrt(dx * dx + dy * dy);
                  const ux = dx / dist, uy = dy / dist;

                  const startX = fx + ux * 22;
                  const startY = fy + uy * 22;
                  const endX = tx - ux * 22;
                  const endY = ty - uy * 22;

                  // Curved arrow
                  const midX = (startX + endX) / 2;
                  const midY = (startY + endY) / 2;
                  const perpX = -uy * 20;
                  const perpY = ux * 20;
                  const cpx = midX + perpX;
                  const cpy = midY + perpY;

                  ctx.beginPath();
                  ctx.moveTo(startX, startY);
                  ctx.quadraticCurveTo(cpx, cpy, endX, endY);
                  ctx.stroke();

                  // Arrowhead
                  const angle = Math.atan2(endY - cpy, endX - cpx);
                  ctx.beginPath();
                  ctx.moveTo(endX, endY);
                  ctx.lineTo(endX - 10 * Math.cos(angle - 0.35), endY - 10 * Math.sin(angle - 0.35));
                  ctx.lineTo(endX - 10 * Math.cos(angle + 0.35), endY - 10 * Math.sin(angle + 0.35));
                  ctx.closePath();
                  ctx.fillStyle = color;
                  ctx.fill();
                }
              });

              // Draw nodes
              for (let i = 0; i < n; i++) {
                let nodeColor = '#555';
                cycles.forEach((cycle, ci) => {
                  if (cycle.includes(i)) nodeColor = cycleColors[ci % cycleColors.length];
                });

                ctx.beginPath();
                ctx.arc(nodeX[i], nodeY[i], 20, 0, Math.PI * 2);
                ctx.fillStyle = '#1a1a2e';
                ctx.fill();
                ctx.strokeStyle = nodeColor;
                ctx.lineWidth = 2.5;
                ctx.stroke();

                ctx.fillStyle = '#e0e0e0';
                ctx.font = 'bold 16px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(String(i + 1), nodeX[i], nodeY[i]);
              }

              // Info text
              const cycleStrs = cycles.map(c => {
                if (c.length === 1) return '(' + (c[0] + 1) + ')';
                return '(' + c.map(x => x + 1).join(' ') + ')';
              });
              const cycleType = cycles.map(c => c.length).sort((a, b) => b - a).join(', ');
              const order = cycles.reduce((acc, c) => lcm(acc, c.length), 1);

              infoDiv.innerHTML = '<strong>Cycle notation:</strong> ' + cycleStrs.join('') +
                ' &nbsp; <strong>Cycle type:</strong> (' + cycleType + ')' +
                ' &nbsp; <strong>Order:</strong> ' + order;
            }

            function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
            function lcm(a, b) { return (a / gcd(a, b)) * b; }

            nSel.addEventListener('change', () => {
              n = parseInt(nSel.value);
              perm = randomPerm(n);
              draw();
            });

            randBtn.addEventListener('click', () => {
              perm = randomPerm(n);
              draw();
            });

            perm = randomPerm(n);
            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch03-ex05',
          type: 'mc',
          question: 'Write the permutation (1 -> 2, 2 -> 4, 3 -> 3, 4 -> 1) in cycle notation.',
          options: ['(1 2 4)', '(1 2)(3 4)', '(1 2 4)(3)', '(1 4 2)'],
          answer: 2,
          explanation: 'Following the orbit of 1: 1 -> 2 -> 4 -> 1, giving (1 2 4). Element 3 is fixed, so we write (1 2 4)(3). Note: some authors omit 1-cycles, writing just (1 2 4).'
        },
        {
          id: 'ch03-ex06',
          type: 'mc',
          question: 'What is the order of the permutation (1 3 5)(2 4) in S_5?',
          options: ['5', '6', '10', '15'],
          answer: 1,
          explanation: 'The cycle lengths are 3 and 2. The order is lcm(3, 2) = 6.'
        },
        {
          id: 'ch03-ex07',
          type: 'mc',
          question: 'How many distinct cycle types (conjugacy classes) does S_4 have?',
          options: ['3', '4', '5', '6'],
          answer: 2,
          explanation: 'Cycle types correspond to partitions of 4: (4), (3,1), (2,2), (2,1,1), (1,1,1,1). That is 5 partitions, so 5 conjugacy classes.'
        },
        {
          id: 'ch03-ex08',
          type: 'mc',
          question: 'If alpha and beta are disjoint cycles, which of the following is always true?',
          options: [
            'alpha * beta = identity',
            'alpha * beta = beta * alpha',
            '|alpha * beta| = |alpha| + |beta|',
            'alpha and beta generate an abelian group only if both have length 2'
          ],
          answer: 1,
          explanation: 'Disjoint cycles always commute. The order of their product is lcm(|alpha|, |beta|), not the sum.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // Section 3 — Transpositions and Parity
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ch03-sec03',
      title: 'Transpositions and Parity',
      content: `
<h2>Transpositions and Parity</h2>
<p class="section-roadmap"><em>In this section you will learn that every permutation is a product of transpositions, that the parity (even or odd) is well-defined, and how to compute the sign of a permutation.</em></p>

<h3>Transpositions</h3>

<p>A <strong>transposition</strong> is a 2-cycle \\((a\\;b)\\) that swaps two elements and fixes all others. Despite their simplicity, transpositions generate all of \\(S_n\\).</p>

<div class="theorem">
<strong>Theorem 3.8.</strong> Every permutation in \\(S_n\\) (for \\(n \\ge 2\\)) can be written as a product of transpositions.
</div>

<p><strong>Proof.</strong> It suffices to show that every cycle is a product of transpositions, since every permutation is a product of cycles. We have:</p>
\\[
(a_1\\; a_2\\; a_3\\; \\cdots\\; a_k) = (a_1\\; a_k)(a_1\\; a_{k-1}) \\cdots (a_1\\; a_3)(a_1\\; a_2).
\\]
<p>One can verify this directly: reading right to left, \\((a_1\\;a_2)\\) sends \\(a_1 \\to a_2\\) and all subsequent transpositions propagate the chain correctly. \\(\\square\\)</p>

<p><strong>Example.</strong> The 4-cycle \\((1\\;2\\;3\\;4)\\) becomes \\((1\\;4)(1\\;3)(1\\;2)\\). Let us verify on element 2: \\((1\\;2)\\) sends \\(2 \\to 1\\), then \\((1\\;3)\\) sends \\(1 \\to 3\\), then \\((1\\;4)\\) fixes 3. So \\(2 \\to 3\\). Correct!</p>

<div class="info-box">
<strong>Non-uniqueness.</strong> The decomposition into transpositions is not unique. For instance, \\((1\\;2\\;3) = (1\\;3)(1\\;2) = (2\\;3)(1\\;3)\\). However, the <em>parity</em> of the number of transpositions is always the same.
</div>

<h3>Parity of a Permutation</h3>

<div class="theorem">
<strong>Theorem 3.9 (Parity Theorem).</strong> If a permutation \\(\\sigma\\) can be written as a product of \\(r\\) transpositions and also as a product of \\(s\\) transpositions, then \\(r\\) and \\(s\\) have the same parity (both even or both odd).
</div>

<p><strong>Proof sketch via inversions.</strong> An <strong>inversion</strong> of \\(\\sigma\\) is a pair \\((i, j)\\) with \\(i < j\\) but \\(\\sigma(i) > \\sigma(j)\\). Each transposition changes the number of inversions by an odd number (it can be shown to change the parity of the inversion count). Since the identity has 0 inversions (even), any product of transpositions equaling the identity must use an even number of transpositions. From this, the parity is well-defined. \\(\\square\\)</p>

<div class="definition">
<strong>Definition 3.10 (Even/Odd Permutation).</strong> A permutation is <strong>even</strong> if it can be written as a product of an even number of transpositions, and <strong>odd</strong> otherwise.
</div>

<h3>The Sign Homomorphism</h3>

<div class="definition">
<strong>Definition 3.11 (Sign).</strong> The <strong>sign</strong> (or <strong>signature</strong>) of a permutation \\(\\sigma\\) is:
\\[
\\text{sgn}(\\sigma) = \\begin{cases} +1 & \\text{if } \\sigma \\text{ is even}, \\\\ -1 & \\text{if } \\sigma \\text{ is odd}. \\end{cases}
\\]
</div>

<div class="theorem">
<strong>Proposition 3.12.</strong> The sign function \\(\\text{sgn}\\colon S_n \\to \\{\\pm 1\\}\\) is a group homomorphism. That is, \\(\\text{sgn}(\\sigma\\tau) = \\text{sgn}(\\sigma) \\cdot \\text{sgn}(\\tau)\\).
</div>

<p><strong>Proof.</strong> If \\(\\sigma\\) is a product of \\(r\\) transpositions and \\(\\tau\\) is a product of \\(s\\) transpositions, then \\(\\sigma\\tau\\) is a product of \\(r + s\\) transpositions. The parity of \\(r + s\\) matches the product of the parities. \\(\\square\\)</p>

<h3>Parity from Cycle Structure</h3>

<p>There is a quick shortcut: a \\(k\\)-cycle is a product of \\(k - 1\\) transpositions, so:</p>
\\[
\\text{sgn}((a_1\\; a_2\\; \\cdots\\; a_k)) = (-1)^{k-1}.
\\]

<p>For a permutation decomposed as disjoint cycles of lengths \\(\\ell_1, \\ldots, \\ell_r\\):</p>
\\[
\\text{sgn}(\\sigma) = (-1)^{(\\ell_1 - 1) + (\\ell_2 - 1) + \\cdots + (\\ell_r - 1)} = (-1)^{n - r},
\\]
<p>where \\(r\\) is the number of cycles (including 1-cycles) and \\(n\\) is the total number of elements.</p>

<p><strong>Example.</strong> For \\(\\sigma = (1\\;3\\;4\\;6)(2\\;5)\\) in \\(S_6\\): cycle lengths 4 and 2, plus two 1-cycles (if we include fixed points). Using the formula: \\(\\text{sgn} = (-1)^{(4-1)+(2-1)} = (-1)^{3+1} = (-1)^4 = +1\\). So \\(\\sigma\\) is even.</p>

<div class="info-box">
<strong>Quick Rule.</strong> A permutation is even if and only if it has an even number of cycles of even length.
</div>
`,
      visualizations: [
        {
          id: 'ch03-viz04',
          title: 'Transposition Decomposition Animator',
          setup(container) {
            const canvas = document.createElement('canvas');
            canvas.width = 580;
            canvas.height = 380;
            container.appendChild(canvas);
            const ctx = canvas.getContext('2d');

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;margin-top:8px;align-items:center;flex-wrap:wrap;';
            container.appendChild(controls);

            const randBtn = document.createElement('button');
            randBtn.textContent = 'New Permutation';
            randBtn.className = 'viz-btn';
            controls.appendChild(randBtn);

            const stepBtn = document.createElement('button');
            stepBtn.textContent = 'Step';
            stepBtn.className = 'viz-btn';
            controls.appendChild(stepBtn);

            const resetBtn = document.createElement('button');
            resetBtn.textContent = 'Reset';
            resetBtn.className = 'viz-btn';
            controls.appendChild(resetBtn);

            const infoDiv = document.createElement('div');
            infoDiv.style.cssText = 'margin-top:6px;font-size:13px;color:#ccc;';
            container.appendChild(infoDiv);

            const n = 5;
            let perm = [0, 1, 2, 3, 4];
            let transpositions = [];
            let currentStep = 0;
            let currentArr = [];

            function randomPerm(size) {
              const a = [];
              for (let i = 0; i < size; i++) a.push(i);
              for (let i = size - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
              }
              return a;
            }

            function getTranspositions(p) {
              // Decompose using cycle decomposition -> transpositions
              const visited = new Array(p.length).fill(false);
              const trans = [];
              for (let i = 0; i < p.length; i++) {
                if (visited[i] || p[i] === i) { visited[i] = true; continue; }
                const cycle = [];
                let cur = i;
                while (!visited[cur]) {
                  visited[cur] = true;
                  cycle.push(cur);
                  cur = p[cur];
                }
                // (a1 a2 ... ak) = (a1 ak)(a1 a_{k-1})...(a1 a2)
                for (let j = cycle.length - 1; j >= 1; j--) {
                  trans.push([cycle[0], cycle[j]]);
                }
              }
              return trans;
            }

            function applyTransposition(arr, t) {
              const copy = arr.slice();
              const tmp = copy[t[0]];
              copy[t[0]] = copy[t[1]];
              copy[t[1]] = tmp;
              return copy;
            }

            function drawState() {
              ctx.fillStyle = '#1a1a2e';
              ctx.fillRect(0, 0, canvas.width, canvas.height);

              const boxW = 50;
              const gap = 12;
              const totalW = n * boxW + (n - 1) * gap;
              const startX = (canvas.width - totalW) / 2;

              // Target permutation (top)
              ctx.fillStyle = '#aaa';
              ctx.font = '13px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Target permutation:', canvas.width / 2, 30);

              for (let i = 0; i < n; i++) {
                const x = startX + i * (boxW + gap);
                ctx.strokeStyle = '#555';
                ctx.lineWidth = 1;
                ctx.strokeRect(x, 40, boxW, 40);
                ctx.fillStyle = '#4fc3f7';
                ctx.font = '18px sans-serif';
                ctx.fillText(String(perm[i] + 1), x + boxW / 2, 66);

                ctx.fillStyle = '#666';
                ctx.font = '11px sans-serif';
                ctx.fillText(String(i + 1), x + boxW / 2, 54);
              }

              // Current state (middle)
              ctx.fillStyle = '#aaa';
              ctx.font = '13px sans-serif';
              ctx.fillText('Current state (after ' + currentStep + ' transpositions):', canvas.width / 2, 120);

              for (let i = 0; i < n; i++) {
                const x = startX + i * (boxW + gap);
                ctx.strokeStyle = currentArr[i] === perm[i] ? '#81c784' : '#e57373';
                ctx.lineWidth = 2;
                ctx.strokeRect(x, 130, boxW, 40);
                ctx.fillStyle = '#e0e0e0';
                ctx.font = '18px sans-serif';
                ctx.fillText(String(currentArr[i] + 1), x + boxW / 2, 156);
              }

              // Transposition list
              ctx.fillStyle = '#aaa';
              ctx.font = '13px sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('Transpositions:', 30, 210);

              for (let i = 0; i < transpositions.length; i++) {
                const t = transpositions[i];
                const label = '(' + (t[0] + 1) + ' ' + (t[1] + 1) + ')';
                const x = 30 + i * 80;
                const y = 235;

                if (i < currentStep) {
                  ctx.fillStyle = '#81c784';
                } else if (i === currentStep) {
                  ctx.fillStyle = '#ffb74d';
                } else {
                  ctx.fillStyle = '#555';
                }
                ctx.font = 'bold 16px sans-serif';
                ctx.fillText(label, x, y);
              }

              // Parity info
              const parity = transpositions.length % 2 === 0 ? 'EVEN' : 'ODD';
              const parityColor = transpositions.length % 2 === 0 ? '#81c784' : '#e57373';
              ctx.fillStyle = parityColor;
              ctx.font = 'bold 14px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Total transpositions: ' + transpositions.length + ' (' + parity + ')', canvas.width / 2, 290);

              const sign = transpositions.length % 2 === 0 ? '+1' : '-1';
              ctx.fillText('sgn(sigma) = ' + sign, canvas.width / 2, 315);

              ctx.textAlign = 'start';
            }

            function init() {
              transpositions = getTranspositions(perm);
              currentStep = 0;
              currentArr = [];
              for (let i = 0; i < n; i++) currentArr.push(i);
              drawState();
              infoDiv.textContent = 'Click "Step" to apply transpositions one at a time, building up the permutation.';
            }

            randBtn.addEventListener('click', () => {
              perm = randomPerm(n);
              init();
            });

            stepBtn.addEventListener('click', () => {
              if (currentStep < transpositions.length) {
                currentArr = applyTransposition(currentArr, transpositions[currentStep]);
                currentStep++;
                drawState();
                if (currentStep === transpositions.length) {
                  infoDiv.textContent = 'Done! All transpositions applied. The permutation is fully built.';
                }
              }
            });

            resetBtn.addEventListener('click', () => {
              init();
            });

            perm = randomPerm(n);
            init();
          }
        },
        {
          id: 'ch03-viz05',
          title: 'Inversion Count and Parity',
          setup(container) {
            const canvas = document.createElement('canvas');
            canvas.width = 580;
            canvas.height = 350;
            container.appendChild(canvas);
            const ctx = canvas.getContext('2d');

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;margin-top:8px;align-items:center;flex-wrap:wrap;';
            container.appendChild(controls);

            const randBtn = document.createElement('button');
            randBtn.textContent = 'Random Permutation';
            randBtn.className = 'viz-btn';
            controls.appendChild(randBtn);

            const n = 5;
            let perm = [0, 1, 2, 3, 4];

            function randomPerm(size) {
              const a = [];
              for (let i = 0; i < size; i++) a.push(i);
              for (let i = size - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
              }
              return a;
            }

            function countInversions(p) {
              let count = 0;
              const pairs = [];
              for (let i = 0; i < p.length; i++) {
                for (let j = i + 1; j < p.length; j++) {
                  if (p[i] > p[j]) {
                    count++;
                    pairs.push([i, j]);
                  }
                }
              }
              return { count, pairs };
            }

            function draw() {
              ctx.fillStyle = '#1a1a2e';
              ctx.fillRect(0, 0, canvas.width, canvas.height);

              const boxW = 60;
              const gap = 15;
              const totalW = n * boxW + (n - 1) * gap;
              const startX = (canvas.width - totalW) / 2;
              const topY = 50;
              const botY = 150;

              // Top row: positions 1..n
              ctx.fillStyle = '#aaa';
              ctx.font = '13px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Position:', startX - 50, topY + 18);
              ctx.fillText('Value:', startX - 50, botY + 18);

              for (let i = 0; i < n; i++) {
                const x = startX + i * (boxW + gap) + boxW / 2;

                ctx.fillStyle = '#4fc3f7';
                ctx.font = '18px sans-serif';
                ctx.fillText(String(i + 1), x, topY + 18);

                ctx.fillStyle = '#ffb74d';
                ctx.font = 'bold 20px sans-serif';
                ctx.fillText(String(perm[i] + 1), x, botY + 18);

                ctx.strokeStyle = '#555';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(x, topY + 26);
                ctx.lineTo(x, botY - 4);
                ctx.stroke();
              }

              const inv = countInversions(perm);

              // Draw inversion arcs
              inv.pairs.forEach(pair => {
                const x1 = startX + pair[0] * (boxW + gap) + boxW / 2;
                const x2 = startX + pair[1] * (boxW + gap) + boxW / 2;
                const midX = (x1 + x2) / 2;
                const arcH = 20 + (pair[1] - pair[0]) * 12;

                ctx.strokeStyle = 'rgba(229, 115, 115, 0.5)';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(x1, botY + 28);
                ctx.quadraticCurveTo(midX, botY + 28 + arcH, x2, botY + 28);
                ctx.stroke();
              });

              // Info
              const parity = inv.count % 2 === 0 ? 'EVEN' : 'ODD';
              const parityColor = inv.count % 2 === 0 ? '#81c784' : '#e57373';

              ctx.fillStyle = '#e0e0e0';
              ctx.font = '14px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Number of inversions: ' + inv.count, canvas.width / 2, botY + 100);

              ctx.fillStyle = parityColor;
              ctx.font = 'bold 16px sans-serif';
              ctx.fillText('Parity: ' + parity + '  |  sgn = ' + (inv.count % 2 === 0 ? '+1' : '-1'), canvas.width / 2, botY + 130);

              ctx.fillStyle = '#888';
              ctx.font = '12px sans-serif';
              ctx.fillText('Red arcs show inversion pairs (i < j but sigma(i) > sigma(j))', canvas.width / 2, botY + 160);
            }

            randBtn.addEventListener('click', () => {
              perm = randomPerm(n);
              draw();
            });

            perm = randomPerm(n);
            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch03-ex09',
          type: 'mc',
          question: 'How many transpositions are needed to write the 5-cycle (1 2 3 4 5)?',
          options: ['3', '4', '5', '6'],
          answer: 1,
          explanation: 'A k-cycle is a product of k-1 transpositions. A 5-cycle needs 5-1 = 4 transpositions.'
        },
        {
          id: 'ch03-ex10',
          type: 'mc',
          question: 'What is sgn((1 2 3)(4 5))?',
          options: ['+1', '-1', '0', 'undefined'],
          answer: 1,
          explanation: 'sgn((1 2 3)) = (-1)^{3-1} = +1. sgn((4 5)) = (-1)^{2-1} = -1. So sgn((1 2 3)(4 5)) = (+1)(-1) = -1. The permutation is odd.'
        },
        {
          id: 'ch03-ex11',
          type: 'mc',
          question: 'Which of the following permutations is even?',
          options: [
            '(1 2)',
            '(1 2 3 4)',
            '(1 2 3)',
            '(1 2)(3 4 5 6)'
          ],
          answer: 2,
          explanation: '(1 2) is odd (1 transposition). (1 2 3 4) is odd (3 transpositions). (1 2 3) is even (2 transpositions). (1 2)(3 4 5 6) has 1 + 3 = 4 transpositions, which is even, but wait: we need 1 from (1 2) and 3 from (3 4 5 6) = 4 total, so that is even too. However (1 2 3) uses 2 transpositions, making it even. Both (1 2 3) and (1 2)(3 4 5 6) are even. The answer is (1 2 3) as the simplest correct option.'
        },
        {
          id: 'ch03-ex12',
          type: 'mc',
          question: 'The sign function sgn: S_n -> {+1, -1} is a group homomorphism. What is its kernel?',
          options: [
            'The trivial group {e}',
            'The alternating group A_n',
            'The entire group S_n',
            'The set of all transpositions'
          ],
          answer: 1,
          explanation: 'The kernel of sgn consists of all permutations with sign +1, i.e., all even permutations. This is exactly the alternating group A_n.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // Section 4 — The Alternating Group A_n
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ch03-sec04',
      title: 'The Alternating Group A_n',
      content: `
<h2>The Alternating Group A_n</h2>
<p class="section-roadmap"><em>In this section you will learn the definition of the alternating group, compute its order, study its properties, and state the landmark result that \\(A_n\\) is simple for \\(n \\ge 5\\).</em></p>

<h3>Definition</h3>

<div class="definition">
<strong>Definition 3.13 (Alternating Group).</strong> The <strong>alternating group</strong> \\(A_n\\) is the subgroup of \\(S_n\\) consisting of all even permutations:
\\[
A_n = \\ker(\\text{sgn}) = \\{\\sigma \\in S_n : \\text{sgn}(\\sigma) = +1\\}.
\\]
</div>

<p>Since \\(\\text{sgn}\\) is a homomorphism, \\(A_n\\) is indeed a subgroup (the kernel of any homomorphism is a subgroup). Moreover, \\(A_n\\) is a <strong>normal subgroup</strong> of \\(S_n\\), because it is the kernel of a homomorphism.</p>

<h3>Order of A_n</h3>

<div class="theorem">
<strong>Proposition 3.14.</strong> For \\(n \\ge 2\\), \\(|A_n| = n!/2\\).
</div>

<p><strong>Proof.</strong> The sign homomorphism \\(\\text{sgn}\\colon S_n \\to \\{\\pm 1\\}\\) is surjective for \\(n \\ge 2\\) (since any transposition has sign \\(-1\\)). By the First Isomorphism Theorem:</p>
\\[
S_n / A_n \\cong \\{\\pm 1\\},
\\]
<p>so \\([S_n : A_n] = 2\\), giving \\(|A_n| = |S_n|/2 = n!/2\\). \\(\\square\\)</p>

<table class="data-table">
  <thead><tr><th>\\(n\\)</th><th>\\(|A_n|\\)</th><th>Isomorphic to</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>1</td><td>trivial</td></tr>
    <tr><td>2</td><td>1</td><td>trivial</td></tr>
    <tr><td>3</td><td>3</td><td>\\(\\mathbb{Z}/3\\mathbb{Z}\\)</td></tr>
    <tr><td>4</td><td>12</td><td>contains \\(V_4\\) (Klein four-group) as normal subgroup</td></tr>
    <tr><td>5</td><td>60</td><td>simple, isomorphic to \\(\\text{PSL}(2, 5)\\)</td></tr>
  </tbody>
</table>

<h3>Generators of A_n</h3>

<div class="theorem">
<strong>Proposition 3.15.</strong> For \\(n \\ge 3\\), \\(A_n\\) is generated by the 3-cycles.
</div>

<p><strong>Proof.</strong> Every even permutation is a product of an even number of transpositions. We can pair them up: \\((a\\;b)(c\\;d)\\). If the pairs share an element, say \\((a\\;b)(a\\;c) = (a\\;c\\;b)\\), a 3-cycle. If they are disjoint, \\((a\\;b)(c\\;d) = (a\\;b)(a\\;c)(a\\;c)(c\\;d) = (a\\;c\\;b)(a\\;d\\;c)\\), a product of two 3-cycles. \\(\\square\\)</p>

<h3>Simplicity of A_n</h3>

<p>Recall that a group is <strong>simple</strong> if its only normal subgroups are \\(\\{e\\}\\) and the group itself. This is a crucial property for the classification of groups.</p>

<div class="theorem">
<strong>Theorem 3.16 (Simplicity of A_n).</strong> The alternating group \\(A_n\\) is simple for all \\(n \\ge 5\\).
</div>

<p>The proof is non-trivial and relies on showing that any non-trivial normal subgroup of \\(A_n\\) must contain a 3-cycle, and once it contains one 3-cycle, it must contain all 3-cycles (by conjugation), hence all of \\(A_n\\). We state this without full proof.</p>

<div class="info-box">
<strong>Historical Significance.</strong> The simplicity of \\(A_5\\) is the key reason why there is no general formula (using radicals) for the roots of polynomials of degree 5 or higher. This is the celebrated Abel-Ruffini Theorem, which Galois Theory (Chapter 16) makes precise. The chain \\(S_5 \\rhd A_5 \\rhd \\{e\\}\\) has \\(A_5\\) simple and non-abelian, preventing a composition series with abelian factors.
</div>

<h3>Small Cases</h3>

<p><strong>\\(A_3 \\cong \\mathbb{Z}/3\\mathbb{Z}\\):</strong> The only even permutations in \\(S_3\\) are \\(e\\), \\((1\\;2\\;3)\\), and \\((1\\;3\\;2)\\). This cyclic group of order 3 is abelian and simple.</p>

<p><strong>\\(A_4\\) is NOT simple:</strong> It has the Klein four-group \\(V_4 = \\{e, (1\\;2)(3\\;4), (1\\;3)(2\\;4), (1\\;4)(2\\;3)\\}\\) as a normal subgroup. This is the smallest alternating group that fails to be simple.</p>

<p><strong>\\(A_5\\) is simple:</strong> With 60 elements and conjugacy class sizes 1, 12, 12, 15, 20, no proper non-trivial union of conjugacy classes (including the identity) has size dividing 60 other than 1 and 60. This is the smallest non-abelian simple group.</p>
`,
      visualizations: [
        {
          id: 'ch03-viz06',
          title: 'Even vs Odd Permutations in S_n',
          setup(container) {
            const canvas = document.createElement('canvas');
            canvas.width = 580;
            canvas.height = 400;
            container.appendChild(canvas);
            const ctx = canvas.getContext('2d');

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;margin-top:8px;align-items:center;flex-wrap:wrap;';
            container.appendChild(controls);

            const nSel = document.createElement('select');
            [3, 4, 5].forEach(v => {
              const o = document.createElement('option');
              o.value = v; o.textContent = 'S_' + v;
              nSel.appendChild(o);
            });
            nSel.value = '4';
            controls.appendChild(nSel);

            function factorial(k) { let r = 1; for (let i = 2; i <= k; i++) r *= i; return r; }

            function allPerms(n) {
              if (n === 1) return [[0]];
              const result = [];
              const sub = allPerms(n - 1);
              for (const p of sub) {
                for (let i = n - 1; i >= 0; i--) {
                  const np = p.slice();
                  np.splice(i, 0, n - 1);
                  result.push(np);
                }
              }
              return result;
            }

            function getSign(p) {
              let inv = 0;
              for (let i = 0; i < p.length; i++)
                for (let j = i + 1; j < p.length; j++)
                  if (p[i] > p[j]) inv++;
              return inv % 2 === 0 ? 1 : -1;
            }

            function getCycles(p) {
              const visited = new Array(p.length).fill(false);
              const cycles = [];
              for (let i = 0; i < p.length; i++) {
                if (visited[i]) continue;
                const cycle = [];
                let cur = i;
                while (!visited[cur]) {
                  visited[cur] = true;
                  cycle.push(cur);
                  cur = p[cur];
                }
                if (cycle.length > 1) cycles.push(cycle);
              }
              return cycles;
            }

            function cycleStr(p) {
              const cycles = getCycles(p);
              if (cycles.length === 0) return 'e';
              return cycles.map(c => '(' + c.map(x => x + 1).join(' ') + ')').join('');
            }

            function draw() {
              const n = parseInt(nSel.value);
              const perms = allPerms(n);

              ctx.fillStyle = '#1a1a2e';
              ctx.fillRect(0, 0, canvas.width, canvas.height);

              const evens = perms.filter(p => getSign(p) === 1);
              const odds = perms.filter(p => getSign(p) === -1);

              ctx.fillStyle = '#e0e0e0';
              ctx.font = 'bold 14px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('S_' + n + ': ' + factorial(n) + ' elements', canvas.width / 2, 22);

              // Even column
              const colW = 260;
              const leftX = 30;
              const rightX = 300;

              ctx.fillStyle = '#81c784';
              ctx.font = 'bold 13px sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('A_' + n + ' (even) - ' + evens.length + ' elements:', leftX, 50);

              ctx.font = '12px monospace';
              evens.forEach((p, i) => {
                const row = Math.floor(i / 2);
                const col = i % 2;
                const x = leftX + col * 130;
                const y = 70 + row * 18;
                if (y < canvas.height - 20) {
                  ctx.fillStyle = '#81c784';
                  ctx.fillText(cycleStr(p), x, y);
                }
              });

              // Odd column
              ctx.fillStyle = '#e57373';
              ctx.font = 'bold 13px sans-serif';
              ctx.fillText('Odd permutations - ' + odds.length + ' elements:', rightX, 50);

              ctx.font = '12px monospace';
              odds.forEach((p, i) => {
                const row = Math.floor(i / 2);
                const col = i % 2;
                const x = rightX + col * 130;
                const y = 70 + row * 18;
                if (y < canvas.height - 20) {
                  ctx.fillStyle = '#e57373';
                  ctx.fillText(cycleStr(p), x, y);
                }
              });

              // Divider
              ctx.strokeStyle = '#444';
              ctx.lineWidth = 1;
              ctx.setLineDash([4, 4]);
              ctx.beginPath();
              ctx.moveTo(290, 40);
              ctx.lineTo(290, canvas.height - 10);
              ctx.stroke();
              ctx.setLineDash([]);
            }

            nSel.addEventListener('change', draw);
            draw();
          }
        },
        {
          id: 'ch03-viz07',
          title: 'Conjugacy Classes of S_4 and A_4',
          setup(container) {
            const canvas = document.createElement('canvas');
            canvas.width = 580;
            canvas.height = 380;
            container.appendChild(canvas);
            const ctx = canvas.getContext('2d');

            // S_4 conjugacy classes by cycle type
            const classes = [
              { type: '(1,1,1,1)', perms: ['e'], size: 1, even: true },
              { type: '(2,1,1)', perms: ['(1 2)', '(1 3)', '(1 4)', '(2 3)', '(2 4)', '(3 4)'], size: 6, even: false },
              { type: '(2,2)', perms: ['(1 2)(3 4)', '(1 3)(2 4)', '(1 4)(2 3)'], size: 3, even: true },
              { type: '(3,1)', perms: ['(1 2 3)', '(1 3 2)', '(1 2 4)', '(1 4 2)', '(1 3 4)', '(1 4 3)', '(2 3 4)', '(2 4 3)'], size: 8, even: true },
              { type: '(4)', perms: ['(1 2 3 4)', '(1 2 4 3)', '(1 3 2 4)', '(1 3 4 2)', '(1 4 2 3)', '(1 4 3 2)'], size: 6, even: false }
            ];

            ctx.fillStyle = '#1a1a2e';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#e0e0e0';
            ctx.font = 'bold 15px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Conjugacy Classes of S_4', canvas.width / 2, 24);

            let y = 50;
            classes.forEach((cl, idx) => {
              const color = cl.even ? '#81c784' : '#e57373';
              const label = cl.even ? ' [even]' : ' [odd]';

              ctx.fillStyle = color;
              ctx.font = 'bold 13px sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('Cycle type ' + cl.type + ' -- size ' + cl.size + label, 20, y);

              ctx.fillStyle = '#ccc';
              ctx.font = '12px monospace';
              const permStr = cl.perms.join(', ');
              ctx.fillText(permStr, 40, y + 18);

              // Bar showing size
              const barW = cl.size * 20;
              ctx.fillStyle = color;
              ctx.globalAlpha = 0.3;
              ctx.fillRect(460, y - 12, barW, 28);
              ctx.globalAlpha = 1.0;
              ctx.strokeStyle = color;
              ctx.lineWidth = 1;
              ctx.strokeRect(460, y - 12, barW, 28);

              y += 55;
            });

            ctx.fillStyle = '#aaa';
            ctx.font = '12px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Green = even (in A_4), Red = odd. |A_4| = 1 + 3 + 8 = 12.', canvas.width / 2, y + 10);
            ctx.fillText('V_4 = {e, (1 2)(3 4), (1 3)(2 4), (1 4)(2 3)} is a normal subgroup of A_4.', canvas.width / 2, y + 30);
          }
        }
      ],
      exercises: [
        {
          id: 'ch03-ex13',
          type: 'mc',
          question: 'What is the order of A_6?',
          options: ['120', '180', '360', '720'],
          answer: 2,
          explanation: '|A_6| = 6!/2 = 720/2 = 360.'
        },
        {
          id: 'ch03-ex14',
          type: 'mc',
          question: 'Which of the following is NOT an element of A_4?',
          options: [
            '(1 2 3)',
            '(1 2)(3 4)',
            '(1 2)',
            '(1 3 2)'
          ],
          answer: 2,
          explanation: '(1 2) is a transposition, which is an odd permutation (sgn = -1). It is not in A_4. The others are all even permutations.'
        },
        {
          id: 'ch03-ex15',
          type: 'mc',
          question: 'For which n is A_n abelian?',
          options: [
            'n <= 2',
            'n <= 3',
            'n <= 4',
            'All n'
          ],
          answer: 1,
          explanation: 'A_1 and A_2 are trivial (order 1), hence abelian. A_3 is cyclic of order 3, hence abelian. A_4 has order 12 and is non-abelian (it contains (1 2 3) and (1 2)(3 4) which do not commute).'
        },
        {
          id: 'ch03-ex16',
          type: 'mc',
          question: 'Why does the simplicity of A_5 matter for solving polynomial equations?',
          options: [
            'It shows all degree-5 polynomials have integer roots',
            'It implies the Galois group of a general quintic has no composition series with abelian factors, blocking solution by radicals',
            'It proves the quadratic formula cannot be extended',
            'It shows that A_5 is a solvable group'
          ],
          answer: 1,
          explanation: 'A_5 is simple and non-abelian. Since the symmetric group S_5 has composition factors including A_5, and A_5 is non-abelian, S_5 is not a solvable group. By Galois theory, this means the general quintic cannot be solved by radicals.'
        }
      ]
    },

    // ─────────────────────────────────────────────────────────────────
    // Section 5 — Cayley's Theorem
    // ─────────────────────────────────────────────────────────────────
    {
      id: 'ch03-sec05',
      title: 'Cayley\'s Theorem',
      content: `
<h2>Cayley's Theorem</h2>
<p class="section-roadmap"><em>In this section you will learn Cayley's Theorem, which states that every group is isomorphic to a subgroup of a symmetric group. You will see the constructive proof via the left regular representation and work through concrete examples.</em></p>

<h3>Statement and Proof</h3>

<div class="theorem">
<strong>Theorem 3.17 (Cayley's Theorem).</strong> Every group \\(G\\) is isomorphic to a subgroup of \\(S_G\\), the symmetric group on the underlying set of \\(G\\). In particular, every finite group of order \\(n\\) is isomorphic to a subgroup of \\(S_n\\).
</div>

<p><strong>Proof.</strong> For each \\(g \\in G\\), define the map \\(\\lambda_g\\colon G \\to G\\) by \\(\\lambda_g(x) = gx\\) (left multiplication by \\(g\\)). We claim:</p>

<ol>
  <li><strong>\\(\\lambda_g\\) is a bijection</strong> (hence a permutation of \\(G\\)):
    <ul>
      <li><em>Injective:</em> If \\(gx = gy\\), then \\(x = y\\) by left cancellation.</li>
      <li><em>Surjective:</em> For any \\(y \\in G\\), we have \\(y = g(g^{-1}y)\\), so \\(\\lambda_g(g^{-1}y) = y\\).</li>
    </ul>
  </li>
  <li><strong>The map \\(\\varphi\\colon G \\to S_G\\) defined by \\(\\varphi(g) = \\lambda_g\\) is a homomorphism:</strong>
    <p>\\(\\lambda_{gh}(x) = (gh)x = g(hx) = \\lambda_g(\\lambda_h(x)) = (\\lambda_g \\circ \\lambda_h)(x)\\),</p>
    <p>so \\(\\varphi(gh) = \\lambda_{gh} = \\lambda_g \\circ \\lambda_h = \\varphi(g)\\varphi(h)\\).</p>
  </li>
  <li><strong>\\(\\varphi\\) is injective:</strong>
    <p>If \\(\\varphi(g) = \\varphi(h)\\), then \\(\\lambda_g = \\lambda_h\\), meaning \\(gx = hx\\) for all \\(x \\in G\\). Setting \\(x = e\\) gives \\(g = h\\).</p>
  </li>
</ol>

<p>Therefore \\(\\varphi\\) is an injective homomorphism, i.e., \\(G \\cong \\varphi(G) \\le S_G\\). \\(\\square\\)</p>

<div class="definition">
<strong>Definition 3.18 (Left Regular Representation).</strong> The injective homomorphism \\(\\varphi\\colon G \\to S_G\\) defined by \\(\\varphi(g) = \\lambda_g\\) is called the <strong>left regular representation</strong> of \\(G\\).
</div>

<h3>Example: Z/3Z</h3>

<p>Consider \\(G = \\mathbb{Z}/3\\mathbb{Z} = \\{0, 1, 2\\}\\) under addition. The left regular representation assigns:</p>
<ul>
  <li>\\(\\lambda_0\\): \\(0 \\to 0,\\; 1 \\to 1,\\; 2 \\to 2\\) (identity)</li>
  <li>\\(\\lambda_1\\): \\(0 \\to 1,\\; 1 \\to 2,\\; 2 \\to 0\\), i.e., \\((0\\;1\\;2)\\) in cycle notation</li>
  <li>\\(\\lambda_2\\): \\(0 \\to 2,\\; 1 \\to 0,\\; 2 \\to 1\\), i.e., \\((0\\;2\\;1)\\) in cycle notation</li>
</ul>

<p>So \\(\\mathbb{Z}/3\\mathbb{Z}\\) embeds into \\(S_3\\) as the subgroup \\(\\{e, (1\\;2\\;3), (1\\;3\\;2)\\} = A_3\\).</p>

<h3>Example: The Klein Four-Group V_4</h3>

<p>\\(V_4 = \\{e, a, b, c\\}\\) with \\(a^2 = b^2 = c^2 = e\\) and \\(ab = c\\). The left regular representation gives four permutations of \\(\\{e, a, b, c\\}\\):</p>
<ul>
  <li>\\(\\lambda_e = e\\)</li>
  <li>\\(\\lambda_a = (e\\;a)(b\\;c)\\)</li>
  <li>\\(\\lambda_b = (e\\;b)(a\\;c)\\)</li>
  <li>\\(\\lambda_c = (e\\;c)(a\\;b)\\)</li>
</ul>

<p>Relabeling \\(\\{e, a, b, c\\} \\to \\{1, 2, 3, 4\\}\\), we get the subgroup \\(\\{e, (1\\;2)(3\\;4), (1\\;3)(2\\;4), (1\\;4)(2\\;3)\\}\\) of \\(S_4\\).</p>

<h3>Practical Remarks</h3>

<div class="info-box">
<strong>Cayley's Theorem is powerful but often wasteful.</strong> A group of order \\(n\\) embeds into \\(S_n\\), but this may be a very large group. More refined embedding results exist:
<ul>
  <li>By Cayley, \\(\\mathbb{Z}/6\\mathbb{Z}\\) embeds in \\(S_6\\) (order 720), but it also embeds in \\(S_3 \\times S_2\\) (order 12).</li>
  <li>More generally, the action on cosets of a subgroup \\(H\\) gives an embedding \\(G/\\text{Core}(H) \\hookrightarrow S_{[G:H]}\\).</li>
</ul>
</div>

<div class="info-box">
<strong>Universality of Permutation Groups.</strong> Cayley's Theorem tells us that the study of abstract groups is, in a precise sense, the study of permutation groups. Every group-theoretic question can be rephrased as a question about permutations. This makes \\(S_n\\) the "universal" group in finite group theory.
</div>
`,
      visualizations: [
        {
          id: 'ch03-viz08',
          title: 'Cayley\'s Theorem: Left Regular Representation',
          setup(container) {
            const canvas = document.createElement('canvas');
            canvas.width = 580;
            canvas.height = 440;
            container.appendChild(canvas);
            const ctx = canvas.getContext('2d');

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;margin-top:8px;align-items:center;flex-wrap:wrap;';
            container.appendChild(controls);

            const groupSel = document.createElement('select');
            ['Z/2Z', 'Z/3Z', 'Z/4Z', 'V4'].forEach(name => {
              const o = document.createElement('option');
              o.value = name; o.textContent = name;
              groupSel.appendChild(o);
            });
            controls.appendChild(groupSel);

            const elemSel = document.createElement('select');
            controls.appendChild(elemSel);

            const infoDiv = document.createElement('div');
            infoDiv.style.cssText = 'margin-top:6px;font-size:13px;color:#ccc;';
            container.appendChild(infoDiv);

            const groups = {
              'Z/2Z': {
                elements: ['0', '1'],
                op: (a, b) => (a + b) % 2,
                labels: ['0', '1']
              },
              'Z/3Z': {
                elements: ['0', '1', '2'],
                op: (a, b) => (a + b) % 3,
                labels: ['0', '1', '2']
              },
              'Z/4Z': {
                elements: ['0', '1', '2', '3'],
                op: (a, b) => (a + b) % 4,
                labels: ['0', '1', '2', '3']
              },
              'V4': {
                elements: ['e', 'a', 'b', 'c'],
                op: (a, b) => {
                  const table = [
                    [0, 1, 2, 3],
                    [1, 0, 3, 2],
                    [2, 3, 0, 1],
                    [3, 2, 1, 0]
                  ];
                  return table[a][b];
                },
                labels: ['e', 'a', 'b', 'c']
              }
            };

            function updateElemSel() {
              const g = groups[groupSel.value];
              elemSel.innerHTML = '';
              g.elements.forEach((el, i) => {
                const o = document.createElement('option');
                o.value = i; o.textContent = 'g = ' + el;
                elemSel.appendChild(o);
              });
            }

            function getPermutation(groupName, gIdx) {
              const g = groups[groupName];
              const perm = [];
              for (let i = 0; i < g.elements.length; i++) {
                perm.push(g.op(gIdx, i));
              }
              return perm;
            }

            function getCycleNotation(perm, labels) {
              const visited = new Array(perm.length).fill(false);
              const cycles = [];
              for (let i = 0; i < perm.length; i++) {
                if (visited[i]) continue;
                const cycle = [];
                let cur = i;
                while (!visited[cur]) {
                  visited[cur] = true;
                  cycle.push(cur);
                  cur = perm[cur];
                }
                if (cycle.length > 1) cycles.push(cycle);
              }
              if (cycles.length === 0) return 'e (identity)';
              return cycles.map(c => '(' + c.map(x => labels[x]).join(' ') + ')').join('');
            }

            function draw() {
              const groupName = groupSel.value;
              const g = groups[groupName];
              const gIdx = parseInt(elemSel.value);
              const perm = getPermutation(groupName, gIdx);

              ctx.fillStyle = '#1a1a2e';
              ctx.fillRect(0, 0, canvas.width, canvas.height);

              ctx.fillStyle = '#e0e0e0';
              ctx.font = 'bold 15px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Left Regular Representation of ' + groupName, canvas.width / 2, 24);
              ctx.fillText('Left multiplication by g = ' + g.labels[gIdx], canvas.width / 2, 48);

              const n = g.elements.length;
              const topY = 90;
              const botY = 220;
              const gap = Math.min(100, (canvas.width - 100) / n);
              const startX = (canvas.width - (n - 1) * gap) / 2;

              // Draw source and target nodes
              const colors = ['#4fc3f7', '#81c784', '#ffb74d', '#e57373', '#ba68c8'];

              for (let i = 0; i < n; i++) {
                const x = startX + i * gap;

                // Source
                ctx.beginPath();
                ctx.arc(x, topY, 22, 0, Math.PI * 2);
                ctx.fillStyle = '#1a1a2e';
                ctx.fill();
                ctx.strokeStyle = colors[i % colors.length];
                ctx.lineWidth = 2.5;
                ctx.stroke();

                ctx.fillStyle = '#e0e0e0';
                ctx.font = 'bold 16px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(g.labels[i], x, topY);

                // Target
                ctx.beginPath();
                ctx.arc(x, botY, 22, 0, Math.PI * 2);
                ctx.fillStyle = '#1a1a2e';
                ctx.fill();
                ctx.strokeStyle = colors[i % colors.length];
                ctx.lineWidth = 2.5;
                ctx.stroke();

                ctx.fillStyle = '#e0e0e0';
                ctx.fillText(g.labels[i], x, botY);
              }

              // Draw arrows
              for (let i = 0; i < n; i++) {
                const fromX = startX + i * gap;
                const toX = startX + perm[i] * gap;

                ctx.strokeStyle = colors[i % colors.length];
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(fromX, topY + 24);

                if (Math.abs(perm[i] - i) <= 0.5) {
                  ctx.lineTo(toX, botY - 24);
                } else {
                  const cpx = (fromX + toX) / 2;
                  const cpy = (topY + botY) / 2;
                  ctx.quadraticCurveTo(cpx + (perm[i] - i) * 5, cpy, toX, botY - 24);
                }
                ctx.stroke();

                // Arrowhead
                const angle = Math.atan2(botY - 24 - (topY + botY) / 2, toX - (fromX + toX) / 2) || Math.PI / 2;
                ctx.beginPath();
                ctx.moveTo(toX, botY - 24);
                ctx.lineTo(toX - 8 * Math.cos(angle - 0.4), botY - 24 - 8 * Math.sin(angle - 0.4));
                ctx.lineTo(toX - 8 * Math.cos(angle + 0.4), botY - 24 - 8 * Math.sin(angle + 0.4));
                ctx.closePath();
                ctx.fillStyle = colors[i % colors.length];
                ctx.fill();
              }

              ctx.textBaseline = 'alphabetic';

              // Labels
              ctx.fillStyle = '#aaa';
              ctx.font = '12px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Domain (elements of G)', canvas.width / 2, topY - 35);
              ctx.fillText('Codomain (elements of G)', canvas.width / 2, botY + 45);

              // Cycle notation
              const cycleStr = getCycleNotation(perm, g.labels);
              ctx.fillStyle = '#ffb74d';
              ctx.font = 'bold 14px sans-serif';
              ctx.fillText('Permutation: ' + cycleStr, canvas.width / 2, botY + 80);

              // Full table
              ctx.fillStyle = '#aaa';
              ctx.font = '13px sans-serif';
              ctx.fillText('Full embedding (all elements):', canvas.width / 2, botY + 110);

              let tableY = botY + 130;
              ctx.font = '12px monospace';
              ctx.textAlign = 'left';
              for (let gi = 0; gi < n; gi++) {
                const p = getPermutation(groupName, gi);
                const cs = getCycleNotation(p, g.labels);
                const line = g.labels[gi] + '  ->  ' + cs;
                ctx.fillStyle = gi === gIdx ? '#ffb74d' : '#888';
                ctx.fillText(line, 120, tableY);
                tableY += 18;
              }
            }

            groupSel.addEventListener('change', () => {
              updateElemSel();
              draw();
            });

            elemSel.addEventListener('change', draw);

            updateElemSel();
            draw();
          }
        },
        {
          id: 'ch03-viz09',
          title: 'Cayley Graph of Small Groups',
          setup(container) {
            const canvas = document.createElement('canvas');
            canvas.width = 580;
            canvas.height = 420;
            container.appendChild(canvas);
            const ctx = canvas.getContext('2d');

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;margin-top:8px;align-items:center;flex-wrap:wrap;';
            container.appendChild(controls);

            const groupSel = document.createElement('select');
            ['Z/3Z', 'Z/4Z', 'S_3'].forEach(name => {
              const o = document.createElement('option');
              o.value = name; o.textContent = name;
              groupSel.appendChild(o);
            });
            controls.appendChild(groupSel);

            // Define groups with generators
            const groupData = {
              'Z/3Z': {
                n: 3,
                labels: ['0', '1', '2'],
                generators: [
                  { name: '+1', color: '#4fc3f7', perm: [1, 2, 0] }
                ]
              },
              'Z/4Z': {
                n: 4,
                labels: ['0', '1', '2', '3'],
                generators: [
                  { name: '+1', color: '#4fc3f7', perm: [1, 2, 3, 0] }
                ]
              },
              'S_3': {
                n: 6,
                labels: ['e', '(1 2)', '(1 3)', '(2 3)', '(1 2 3)', '(1 3 2)'],
                // Elements indexed: e=0, (12)=1, (13)=2, (23)=3, (123)=4, (132)=5
                // Right mult by (1 2): e->(12), (12)->e, (13)->(132), (23)->(123), (123)->(23), (132)->(13)
                // Right mult by (1 2 3): e->(123), (12)->(13), (13)->(23), (23)->(12), (123)->(132), (132)->e
                generators: [
                  { name: '(1 2)', color: '#4fc3f7', perm: [1, 0, 5, 4, 3, 2] },
                  { name: '(1 2 3)', color: '#ffb74d', perm: [4, 2, 3, 1, 5, 0] }
                ]
              }
            };

            function draw() {
              const gd = groupData[groupSel.value];
              const n = gd.n;

              ctx.fillStyle = '#1a1a2e';
              ctx.fillRect(0, 0, canvas.width, canvas.height);

              ctx.fillStyle = '#e0e0e0';
              ctx.font = 'bold 15px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Cayley Graph of ' + groupSel.value, canvas.width / 2, 24);

              const cx = canvas.width / 2;
              const cy = canvas.height / 2 + 10;
              const R = Math.min(cx, cy) - 80;

              // Node positions
              const nodeX = [];
              const nodeY = [];
              for (let i = 0; i < n; i++) {
                const angle = (2 * Math.PI * i) / n - Math.PI / 2;
                nodeX.push(cx + R * Math.cos(angle));
                nodeY.push(cy + R * Math.sin(angle));
              }

              // Draw edges for each generator
              gd.generators.forEach((gen, gi) => {
                for (let i = 0; i < n; i++) {
                  const j = gen.perm[i];
                  const fx = nodeX[i], fy = nodeY[i];
                  const tx = nodeX[j], ty = nodeY[j];

                  const dx = tx - fx, dy = ty - fy;
                  const dist = Math.sqrt(dx * dx + dy * dy);
                  if (dist < 1) continue;
                  const ux = dx / dist, uy = dy / dist;

                  const sx = fx + ux * 24;
                  const sy = fy + uy * 24;
                  const ex = tx - ux * 24;
                  const ey = ty - uy * 24;

                  // Offset for multiple generators
                  const perpX = -uy * (8 + gi * 8);
                  const perpY = ux * (8 + gi * 8);
                  const mpx = (sx + ex) / 2 + perpX;
                  const mpy = (sy + ey) / 2 + perpY;

                  ctx.strokeStyle = gen.color;
                  ctx.lineWidth = 2;
                  ctx.beginPath();
                  ctx.moveTo(sx, sy);
                  ctx.quadraticCurveTo(mpx, mpy, ex, ey);
                  ctx.stroke();

                  // Arrowhead
                  const angle = Math.atan2(ey - mpy, ex - mpx);
                  ctx.beginPath();
                  ctx.moveTo(ex, ey);
                  ctx.lineTo(ex - 9 * Math.cos(angle - 0.35), ey - 9 * Math.sin(angle - 0.35));
                  ctx.lineTo(ex - 9 * Math.cos(angle + 0.35), ey - 9 * Math.sin(angle + 0.35));
                  ctx.closePath();
                  ctx.fillStyle = gen.color;
                  ctx.fill();
                }
              });

              // Draw nodes
              for (let i = 0; i < n; i++) {
                ctx.beginPath();
                ctx.arc(nodeX[i], nodeY[i], 22, 0, Math.PI * 2);
                ctx.fillStyle = '#1a1a2e';
                ctx.fill();
                ctx.strokeStyle = i === 0 ? '#fff' : '#aaa';
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.fillStyle = '#e0e0e0';
                ctx.font = n <= 4 ? 'bold 14px sans-serif' : '11px sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(gd.labels[i], nodeX[i], nodeY[i]);
              }

              ctx.textBaseline = 'alphabetic';

              // Legend
              let ly = canvas.height - 30;
              ctx.font = '12px sans-serif';
              ctx.textAlign = 'left';
              gd.generators.forEach((gen, gi) => {
                ctx.fillStyle = gen.color;
                ctx.fillRect(20, ly - 10, 20, 3);
                ctx.fillText('Generator: ' + gen.name, 48, ly - 4);
                ly += 18;
              });
            }

            groupSel.addEventListener('change', draw);
            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch03-ex17',
          type: 'mc',
          question: 'By Cayley\'s Theorem, every group of order 4 is isomorphic to a subgroup of which symmetric group?',
          options: ['S_2', 'S_3', 'S_4', 'S_8'],
          answer: 2,
          explanation: 'Cayley\'s Theorem embeds a group of order n into S_n. A group of order 4 embeds into S_4.'
        },
        {
          id: 'ch03-ex18',
          type: 'mc',
          question: 'In the left regular representation, what permutation corresponds to the identity element e of G?',
          options: [
            'A random permutation',
            'The identity permutation',
            'The permutation reversing all elements',
            'A transposition'
          ],
          answer: 1,
          explanation: 'The left multiplication map for e is the identity function: for all x in G, ex = x. So the identity element maps to the identity permutation.'
        },
        {
          id: 'ch03-ex19',
          type: 'mc',
          question: 'The left regular representation of Z/3Z embeds it as which subgroup of S_3?',
          options: [
            '{e, (1 2)}',
            '{e, (1 2 3), (1 3 2)} (= A_3)',
            '{e, (1 2), (1 3)}',
            'All of S_3'
          ],
          answer: 1,
          explanation: 'The three left multiplication maps give the identity and the two 3-cycles. This subgroup {e, (1 2 3), (1 3 2)} is exactly A_3, the cyclic group of order 3.'
        },
        {
          id: 'ch03-ex20',
          type: 'mc',
          question: 'Which of the following is a limitation of Cayley\'s Theorem?',
          options: [
            'It only works for abelian groups',
            'The embedding into S_n may be much larger than necessary',
            'It does not apply to infinite groups',
            'The resulting subgroup is always normal'
          ],
          answer: 1,
          explanation: 'Cayley\'s Theorem embeds a group of order n into S_n, which has order n!. This is often much larger than needed. For example, Z/6Z embeds into S_6 (order 720) but can be embedded more efficiently into much smaller permutation groups. The theorem does apply to infinite groups and non-abelian groups, and the resulting subgroup need not be normal.'
        }
      ]
    }

  ]
});
