window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 'ch00',
  number: 0,
  title: 'Sets, Functions, and Equivalence Relations',
  subtitle: 'Foundations for algebra: injections, surjections, partitions, modular arithmetic',
  sections: [

    // ─── SECTION 1 ────────────────────────────────────────────────────────────
    {
      id: 'ch00-sec01',
      title: '1. Sets and Set Operations',
      content: `
<h2>Sets and Set Operations</h2>
<p class="section-roadmap"><em>We begin with the language of sets, which underpins every algebraic structure in this course. This section establishes the notation and basic operations we will use throughout.</em></p>

<div class="env-block definition"><div class="env-title">Definition 0.1 (Set)</div><div class="env-body">
<p>A <strong>set</strong> is a well-defined collection of distinct objects, called <strong>elements</strong> or <strong>members</strong>. We write \\(a \\in A\\) if \\(a\\) is an element of \\(A\\), and \\(a \\notin A\\) otherwise.</p>
</div></div>

<div class="env-block remark"><div class="env-title">Notation</div><div class="env-body">
<p>Sets may be specified by listing: \\(\\{1, 2, 3\\}\\), or by set-builder notation: \\(\\{x \\in \\mathbb{Z} : x > 0\\}\\). Standard sets include \\(\\mathbb{N}\\) (natural numbers), \\(\\mathbb{Z}\\) (integers), \\(\\mathbb{Q}\\) (rationals), \\(\\mathbb{R}\\) (reals), and \\(\\mathbb{C}\\) (complex numbers). The <strong>empty set</strong> \\(\\varnothing\\) contains no elements.</p>
</div></div>

<div class="env-block definition"><div class="env-title">Definition 0.2 (Subset)</div><div class="env-body">
<p>A set \\(A\\) is a <strong>subset</strong> of \\(B\\), written \\(A \\subseteq B\\), if every element of \\(A\\) is also in \\(B\\). We write \\(A \\subsetneq B\\) if \\(A \\subseteq B\\) and \\(A \\neq B\\). Two sets are <strong>equal</strong> if and only if \\(A \\subseteq B\\) and \\(B \\subseteq A\\).</p>
</div></div>

<div class="env-block definition"><div class="env-title">Definition 0.3 (Set Operations)</div><div class="env-body">
<p>Let \\(A\\) and \\(B\\) be subsets of a universal set \\(U\\).</p>
<ul>
  <li><strong>Union:</strong> \\(A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}\\)</li>
  <li><strong>Intersection:</strong> \\(A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}\\)</li>
  <li><strong>Complement:</strong> \\(A^c = \\{x \\in U : x \\notin A\\}\\)</li>
  <li><strong>Difference:</strong> \\(A \\setminus B = \\{x \\in A : x \\notin B\\}\\)</li>
</ul>
<p>Sets \\(A\\) and \\(B\\) are <strong>disjoint</strong> if \\(A \\cap B = \\varnothing\\).</p>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 0.4 (De Morgan's Laws)</div><div class="env-body">
<p>For subsets \\(A, B\\) of a universal set \\(U\\):</p>
\\[(A \\cup B)^c = A^c \\cap B^c, \\qquad (A \\cap B)^c = A^c \\cup B^c.\\]
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>We prove the first identity; the second is similar. Let \\(x \\in (A \\cup B)^c\\). Then \\(x \\notin A \\cup B\\), so \\(x \\notin A\\) and \\(x \\notin B\\), hence \\(x \\in A^c \\cap B^c\\). Conversely, if \\(x \\in A^c \\cap B^c\\), then \\(x \\notin A\\) and \\(x \\notin B\\), so \\(x \\notin A \\cup B\\), giving \\(x \\in (A \\cup B)^c\\). \\(\\square\\)</p>
</div></div>

<div class="env-block definition"><div class="env-title">Definition 0.5 (Power Set and Cartesian Product)</div><div class="env-body">
<p>The <strong>power set</strong> \\(\\mathcal{P}(A)\\) is the set of all subsets of \\(A\\). If \\(|A| = n\\), then \\(|\\mathcal{P}(A)| = 2^n\\).</p>
<p>The <strong>Cartesian product</strong> of \\(A\\) and \\(B\\) is \\(A \\times B = \\{(a,b) : a \\in A, \\, b \\in B\\}\\). We have \\(|A \\times B| = |A| \\cdot |B|\\) for finite sets.</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 0.6</div><div class="env-body">
<p>Let \\(A = \\{1, 2\\}\\). Then \\(\\mathcal{P}(A) = \\{\\varnothing, \\{1\\}, \\{2\\}, \\{1,2\\}\\}\\) and \\(|\\mathcal{P}(A)| = 4 = 2^2\\). Also, \\(A \\times A = \\{(1,1),(1,2),(2,1),(2,2)\\}\\).</p>
</div></div>
`,
      visualizations: [
        {
          id: 'viz-set-operations-venn',
          title: 'Venn Diagram: Set Operations',
          setup: function(container) {
            var wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            var controls = document.createElement('div');
            controls.style.cssText = 'margin-bottom:10px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;';
            controls.innerHTML = '<label style="color:#c9d1d9;font-size:14px;">Operation: </label>' +
              '<select id="set-op-sel" style="background:#161b22;color:#c9d1d9;border:1px solid #30363d;padding:4px 8px;border-radius:4px;">' +
              '<option value="union">A \\u222a B</option>' +
              '<option value="inter">A \\u2229 B</option>' +
              '<option value="diff">A \\u2216 B</option>' +
              '<option value="comp">A\\u1d9c (complement)</option>' +
              '<option value="demorgan">(A \\u222a B)\\u1d9c = A\\u1d9c \\u2229 B\\u1d9c</option>' +
              '</select>';
            wrap.appendChild(controls);

            var viz = new VizEngine(wrap, { width: 700, height: 400 });
            var sel = controls.querySelector('#set-op-sel');

            function draw() {
              viz.clear();
              var ctx = viz.ctx;
              var op = sel.value;
              var cx = 350, cy = 200;
              var rA = 110, rB = 110;
              var axA = cx - 60, ayA = cy;
              var axB = cx + 60, ayB = cy;

              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              var titles = { union: 'A \\u222a B (Union)', inter: 'A \\u2229 B (Intersection)', diff: 'A \\u2216 B (Difference)', comp: 'A\\u1d9c (Complement of A)', demorgan: 'De Morgan: (A \\u222a B)\\u1d9c = A\\u1d9c \\u2229 B\\u1d9c' };
              ctx.fillText(titles[op], cx, 30);

              // Universal set rectangle for complement operations
              if (op === 'comp' || op === 'demorgan') {
                ctx.strokeStyle = '#8b949e';
                ctx.lineWidth = 2;
                ctx.setLineDash([5, 5]);
                ctx.strokeRect(cx - 250, 50, 500, 310);
                ctx.setLineDash([]);
                ctx.fillStyle = '#8b949e';
                ctx.font = '14px -apple-system,sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText('U', cx - 240, 70);
              }

              // Draw highlighted region
              ctx.save();
              if (op === 'union') {
                ctx.beginPath();
                ctx.arc(axA, ayA, rA, 0, 2 * Math.PI);
                ctx.arc(axB, ayB, rB, 0, 2 * Math.PI);
                ctx.fillStyle = 'rgba(88,166,255,0.3)';
                ctx.fill();
              } else if (op === 'inter') {
                ctx.beginPath();
                ctx.arc(axA, ayA, rA, 0, 2 * Math.PI);
                ctx.clip();
                ctx.beginPath();
                ctx.arc(axB, ayB, rB, 0, 2 * Math.PI);
                ctx.fillStyle = 'rgba(88,166,255,0.3)';
                ctx.fill();
              } else if (op === 'diff') {
                ctx.beginPath();
                ctx.arc(axA, ayA, rA, 0, 2 * Math.PI);
                ctx.fillStyle = 'rgba(88,166,255,0.3)';
                ctx.fill();
                ctx.globalCompositeOperation = 'destination-out';
                ctx.beginPath();
                ctx.arc(axB, ayB, rB, 0, 2 * Math.PI);
                ctx.fill();
                ctx.globalCompositeOperation = 'source-over';
              } else if (op === 'comp') {
                ctx.fillStyle = 'rgba(88,166,255,0.2)';
                ctx.fillRect(cx - 250, 50, 500, 310);
                ctx.globalCompositeOperation = 'destination-out';
                ctx.beginPath();
                ctx.arc(axA, ayA, rA, 0, 2 * Math.PI);
                ctx.fill();
                ctx.globalCompositeOperation = 'source-over';
              } else if (op === 'demorgan') {
                ctx.fillStyle = 'rgba(88,166,255,0.2)';
                ctx.fillRect(cx - 250, 50, 500, 310);
                ctx.globalCompositeOperation = 'destination-out';
                ctx.beginPath();
                ctx.arc(axA, ayA, rA, 0, 2 * Math.PI);
                ctx.arc(axB, ayB, rB, 0, 2 * Math.PI);
                ctx.fill();
                ctx.globalCompositeOperation = 'source-over';
              }
              ctx.restore();

              // Draw circle outlines
              ctx.strokeStyle = '#58a6ff';
              ctx.lineWidth = 2;
              ctx.beginPath(); ctx.arc(axA, ayA, rA, 0, 2 * Math.PI); ctx.stroke();
              ctx.strokeStyle = '#f78166';
              ctx.beginPath(); ctx.arc(axB, ayB, rB, 0, 2 * Math.PI); ctx.stroke();

              // Labels
              ctx.fillStyle = '#58a6ff';
              ctx.font = 'bold 18px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('A', axA - 50, ayA);
              ctx.fillStyle = '#f78166';
              ctx.fillText('B', axB + 50, ayB);

              ctx.fillStyle = '#8b949e';
              ctx.font = '13px -apple-system,sans-serif';
              ctx.fillText('Shaded region shows the result of the operation', cx, 380);
            }

            draw();
            sel.addEventListener('change', draw);
            return viz;
          }
        },
        {
          id: 'viz-power-set',
          title: 'Power Set Visualizer',
          setup: function(container) {
            var wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            var controls = document.createElement('div');
            controls.style.cssText = 'margin-bottom:10px;display:flex;gap:12px;align-items:center;';
            controls.innerHTML = '<label style="color:#c9d1d9;font-size:14px;">|A| = </label>' +
              '<input type="range" id="pset-slider" min="0" max="4" value="2" style="width:120px;">' +
              '<span id="pset-label" style="color:#58a6ff;font-weight:bold;font-size:14px;">2</span>';
            wrap.appendChild(controls);

            var viz = new VizEngine(wrap, { width: 700, height: 400 });
            var slider = controls.querySelector('#pset-slider');
            var label = controls.querySelector('#pset-label');

            function getSubsets(n) {
              var elems = [];
              for (var i = 1; i <= n; i++) elems.push(i);
              var result = [];
              for (var mask = 0; mask < (1 << n); mask++) {
                var sub = [];
                for (var j = 0; j < n; j++) {
                  if (mask & (1 << j)) sub.push(elems[j]);
                }
                result.push(sub);
              }
              result.sort(function(a, b) { return a.length - b.length; });
              return result;
            }

            function draw() {
              var n = parseInt(slider.value);
              label.textContent = n;
              viz.clear();
              var ctx = viz.ctx;
              var subsets = getSubsets(n);
              var total = subsets.length;

              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              var setStr = '{' + (n > 0 ? Array.from({length: n}, function(_, i) { return i + 1; }).join(', ') : '') + '}';
              ctx.fillText('P(' + setStr + ')    |P(A)| = 2^' + n + ' = ' + total, 350, 30);

              var cols = Math.min(total, 8);
              var rows = Math.ceil(total / cols);
              var cellW = Math.min(80, 640 / cols);
              var cellH = Math.min(40, 320 / rows);
              var startX = 350 - (cols * cellW) / 2;
              var startY = 55;

              ctx.font = '13px -apple-system,sans-serif';
              for (var i = 0; i < total; i++) {
                var r = Math.floor(i / cols);
                var c = i % cols;
                var x = startX + c * cellW;
                var y = startY + r * cellH;
                var sub = subsets[i];
                var str = sub.length === 0 ? '\\u2205' : '{' + sub.join(',') + '}';

                var hue = (sub.length / n) * 240;
                ctx.fillStyle = 'hsla(' + hue + ', 60%, 50%, 0.15)';
                ctx.fillRect(x + 2, y + 2, cellW - 4, cellH - 4);
                ctx.strokeStyle = '#30363d';
                ctx.lineWidth = 0.5;
                ctx.strokeRect(x + 2, y + 2, cellW - 4, cellH - 4);

                ctx.fillStyle = 'hsl(' + hue + ', 70%, 70%)';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(str, x + cellW / 2, y + cellH / 2);
              }

              ctx.fillStyle = '#8b949e';
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Subsets are grouped by cardinality (size)', 350, 385);
            }

            draw();
            slider.addEventListener('input', draw);
            return viz;
          }
        }
      ],
      exercises: [
        {
          question: 'Let \\(A = \\{1,2,3,4,5\\}\\) and \\(B = \\{3,4,5,6,7\\}\\). Find \\(A \\cup B\\), \\(A \\cap B\\), and \\(A \\setminus B\\).',
          hint: 'Apply the definitions directly. The union includes all elements from both sets.',
          solution: '\\(A \\cup B = \\{1,2,3,4,5,6,7\\}\\), \\(A \\cap B = \\{3,4,5\\}\\), \\(A \\setminus B = \\{1,2\\}\\).'
        },
        {
          question: 'Prove that \\(A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)\\) for any sets \\(A, B, C\\).',
          hint: 'Show double inclusion: take an element from the left side and show it belongs to the right, then vice versa.',
          solution: 'If \\(x \\in A \\cap (B \\cup C)\\), then \\(x \\in A\\) and \\(x \\in B \\cup C\\). So \\(x \\in B\\) or \\(x \\in C\\). If \\(x \\in B\\), then \\(x \\in A \\cap B\\); if \\(x \\in C\\), then \\(x \\in A \\cap C\\). Either way \\(x \\in (A \\cap B) \\cup (A \\cap C)\\). The reverse inclusion is similar.'
        },
        {
          question: 'How many elements does \\(\\mathcal{P}(\\{a, b, c, d\\})\\) have? List all subsets of size exactly 2.',
          hint: 'The power set of a set with \\(n\\) elements has \\(2^n\\) elements.',
          solution: '\\(|\\mathcal{P}(\\{a,b,c,d\\})| = 2^4 = 16\\). The subsets of size 2 are: \\(\\{a,b\\}, \\{a,c\\}, \\{a,d\\}, \\{b,c\\}, \\{b,d\\}, \\{c,d\\}\\). There are \\(\\binom{4}{2} = 6\\) of them.'
        }
      ]
    },

    // ─── SECTION 2 ────────────────────────────────────────────────────────────
    {
      id: 'ch00-sec02',
      title: '2. Functions',
      content: `
<h2>Functions</h2>
<p class="section-roadmap"><em>Functions are the morphisms of set theory, and their properties (injectivity, surjectivity, bijectivity) will reappear as group homomorphisms, ring homomorphisms, and isomorphisms throughout algebra.</em></p>

<div class="env-block definition"><div class="env-title">Definition 0.7 (Function)</div><div class="env-body">
<p>A <strong>function</strong> \\(f: A \\to B\\) is a rule that assigns to each element \\(a \\in A\\) exactly one element \\(f(a) \\in B\\). The set \\(A\\) is the <strong>domain</strong>, \\(B\\) is the <strong>codomain</strong>, and the <strong>image</strong> (or range) is \\(\\operatorname{im}(f) = \\{f(a) : a \\in A\\} \\subseteq B\\).</p>
</div></div>

<div class="env-block definition"><div class="env-title">Definition 0.8 (Injective, Surjective, Bijective)</div><div class="env-body">
<p>Let \\(f: A \\to B\\) be a function.</p>
<ul>
  <li>\\(f\\) is <strong>injective</strong> (one-to-one) if \\(f(a_1) = f(a_2) \\implies a_1 = a_2\\).</li>
  <li>\\(f\\) is <strong>surjective</strong> (onto) if for every \\(b \\in B\\), there exists \\(a \\in A\\) with \\(f(a) = b\\).</li>
  <li>\\(f\\) is <strong>bijective</strong> if it is both injective and surjective.</li>
</ul>
</div></div>

<div class="env-block intuition"><div class="env-title">Intuition</div><div class="env-body">
<p>Injective means no two arrows land on the same target. Surjective means every target gets hit by at least one arrow. Bijective means a perfect one-to-one correspondence.</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 0.9</div><div class="env-body">
<p>The function \\(f: \\mathbb{R} \\to \\mathbb{R}\\) defined by \\(f(x) = x^2\\) is neither injective (since \\(f(1) = f(-1) = 1\\)) nor surjective (since \\(-1\\) is not in the image). However, \\(f: \\mathbb{R}_{\\geq 0} \\to \\mathbb{R}_{\\geq 0}\\) given by \\(f(x) = x^2\\) is bijective.</p>
</div></div>

<div class="env-block definition"><div class="env-title">Definition 0.10 (Composition)</div><div class="env-body">
<p>If \\(f: A \\to B\\) and \\(g: B \\to C\\), the <strong>composition</strong> \\(g \\circ f: A \\to C\\) is defined by \\((g \\circ f)(a) = g(f(a))\\).</p>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 0.11</div><div class="env-body">
<p>Let \\(f: A \\to B\\) and \\(g: B \\to C\\).</p>
<ol>
  <li>If \\(f\\) and \\(g\\) are injective, then \\(g \\circ f\\) is injective.</li>
  <li>If \\(f\\) and \\(g\\) are surjective, then \\(g \\circ f\\) is surjective.</li>
  <li>If \\(g \\circ f\\) is injective, then \\(f\\) is injective.</li>
  <li>If \\(g \\circ f\\) is surjective, then \\(g\\) is surjective.</li>
</ol>
</div></div>

<div class="env-block proof"><div class="env-title">Proof (of 1 and 3)</div><div class="env-body">
<p>(1) Suppose \\((g \\circ f)(a_1) = (g \\circ f)(a_2)\\). Then \\(g(f(a_1)) = g(f(a_2))\\). Since \\(g\\) is injective, \\(f(a_1) = f(a_2)\\). Since \\(f\\) is injective, \\(a_1 = a_2\\).</p>
<p>(3) Suppose \\(f(a_1) = f(a_2)\\). Then \\(g(f(a_1)) = g(f(a_2))\\), i.e., \\((g \\circ f)(a_1) = (g \\circ f)(a_2)\\). Since \\(g \\circ f\\) is injective, \\(a_1 = a_2\\). \\(\\square\\)</p>
</div></div>

<div class="env-block definition"><div class="env-title">Definition 0.12 (Inverse Function)</div><div class="env-body">
<p>A function \\(f: A \\to B\\) has an <strong>inverse</strong> \\(f^{-1}: B \\to A\\) if \\(f^{-1} \\circ f = \\operatorname{id}_A\\) and \\(f \\circ f^{-1} = \\operatorname{id}_B\\). A function is invertible if and only if it is bijective.</p>
</div></div>
`,
      visualizations: [
        {
          id: 'viz-function-types',
          title: 'Injective, Surjective, and Bijective Functions',
          setup: function(container) {
            var wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            var controls = document.createElement('div');
            controls.style.cssText = 'margin-bottom:10px;display:flex;gap:10px;align-items:center;';
            controls.innerHTML = '<label style="color:#c9d1d9;font-size:14px;">Type: </label>' +
              '<select id="fn-type-sel" style="background:#161b22;color:#c9d1d9;border:1px solid #30363d;padding:4px 8px;border-radius:4px;">' +
              '<option value="inj">Injective (not surjective)</option>' +
              '<option value="surj">Surjective (not injective)</option>' +
              '<option value="bij">Bijective</option>' +
              '<option value="neither">Neither</option>' +
              '</select>';
            wrap.appendChild(controls);

            var viz = new VizEngine(wrap, { width: 700, height: 400 });
            var sel = controls.querySelector('#fn-type-sel');

            var configs = {
              inj: { domain: ['a','b','c'], codomain: ['1','2','3','4'], arrows: [[0,0],[1,2],[2,3]] },
              surj: { domain: ['a','b','c','d'], codomain: ['1','2','3'], arrows: [[0,0],[1,0],[2,1],[3,2]] },
              bij: { domain: ['a','b','c'], codomain: ['1','2','3'], arrows: [[0,1],[1,0],[2,2]] },
              neither: { domain: ['a','b','c'], codomain: ['1','2','3','4'], arrows: [[0,0],[1,0],[2,2]] }
            };

            function draw() {
              viz.clear();
              var ctx = viz.ctx;
              var cfg = configs[sel.value];
              var dom = cfg.domain;
              var cod = cfg.codomain;
              var arr = cfg.arrows;

              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              var labels = { inj: 'Injective (one-to-one), not surjective', surj: 'Surjective (onto), not injective', bij: 'Bijective (one-to-one correspondence)', neither: 'Neither injective nor surjective' };
              ctx.fillText(labels[sel.value], 350, 30);

              var domX = 200, codX = 500;
              var domSpacing = 280 / (dom.length + 1);
              var codSpacing = 280 / (cod.length + 1);
              var startY = 60;

              // Domain oval
              ctx.strokeStyle = '#58a6ff';
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.ellipse(domX, startY + 140, 70, 160, 0, 0, 2 * Math.PI);
              ctx.stroke();
              ctx.fillStyle = '#58a6ff';
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.fillText('A (domain)', domX, startY + 320);

              // Codomain oval
              ctx.strokeStyle = '#f78166';
              ctx.beginPath();
              ctx.ellipse(codX, startY + 140, 70, 160, 0, 0, 2 * Math.PI);
              ctx.stroke();
              ctx.fillStyle = '#f78166';
              ctx.fillText('B (codomain)', codX, startY + 320);

              // Domain points
              var domPositions = [];
              for (var i = 0; i < dom.length; i++) {
                var y = startY + (i + 1) * domSpacing;
                domPositions.push({ x: domX, y: y });
                ctx.fillStyle = '#58a6ff';
                ctx.beginPath(); ctx.arc(domX, y, 6, 0, 2 * Math.PI); ctx.fill();
                ctx.font = '14px -apple-system,sans-serif';
                ctx.textAlign = 'right';
                ctx.fillText(dom[i], domX - 15, y + 5);
              }

              // Codomain points
              var codPositions = [];
              for (var j = 0; j < cod.length; j++) {
                var y2 = startY + (j + 1) * codSpacing;
                codPositions.push({ x: codX, y: y2 });
                ctx.fillStyle = '#f78166';
                ctx.beginPath(); ctx.arc(codX, y2, 6, 0, 2 * Math.PI); ctx.fill();
                ctx.font = '14px -apple-system,sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(cod[j], codX + 15, y2 + 5);
              }

              // Arrows
              ctx.strokeStyle = '#7ee787';
              ctx.lineWidth = 1.5;
              for (var k = 0; k < arr.length; k++) {
                var from = domPositions[arr[k][0]];
                var to = codPositions[arr[k][1]];
                ctx.beginPath();
                ctx.moveTo(from.x + 8, from.y);
                ctx.lineTo(to.x - 8, to.y);
                ctx.stroke();
                // arrowhead
                var angle = Math.atan2(to.y - from.y, to.x - from.x);
                ctx.beginPath();
                ctx.moveTo(to.x - 8, to.y);
                ctx.lineTo(to.x - 8 - 8 * Math.cos(angle - 0.3), to.y - 8 * Math.sin(angle - 0.3));
                ctx.moveTo(to.x - 8, to.y);
                ctx.lineTo(to.x - 8 - 8 * Math.cos(angle + 0.3), to.y - 8 * Math.sin(angle + 0.3));
                ctx.stroke();
              }
            }

            draw();
            sel.addEventListener('change', draw);
            return viz;
          }
        }
      ],
      exercises: [
        {
          question: 'Let \\(f: \\mathbb{Z} \\to \\mathbb{Z}\\) be defined by \\(f(n) = 2n + 1\\). Is \\(f\\) injective? Is \\(f\\) surjective?',
          hint: 'For injectivity, assume \\(f(a) = f(b)\\) and solve. For surjectivity, ask whether every integer is of the form \\(2n+1\\).',
          solution: 'Injective: If \\(2a + 1 = 2b + 1\\), then \\(a = b\\). So \\(f\\) is injective. Surjective: The image consists of odd integers only (e.g., \\(4\\) is not in the image), so \\(f\\) is not surjective.'
        },
        {
          question: 'Let \\(f: A \\to B\\) and \\(g: B \\to C\\). Prove that if \\(g \\circ f\\) is surjective, then \\(g\\) is surjective.',
          hint: 'Take an arbitrary \\(c \\in C\\) and use the surjectivity of \\(g \\circ f\\) to find a preimage under \\(g\\).',
          solution: 'Let \\(c \\in C\\). Since \\(g \\circ f\\) is surjective, there exists \\(a \\in A\\) with \\((g \\circ f)(a) = c\\), i.e., \\(g(f(a)) = c\\). Setting \\(b = f(a) \\in B\\), we have \\(g(b) = c\\). So \\(g\\) is surjective.'
        },
        {
          question: 'Give an example of functions \\(f: A \\to B\\) and \\(g: B \\to A\\) such that \\(g \\circ f = \\operatorname{id}_A\\) but \\(f \\circ g \\neq \\operatorname{id}_B\\).',
          hint: 'Try \\(A = \\{1\\}\\) and \\(B = \\{1, 2\\}\\).',
          solution: 'Let \\(A = \\{1\\}\\), \\(B = \\{1,2\\}\\). Define \\(f(1) = 1\\) and \\(g(1) = 1, g(2) = 1\\). Then \\((g \\circ f)(1) = g(1) = 1 = \\operatorname{id}_A(1)\\). But \\((f \\circ g)(2) = f(1) = 1 \\neq 2\\), so \\(f \\circ g \\neq \\operatorname{id}_B\\). Here \\(f\\) is injective but not surjective, and \\(g\\) is a left inverse of \\(f\\) but not a right inverse.'
        }
      ]
    },

    // ─── SECTION 3 ────────────────────────────────────────────────────────────
    {
      id: 'ch00-sec03',
      title: '3. Equivalence Relations and Partitions',
      content: `
<h2>Equivalence Relations and Partitions</h2>
<p class="section-roadmap"><em>Equivalence relations formalize the idea of "sameness up to some criterion." They give rise to quotient constructions that pervade abstract algebra, from cosets to quotient rings.</em></p>

<div class="env-block definition"><div class="env-title">Definition 0.13 (Relation)</div><div class="env-body">
<p>A <strong>relation</strong> on a set \\(A\\) is a subset \\(R \\subseteq A \\times A\\). We write \\(a \\sim b\\) (or \\(aRb\\)) if \\((a,b) \\in R\\).</p>
</div></div>

<div class="env-block definition"><div class="env-title">Definition 0.14 (Equivalence Relation)</div><div class="env-body">
<p>A relation \\(\\sim\\) on \\(A\\) is an <strong>equivalence relation</strong> if it satisfies:</p>
<ol>
  <li><strong>Reflexive:</strong> \\(a \\sim a\\) for all \\(a \\in A\\).</li>
  <li><strong>Symmetric:</strong> \\(a \\sim b \\implies b \\sim a\\).</li>
  <li><strong>Transitive:</strong> \\(a \\sim b\\) and \\(b \\sim c \\implies a \\sim c\\).</li>
</ol>
</div></div>

<div class="env-block definition"><div class="env-title">Definition 0.15 (Equivalence Class)</div><div class="env-body">
<p>Given an equivalence relation \\(\\sim\\) on \\(A\\), the <strong>equivalence class</strong> of \\(a \\in A\\) is \\([a] = \\{x \\in A : x \\sim a\\}\\). The set of all equivalence classes is denoted \\(A/\\!\\sim\\).</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 0.16</div><div class="env-body">
<p>On \\(\\mathbb{Z}\\), define \\(a \\sim b\\) if \\(a - b\\) is even. This is an equivalence relation with exactly two classes: the even integers \\([0] = \\{\\ldots, -2, 0, 2, 4, \\ldots\\}\\) and the odd integers \\([1] = \\{\\ldots, -1, 1, 3, 5, \\ldots\\}\\).</p>
</div></div>

<div class="env-block definition"><div class="env-title">Definition 0.17 (Partition)</div><div class="env-body">
<p>A <strong>partition</strong> of a set \\(A\\) is a collection \\(\\{A_i\\}_{i \\in I}\\) of nonempty subsets of \\(A\\) such that:</p>
<ol>
  <li>\\(A = \\bigcup_{i \\in I} A_i\\) (the parts cover \\(A\\)),</li>
  <li>\\(A_i \\cap A_j = \\varnothing\\) for \\(i \\neq j\\) (the parts are pairwise disjoint).</li>
</ol>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 0.18 (Equivalence Relations = Partitions)</div><div class="env-body">
<p>Let \\(A\\) be a nonempty set.</p>
<ol>
  <li>If \\(\\sim\\) is an equivalence relation on \\(A\\), then the equivalence classes \\(\\{[a] : a \\in A\\}\\) form a partition of \\(A\\).</li>
  <li>If \\(\\{A_i\\}_{i \\in I}\\) is a partition of \\(A\\), then the relation \\(a \\sim b \\iff a\\) and \\(b\\) lie in the same part is an equivalence relation, whose classes are exactly the \\(A_i\\).</li>
</ol>
</div></div>

<div class="env-block proof"><div class="env-title">Proof (sketch of 1)</div><div class="env-body">
<p>Each \\(a \\in A\\) belongs to \\([a]\\) (by reflexivity), so the classes cover \\(A\\). If \\([a] \\cap [b] \\neq \\varnothing\\), pick \\(c \\in [a] \\cap [b]\\). Then \\(c \\sim a\\) and \\(c \\sim b\\), so \\(a \\sim b\\) by symmetry and transitivity, which gives \\([a] = [b]\\). Thus distinct classes are disjoint. \\(\\square\\)</p>
</div></div>

<div class="env-block remark"><div class="env-title">Why This Matters in Algebra</div><div class="env-body">
<p>When we later define cosets of a subgroup \\(H \\leq G\\), we are partitioning \\(G\\) via the equivalence relation \\(a \\sim b \\iff a^{-1}b \\in H\\). The quotient group \\(G/H\\) is precisely the set of equivalence classes.</p>
</div></div>
`,
      visualizations: [
        {
          id: 'viz-equivalence-classes',
          title: 'Equivalence Classes on Z mod n',
          setup: function(container) {
            var wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            var controls = document.createElement('div');
            controls.style.cssText = 'margin-bottom:10px;display:flex;gap:12px;align-items:center;';
            controls.innerHTML = '<label style="color:#c9d1d9;font-size:14px;">Modulus n: </label>' +
              '<input type="range" id="eqclass-slider" min="2" max="6" value="3" style="width:120px;">' +
              '<span id="eqclass-label" style="color:#58a6ff;font-weight:bold;font-size:14px;">3</span>';
            wrap.appendChild(controls);

            var viz = new VizEngine(wrap, { width: 700, height: 400 });
            var slider = controls.querySelector('#eqclass-slider');
            var label = controls.querySelector('#eqclass-label');

            function draw() {
              var n = parseInt(slider.value);
              label.textContent = n;
              viz.clear();
              var ctx = viz.ctx;

              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Equivalence classes of Z mod ' + n, 350, 28);
              ctx.font = '13px -apple-system,sans-serif';
              ctx.fillStyle = '#8b949e';
              ctx.fillText('Integers 0 through 19, colored by equivalence class', 350, 48);

              var colors = ['#58a6ff', '#f78166', '#7ee787', '#d2a8ff', '#f0e68c', '#ff7eb3'];
              var rowH = 50;
              var startY = 70;

              for (var cls = 0; cls < n; cls++) {
                var y = startY + cls * rowH;
                ctx.fillStyle = colors[cls % colors.length];
                ctx.font = 'bold 14px -apple-system,sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText('[' + cls + ']:', 20, y + 20);

                var members = [];
                for (var k = cls; k < 20; k += n) members.push(k);

                ctx.font = '13px -apple-system,sans-serif';
                for (var m = 0; m < members.length; m++) {
                  var x = 70 + m * 55;
                  ctx.fillStyle = colors[cls % colors.length] + '25';
                  ctx.fillRect(x, y + 4, 46, 26);
                  ctx.strokeStyle = colors[cls % colors.length];
                  ctx.lineWidth = 1;
                  ctx.strokeRect(x, y + 4, 46, 26);
                  ctx.fillStyle = colors[cls % colors.length];
                  ctx.textAlign = 'center';
                  ctx.fillText(String(members[m]), x + 23, y + 22);
                }
              }

              ctx.fillStyle = '#8b949e';
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Each row is one equivalence class; together they partition Z', 350, 385);
            }

            draw();
            slider.addEventListener('input', draw);
            return viz;
          }
        }
      ],
      exercises: [
        {
          question: 'Verify that the relation \\(a \\sim b \\iff 3 \\mid (a - b)\\) is an equivalence relation on \\(\\mathbb{Z}\\). How many equivalence classes are there?',
          hint: 'Check reflexive (\\(3 \\mid 0\\)), symmetric (\\(3 \\mid (a-b) \\implies 3 \\mid (b-a)\\)), and transitive.',
          solution: 'Reflexive: \\(a - a = 0\\) and \\(3 \\mid 0\\). Symmetric: if \\(3 \\mid (a-b)\\) then \\(a - b = 3k\\), so \\(b - a = -3k\\) and \\(3 \\mid (b-a)\\). Transitive: if \\(3 \\mid (a-b)\\) and \\(3 \\mid (b-c)\\), then \\(a - c = (a-b) + (b-c)\\) is divisible by 3. There are 3 equivalence classes: \\([0], [1], [2]\\).'
        },
        {
          question: 'Let \\(A = \\{1,2,3,4,5,6\\}\\) with partition \\(\\{\\{1,3,5\\}, \\{2,4\\}, \\{6\\}\\}\\). Write out the corresponding equivalence relation as a set of pairs.',
          hint: 'Two elements are related if and only if they are in the same part of the partition.',
          solution: 'The relation is \\(\\{(1,1),(1,3),(1,5),(3,1),(3,3),(3,5),(5,1),(5,3),(5,5),\\) \\((2,2),(2,4),(4,2),(4,4),\\) \\((6,6)\\}\\). Each part generates a "block" of pairs.'
        },
        {
          question: 'Prove that if \\([a] \\cap [b] \\neq \\varnothing\\), then \\([a] = [b]\\).',
          hint: 'Pick an element \\(c\\) in the intersection, and show any element of \\([a]\\) must be in \\([b]\\).',
          solution: 'Let \\(c \\in [a] \\cap [b]\\), so \\(c \\sim a\\) and \\(c \\sim b\\). Take any \\(x \\in [a]\\), meaning \\(x \\sim a\\). By symmetry, \\(a \\sim c\\), and since \\(c \\sim b\\), by transitivity \\(a \\sim b\\). Then \\(x \\sim a \\sim b\\) gives \\(x \\sim b\\), so \\(x \\in [b]\\). Thus \\([a] \\subseteq [b]\\). By a symmetric argument, \\([b] \\subseteq [a]\\).'
        },
        {
          question: 'Define a relation on \\(\\mathbb{R}^2\\) by \\((x_1, y_1) \\sim (x_2, y_2)\\) iff \\(x_1^2 + y_1^2 = x_2^2 + y_2^2\\). Show this is an equivalence relation and describe the equivalence classes geometrically.',
          hint: 'The quantity \\(x^2 + y^2\\) is the squared distance from the origin.',
          solution: 'Reflexive, symmetric, and transitive all follow because equality of real numbers is an equivalence relation. Each class \\([(a,b)]\\) consists of all points at distance \\(\\sqrt{a^2+b^2}\\) from the origin, i.e., a circle centered at the origin (or the single point \\(\\{(0,0)\\}\\) if \\(a = b = 0\\)).'
        }
      ]
    },

    // ─── SECTION 4 ────────────────────────────────────────────────────────────
    {
      id: 'ch00-sec04',
      title: '4. Modular Arithmetic',
      content: `
<h2>Modular Arithmetic</h2>
<p class="section-roadmap"><em>Modular arithmetic is our first serious example of a quotient construction. The integers modulo n will serve as the prototypical example of a group and a ring throughout the course.</em></p>

<div class="env-block definition"><div class="env-title">Definition 0.19 (Congruence Modulo n)</div><div class="env-body">
<p>Let \\(n \\geq 1\\) be an integer. We say \\(a\\) is <strong>congruent to</strong> \\(b\\) <strong>modulo</strong> \\(n\\), written \\(a \\equiv b \\pmod{n}\\), if \\(n \\mid (a - b)\\).</p>
</div></div>

<div class="env-block remark"><div class="env-title">Remark</div><div class="env-body">
<p>Congruence mod \\(n\\) is exactly the equivalence relation from Section 3 with \\(n\\) classes \\([0], [1], \\ldots, [n-1]\\). The set of classes is denoted \\(\\mathbb{Z}/n\\mathbb{Z}\\).</p>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 0.20 (Well-Defined Arithmetic)</div><div class="env-body">
<p>If \\(a \\equiv a' \\pmod{n}\\) and \\(b \\equiv b' \\pmod{n}\\), then:</p>
\\[a + b \\equiv a' + b' \\pmod{n}, \\qquad a \\cdot b \\equiv a' \\cdot b' \\pmod{n}.\\]
<p>Thus addition and multiplication on \\(\\mathbb{Z}/n\\mathbb{Z}\\) are well-defined.</p>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>Write \\(a = a' + sn\\) and \\(b = b' + tn\\). Then \\(a + b = a' + b' + (s+t)n\\), so \\(a + b \\equiv a' + b' \\pmod{n}\\). For multiplication, \\(ab = a'b' + a'tn + b'sn + stn^2 = a'b' + (a't + b's + stn)n\\), so \\(ab \\equiv a'b' \\pmod{n}\\). \\(\\square\\)</p>
</div></div>

<div class="env-block definition"><div class="env-title">Definition 0.21 (Units)</div><div class="env-body">
<p>An element \\([a] \\in \\mathbb{Z}/n\\mathbb{Z}\\) is a <strong>unit</strong> if there exists \\([b]\\) with \\([a][b] = [1]\\). The set of units is denoted \\((\\mathbb{Z}/n\\mathbb{Z})^\\times\\). One can show \\([a]\\) is a unit if and only if \\(\\gcd(a, n) = 1\\).</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 0.22</div><div class="env-body">
<p>In \\(\\mathbb{Z}/6\\mathbb{Z}\\), the units are \\([1]\\) and \\([5]\\) since \\(\\gcd(1,6) = \\gcd(5,6) = 1\\). Note \\([5] \\cdot [5] = [25] = [1]\\), so \\([5]\\) is its own inverse. The elements \\([2], [3], [4]\\) are not units: \\([2] \\cdot [3] = [0]\\) (they are zero divisors).</p>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 0.23</div><div class="env-body">
<p>\\(\\mathbb{Z}/n\\mathbb{Z}\\) is a field (every nonzero element is a unit) if and only if \\(n\\) is prime.</p>
</div></div>
`,
      visualizations: [
        {
          id: 'viz-mod-arithmetic-table',
          title: 'Addition and Multiplication Tables mod n',
          setup: function(container) {
            var wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            var controls = document.createElement('div');
            controls.style.cssText = 'margin-bottom:10px;display:flex;gap:12px;align-items:center;flex-wrap:wrap;';
            controls.innerHTML = '<label style="color:#c9d1d9;font-size:14px;">n = </label>' +
              '<input type="range" id="mod-slider" min="2" max="8" value="5" style="width:120px;">' +
              '<span id="mod-label" style="color:#58a6ff;font-weight:bold;font-size:14px;">5</span>' +
              '<label style="color:#c9d1d9;font-size:14px;margin-left:20px;">Operation: </label>' +
              '<select id="mod-op" style="background:#161b22;color:#c9d1d9;border:1px solid #30363d;padding:4px 8px;border-radius:4px;">' +
              '<option value="add">Addition</option>' +
              '<option value="mul">Multiplication</option>' +
              '</select>';
            wrap.appendChild(controls);

            var viz = new VizEngine(wrap, { width: 700, height: 420 });
            var slider = controls.querySelector('#mod-slider');
            var label = controls.querySelector('#mod-label');
            var opSel = controls.querySelector('#mod-op');
            var highlightRow = -1, highlightCol = -1;

            function draw() {
              var n = parseInt(slider.value);
              var op = opSel.value;
              label.textContent = n;
              viz.clear();
              var ctx = viz.ctx;

              var cellSize = Math.min(42, Math.floor(480 / (n + 1)));
              var startX = 60;
              var startY = 50;

              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              var symbol = op === 'add' ? '+' : '\\u00d7';
              ctx.fillText((op === 'add' ? 'Addition' : 'Multiplication') + ' Table for Z/' + n + 'Z', 350, 30);

              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textBaseline = 'middle';
              ctx.fillStyle = '#bc8cff';
              ctx.fillText(symbol, startX + cellSize / 2, startY + cellSize / 2);

              for (var i = 0; i < n; i++) {
                ctx.fillStyle = '#58a6ff';
                ctx.fillText(String(i), startX + (i + 1) * cellSize + cellSize / 2, startY + cellSize / 2);
                ctx.fillText(String(i), startX + cellSize / 2, startY + (i + 1) * cellSize + cellSize / 2);
              }

              ctx.font = '13px -apple-system,sans-serif';
              for (var r = 0; r < n; r++) {
                for (var c = 0; c < n; c++) {
                  var val = op === 'add' ? (r + c) % n : (r * c) % n;
                  var x = startX + (c + 1) * cellSize;
                  var y = startY + (r + 1) * cellSize;

                  if (r === highlightRow && c === highlightCol) {
                    ctx.fillStyle = '#58a6ff44';
                  } else if (r === highlightRow || c === highlightCol) {
                    ctx.fillStyle = '#58a6ff18';
                  } else {
                    ctx.fillStyle = (r + c) % 2 === 0 ? '#161b2208' : '#1a1a4015';
                  }
                  ctx.fillRect(x, y, cellSize, cellSize);
                  ctx.strokeStyle = '#30363d';
                  ctx.lineWidth = 0.5;
                  ctx.strokeRect(x, y, cellSize, cellSize);

                  var hue = (val / n) * 300;
                  ctx.fillStyle = 'hsl(' + hue + ', 70%, 65%)';
                  ctx.textAlign = 'center';
                  ctx.fillText(String(val), x + cellSize / 2, y + cellSize / 2);
                }
              }

              // Units info
              var units = [];
              for (var u = 0; u < n; u++) {
                var isUnit = false;
                for (var v = 0; v < n; v++) {
                  if ((u * v) % n === 1) { isUnit = true; break; }
                }
                if (isUnit) units.push(u);
              }

              ctx.fillStyle = '#8b949e';
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              if (highlightRow >= 0 && highlightCol >= 0) {
                var res = op === 'add' ? (highlightRow + highlightCol) % n : (highlightRow * highlightCol) % n;
                ctx.fillText(highlightRow + ' ' + symbol + ' ' + highlightCol + ' = ' + res + ' (mod ' + n + ')', startX, startY + (n + 1) * cellSize + 22);
              }
              ctx.fillText('Units: (Z/' + n + 'Z)* = {' + units.join(', ') + '}   |units| = ' + units.length, startX, startY + (n + 1) * cellSize + 42);
            }

            draw();
            slider.addEventListener('input', function() { highlightRow = -1; highlightCol = -1; draw(); });
            opSel.addEventListener('change', function() { highlightRow = -1; highlightCol = -1; draw(); });

            viz.canvas.addEventListener('mousemove', function(e) {
              var n = parseInt(slider.value);
              var cellSize = Math.min(42, Math.floor(480 / (n + 1)));
              var startX = 60, startY = 50;
              var rect = viz.canvas.getBoundingClientRect();
              var mx = e.clientX - rect.left;
              var my = e.clientY - rect.top;
              var col = Math.floor((mx - startX) / cellSize) - 1;
              var row = Math.floor((my - startY) / cellSize) - 1;
              if (row >= 0 && row < n && col >= 0 && col < n) {
                highlightRow = row; highlightCol = col;
              } else {
                highlightRow = -1; highlightCol = -1;
              }
              draw();
            });

            return viz;
          }
        },
        {
          id: 'viz-units-mod-n',
          title: 'Units in Z/nZ',
          setup: function(container) {
            var wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            var controls = document.createElement('div');
            controls.style.cssText = 'margin-bottom:10px;display:flex;gap:12px;align-items:center;';
            controls.innerHTML = '<label style="color:#c9d1d9;font-size:14px;">n = </label>' +
              '<input type="range" id="unit-slider" min="2" max="16" value="12" style="width:150px;">' +
              '<span id="unit-label" style="color:#58a6ff;font-weight:bold;font-size:14px;">12</span>';
            wrap.appendChild(controls);

            var viz = new VizEngine(wrap, { width: 700, height: 350 });
            var slider = controls.querySelector('#unit-slider');
            var label = controls.querySelector('#unit-label');

            function gcd(a, b) { while (b) { var t = b; b = a % b; a = t; } return a; }

            function draw() {
              var n = parseInt(slider.value);
              label.textContent = n;
              viz.clear();
              var ctx = viz.ctx;

              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Elements of Z/' + n + 'Z: units vs non-units', 350, 28);

              var cols = Math.min(n, 8);
              var rows = Math.ceil(n / cols);
              var cellW = Math.min(70, 600 / cols);
              var cellH = Math.min(38, 240 / rows);
              var startX = 350 - (cols * cellW) / 2;
              var startY = 55;
              var unitCount = 0;

              for (var i = 0; i < n; i++) {
                var r = Math.floor(i / cols);
                var c = i % cols;
                var x = startX + c * cellW;
                var y = startY + r * cellH;
                var isUnit = gcd(i, n) === 1;
                if (isUnit && i > 0) unitCount++;
                if (i === 1) unitCount++;

                ctx.fillStyle = isUnit ? 'rgba(126,231,135,0.2)' : 'rgba(248,129,102,0.15)';
                ctx.fillRect(x + 2, y + 2, cellW - 4, cellH - 4);
                ctx.strokeStyle = isUnit ? '#7ee787' : '#f78166';
                ctx.lineWidth = 1;
                ctx.strokeRect(x + 2, y + 2, cellW - 4, cellH - 4);

                ctx.fillStyle = isUnit ? '#7ee787' : '#f78166';
                ctx.font = '13px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(String(i), x + cellW / 2, y + cellH / 2);
              }

              var unitCountActual = 0;
              for (var j = 0; j < n; j++) { if (gcd(j, n) === 1) unitCountActual++; }

              ctx.fillStyle = '#c9d1d9';
              ctx.font = '14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'alphabetic';
              var yInfo = startY + rows * cellH + 30;
              ctx.fillStyle = '#7ee787';
              ctx.fillText('Green = unit (gcd(a, n) = 1)', 200, yInfo);
              ctx.fillStyle = '#f78166';
              ctx.fillText('Red = non-unit', 500, yInfo);

              ctx.fillStyle = '#c9d1d9';
              ctx.fillText('|(Z/' + n + 'Z)*| = \\u03c6(' + n + ') = ' + unitCountActual, 350, yInfo + 25);

              var isPrime = n >= 2;
              for (var d = 2; d * d <= n; d++) { if (n % d === 0) { isPrime = false; break; } }
              if (isPrime) {
                ctx.fillStyle = '#d2a8ff';
                ctx.fillText(n + ' is prime, so Z/' + n + 'Z is a field (every nonzero element is a unit)', 350, yInfo + 50);
              }
            }

            draw();
            slider.addEventListener('input', draw);
            return viz;
          }
        }
      ],
      exercises: [
        {
          question: 'Compute \\(17 \\cdot 23 \\pmod{5}\\) without computing \\(17 \\cdot 23\\) directly.',
          hint: 'Reduce each factor mod 5 first, then multiply.',
          solution: '\\(17 \\equiv 2 \\pmod{5}\\) and \\(23 \\equiv 3 \\pmod{5}\\). So \\(17 \\cdot 23 \\equiv 2 \\cdot 3 = 6 \\equiv 1 \\pmod{5}\\).'
        },
        {
          question: 'List all units in \\(\\mathbb{Z}/10\\mathbb{Z}\\) and find the inverse of each.',
          hint: 'The units are those \\([a]\\) with \\(\\gcd(a, 10) = 1\\).',
          solution: 'The units are \\([1], [3], [7], [9]\\). Inverses: \\([1]^{-1} = [1]\\), \\([3]^{-1} = [7]\\) (since \\(3 \\cdot 7 = 21 \\equiv 1\\)), \\([7]^{-1} = [3]\\), \\([9]^{-1} = [9]\\) (since \\(9 \\cdot 9 = 81 \\equiv 1\\)).'
        },
        {
          question: 'Show that \\(\\mathbb{Z}/4\\mathbb{Z}\\) has zero divisors. That is, find nonzero \\([a], [b]\\) with \\([a][b] = [0]\\).',
          hint: 'Try \\([2]\\).',
          solution: '\\([2] \\cdot [2] = [4] = [0]\\) in \\(\\mathbb{Z}/4\\mathbb{Z}\\). Both \\([2] \\neq [0]\\), yet their product is \\([0]\\). This shows \\(\\mathbb{Z}/4\\mathbb{Z}\\) is not an integral domain (and hence not a field), consistent with the fact that 4 is not prime.'
        }
      ]
    },

    // ─── SECTION 5 ────────────────────────────────────────────────────────────
    {
      id: 'ch00-sec05',
      title: '5. The Integers and Well-Ordering',
      content: `
<h2>The Integers and Well-Ordering</h2>
<p class="section-roadmap"><em>The division algorithm and the Euclidean algorithm are computational workhorses throughout algebra. Bezout's identity connects GCDs to linear combinations and will be essential when studying principal ideal domains.</em></p>

<div class="env-block theorem"><div class="env-title">Axiom 0.24 (Well-Ordering Principle)</div><div class="env-body">
<p>Every nonempty subset of \\(\\mathbb{N} = \\{0, 1, 2, \\ldots\\}\\) has a least element.</p>
</div></div>

<div class="env-block remark"><div class="env-title">Remark</div><div class="env-body">
<p>The well-ordering principle is equivalent to the principle of mathematical induction and to the principle of strong induction. We take it as an axiom.</p>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 0.25 (Division Algorithm)</div><div class="env-body">
<p>Let \\(a \\in \\mathbb{Z}\\) and \\(b \\in \\mathbb{Z}_{>0}\\). There exist unique integers \\(q\\) (quotient) and \\(r\\) (remainder) such that \\(a = bq + r\\) and \\(0 \\leq r < b\\).</p>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>Consider \\(S = \\{a - bk : k \\in \\mathbb{Z}, \\, a - bk \\geq 0\\}\\). This set is nonempty (choose \\(k\\) sufficiently negative). By well-ordering, \\(S\\) has a least element \\(r = a - bq\\). We have \\(r \\geq 0\\) by construction. If \\(r \\geq b\\), then \\(a - b(q+1) = r - b \\geq 0\\) is in \\(S\\) and smaller than \\(r\\), a contradiction. So \\(0 \\leq r < b\\). Uniqueness: if \\(a = bq_1 + r_1 = bq_2 + r_2\\) with \\(0 \\leq r_1, r_2 < b\\), then \\(b(q_1 - q_2) = r_2 - r_1\\). So \\(b \\mid (r_2 - r_1)\\), but \\(|r_2 - r_1| < b\\), forcing \\(r_1 = r_2\\) and \\(q_1 = q_2\\). \\(\\square\\)</p>
</div></div>

<div class="env-block definition"><div class="env-title">Definition 0.26 (GCD)</div><div class="env-body">
<p>The <strong>greatest common divisor</strong> of integers \\(a, b\\) (not both zero), denoted \\(\\gcd(a,b)\\), is the largest positive integer dividing both \\(a\\) and \\(b\\).</p>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 0.27 (Euclidean Algorithm)</div><div class="env-body">
<p>To compute \\(\\gcd(a,b)\\) with \\(a \\geq b > 0\\): apply the division algorithm repeatedly:</p>
\\[a = bq_1 + r_1, \\quad b = r_1 q_2 + r_2, \\quad r_1 = r_2 q_3 + r_3, \\quad \\ldots\\]
<p>The last nonzero remainder is \\(\\gcd(a,b)\\).</p>
</div></div>

<div class="env-block theorem"><div class="env-title">Theorem 0.28 (Bezout's Identity)</div><div class="env-body">
<p>For any integers \\(a, b\\) (not both zero), there exist integers \\(s, t\\) such that \\(\\gcd(a, b) = sa + tb\\).</p>
</div></div>

<div class="env-block proof"><div class="env-title">Proof</div><div class="env-body">
<p>Let \\(d\\) be the smallest positive element of the set \\(\\{sa + tb : s, t \\in \\mathbb{Z}\\} \\cap \\mathbb{Z}_{>0}\\) (nonempty by well-ordering). By the division algorithm, \\(a = dq + r\\) with \\(0 \\leq r < d\\). Then \\(r = a - dq = a - (s_0 a + t_0 b)q = (1 - s_0 q)a + (-t_0 q)b\\), which is a linear combination of \\(a, b\\). Since \\(r < d\\) and \\(d\\) is minimal, \\(r = 0\\). So \\(d \\mid a\\); similarly \\(d \\mid b\\). If \\(c \\mid a\\) and \\(c \\mid b\\), then \\(c \\mid (sa + tb) = d\\), so \\(c \\leq d\\). Hence \\(d = \\gcd(a,b)\\). \\(\\square\\)</p>
</div></div>

<div class="env-block example"><div class="env-title">Example 0.29</div><div class="env-body">
<p>Compute \\(\\gcd(252, 198)\\): \\(252 = 198 \\cdot 1 + 54\\), then \\(198 = 54 \\cdot 3 + 36\\), then \\(54 = 36 \\cdot 1 + 18\\), then \\(36 = 18 \\cdot 2 + 0\\). So \\(\\gcd(252, 198) = 18\\). Back-substituting: \\(18 = 54 - 36 = 54 - (198 - 54 \\cdot 3) = 4 \\cdot 54 - 198 = 4(252 - 198) - 198 = 4 \\cdot 252 - 5 \\cdot 198\\).</p>
</div></div>
`,
      visualizations: [
        {
          id: 'viz-euclidean-algorithm',
          title: 'Euclidean Algorithm Step-by-Step',
          setup: function(container) {
            var wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            var controls = document.createElement('div');
            controls.style.cssText = 'margin-bottom:10px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;';
            controls.innerHTML = '<label style="color:#c9d1d9;font-size:14px;">a = </label>' +
              '<input type="number" id="ea-a" value="252" min="1" max="9999" style="width:70px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;padding:4px;border-radius:4px;">' +
              '<label style="color:#c9d1d9;font-size:14px;">b = </label>' +
              '<input type="number" id="ea-b" value="198" min="1" max="9999" style="width:70px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;padding:4px;border-radius:4px;">' +
              '<button id="ea-go" style="background:#238636;color:#fff;border:none;padding:6px 16px;border-radius:4px;cursor:pointer;">Compute</button>';
            wrap.appendChild(controls);

            var viz = new VizEngine(wrap, { width: 700, height: 380 });
            var aInput = controls.querySelector('#ea-a');
            var bInput = controls.querySelector('#ea-b');
            var goBtn = controls.querySelector('#ea-go');

            function draw() {
              viz.clear();
              var ctx = viz.ctx;
              var a = Math.abs(parseInt(aInput.value)) || 1;
              var b = Math.abs(parseInt(bInput.value)) || 1;
              if (a < b) { var tmp = a; a = b; b = tmp; }

              ctx.fillStyle = '#c9d1d9';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Euclidean Algorithm: gcd(' + a + ', ' + b + ')', 350, 25);

              var steps = [];
              var x = a, y = b;
              while (y > 0) {
                var q = Math.floor(x / y);
                var r = x % y;
                steps.push({ a: x, b: y, q: q, r: r });
                x = y;
                y = r;
              }
              var gcdVal = x;

              ctx.font = '14px monospace';
              ctx.textAlign = 'left';
              var lineH = 26;
              var sy = 50;

              for (var i = 0; i < steps.length && i < 12; i++) {
                var s = steps[i];
                var yPos = sy + i * lineH;
                ctx.fillStyle = '#c9d1d9';
                ctx.fillText('Step ' + (i + 1) + ':  ', 30, yPos);
                ctx.fillStyle = '#58a6ff';
                ctx.fillText(s.a + ' = ' + s.b + ' \\u00d7 ' + s.q + ' + ', 120, yPos);
                ctx.fillStyle = s.r === 0 ? '#f78166' : '#7ee787';
                ctx.fillText(String(s.r), 120 + ctx.measureText(s.a + ' = ' + s.b + ' \\u00d7 ' + s.q + ' + ').width, yPos);
              }

              var resultY = sy + Math.min(steps.length, 12) * lineH + 20;
              ctx.fillStyle = '#7ee787';
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.fillText('gcd(' + a + ', ' + b + ') = ' + gcdVal, 30, resultY);

              // Bezout coefficients via extended Euclidean
              var oldR = a, r2 = b, oldS = 1, s2 = 0, oldT = 0, t2 = 1;
              while (r2 !== 0) {
                var q2 = Math.floor(oldR / r2);
                var tempR = r2; r2 = oldR - q2 * r2; oldR = tempR;
                var tempS = s2; s2 = oldS - q2 * s2; oldS = tempS;
                var tempT = t2; t2 = oldT - q2 * t2; oldT = tempT;
              }

              ctx.fillStyle = '#d2a8ff';
              ctx.font = '14px -apple-system,sans-serif';
              ctx.fillText('Bezout: ' + gcdVal + ' = (' + oldS + ')(' + a + ') + (' + oldT + ')(' + b + ')', 30, resultY + 28);

              ctx.fillStyle = '#8b949e';
              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillText('The last nonzero remainder is the GCD', 30, resultY + 55);
            }

            draw();
            goBtn.addEventListener('click', draw);
            return viz;
          }
        }
      ],
      exercises: [
        {
          question: 'Use the Euclidean algorithm to compute \\(\\gcd(420, 168)\\) and express it as a linear combination of 420 and 168.',
          hint: 'Apply the division algorithm repeatedly: \\(420 = 168 \\cdot q + r\\), then continue with 168 and \\(r\\).',
          solution: '\\(420 = 168 \\cdot 2 + 84\\), \\(168 = 84 \\cdot 2 + 0\\). So \\(\\gcd(420, 168) = 84\\). Back-substituting: \\(84 = 420 - 168 \\cdot 2 = 1 \\cdot 420 + (-2) \\cdot 168\\).'
        },
        {
          question: 'Prove that if \\(\\gcd(a, n) = 1\\), then \\([a]\\) is a unit in \\(\\mathbb{Z}/n\\mathbb{Z}\\).',
          hint: 'Use Bezout\'s identity to find \\(s, t\\) with \\(sa + tn = 1\\).',
          solution: 'By Bezout, there exist \\(s, t \\in \\mathbb{Z}\\) with \\(sa + tn = 1\\). Reducing mod \\(n\\): \\(sa \\equiv 1 \\pmod{n}\\), so \\([s][a] = [1]\\). Hence \\([a]\\) is a unit with inverse \\([s]\\).'
        },
        {
          question: 'Prove by strong induction (using the well-ordering principle) that every integer \\(n \\geq 2\\) can be written as a product of primes.',
          hint: 'If \\(n\\) is not prime, write \\(n = ab\\) with \\(2 \\leq a, b < n\\), and apply the inductive hypothesis.',
          solution: 'Consider \\(S = \\{n \\geq 2 : n \\text{ cannot be written as a product of primes}\\}\\). Suppose \\(S \\neq \\varnothing\\). By well-ordering, \\(S\\) has a least element \\(m\\). Since \\(m\\) is not prime, \\(m = ab\\) with \\(2 \\leq a, b < m\\). Since \\(a, b < m\\), neither is in \\(S\\), so both are products of primes. Then \\(m = ab\\) is also a product of primes, contradicting \\(m \\in S\\).'
        },
        {
          question: 'Show that \\(\\gcd(a, b) \\cdot \\operatorname{lcm}(a, b) = ab\\) for positive integers \\(a, b\\).',
          hint: 'Use the prime factorizations of \\(a\\) and \\(b\\). For each prime \\(p\\), \\(\\min(\\alpha, \\beta) + \\max(\\alpha, \\beta) = \\alpha + \\beta\\).',
          solution: 'Write \\(a = \\prod p_i^{\\alpha_i}\\) and \\(b = \\prod p_i^{\\beta_i}\\). Then \\(\\gcd(a,b) = \\prod p_i^{\\min(\\alpha_i, \\beta_i)}\\) and \\(\\operatorname{lcm}(a,b) = \\prod p_i^{\\max(\\alpha_i, \\beta_i)}\\). Their product is \\(\\prod p_i^{\\min(\\alpha_i,\\beta_i) + \\max(\\alpha_i,\\beta_i)} = \\prod p_i^{\\alpha_i + \\beta_i} = ab\\).'
        }
      ]
    }

  ]
});
