window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch15',
    number: 15,
    title: 'Splitting Fields and Algebraic Closures',
    subtitle: 'Existence, uniqueness, algebraic closure, Kronecker theorem',
    sections: [
        // ===== SECTION 1: Splitting Fields =====
        {
            id: 'ch15-sec01',
            title: 'Splitting Fields',
            content: `
<h2>1 &middot; Splitting Fields</h2>

<div class="env-block intuition">
<div class="env-label">Motivation</div>
Given a polynomial \\(f(x) \\in F[x]\\), we want a field extension of \\(F\\) in which \\(f(x)\\) factors completely into linear factors. The <strong>splitting field</strong> is the smallest such extension. This concept is central to Galois theory because it provides the natural setting in which symmetries of roots can be studied.
</div>

<div class="env-block definition">
<div class="env-label">Definition &mdash; Splits Over a Field</div>
Let \\(F\\) be a field and \\(f(x) \\in F[x]\\) a polynomial of degree \\(n \\geq 1\\). We say \\(f(x)\\) <strong>splits over</strong> an extension field \\(K \\supseteq F\\) if there exist \\(\\alpha_1, \\alpha_2, \\ldots, \\alpha_n \\in K\\) and a leading coefficient \\(a \\in F\\) such that
\\[
f(x) = a(x - \\alpha_1)(x - \\alpha_2) \\cdots (x - \\alpha_n).
\\]
The elements \\(\\alpha_1, \\ldots, \\alpha_n\\) are the <strong>roots</strong> of \\(f\\) in \\(K\\).
</div>

<div class="env-block definition">
<div class="env-label">Definition &mdash; Splitting Field</div>
A field extension \\(K/F\\) is a <strong>splitting field</strong> of \\(f(x) \\in F[x]\\) over \\(F\\) if:
<ol>
<li>\\(f(x)\\) splits over \\(K\\), and</li>
<li>\\(K = F(\\alpha_1, \\ldots, \\alpha_n)\\), where \\(\\alpha_1, \\ldots, \\alpha_n\\) are the roots of \\(f(x)\\) in \\(K\\).</li>
</ol>
In other words, \\(K\\) is generated over \\(F\\) by the roots of \\(f\\); no smaller extension of \\(F\\) within \\(K\\) contains all the roots.
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; Splitting Field of \\(x^2 + 1\\) over \\(\\mathbb{Q}\\)</div>
The polynomial \\(x^2 + 1\\) has no real roots, but over \\(\\mathbb{C}\\) it factors as \\((x - i)(x + i)\\). The splitting field is \\(\\mathbb{Q}(i) = \\{a + bi : a,b \\in \\mathbb{Q}\\}\\). We have \\([\\mathbb{Q}(i):\\mathbb{Q}] = 2\\) since the minimal polynomial of \\(i\\) over \\(\\mathbb{Q}\\) is \\(x^2 + 1\\), which is irreducible by the absence of rational roots.
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; Splitting Field of \\(x^3 - 2\\) over \\(\\mathbb{Q}\\)</div>
The roots of \\(x^3 - 2\\) are \\(\\sqrt[3]{2}\\), \\(\\sqrt[3]{2}\\omega\\), and \\(\\sqrt[3]{2}\\omega^2\\), where \\(\\omega = e^{2\\pi i/3} = (-1 + i\\sqrt{3})/2\\) is a primitive cube root of unity. The splitting field is \\(\\mathbb{Q}(\\sqrt[3]{2}, \\omega)\\). Note that \\(\\mathbb{Q}(\\sqrt[3]{2})\\) alone does not suffice since it is a subfield of \\(\\mathbb{R}\\) and the complex roots \\(\\sqrt[3]{2}\\omega, \\sqrt[3]{2}\\omega^2\\) are not real. The degree of the splitting field is:
\\[
[\\mathbb{Q}(\\sqrt[3]{2}, \\omega) : \\mathbb{Q}] = [\\mathbb{Q}(\\sqrt[3]{2}, \\omega) : \\mathbb{Q}(\\sqrt[3]{2})] \\cdot [\\mathbb{Q}(\\sqrt[3]{2}) : \\mathbb{Q}] = 2 \\cdot 3 = 6.
\\]
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; Splitting Field of \\(x^2 - 2\\) over \\(\\mathbb{Q}\\)</div>
The roots are \\(\\pm\\sqrt{2}\\). Since \\(-\\sqrt{2} = -1 \\cdot \\sqrt{2} \\in \\mathbb{Q}(\\sqrt{2})\\), the splitting field is simply \\(\\mathbb{Q}(\\sqrt{2})\\) with \\([\\mathbb{Q}(\\sqrt{2}):\\mathbb{Q}] = 2\\).
</div>

<div class="env-block remark">
<div class="env-label">Remark &mdash; Degree Bounds</div>
If \\(f(x) \\in F[x]\\) has degree \\(n\\), then its splitting field \\(K\\) over \\(F\\) satisfies \\([K:F] \\leq n!\\). Equality can occur; for instance, the splitting field of the "generic" polynomial \\(x^n - t\\) over \\(\\mathbb{Q}(t)\\) has degree \\(n!\\) in certain cases. However, often the degree is much smaller.
</div>

<div class="env-block proposition">
<div class="env-label">Proposition &mdash; Existence of Splitting Fields</div>
For any field \\(F\\) and any non-constant polynomial \\(f(x) \\in F[x]\\), a splitting field of \\(f(x)\\) over \\(F\\) exists.
</div>

<div class="env-block proof">
<div class="env-label">Proof (Sketch)</div>
By Kronecker's theorem (Section 2), there exists an extension \\(F_1 \\supseteq F\\) containing a root \\(\\alpha_1\\) of \\(f(x)\\). Then \\(f(x) = (x - \\alpha_1)g_1(x)\\) in \\(F_1[x]\\). Apply Kronecker again to \\(g_1(x)\\) to get \\(F_2 \\supseteq F_1\\) with a root \\(\\alpha_2\\). Repeating at most \\(n - 1\\) times, we obtain \\(F_n\\) where \\(f(x)\\) splits completely. The splitting field is \\(F(\\alpha_1, \\ldots, \\alpha_n) \\subseteq F_n\\). \\(\\square\\)
</div>

<div class="viz-container" data-viz="splitting-construction">
<div class="viz-canvas" id="splitting-construction"></div>
<div class="viz-controls" id="splitting-construction-controls"></div>
<div class="viz-caption">Step-by-step construction of a splitting field: each stage adjoins one root, producing a tower of extensions.</div>
</div>

<div class="viz-container" data-viz="roots-complex-plane-sec1">
<div class="viz-canvas" id="roots-complex-plane-sec1"></div>
<div class="viz-controls" id="roots-complex-plane-sec1-controls"></div>
<div class="viz-caption">Roots of selected polynomials plotted in the complex plane. Conjugate pairs are highlighted.</div>
</div>
`,
            visualizations: [
                {
                    id: 'splitting-construction',
                    setup: function(container, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = 580; canvas.height = 380;
                        container.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        const examples = [
                            {
                                name: 'x\u00B2+1 over Q',
                                steps: [
                                    { field: 'Q', poly: 'x\u00B2+1 irreducible', deg: 1 },
                                    { field: 'Q(i)', poly: '(x-i)(x+i)', deg: 2 }
                                ]
                            },
                            {
                                name: 'x\u00B3-2 over Q',
                                steps: [
                                    { field: 'Q', poly: 'x\u00B3-2 irreducible', deg: 1 },
                                    { field: 'Q(\u2073\u221A2)', poly: '(x-\u2073\u221A2)(x\u00B2+\u2073\u221A2 x+\u2073\u221A4)', deg: 3 },
                                    { field: 'Q(\u2073\u221A2, \u03C9)', poly: 'splits completely', deg: 6 }
                                ]
                            },
                            {
                                name: 'x\u2074-1 over Q',
                                steps: [
                                    { field: 'Q', poly: '(x-1)(x+1)(x\u00B2+1)', deg: 1 },
                                    { field: 'Q(i)', poly: '(x-1)(x+1)(x-i)(x+i)', deg: 2 }
                                ]
                            }
                        ];
                        let sel = 0;

                        const selBtn = document.createElement('select');
                        examples.forEach(function(ex, i) {
                            const opt = document.createElement('option');
                            opt.value = i; opt.textContent = ex.name;
                            selBtn.appendChild(opt);
                        });
                        selBtn.addEventListener('change', function() { sel = +selBtn.value; draw(); });
                        controls.appendChild(selBtn);

                        function draw() {
                            ctx.clearRect(0, 0, 580, 380);
                            ctx.fillStyle = '#0d1117'; ctx.fillRect(0, 0, 580, 380);
                            var ex = examples[sel];
                            var steps = ex.steps;
                            var n = steps.length;
                            var boxW = 140, boxH = 60;
                            var gap = (580 - n * boxW) / (n + 1);

                            ctx.font = 'bold 16px serif';
                            ctx.fillStyle = '#c9d1d9';
                            ctx.textAlign = 'center';
                            ctx.fillText('Splitting field construction: ' + ex.name, 290, 30);

                            for (var i = 0; i < n; i++) {
                                var x = gap + i * (boxW + gap);
                                var y = 100;
                                // Box
                                ctx.strokeStyle = i === n - 1 ? '#58a6ff' : '#30363d';
                                ctx.lineWidth = i === n - 1 ? 3 : 2;
                                ctx.fillStyle = i === n - 1 ? '#161b22' : '#0d1117';
                                ctx.beginPath(); ctx.roundRect(x, y, boxW, boxH, 8); ctx.fill(); ctx.stroke();

                                // Field name
                                ctx.fillStyle = '#58a6ff'; ctx.font = 'bold 14px monospace';
                                ctx.textAlign = 'center';
                                ctx.fillText(steps[i].field, x + boxW / 2, y + 25);

                                // Degree badge
                                ctx.fillStyle = '#238636'; ctx.font = '12px sans-serif';
                                ctx.fillText('[' + steps[i].field + ':Q] = ' + steps[i].deg, x + boxW / 2, y + 48);

                                // Arrow to next
                                if (i < n - 1) {
                                    var ax = x + boxW + 5;
                                    var ay = y + boxH / 2;
                                    var ax2 = ax + gap - 10;
                                    ctx.strokeStyle = '#8b949e'; ctx.lineWidth = 2;
                                    ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ax2, ay); ctx.stroke();
                                    ctx.beginPath(); ctx.moveTo(ax2, ay); ctx.lineTo(ax2 - 8, ay - 5); ctx.lineTo(ax2 - 8, ay + 5); ctx.closePath();
                                    ctx.fillStyle = '#8b949e'; ctx.fill();
                                }

                                // Polynomial status below
                                ctx.fillStyle = '#c9d1d9'; ctx.font = '11px monospace';
                                ctx.fillText(steps[i].poly, x + boxW / 2, y + boxH + 25);
                            }

                            // Legend
                            ctx.fillStyle = '#8b949e'; ctx.font = '12px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Each arrow adjoins one root. The final (blue) box is the splitting field.', 30, 320);
                            ctx.fillText('Degree of the splitting field = product of extension degrees at each step.', 30, 345);
                        }
                        draw();
                    }
                },
                {
                    id: 'roots-complex-plane-sec1',
                    setup: function(container, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = 580; canvas.height = 400;
                        container.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        var polys = [
                            { name: 'x\u00B2+1', roots: [{re:0,im:1},{re:0,im:-1}] },
                            { name: 'x\u00B3-2', roots: [{re:1.2599,im:0},{re:-0.63,im:1.0911},{re:-0.63,im:-1.0911}] },
                            { name: 'x\u2074-1', roots: [{re:1,im:0},{re:-1,im:0},{re:0,im:1},{re:0,im:-1}] },
                            { name: 'x\u00B3-1', roots: [{re:1,im:0},{re:-0.5,im:0.866},{re:-0.5,im:-0.866}] }
                        ];
                        var sel = 0;

                        var selEl = document.createElement('select');
                        polys.forEach(function(p, i) {
                            var opt = document.createElement('option');
                            opt.value = i; opt.textContent = p.name;
                            selEl.appendChild(opt);
                        });
                        selEl.addEventListener('change', function() { sel = +selEl.value; draw(); });
                        controls.appendChild(selEl);

                        function draw() {
                            ctx.clearRect(0, 0, 580, 400);
                            ctx.fillStyle = '#0d1117'; ctx.fillRect(0, 0, 580, 400);

                            var cx = 290, cy = 200, scale = 100;

                            // Grid
                            ctx.strokeStyle = '#21262d'; ctx.lineWidth = 1;
                            for (var g = -2; g <= 2; g++) {
                                ctx.beginPath(); ctx.moveTo(cx + g * scale, 0); ctx.lineTo(cx + g * scale, 400); ctx.stroke();
                                ctx.beginPath(); ctx.moveTo(0, cy - g * scale); ctx.lineTo(580, cy - g * scale); ctx.stroke();
                            }

                            // Axes
                            ctx.strokeStyle = '#484f58'; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(580, cy); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, 400); ctx.stroke();

                            ctx.fillStyle = '#8b949e'; ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Re', 560, cy - 8);
                            ctx.fillText('Im', cx + 12, 15);

                            // Unit circle
                            ctx.strokeStyle = '#30363d'; ctx.lineWidth = 1;
                            ctx.beginPath(); ctx.arc(cx, cy, scale, 0, 2 * Math.PI); ctx.stroke();

                            // Title
                            ctx.fillStyle = '#c9d1d9'; ctx.font = 'bold 14px serif';
                            ctx.fillText('Roots of ' + polys[sel].name + ' in the complex plane', 290, 25);

                            // Plot roots
                            var roots = polys[sel].roots;
                            var colors = ['#58a6ff', '#f0883e', '#a5d6ff', '#d2a8ff'];
                            for (var i = 0; i < roots.length; i++) {
                                var rx = cx + roots[i].re * scale;
                                var ry = cy - roots[i].im * scale;
                                ctx.beginPath(); ctx.arc(rx, ry, 7, 0, 2 * Math.PI);
                                ctx.fillStyle = colors[i % colors.length]; ctx.fill();
                                ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 1.5; ctx.stroke();

                                // Label
                                var label = roots[i].re.toFixed(2) + (roots[i].im >= 0 ? '+' : '') + roots[i].im.toFixed(2) + 'i';
                                ctx.fillStyle = '#c9d1d9'; ctx.font = '11px monospace';
                                ctx.fillText(label, rx, ry - 14);
                            }
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch15-ex01',
                    type: 'short-answer',
                    question: 'Find the splitting field of \\(x^2 - 3\\) over \\(\\mathbb{Q}\\) and determine its degree over \\(\\mathbb{Q}\\).',
                    hint: 'What are the roots? Which field do you need to adjoin them?',
                    solution: 'The roots are \\(\\pm\\sqrt{3}\\). Since \\(-\\sqrt{3} = -1 \\cdot \\sqrt{3} \\in \\mathbb{Q}(\\sqrt{3})\\), the splitting field is \\(\\mathbb{Q}(\\sqrt{3})\\) with \\([\\mathbb{Q}(\\sqrt{3}):\\mathbb{Q}] = 2\\).'
                },
                {
                    id: 'ch15-ex02',
                    type: 'short-answer',
                    question: 'Find the splitting field of \\(x^4 - 2\\) over \\(\\mathbb{Q}\\) and determine its degree.',
                    hint: 'The roots are \\(\\sqrt[4]{2}, i\\sqrt[4]{2}, -\\sqrt[4]{2}, -i\\sqrt[4]{2}\\). Which generators do you need?',
                    solution: 'The splitting field is \\(\\mathbb{Q}(\\sqrt[4]{2}, i)\\). We have \\([\\mathbb{Q}(\\sqrt[4]{2}):\\mathbb{Q}] = 4\\) and \\([\\mathbb{Q}(\\sqrt[4]{2},i):\\mathbb{Q}(\\sqrt[4]{2})] = 2\\), so the degree is \\(8\\).'
                },
                {
                    id: 'ch15-ex03',
                    type: 'mc',
                    question: 'What is the splitting field of \\(x^2 + x + 1\\) over \\(\\mathbb{F}_2\\) (the field with two elements)?',
                    options: [
                        '\\(\\mathbb{F}_2\\) itself',
                        '\\(\\mathbb{F}_4\\), a field with 4 elements',
                        '\\(\\mathbb{F}_8\\), a field with 8 elements',
                        '\\(\\mathbb{F}_2(x)\\), the field of rational functions'
                    ],
                    answer: 1,
                    explanation: 'Over \\(\\mathbb{F}_2\\), the polynomial \\(x^2 + x + 1\\) has no roots (check: \\(0^2+0+1=1 \\neq 0\\), \\(1^2+1+1=1 \\neq 0\\)). So it is irreducible, and \\(\\mathbb{F}_2[x]/(x^2+x+1) \\cong \\mathbb{F}_4\\) is the splitting field.'
                },
                {
                    id: 'ch15-ex04',
                    type: 'short-answer',
                    question: 'Show that the splitting field of \\(x^3 - 1\\) over \\(\\mathbb{Q}\\) has degree 2, not 3.',
                    hint: 'Factor \\(x^3 - 1 = (x-1)(x^2+x+1)\\). What is the minimal polynomial of a primitive cube root of unity?',
                    solution: 'We have \\(x^3 - 1 = (x-1)(x^2+x+1)\\). The root \\(x=1\\) is already in \\(\\mathbb{Q}\\). The other two roots are \\(\\omega\\) and \\(\\omega^2\\), where \\(\\omega\\) is a root of the irreducible polynomial \\(x^2+x+1\\). Since \\(\\omega^2 = -1 - \\omega \\in \\mathbb{Q}(\\omega)\\), the splitting field is \\(\\mathbb{Q}(\\omega)\\) with degree 2 over \\(\\mathbb{Q}\\).'
                }
            ]
        },

        // ===== SECTION 2: Kronecker's Theorem =====
        {
            id: 'ch15-sec02',
            title: "Kronecker's Theorem",
            content: `
<h2>2 &middot; Kronecker's Theorem</h2>

<div class="env-block intuition">
<div class="env-label">Motivation</div>
A fundamental question in algebra: given a polynomial \\(f(x) \\in F[x]\\) that has no root in \\(F\\), can we always <em>build</em> an extension field containing a root? Kronecker's theorem answers this affirmatively. The construction uses the quotient \\(F[x]/(p(x))\\) for an irreducible factor \\(p(x)\\) of \\(f(x)\\), mirroring how \\(\\mathbb{C}\\) is built from \\(\\mathbb{R}\\) via \\(\\mathbb{R}[x]/(x^2+1)\\).
</div>

<div class="env-block theorem">
<div class="env-label">Theorem (Kronecker, 1882)</div>
Let \\(F\\) be a field and \\(f(x) \\in F[x]\\) a non-constant polynomial. Then there exists an extension field \\(K \\supseteq F\\) in which \\(f(x)\\) has a root.
</div>

<div class="env-block proof">
<div class="env-label">Proof</div>
<p>Let \\(p(x)\\) be an irreducible factor of \\(f(x)\\) in \\(F[x]\\) (guaranteed by unique factorization in \\(F[x]\\), since \\(F[x]\\) is a PID). Since \\(p(x)\\) is irreducible, the ideal \\((p(x))\\) is maximal in \\(F[x]\\), so the quotient</p>
\\[
K = F[x]/(p(x))
\\]
<p>is a field. The canonical map \\(\\iota: F \\to K\\) sending \\(a \\mapsto a + (p(x))\\) is an injective ring homomorphism, so we may identify \\(F\\) with its image in \\(K\\).</p>
<p>Let \\(\\alpha = x + (p(x)) \\in K\\). Then:</p>
\\[
p(\\alpha) = p(x + (p(x))) = p(x) + (p(x)) = 0 + (p(x)) = 0_K.
\\]
<p>Since \\(p(x)\\) divides \\(f(x)\\), we have \\(f(x) = p(x)q(x)\\) for some \\(q(x) \\in F[x]\\), hence</p>
\\[
f(\\alpha) = p(\\alpha)q(\\alpha) = 0 \\cdot q(\\alpha) = 0.
\\]
<p>Thus \\(\\alpha\\) is a root of \\(f(x)\\) in \\(K\\). Moreover, \\([K:F] = \\deg p(x)\\). \\(\\square\\)</p>
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; Constructing \\(\\mathbb{C}\\) from \\(\\mathbb{R}\\)</div>
The polynomial \\(x^2 + 1\\) is irreducible over \\(\\mathbb{R}\\). Kronecker's construction gives:
\\[
\\mathbb{R}[x]/(x^2 + 1) \\cong \\mathbb{C}.
\\]
The coset \\(\\alpha = x + (x^2+1)\\) satisfies \\(\\alpha^2 + 1 = 0\\), so \\(\\alpha\\) plays the role of \\(i\\). Elements are of the form \\(a + b\\alpha\\), just like \\(a + bi\\).
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; Constructing \\(\\mathbb{F}_4\\)</div>
Over \\(\\mathbb{F}_2 = \\{0,1\\}\\), the polynomial \\(x^2 + x + 1\\) is irreducible. The quotient
\\[
\\mathbb{F}_4 = \\mathbb{F}_2[x]/(x^2+x+1) = \\{0, 1, \\alpha, 1+\\alpha\\}
\\]
is a field with 4 elements, where \\(\\alpha^2 = \\alpha + 1\\) (since \\(\\alpha^2 + \\alpha + 1 = 0\\)).
</div>

<div class="env-block corollary">
<div class="env-label">Corollary</div>
Every non-constant polynomial \\(f(x) \\in F[x]\\) has a splitting field over \\(F\\). This follows by applying Kronecker's theorem repeatedly: first adjoin a root \\(\\alpha_1\\), factor out \\((x - \\alpha_1)\\), then adjoin a root of the remaining factor, and so on.
</div>

<div class="env-block remark">
<div class="env-label">Remark &mdash; The Extension is Minimal</div>
When \\(p(x)\\) is the minimal polynomial of \\(\\alpha\\) over \\(F\\), the extension \\(F(\\alpha) \\cong F[x]/(p(x))\\) has degree exactly \\(\\deg p\\). If we had instead used a reducible factor, the quotient would not be a field.
</div>

<div class="viz-container" data-viz="kronecker-construction">
<div class="viz-canvas" id="kronecker-construction"></div>
<div class="viz-controls" id="kronecker-construction-controls"></div>
<div class="viz-caption">Kronecker's construction: forming F[x]/(p(x)) as an extension field. Elements are displayed as cosets.</div>
</div>
`,
            visualizations: [
                {
                    id: 'kronecker-construction',
                    setup: function(container, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = 580; canvas.height = 400;
                        container.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        var examples = [
                            {
                                name: 'R[x]/(x\u00B2+1) = C',
                                base: 'R', poly: 'x\u00B2+1', ext: 'C',
                                elements: ['a + bi', 'where a,b in R'],
                                arith: [
                                    'i\u00B2 = -1',
                                    '(a+bi)(c+di) = (ac-bd) + (ad+bc)i',
                                    '1/(a+bi) = (a-bi)/(a\u00B2+b\u00B2)'
                                ]
                            },
                            {
                                name: 'F\u2082[x]/(x\u00B2+x+1) = F\u2084',
                                base: 'F\u2082', poly: 'x\u00B2+x+1', ext: 'F\u2084',
                                elements: ['0, 1, \u03B1, 1+\u03B1'],
                                arith: [
                                    '\u03B1\u00B2 = \u03B1+1',
                                    '\u03B1 \u00B7 (1+\u03B1) = \u03B1+\u03B1\u00B2 = \u03B1+\u03B1+1 = 1',
                                    '(1+\u03B1)\u00B2 = 1+\u03B1\u00B2 = 1+\u03B1+1 = \u03B1'
                                ]
                            },
                            {
                                name: 'Q[x]/(x\u00B3-2)',
                                base: 'Q', poly: 'x\u00B3-2', ext: 'Q(\u2073\u221A2)',
                                elements: ['a + b\u2073\u221A2 + c\u2073\u221A4', 'where a,b,c in Q'],
                                arith: [
                                    '(\u2073\u221A2)\u00B3 = 2',
                                    '(\u2073\u221A2)\u00B2 = \u2073\u221A4',
                                    '\u2073\u221A4 \u00B7 \u2073\u221A2 = 2'
                                ]
                            }
                        ];
                        var sel = 0;

                        var selEl = document.createElement('select');
                        examples.forEach(function(ex, i) {
                            var opt = document.createElement('option');
                            opt.value = i; opt.textContent = ex.name;
                            selEl.appendChild(opt);
                        });
                        selEl.addEventListener('change', function() { sel = +selEl.value; draw(); });
                        controls.appendChild(selEl);

                        function draw() {
                            ctx.clearRect(0, 0, 580, 400);
                            ctx.fillStyle = '#0d1117'; ctx.fillRect(0, 0, 580, 400);
                            var ex = examples[sel];

                            ctx.fillStyle = '#c9d1d9'; ctx.font = 'bold 16px serif';
                            ctx.textAlign = 'center';
                            ctx.fillText("Kronecker's Construction", 290, 30);

                            // Base field box
                            ctx.strokeStyle = '#30363d'; ctx.lineWidth = 2;
                            ctx.fillStyle = '#161b22';
                            ctx.beginPath(); ctx.roundRect(30, 60, 160, 50, 8); ctx.fill(); ctx.stroke();
                            ctx.fillStyle = '#58a6ff'; ctx.font = 'bold 14px monospace';
                            ctx.fillText('Base: ' + ex.base, 110, 90);

                            // Arrow
                            ctx.strokeStyle = '#8b949e'; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.moveTo(190, 85); ctx.lineTo(240, 85); ctx.stroke();
                            ctx.fillStyle = '#8b949e';
                            ctx.beginPath(); ctx.moveTo(240, 85); ctx.lineTo(232, 80); ctx.lineTo(232, 90); ctx.closePath(); ctx.fill();
                            ctx.font = '11px sans-serif'; ctx.fillStyle = '#8b949e';
                            ctx.fillText('mod ' + ex.poly, 215, 75);

                            // Extension field box
                            ctx.strokeStyle = '#58a6ff'; ctx.lineWidth = 3;
                            ctx.fillStyle = '#161b22';
                            ctx.beginPath(); ctx.roundRect(250, 60, 300, 50, 8); ctx.fill(); ctx.stroke();
                            ctx.fillStyle = '#58a6ff'; ctx.font = 'bold 14px monospace';
                            ctx.fillText(ex.ext + ' = ' + ex.base + '[x]/(' + ex.poly + ')', 400, 90);

                            // Elements section
                            ctx.fillStyle = '#c9d1d9'; ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Elements:', 40, 150);
                            ctx.font = '14px monospace'; ctx.fillStyle = '#a5d6ff';
                            for (var i = 0; i < ex.elements.length; i++) {
                                ctx.fillText(ex.elements[i], 60, 175 + i * 22);
                            }

                            // Arithmetic section
                            ctx.fillStyle = '#c9d1d9'; ctx.font = 'bold 13px sans-serif';
                            ctx.fillText('Arithmetic rules:', 40, 245);
                            ctx.font = '14px monospace'; ctx.fillStyle = '#f0883e';
                            for (var j = 0; j < ex.arith.length; j++) {
                                ctx.fillText(ex.arith[j], 60, 270 + j * 24);
                            }

                            // Key insight
                            ctx.fillStyle = '#238636'; ctx.font = '13px sans-serif';
                            ctx.fillText('Key: The coset \u03B1 = x + (p(x)) satisfies p(\u03B1) = 0 in the quotient.', 40, 370);
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch15-ex05',
                    type: 'short-answer',
                    question: "Use Kronecker's theorem to construct an extension of \\(\\mathbb{F}_3\\) containing a root of \\(x^2 + 1\\). List all elements of the extension.",
                    hint: 'First check: is \\(x^2+1\\) irreducible over \\(\\mathbb{F}_3\\)? Then form the quotient.',
                    solution: 'Check: \\(0^2+1=1\\neq 0\\), \\(1^2+1=2\\neq 0\\), \\(2^2+1=5=2\\neq 0\\) in \\(\\mathbb{F}_3\\). So \\(x^2+1\\) is irreducible. The extension is \\(\\mathbb{F}_3[x]/(x^2+1) \\cong \\mathbb{F}_9\\). Its 9 elements are \\(\\{a + b\\alpha : a,b \\in \\mathbb{F}_3\\}\\) where \\(\\alpha^2 = -1 = 2\\).'
                },
                {
                    id: 'ch15-ex06',
                    type: 'mc',
                    question: 'Why must we use an <em>irreducible</em> factor \\(p(x)\\) in Kronecker\'s construction? What goes wrong if \\(p(x)\\) is reducible?',
                    options: [
                        'The quotient F[x]/(p(x)) would be too large',
                        'The quotient F[x]/(p(x)) would not be a field (it has zero divisors)',
                        'The quotient F[x]/(p(x)) would be isomorphic to F itself',
                        'The polynomial p(x) would have no roots anywhere'
                    ],
                    answer: 1,
                    explanation: 'If \\(p(x) = a(x)b(x)\\) with \\(\\deg a, \\deg b \\geq 1\\), then the cosets of \\(a(x)\\) and \\(b(x)\\) in \\(F[x]/(p(x))\\) are nonzero but their product is zero (since \\(a(x)b(x) = p(x) \\equiv 0\\)). Thus the quotient has zero divisors and is not a field.'
                },
                {
                    id: 'ch15-ex07',
                    type: 'short-answer',
                    question: 'Construct an extension of \\(\\mathbb{Q}\\) containing \\(\\sqrt[3]{5}\\) using Kronecker\'s theorem. What is the degree of this extension?',
                    hint: 'What is the minimal polynomial of \\(\\sqrt[3]{5}\\) over \\(\\mathbb{Q}\\)?',
                    solution: 'The minimal polynomial of \\(\\sqrt[3]{5}\\) over \\(\\mathbb{Q}\\) is \\(x^3 - 5\\), which is irreducible by Eisenstein\'s criterion with \\(p = 5\\). By Kronecker, \\(\\mathbb{Q}[x]/(x^3-5) \\cong \\mathbb{Q}(\\sqrt[3]{5})\\), and \\([\\mathbb{Q}(\\sqrt[3]{5}):\\mathbb{Q}] = 3\\).'
                }
            ]
        },

        // ===== SECTION 3: Uniqueness of Splitting Fields =====
        {
            id: 'ch15-sec03',
            title: 'Uniqueness of Splitting Fields',
            content: `
<h2>3 &middot; Uniqueness of Splitting Fields</h2>

<div class="env-block intuition">
<div class="env-label">Motivation</div>
We proved that splitting fields exist. But are they unique? If we build a splitting field of \\(f(x)\\) in two different ways, do we always get "the same" field? The answer is yes, up to isomorphism. The key tool is the <strong>isomorphism extension theorem</strong>, which allows us to extend an isomorphism from base fields to splitting fields.
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; Isomorphism Extension Theorem</div>
Let \\(\\sigma: F \\to F'\\) be an isomorphism of fields. Let \\(f(x) \\in F[x]\\) be a non-constant polynomial, and let \\(\\sigma(f)(x) \\in F'[x]\\) be the polynomial obtained by applying \\(\\sigma\\) to each coefficient. Suppose \\(K\\) is a splitting field of \\(f(x)\\) over \\(F\\) and \\(K'\\) is a splitting field of \\(\\sigma(f)(x)\\) over \\(F'\\). Then \\(\\sigma\\) extends to an isomorphism \\(\\tilde{\\sigma}: K \\to K'\\).
</div>

<div class="env-block proof">
<div class="env-label">Proof (Sketch by Induction on \\([K:F]\\))</div>
<p><strong>Base case:</strong> If \\([K:F] = 1\\), then \\(f(x)\\) already splits in \\(F\\), so \\(K = F\\), \\(K' = F'\\), and \\(\\tilde{\\sigma} = \\sigma\\).</p>
<p><strong>Inductive step:</strong> Let \\(p(x)\\) be an irreducible factor of \\(f(x)\\) with \\(\\deg p \\geq 2\\), and let \\(\\alpha \\in K\\) be a root of \\(p(x)\\). The polynomial \\(\\sigma(p)(x) \\in F'[x]\\) is also irreducible. Let \\(\\alpha' \\in K'\\) be a root of \\(\\sigma(p)(x)\\).</p>
<p>Since \\(F(\\alpha) \\cong F[x]/(p(x))\\) and \\(F'(\\alpha') \\cong F'[x]/(\\sigma(p)(x))\\), we can extend \\(\\sigma\\) to an isomorphism \\(\\sigma_1: F(\\alpha) \\to F'(\\alpha')\\) with \\(\\sigma_1(\\alpha) = \\alpha'\\).</p>
<p>Now \\(K\\) is a splitting field of \\(f(x)\\) over \\(F(\\alpha)\\), and \\(K'\\) is a splitting field of \\(\\sigma_1(f)(x)\\) over \\(F'(\\alpha')\\). Since \\([K:F(\\alpha)] < [K:F]\\), the induction hypothesis gives an extension of \\(\\sigma_1\\) to an isomorphism \\(\\tilde{\\sigma}: K \\to K'\\). \\(\\square\\)</p>
</div>

<div class="env-block corollary">
<div class="env-label">Corollary &mdash; Uniqueness of Splitting Fields</div>
Let \\(f(x) \\in F[x]\\) be a non-constant polynomial. If \\(K_1\\) and \\(K_2\\) are both splitting fields of \\(f(x)\\) over \\(F\\), then \\(K_1 \\cong K_2\\) via an isomorphism that fixes \\(F\\) pointwise.
</div>

<div class="env-block proof">
<div class="env-label">Proof</div>
Apply the isomorphism extension theorem with \\(\\sigma = \\mathrm{id}_F\\), \\(F = F'\\), and the two splitting fields as \\(K\\) and \\(K'\\). \\(\\square\\)
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; Two Constructions of the Splitting Field of \\(x^2+1\\) over \\(\\mathbb{Q}\\)</div>
<p><strong>Construction 1:</strong> \\(K_1 = \\mathbb{Q}[x]/(x^2+1)\\), with root \\(\\alpha = x + (x^2+1)\\).</p>
<p><strong>Construction 2:</strong> \\(K_2 = \\mathbb{Q}(i) \\subseteq \\mathbb{C}\\), with root \\(i\\).</p>
<p>The isomorphism \\(K_1 \\to K_2\\) sends \\(\\alpha \\mapsto i\\). Note we could also send \\(\\alpha \\mapsto -i\\); this gives a <em>different</em> isomorphism, corresponding to complex conjugation.</p>
</div>

<div class="env-block remark">
<div class="env-label">Remark &mdash; Non-Uniqueness of the Isomorphism</div>
While the splitting field is unique up to isomorphism, the isomorphism itself is generally <strong>not unique</strong>. The number of distinct isomorphisms \\(K \\to K\\) that fix \\(F\\) equals the order of the Galois group \\(\\mathrm{Gal}(K/F)\\), which is the subject of the next chapter. For example, the splitting field of \\(x^3 - 2\\) over \\(\\mathbb{Q}\\) has an automorphism group of order 6, isomorphic to \\(S_3\\).
</div>

<div class="env-block proposition">
<div class="env-label">Proposition &mdash; Counting Extensions</div>
In the isomorphism extension theorem, if \\(p(x)\\) has \\(k\\) distinct roots in \\(K'\\), then there are exactly \\(k\\) ways to extend \\(\\sigma\\) at each step. The total number of extensions \\(\\tilde{\\sigma}: K \\to K'\\) is at most \\([K:F]\\), with equality if and only if \\(f(x)\\) has no repeated roots (i.e., \\(f\\) is separable).
</div>

<div class="viz-container" data-viz="extension-lattice">
<div class="viz-canvas" id="extension-lattice"></div>
<div class="viz-controls" id="extension-lattice-controls"></div>
<div class="viz-caption">Lattice of intermediate fields for the splitting field of selected polynomials. Lines indicate field containment; labels show extension degrees.</div>
</div>

<div class="viz-container" data-viz="isomorphism-choices">
<div class="viz-canvas" id="isomorphism-choices"></div>
<div class="viz-controls" id="isomorphism-choices-controls"></div>
<div class="viz-caption">Visualizing the choices in extending an isomorphism: each root assignment branches into a distinct extension path.</div>
</div>
`,
            visualizations: [
                {
                    id: 'extension-lattice',
                    setup: function(container, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = 580; canvas.height = 420;
                        container.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        var examples = [
                            {
                                name: 'x\u00B3-2 over Q',
                                nodes: [
                                    { label: 'Q', x: 290, y: 380 },
                                    { label: 'Q(\u03C9)', x: 120, y: 260 },
                                    { label: 'Q(\u2073\u221A2)', x: 290, y: 260 },
                                    { label: 'Q(\u2073\u221A2 \u03C9)', x: 460, y: 260 },
                                    { label: 'Q(\u2073\u221A2,\u03C9)', x: 290, y: 80 }
                                ],
                                edges: [
                                    { from: 0, to: 1, deg: '2' },
                                    { from: 0, to: 2, deg: '3' },
                                    { from: 0, to: 3, deg: '3' },
                                    { from: 1, to: 4, deg: '3' },
                                    { from: 2, to: 4, deg: '2' },
                                    { from: 3, to: 4, deg: '2' }
                                ]
                            },
                            {
                                name: 'x\u2074-2 over Q',
                                nodes: [
                                    { label: 'Q', x: 290, y: 380 },
                                    { label: 'Q(i)', x: 120, y: 280 },
                                    { label: 'Q(\u221A2)', x: 290, y: 280 },
                                    { label: 'Q(\u2074\u221A2)', x: 460, y: 280 },
                                    { label: 'Q(i,\u221A2)', x: 180, y: 160 },
                                    { label: 'Q(\u2074\u221A2,i)', x: 290, y: 60 }
                                ],
                                edges: [
                                    { from: 0, to: 1, deg: '2' },
                                    { from: 0, to: 2, deg: '2' },
                                    { from: 0, to: 3, deg: '4' },
                                    { from: 1, to: 4, deg: '2' },
                                    { from: 2, to: 4, deg: '2' },
                                    { from: 3, to: 5, deg: '2' },
                                    { from: 4, to: 5, deg: '2' }
                                ]
                            }
                        ];
                        var sel = 0;

                        var selEl = document.createElement('select');
                        examples.forEach(function(ex, i) {
                            var opt = document.createElement('option');
                            opt.value = i; opt.textContent = ex.name;
                            selEl.appendChild(opt);
                        });
                        selEl.addEventListener('change', function() { sel = +selEl.value; draw(); });
                        controls.appendChild(selEl);

                        function draw() {
                            ctx.clearRect(0, 0, 580, 420);
                            ctx.fillStyle = '#0d1117'; ctx.fillRect(0, 0, 580, 420);
                            var ex = examples[sel];

                            ctx.fillStyle = '#c9d1d9'; ctx.font = 'bold 15px serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Field Extension Lattice: ' + ex.name, 290, 25);

                            // Draw edges
                            for (var e = 0; e < ex.edges.length; e++) {
                                var edge = ex.edges[e];
                                var n1 = ex.nodes[edge.from];
                                var n2 = ex.nodes[edge.to];
                                ctx.strokeStyle = '#30363d'; ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.moveTo(n1.x, n1.y); ctx.lineTo(n2.x, n2.y); ctx.stroke();
                                // Degree label
                                var mx = (n1.x + n2.x) / 2 + 12;
                                var my = (n1.y + n2.y) / 2;
                                ctx.fillStyle = '#f0883e'; ctx.font = 'bold 12px monospace';
                                ctx.fillText(edge.deg, mx, my);
                            }

                            // Draw nodes
                            for (var i = 0; i < ex.nodes.length; i++) {
                                var nd = ex.nodes[i];
                                var isTop = (i === ex.nodes.length - 1);
                                var isBot = (i === 0);
                                ctx.beginPath(); ctx.arc(nd.x, nd.y, 8, 0, 2 * Math.PI);
                                ctx.fillStyle = isTop ? '#58a6ff' : (isBot ? '#238636' : '#8b949e');
                                ctx.fill();
                                ctx.strokeStyle = '#c9d1d9'; ctx.lineWidth = 1.5; ctx.stroke();

                                ctx.fillStyle = '#c9d1d9'; ctx.font = '13px monospace';
                                ctx.fillText(nd.label, nd.x, nd.y - 16);
                            }

                            ctx.fillStyle = '#8b949e'; ctx.font = '11px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Green = base field, Blue = splitting field, Orange numbers = extension degrees', 30, 410);
                        }
                        draw();
                    }
                },
                {
                    id: 'isomorphism-choices',
                    setup: function(container, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = 580; canvas.height = 380;
                        container.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        function draw() {
                            ctx.clearRect(0, 0, 580, 380);
                            ctx.fillStyle = '#0d1117'; ctx.fillRect(0, 0, 580, 380);

                            ctx.fillStyle = '#c9d1d9'; ctx.font = 'bold 15px serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Isomorphism Extension Choices: x\u00B3-2 over Q', 290, 25);

                            // Root level: sigma(cbrt2) can go to 3 roots
                            var roots = ['\u2073\u221A2', '\u2073\u221A2\u03C9', '\u2073\u221A2\u03C9\u00B2'];
                            var rootColors = ['#58a6ff', '#f0883e', '#d2a8ff'];

                            // Step 1 box
                            ctx.fillStyle = '#161b22'; ctx.strokeStyle = '#30363d'; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.roundRect(200, 50, 180, 40, 6); ctx.fill(); ctx.stroke();
                            ctx.fillStyle = '#c9d1d9'; ctx.font = '13px monospace';
                            ctx.fillText('\u03C3: Q \u2192 Q (identity)', 290, 75);

                            // Branch: send cbrt2 to each root
                            for (var i = 0; i < 3; i++) {
                                var bx = 80 + i * 200;
                                var by = 150;
                                // Arrow from top
                                ctx.strokeStyle = rootColors[i]; ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.moveTo(290, 90); ctx.lineTo(bx, by); ctx.stroke();

                                // Box
                                ctx.fillStyle = '#161b22'; ctx.strokeStyle = rootColors[i]; ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.roundRect(bx - 80, by, 160, 40, 6); ctx.fill(); ctx.stroke();
                                ctx.fillStyle = rootColors[i]; ctx.font = '12px monospace';
                                ctx.fillText('\u2073\u221A2 \u21A6 ' + roots[i], bx, by + 25);

                                // Each branches into 2 for omega
                                for (var j = 0; j < 2; j++) {
                                    var lx = bx - 40 + j * 80;
                                    var ly = 260;
                                    ctx.strokeStyle = '#484f58'; ctx.lineWidth = 1.5;
                                    ctx.beginPath(); ctx.moveTo(bx, by + 40); ctx.lineTo(lx, ly); ctx.stroke();

                                    ctx.fillStyle = '#161b22'; ctx.strokeStyle = '#484f58'; ctx.lineWidth = 1;
                                    ctx.beginPath(); ctx.roundRect(lx - 35, ly, 70, 30, 4); ctx.fill(); ctx.stroke();
                                    ctx.fillStyle = '#c9d1d9'; ctx.font = '10px monospace';
                                    var omLabel = j === 0 ? '\u03C9\u21A6\u03C9' : '\u03C9\u21A6\u03C9\u00B2';
                                    ctx.fillText(omLabel, lx, ly + 19);
                                }
                            }

                            ctx.fillStyle = '#238636'; ctx.font = '13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Total: 3 \u00D7 2 = 6 automorphisms = |Gal(K/Q)| = |S\u2083|', 290, 340);
                            ctx.fillStyle = '#8b949e'; ctx.font = '11px sans-serif';
                            ctx.fillText('Each path through the tree defines a distinct field automorphism.', 290, 365);
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch15-ex08',
                    type: 'short-answer',
                    question: 'Show that the splitting fields of \\(x^2 - 2\\) and \\(x^2 - 8\\) over \\(\\mathbb{Q}\\) are isomorphic. Are they equal?',
                    hint: 'What are the roots of each polynomial? Can you express one set of roots in terms of the other?',
                    solution: 'The splitting field of \\(x^2-2\\) is \\(\\mathbb{Q}(\\sqrt{2})\\). The splitting field of \\(x^2-8\\) is \\(\\mathbb{Q}(\\sqrt{8}) = \\mathbb{Q}(2\\sqrt{2}) = \\mathbb{Q}(\\sqrt{2})\\). They are not just isomorphic but actually equal as subfields of \\(\\mathbb{R}\\).'
                },
                {
                    id: 'ch15-ex09',
                    type: 'mc',
                    question: 'How many \\(\\mathbb{Q}\\)-automorphisms does the splitting field of \\(x^4 - 1\\) over \\(\\mathbb{Q}\\) have?',
                    options: ['1', '2', '4', '8'],
                    answer: 1,
                    explanation: 'We have \\(x^4 - 1 = (x-1)(x+1)(x^2+1)\\). The splitting field is \\(\\mathbb{Q}(i)\\), which has degree 2 over \\(\\mathbb{Q}\\). The automorphism group has order 2: the identity and complex conjugation \\(i \\mapsto -i\\).'
                },
                {
                    id: 'ch15-ex10',
                    type: 'short-answer',
                    question: 'Let \\(K\\) be the splitting field of \\(x^3 - 2\\) over \\(\\mathbb{Q}\\). Describe all six \\(\\mathbb{Q}\\)-automorphisms of \\(K\\).',
                    hint: 'An automorphism is determined by where it sends \\(\\sqrt[3]{2}\\) and \\(\\omega\\). Use the fact that \\(|\\mathrm{Aut}(K/\\mathbb{Q})| = [K:\\mathbb{Q}] = 6\\).',
                    solution: 'Let \\(\\alpha = \\sqrt[3]{2}\\) and \\(\\omega = e^{2\\pi i/3}\\). The six automorphisms send \\((\\alpha, \\omega)\\) to: \\((\\alpha,\\omega)\\), \\((\\alpha,\\omega^2)\\), \\((\\alpha\\omega,\\omega)\\), \\((\\alpha\\omega,\\omega^2)\\), \\((\\alpha\\omega^2,\\omega)\\), \\((\\alpha\\omega^2,\\omega^2)\\). This group is isomorphic to \\(S_3\\).'
                }
            ]
        },

        // ===== SECTION 4: Algebraic Closure =====
        {
            id: 'ch15-sec04',
            title: 'Algebraic Closure',
            content: `
<h2>4 &middot; Algebraic Closure</h2>

<div class="env-block intuition">
<div class="env-label">Motivation</div>
A splitting field handles one polynomial at a time. But what if we want a field where <em>every</em> polynomial splits? This is the <strong>algebraic closure</strong> of \\(F\\), an enormous extension that is "algebraically complete." The most familiar example is \\(\\mathbb{C}\\), which is the algebraic closure of \\(\\mathbb{R}\\) (by the Fundamental Theorem of Algebra).
</div>

<div class="env-block definition">
<div class="env-label">Definition &mdash; Algebraically Closed Field</div>
A field \\(K\\) is <strong>algebraically closed</strong> if every non-constant polynomial \\(f(x) \\in K[x]\\) has a root in \\(K\\). Equivalently, every non-constant polynomial in \\(K[x]\\) splits into linear factors over \\(K\\).
</div>

<div class="env-block definition">
<div class="env-label">Definition &mdash; Algebraic Closure</div>
An <strong>algebraic closure</strong> of a field \\(F\\), denoted \\(\\overline{F}\\), is a field extension \\(\\overline{F}/F\\) such that:
<ol>
<li>\\(\\overline{F}\\) is algebraically closed, and</li>
<li>\\(\\overline{F}/F\\) is algebraic (every element of \\(\\overline{F}\\) is a root of some polynomial in \\(F[x]\\)).</li>
</ol>
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; Existence of Algebraic Closures</div>
Every field \\(F\\) has an algebraic closure \\(\\overline{F}\\). Moreover, \\(\\overline{F}\\) is unique up to \\(F\\)-isomorphism.
</div>

<div class="env-block remark">
<div class="env-label">Remark</div>
The existence proof (due to Steinitz, 1910) uses Zorn's lemma: one considers the collection of all algebraic extensions of \\(F\\), partially ordered by inclusion, and shows that a maximal element exists and is algebraically closed. The uniqueness follows from the isomorphism extension theorem applied to an appropriate transfinite induction. We will not reproduce the full proof here, but the conceptual point is important: algebraic closures always exist, and they are essentially unique.
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; Fundamental Theorem of Algebra (Statement)</div>
The field \\(\\mathbb{C}\\) of complex numbers is algebraically closed. Equivalently, every non-constant polynomial \\(f(x) \\in \\mathbb{C}[x]\\) has a root in \\(\\mathbb{C}\\).
</div>

<div class="env-block remark">
<div class="env-label">Remark &mdash; Why the FTA is Deep</div>
Despite its name, the Fundamental Theorem of Algebra is really a theorem of analysis or topology, not pure algebra. Every known proof uses some analytical or topological fact about \\(\\mathbb{R}\\) (such as the intermediate value theorem or the fact that odd-degree polynomials have real roots). No purely algebraic proof exists, because the algebraic closure of \\(\\mathbb{R}\\) being only a degree-2 extension is a special property of \\(\\mathbb{R}\\).
</div>

<div class="env-block proposition">
<div class="env-label">Proposition &mdash; Equivalent Characterizations</div>
For a field \\(K\\), the following are equivalent:
<ol>
<li>\\(K\\) is algebraically closed.</li>
<li>Every non-constant \\(f(x) \\in K[x]\\) splits into linear factors.</li>
<li>The only irreducible polynomials in \\(K[x]\\) are linear.</li>
<li>\\(K\\) has no proper algebraic extensions.</li>
</ol>
</div>

<div class="env-block proof">
<div class="env-label">Proof (Sketch)</div>
<p>(1)\\(\\Rightarrow\\)(2): If \\(f\\) has a root \\(\\alpha\\), factor out \\((x-\\alpha)\\) and repeat by induction on degree.</p>
<p>(2)\\(\\Rightarrow\\)(3): If \\(f\\) splits into linears, the only irreducible factors are linear.</p>
<p>(3)\\(\\Rightarrow\\)(4): Any algebraic extension is generated by roots of irreducible polynomials, which are all linear, so the roots are already in \\(K\\).</p>
<p>(4)\\(\\Rightarrow\\)(1): If \\(f(x) \\in K[x]\\) had no root in \\(K\\), Kronecker would give a proper algebraic extension, contradicting (4). \\(\\square\\)</p>
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; \\(\\overline{\\mathbb{Q}}\\), the Algebraic Numbers</div>
The algebraic closure \\(\\overline{\\mathbb{Q}}\\) consists of all complex numbers that are roots of polynomials with rational coefficients. This includes \\(\\sqrt{2}\\), \\(i\\), \\(\\sqrt[5]{3}\\), and all roots of unity, but not transcendental numbers like \\(\\pi\\) or \\(e\\). The field \\(\\overline{\\mathbb{Q}}\\) is countable (a countable union of finite sets), while \\(\\mathbb{C}\\) is uncountable, so \\(\\overline{\\mathbb{Q}} \\subsetneq \\mathbb{C}\\).
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; Algebraic Closures of Finite Fields</div>
The algebraic closure of \\(\\mathbb{F}_p\\) is the union
\\[
\\overline{\\mathbb{F}_p} = \\bigcup_{n=1}^{\\infty} \\mathbb{F}_{p^n}.
\\]
This is a countably infinite field. It contains all finite fields of characteristic \\(p\\) as subfields.
</div>

<div class="viz-container" data-viz="algebraic-numbers-plane">
<div class="viz-canvas" id="algebraic-numbers-plane"></div>
<div class="viz-controls" id="algebraic-numbers-plane-controls"></div>
<div class="viz-caption">Algebraic numbers in the complex plane: roots of polynomials with integer coefficients up to a chosen degree and coefficient bound.</div>
</div>

<div class="viz-container" data-viz="closure-hierarchy">
<div class="viz-canvas" id="closure-hierarchy"></div>
<div class="viz-controls" id="closure-hierarchy-controls"></div>
<div class="viz-caption">Nested hierarchy: Q inside Q-bar inside C. Each layer adds new elements.</div>
</div>
`,
            visualizations: [
                {
                    id: 'algebraic-numbers-plane',
                    setup: function(container, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = 580; canvas.height = 420;
                        container.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        var maxDeg = 3;
                        var maxCoeff = 2;

                        var degSlider = document.createElement('input');
                        degSlider.type = 'range'; degSlider.min = 2; degSlider.max = 5; degSlider.value = 3;
                        var degLabel = document.createElement('span');
                        degLabel.textContent = ' Max degree: 3 ';
                        degLabel.style.color = '#c9d1d9'; degLabel.style.fontSize = '12px';
                        degSlider.addEventListener('input', function() {
                            maxDeg = +degSlider.value;
                            degLabel.textContent = ' Max degree: ' + maxDeg + ' ';
                            draw();
                        });
                        controls.appendChild(degLabel);
                        controls.appendChild(degSlider);

                        function findRoots(coeffs) {
                            // Durand-Kerner for small polynomials
                            var n = coeffs.length - 1;
                            if (n <= 0) return [];
                            if (n === 1) {
                                var r = -coeffs[0] / coeffs[1];
                                return [{ re: r, im: 0 }];
                            }
                            // Normalize
                            var a = [];
                            for (var i = 0; i <= n; i++) a.push(coeffs[i] / coeffs[n]);

                            // Initial guesses
                            var z = [];
                            for (var k = 0; k < n; k++) {
                                var angle = 2 * Math.PI * k / n + 0.3;
                                z.push({ re: 0.4 * Math.cos(angle), im: 0.4 * Math.sin(angle) });
                            }

                            function cmul(a2, b2) { return { re: a2.re * b2.re - a2.im * b2.im, im: a2.re * b2.im + a2.im * b2.re }; }
                            function cdiv(a2, b2) { var d = b2.re * b2.re + b2.im * b2.im; if (d < 1e-30) return { re: 0, im: 0 }; return { re: (a2.re * b2.re + a2.im * b2.im) / d, im: (a2.im * b2.re - a2.re * b2.im) / d }; }
                            function csub(a2, b2) { return { re: a2.re - b2.re, im: a2.im - b2.im }; }
                            function ceval(p, x) {
                                var r = { re: 0, im: 0 };
                                for (var j = p.length - 1; j >= 0; j--) {
                                    r = cmul(r, x);
                                    r.re += p[j]; // p[j] is real
                                }
                                return r;
                            }

                            for (var iter = 0; iter < 200; iter++) {
                                for (var ii = 0; ii < n; ii++) {
                                    var num = ceval(a, z[ii]);
                                    var den = { re: 1, im: 0 };
                                    for (var jj = 0; jj < n; jj++) {
                                        if (jj !== ii) den = cmul(den, csub(z[ii], z[jj]));
                                    }
                                    var corr = cdiv(num, den);
                                    z[ii].re -= corr.re;
                                    z[ii].im -= corr.im;
                                }
                            }
                            return z;
                        }

                        function draw() {
                            ctx.clearRect(0, 0, 580, 420);
                            ctx.fillStyle = '#0d1117'; ctx.fillRect(0, 0, 580, 420);

                            var cx = 290, cy = 210, scale = 80;

                            // Grid
                            ctx.strokeStyle = '#21262d'; ctx.lineWidth = 0.5;
                            for (var g = -3; g <= 3; g++) {
                                ctx.beginPath(); ctx.moveTo(cx + g * scale, 0); ctx.lineTo(cx + g * scale, 420); ctx.stroke();
                                ctx.beginPath(); ctx.moveTo(0, cy - g * scale); ctx.lineTo(580, cy - g * scale); ctx.stroke();
                            }

                            ctx.strokeStyle = '#484f58'; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(580, cy); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, 420); ctx.stroke();

                            ctx.fillStyle = '#c9d1d9'; ctx.font = 'bold 14px serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Algebraic numbers (degree \u2264 ' + maxDeg + ', |coefficients| \u2264 ' + maxCoeff + ')', 290, 20);

                            // Generate polynomials and find roots
                            var allRoots = [];
                            var coeffRange = [];
                            for (var c = -maxCoeff; c <= maxCoeff; c++) coeffRange.push(c);

                            function genPolys(deg) {
                                // Generate all monic polynomials of given degree
                                var results = [];
                                function helper(idx, current) {
                                    if (idx === deg) {
                                        current.push(1); // monic
                                        results.push(current.slice());
                                        current.pop();
                                        return;
                                    }
                                    for (var ci = 0; ci < coeffRange.length; ci++) {
                                        current.push(coeffRange[ci]);
                                        helper(idx + 1, current);
                                        current.pop();
                                    }
                                }
                                helper(0, []);
                                return results;
                            }

                            var degColors = ['#58a6ff', '#f0883e', '#d2a8ff', '#238636', '#f778ba'];
                            for (var d = 1; d <= maxDeg; d++) {
                                var polys = genPolys(d);
                                for (var pi = 0; pi < polys.length; pi++) {
                                    var rts = findRoots(polys[pi]);
                                    for (var ri = 0; ri < rts.length; ri++) {
                                        if (Math.abs(rts[ri].re) < 3.5 && Math.abs(rts[ri].im) < 3.5) {
                                            allRoots.push({ re: rts[ri].re, im: rts[ri].im, deg: d });
                                        }
                                    }
                                }
                            }

                            // Plot
                            for (var i = 0; i < allRoots.length; i++) {
                                var rx = cx + allRoots[i].re * scale;
                                var ry = cy - allRoots[i].im * scale;
                                ctx.beginPath(); ctx.arc(rx, ry, 1.5, 0, 2 * Math.PI);
                                ctx.fillStyle = degColors[(allRoots[i].deg - 1) % degColors.length];
                                ctx.fill();
                            }

                            // Legend
                            ctx.textAlign = 'left'; ctx.font = '11px sans-serif';
                            for (var di = 1; di <= maxDeg; di++) {
                                ctx.fillStyle = degColors[(di - 1) % degColors.length];
                                ctx.fillRect(20, 385 + (di - 1) * 14, 8, 8);
                                ctx.fillStyle = '#c9d1d9';
                                ctx.fillText('degree ' + di, 34, 393 + (di - 1) * 14);
                            }
                        }
                        draw();
                    }
                },
                {
                    id: 'closure-hierarchy',
                    setup: function(container, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = 580; canvas.height = 350;
                        container.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        function draw() {
                            ctx.clearRect(0, 0, 580, 350);
                            ctx.fillStyle = '#0d1117'; ctx.fillRect(0, 0, 580, 350);

                            ctx.fillStyle = '#c9d1d9'; ctx.font = 'bold 15px serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Hierarchy of Number Fields and Their Closures', 290, 25);

                            // Nested ellipses: C > Q-bar > Q
                            var cx = 290, cy = 190;

                            // C (outermost)
                            ctx.strokeStyle = '#f0883e'; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.ellipse(cx, cy, 250, 140, 0, 0, 2 * Math.PI); ctx.stroke();
                            ctx.fillStyle = '#f0883e'; ctx.font = '13px sans-serif';
                            ctx.fillText('C (uncountable, algebraically closed)', cx, cy - 120);

                            // Q-bar
                            ctx.strokeStyle = '#58a6ff'; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.ellipse(cx, cy, 170, 95, 0, 0, 2 * Math.PI); ctx.stroke();
                            ctx.fillStyle = '#58a6ff'; ctx.font = '13px sans-serif';
                            ctx.fillText('Q\u0305 = algebraic numbers (countable, alg. closed)', cx, cy - 75);

                            // Q
                            ctx.strokeStyle = '#238636'; ctx.lineWidth = 2;
                            ctx.beginPath(); ctx.ellipse(cx, cy + 10, 80, 45, 0, 0, 2 * Math.PI); ctx.stroke();
                            ctx.fillStyle = '#238636'; ctx.font = '13px sans-serif';
                            ctx.fillText('Q', cx, cy + 15);

                            // Sample elements
                            ctx.font = '11px monospace';
                            ctx.fillStyle = '#238636';
                            ctx.fillText('1/2, -3, 7/11', cx, cy + 35);

                            ctx.fillStyle = '#58a6ff';
                            ctx.fillText('\u221A2, i, \u2073\u221A5, \u03B6\u2087', cx + 100, cy + 10);

                            ctx.fillStyle = '#f0883e';
                            ctx.fillText('\u03C0, e, ln(2)', cx + 140, cy - 40);

                            // R line
                            ctx.strokeStyle = '#d2a8ff'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
                            ctx.beginPath(); ctx.moveTo(cx - 240, cy); ctx.lineTo(cx + 240, cy); ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = '#d2a8ff'; ctx.font = '11px sans-serif';
                            ctx.fillText('R (real line)', cx + 175, cy - 8);
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch15-ex11',
                    type: 'mc',
                    question: 'Which of the following fields is algebraically closed?',
                    options: [
                        '\\(\\mathbb{Q}\\)',
                        '\\(\\mathbb{R}\\)',
                        '\\(\\mathbb{C}\\)',
                        '\\(\\mathbb{F}_p\\) for a prime \\(p\\)'
                    ],
                    answer: 2,
                    explanation: '\\(\\mathbb{C}\\) is algebraically closed by the Fundamental Theorem of Algebra. \\(\\mathbb{Q}\\) is not (e.g., \\(x^2-2\\) has no rational root). \\(\\mathbb{R}\\) is not (e.g., \\(x^2+1\\) has no real root). \\(\\mathbb{F}_p\\) is not (e.g., \\(x^p - x - 1\\) has no root in \\(\\mathbb{F}_p\\)).'
                },
                {
                    id: 'ch15-ex12',
                    type: 'short-answer',
                    question: 'Prove that \\(\\overline{\\mathbb{Q}}\\) is countable.',
                    hint: 'How many polynomials of degree \\(n\\) with integer coefficients are there? How many roots can each have?',
                    solution: 'For each \\(n \\geq 1\\) and each bound \\(B\\) on the absolute value of coefficients, there are finitely many polynomials in \\(\\mathbb{Z}[x]\\) of degree \\(n\\) with \\(|a_i| \\leq B\\). Each has at most \\(n\\) roots. So the algebraic numbers of degree \\(n\\) form a countable set. The union \\(\\overline{\\mathbb{Q}} = \\bigcup_{n=1}^{\\infty} \\{\\text{algebraic numbers of degree } n\\}\\) is a countable union of countable sets, hence countable.'
                },
                {
                    id: 'ch15-ex13',
                    type: 'short-answer',
                    question: 'Show that if \\(K\\) is algebraically closed and \\(f(x) \\in K[x]\\) has degree \\(n\\), then \\(f\\) has exactly \\(n\\) roots counted with multiplicity.',
                    hint: 'Factor \\(f\\) using the definition of algebraically closed.',
                    solution: 'Since \\(K\\) is algebraically closed, \\(f\\) has a root \\(\\alpha_1\\), so \\(f(x) = (x - \\alpha_1)g(x)\\) with \\(\\deg g = n-1\\). Repeating, \\(g\\) has a root \\(\\alpha_2\\), giving \\(f(x) = (x-\\alpha_1)(x-\\alpha_2)h(x)\\). By induction, \\(f(x) = c(x-\\alpha_1)\\cdots(x-\\alpha_n)\\) where \\(c\\) is the leading coefficient. So \\(f\\) has exactly \\(n\\) roots (counted with multiplicity).'
                },
                {
                    id: 'ch15-ex14',
                    type: 'mc',
                    question: 'What is the algebraic closure of \\(\\mathbb{R}\\)?',
                    options: [
                        '\\(\\mathbb{R}\\) itself',
                        '\\(\\mathbb{C}\\)',
                        '\\(\\overline{\\mathbb{Q}}\\)',
                        'The algebraic closure does not exist for \\(\\mathbb{R}\\)'
                    ],
                    answer: 1,
                    explanation: 'By the Fundamental Theorem of Algebra, \\(\\mathbb{C}\\) is algebraically closed. Since \\(\\mathbb{C} = \\mathbb{R}(i)\\) is algebraic over \\(\\mathbb{R}\\) (with \\([\\mathbb{C}:\\mathbb{R}] = 2\\)), \\(\\mathbb{C}\\) is the algebraic closure of \\(\\mathbb{R}\\). This is remarkable: the algebraic closure is obtained by adjoining a single element!'
                }
            ]
        },

        // ===== SECTION 5: Finite Fields =====
        {
            id: 'ch15-sec05',
            title: 'Finite Fields',
            content: `
<h2>5 &middot; Finite Fields</h2>

<div class="env-block intuition">
<div class="env-label">Motivation</div>
Finite fields are among the most beautiful objects in algebra, with applications to coding theory, cryptography, and combinatorics. The theory of splitting fields provides their complete classification: for every prime \\(p\\) and positive integer \\(n\\), there exists a unique (up to isomorphism) field with \\(p^n\\) elements. This field arises as the splitting field of a single polynomial.
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; Classification of Finite Fields</div>
<ol>
<li>Every finite field has \\(p^n\\) elements for some prime \\(p\\) and positive integer \\(n\\).</li>
<li>For every prime \\(p\\) and \\(n \\geq 1\\), there exists a field with \\(p^n\\) elements, denoted \\(\\mathbb{F}_{p^n}\\) or \\(\\mathrm{GF}(p^n)\\).</li>
<li>Any two fields with \\(p^n\\) elements are isomorphic.</li>
</ol>
</div>

<div class="env-block proof">
<div class="env-label">Proof (Sketch)</div>
<p><strong>(1)</strong> If \\(F\\) is a finite field, its characteristic is some prime \\(p\\), and \\(\\mathbb{F}_p \\subseteq F\\). Then \\(F\\) is a vector space over \\(\\mathbb{F}_p\\) of some finite dimension \\(n\\), so \\(|F| = p^n\\).</p>
<p><strong>(2)</strong> Consider the polynomial \\(g(x) = x^{p^n} - x \\in \\mathbb{F}_p[x]\\). Let \\(K\\) be its splitting field over \\(\\mathbb{F}_p\\). We claim the set \\(S = \\{\\alpha \\in K : \\alpha^{p^n} = \\alpha\\}\\) is itself a field with \\(p^n\\) elements.</p>
<p>First, \\(S\\) is closed under addition and multiplication: if \\(\\alpha^{p^n} = \\alpha\\) and \\(\\beta^{p^n} = \\beta\\), then \\((\\alpha + \\beta)^{p^n} = \\alpha^{p^n} + \\beta^{p^n} = \\alpha + \\beta\\) (using the Frobenius endomorphism), and similarly for products. Every nonzero element of \\(S\\) has a multiplicative inverse in \\(S\\).</p>
<p>Second, the formal derivative of \\(g(x)\\) is \\(g'(x) = p^n x^{p^n - 1} - 1 = -1\\) (since \\(p^n = 0\\) in characteristic \\(p\\)), so \\(\\gcd(g, g') = 1\\), which means \\(g\\) has no repeated roots. Thus \\(g\\) has exactly \\(p^n\\) roots, so \\(|S| = p^n\\).</p>
<p><strong>(3)</strong> Uniqueness: any field \\(F\\) with \\(|F| = p^n\\) satisfies \\(\\alpha^{p^n} = \\alpha\\) for all \\(\\alpha \\in F\\) (by Lagrange's theorem applied to \\(F^\\times\\)). Thus \\(F\\) is a splitting field of \\(x^{p^n} - x\\) over \\(\\mathbb{F}_p\\), and splitting fields are unique up to isomorphism. \\(\\square\\)</p>
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; Multiplicative Group of a Finite Field is Cyclic</div>
If \\(F\\) is a finite field, then the multiplicative group \\(F^\\times = F \\setminus \\{0\\}\\) is cyclic.
</div>

<div class="env-block proof">
<div class="env-label">Proof (Sketch)</div>
Let \\(|F^\\times| = m\\). The group \\(F^\\times\\) is a finite abelian group, so by the classification of finite abelian groups, \\(F^\\times \\cong \\mathbb{Z}/d_1 \\times \\cdots \\times \\mathbb{Z}/d_k\\) where \\(d_1 | d_2 | \\cdots | d_k\\) and \\(d_1 d_2 \\cdots d_k = m\\). Every element of \\(F^\\times\\) satisfies \\(x^{d_k} = 1\\), so the polynomial \\(x^{d_k} - 1\\) has at least \\(m\\) roots in \\(F\\). But a polynomial of degree \\(d_k\\) over a field has at most \\(d_k\\) roots, so \\(d_k \\geq m\\). Since \\(d_k | m\\) (from the product), we get \\(d_k = m\\), which forces \\(k = 1\\) and \\(F^\\times \\cong \\mathbb{Z}/m\\). \\(\\square\\)
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; \\(\\mathbb{F}_4\\) Explicitly</div>
We build \\(\\mathbb{F}_4 = \\mathbb{F}_2[x]/(x^2+x+1)\\). Let \\(\\alpha\\) be a root of \\(x^2+x+1\\). The elements are \\(\\{0, 1, \\alpha, 1+\\alpha\\}\\). The multiplication table:
<table style="margin:10px auto; border-collapse:collapse; text-align:center;">
<tr><th style="border:1px solid #484f58;padding:4px 8px;">&times;</th><th style="border:1px solid #484f58;padding:4px 8px;">0</th><th style="border:1px solid #484f58;padding:4px 8px;">1</th><th style="border:1px solid #484f58;padding:4px 8px;">&alpha;</th><th style="border:1px solid #484f58;padding:4px 8px;">1+&alpha;</th></tr>
<tr><td style="border:1px solid #484f58;padding:4px 8px;"><strong>0</strong></td><td style="border:1px solid #484f58;">0</td><td style="border:1px solid #484f58;">0</td><td style="border:1px solid #484f58;">0</td><td style="border:1px solid #484f58;">0</td></tr>
<tr><td style="border:1px solid #484f58;padding:4px 8px;"><strong>1</strong></td><td style="border:1px solid #484f58;">0</td><td style="border:1px solid #484f58;">1</td><td style="border:1px solid #484f58;">&alpha;</td><td style="border:1px solid #484f58;">1+&alpha;</td></tr>
<tr><td style="border:1px solid #484f58;padding:4px 8px;"><strong>&alpha;</strong></td><td style="border:1px solid #484f58;">0</td><td style="border:1px solid #484f58;">&alpha;</td><td style="border:1px solid #484f58;">1+&alpha;</td><td style="border:1px solid #484f58;">1</td></tr>
<tr><td style="border:1px solid #484f58;padding:4px 8px;"><strong>1+&alpha;</strong></td><td style="border:1px solid #484f58;">0</td><td style="border:1px solid #484f58;">1+&alpha;</td><td style="border:1px solid #484f58;">1</td><td style="border:1px solid #484f58;">&alpha;</td></tr>
</table>
The multiplicative group \\(\\{1, \\alpha, 1+\\alpha\\}\\) is cyclic of order 3, generated by \\(\\alpha\\) (since \\(\\alpha^2 = 1+\\alpha\\) and \\(\\alpha^3 = 1\\)).
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; \\(\\mathbb{F}_8\\)</div>
We need an irreducible cubic over \\(\\mathbb{F}_2\\). The polynomial \\(x^3 + x + 1\\) is irreducible (check: no roots in \\(\\mathbb{F}_2\\), and a degree-3 polynomial over \\(\\mathbb{F}_2\\) without roots must be irreducible). Then
\\[
\\mathbb{F}_8 = \\mathbb{F}_2[x]/(x^3 + x + 1)
\\]
has 8 elements: \\(\\{0, 1, \\alpha, 1+\\alpha, \\alpha^2, 1+\\alpha^2, \\alpha+\\alpha^2, 1+\\alpha+\\alpha^2\\}\\) where \\(\\alpha^3 = \\alpha + 1\\). The multiplicative group \\(\\mathbb{F}_8^\\times\\) is cyclic of order 7.
</div>

<div class="env-block proposition">
<div class="env-label">Proposition &mdash; Subfield Criterion</div>
\\(\\mathbb{F}_{p^m}\\) is a subfield of \\(\\mathbb{F}_{p^n}\\) if and only if \\(m | n\\). In that case, \\(\\mathbb{F}_{p^m}\\) is the unique subfield of \\(\\mathbb{F}_{p^n}\\) of order \\(p^m\\), consisting of the roots of \\(x^{p^m} - x\\) in \\(\\mathbb{F}_{p^n}\\).
</div>

<div class="viz-container" data-viz="finite-field-table">
<div class="viz-canvas" id="finite-field-table"></div>
<div class="viz-controls" id="finite-field-table-controls"></div>
<div class="viz-caption">Addition and multiplication tables for small finite fields. Observe the field axioms in action.</div>
</div>

<div class="viz-container" data-viz="subfield-lattice">
<div class="viz-canvas" id="subfield-lattice"></div>
<div class="viz-controls" id="subfield-lattice-controls"></div>
<div class="viz-caption">Subfield lattice of F_{p^n}: subfields correspond to divisors of n.</div>
</div>
`,
            visualizations: [
                {
                    id: 'finite-field-table',
                    setup: function(container, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = 580; canvas.height = 440;
                        container.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        var fields = [
                            {
                                name: 'F\u2084',
                                elements: ['0', '1', '\u03B1', '1+\u03B1'],
                                add: [[0,1,2,3],[1,0,3,2],[2,3,0,1],[3,2,1,0]],
                                mul: [[0,0,0,0],[0,1,2,3],[0,2,3,1],[0,3,1,2]]
                            },
                            {
                                name: 'F\u2083',
                                elements: ['0', '1', '2'],
                                add: [[0,1,2],[1,2,0],[2,0,1]],
                                mul: [[0,0,0],[0,1,2],[0,2,1]]
                            },
                            {
                                name: 'F\u2085',
                                elements: ['0','1','2','3','4'],
                                add: [[0,1,2,3,4],[1,2,3,4,0],[2,3,4,0,1],[3,4,0,1,2],[4,0,1,2,3]],
                                mul: [[0,0,0,0,0],[0,1,2,3,4],[0,2,4,1,3],[0,3,1,4,2],[0,4,3,2,1]]
                            }
                        ];
                        var sel = 0;
                        var showMul = false;

                        var selEl = document.createElement('select');
                        fields.forEach(function(f, i) {
                            var opt = document.createElement('option');
                            opt.value = i; opt.textContent = f.name;
                            selEl.appendChild(opt);
                        });
                        selEl.addEventListener('change', function() { sel = +selEl.value; draw(); });
                        controls.appendChild(selEl);

                        var toggleBtn = document.createElement('button');
                        toggleBtn.textContent = 'Show Multiplication';
                        toggleBtn.style.marginLeft = '10px';
                        toggleBtn.addEventListener('click', function() {
                            showMul = !showMul;
                            toggleBtn.textContent = showMul ? 'Show Addition' : 'Show Multiplication';
                            draw();
                        });
                        controls.appendChild(toggleBtn);

                        function draw() {
                            ctx.clearRect(0, 0, 580, 440);
                            ctx.fillStyle = '#0d1117'; ctx.fillRect(0, 0, 580, 440);

                            var fd = fields[sel];
                            var table = showMul ? fd.mul : fd.add;
                            var op = showMul ? '\u00D7' : '+';
                            var n = fd.elements.length;

                            ctx.fillStyle = '#c9d1d9'; ctx.font = 'bold 15px serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(fd.name + ' ' + (showMul ? 'Multiplication' : 'Addition') + ' Table', 290, 30);

                            var cellSize = Math.min(50, 400 / (n + 1));
                            var startX = 290 - (n + 1) * cellSize / 2;
                            var startY = 60;

                            // Header row
                            ctx.fillStyle = '#161b22';
                            ctx.fillRect(startX, startY, (n + 1) * cellSize, cellSize);

                            ctx.fillStyle = '#f0883e'; ctx.font = 'bold 14px monospace';
                            ctx.fillText(op, startX + cellSize / 2, startY + cellSize / 2 + 5);

                            for (var j = 0; j < n; j++) {
                                ctx.fillStyle = '#58a6ff';
                                ctx.fillText(fd.elements[j], startX + (j + 1) * cellSize + cellSize / 2, startY + cellSize / 2 + 5);
                            }

                            // Rows
                            for (var i = 0; i < n; i++) {
                                var ry = startY + (i + 1) * cellSize;
                                // Row header
                                ctx.fillStyle = '#161b22';
                                ctx.fillRect(startX, ry, cellSize, cellSize);
                                ctx.fillStyle = '#58a6ff'; ctx.font = 'bold 14px monospace';
                                ctx.fillText(fd.elements[i], startX + cellSize / 2, ry + cellSize / 2 + 5);

                                for (var jj = 0; jj < n; jj++) {
                                    var cx2 = startX + (jj + 1) * cellSize;
                                    // Alternating background
                                    ctx.fillStyle = (i + jj) % 2 === 0 ? '#0d1117' : '#161b22';
                                    ctx.fillRect(cx2, ry, cellSize, cellSize);

                                    ctx.strokeStyle = '#21262d'; ctx.lineWidth = 0.5;
                                    ctx.strokeRect(cx2, ry, cellSize, cellSize);

                                    var val = table[i][jj];
                                    ctx.fillStyle = val === 0 ? '#484f58' : '#c9d1d9';
                                    ctx.font = '13px monospace';
                                    ctx.fillText(fd.elements[val], cx2 + cellSize / 2, ry + cellSize / 2 + 5);
                                }
                            }

                            // Grid border
                            ctx.strokeStyle = '#30363d'; ctx.lineWidth = 2;
                            ctx.strokeRect(startX, startY, (n + 1) * cellSize, (n + 1) * cellSize);

                            // Info
                            ctx.fillStyle = '#8b949e'; ctx.font = '12px sans-serif';
                            ctx.textAlign = 'left';
                            var infoY = startY + (n + 2) * cellSize + 10;
                            ctx.fillText('|' + fd.name + '| = ' + n + ', |' + fd.name + '\u00D7| = ' + (n - 1) + ' (cyclic)', 30, infoY);
                            if (fd.name === 'F\u2084') {
                                ctx.fillText('Characteristic 2: 1+1=0, \u03B1\u00B2=1+\u03B1, \u03B1\u00B3=1', 30, infoY + 20);
                            }
                        }
                        draw();
                    }
                },
                {
                    id: 'subfield-lattice',
                    setup: function(container, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = 580; canvas.height = 380;
                        container.appendChild(canvas);
                        const ctx = canvas.getContext('2d');

                        var examples = [
                            {
                                name: 'Subfields of F_{2^12}',
                                p: 2, n: 12,
                                nodes: [
                                    { label: 'F\u2082', d: 1, x: 290, y: 340 },
                                    { label: 'F\u2084', d: 2, x: 140, y: 250 },
                                    { label: 'F\u2088', d: 3, x: 290, y: 250 },
                                    { label: 'F\u2082\u2074', d: 4, x: 440, y: 250 },
                                    { label: 'F\u2082\u2076', d: 6, x: 190, y: 150 },
                                    { label: 'F\u2082\u00B9\u00B2', d: 12, x: 290, y: 60 }
                                ],
                                edges: [
                                    [0,1],[0,2],[1,3],[1,4],[2,4],[3,5],[4,5]
                                ]
                            },
                            {
                                name: 'Subfields of F_{3^6}',
                                p: 3, n: 6,
                                nodes: [
                                    { label: 'F\u2083', d: 1, x: 290, y: 320 },
                                    { label: 'F\u2089', d: 2, x: 170, y: 220 },
                                    { label: 'F\u2082\u2087', d: 3, x: 410, y: 220 },
                                    { label: 'F\u2083\u2076 = F\u2087\u2082\u2089', d: 6, x: 290, y: 80 }
                                ],
                                edges: [[0,1],[0,2],[1,3],[2,3]]
                            }
                        ];
                        var sel = 0;

                        var selEl = document.createElement('select');
                        examples.forEach(function(ex, i) {
                            var opt = document.createElement('option');
                            opt.value = i; opt.textContent = ex.name;
                            selEl.appendChild(opt);
                        });
                        selEl.addEventListener('change', function() { sel = +selEl.value; draw(); });
                        controls.appendChild(selEl);

                        function draw() {
                            ctx.clearRect(0, 0, 580, 380);
                            ctx.fillStyle = '#0d1117'; ctx.fillRect(0, 0, 580, 380);

                            var ex = examples[sel];
                            ctx.fillStyle = '#c9d1d9'; ctx.font = 'bold 15px serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(ex.name, 290, 25);

                            // Edges
                            for (var e = 0; e < ex.edges.length; e++) {
                                var n1 = ex.nodes[ex.edges[e][0]];
                                var n2 = ex.nodes[ex.edges[e][1]];
                                ctx.strokeStyle = '#30363d'; ctx.lineWidth = 2;
                                ctx.beginPath(); ctx.moveTo(n1.x, n1.y); ctx.lineTo(n2.x, n2.y); ctx.stroke();

                                var mx = (n1.x + n2.x) / 2 + 15;
                                var my = (n1.y + n2.y) / 2;
                                var deg = n2.d / n1.d;
                                ctx.fillStyle = '#f0883e'; ctx.font = 'bold 11px monospace';
                                ctx.fillText('' + deg, mx, my);
                            }

                            // Nodes
                            for (var i = 0; i < ex.nodes.length; i++) {
                                var nd = ex.nodes[i];
                                var isTop = (i === ex.nodes.length - 1);
                                var isBot = (i === 0);
                                ctx.beginPath(); ctx.arc(nd.x, nd.y, 8, 0, 2 * Math.PI);
                                ctx.fillStyle = isTop ? '#58a6ff' : (isBot ? '#238636' : '#d2a8ff');
                                ctx.fill(); ctx.strokeStyle = '#c9d1d9'; ctx.lineWidth = 1.5; ctx.stroke();

                                ctx.fillStyle = '#c9d1d9'; ctx.font = '13px monospace';
                                ctx.fillText(nd.label, nd.x, nd.y - 15);
                            }

                            ctx.fillStyle = '#8b949e'; ctx.font = '11px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('F_{p^m} is a subfield of F_{p^n} iff m divides n. Orange labels = extension degrees.', 30, 370);
                        }
                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch15-ex15',
                    type: 'short-answer',
                    question: 'Construct \\(\\mathbb{F}_9\\) explicitly. List all 9 elements and find a generator of the multiplicative group.',
                    hint: 'Find an irreducible quadratic over \\(\\mathbb{F}_3\\), then form the quotient.',
                    solution: 'The polynomial \\(x^2 + 1\\) is irreducible over \\(\\mathbb{F}_3\\) (no roots: \\(0^2+1=1, 1^2+1=2, 2^2+1=2\\)). So \\(\\mathbb{F}_9 = \\mathbb{F}_3[x]/(x^2+1)\\). Elements: \\(\\{a+b\\alpha : a,b \\in \\{0,1,2\\}\\}\\) where \\(\\alpha^2 = -1 = 2\\). That gives 9 elements. For a generator: \\(\\alpha\\) has order 4 (since \\(\\alpha^2=2, \\alpha^3=2\\alpha, \\alpha^4=4=1\\)), not 8. Try \\(1+\\alpha\\): \\((1+\\alpha)^2 = 1+2\\alpha+\\alpha^2 = 1+2\\alpha+2 = 2\\alpha\\), \\((1+\\alpha)^4 = (2\\alpha)^2 = 4\\alpha^2 = 2\\), \\((1+\\alpha)^8 = 4 = 1\\). Since the order divides 8 and is not 1, 2, or 4, the order is 8, so \\(1+\\alpha\\) generates \\(\\mathbb{F}_9^\\times\\).'
                },
                {
                    id: 'ch15-ex16',
                    type: 'mc',
                    question: 'Which of the following is a subfield of \\(\\mathbb{F}_{2^{10}}\\)?',
                    options: [
                        '\\(\\mathbb{F}_{2^3}\\)',
                        '\\(\\mathbb{F}_{2^4}\\)',
                        '\\(\\mathbb{F}_{2^5}\\)',
                        '\\(\\mathbb{F}_{2^6}\\)'
                    ],
                    answer: 2,
                    explanation: '\\(\\mathbb{F}_{2^m}\\) is a subfield of \\(\\mathbb{F}_{2^{10}}\\) iff \\(m | 10\\). The divisors of 10 are 1, 2, 5, 10. So \\(\\mathbb{F}_{2^5}\\) is a subfield, but \\(\\mathbb{F}_{2^3}, \\mathbb{F}_{2^4}, \\mathbb{F}_{2^6}\\) are not.'
                },
                {
                    id: 'ch15-ex17',
                    type: 'short-answer',
                    question: 'Prove that \\(\\mathbb{F}_{p^n}\\) is the splitting field of \\(x^{p^n} - x\\) over \\(\\mathbb{F}_p\\).',
                    hint: 'Show that every element of \\(\\mathbb{F}_{p^n}\\) is a root of this polynomial and count the roots.',
                    solution: 'The multiplicative group \\(\\mathbb{F}_{p^n}^\\times\\) has order \\(p^n - 1\\), so every nonzero \\(\\alpha \\in \\mathbb{F}_{p^n}\\) satisfies \\(\\alpha^{p^n-1} = 1\\), hence \\(\\alpha^{p^n} = \\alpha\\). This also holds for \\(\\alpha = 0\\). So all \\(p^n\\) elements of \\(\\mathbb{F}_{p^n}\\) are roots of \\(x^{p^n} - x\\). Since this polynomial has degree \\(p^n\\), it has exactly \\(p^n\\) roots (no repeated roots, as the derivative is \\(-1 \\neq 0\\)). Thus \\(\\mathbb{F}_{p^n}\\) contains all roots and is generated by them over \\(\\mathbb{F}_p\\), making it the splitting field.'
                },
                {
                    id: 'ch15-ex18',
                    type: 'short-answer',
                    question: 'Find all irreducible polynomials of degree 2 over \\(\\mathbb{F}_2\\). How many are there?',
                    hint: 'List all degree-2 polynomials over \\(\\mathbb{F}_2\\) and check which have no roots.',
                    solution: 'Monic degree-2 polynomials over \\(\\mathbb{F}_2\\): \\(x^2, x^2+1, x^2+x, x^2+x+1\\). Check roots: \\(x^2 = x \\cdot x\\) (reducible); \\(x^2+1 = (x+1)^2\\) in char 2 (reducible); \\(x^2+x = x(x+1)\\) (reducible); \\(x^2+x+1\\): \\(f(0) = 1, f(1) = 1\\), no roots, hence irreducible. There is exactly 1 irreducible quadratic over \\(\\mathbb{F}_2\\).'
                }
            ]
        }
    ]
});
