window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch17',
    number: 17,
    title: 'Applications of Galois Theory',
    subtitle: 'Solvability by radicals, insolvability of the quintic, constructions',
    sections: [
        // ===== SECTION 1: Solvable Groups =====
        {
            id: 'ch17-sec01',
            title: 'Solvable Groups',
            content: `
<h2>1 &middot; Solvable Groups</h2>

<div class="env-block intuition">
<div class="env-label">Overview</div>
Galois theory reaches its deepest consequences when it links group structure to the solvability of polynomial equations. A group is "solvable" if it can be decomposed into abelian layers. This section develops the theory of solvable groups and proves the key fact that \\(S_n\\) is not solvable for \\(n \\geq 5\\).
</div>

<div class="env-block definition">
<div class="env-label">Definition &mdash; Commutator and Commutator Subgroup</div>
Let \\(G\\) be a group. The <strong>commutator</strong> of \\(a, b \\in G\\) is \\([a, b] = a^{-1}b^{-1}ab\\). The <strong>commutator subgroup</strong> (or <strong>derived subgroup</strong>) is
\\[G' = [G, G] = \\langle [a, b] \\mid a, b \\in G \\rangle.\\]
</div>

<p>
The commutator subgroup measures how far \\(G\\) is from being abelian: \\(G\\) is abelian if and only if \\(G' = \\{e\\}\\).
</p>

<div class="env-block proposition">
<div class="env-label">Proposition &mdash; Properties of the Commutator Subgroup</div>
Let \\(G\\) be a group. Then:
<ol>
<li>\\(G' \\trianglelefteq G\\).</li>
<li>\\(G/G'\\) is abelian.</li>
<li>If \\(N \\trianglelefteq G\\), then \\(G/N\\) is abelian if and only if \\(G' \\leq N\\).</li>
</ol>
</div>

<div class="env-block definition">
<div class="env-label">Definition &mdash; Derived Series</div>
The <strong>derived series</strong> of a group \\(G\\) is defined inductively:
\\[G^{(0)} = G, \\quad G^{(i+1)} = [G^{(i)}, G^{(i)}].\\]
So \\(G^{(0)} \\geq G^{(1)} \\geq G^{(2)} \\geq \\cdots\\), where each \\(G^{(i+1)} \\trianglelefteq G^{(i)}\\) with abelian quotient.
</div>

<div class="env-block definition">
<div class="env-label">Definition &mdash; Solvable Group</div>
A group \\(G\\) is <strong>solvable</strong> if its derived series reaches the identity: there exists \\(n\\) such that \\(G^{(n)} = \\{e\\}\\).
<br><br>
Equivalently, \\(G\\) is solvable if there exists a chain
\\[\\{e\\} = G_0 \\trianglelefteq G_1 \\trianglelefteq \\cdots \\trianglelefteq G_k = G\\]
with each quotient \\(G_{i+1}/G_i\\) abelian.
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; Small Solvable Groups</div>
<ul>
<li>Every abelian group is solvable (\\(G^{(1)} = \\{e\\}\\)).</li>
<li>\\(S_3\\) is solvable: \\(S_3 \\trianglerighteq A_3 \\trianglerighteq \\{e\\}\\), with quotients \\(\\mathbb{Z}/2\\mathbb{Z}\\) and \\(\\mathbb{Z}/3\\mathbb{Z}\\).</li>
<li>\\(S_4\\) is solvable: \\(S_4 \\trianglerighteq A_4 \\trianglerighteq V_4 \\trianglerighteq \\langle (12)(34) \\rangle \\trianglerighteq \\{e\\}\\).</li>
</ul>
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; \\(A_n\\) is Simple for \\(n \\geq 5\\)</div>
For \\(n \\geq 5\\), the alternating group \\(A_n\\) has no nontrivial proper normal subgroups.
</div>

<div class="env-block proof">
<div class="env-label">Proof Sketch</div>
One shows that every normal subgroup of \\(A_n\\) (\\(n \\geq 5\\)) contains a 3-cycle. Since all 3-cycles are conjugate in \\(A_n\\), any nontrivial normal subgroup contains all 3-cycles. But 3-cycles generate \\(A_n\\), so the subgroup must be all of \\(A_n\\).
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; \\(S_n\\) is Not Solvable for \\(n \\geq 5\\)</div>
For \\(n \\geq 5\\), the symmetric group \\(S_n\\) is not solvable.
</div>

<div class="env-block proof">
<div class="env-label">Proof</div>
We have \\(S_n^{(1)} = [S_n, S_n] = A_n\\) for \\(n \\geq 2\\). Since \\(A_n\\) is simple and nonabelian for \\(n \\geq 5\\), we get \\(A_n^{(1)} = A_n\\). Therefore \\(S_n^{(k)} = A_n\\) for all \\(k \\geq 1\\), and the derived series never reaches \\(\\{e\\}\\).
</div>

<div class="env-block proposition">
<div class="env-label">Proposition &mdash; Subgroups and Quotients of Solvable Groups</div>
<ol>
<li>Every subgroup of a solvable group is solvable.</li>
<li>Every quotient of a solvable group is solvable.</li>
<li>If \\(N \\trianglelefteq G\\) with \\(N\\) and \\(G/N\\) both solvable, then \\(G\\) is solvable.</li>
</ol>
</div>
`,
            visualizations: [
                {
                    id: 'derived-series-explorer',
                    title: 'Derived Series Explorer',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { scale: 40 });
                        var ctx = viz.ctx;

                        var groups = [
                            { name: 'S3', series: ['S3', 'A3', '{e}'], quotients: ['Z/2Z', 'Z/3Z'], solvable: true },
                            { name: 'S4', series: ['S4', 'A4', 'V4', '{e}'], quotients: ['Z/2Z', 'Z/3Z', 'Z/2Z x Z/2Z'], solvable: true },
                            { name: 'S5', series: ['S5', 'A5', 'A5', '...'], quotients: ['Z/2Z', '{e} (simple!)', '...'], solvable: false },
                            { name: 'Z/6Z', series: ['Z/6Z', '{0}'], quotients: ['Z/6Z'], solvable: true },
                            { name: 'A5', series: ['A5', 'A5', '...'], quotients: ['{e} (simple!)', '...'], solvable: false }
                        ];

                        var selected = 0;

                        controls.innerHTML = '<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;">' +
                            groups.map(function(g, i) {
                                return '<button class="viz-btn" data-idx="' + i + '">' + g.name + '</button>';
                            }).join('') + '</div>';

                        controls.querySelectorAll('.viz-btn').forEach(function(btn) {
                            btn.addEventListener('click', function() {
                                selected = parseInt(this.getAttribute('data-idx'));
                            });
                        });

                        viz.onDraw(function() {
                            ctx.clearRect(-viz.w/2, -viz.h/2, viz.w, viz.h);
                            var g = groups[selected];
                            var n = g.series.length;
                            var boxW = 80;
                            var gap = 50;
                            var totalW = n * boxW + (n - 1) * gap;
                            var startX = -totalW / 2 + boxW / 2;

                            ctx.font = '14px sans-serif';
                            ctx.textAlign = 'center';

                            // Title
                            ctx.fillStyle = g.solvable ? viz.colors.blue : viz.colors.red;
                            ctx.font = 'bold 16px sans-serif';
                            ctx.fillText(g.name + (g.solvable ? ' is SOLVABLE' : ' is NOT SOLVABLE'), 0, -viz.h/2 + 40);

                            // Draw series boxes
                            for (var i = 0; i < n; i++) {
                                var cx = startX + i * (boxW + gap);
                                var cy = 0;

                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 2;
                                ctx.strokeRect(cx - boxW/2, cy - 20, boxW, 40);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '13px sans-serif';
                                ctx.fillText(g.series[i], cx, cy + 5);

                                ctx.fillStyle = '#888';
                                ctx.font = '11px sans-serif';
                                ctx.fillText('G^(' + i + ')', cx, cy - 30);

                                // Arrow and quotient label
                                if (i < n - 1) {
                                    var ax1 = cx + boxW/2;
                                    var ax2 = cx + boxW/2 + gap;
                                    ctx.beginPath();
                                    ctx.moveTo(ax1, cy);
                                    ctx.lineTo(ax2, cy);
                                    ctx.strokeStyle = viz.colors.orange;
                                    ctx.stroke();
                                    // arrowhead
                                    ctx.beginPath();
                                    ctx.moveTo(ax2 - 6, cy - 4);
                                    ctx.lineTo(ax2, cy);
                                    ctx.lineTo(ax2 - 6, cy + 4);
                                    ctx.stroke();

                                    ctx.fillStyle = viz.colors.orange;
                                    ctx.font = '10px sans-serif';
                                    ctx.fillText(g.quotients[i], (ax1 + ax2) / 2, cy + 25);
                                }
                            }
                        });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch17-ex01',
                    type: 'short-answer',
                    question: 'Compute the derived series of the dihedral group D_4 (symmetries of the square, order 8). Is D_4 solvable?',
                    hint: 'D_4 = <r, s | r^4 = s^2 = e, srs = r^{-1}>. Compute commutators [r, s], [r^2, s], etc.',
                    solution: 'D_4\' = {e, r^2} since [r, s] = r^{-1}s^{-1}rs = r^{-1}sr s = r^{-2} = r^2, and all commutators lie in <r^2>. Then D_4\'\' = [{e, r^2}, {e, r^2}] = {e} since {e, r^2} is abelian. The derived series is D_4 > {e, r^2} > {e}, so D_4 is solvable.'
                },
                {
                    id: 'ch17-ex02',
                    type: 'short-answer',
                    question: 'Prove that every group of order p^k (p prime) is solvable.',
                    hint: 'Use the fact that p-groups have nontrivial centers, and apply induction on k.',
                    solution: 'By induction on k. The base case k = 0 is trivial. For k >= 1, the center Z(G) is nontrivial (a standard result for p-groups). Both Z(G) (abelian, hence solvable) and G/Z(G) (a p-group of smaller order, solvable by induction) are solvable. By the extension property, G is solvable.'
                },
                {
                    id: 'ch17-ex03',
                    type: 'short-answer',
                    question: 'Show that A_5 has no normal subgroup of order 2, 3, 4, 5, 6, 10, 15, or 20.',
                    hint: 'A normal subgroup is a union of conjugacy classes (including {e}). The conjugacy class sizes in A_5 are 1, 12, 12, 15, 20.',
                    solution: 'The conjugacy class sizes in A_5 are 1, 12, 12, 15, 20 (total: 60). A normal subgroup must be a union of conjugacy classes containing {e}. So its order must be 1 + (a sum of some subset of {12, 12, 15, 20}). The possible sums that divide 60 are: 1, 1+12+12+15+20=60. No other subset sum plus 1 divides 60. So the only normal subgroups are {e} and A_5, confirming simplicity.'
                }
            ]
        },
        // ===== SECTION 2: Solvability by Radicals =====
        {
            id: 'ch17-sec02',
            title: 'Solvability by Radicals',
            content: `
<h2>2 &middot; Solvability by Radicals</h2>

<div class="env-block intuition">
<div class="env-label">Motivation</div>
We have formulas for roots of polynomials of degree 2, 3, and 4 that involve only arithmetic operations and radicals (\\(n\\)-th roots). The fundamental question is: when can a polynomial equation be "solved by radicals"? Galois theory provides a complete answer by connecting this to solvability of the Galois group.
</div>

<div class="env-block definition">
<div class="env-label">Definition &mdash; Radical Extension</div>
A field extension \\(E/F\\) is a <strong>radical extension</strong> if there exists a tower
\\[F = F_0 \\subset F_1 \\subset \\cdots \\subset F_m = E\\]
where each \\(F_{i+1} = F_i(\\alpha_i)\\) with \\(\\alpha_i^{n_i} \\in F_i\\) for some positive integer \\(n_i\\). That is, each step adjoins an \\(n_i\\)-th root of an element already in the field.
</div>

<div class="env-block definition">
<div class="env-label">Definition &mdash; Solvable by Radicals</div>
A polynomial \\(f(x) \\in F[x]\\) is <strong>solvable by radicals</strong> over \\(F\\) if there exists a radical extension \\(E/F\\) containing a splitting field of \\(f\\) over \\(F\\). Equivalently, all roots of \\(f\\) can be expressed using elements of \\(F\\), the four arithmetic operations, and extraction of \\(n\\)-th roots (for various \\(n\\)).
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; Quadratic and Cubic Formulas</div>
<ul>
<li>The quadratic formula \\(x = \\frac{-b \\pm \\sqrt{b^2 - 4c}}{2}\\) shows every degree-2 polynomial over \\(\\mathbb{Q}\\) is solvable by radicals.</li>
<li>Cardano's formula solves \\(x^3 + px + q = 0\\) via \\(x = \\sqrt[3]{-q/2 + \\sqrt{q^2/4 + p^3/27}} + \\sqrt[3]{-q/2 - \\sqrt{q^2/4 + p^3/27}}\\).</li>
</ul>
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; Galois's Criterion</div>
Let \\(F\\) be a field of characteristic 0 and \\(f(x) \\in F[x]\\). Then \\(f\\) is solvable by radicals over \\(F\\) if and only if the Galois group \\(\\operatorname{Gal}(E/F)\\) is a solvable group, where \\(E\\) is the splitting field of \\(f\\) over \\(F\\).
</div>

<div class="env-block proof">
<div class="env-label">Proof Outline</div>
<p><strong>(\\(\\Rightarrow\\))</strong> If \\(f\\) is solvable by radicals, its roots lie in a radical extension. One shows that the Galois group of a radical extension (after possibly enlarging to include roots of unity) is solvable, using the fact that each step \\(F_i(\\alpha_i)/F_i\\) has a cyclic Galois group when \\(F_i\\) contains the relevant roots of unity.</p>
<p><strong>(\\(\\Leftarrow\\))</strong> If \\(\\operatorname{Gal}(E/F)\\) is solvable, one constructs a radical extension step by step, using the subnormal series with abelian quotients. Each cyclic quotient corresponds to adjoining a root of unity and then an \\(n\\)-th root.</p>
</div>

<div class="env-block proposition">
<div class="env-label">Proposition &mdash; Key Lemma for Radical Extensions</div>
Let \\(F\\) contain a primitive \\(n\\)-th root of unity \\(\\zeta_n\\), and let \\(a \\in F\\). Then \\(x^n - a\\) splits over \\(F(\\sqrt[n]{a})\\), and \\(\\operatorname{Gal}(F(\\sqrt[n]{a})/F) \\cong \\mathbb{Z}/d\\mathbb{Z}\\) where \\(d \\mid n\\). In particular, this Galois group is cyclic (hence solvable).
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; Quartic Solvability</div>
Every quartic polynomial over \\(\\mathbb{Q}\\) is solvable by radicals. Its Galois group is a transitive subgroup of \\(S_4\\), and \\(S_4\\) is solvable. Since every subgroup of a solvable group is solvable, the result follows by Galois's criterion.
</div>
`,
            visualizations: [
                {
                    id: 'radical-tower-viz',
                    title: 'Radical Extension Tower',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { scale: 40 });
                        var ctx = viz.ctx;

                        var towers = [
                            {
                                name: 'x^2 - 2',
                                fields: ['Q', 'Q(\\u221a2)'],
                                labels: ['adjoin \\u221a2'],
                                galois: 'Z/2Z',
                                solvable: true
                            },
                            {
                                name: 'x^3 - 2',
                                fields: ['Q', 'Q(\\u03b6\\u2083)', 'Q(\\u03b6\\u2083, \\u00b3\\u221a2)'],
                                labels: ['adjoin \\u03b6\\u2083', 'adjoin \\u00b3\\u221a2'],
                                galois: 'S3',
                                solvable: true
                            },
                            {
                                name: 'x^4 - 2',
                                fields: ['Q', 'Q(i)', 'Q(i, \\u2074\\u221a2)'],
                                labels: ['adjoin i', 'adjoin \\u2074\\u221a2'],
                                galois: 'D4',
                                solvable: true
                            }
                        ];

                        var selected = 0;

                        controls.innerHTML = '<div style="display:flex;gap:8px;justify-content:center;">' +
                            towers.map(function(t, i) {
                                return '<button class="viz-btn" data-idx="' + i + '">' + t.name + '</button>';
                            }).join('') + '</div>';

                        controls.querySelectorAll('.viz-btn').forEach(function(btn) {
                            btn.addEventListener('click', function() {
                                selected = parseInt(this.getAttribute('data-idx'));
                            });
                        });

                        viz.onDraw(function() {
                            ctx.clearRect(-viz.w/2, -viz.h/2, viz.w, viz.h);
                            var t = towers[selected];
                            var n = t.fields.length;
                            var boxH = 30;
                            var gap = 50;
                            var totalH = n * boxH + (n - 1) * gap;
                            var startY = totalH / 2 - boxH / 2;

                            ctx.textAlign = 'center';

                            // Title
                            ctx.fillStyle = viz.colors.blue;
                            ctx.font = 'bold 15px sans-serif';
                            ctx.fillText('Radical tower for ' + t.name, 0, -viz.h/2 + 30);

                            ctx.fillStyle = t.solvable ? viz.colors.teal : viz.colors.red;
                            ctx.font = '13px sans-serif';
                            ctx.fillText('Gal = ' + t.galois + ' (solvable)', 0, -viz.h/2 + 50);

                            // Draw tower bottom to top
                            for (var i = 0; i < n; i++) {
                                var cy = startY - i * (boxH + gap);
                                ctx.strokeStyle = viz.colors.blue;
                                ctx.lineWidth = 2;
                                ctx.strokeRect(-60, cy - boxH/2, 120, boxH);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '13px sans-serif';
                                ctx.fillText(t.fields[i], 0, cy + 5);

                                if (i > 0) {
                                    var y1 = cy + boxH/2;
                                    var y2 = startY - (i - 1) * (boxH + gap) - boxH/2;
                                    ctx.beginPath();
                                    ctx.moveTo(0, y1);
                                    ctx.lineTo(0, y2);
                                    ctx.strokeStyle = viz.colors.orange;
                                    ctx.stroke();
                                    ctx.fillStyle = viz.colors.orange;
                                    ctx.font = '11px sans-serif';
                                    ctx.fillText(t.labels[i - 1], 70, (y1 + y2) / 2 + 4);
                                }
                            }
                        });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch17-ex04',
                    type: 'short-answer',
                    question: 'Show that x^4 + x^3 + x^2 + x + 1 is solvable by radicals over Q.',
                    hint: 'This is the 5th cyclotomic polynomial. What is its Galois group?',
                    solution: 'The polynomial is the 5th cyclotomic polynomial with splitting field Q(zeta_5). The Galois group is Gal(Q(zeta_5)/Q) = (Z/5Z)* = Z/4Z, which is cyclic and hence solvable. By Galois\'s criterion, the polynomial is solvable by radicals.'
                },
                {
                    id: 'ch17-ex05',
                    type: 'short-answer',
                    question: 'Let f(x) = x^3 - 3x + 1 over Q. Its discriminant is 81 = 9^2. Determine the Galois group and decide if f is solvable by radicals.',
                    hint: 'A cubic with square discriminant has Galois group A_3.',
                    solution: 'The discriminant is 81 = 9^2, a perfect square. For an irreducible cubic, a square discriminant means Gal(f) = A_3 = Z/3Z (not the full S_3). Since Z/3Z is cyclic, it is solvable, so f is solvable by radicals. In fact, the roots are 2cos(2pi/9), 2cos(4pi/9), and 2cos(8pi/9).'
                },
                {
                    id: 'ch17-ex06',
                    type: 'short-answer',
                    question: 'Explain why every polynomial of degree at most 4 over Q is solvable by radicals.',
                    hint: 'What are the possible Galois groups, and are they all solvable?',
                    solution: 'The Galois group of a degree-n polynomial is a transitive subgroup of S_n. For n <= 4, every subgroup of S_n is solvable because S_4 is solvable (derived series S_4 > A_4 > V_4 > Z/2Z > {e}), and every subgroup of a solvable group is solvable. By Galois\'s criterion, every polynomial of degree at most 4 is solvable by radicals.'
                }
            ]
        },
        // ===== SECTION 3: Insolvability of the Quintic =====
        {
            id: 'ch17-sec03',
            title: 'Insolvability of the Quintic',
            content: `
<h2>3 &middot; Insolvability of the Quintic</h2>

<div class="env-block intuition">
<div class="env-label">The Grand Impossibility</div>
For centuries, mathematicians sought a formula for roots of quintic polynomials analogous to the quadratic formula. Abel and Galois proved this search was doomed: there exist degree-5 polynomials that cannot be solved by any combination of arithmetic operations and radicals.
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; Abel-Ruffini Theorem</div>
There is no general formula using radicals to solve polynomial equations of degree 5 or higher. More precisely, there exist polynomials \\(f(x) \\in \\mathbb{Q}[x]\\) of degree 5 whose Galois group is \\(S_5\\), which is not solvable, so \\(f\\) is not solvable by radicals.
</div>

<p>
The strategy is to exhibit a specific quintic with Galois group \\(S_5\\). We need two key lemmas.
</p>

<div class="env-block proposition">
<div class="env-label">Lemma &mdash; Transitive Subgroup with a Transposition and a \\(p\\)-Cycle</div>
Let \\(p\\) be prime. If a subgroup \\(G \\leq S_p\\) is transitive and contains both a transposition and a \\(p\\)-cycle, then \\(G = S_p\\).
</div>

<div class="env-block proof">
<div class="env-label">Proof Sketch</div>
By relabeling, assume the \\(p\\)-cycle is \\(\\sigma = (1\\,2\\,\\ldots\\,p)\\). Conjugating any transposition \\((a\\,b)\\) by powers of \\(\\sigma\\) generates transpositions with the same gap \\(b - a\\). Since \\(p\\) is prime, \\(\\gcd(b - a, p) = 1\\), so repeated shifting yields all transpositions. Since transpositions generate \\(S_p\\), we get \\(G = S_p\\).
</div>

<div class="env-block proposition">
<div class="env-label">Lemma &mdash; Galois Group Contains a Transposition</div>
Let \\(f(x) \\in \\mathbb{Q}[x]\\) be irreducible of prime degree \\(p\\) with exactly \\(p - 2\\) real roots (and one pair of complex conjugate roots). Then \\(\\operatorname{Gal}(f) = S_p\\).
</div>

<div class="env-block proof">
<div class="env-label">Proof</div>
Since \\(f\\) is irreducible of prime degree \\(p\\), the Galois group \\(G = \\operatorname{Gal}(f)\\) acts transitively on the \\(p\\) roots. The order \\(|G|\\) is divisible by \\(p\\), so by Cauchy's theorem \\(G\\) contains an element of order \\(p\\), which must be a \\(p\\)-cycle (the only elements of order \\(p\\) in \\(S_p\\) are \\(p\\)-cycles). Complex conjugation restricts to an automorphism of the splitting field that swaps the two complex roots and fixes the \\(p - 2\\) real roots, giving a transposition in \\(G\\). By the previous lemma, \\(G = S_p\\).
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; A Specific Insolvable Quintic</div>
The polynomial \\(f(x) = x^5 - 6x + 3 \\in \\mathbb{Q}[x]\\) is not solvable by radicals.
</div>

<div class="env-block proof">
<div class="env-label">Proof</div>
<p><strong>Step 1: Irreducibility.</strong> By Eisenstein's criterion with \\(p = 3\\): \\(3 \\mid -6\\), \\(3 \\mid 3\\), \\(3 \\nmid 1\\), \\(9 \\nmid 3\\). So \\(f\\) is irreducible over \\(\\mathbb{Q}\\).</p>
<p><strong>Step 2: Root count.</strong> \\(f'(x) = 5x^4 - 6\\), which has real roots at \\(x = \\pm (6/5)^{1/4} \\approx \\pm 1.047\\). Evaluating: \\(f(\\pm 1.047)\\) shows \\(f\\) has a local max above 0 and a local min below 0, giving exactly 3 real roots and 1 pair of complex conjugate roots.</p>
<p><strong>Step 3:</strong> By the lemma, \\(\\operatorname{Gal}(f) = S_5\\). Since \\(S_5\\) is not solvable, \\(f\\) is not solvable by radicals.</p>
</div>

<div class="env-block remark">
<div class="env-label">Remark</div>
The insolvability is not about the quintic degree per se. Some specific quintics (e.g., \\(x^5 - 2\\)) are solvable by radicals because their Galois groups are solvable. The theorem says no <em>universal</em> radical formula exists, and specific polynomials can be shown insolvable case by case.
</div>
`,
            visualizations: [
                {
                    id: 'quintic-roots-viz',
                    title: 'Roots of x^5 - 6x + 3',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { scale: 40 });
                        var ctx = viz.ctx;

                        viz.onDraw(function() {
                            ctx.clearRect(-viz.w/2, -viz.h/2, viz.w, viz.h);
                            var w = viz.w;
                            var h = viz.h;

                            // Draw axes
                            ctx.strokeStyle = '#ccc';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(-w/2, 0);
                            ctx.lineTo(w/2, 0);
                            ctx.moveTo(0, -h/2);
                            ctx.lineTo(0, h/2);
                            ctx.stroke();

                            // Plot f(x) = x^5 - 6x + 3
                            var scaleX = 40;
                            var scaleY = 8;
                            ctx.beginPath();
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 2;
                            var first = true;
                            for (var px = -w/2; px <= w/2; px += 1) {
                                var x = px / scaleX;
                                var y = x*x*x*x*x - 6*x + 3;
                                var sy = -y * scaleY;
                                if (sy > h/2 || sy < -h/2) { first = true; continue; }
                                if (first) { ctx.moveTo(px, sy); first = false; }
                                else { ctx.lineTo(px, sy); }
                            }
                            ctx.stroke();

                            // Mark approximate real roots
                            var roots = [-1.67, 0.50, 1.40];
                            ctx.fillStyle = viz.colors.red;
                            for (var i = 0; i < roots.length; i++) {
                                var rx = roots[i] * scaleX;
                                ctx.beginPath();
                                ctx.arc(rx, 0, 5, 0, 2 * Math.PI);
                                ctx.fill();
                            }

                            // Labels
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('f(x) = x\u2075 - 6x + 3', -w/2 + 10, -h/2 + 25);
                            ctx.fillStyle = viz.colors.red;
                            ctx.fillText('3 real roots (red dots)', -w/2 + 10, -h/2 + 45);
                            ctx.fillText('+ 2 complex conjugate roots', -w/2 + 10, -h/2 + 62);
                            ctx.fillStyle = '#888';
                            ctx.fillText('Gal(f) = S\u2085 (not solvable)', -w/2 + 10, -h/2 + 82);
                        });
                    }
                },
                {
                    id: 'solvability-comparison',
                    title: 'Solvable vs Insolvable Quintics',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { scale: 40 });
                        var ctx = viz.ctx;

                        var examples = [
                            { poly: 'x\u2075 - 2', galois: 'F\u2082\u2080 (order 20)', solvable: true, reason: 'Z/5Z \\u22ca Z/4Z is solvable' },
                            { poly: 'x\u2075 - 1', galois: 'Z/4Z', solvable: true, reason: 'Cyclic, hence solvable' },
                            { poly: 'x\u2075 - 6x + 3', galois: 'S\u2085 (order 120)', solvable: false, reason: 'A\u2085 is simple, nonabelian' },
                            { poly: 'x\u2075 - 4x + 2', galois: 'S\u2085 (order 120)', solvable: false, reason: 'Has exactly 3 real roots' }
                        ];

                        viz.onDraw(function() {
                            ctx.clearRect(-viz.w/2, -viz.h/2, viz.w, viz.h);
                            ctx.textAlign = 'center';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Quintic Polynomials: Solvable vs Insolvable', 0, -viz.h/2 + 30);

                            var startY = -viz.h/2 + 65;
                            var rowH = 45;

                            for (var i = 0; i < examples.length; i++) {
                                var ex = examples[i];
                                var y = startY + i * rowH;
                                ctx.fillStyle = ex.solvable ? viz.colors.teal : viz.colors.red;
                                ctx.font = 'bold 13px sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText((ex.solvable ? '\u2713 ' : '\u2717 ') + ex.poly, -viz.w/2 + 20, y);
                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '12px sans-serif';
                                ctx.fillText('Gal = ' + ex.galois, -viz.w/2 + 20, y + 16);
                                ctx.fillStyle = '#888';
                                ctx.font = '11px sans-serif';
                                ctx.fillText(ex.reason, -viz.w/2 + 20, y + 30);
                            }
                        });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch17-ex07',
                    type: 'short-answer',
                    question: 'Show that f(x) = x^5 - 4x + 2 is irreducible over Q and not solvable by radicals.',
                    hint: 'Use Eisenstein with p = 2. Analyze f\'(x) to count real roots.',
                    solution: 'Eisenstein with p = 2: 2 | -4, 2 | 2, 2 does not divide 1, 4 does not divide 2. So f is irreducible. The derivative f\'(x) = 5x^4 - 4 has roots at x = +/-(4/5)^{1/4}. Checking signs of f at critical points and at +/-infinity shows exactly 3 real roots and 2 complex conjugate roots. By the lemma, Gal(f) = S_5, which is not solvable.'
                },
                {
                    id: 'ch17-ex08',
                    type: 'short-answer',
                    question: 'Determine the Galois group of x^5 - 2 over Q and verify it is solvable.',
                    hint: 'The splitting field is Q(5th-root-of-2, zeta_5). Compute the degree of this extension.',
                    solution: 'The splitting field is E = Q(2^{1/5}, zeta_5) where [Q(2^{1/5}):Q] = 5 and [Q(zeta_5):Q] = 4. Since gcd(4,5) = 1, [E:Q] = 20. The Galois group G has order 20 and is isomorphic to Z/5Z \\rtimes Z/4Z (the Frobenius group F_{20}). Its derived series is F_{20} > Z/5Z > {e} with abelian quotients Z/4Z and Z/5Z. So G is solvable, confirming x^5 - 2 is solvable by radicals.'
                },
                {
                    id: 'ch17-ex09',
                    type: 'short-answer',
                    question: 'Does the insolvability of the quintic contradict the existence of roots in C? Explain carefully.',
                    hint: 'Distinguish between existence and expressibility.',
                    solution: 'No. By the Fundamental Theorem of Algebra, every degree-5 polynomial has exactly 5 roots in C. These roots exist as specific complex numbers. The Abel-Ruffini theorem says that for some quintics, these roots cannot be expressed using finitely many applications of +, -, *, /, and n-th roots starting from rational numbers. The roots exist but have no closed-form radical expression. They can still be approximated numerically or expressed via other means (e.g., elliptic functions, Bring radicals).'
                }
            ]
        },
        // ===== SECTION 4: Compass and Straightedge Constructions =====
        {
            id: 'ch17-sec04',
            title: 'Compass and Straightedge Constructions',
            content: `
<h2>4 &middot; Compass and Straightedge Constructions</h2>

<div class="env-block intuition">
<div class="env-label">Classical Problems</div>
The ancient Greeks posed three famous construction problems: doubling the cube, trisecting an arbitrary angle, and squaring the circle. All three are impossible with compass and straightedge alone, as Galois theory and the theory of field extensions reveal.
</div>

<div class="env-block definition">
<div class="env-label">Definition &mdash; Constructible Number</div>
A real number \\(\\alpha\\) is <strong>constructible</strong> if, starting from the points \\(0\\) and \\(1\\) on the real line, the point \\(\\alpha\\) can be obtained by a finite sequence of the following operations:
<ol>
<li>Drawing a line through two known points.</li>
<li>Drawing a circle with center at a known point and radius equal to the distance between two known points.</li>
<li>Taking intersection points of lines and circles so drawn.</li>
</ol>
The set of constructible numbers forms a field, denoted \\(\\mathcal{C}\\).
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; Constructibility Criterion</div>
A real number \\(\\alpha\\) is constructible if and only if there exists a tower of field extensions
\\[\\mathbb{Q} = F_0 \\subset F_1 \\subset \\cdots \\subset F_n\\]
with \\(\\alpha \\in F_n\\) and \\([F_{i+1} : F_i] = 2\\) for each \\(i\\). In particular, \\([\\mathbb{Q}(\\alpha) : \\mathbb{Q}]\\) must be a power of 2.
</div>

<div class="env-block proof">
<div class="env-label">Proof Idea</div>
Each compass-and-straightedge operation introduces coordinates obtained by solving linear or quadratic equations (line-line, line-circle, or circle-circle intersections). Each new point lies in a quadratic extension of the field generated by previously known points. Thus the degree over \\(\\mathbb{Q}\\) is a power of 2.
</div>

<div class="env-block corollary">
<div class="env-label">Corollary &mdash; Necessary Condition</div>
If \\(\\alpha\\) is constructible, then \\([\\mathbb{Q}(\\alpha) : \\mathbb{Q}]\\) is a power of 2. In particular, if \\([\\mathbb{Q}(\\alpha) : \\mathbb{Q}]\\) is not a power of 2, then \\(\\alpha\\) is not constructible.
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; Impossibility of Doubling the Cube</div>
It is impossible to construct \\(\\sqrt[3]{2}\\) with compass and straightedge. Equivalently, one cannot double the cube.
</div>

<div class="env-block proof">
<div class="env-label">Proof</div>
\\(\\sqrt[3]{2}\\) is a root of \\(x^3 - 2\\), which is irreducible over \\(\\mathbb{Q}\\) by Eisenstein (or the rational root theorem). Thus \\([\\mathbb{Q}(\\sqrt[3]{2}) : \\mathbb{Q}] = 3\\), which is not a power of 2.
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; Impossibility of Trisecting \\(60^\\circ\\)</div>
The angle \\(60^\\circ\\) cannot be trisected with compass and straightedge.
</div>

<div class="env-block proof">
<div class="env-label">Proof</div>
Trisecting \\(60^\\circ\\) requires constructing \\(\\cos 20^\\circ\\). Using the identity \\(\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta\\) with \\(\\theta = 20^\\circ\\), we get \\(1/2 = 4c^3 - 3c\\) where \\(c = \\cos 20^\\circ\\). So \\(8c^3 - 6c - 1 = 0\\). The polynomial \\(8x^3 - 6x - 1\\) is irreducible over \\(\\mathbb{Q}\\) (it has no rational roots). Thus \\([\\mathbb{Q}(\\cos 20^\\circ) : \\mathbb{Q}] = 3\\), not a power of 2.
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; Impossibility of Squaring the Circle</div>
It is impossible to construct \\(\\sqrt{\\pi}\\) (and hence impossible to square the circle).
</div>

<div class="env-block proof">
<div class="env-label">Proof</div>
Lindemann (1882) proved that \\(\\pi\\) is transcendental over \\(\\mathbb{Q}\\), so \\([\\mathbb{Q}(\\pi) : \\mathbb{Q}]\\) is infinite. Since constructible numbers must have finite degree (a power of 2) over \\(\\mathbb{Q}\\), \\(\\pi\\) is not constructible, and neither is \\(\\sqrt{\\pi}\\).
</div>
`,
            visualizations: [
                {
                    id: 'constructible-tower-viz',
                    title: 'Constructibility Degree Check',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { scale: 40 });
                        var ctx = viz.ctx;

                        var numbers = [
                            { name: '\\u221a2', deg: 2, pow2: true, constructible: true },
                            { name: '\\u221a(\\u221a2) = 2^{1/4}', deg: 4, pow2: true, constructible: true },
                            { name: '\\u00b3\\u221a2 = 2^{1/3}', deg: 3, pow2: false, constructible: false },
                            { name: 'cos(20\\u00b0)', deg: 3, pow2: false, constructible: false },
                            { name: '\\u221a\\u03c0', deg: '\\u221e', pow2: false, constructible: false },
                            { name: 'cos(2\\u03c0/17)', deg: 16, pow2: true, constructible: true }
                        ];

                        var selected = 0;

                        controls.innerHTML = '<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:center;">' +
                            numbers.map(function(n, i) {
                                return '<button class="viz-btn" data-idx="' + i + '">' + n.name + '</button>';
                            }).join('') + '</div>';

                        controls.querySelectorAll('.viz-btn').forEach(function(btn) {
                            btn.addEventListener('click', function() {
                                selected = parseInt(this.getAttribute('data-idx'));
                            });
                        });

                        viz.onDraw(function() {
                            ctx.clearRect(-viz.w/2, -viz.h/2, viz.w, viz.h);
                            var n = numbers[selected];

                            ctx.textAlign = 'center';
                            ctx.font = 'bold 18px sans-serif';
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText(n.name, 0, -40);

                            ctx.font = '14px sans-serif';
                            ctx.fillText('[Q(' + n.name + ') : Q] = ' + n.deg, 0, 0);

                            ctx.fillStyle = n.pow2 ? viz.colors.teal : viz.colors.red;
                            ctx.font = 'bold 14px sans-serif';
                            ctx.fillText(n.pow2 ? 'Power of 2: YES' : 'Power of 2: NO', 0, 30);

                            ctx.fillStyle = n.constructible ? viz.colors.blue : viz.colors.red;
                            ctx.font = 'bold 16px sans-serif';
                            ctx.fillText(n.constructible ? '\u2713 CONSTRUCTIBLE' : '\u2717 NOT CONSTRUCTIBLE', 0, 65);
                        });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch17-ex10',
                    type: 'short-answer',
                    question: 'Show that the regular 7-gon is not constructible with compass and straightedge.',
                    hint: 'Constructing a regular 7-gon requires constructing cos(2pi/7). What is the degree of the minimal polynomial?',
                    solution: 'Constructing a regular 7-gon requires constructing cos(2pi/7). The minimal polynomial of cos(2pi/7) over Q has degree (phi(7))/2 = 3 (where phi is Euler\'s totient function). Since 3 is not a power of 2, cos(2pi/7) is not constructible, and neither is the regular 7-gon.'
                },
                {
                    id: 'ch17-ex11',
                    type: 'short-answer',
                    question: 'Prove that a cube root of any non-perfect-cube rational number is not constructible.',
                    hint: 'If a is rational and not a perfect cube, what is the degree of a^{1/3} over Q?',
                    solution: 'Let a in Q with a not a perfect cube. Then x^3 - a is irreducible over Q (by the rational root theorem, any rational root would need to be a cube root of a, contradicting our assumption). So [Q(a^{1/3}) : Q] = 3, which is not a power of 2. Therefore a^{1/3} is not constructible.'
                },
                {
                    id: 'ch17-ex12',
                    type: 'short-answer',
                    question: 'Is the regular 12-gon constructible? Justify.',
                    hint: 'Express cos(2pi/12) = cos(30 degrees) in terms of known constructible numbers.',
                    solution: 'cos(2pi/12) = cos(30) = sqrt(3)/2. We have [Q(sqrt(3)) : Q] = 2, which is a power of 2. In fact, constructing the regular 12-gon only requires constructing sqrt(3), which is straightforward. Alternatively, phi(12) = 4, so [Q(zeta_12) : Q] = 4 = 2^2, a power of 2. The regular 12-gon is constructible.'
                }
            ]
        },
        // ===== SECTION 5: Cyclotomic Extensions =====
        {
            id: 'ch17-sec05',
            title: 'Cyclotomic Extensions',
            content: `
<h2>5 &middot; Cyclotomic Extensions</h2>

<div class="env-block intuition">
<div class="env-label">Roots of Unity</div>
Cyclotomic extensions, generated by roots of unity, are among the most important and best-understood examples in Galois theory. Their Galois groups are always abelian, giving a beautiful connection between number theory and field theory.
</div>

<div class="env-block definition">
<div class="env-label">Definition &mdash; Cyclotomic Polynomial</div>
The \\(n\\)-th <strong>cyclotomic polynomial</strong> is
\\[\\Phi_n(x) = \\prod_{\\substack{1 \\leq k \\leq n \\\\ \\gcd(k, n) = 1}} \\left(x - e^{2\\pi i k/n}\\right).\\]
It is the minimal polynomial over \\(\\mathbb{Q}\\) of any primitive \\(n\\)-th root of unity. We have \\(\\deg \\Phi_n = \\varphi(n)\\), where \\(\\varphi\\) is Euler's totient function.
</div>

<div class="env-block proposition">
<div class="env-label">Proposition &mdash; Factorization of \\(x^n - 1\\)</div>
\\[x^n - 1 = \\prod_{d \\mid n} \\Phi_d(x).\\]
For example, \\(x^6 - 1 = \\Phi_1(x)\\Phi_2(x)\\Phi_3(x)\\Phi_6(x) = (x-1)(x+1)(x^2+x+1)(x^2-x+1)\\).
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; \\(\\Phi_n(x)\\) is Irreducible over \\(\\mathbb{Q}\\)</div>
For every positive integer \\(n\\), the cyclotomic polynomial \\(\\Phi_n(x)\\) is irreducible over \\(\\mathbb{Q}\\).
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; Galois Group of Cyclotomic Extensions</div>
Let \\(\\zeta_n = e^{2\\pi i/n}\\). Then \\(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q}\\) is a Galois extension with
\\[\\operatorname{Gal}(\\mathbb{Q}(\\zeta_n)/\\mathbb{Q}) \\cong (\\mathbb{Z}/n\\mathbb{Z})^*.\\]
The isomorphism sends \\(\\sigma_a : \\zeta_n \\mapsto \\zeta_n^a\\) to \\(a \\bmod n\\), for each \\(a\\) with \\(\\gcd(a, n) = 1\\).
</div>

<div class="env-block proof">
<div class="env-label">Proof Sketch</div>
Since \\(\\Phi_n\\) is irreducible of degree \\(\\varphi(n)\\), we have \\([\\mathbb{Q}(\\zeta_n) : \\mathbb{Q}] = \\varphi(n)\\). Any \\(\\mathbb{Q}\\)-automorphism must send \\(\\zeta_n\\) to another primitive \\(n\\)-th root of unity \\(\\zeta_n^a\\) with \\(\\gcd(a, n) = 1\\). There are \\(\\varphi(n)\\) such choices, matching the degree, so each defines an automorphism. The map \\(\\sigma_a \\mapsto a\\) is a group isomorphism to \\((\\mathbb{Z}/n\\mathbb{Z})^*\\).
</div>

<div class="env-block theorem">
<div class="env-label">Theorem &mdash; Gauss, Constructibility of Regular Polygons</div>
A regular \\(n\\)-gon is constructible with compass and straightedge if and only if
\\[n = 2^a p_1 p_2 \\cdots p_k\\]
where \\(a \\geq 0\\) and \\(p_1, \\ldots, p_k\\) are distinct Fermat primes (primes of the form \\(2^{2^m} + 1\\)).
</div>

<div class="env-block proof">
<div class="env-label">Proof Idea</div>
The regular \\(n\\)-gon is constructible iff \\(\\cos(2\\pi/n)\\) is constructible, which requires \\([\\mathbb{Q}(\\zeta_n) : \\mathbb{Q}] = \\varphi(n)\\) to be a power of 2. The condition \\(\\varphi(n) = 2^s\\) holds iff \\(n\\) has the stated form, since \\(\\varphi\\) is multiplicative and \\(\\varphi(p^k) = p^{k-1}(p-1)\\), which is a power of 2 only if \\(p\\) is a Fermat prime and \\(k = 1\\).
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; Known Fermat Primes</div>
The known Fermat primes are \\(F_0 = 3\\), \\(F_1 = 5\\), \\(F_2 = 17\\), \\(F_3 = 257\\), \\(F_4 = 65537\\). It is unknown whether any others exist. So the constructible regular \\(n\\)-gons include \\(n = 3, 4, 5, 6, 8, 10, 12, 15, 16, 17, 20, \\ldots\\) but not \\(n = 7, 9, 11, 13, 14, 18, 19, \\ldots\\).
</div>

<div class="env-block example">
<div class="env-label">Example &mdash; The Regular 17-gon</div>
Gauss proved at age 19 that the regular 17-gon is constructible. Since \\(17 = 2^{2^2} + 1\\) is a Fermat prime, \\(\\varphi(17) = 16 = 2^4\\), so \\([\\mathbb{Q}(\\zeta_{17}) : \\mathbb{Q}] = 16\\), a power of 2. The Galois group \\((\\mathbb{Z}/17\\mathbb{Z})^* \\cong \\mathbb{Z}/16\\mathbb{Z}\\) has a chain of subgroups of index 2, corresponding to a tower of quadratic extensions.
</div>
`,
            visualizations: [
                {
                    id: 'roots-of-unity-viz',
                    title: 'Roots of Unity on the Unit Circle',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { scale: 40 });
                        var ctx = viz.ctx;
                        var n = 5;

                        controls.innerHTML = '<div style="display:flex;gap:6px;align-items:center;justify-content:center;">' +
                            '<label>n = </label>' +
                            '<input type="range" min="2" max="20" value="5" id="n-slider" style="width:120px">' +
                            '<span id="n-val">5</span></div>';

                        var slider = controls.querySelector('#n-slider');
                        var nVal = controls.querySelector('#n-val');
                        slider.addEventListener('input', function() {
                            n = parseInt(this.value);
                            nVal.textContent = n;
                        });

                        viz.onDraw(function() {
                            ctx.clearRect(-viz.w/2, -viz.h/2, viz.w, viz.h);
                            var R = Math.min(viz.w, viz.h) * 0.32;

                            // Draw unit circle
                            ctx.beginPath();
                            ctx.arc(0, 0, R, 0, 2 * Math.PI);
                            ctx.strokeStyle = '#ccc';
                            ctx.lineWidth = 1;
                            ctx.stroke();

                            // Draw roots
                            var primitiveCount = 0;
                            for (var k = 0; k < n; k++) {
                                var angle = 2 * Math.PI * k / n;
                                var x = R * Math.cos(angle);
                                var y = -R * Math.sin(angle);
                                var isPrimitive = gcd(k, n) === 1 || k === 0;

                                if (k > 0 && gcd(k, n) === 1) {
                                    primitiveCount++;
                                    ctx.fillStyle = viz.colors.red;
                                } else if (k === 0) {
                                    ctx.fillStyle = viz.colors.blue;
                                } else {
                                    ctx.fillStyle = viz.colors.teal;
                                }

                                ctx.beginPath();
                                ctx.arc(x, y, 5, 0, 2 * Math.PI);
                                ctx.fill();

                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '10px sans-serif';
                                ctx.textAlign = 'center';
                                var lx = (R + 18) * Math.cos(angle);
                                var ly = -(R + 18) * Math.sin(angle);
                                ctx.fillText('\\u03b6^' + k, lx, ly + 4);
                            }

                            // Connect primitive roots with polygon
                            ctx.beginPath();
                            for (var k2 = 0; k2 < n; k2++) {
                                var a2 = 2 * Math.PI * k2 / n;
                                var px = R * Math.cos(a2);
                                var py = -R * Math.sin(a2);
                                if (k2 === 0) ctx.moveTo(px, py);
                                else ctx.lineTo(px, py);
                            }
                            ctx.closePath();
                            ctx.strokeStyle = viz.colors.blue;
                            ctx.lineWidth = 1.5;
                            ctx.stroke();

                            // Info
                            ctx.fillStyle = viz.colors.text;
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('n = ' + n + ', \\u03c6(n) = ' + eulerPhi(n), -viz.w/2 + 10, -viz.h/2 + 20);
                            ctx.fillStyle = viz.colors.red;
                            ctx.fillText('Primitive roots (red): ' + eulerPhi(n), -viz.w/2 + 10, -viz.h/2 + 38);

                            var isConstr = isConstructible(n);
                            ctx.fillStyle = isConstr ? viz.colors.teal : viz.colors.red;
                            ctx.font = 'bold 13px sans-serif';
                            ctx.fillText('Regular ' + n + '-gon: ' + (isConstr ? 'CONSTRUCTIBLE' : 'NOT CONSTRUCTIBLE'), -viz.w/2 + 10, viz.h/2 - 15);
                        });

                        function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
                        function eulerPhi(m) {
                            var result = m;
                            for (var p = 2; p * p <= m; p++) {
                                if (m % p === 0) {
                                    while (m % p === 0) m = m / p;
                                    result -= result / p;
                                }
                            }
                            if (m > 1) result -= result / m;
                            return Math.round(result);
                        }
                        function isConstructible(m) {
                            var phi = eulerPhi(m);
                            while (phi > 1) {
                                if (phi % 2 !== 0) return false;
                                phi = phi / 2;
                            }
                            return true;
                        }
                    }
                },
                {
                    id: 'cyclotomic-galois-viz',
                    title: 'Cyclotomic Galois Group',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { scale: 40 });
                        var ctx = viz.ctx;

                        var examples = [
                            { n: 5, units: [1, 2, 3, 4], group: '(Z/5Z)* \\u2245 Z/4Z', gen: '2' },
                            { n: 7, units: [1, 2, 3, 4, 5, 6], group: '(Z/7Z)* \\u2245 Z/6Z', gen: '3' },
                            { n: 8, units: [1, 3, 5, 7], group: '(Z/8Z)* \\u2245 Z/2 \\u00d7 Z/2', gen: 'none (not cyclic)' },
                            { n: 12, units: [1, 5, 7, 11], group: '(Z/12Z)* \\u2245 Z/2 \\u00d7 Z/2', gen: 'none (not cyclic)' }
                        ];

                        var selected = 0;

                        controls.innerHTML = '<div style="display:flex;gap:6px;justify-content:center;">' +
                            examples.map(function(ex, i) {
                                return '<button class="viz-btn" data-idx="' + i + '">n = ' + ex.n + '</button>';
                            }).join('') + '</div>';

                        controls.querySelectorAll('.viz-btn').forEach(function(btn) {
                            btn.addEventListener('click', function() {
                                selected = parseInt(this.getAttribute('data-idx'));
                            });
                        });

                        viz.onDraw(function() {
                            ctx.clearRect(-viz.w/2, -viz.h/2, viz.w, viz.h);
                            var ex = examples[selected];

                            ctx.textAlign = 'center';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.fillStyle = viz.colors.blue;
                            ctx.fillText('Gal(Q(\\u03b6_' + ex.n + ')/Q) \\u2245 ' + ex.group, 0, -viz.h/2 + 30);

                            ctx.font = '13px sans-serif';
                            ctx.fillStyle = viz.colors.text;
                            ctx.fillText('Automorphisms: \\u03c3_a : \\u03b6 \\u2192 \\u03b6^a', 0, -viz.h/2 + 55);

                            // Draw each automorphism
                            var cols = Math.min(ex.units.length, 4);
                            var colW = viz.w / (cols + 1);
                            var startX = -viz.w/2 + colW;
                            var rowH = 22;
                            var startY = -viz.h/2 + 85;

                            for (var i = 0; i < ex.units.length; i++) {
                                var col = i % cols;
                                var row = Math.floor(i / cols);
                                var cx = startX + col * colW;
                                var cy = startY + row * (rowH * 3);

                                ctx.fillStyle = viz.colors.teal;
                                ctx.font = 'bold 13px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('\\u03c3_' + ex.units[i], cx, cy);

                                ctx.fillStyle = viz.colors.text;
                                ctx.font = '11px sans-serif';
                                ctx.fillText('\\u03b6 \\u2192 \\u03b6^' + ex.units[i], cx, cy + 18);
                            }

                            ctx.fillStyle = '#888';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Generator: ' + ex.gen, 0, viz.h/2 - 15);
                        });
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch17-ex13',
                    type: 'short-answer',
                    question: 'Compute the cyclotomic polynomial Phi_8(x).',
                    hint: 'Use x^8 - 1 = product of Phi_d(x) for d | 8. You already know Phi_1, Phi_2, Phi_4.',
                    solution: 'The divisors of 8 are 1, 2, 4, 8. We have Phi_1(x) = x - 1, Phi_2(x) = x + 1, Phi_4(x) = x^2 + 1. Then Phi_8(x) = (x^8 - 1) / ((x-1)(x+1)(x^2+1)) = (x^8 - 1)/(x^4 - 1) = x^4 + 1. So Phi_8(x) = x^4 + 1.'
                },
                {
                    id: 'ch17-ex14',
                    type: 'short-answer',
                    question: 'Determine which regular n-gons are constructible for n = 3, 7, 9, 15, 17, 20.',
                    hint: 'Check whether n = 2^a * product of distinct Fermat primes.',
                    solution: 'n=3: 3 is a Fermat prime, so YES. n=7: 7 = 2^3 - 1 is not a Fermat prime (Fermat primes have the form 2^{2^k}+1), and phi(7) = 6 is not a power of 2, so NO. n=9: 9 = 3^2 has a repeated Fermat prime, so NO (phi(9) = 6). n=15: 15 = 3 * 5, both distinct Fermat primes, so YES (phi(15) = 8 = 2^3). n=17: 17 is a Fermat prime, so YES (phi(17) = 16 = 2^4). n=20: 20 = 4 * 5 = 2^2 * 5, so YES (phi(20) = 8 = 2^3).'
                },
                {
                    id: 'ch17-ex15',
                    type: 'short-answer',
                    question: 'Show that Gal(Q(zeta_p)/Q) is cyclic of order p - 1 for any prime p, and identify a generator.',
                    hint: 'Use the isomorphism with (Z/pZ)* and the fact that the multiplicative group of a finite field is cyclic.',
                    solution: 'By the cyclotomic Galois group theorem, Gal(Q(zeta_p)/Q) = (Z/pZ)*. Since p is prime, Z/pZ is a field, and the multiplicative group of any finite field is cyclic. So (Z/pZ)* is cyclic of order p - 1. A generator is sigma_g where g is a primitive root modulo p. For example, for p = 7, g = 3 works: the powers 3^1=3, 3^2=2, 3^3=6, 3^4=4, 3^5=5, 3^6=1 give all elements of (Z/7Z)*.'
                },
                {
                    id: 'ch17-ex16',
                    type: 'short-answer',
                    question: 'Using Galois theory, explain why every cyclotomic extension Q(zeta_n)/Q is solvable by radicals.',
                    hint: 'What property does the Galois group (Z/nZ)* have that guarantees solvability?',
                    solution: 'The Galois group Gal(Q(zeta_n)/Q) = (Z/nZ)* is abelian. Every abelian group is solvable (the derived series terminates in one step since G\' = {e} for abelian G). By Galois\'s criterion, every element of Q(zeta_n) is expressible by radicals over Q. In fact, the roots of unity themselves are radicals (zeta_n = n-th root of 1), so this is also directly obvious.'
                }
            ]
        }
    ]
});
