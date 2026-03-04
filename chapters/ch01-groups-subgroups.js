window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 'ch01',
  number: 1,
  title: 'Groups and Subgroups',
  subtitle: 'Definition, examples, subgroup criteria, order of elements',
  sections: [

    // ─── SECTION 1 ────────────────────────────────────────────────────────────
    {
      id: 'ch01-sec01',
      title: '1. Definition and First Examples',
      content: `
<h2>Definition and First Examples</h2>
<p class="section-roadmap"><em>In this section, we introduce the axioms that define a group, then survey the most important examples that will accompany us throughout the course.</em></p>

<div class="env-block intuition"><div class="env-title">Why Groups?</div><div class="env-body"><p>Groups capture the essence of <strong>symmetry</strong> and <strong>reversible operations</strong>. Whenever you have a collection of actions that can be composed, undone, and include a "do nothing" action, you are looking at a group. This single concept unifies number systems, geometric transformations, permutations, and much more.</p></div></div>

<div class="env-block definition"><div class="env-title">Definition 1.1 (Group)</div><div class="env-body">
<p>A <strong>group</strong> is a pair \\((G, \\cdot)\\) consisting of a set \\(G\\) together with a binary operation \\(\\cdot : G \\times G \\to G\\) satisfying the following axioms:</p>
<ol>
  <li><strong>Closure:</strong> For all \\(a, b \\in G\\), the product \\(a \\cdot b \\in G\\).</li>
  <li><strong>Associativity:</strong> For all \\(a, b, c \\in G\\), \\((a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)\\).</li>
  <li><strong>Identity:</strong> There exists an element \\(e \\in G\\) such that \\(e \\cdot a = a \\cdot e = a\\) for all \\(a \\in G\\).</li>
  <li><strong>Inverses:</strong> For each \\(a \\in G\\), there exists \\(a^{-1} \\in G\\) such that \\(a \\cdot a^{-1} = a^{-1} \\cdot a = e\\).</li>
</ol>
<p>If additionally \\(a \\cdot b = b \\cdot a\\) for all \\(a, b \\in G\\), the group is called <strong>abelian</strong> (or commutative).</p>
</div></div>

<div class="env-block remark"><div class="env-title">Notation Convention</div><div class="env-body">
<p>When the operation is clear, we write \\(ab\\) instead of \\(a \\cdot b\\). For abelian groups, we often use additive notation \\(a + b\\) with identity \\(0\\) and inverse \\(-a\\).</p>
</div></div>

<h3>The Big Examples</h3>

<div class="env-block example"><div class="env-title">Example 1.2 (Integer groups)</div><div class="env-body">
<p>\\((\\mathbb{Z}, +)\\) is an abelian group: closure and associativity of addition are standard, the identity is \\(0\\), and the inverse of \\(n\\) is \\(-n\\). Similarly, \\((\\mathbb{Q}, +)\\) and \\((\\mathbb{R}, +)\\) are abelian groups.</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 1.3 (Multiplicative groups)</div><div class="env-body">
<p>\\((\\mathbb{Q}^*, \\cdot)\\) is the set of nonzero rationals under multiplication. Identity is \\(1\\), and the inverse of \\(q\\) is \\(1/q\\). Note that we must exclude \\(0\\) since it has no multiplicative inverse. Similarly, \\((\\mathbb{R}^*, \\cdot)\\) and \\((\\mathbb{C}^*, \\cdot)\\) are groups.</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 1.4 (Integers modulo n)</div><div class="env-body">
<p>Fix \\(n \\geq 1\\). The set \\(\\mathbb{Z}/n\\mathbb{Z} = \\{0, 1, 2, \\ldots, n-1\\}\\) with addition modulo \\(n\\) forms an abelian group of order \\(n\\). For instance, in \\(\\mathbb{Z}/6\\mathbb{Z}\\), we have \\(4 + 5 = 3\\) since \\(9 \\equiv 3 \\pmod{6}\\).</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 1.5 (General linear group)</div><div class="env-body">
<p>\\(\\mathrm{GL}_n(\\mathbb{R})\\) is the set of all invertible \\(n \\times n\\) real matrices under matrix multiplication. The identity is the identity matrix \\(I_n\\). This group is <em>non-abelian</em> for \\(n \\geq 2\\): in general \\(AB \\neq BA\\).</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 1.6 (Symmetric group)</div><div class="env-body">
<p>\\(S_n\\) is the set of all bijections \\(\\{1, 2, \\ldots, n\\} \\to \\{1, 2, \\ldots, n\\}\\) (permutations) under composition. It has order \\(n!\\) and is non-abelian for \\(n \\geq 3\\). For example, \\(|S_3| = 6\\).</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 1.7 (Dihedral group, preview)</div><div class="env-body">
<p>The <strong>dihedral group</strong> \\(D_n\\) is the group of symmetries of a regular \\(n\\)-gon, consisting of \\(n\\) rotations and \\(n\\) reflections. It has order \\(2n\\). We will study this in detail in Section 5.</p>
</div></div>

<h3>Non-Examples</h3>

<div class="env-block warning"><div class="env-title">Non-Example</div><div class="env-body">
<p>\\((\\mathbb{Z}, \\cdot)\\) is <em>not</em> a group: the integer \\(2\\) has no multiplicative inverse in \\(\\mathbb{Z}\\) (since \\(1/2 \\notin \\mathbb{Z}\\)). Also, \\((\\mathbb{N}, +)\\) fails because there are no additive inverses (e.g., \\(-3 \\notin \\mathbb{N}\\)).</p>
</div></div>

<div class="env-block remark"><div class="env-title">Finite vs. Infinite</div><div class="env-body">
<p>A group is <strong>finite</strong> if \\(|G| < \\infty\\). The number \\(|G|\\) is called the <strong>order</strong> of the group. All of \\(\\mathbb{Z}/n\\mathbb{Z}\\), \\(S_n\\), and \\(D_n\\) are finite; \\(\\mathbb{Z}\\), \\(\\mathbb{Q}^*\\), and \\(\\mathrm{GL}_n(\\mathbb{R})\\) are infinite.</p>
</div></div>
`,
      visualizations: [
        {
          id: 'viz-cayley-table-zn',
          title: 'Cayley Table Explorer for Z/nZ',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const controls = document.createElement('div');
            controls.style.cssText = 'margin-bottom:10px;display:flex;align-items:center;gap:12px;';
            controls.innerHTML = '<label style="color:#c9d1d9;font-size:14px;">Group order n: </label>' +
              '<input type="range" id="zn-slider" min="2" max="10" value="4" style="width:150px;">' +
              '<span id="zn-label" style="color:#58a6ff;font-weight:bold;font-size:14px;">4</span>';
            wrap.appendChild(controls);

            const viz = new VizEngine(wrap, { width: 600, height: 420 });

            const slider = controls.querySelector('#zn-slider');
            const label = controls.querySelector('#zn-label');

            let highlightRow = -1;
            let highlightCol = -1;

            function draw() {
              const n = parseInt(slider.value);
              label.textContent = n;
              viz.clear();
              const ctx = viz.ctx;

              const cellSize = Math.min(45, Math.floor(500 / (n + 1)));
              const startX = 60;
              const startY = 50;

              // Title
              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Cayley Table for (Z/' + n + 'Z, +)', 300, 30);

              // Header row and column
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';

              // "+" symbol in corner
              ctx.fillStyle = '#bc8cff';
              ctx.fillText('+', startX + cellSize / 2, startY + cellSize / 2);

              for (let i = 0; i < n; i++) {
                // Top header
                ctx.fillStyle = '#58a6ff';
                ctx.fillText(String(i), startX + (i + 1) * cellSize + cellSize / 2, startY + cellSize / 2);
                // Left header
                ctx.fillText(String(i), startX + cellSize / 2, startY + (i + 1) * cellSize + cellSize / 2);
              }

              // Table cells
              ctx.font = '13px -apple-system,sans-serif';
              for (let r = 0; r < n; r++) {
                for (let c = 0; c < n; c++) {
                  const val = (r + c) % n;
                  const x = startX + (c + 1) * cellSize;
                  const y = startY + (r + 1) * cellSize;

                  // Background
                  if (r === highlightRow && c === highlightCol) {
                    ctx.fillStyle = '#58a6ff44';
                  } else if (r === highlightRow || c === highlightCol) {
                    ctx.fillStyle = '#58a6ff18';
                  } else {
                    ctx.fillStyle = (r + c) % 2 === 0 ? '#161b2208' : '#1a1a4015';
                  }
                  ctx.fillRect(x, y, cellSize, cellSize);

                  // Border
                  ctx.strokeStyle = '#30363d';
                  ctx.lineWidth = 0.5;
                  ctx.strokeRect(x, y, cellSize, cellSize);

                  // Value with color coding
                  const hue = (val / n) * 300;
                  ctx.fillStyle = 'hsl(' + hue + ', 70%, 65%)';
                  ctx.fillText(String(val), x + cellSize / 2, y + cellSize / 2);
                }
              }

              // Draw header borders
              ctx.strokeStyle = '#58a6ff55';
              ctx.lineWidth = 1;
              ctx.strokeRect(startX, startY, cellSize, cellSize * (n + 1));
              ctx.strokeRect(startX, startY, cellSize * (n + 1), cellSize);

              // Info text
              ctx.fillStyle = '#8b949e';
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              if (highlightRow >= 0 && highlightCol >= 0) {
                const res = (highlightRow + highlightCol) % n;
                ctx.fillText(highlightRow + ' + ' + highlightCol + ' = ' + (highlightRow + highlightCol) + ' mod ' + n + ' = ' + res, startX, startY + (n + 1) * cellSize + 25);
              } else {
                ctx.fillText('Hover over a cell to see the computation', startX, startY + (n + 1) * cellSize + 25);
              }

              ctx.fillText('Notice: every element appears exactly once in each row and column (Latin square property)', startX, startY + (n + 1) * cellSize + 45);
            }

            draw();
            slider.addEventListener('input', function() { highlightRow = -1; highlightCol = -1; draw(); });

            viz.canvas.addEventListener('mousemove', function(e) {
              const n = parseInt(slider.value);
              const cellSize = Math.min(45, Math.floor(500 / (n + 1)));
              const startX = 60;
              const startY = 50;
              const rect = viz.canvas.getBoundingClientRect();
              const mx = e.clientX - rect.left;
              const my = e.clientY - rect.top;

              const col = Math.floor((mx - startX) / cellSize) - 1;
              const row = Math.floor((my - startY) / cellSize) - 1;

              if (row >= 0 && row < n && col >= 0 && col < n) {
                highlightRow = row;
                highlightCol = col;
              } else {
                highlightRow = -1;
                highlightCol = -1;
              }
              draw();
            });
          }
        },
        {
          id: 'viz-group-axioms-checker',
          title: 'Group Axiom Checker',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const controls = document.createElement('div');
            controls.style.cssText = 'margin-bottom:10px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;';
            controls.innerHTML = '<label style="color:#c9d1d9;font-size:14px;">Check set: </label>' +
              '<select id="axiom-set" style="background:#161b22;color:#c9d1d9;border:1px solid #30363d;padding:4px 8px;border-radius:4px;">' +
              '<option value="z">Z (integers, +)</option>' +
              '<option value="zstar">Z \\ {0} (nonzero integers, x)</option>' +
              '<option value="n">N (natural numbers, +)</option>' +
              '<option value="qstar">Q* (nonzero rationals, x)</option>' +
              '<option value="z4">Z/4Z (+)</option>' +
              '</select>';
            wrap.appendChild(controls);

            const viz = new VizEngine(wrap, { width: 600, height: 350 });
            const sel = controls.querySelector('#axiom-set');

            const groupData = {
              z: { name: '(Z, +)', closure: true, assoc: true, identity: true, identityEl: '0', inverse: true, inverseDesc: '-n for each n', isGroup: true },
              zstar: { name: '(Z \\ {0}, *)', closure: true, assoc: true, identity: true, identityEl: '1', inverse: false, inverseDesc: '2 has no inverse in Z (1/2 not integer)', isGroup: false },
              n: { name: '(N, +)', closure: true, assoc: true, identity: true, identityEl: '0', inverse: false, inverseDesc: '3 has no inverse (-3 not in N)', isGroup: false },
              qstar: { name: '(Q*, *)', closure: true, assoc: true, identity: true, identityEl: '1', inverse: true, inverseDesc: '1/q for each q', isGroup: true },
              z4: { name: '(Z/4Z, +)', closure: true, assoc: true, identity: true, identityEl: '0', inverse: true, inverseDesc: '(4-a) mod 4 for each a', isGroup: true }
            };

            function draw() {
              viz.clear();
              const ctx = viz.ctx;
              const d = groupData[sel.value];

              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Axiom Check: ' + d.name, 300, 30);

              const axioms = [
                { name: 'Closure', pass: d.closure, note: d.closure ? 'Operation stays in the set' : 'Operation can leave the set' },
                { name: 'Associativity', pass: d.assoc, note: 'Standard arithmetic is associative' },
                { name: 'Identity', pass: d.identity, note: 'Identity element: ' + d.identityEl },
                { name: 'Inverses', pass: d.inverse, note: d.inverse ? d.inverseDesc : d.inverseDesc }
              ];

              for (let i = 0; i < axioms.length; i++) {
                const ax = axioms[i];
                const y = 70 + i * 60;

                // Status icon
                ctx.fillStyle = ax.pass ? '#3fb950' : '#f85149';
                ctx.font = 'bold 20px -apple-system,sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(ax.pass ? '\u2713' : '\u2717', 40, y + 5);

                // Axiom name
                ctx.fillStyle = '#c9d1d9';
                ctx.font = 'bold 14px -apple-system,sans-serif';
                ctx.fillText(ax.name, 75, y);

                // Note
                ctx.fillStyle = '#8b949e';
                ctx.font = '12px -apple-system,sans-serif';
                ctx.fillText(ax.note, 75, y + 20);
              }

              // Verdict
              const vy = 320;
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              if (d.isGroup) {
                ctx.fillStyle = '#3fb950';
                ctx.fillText('All axioms satisfied: ' + d.name + ' is a GROUP', 300, vy);
              } else {
                ctx.fillStyle = '#f85149';
                ctx.fillText('Axiom(s) fail: ' + d.name + ' is NOT a group', 300, vy);
              }
            }

            draw();
            sel.addEventListener('change', draw);
          }
        }
      ],
      exercises: [
        {
          id: 'ch01-sec01-ex01',
          type: 'mcq',
          question: 'Which of the following is NOT a group?',
          options: ['(Z, +)', '(Q*, *)', '(Z, *)', '(R*, *)'],
          answer: 2,
          explanation: '(Z, *) is not a group because most integers lack multiplicative inverses in Z. For instance, the inverse of 2 would be 1/2, which is not an integer.'
        },
        {
          id: 'ch01-sec01-ex02',
          type: 'mcq',
          question: 'What is the order of the symmetric group S_4?',
          options: ['4', '8', '16', '24'],
          answer: 3,
          explanation: '|S_n| = n!, so |S_4| = 4! = 24. S_4 consists of all permutations of {1, 2, 3, 4}.'
        },
        {
          id: 'ch01-sec01-ex03',
          type: 'mcq',
          question: 'Which of the following groups is abelian?',
          options: ['S_3', 'GL_2(R)', 'D_4', '(Z/7Z, +)'],
          answer: 3,
          explanation: '(Z/7Z, +) is abelian because addition mod 7 is commutative: a + b = b + a for all a, b. The groups S_3, GL_2(R), and D_4 are all non-abelian.'
        },
        {
          id: 'ch01-sec01-ex04',
          type: 'short-answer',
          question: 'Prove that if (G, *) is a group and a * a = a for some a in G, then a must be the identity element e.',
          hint: 'Multiply both sides by the inverse of a.',
          solution: 'Since a * a = a, multiply both sides on the right by a^{-1}: (a * a) * a^{-1} = a * a^{-1}. By associativity, a * (a * a^{-1}) = e, so a * e = e, giving a = e. Hence a must be the identity.'
        }
      ]
    },

    // ─── SECTION 2 ────────────────────────────────────────────────────────────
    {
      id: 'ch01-sec02',
      title: '2. Basic Properties',
      content: `
<h2>Basic Properties of Groups</h2>
<p class="section-roadmap"><em>In this section, we derive the fundamental consequences of the group axioms: uniqueness of the identity and inverses, cancellation laws, and the "shoes and socks" lemma.</em></p>

<div class="env-block theorem"><div class="env-title">Theorem 1.8 (Uniqueness of Identity)</div><div class="env-body">
<p>The identity element in a group \\(G\\) is unique.</p>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>Suppose \\(e\\) and \\(e'\\) are both identity elements. Then \\(e = e \\cdot e' = e'\\), where the first equality uses the fact that \\(e'\\) is an identity and the second uses the fact that \\(e\\) is an identity. \\(\\square\\)</p>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 1.9 (Uniqueness of Inverses)</div><div class="env-body">
<p>For each \\(a \\in G\\), the inverse \\(a^{-1}\\) is unique.</p>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>Suppose \\(b\\) and \\(c\\) are both inverses of \\(a\\). Then:
\\[b = b \\cdot e = b \\cdot (a \\cdot c) = (b \\cdot a) \\cdot c = e \\cdot c = c.\\]
Hence the inverse is unique. \\(\\square\\)</p>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 1.10 (Cancellation Laws)</div><div class="env-body">
<p>Let \\(G\\) be a group and \\(a, b, c \\in G\\). Then:</p>
<ul>
  <li><strong>Left cancellation:</strong> If \\(a \\cdot b = a \\cdot c\\), then \\(b = c\\).</li>
  <li><strong>Right cancellation:</strong> If \\(b \\cdot a = c \\cdot a\\), then \\(b = c\\).</li>
</ul>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>For left cancellation: if \\(a \\cdot b = a \\cdot c\\), multiply both sides on the left by \\(a^{-1}\\):
\\[a^{-1} \\cdot (a \\cdot b) = a^{-1} \\cdot (a \\cdot c) \\implies (a^{-1} \\cdot a) \\cdot b = (a^{-1} \\cdot a) \\cdot c \\implies e \\cdot b = e \\cdot c \\implies b = c.\\]
Right cancellation follows by multiplying on the right by \\(a^{-1}\\). \\(\\square\\)</p>
</div></div>

<div class="env-block proposition"><div class="env-title">Proposition 1.11 (Shoes and Socks Lemma)</div><div class="env-body">
<p>For all \\(a, b \\in G\\):
\\[(a \\cdot b)^{-1} = b^{-1} \\cdot a^{-1}.\\]</p>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>We verify that \\(b^{-1} \\cdot a^{-1}\\) satisfies the defining property of \\((ab)^{-1}\\):
\\[(a \\cdot b) \\cdot (b^{-1} \\cdot a^{-1}) = a \\cdot (b \\cdot b^{-1}) \\cdot a^{-1} = a \\cdot e \\cdot a^{-1} = a \\cdot a^{-1} = e.\\]
By uniqueness of inverses, \\((ab)^{-1} = b^{-1} a^{-1}\\). \\(\\square\\)</p>
</div></div>

<div class="env-block intuition"><div class="env-title">Why "Shoes and Socks"?</div><div class="env-body">
<p>To undo putting on socks then shoes, you take off shoes first, then socks. The order reverses! This is exactly \\((ab)^{-1} = b^{-1}a^{-1}\\). In an abelian group, the order does not matter, so \\((ab)^{-1} = a^{-1}b^{-1}\\) as well.</p>
</div></div>

<div class="env-block corollary"><div class="env-title">Corollary 1.12 (Inverse of inverse)</div><div class="env-body">
<p>For all \\(a \\in G\\): \\((a^{-1})^{-1} = a\\).</p>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>Since \\(a^{-1} \\cdot a = e\\), the element \\(a\\) is an inverse of \\(a^{-1}\\). By uniqueness of inverses, \\((a^{-1})^{-1} = a\\). \\(\\square\\)</p>
</div></div>

<div class="env-block proposition"><div class="env-title">Proposition 1.13 (Unique solutions)</div><div class="env-body">
<p>In a group \\(G\\), for any \\(a, b \\in G\\), each of the equations \\(a \\cdot x = b\\) and \\(y \\cdot a = b\\) has a unique solution.</p>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>For \\(a \\cdot x = b\\): the solution is \\(x = a^{-1} \\cdot b\\). Uniqueness follows from the left cancellation law.
For \\(y \\cdot a = b\\): the solution is \\(y = b \\cdot a^{-1}\\). Uniqueness follows from the right cancellation law. \\(\\square\\)</p>
</div></div>

<div class="env-block remark"><div class="env-title">Latin Square Property</div><div class="env-body">
<p>Proposition 1.13 implies that in the Cayley table of a finite group, every element appears exactly once in each row and exactly once in each column. In other words, the Cayley table is a <strong>Latin square</strong>. This is a powerful structural constraint, and you can observe it in the interactive Cayley table from Section 1.</p>
</div></div>

<h3>Powers of an Element</h3>

<div class="env-block definition"><div class="env-title">Definition 1.14 (Powers)</div><div class="env-body">
<p>For \\(a \\in G\\) and \\(n \\in \\mathbb{Z}\\), define:</p>
<ul>
  <li>\\(a^0 = e\\)</li>
  <li>\\(a^n = \\underbrace{a \\cdot a \\cdots a}_{n \\text{ times}}\\) for \\(n > 0\\)</li>
  <li>\\(a^{-n} = (a^{-1})^n\\) for \\(n > 0\\)</li>
</ul>
<p>The usual laws of exponents hold: \\(a^m \\cdot a^n = a^{m+n}\\) and \\((a^m)^n = a^{mn}\\) for all \\(m, n \\in \\mathbb{Z}\\).</p>
</div></div>
`,
      visualizations: [
        {
          id: 'viz-inverse-shoes-socks',
          title: 'Shoes and Socks Inverse Visualizer',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 600, height: 380 });

            let step = 0;
            const maxSteps = 5;

            function draw() {
              viz.clear();
              const ctx = viz.ctx;

              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Visualizing (ab)^{-1} = b^{-1} a^{-1}', 300, 25);

              const labels = [
                { text: 'Start: compute a * b', detail: 'Apply a, then apply b', color: '#58a6ff' },
                { text: 'Now undo: first undo b', detail: 'Apply b^{-1} (take off shoes first)', color: '#f0883e' },
                { text: 'Then undo a', detail: 'Apply a^{-1} (then take off socks)', color: '#3fb950' },
                { text: 'Result: back to start!', detail: '(ab)(b^{-1} a^{-1}) = e', color: '#bc8cff' },
                { text: 'General formula:', detail: '(ab)^{-1} = b^{-1} a^{-1}', color: '#d29922' }
              ];

              // Draw sequence of boxes
              const boxW = 100;
              const boxH = 50;
              const y0 = 80;
              const gap = 20;

              // Draw state boxes
              const states = ['e', 'a', 'ab', 'a', 'e'];
              const stateLabels = ['identity', 'after a', 'after ab', 'after b^{-1}', 'after a^{-1}'];
              const numStates = Math.min(step + 2, states.length);

              for (let i = 0; i < numStates; i++) {
                const x = 60 + i * (boxW + gap);
                const y = y0;

                // Box
                ctx.fillStyle = i <= step ? '#1a1a4055' : '#161b2222';
                ctx.strokeStyle = i === step ? labels[step].color : '#30363d';
                ctx.lineWidth = i === step ? 2.5 : 1;
                ctx.beginPath();
                ctx.roundRect(x, y, boxW, boxH, 6);
                ctx.fill();
                ctx.stroke();

                // State text
                ctx.fillStyle = '#c9d1d9';
                ctx.font = 'bold 14px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(states[i], x + boxW / 2, y + boxH / 2 - 2);

                // Label below
                ctx.fillStyle = '#8b949e';
                ctx.font = '10px -apple-system,sans-serif';
                ctx.fillText(stateLabels[i], x + boxW / 2, y + boxH + 14);

                // Arrow
                if (i > 0) {
                  const arrowX = x - gap / 2;
                  ctx.strokeStyle = '#58a6ff88';
                  ctx.lineWidth = 1.5;
                  ctx.beginPath();
                  ctx.moveTo(x - gap + 5, y + boxH / 2);
                  ctx.lineTo(x - 5, y + boxH / 2);
                  ctx.stroke();
                  ctx.beginPath();
                  ctx.moveTo(x - 5, y + boxH / 2);
                  ctx.lineTo(x - 12, y + boxH / 2 - 5);
                  ctx.moveTo(x - 5, y + boxH / 2);
                  ctx.lineTo(x - 12, y + boxH / 2 + 5);
                  ctx.stroke();
                }
              }

              // Current step description
              if (step < labels.length) {
                const info = labels[step];
                ctx.fillStyle = info.color;
                ctx.font = 'bold 15px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(info.text, 300, 200);
                ctx.fillStyle = '#8b949e';
                ctx.font = '13px -apple-system,sans-serif';
                ctx.fillText(info.detail, 300, 225);
              }

              // Shoes and socks analogy
              ctx.fillStyle = '#8b949e';
              ctx.font = '13px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Analogy: Put on socks (a), then shoes (b).', 300, 270);
              ctx.fillText('To undo: remove shoes (b^{-1}) first, then socks (a^{-1}).', 300, 290);

              // Navigation
              ctx.fillStyle = '#58a6ff';
              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillText('Click to advance (step ' + (step + 1) + '/' + maxSteps + ')', 300, 340);
            }

            draw();

            viz.canvas.addEventListener('click', function() {
              step = (step + 1) % maxSteps;
              draw();
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch01-sec02-ex01',
          type: 'mcq',
          question: 'In any group G, what is (a^{-1})^{-1}?',
          options: ['e', 'a^{-1}', 'a', 'a^2'],
          answer: 2,
          explanation: 'The inverse of a^{-1} is a, because a^{-1} * a = e. By uniqueness of inverses, (a^{-1})^{-1} = a.'
        },
        {
          id: 'ch01-sec02-ex02',
          type: 'mcq',
          question: 'If ab = ac in a group, what can we conclude?',
          options: ['a = e', 'b = c', 'b = a', 'Nothing without commutativity'],
          answer: 1,
          explanation: 'By the left cancellation law, ab = ac implies b = c. This holds in ALL groups, not just abelian ones.'
        },
        {
          id: 'ch01-sec02-ex03',
          type: 'short-answer',
          question: 'Prove that (abc)^{-1} = c^{-1} b^{-1} a^{-1} for elements a, b, c in a group G.',
          hint: 'Apply the shoes-and-socks lemma twice: first to (ab)c, then to ab.',
          solution: 'Write abc = (ab)c. By the shoes-and-socks lemma, ((ab)c)^{-1} = c^{-1}(ab)^{-1}. Applying the lemma again to (ab)^{-1} = b^{-1}a^{-1}, we get (abc)^{-1} = c^{-1} b^{-1} a^{-1}.'
        },
        {
          id: 'ch01-sec02-ex04',
          type: 'short-answer',
          question: 'Let G be a group in which a^2 = e for every a in G. Prove that G is abelian.',
          hint: 'Consider (ab)^2 = e and expand.',
          solution: 'Since a^2 = e for all a, every element is its own inverse: a^{-1} = a. Now for any a, b in G, we have (ab)^2 = e, i.e., abab = e. Multiply on the left by a and on the right by b: a(abab)b = ab, giving (a^2)(ba)(b^2) = ab, hence e * ba * e = ab, so ba = ab. Thus G is abelian.'
        }
      ]
    },

    // ─── SECTION 3 ────────────────────────────────────────────────────────────
    {
      id: 'ch01-sec03',
      title: '3. Subgroups',
      content: `
<h2>Subgroups</h2>
<p class="section-roadmap"><em>In this section, we define subgroups and develop practical tests for verifying subgroup membership. We also catalogue key examples.</em></p>

<div class="env-block intuition"><div class="env-title">Motivation</div><div class="env-body"><p>Just as subsets are to sets, subgroups are to groups. A subgroup is a subset that is itself a group under the inherited operation. Subgroups reveal the internal structure of a group, and much of group theory is devoted to understanding which subgroups a group possesses.</p></div></div>

<div class="env-block definition"><div class="env-title">Definition 1.15 (Subgroup)</div><div class="env-body">
<p>A subset \\(H \\subseteq G\\) is a <strong>subgroup</strong> of \\(G\\) (written \\(H \\leq G\\)) if \\(H\\) is itself a group under the operation of \\(G\\). Equivalently:</p>
<ol>
  <li>\\(H\\) is nonempty (\\(e \\in H\\)).</li>
  <li>\\(H\\) is closed under the group operation: \\(a, b \\in H \\implies ab \\in H\\).</li>
  <li>\\(H\\) is closed under inverses: \\(a \\in H \\implies a^{-1} \\in H\\).</li>
</ol>
</div></div>

<div class="env-block remark"><div class="env-title">Remark</div><div class="env-body">
<p>Associativity is automatically inherited from \\(G\\), so we do not need to check it separately for \\(H\\).</p>
</div></div>

<h3>Subgroup Tests</h3>

<div class="env-block theorem"><div class="env-title">Theorem 1.16 (Two-Step Subgroup Test)</div><div class="env-body">
<p>A nonempty subset \\(H \\subseteq G\\) is a subgroup if and only if:</p>
<ol>
  <li>For all \\(a, b \\in H\\), \\(ab \\in H\\). (Closure)</li>
  <li>For all \\(a \\in H\\), \\(a^{-1} \\in H\\). (Closed under inverses)</li>
</ol>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>If both conditions hold and \\(H \\neq \\emptyset\\), pick any \\(a \\in H\\). By (2), \\(a^{-1} \\in H\\). By (1), \\(e = a \\cdot a^{-1} \\in H\\). Now all four group axioms are satisfied: closure by (1), associativity inherited from \\(G\\), identity \\(e \\in H\\), and inverses by (2). \\(\\square\\)</p>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 1.17 (One-Step Subgroup Test)</div><div class="env-body">
<p>A nonempty subset \\(H \\subseteq G\\) is a subgroup if and only if for all \\(a, b \\in H\\), \\(ab^{-1} \\in H\\).</p>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>(<strong>Only if</strong>) If \\(H \\leq G\\) and \\(a, b \\in H\\), then \\(b^{-1} \\in H\\) and \\(ab^{-1} \\in H\\) by closure.</p>
<p>(<strong>If</strong>) Suppose the condition holds. Pick any \\(a \\in H\\).</p>
<ul>
  <li><strong>Identity:</strong> Set \\(b = a\\): \\(aa^{-1} = e \\in H\\).</li>
  <li><strong>Inverses:</strong> For any \\(a \\in H\\), set \\(a = e\\): \\(eb^{-1} = b^{-1} \\in H\\). (More precisely: we showed \\(e \\in H\\); now apply the condition with \\(a = e, b = a\\) to get \\(ea^{-1} = a^{-1} \\in H\\).)</li>
  <li><strong>Closure:</strong> For \\(a, b \\in H\\), we have \\(b^{-1} \\in H\\) (just shown). Apply the condition with \\(a\\) and \\(b^{-1}\\): \\(a(b^{-1})^{-1} = ab \\in H\\).</li>
</ul>
<p>So \\(H\\) satisfies the two-step test. \\(\\square\\)</p>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 1.18 (Finite Subgroup Test)</div><div class="env-body">
<p>If \\(H\\) is a <strong>finite</strong> nonempty subset of \\(G\\) that is closed under the group operation, then \\(H \\leq G\\).</p>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>We need only show that \\(H\\) is closed under inverses. Let \\(a \\in H\\). Consider the sequence \\(a, a^2, a^3, \\ldots\\). Since \\(H\\) is finite and closed, this sequence must eventually repeat: \\(a^i = a^j\\) for some \\(i < j\\). By cancellation, \\(a^{j-i} = e \\in H\\). If \\(j - i = 1\\), then \\(a = e\\) and \\(a^{-1} = e \\in H\\). If \\(j - i > 1\\), then \\(a^{-1} = a^{j-i-1} \\in H\\) (since \\(H\\) is closed and \\(j - i - 1 \\geq 1\\)). \\(\\square\\)</p>
</div></div>

<h3>Important Examples of Subgroups</h3>

<div class="env-block example"><div class="env-title">Example 1.19 (Trivial subgroups)</div><div class="env-body">
<p>For any group \\(G\\):</p>
<ul>
  <li>\\(\\{e\\} \\leq G\\) (the <strong>trivial subgroup</strong>)</li>
  <li>\\(G \\leq G\\) (\\(G\\) is a subgroup of itself)</li>
</ul>
<p>A subgroup \\(H \\leq G\\) with \\(H \\neq \\{e\\}\\) and \\(H \\neq G\\) is called a <strong>proper nontrivial subgroup</strong>.</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 1.20</div><div class="env-body">
<p>\\(n\\mathbb{Z} = \\{\\ldots, -2n, -n, 0, n, 2n, \\ldots\\}\\) is a subgroup of \\((\\mathbb{Z}, +)\\) for any \\(n \\geq 1\\). Verification: \\(0 \\in n\\mathbb{Z}\\); if \\(an, bn \\in n\\mathbb{Z}\\) then \\(an + bn = (a+b)n \\in n\\mathbb{Z}\\); and \\(-(an) = (-a)n \\in n\\mathbb{Z}\\).</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 1.21</div><div class="env-body">
<p>\\(\\mathrm{SL}_n(\\mathbb{R}) = \\{A \\in \\mathrm{GL}_n(\\mathbb{R}) : \\det(A) = 1\\}\\) is a subgroup of \\(\\mathrm{GL}_n(\\mathbb{R})\\). Check: \\(\\det(I) = 1\\); \\(\\det(AB) = \\det(A)\\det(B) = 1\\); \\(\\det(A^{-1}) = 1/\\det(A) = 1\\).</p>
</div></div>

<div class="env-block proposition"><div class="env-title">Proposition 1.22 (Intersection of subgroups)</div><div class="env-body">
<p>If \\(\\{H_i\\}_{i \\in I}\\) is any collection of subgroups of \\(G\\), then \\(\\bigcap_{i \\in I} H_i\\) is a subgroup of \\(G\\).</p>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>Let \\(H = \\bigcap H_i\\). Then \\(e \\in H_i\\) for all \\(i\\), so \\(e \\in H\\). If \\(a, b \\in H\\), then \\(a, b \\in H_i\\) for all \\(i\\), so \\(ab^{-1} \\in H_i\\) for all \\(i\\), hence \\(ab^{-1} \\in H\\). By the one-step test, \\(H \\leq G\\). \\(\\square\\)</p>
</div></div>

<div class="env-block warning"><div class="env-title">Warning</div><div class="env-body">
<p>The <strong>union</strong> of two subgroups is generally <em>not</em> a subgroup. For example, in \\((\\mathbb{Z}, +)\\), \\(2\\mathbb{Z} \\cup 3\\mathbb{Z}\\) is not a subgroup because \\(2 + 3 = 5 \\notin 2\\mathbb{Z} \\cup 3\\mathbb{Z}\\).</p>
</div></div>
`,
      visualizations: [
        {
          id: 'viz-subgroup-lattice',
          title: 'Subgroup Lattice of Z/12Z',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 600, height: 420 });

            // Subgroups of Z/12Z: {0}, <6>={0,6}, <4>={0,4,8}, <3>={0,3,6,9}, <2>={0,2,4,6,8,10}, Z/12Z
            const subgroups = [
              { id: 'z12', label: 'Z/12Z', elements: '{0,1,2,...,11}', x: 300, y: 40, color: '#bc8cff', order: 12 },
              { id: 'h2', label: '<2>', elements: '{0,2,4,6,8,10}', x: 180, y: 130, color: '#58a6ff', order: 6 },
              { id: 'h3', label: '<3>', elements: '{0,3,6,9}', x: 420, y: 130, color: '#3fb950', order: 4 },
              { id: 'h4', label: '<4>', elements: '{0,4,8}', x: 120, y: 230, color: '#f0883e', order: 3 },
              { id: 'h6', label: '<6>', elements: '{0,6}', x: 300, y: 230, color: '#d29922', order: 2 },
              { id: 'e', label: '{0}', elements: '{0}', x: 300, y: 340, color: '#f85149', order: 1 }
            ];

            // Edges: subgroup inclusion (upward = contains)
            const edges = [
              ['e', 'h4'], ['e', 'h6'],
              ['h4', 'h2'], ['h6', 'h2'], ['h6', 'h3'],
              ['h2', 'z12'], ['h3', 'z12']
            ];

            let highlighted = null;

            function findNode(id) {
              return subgroups.find(function(s) { return s.id === id; });
            }

            function draw() {
              viz.clear();
              const ctx = viz.ctx;

              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Subgroup Lattice of (Z/12Z, +)', 300, 25);

              // Draw edges
              for (var i = 0; i < edges.length; i++) {
                var a = findNode(edges[i][0]);
                var b = findNode(edges[i][1]);
                ctx.strokeStyle = '#30363d';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y - 15);
                ctx.lineTo(b.x, b.y + 15);
                ctx.stroke();
              }

              // Draw nodes
              for (var j = 0; j < subgroups.length; j++) {
                var s = subgroups[j];
                var isHighlighted = highlighted === s.id;
                var w = 90;
                var h = 30;

                ctx.fillStyle = isHighlighted ? s.color + '55' : s.color + '22';
                ctx.strokeStyle = s.color;
                ctx.lineWidth = isHighlighted ? 3 : 1.5;
                ctx.beginPath();
                ctx.roundRect(s.x - w / 2, s.y - h / 2, w, h, 6);
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = s.color;
                ctx.font = 'bold 13px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(s.label + ' (|' + s.order + '|)', s.x, s.y);
              }

              // Info panel
              if (highlighted) {
                var node = findNode(highlighted);
                ctx.fillStyle = '#c9d1d9';
                ctx.font = '13px -apple-system,sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText('Subgroup: ' + node.label + '  =  ' + node.elements, 40, 390);
                ctx.fillText('Order: ' + node.order + '   (divides 12)', 40, 410);
              } else {
                ctx.fillStyle = '#8b949e';
                ctx.font = '12px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('Click a node to see its elements. Notice: all subgroup orders divide 12 (Lagrange preview).', 300, 400);
              }
            }

            draw();

            viz.canvas.addEventListener('click', function(e) {
              var rect = viz.canvas.getBoundingClientRect();
              var mx = e.clientX - rect.left;
              var my = e.clientY - rect.top;
              highlighted = null;
              for (var i = 0; i < subgroups.length; i++) {
                var s = subgroups[i];
                if (Math.abs(mx - s.x) < 45 && Math.abs(my - s.y) < 15) {
                  highlighted = s.id;
                  break;
                }
              }
              draw();
            });
          }
        },
        {
          id: 'viz-subgroup-test',
          title: 'Interactive Subgroup Checker',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const controls = document.createElement('div');
            controls.style.cssText = 'margin-bottom:10px;display:flex;flex-wrap:wrap;gap:8px;align-items:center;';
            controls.innerHTML = '<span style="color:#c9d1d9;font-size:14px;">Select elements of Z/8Z to test if they form a subgroup: </span>';
            wrap.appendChild(controls);

            const checkboxes = document.createElement('div');
            checkboxes.style.cssText = 'display:flex;gap:6px;margin-bottom:8px;';
            for (let i = 0; i < 8; i++) {
              checkboxes.innerHTML += '<label style="color:#c9d1d9;font-size:13px;"><input type="checkbox" class="sg-cb" value="' + i + '" ' + (i === 0 ? 'checked' : '') + '> ' + i + '</label>';
            }
            wrap.appendChild(checkboxes);

            const viz = new VizEngine(wrap, { width: 600, height: 300 });

            function getSelected() {
              var cbs = checkboxes.querySelectorAll('.sg-cb');
              var sel = [];
              cbs.forEach(function(cb) { if (cb.checked) sel.push(parseInt(cb.value)); });
              return sel.sort(function(a, b) { return a - b; });
            }

            function checkSubgroup(elems) {
              if (elems.length === 0) return { pass: false, reason: 'Empty set is not a subgroup' };
              var set = new Set(elems);
              // Identity
              if (!set.has(0)) return { pass: false, reason: 'Does not contain identity element 0' };
              // Closure
              for (var i = 0; i < elems.length; i++) {
                for (var j = 0; j < elems.length; j++) {
                  var sum = (elems[i] + elems[j]) % 8;
                  if (!set.has(sum)) return { pass: false, reason: elems[i] + ' + ' + elems[j] + ' = ' + sum + ' (mod 8) is not in the set' };
                }
              }
              // Inverses
              for (var k = 0; k < elems.length; k++) {
                var inv = (8 - elems[k]) % 8;
                if (!set.has(inv)) return { pass: false, reason: 'Inverse of ' + elems[k] + ' is ' + inv + ', not in the set' };
              }
              return { pass: true, reason: 'All axioms satisfied! This is a subgroup of Z/8Z.' };
            }

            function draw() {
              viz.clear();
              var ctx = viz.ctx;
              var elems = getSelected();
              var result = checkSubgroup(elems);

              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 15px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Subset: {' + elems.join(', ') + '}', 300, 30);

              // Draw all elements on a circle
              var cx = 300, cy = 150, r = 80;
              for (var i = 0; i < 8; i++) {
                var angle = -Math.PI / 2 + (2 * Math.PI * i / 8);
                var x = cx + r * Math.cos(angle);
                var y = cy + r * Math.sin(angle);
                var inSet = elems.indexOf(i) >= 0;

                ctx.fillStyle = inSet ? '#58a6ff44' : '#161b2244';
                ctx.strokeStyle = inSet ? '#58a6ff' : '#30363d';
                ctx.lineWidth = inSet ? 2 : 1;
                ctx.beginPath();
                ctx.arc(x, y, 18, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = inSet ? '#58a6ff' : '#8b949e';
                ctx.font = 'bold 14px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(String(i), x, y);
              }

              // Result
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              if (result.pass) {
                ctx.fillStyle = '#3fb950';
                ctx.fillText('SUBGROUP', 300, 260);
              } else {
                ctx.fillStyle = '#f85149';
                ctx.fillText('NOT A SUBGROUP', 300, 260);
              }
              ctx.fillStyle = '#8b949e';
              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillText(result.reason, 300, 282);
            }

            draw();
            checkboxes.addEventListener('change', draw);
          }
        }
      ],
      exercises: [
        {
          id: 'ch01-sec03-ex01',
          type: 'mcq',
          question: 'Which of the following is NOT a subgroup of (Z, +)?',
          options: ['2Z (even integers)', '3Z (multiples of 3)', 'Z itself', 'The set of odd integers'],
          answer: 3,
          explanation: 'The set of odd integers is not a subgroup of Z: it does not contain the identity 0 (which is even), and it is not closed under addition (odd + odd = even).'
        },
        {
          id: 'ch01-sec03-ex02',
          type: 'mcq',
          question: 'In the one-step subgroup test for a nonempty H subset of G, we check that for all a, b in H:',
          options: ['ab in H', 'a^{-1} in H', 'ab^{-1} in H', 'a + b in H'],
          answer: 2,
          explanation: 'The one-step subgroup test requires checking that ab^{-1} is in H for all a, b in H. This single condition implies closure, identity, and inverses.'
        },
        {
          id: 'ch01-sec03-ex03',
          type: 'short-answer',
          question: 'Prove that the intersection of two subgroups is a subgroup, but their union need not be.',
          hint: 'For intersection, use the one-step test. For union, find a counterexample in Z.',
          solution: 'Intersection: Let H, K be subgroups of G and let a, b be in H intersection K. Then a, b are in H, so ab^{-1} is in H. Similarly ab^{-1} is in K. Hence ab^{-1} is in H intersection K, so H intersection K is a subgroup by the one-step test. Union: In (Z, +), let H = 2Z and K = 3Z. Then 2 is in H and 3 is in K, but 2 + 3 = 5 is in neither 2Z nor 3Z, so 2Z union 3Z is not closed under addition, hence not a subgroup.'
        },
        {
          id: 'ch01-sec03-ex04',
          type: 'short-answer',
          question: 'Use the finite subgroup test to show that the set H = {1, -1, i, -i} is a subgroup of (C*, *).',
          hint: 'Show H is nonempty, finite, and closed under multiplication.',
          solution: 'H = {1, -1, i, -i} is finite and nonempty. We verify closure: the product of any two elements of H is in H. Checking all 16 products (or noting that these are the 4th roots of unity and their products have the form i^k for integers k, which cycles through H), we confirm closure. By the finite subgroup test, H is a subgroup of C*.'
        }
      ]
    },

    // ─── SECTION 4 ────────────────────────────────────────────────────────────
    {
      id: 'ch01-sec04',
      title: '4. Order of an Element',
      content: `
<h2>Order of an Element</h2>
<p class="section-roadmap"><em>In this section, we study the order of individual elements within a group, connect it to cyclic subgroups, and preview how element order relates to group order.</em></p>

<div class="env-block definition"><div class="env-title">Definition 1.23 (Order of an element)</div><div class="env-body">
<p>Let \\(G\\) be a group and \\(a \\in G\\). The <strong>order</strong> of \\(a\\), denoted \\(|a|\\) or \\(\\mathrm{ord}(a)\\), is the smallest positive integer \\(n\\) such that \\(a^n = e\\). If no such \\(n\\) exists, we say \\(a\\) has <strong>infinite order</strong>.</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 1.24</div><div class="env-body">
<ul>
  <li>In \\((\\mathbb{Z}/6\\mathbb{Z}, +)\\): \\(|0| = 1\\), \\(|1| = 6\\), \\(|2| = 3\\), \\(|3| = 2\\), \\(|4| = 3\\), \\(|5| = 6\\).</li>
  <li>In \\((\\mathbb{Z}, +)\\): every nonzero element has infinite order (no finite \\(n\\) gives \\(n \\cdot 1 = 0\\)).</li>
  <li>In \\(S_3\\): a transposition \\((1\\;2)\\) has order \\(2\\); a \\(3\\)-cycle \\((1\\;2\\;3)\\) has order \\(3\\).</li>
</ul>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 1.25</div><div class="env-body">
<p>Let \\(a \\in G\\) have order \\(n\\). Then \\(a^k = e\\) if and only if \\(n \\mid k\\).</p>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>(<strong>If</strong>) If \\(k = nq\\), then \\(a^k = (a^n)^q = e^q = e\\).</p>
<p>(<strong>Only if</strong>) Write \\(k = nq + r\\) with \\(0 \\leq r < n\\). Then \\(e = a^k = a^{nq+r} = (a^n)^q \\cdot a^r = a^r\\). Since \\(0 \\leq r < n\\) and \\(n\\) is the smallest positive integer with \\(a^n = e\\), we must have \\(r = 0\\), so \\(n \\mid k\\). \\(\\square\\)</p>
</div></div>

<div class="env-block corollary"><div class="env-title">Corollary 1.26</div><div class="env-body">
<p>If \\(|a| = n\\), then \\(a^i = a^j\\) if and only if \\(n \\mid (i - j)\\), i.e., \\(i \\equiv j \\pmod{n}\\).</p>
</div></div>

<h3>Cyclic Subgroups</h3>

<div class="env-block definition"><div class="env-title">Definition 1.27 (Cyclic subgroup)</div><div class="env-body">
<p>For \\(a \\in G\\), the <strong>cyclic subgroup generated by \\(a\\)</strong> is:
\\[\\langle a \\rangle = \\{a^n : n \\in \\mathbb{Z}\\}.\\]
This is the smallest subgroup of \\(G\\) containing \\(a\\).</p>
</div></div>

<div class="env-block proposition"><div class="env-title">Proposition 1.28</div><div class="env-body">
<p>If \\(|a| = n < \\infty\\), then \\(\\langle a \\rangle = \\{e, a, a^2, \\ldots, a^{n-1}\\}\\) and \\(|\\langle a \\rangle| = n\\). If \\(a\\) has infinite order, then all powers \\(a^k\\) are distinct and \\(\\langle a \\rangle \\cong \\mathbb{Z}\\).</p>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 1.29 (Order of a^k)</div><div class="env-body">
<p>If \\(|a| = n\\), then \\(|a^k| = \\dfrac{n}{\\gcd(n, k)}\\).</p>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>Let \\(d = \\gcd(n, k)\\). We need the smallest positive \\(m\\) such that \\((a^k)^m = e\\), i.e., \\(a^{km} = e\\). By Theorem 1.25, this holds iff \\(n \\mid km\\), i.e., \\(\\frac{n}{d} \\mid \\frac{k}{d} m\\). Since \\(\\gcd(n/d, k/d) = 1\\), this reduces to \\(\\frac{n}{d} \\mid m\\). The smallest such positive \\(m\\) is \\(n/d\\). \\(\\square\\)</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 1.30</div><div class="env-body">
<p>In \\(\\mathbb{Z}/12\\mathbb{Z}\\): \\(|4| = 12/\\gcd(12,4) = 12/4 = 3\\). Indeed, \\(\\langle 4 \\rangle = \\{0, 4, 8\\}\\). Also, \\(|5| = 12/\\gcd(12,5) = 12/1 = 12\\), so 5 generates all of \\(\\mathbb{Z}/12\\mathbb{Z}\\).</p>
</div></div>

<div class="env-block intuition"><div class="env-title">Preview: Lagrange's Theorem</div><div class="env-body">
<p>We will prove later that if \\(G\\) is finite and \\(a \\in G\\), then \\(|a|\\) divides \\(|G|\\). This is a consequence of Lagrange's theorem, since \\(|a| = |\\langle a \\rangle|\\) and \\(|\\langle a \\rangle|\\) divides \\(|G|\\). For example, in \\(\\mathbb{Z}/12\\mathbb{Z}\\), every element order divides \\(12\\).</p>
</div></div>

<div class="env-block proposition"><div class="env-title">Proposition 1.31 (Generators of Z/nZ)</div><div class="env-body">
<p>An element \\(k \\in \\mathbb{Z}/n\\mathbb{Z}\\) generates the whole group if and only if \\(\\gcd(k, n) = 1\\). In particular, \\(\\mathbb{Z}/n\\mathbb{Z}\\) has \\(\\varphi(n)\\) generators, where \\(\\varphi\\) is Euler's totient function.</p>
</div></div>
`,
      visualizations: [
        {
          id: 'viz-element-order',
          title: 'Element Order Explorer in Z/nZ',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const controls = document.createElement('div');
            controls.style.cssText = 'margin-bottom:10px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;';
            controls.innerHTML = '<label style="color:#c9d1d9;font-size:14px;">n = </label>' +
              '<input type="range" id="order-n" min="2" max="20" value="12" style="width:120px;">' +
              '<span id="order-n-label" style="color:#58a6ff;font-weight:bold;">12</span>' +
              '<label style="color:#c9d1d9;font-size:14px;margin-left:20px;">Element k = </label>' +
              '<input type="range" id="order-k" min="0" max="19" value="3" style="width:120px;">' +
              '<span id="order-k-label" style="color:#f0883e;font-weight:bold;">3</span>';
            wrap.appendChild(controls);

            const viz = new VizEngine(wrap, { width: 600, height: 400 });

            function gcd(a, b) { while (b) { var t = b; b = a % b; a = t; } return a; }

            function draw() {
              var n = parseInt(document.getElementById('order-n').value);
              var k = parseInt(document.getElementById('order-k').value) % n;
              document.getElementById('order-n-label').textContent = n;
              document.getElementById('order-k').max = n - 1;
              document.getElementById('order-k-label').textContent = k;

              viz.clear();
              var ctx = viz.ctx;

              var order = k === 0 ? 1 : n / gcd(n, k);

              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Cyclic subgroup generated by ' + k + ' in Z/' + n + 'Z', 300, 25);

              // Draw circle of elements
              var cx = 220, cy = 210, r = 120;
              var cycleElems = [];
              var val = 0;
              for (var i = 0; i < order; i++) {
                val = (k * i) % n;
                cycleElems.push(val);
              }
              var cycleSet = new Set(cycleElems);

              // Draw all elements on circle
              for (var j = 0; j < n; j++) {
                var angle = -Math.PI / 2 + (2 * Math.PI * j / n);
                var x = cx + r * Math.cos(angle);
                var y = cy + r * Math.sin(angle);
                var inCycle = cycleSet.has(j);

                ctx.fillStyle = inCycle ? (j === k ? '#f0883e44' : '#58a6ff33') : '#161b2222';
                ctx.strokeStyle = inCycle ? (j === k ? '#f0883e' : '#58a6ff') : '#30363d';
                ctx.lineWidth = inCycle ? 2 : 1;
                ctx.beginPath();
                ctx.arc(x, y, 16, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = inCycle ? (j === k ? '#f0883e' : '#58a6ff') : '#8b949e';
                ctx.font = inCycle ? 'bold 13px -apple-system,sans-serif' : '12px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(String(j), x, y);
              }

              // Draw arrows along the cycle
              if (k > 0) {
                ctx.strokeStyle = '#3fb95088';
                ctx.lineWidth = 1.5;
                for (var m = 0; m < cycleElems.length; m++) {
                  var fromEl = cycleElems[m];
                  var toEl = cycleElems[(m + 1) % cycleElems.length];
                  var a1 = -Math.PI / 2 + (2 * Math.PI * fromEl / n);
                  var a2 = -Math.PI / 2 + (2 * Math.PI * toEl / n);
                  var x1 = cx + (r - 20) * Math.cos(a1);
                  var y1 = cy + (r - 20) * Math.sin(a1);
                  var x2 = cx + (r - 20) * Math.cos(a2);
                  var y2 = cy + (r - 20) * Math.sin(a2);

                  ctx.beginPath();
                  ctx.moveTo(x1, y1);
                  var cpx = cx + (r - 50) * Math.cos((a1 + a2) / 2);
                  var cpy = cy + (r - 50) * Math.sin((a1 + a2) / 2);
                  ctx.quadraticCurveTo(cpx, cpy, x2, y2);
                  ctx.stroke();
                }
              }

              // Info panel on the right
              var infoX = 420;
              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('Element: ' + k, infoX, 80);
              ctx.fillText('Order |' + k + '| = ' + order, infoX, 105);
              ctx.fillText('gcd(' + n + ', ' + k + ') = ' + gcd(n, k), infoX, 130);

              ctx.fillStyle = '#8b949e';
              ctx.font = '13px -apple-system,sans-serif';
              ctx.fillText('Formula: |k| = n / gcd(n, k)', infoX, 160);
              ctx.fillText('= ' + n + ' / ' + gcd(n, k) + ' = ' + order, infoX, 180);

              ctx.fillText('<' + k + '> = {' + cycleElems.join(', ') + '}', infoX, 215);
              ctx.fillText('|<' + k + '>| = ' + cycleElems.length, infoX, 235);

              var isGen = gcd(n, k) === 1;
              ctx.fillStyle = isGen ? '#3fb950' : '#f0883e';
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.fillText(isGen ? 'Generator of Z/' + n + 'Z' : 'Not a generator', infoX, 265);

              // List all orders
              ctx.fillStyle = '#8b949e';
              ctx.font = '11px -apple-system,sans-serif';
              ctx.fillText('All element orders:', infoX, 300);
              var ordStr = '';
              for (var p = 0; p < n; p++) {
                var o = p === 0 ? 1 : n / gcd(n, p);
                ordStr += '|' + p + '|=' + o;
                if (p < n - 1) ordStr += ', ';
                if (ordStr.length > 40) {
                  ctx.fillText(ordStr, infoX, 318 + Math.floor(p / 6) * 14);
                  ordStr = '';
                }
              }
              if (ordStr) ctx.fillText(ordStr, infoX, 332);
            }

            draw();
            document.getElementById('order-n').addEventListener('input', draw);
            document.getElementById('order-k').addEventListener('input', draw);
          }
        }
      ],
      exercises: [
        {
          id: 'ch01-sec04-ex01',
          type: 'mcq',
          question: 'What is the order of 8 in Z/20Z?',
          options: ['4', '5', '10', '20'],
          answer: 1,
          explanation: '|8| = 20 / gcd(20, 8) = 20 / 4 = 5. Check: 8, 16, 4, 12, 0 (mod 20). After 5 steps we return to 0.'
        },
        {
          id: 'ch01-sec04-ex02',
          type: 'mcq',
          question: 'How many generators does Z/12Z have?',
          options: ['2', '4', '6', '12'],
          answer: 1,
          explanation: 'The generators are elements k with gcd(k, 12) = 1, which are {1, 5, 7, 11}. So there are phi(12) = 4 generators.'
        },
        {
          id: 'ch01-sec04-ex03',
          type: 'short-answer',
          question: 'Let G be a group and a in G with |a| = 30. Find |a^{12}|.',
          hint: 'Use the formula |a^k| = n / gcd(n, k).',
          solution: '|a^{12}| = 30 / gcd(30, 12) = 30 / 6 = 5.'
        },
        {
          id: 'ch01-sec04-ex04',
          type: 'short-answer',
          question: 'Prove: if |a| = n and a^m = e, then n divides m.',
          hint: 'Use the division algorithm: write m = nq + r.',
          solution: 'By the division algorithm, m = nq + r where 0 <= r < n. Then e = a^m = a^{nq+r} = (a^n)^q * a^r = e^q * a^r = a^r. Since a^r = e and 0 <= r < n, and n is the smallest positive integer with a^n = e, we must have r = 0. Hence n divides m.'
        }
      ]
    },

    // ─── SECTION 5 ────────────────────────────────────────────────────────────
    {
      id: 'ch01-sec05',
      title: '5. Dihedral Groups',
      content: `
<h2>Dihedral Groups</h2>
<p class="section-roadmap"><em>In this section, we study the dihedral group \\(D_n\\), the symmetry group of a regular \\(n\\)-gon. This is one of the most important families of finite groups and provides a rich source of non-abelian examples.</em></p>

<div class="env-block intuition"><div class="env-title">Geometric Motivation</div><div class="env-body"><p>Take a regular \\(n\\)-gon (e.g., an equilateral triangle for \\(n=3\\), a square for \\(n=4\\)) and ask: what rigid motions of the plane send the polygon to itself? These symmetries form a group under composition, and this group is \\(D_n\\).</p></div></div>

<div class="env-block definition"><div class="env-title">Definition 1.32 (Dihedral Group)</div><div class="env-body">
<p>The <strong>dihedral group</strong> \\(D_n\\) (for \\(n \\geq 3\\)) is the group of symmetries of a regular \\(n\\)-gon. It consists of:</p>
<ul>
  <li>\\(n\\) <strong>rotations:</strong> \\(r^0 = e, r, r^2, \\ldots, r^{n-1}\\), where \\(r\\) is rotation by \\(2\\pi/n\\) counterclockwise.</li>
  <li>\\(n\\) <strong>reflections:</strong> \\(s, rs, r^2 s, \\ldots, r^{n-1}s\\), where \\(s\\) is a reflection across a chosen axis.</li>
</ul>
<p>Thus \\(|D_n| = 2n\\).</p>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 1.33 (Presentation of D_n)</div><div class="env-body">
<p>\\(D_n\\) is generated by \\(r\\) and \\(s\\) subject to the relations:</p>
\\[r^n = e, \\quad s^2 = e, \\quad srs = r^{-1} \\quad (\\text{equivalently, } sr = r^{-1}s).\\]
<p>Every element of \\(D_n\\) can be written uniquely as \\(r^i s^j\\) where \\(0 \\leq i \\leq n-1\\) and \\(j \\in \\{0, 1\\}\\).</p>
</div></div>

<div class="env-block proof"><div class="env-title">Proof sketch</div><div class="env-body">
<p>The relation \\(r^n = e\\) says that \\(n\\) rotations by \\(2\\pi/n\\) return to the identity. The relation \\(s^2 = e\\) says reflecting twice returns to the identity. The key relation \\(sr = r^{-1}s\\) encodes the fact that "reflect, then rotate" equals "rotate backwards, then reflect." Geometrically, a reflection reverses the orientation of the polygon, so it conjugates a rotation into its inverse.</p>
<p>Any word in \\(r\\) and \\(s\\) can be reduced to the form \\(r^i s^j\\) using these relations: whenever \\(s\\) appears to the left of \\(r\\), use \\(sr = r^{-1}s\\) to move \\(s\\) to the right, and reduce powers of \\(r\\) modulo \\(n\\) and powers of \\(s\\) modulo \\(2\\). \\(\\square\\)</p>
</div></div>

<div class="env-block remark"><div class="env-title">Notation Warning</div><div class="env-body">
<p>Some textbooks write \\(D_n\\) for the dihedral group of order \\(2n\\) (symmetries of an \\(n\\)-gon); others write \\(D_{2n}\\) for the same group. We follow the convention \\(|D_n| = 2n\\).</p>
</div></div>

<h3>Multiplication in D_n</h3>

<div class="env-block proposition"><div class="env-title">Proposition 1.34 (Multiplication rules)</div><div class="env-body">
<p>For \\(D_n\\), the following multiplication rules hold:</p>
<ul>
  <li>\\(r^i \\cdot r^j = r^{(i+j) \\bmod n}\\)</li>
  <li>\\(r^i s \\cdot r^j s = r^{(i-j) \\bmod n}\\)</li>
  <li>\\(r^i \\cdot r^j s = r^{(i+j) \\bmod n} s\\)</li>
  <li>\\(r^i s \\cdot r^j = r^{(i-j) \\bmod n} s\\)</li>
</ul>
</div></div>

<div class="env-block example"><div class="env-title">Example 1.35 (D_3, the symmetry group of a triangle)</div><div class="env-body">
<p>\\(D_3\\) has 6 elements: \\(\\{e, r, r^2, s, rs, r^2s\\}\\). This group is isomorphic to \\(S_3\\):</p>
<ul>
  <li>\\(e\\) corresponds to the identity permutation.</li>
  <li>\\(r\\) corresponds to the 3-cycle \\((1\\;2\\;3)\\).</li>
  <li>\\(r^2\\) corresponds to \\((1\\;3\\;2)\\).</li>
  <li>\\(s, rs, r^2s\\) correspond to the three transpositions.</li>
</ul>
<p>Note: \\(D_3 \\cong S_3\\) is the smallest non-abelian group.</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 1.36 (D_4, the symmetry group of a square)</div><div class="env-body">
<p>\\(D_4\\) has 8 elements. Label the vertices of a unit square \\(1, 2, 3, 4\\) going counterclockwise. Then:</p>
<ul>
  <li>Rotations: \\(e, r = 90^\\circ, r^2 = 180^\\circ, r^3 = 270^\\circ\\).</li>
  <li>Reflections: \\(s\\) (across a vertical axis), \\(rs\\) (across a diagonal), \\(r^2s\\) (horizontal axis), \\(r^3s\\) (other diagonal).</li>
</ul>
</div></div>

<h3>Orders of Elements in D_n</h3>

<div class="env-block proposition"><div class="env-title">Proposition 1.37</div><div class="env-body">
<p>In \\(D_n\\):</p>
<ul>
  <li>\\(|r^k| = n / \\gcd(n, k)\\) for \\(0 \\leq k \\leq n-1\\).</li>
  <li>Every reflection has order \\(2\\): \\(|r^k s| = 2\\) for all \\(k\\).</li>
</ul>
</div></div>

<h3>Subgroups of D_n</h3>

<div class="env-block proposition"><div class="env-title">Proposition 1.38</div><div class="env-body">
<p>The following are subgroups of \\(D_n\\):</p>
<ul>
  <li>The rotation subgroup \\(\\langle r \\rangle = \\{e, r, r^2, \\ldots, r^{n-1}\\} \\cong \\mathbb{Z}/n\\mathbb{Z}\\), which has index 2 in \\(D_n\\).</li>
  <li>For each divisor \\(d\\) of \\(n\\), the cyclic subgroup \\(\\langle r^d \\rangle\\) of order \\(n/d\\).</li>
  <li>For each \\(k\\), the subgroup \\(\\{e, r^k s\\} \\cong \\mathbb{Z}/2\\mathbb{Z}\\).</li>
</ul>
</div></div>

<div class="env-block remark"><div class="env-title">Center of D_n</div><div class="env-body">
<p>The <strong>center</strong> of \\(D_n\\) (the set of elements that commute with everything) is:</p>
<ul>
  <li>\\(Z(D_n) = \\{e\\}\\) if \\(n\\) is odd.</li>
  <li>\\(Z(D_n) = \\{e, r^{n/2}\\}\\) if \\(n\\) is even.</li>
</ul>
<p>This shows that \\(D_n\\) is non-abelian for all \\(n \\geq 3\\), since the center is always a proper subgroup.</p>
</div></div>

<div class="env-block warning"><div class="env-title">Common Pitfall</div><div class="env-body">
<p>When computing in \\(D_n\\), remember that \\(sr \\neq rs\\). Instead, \\(sr = r^{-1}s = r^{n-1}s\\). Always use the relation \\(sr = r^{-1}s\\) to move all \\(s\\) factors to the right and all \\(r\\) factors to the left.</p>
</div></div>
`,
      visualizations: [
        {
          id: 'viz-dihedral-polygon',
          title: 'Interactive Dihedral Group D_n',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const controls = document.createElement('div');
            controls.style.cssText = 'margin-bottom:10px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;';
            controls.innerHTML = '<label style="color:#c9d1d9;font-size:14px;">n = </label>' +
              '<input type="range" id="dn-slider" min="3" max="10" value="4" style="width:100px;">' +
              '<span id="dn-label" style="color:#58a6ff;font-weight:bold;">4</span>' +
              '<button id="dn-rotate" style="background:#1a1a40;color:#58a6ff;border:1px solid #58a6ff;padding:4px 12px;border-radius:4px;cursor:pointer;">Rotate (r)</button>' +
              '<button id="dn-reflect" style="background:#1a1a40;color:#f0883e;border:1px solid #f0883e;padding:4px 12px;border-radius:4px;cursor:pointer;">Reflect (s)</button>' +
              '<button id="dn-reset" style="background:#1a1a40;color:#8b949e;border:1px solid #30363d;padding:4px 12px;border-radius:4px;cursor:pointer;">Reset</button>';
            wrap.appendChild(controls);

            const viz = new VizEngine(wrap, { width: 600, height: 420 });

            let currentRotation = 0;
            let isReflected = false;
            let animating = false;

            function draw() {
              var n = parseInt(document.getElementById('dn-slider').value);
              document.getElementById('dn-label').textContent = n;
              viz.clear();
              var ctx = viz.ctx;

              var cx = 250, cy = 210, radius = 130;

              // Title
              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Symmetries of a regular ' + n + '-gon (D_' + n + ', |D_' + n + '| = ' + (2 * n) + ')', 300, 25);

              // Draw reflection axis
              if (isReflected) {
                ctx.strokeStyle = '#f0883e44';
                ctx.lineWidth = 1;
                ctx.setLineDash([5, 5]);
                ctx.beginPath();
                ctx.moveTo(cx, cy - radius - 20);
                ctx.lineTo(cx, cy + radius + 20);
                ctx.stroke();
                ctx.setLineDash([]);
              }

              // Compute vertex positions
              var vertices = [];
              for (var i = 0; i < n; i++) {
                var baseAngle = -Math.PI / 2 + (2 * Math.PI * i / n);
                var angle = baseAngle + (currentRotation * 2 * Math.PI / n);
                var vx = cx + radius * Math.cos(angle);
                var vy = cy + radius * Math.sin(angle);
                if (isReflected) {
                  vx = 2 * cx - vx; // reflect across vertical axis through center
                }
                vertices.push({ x: vx, y: vy, label: i + 1 });
              }

              // Draw polygon edges
              ctx.strokeStyle = '#58a6ff88';
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(vertices[0].x, vertices[0].y);
              for (var j = 1; j < n; j++) {
                ctx.lineTo(vertices[j].x, vertices[j].y);
              }
              ctx.closePath();
              ctx.stroke();

              // Fill polygon
              ctx.fillStyle = '#58a6ff0d';
              ctx.fill();

              // Draw vertices
              for (var k = 0; k < n; k++) {
                var v = vertices[k];
                var isFirst = k === 0;

                ctx.fillStyle = isFirst ? '#3fb95055' : '#58a6ff33';
                ctx.strokeStyle = isFirst ? '#3fb950' : '#58a6ff';
                ctx.lineWidth = isFirst ? 2.5 : 1.5;
                ctx.beginPath();
                ctx.arc(v.x, v.y, 16, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = isFirst ? '#3fb950' : '#c9d1d9';
                ctx.font = 'bold 13px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(String(v.label), v.x, v.y);
              }

              // Current transformation info
              var rPower = ((currentRotation % n) + n) % n;
              var elemStr = isReflected ? 'r^' + rPower + ' s' : (rPower === 0 ? 'e' : 'r^' + rPower);
              if (rPower === 1 && !isReflected) elemStr = 'r';
              if (rPower === 0 && isReflected) elemStr = 's';
              if (rPower === 1 && isReflected) elemStr = 'rs';

              ctx.fillStyle = '#bc8cff';
              ctx.font = 'bold 15px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('Current: ' + elemStr, 430, 80);

              ctx.fillStyle = '#8b949e';
              ctx.font = '13px -apple-system,sans-serif';
              ctx.fillText('Rotation: ' + rPower + ' x (360/' + n + ')', 430, 110);
              ctx.fillText('= ' + Math.round(rPower * 360 / n) + ' degrees', 430, 130);
              ctx.fillText('Reflected: ' + (isReflected ? 'yes' : 'no'), 430, 155);

              ctx.fillText('Order of ' + elemStr + ': ' + (isReflected ? 2 : (rPower === 0 ? 1 : n / gcd(n, rPower))), 430, 185);

              // Group info
              ctx.fillStyle = '#8b949e';
              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillText('Rotations: ' + n, 430, 230);
              ctx.fillText('Reflections: ' + n, 430, 248);
              ctx.fillText('Total: 2n = ' + (2 * n), 430, 266);
              ctx.fillText('Relations:', 430, 295);
              ctx.fillText('r^' + n + ' = e', 445, 313);
              ctx.fillText('s^2 = e', 445, 331);
              ctx.fillText('srs = r^{-1}', 445, 349);

              ctx.fillStyle = '#58a6ff';
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Green vertex = vertex 1 (tracks the transformation)', 250, 400);
            }

            function gcd(a, b) { while (b) { var t = b; b = a % b; a = t; } return a; }

            draw();

            document.getElementById('dn-slider').addEventListener('input', function() {
              currentRotation = 0;
              isReflected = false;
              draw();
            });

            document.getElementById('dn-rotate').addEventListener('click', function() {
              currentRotation = (currentRotation + 1);
              draw();
            });

            document.getElementById('dn-reflect').addEventListener('click', function() {
              isReflected = !isReflected;
              draw();
            });

            document.getElementById('dn-reset').addEventListener('click', function() {
              currentRotation = 0;
              isReflected = false;
              draw();
            });
          }
        },
        {
          id: 'viz-dihedral-cayley',
          title: 'Cayley Table for D_3',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 600, height: 420 });

            // D_3 elements: e, r, r^2, s, rs, r^2s
            var elems = ['e', 'r', 'r2', 's', 'rs', 'r2s'];
            var labels = ['e', 'r', 'r\u00B2', 's', 'rs', 'r\u00B2s'];

            // Multiplication table for D_3 (indices into elems array)
            // Using rules: r^3=e, s^2=e, sr=r^2 s (i.e. sr=r^{-1}s=r^2 s for n=3)
            var mult = [
              [0,1,2,3,4,5],  // e * x
              [1,2,0,4,5,3],  // r * x
              [2,0,1,5,3,4],  // r^2 * x
              [3,5,4,0,2,1],  // s * x
              [4,3,5,1,0,2],  // rs * x
              [5,4,3,2,1,0]   // r^2s * x
            ];

            var highlightR = -1;
            var highlightC = -1;

            function draw() {
              viz.clear();
              var ctx = viz.ctx;

              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Cayley Table for D_3 (= S_3)', 300, 25);

              var cellW = 65;
              var cellH = 38;
              var startX = 80;
              var startY = 50;

              // Colors for elements
              var colors = ['#8b949e', '#58a6ff', '#3fb9a0', '#f0883e', '#bc8cff', '#d29922'];

              // Operation symbol
              ctx.fillStyle = '#bc8cff';
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              ctx.fillText('\u2218', startX + cellW / 2, startY + cellH / 2);

              // Headers
              for (var i = 0; i < 6; i++) {
                ctx.fillStyle = colors[i];
                ctx.font = 'bold 13px -apple-system,sans-serif';
                ctx.fillText(labels[i], startX + (i + 1) * cellW + cellW / 2, startY + cellH / 2);
                ctx.fillText(labels[i], startX + cellW / 2, startY + (i + 1) * cellH + cellH / 2);
              }

              // Table cells
              ctx.font = '13px -apple-system,sans-serif';
              for (var r = 0; r < 6; r++) {
                for (var c = 0; c < 6; c++) {
                  var val = mult[r][c];
                  var x = startX + (c + 1) * cellW;
                  var y = startY + (r + 1) * cellH;

                  // Background
                  if (r === highlightR && c === highlightC) {
                    ctx.fillStyle = colors[val] + '44';
                  } else if (r === highlightR || c === highlightC) {
                    ctx.fillStyle = colors[val] + '15';
                  } else {
                    ctx.fillStyle = '#161b2210';
                  }
                  ctx.fillRect(x, y, cellW, cellH);

                  // Border
                  ctx.strokeStyle = '#30363d';
                  ctx.lineWidth = 0.5;
                  ctx.strokeRect(x, y, cellW, cellH);

                  // Text
                  ctx.fillStyle = colors[val];
                  ctx.fillText(labels[val], x + cellW / 2, y + cellH / 2);
                }
              }

              // Separator line between rotations and reflections
              ctx.strokeStyle = '#58a6ff44';
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(startX + cellW, startY + 3 * cellH + cellH);
              ctx.lineTo(startX + 7 * cellW, startY + 3 * cellH + cellH);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(startX + 3 * cellW + cellW, startY + cellH);
              ctx.lineTo(startX + 3 * cellW + cellW, startY + 7 * cellH);
              ctx.stroke();

              // Info
              if (highlightR >= 0 && highlightC >= 0) {
                ctx.fillStyle = '#c9d1d9';
                ctx.font = '14px -apple-system,sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(labels[highlightR] + ' \u2218 ' + labels[highlightC] + ' = ' + labels[mult[highlightR][highlightC]], 80, 340);

                // Show non-commutativity if applicable
                var fwd = mult[highlightR][highlightC];
                var bwd = mult[highlightC][highlightR];
                if (fwd !== bwd) {
                  ctx.fillStyle = '#f85149';
                  ctx.fillText('Non-commutative: ' + labels[highlightC] + ' \u2218 ' + labels[highlightR] + ' = ' + labels[bwd] + ' (different!)', 80, 362);
                } else {
                  ctx.fillStyle = '#3fb950';
                  ctx.fillText('These two elements commute: ' + labels[highlightR] + ' \u2218 ' + labels[highlightC] + ' = ' + labels[highlightC] + ' \u2218 ' + labels[highlightR], 80, 362);
                }
              } else {
                ctx.fillStyle = '#8b949e';
                ctx.font = '12px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('Hover over cells to explore. Note the non-commutativity (D_3 is non-abelian).', 300, 350);
                ctx.fillText('The blue lines separate rotations (upper-left block) from mixed products.', 300, 370);
              }

              ctx.fillStyle = '#8b949e';
              ctx.font = '11px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('D_3 is the smallest non-abelian group (order 6)', 300, 400);
            }

            draw();

            viz.canvas.addEventListener('mousemove', function(e) {
              var cellW = 65;
              var cellH = 38;
              var startX = 80;
              var startY = 50;
              var rect = viz.canvas.getBoundingClientRect();
              var mx = e.clientX - rect.left;
              var my = e.clientY - rect.top;

              var col = Math.floor((mx - startX) / cellW) - 1;
              var row = Math.floor((my - startY) / cellH) - 1;

              if (row >= 0 && row < 6 && col >= 0 && col < 6) {
                highlightR = row;
                highlightC = col;
              } else {
                highlightR = -1;
                highlightC = -1;
              }
              draw();
            });
          }
        }
      ],
      exercises: [
        {
          id: 'ch01-sec05-ex01',
          type: 'mcq',
          question: 'What is |D_5|?',
          options: ['5', '10', '20', '25'],
          answer: 1,
          explanation: '|D_n| = 2n, so |D_5| = 2 * 5 = 10. D_5 consists of 5 rotations and 5 reflections of a regular pentagon.'
        },
        {
          id: 'ch01-sec05-ex02',
          type: 'mcq',
          question: 'In D_4, what is sr in terms of the standard form r^i s^j?',
          options: ['rs', 'r^2 s', 'r^3 s', 'r^3'],
          answer: 2,
          explanation: 'Using the relation sr = r^{-1}s = r^{n-1}s, with n = 4 we get sr = r^3 s.'
        },
        {
          id: 'ch01-sec05-ex03',
          type: 'short-answer',
          question: 'Compute (r^2 s)(r^3 s) in D_6.',
          hint: 'Use the rule: r^i s * r^j s = r^{(i-j) mod n}.',
          solution: 'Using r^i s * r^j s = r^{(i-j) mod n}: (r^2 s)(r^3 s) = r^{(2-3) mod 6} = r^{-1 mod 6} = r^5.'
        },
        {
          id: 'ch01-sec05-ex04',
          type: 'short-answer',
          question: 'Find the center Z(D_4) and list its elements.',
          hint: 'An element is in the center if it commutes with both r and s. Check r^k and r^k s for k = 0, 1, 2, 3.',
          solution: 'For n = 4 (even), Z(D_4) = {e, r^2}. To verify: r^2 commutes with r (since r^2 * r = r^3 = r * r^2) and r^2 commutes with s (since r^2 s = r^2 s and s * r^2 = r^{-2} s = r^2 s when n = 4, since r^{-2} = r^{4-2} = r^2). No other elements commute with everything. In particular, s does not commute with r since sr = r^3 s but rs = rs.'
        }
      ]
    }
  ]
});
