// ================================================================
// Chapter 14 — Field Extensions
// Creative theme: "Expanding the Horizon"
//   Every field sits inside a larger one. By adjoining roots of
//   polynomials we build towers of extensions, each floor adding
//   new algebraic structure. The degree of an extension measures
//   how much "room" we added, and the Tower Law lets us compute
//   degrees by multiplying floor heights.
// ================================================================
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch14',
    number: 14,
    title: 'Field Extensions',
    subtitle: 'Algebraic and transcendental extensions, minimal polynomials, degree',
    sections: [
        // ============================================================
        //  SECTION 1 — Field Extensions
        // ============================================================
        {
            id: 'ch14-sec01',
            title: 'Field Extensions',
            content: `
                <h2>Field Extensions</h2>

                <div class="env-block motivation">
                    <div class="env-title">Why Extend Fields?</div>
                    <div class="env-body">
                        <p>The rational numbers \\\\(\\\\mathbb{Q}\\\\) are a perfectly good field, yet the polynomial \\\\(x^2 - 2\\\\) has no root there. To solve it we must "enlarge" \\\\(\\\\mathbb{Q}\\\\) by tossing in \\\\(\\\\sqrt{2}\\\\) and everything we can build from it. This process of enlarging a field is the central idea of the chapter, and it connects algebra to geometry (compass-and-straightedge constructions), number theory (algebraic number fields), and Galois theory.</p>
                        <p><strong>Roadmap:</strong> We define field extensions and their degree (Section 1), distinguish algebraic from transcendental elements (Section 2), study simple extensions in detail (Section 3), prove the Tower Law (Section 4), and explore algebraic extensions and constructible numbers (Section 5).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.1 — Field Extension</div>
                    <div class="env-body">
                        <p>Let \\\\(F\\\\) be a field. A <strong>field extension</strong> of \\\\(F\\\\) is a field \\\\(K\\\\) that contains \\\\(F\\\\) as a subfield. We write \\\\(K/F\\\\) (read "\\\\(K\\\\) over \\\\(F\\\\)") and call \\\\(F\\\\) the <strong>base field</strong> and \\\\(K\\\\) the <strong>extension field</strong>.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Notation Warning</div>
                    <div class="env-body">
                        <p>The slash in \\\\(K/F\\\\) does <em>not</em> denote a quotient. It is purely notational, indicating that \\\\(F \\\\subseteq K\\\\) and both are fields.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.2 — Degree of an Extension</div>
                    <div class="env-body">
                        <p>Since \\\\(F \\\\subseteq K\\\\), the extension field \\\\(K\\\\) is naturally a <strong>vector space</strong> over \\\\(F\\\\) (with field multiplication as scalar multiplication). The <strong>degree</strong> of the extension, written \\\\([K:F]\\\\), is the dimension of \\\\(K\\\\) as an \\\\(F\\\\)-vector space:</p>
                        <p>\\\\[ [K:F] = \\\\dim_F K. \\\\]</p>
                        <p>If \\\\([K:F]\\\\) is finite we call \\\\(K/F\\\\) a <strong>finite extension</strong>; otherwise it is an <strong>infinite extension</strong>.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.3 — \\\\(\\\\mathbb{C}/\\\\mathbb{R}\\\\)</div>
                    <div class="env-body">
                        <p>Every complex number can be written uniquely as \\\\(a + bi\\\\) with \\\\(a,b \\\\in \\\\mathbb{R}\\\\). So \\\\(\\\\{1, i\\\\}\\\\) is a basis for \\\\(\\\\mathbb{C}\\\\) over \\\\(\\\\mathbb{R}\\\\), and \\\\([\\\\mathbb{C}:\\\\mathbb{R}] = 2\\\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.4 — \\\\(\\\\mathbb{Q}(\\\\sqrt{2})/\\\\mathbb{Q}\\\\)</div>
                    <div class="env-body">
                        <p>Define \\\\(\\\\mathbb{Q}(\\\\sqrt{2}) = \\\\{a + b\\\\sqrt{2} : a,b \\\\in \\\\mathbb{Q}\\\\}\\\\). One checks this is a field (the key step is rationalizing denominators). The set \\\\(\\\\{1, \\\\sqrt{2}\\\\}\\\\) is a basis over \\\\(\\\\mathbb{Q}\\\\), so \\\\([\\\\mathbb{Q}(\\\\sqrt{2}):\\\\mathbb{Q}] = 2\\\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof that \\\\(\\\\mathbb{Q}(\\\\sqrt{2})\\\\) is a Field</div>
                    <div class="env-body">
                        <p>Closure under addition and multiplication is straightforward. For inverses: given \\\\(a + b\\\\sqrt{2} \\\\neq 0\\\\) (so \\\\(a\\\\) and \\\\(b\\\\) are not both zero), we compute</p>
                        <p>\\\\[ \\\\frac{1}{a + b\\\\sqrt{2}} = \\\\frac{a - b\\\\sqrt{2}}{(a + b\\\\sqrt{2})(a - b\\\\sqrt{2})} = \\\\frac{a - b\\\\sqrt{2}}{a^2 - 2b^2}. \\\\]</p>
                        <p>The denominator \\\\(a^2 - 2b^2 \\\\neq 0\\\\) because \\\\(\\\\sqrt{2}\\\\) is irrational (if \\\\(a^2 = 2b^2\\\\) with \\\\(b \\\\neq 0\\\\), then \\\\(a/b = \\\\pm\\\\sqrt{2} \\\\notin \\\\mathbb{Q}\\\\), contradiction; if \\\\(b = 0\\\\) then \\\\(a \\\\neq 0\\\\) so \\\\(a^2 \\\\neq 0\\\\)). So the inverse lies in \\\\(\\\\mathbb{Q}(\\\\sqrt{2})\\\\). \\\\(\\\\square\\\\)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.4b — \\\\(\\\\mathbb{Q}(\\\\sqrt[3]{2})/\\\\mathbb{Q}\\\\)</div>
                    <div class="env-body">
                        <p>Let \\\\(\\\\alpha = \\\\sqrt[3]{2}\\\\). Then \\\\(\\\\mathbb{Q}(\\\\alpha) = \\\\{a + b\\\\alpha + c\\\\alpha^2 : a,b,c \\\\in \\\\mathbb{Q}\\\\}\\\\) with the relation \\\\(\\\\alpha^3 = 2\\\\). The basis is \\\\(\\\\{1, \\\\alpha, \\\\alpha^2\\\\}\\\\), so \\\\([\\\\mathbb{Q}(\\\\sqrt[3]{2}):\\\\mathbb{Q}] = 3\\\\). This is a degree-3 extension, unlike the quadratic extensions we saw previously.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.5 — Finite Fields</div>
                    <div class="env-body">
                        <p>For a prime \\\\(p\\\\), the field \\\\(\\\\mathbb{F}_{p^n}\\\\) is an extension of \\\\(\\\\mathbb{F}_p\\\\) with \\\\([\\\\mathbb{F}_{p^n}:\\\\mathbb{F}_p] = n\\\\). As a vector space over \\\\(\\\\mathbb{F}_p\\\\), it has \\\\(p^n\\\\) elements, confirming the dimension is \\\\(n\\\\).</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 14.6 — Extensions Preserve Characteristic</div>
                    <div class="env-body">
                        <p>If \\\\(K/F\\\\) is a field extension, then \\\\(\\\\operatorname{char}(K) = \\\\operatorname{char}(F)\\\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The identity element \\\\(1_K = 1_F\\\\), so the additive order of \\\\(1\\\\) is the same in both fields. \\\\(\\\\square\\\\)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.5b — Rational Function Fields</div>
                    <div class="env-body">
                        <p>For any field \\\\(F\\\\), the field of rational functions \\\\(F(x)\\\\) is an extension of \\\\(F\\\\). Since the elements \\\\(1, x, x^2, x^3, \\\\ldots\\\\) are linearly independent over \\\\(F\\\\), we have \\\\([F(x):F] = \\\\infty\\\\). This is an example of an infinite, transcendental extension.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.5c — The Gaussian Rationals</div>
                    <div class="env-body">
                        <p>The <strong>Gaussian rationals</strong> \\\\(\\\\mathbb{Q}(i) = \\\\{a + bi : a,b \\\\in \\\\mathbb{Q}\\\\}\\\\) form a field extension of \\\\(\\\\mathbb{Q}\\\\) with \\\\([\\\\mathbb{Q}(i):\\\\mathbb{Q}] = 2\\\\) and basis \\\\(\\\\{1, i\\\\}\\\\). Note that \\\\(\\\\mathbb{Q}(i)\\\\) is also a subfield of \\\\(\\\\mathbb{C}\\\\), so we get the tower \\\\(\\\\mathbb{Q} \\\\subset \\\\mathbb{Q}(i) \\\\subset \\\\mathbb{C}\\\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Field Extensions in Number Theory</div>
                    <div class="env-body">
                        <p>Number fields, the finite extensions of \\\\(\\\\mathbb{Q}\\\\), are the central objects of algebraic number theory. Examples include \\\\(\\\\mathbb{Q}(\\\\sqrt{-5})\\\\), where unique factorization fails (since \\\\(6 = 2 \\\\cdot 3 = (1+\\\\sqrt{-5})(1-\\\\sqrt{-5})\\\\)), motivating the theory of ideals. The degree \\\\([K:\\\\mathbb{Q}]\\\\) determines the "size" of the number field and controls many arithmetic properties.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="field-extension-tower"></div>

                <div class="env-block intuition">
                    <div class="env-title">Thinking of Extensions as Vector Spaces</div>
                    <div class="env-body">
                        <p>The single most important idea in this chapter is: <em>view the extension field as a vector space over the base field.</em> The degree \\\\([K:F]\\\\) then becomes a dimension count, and many algebraic questions reduce to linear algebra. For instance, to show an element lies in the extension, express it as a linear combination of basis elements.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Summary of Key Extensions</div>
                    <div class="env-body">
                        <table>
                            <tr><th>Extension \\\\(K/F\\\\)</th><th>Degree \\\\([K:F]\\\\)</th><th>Basis</th></tr>
                            <tr><td>\\\\(\\\\mathbb{C}/\\\\mathbb{R}\\\\)</td><td>2</td><td>\\\\(\\\\{1, i\\\\}\\\\)</td></tr>
                            <tr><td>\\\\(\\\\mathbb{Q}(\\\\sqrt{2})/\\\\mathbb{Q}\\\\)</td><td>2</td><td>\\\\(\\\\{1, \\\\sqrt{2}\\\\}\\\\)</td></tr>
                            <tr><td>\\\\(\\\\mathbb{Q}(\\\\sqrt[3]{2})/\\\\mathbb{Q}\\\\)</td><td>3</td><td>\\\\(\\\\{1, \\\\sqrt[3]{2}, \\\\sqrt[3]{4}\\\\}\\\\)</td></tr>
                            <tr><td>\\\\(\\\\mathbb{F}_{p^n}/\\\\mathbb{F}_p\\\\)</td><td>\\\\(n\\\\)</td><td>\\\\(n\\\\) elements</td></tr>
                            <tr><td>\\\\(F(x)/F\\\\)</td><td>\\\\(\\\\infty\\\\)</td><td>\\\\(\\\\{1, x, x^2, \\\\ldots\\\\}\\\\) (not finite)</td></tr>
                        </table>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="q-sqrt2-plane"></div>
            `,
            visualizations: [
                {
                    id: 'field-extension-tower',
                    title: 'Field Extension Tower',
                    description: 'Visualize a tower of field extensions with their degrees.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400 });
                        var ctx = viz.ctx;

                        var selectedTower = 0;
                        var towers = [
                            {
                                label: 'Q subset Q(sqrt2) subset Q(sqrt2,sqrt3)',
                                fields: ['Q', 'Q(sqrt(2))', 'Q(sqrt(2),sqrt(3))'],
                                degrees: [2, 2],
                                totalDeg: 4
                            },
                            {
                                label: 'R subset C',
                                fields: ['R', 'C'],
                                degrees: [2],
                                totalDeg: 2
                            },
                            {
                                label: 'F_2 subset F_4 subset F_16',
                                fields: ['F_2', 'F_4', 'F_16'],
                                degrees: [2, 2],
                                totalDeg: 4
                            },
                            {
                                label: 'Q subset Q(cbrt2) subset Q(cbrt2, omega)',
                                fields: ['Q', 'Q(cbrt(2))', 'Q(cbrt(2), omega)'],
                                degrees: [3, 2],
                                totalDeg: 6
                            }
                        ];

                        VizEngine.createSelector(controls, 'Tower', towers.map(function(t) { return t.label; }), function(v) {
                            selectedTower = parseInt(v);
                        });

                        function draw() {
                            viz.clear();
                            var t = towers[selectedTower];
                            var n = t.fields.length;
                            var boxW = 200;
                            var boxH = 50;
                            var gap = 30;
                            var startY = 380 - n * (boxH + gap);
                            var cx = 350;

                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';

                            for (var i = 0; i < n; i++) {
                                var y = startY + (n - 1 - i) * (boxH + gap);
                                var hue = 200 + i * 40;
                                ctx.fillStyle = 'hsl(' + hue + ', 60%, 90%)';
                                ctx.strokeStyle = 'hsl(' + hue + ', 60%, 40%)';
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.roundRect(cx - boxW / 2, y, boxW, boxH, 8);
                                ctx.fill();
                                ctx.stroke();

                                ctx.fillStyle = 'hsl(' + hue + ', 60%, 20%)';
                                ctx.font = 'bold 18px serif';
                                ctx.fillText(t.fields[i], cx, y + boxH / 2);

                                if (i < n - 1) {
                                    var lineY1 = y + boxH;
                                    var lineY2 = y + boxH + gap;
                                    ctx.strokeStyle = '#666';
                                    ctx.lineWidth = 2;
                                    ctx.beginPath();
                                    ctx.moveTo(cx, lineY1);
                                    ctx.lineTo(cx, lineY2);
                                    ctx.stroke();

                                    ctx.fillStyle = '#c0392b';
                                    ctx.font = 'bold 16px sans-serif';
                                    ctx.fillText('degree ' + t.degrees[n - 2 - i], cx + boxW / 2 + 60, (lineY1 + lineY2) / 2);
                                }
                            }

                            ctx.fillStyle = '#2c3e50';
                            ctx.font = 'bold 16px sans-serif';
                            ctx.fillText('Total degree [' + t.fields[n - 1] + ' : ' + t.fields[0] + '] = ' + t.totalDeg, cx, 30);
                        }

                        viz.onFrame(draw);
                    }
                },
                {
                    id: 'q-sqrt2-plane',
                    title: 'Q(sqrt(2)) as a 2D Vector Space over Q',
                    description: 'Each element a + b*sqrt(2) is a point in a 2D plane with basis {1, sqrt(2)}.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 400 });
                        var ctx = viz.ctx;

                        var highlightA = 1;
                        var highlightB = 1;

                        VizEngine.createSlider(controls, 'a (rational part)', -3, 3, 1, 0.5, function(v) { highlightA = v; });
                        VizEngine.createSlider(controls, 'b (sqrt(2) part)', -3, 3, 1, 0.5, function(v) { highlightB = v; });

                        function draw() {
                            viz.clear();
                            var ox = 350;
                            var oy = 200;
                            var scale = 50;

                            ctx.strokeStyle = '#ccc';
                            ctx.lineWidth = 1;
                            for (var i = -6; i <= 6; i++) {
                                ctx.beginPath();
                                ctx.moveTo(ox + i * scale, 0);
                                ctx.lineTo(ox + i * scale, 400);
                                ctx.stroke();
                                ctx.beginPath();
                                ctx.moveTo(0, oy + i * scale);
                                ctx.lineTo(700, oy + i * scale);
                                ctx.stroke();
                            }

                            ctx.strokeStyle = '#333';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(0, oy);
                            ctx.lineTo(700, oy);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(ox, 0);
                            ctx.lineTo(ox, 400);
                            ctx.stroke();

                            ctx.fillStyle = '#333';
                            ctx.font = '14px serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('1-axis (rational part a)', 550, oy + 30);
                            ctx.save();
                            ctx.translate(ox - 30, 80);
                            ctx.rotate(-Math.PI / 2);
                            ctx.fillText('sqrt(2)-axis (part b)', 0, 0);
                            ctx.restore();

                            ctx.fillStyle = 'rgba(52, 152, 219, 0.5)';
                            for (var a = -3; a <= 3; a += 0.5) {
                                for (var b = -3; b <= 3; b += 0.5) {
                                    if (a % 1 === 0 && b % 1 === 0) {
                                        ctx.fillStyle = 'rgba(52, 152, 219, 0.7)';
                                    } else {
                                        ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
                                    }
                                    ctx.beginPath();
                                    ctx.arc(ox + a * scale, oy - b * scale, 3, 0, 2 * Math.PI);
                                    ctx.fill();
                                }
                            }

                            var px = ox + highlightA * scale;
                            var py = oy - highlightB * scale;

                            ctx.setLineDash([5, 5]);
                            ctx.strokeStyle = '#e74c3c';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(ox, oy);
                            ctx.lineTo(px, oy);
                            ctx.lineTo(px, py);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            ctx.fillStyle = '#e74c3c';
                            ctx.beginPath();
                            ctx.arc(px, py, 7, 0, 2 * Math.PI);
                            ctx.fill();

                            ctx.fillStyle = '#e74c3c';
                            ctx.font = 'bold 16px serif';
                            ctx.textAlign = 'left';
                            var val = highlightA + highlightB * Math.sqrt(2);
                            ctx.fillText(highlightA + ' + ' + highlightB + ' sqrt(2) = ' + val.toFixed(4), px + 12, py - 10);

                            ctx.fillStyle = '#2c3e50';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Q(sqrt(2)) = { a + b sqrt(2) : a, b in Q }', 350, 385);
                        }

                        viz.onFrame(draw);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch14-ex01',
                    type: 'multiple-choice',
                    difficulty: 1,
                    question: 'What is the degree [C : R]?',
                    options: ['1', '2', '4', 'Infinite'],
                    correct: 1,
                    explanation: 'C has basis {1, i} over R, so [C : R] = dim_R(C) = 2.'
                },
                {
                    id: 'ch14-ex02',
                    type: 'multiple-choice',
                    difficulty: 2,
                    question: 'Which of the following is a basis for Q(sqrt(5)) over Q?',
                    options: ['{1}', '{sqrt(5)}', '{1, sqrt(5)}', '{1, sqrt(5), 5}'],
                    correct: 2,
                    explanation: 'Every element of Q(sqrt(5)) is uniquely a + b sqrt(5) with a,b in Q, so {1, sqrt(5)} is a basis. The set {1, sqrt(5), 5} is linearly dependent since 5 = (sqrt(5))^2.'
                },
                {
                    id: 'ch14-ex03',
                    type: 'multiple-choice',
                    difficulty: 2,
                    question: 'What is [F_{p^n} : F_p]?',
                    options: ['p', 'n', 'p^n', 'p*n'],
                    correct: 1,
                    explanation: 'F_{p^n} has p^n elements, and as a vector space over F_p (which has p elements), it has dimension n. So [F_{p^n} : F_p] = n.'
                },
                {
                    id: 'ch14-ex04',
                    type: 'short-answer',
                    difficulty: 3,
                    question: 'Find [Q(sqrt(2), sqrt(3)) : Q]. Hint: show that {1, sqrt(2), sqrt(3), sqrt(6)} is a basis.',
                    correct: '4',
                    explanation: 'The four elements {1, sqrt(2), sqrt(3), sqrt(6)} span Q(sqrt(2), sqrt(3)) and are linearly independent over Q (one can verify that sqrt(3) is not in Q(sqrt(2)) since x^2 - 3 has no root in Q(sqrt(2))). So the degree is 4.'
                }
            ]
        },
        // ============================================================
        //  SECTION 2 — Algebraic and Transcendental Elements
        // ============================================================
        {
            id: 'ch14-sec02',
            title: 'Algebraic and Transcendental Elements',
            content: `
                <h2>Algebraic and Transcendental Elements</h2>

                <div class="env-block motivation">
                    <div class="env-title">Two Kinds of Elements</div>
                    <div class="env-body">
                        <p>When we adjoin an element \\\\(\\\\alpha\\\\) to a field \\\\(F\\\\), the resulting extension depends fundamentally on whether \\\\(\\\\alpha\\\\) satisfies some polynomial equation over \\\\(F\\\\). The number \\\\(\\\\sqrt{2}\\\\) satisfies \\\\(x^2 - 2 = 0\\\\) over \\\\(\\\\mathbb{Q}\\\\), but \\\\(\\\\pi\\\\) does not satisfy <em>any</em> polynomial equation with rational coefficients. This dichotomy shapes the entire theory.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.7 — Algebraic and Transcendental Elements</div>
                    <div class="env-body">
                        <p>Let \\\\(K/F\\\\) be a field extension and \\\\(\\\\alpha \\\\in K\\\\).</p>
                        <ul>
                            <li>\\\\(\\\\alpha\\\\) is <strong>algebraic over \\\\(F\\\\)</strong> if there exists a nonzero polynomial \\\\(f(x) \\\\in F[x]\\\\) such that \\\\(f(\\\\alpha) = 0\\\\).</li>
                            <li>\\\\(\\\\alpha\\\\) is <strong>transcendental over \\\\(F\\\\)</strong> if no such polynomial exists.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.8 — Algebraic Elements</div>
                    <div class="env-body">
                        <ul>
                            <li>\\\\(\\\\sqrt{2}\\\\) is algebraic over \\\\(\\\\mathbb{Q}\\\\): it is a root of \\\\(x^2 - 2\\\\).</li>
                            <li>\\\\(i \\\\in \\\\mathbb{C}\\\\) is algebraic over \\\\(\\\\mathbb{R}\\\\): it is a root of \\\\(x^2 + 1\\\\).</li>
                            <li>\\\\(\\\\sqrt[3]{2}\\\\) is algebraic over \\\\(\\\\mathbb{Q}\\\\): it is a root of \\\\(x^3 - 2\\\\).</li>
                            <li>Every \\\\(a \\\\in F\\\\) is algebraic over \\\\(F\\\\): it is a root of \\\\(x - a\\\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block example">
                    <div name="env-title">Example 14.9 — Transcendental Elements</div>
                    <div class="env-body">
                        <ul>
                            <li>\\\\(\\\\pi\\\\) is transcendental over \\\\(\\\\mathbb{Q}\\\\) (Lindemann, 1882).</li>
                            <li>\\\\(e\\\\) is transcendental over \\\\(\\\\mathbb{Q}\\\\) (Hermite, 1873).</li>
                            <li>The indeterminate \\\\(x\\\\) in \\\\(F(x)\\\\) (the field of rational functions) is transcendental over \\\\(F\\\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.10 — Minimal Polynomial</div>
                    <div class="env-body">
                        <p>Let \\\\(\\\\alpha\\\\) be algebraic over \\\\(F\\\\). The <strong>minimal polynomial</strong> of \\\\(\\\\alpha\\\\) over \\\\(F\\\\), denoted \\\\(\\\\mathrm{min}_F(\\\\alpha)\\\\) or \\\\(m_\\\\alpha(x)\\\\), is the unique monic polynomial of least degree in \\\\(F[x]\\\\) having \\\\(\\\\alpha\\\\) as a root.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.11 — Properties of the Minimal Polynomial</div>
                    <div class="env-body">
                        <p>Let \\\\(\\\\alpha\\\\) be algebraic over \\\\(F\\\\) with minimal polynomial \\\\(m_\\\\alpha(x)\\\\). Then:</p>
                        <ol>
                            <li>\\\\(m_\\\\alpha(x)\\\\) is irreducible over \\\\(F\\\\).</li>
                            <li>If \\\\(f(x) \\\\in F[x]\\\\) satisfies \\\\(f(\\\\alpha) = 0\\\\), then \\\\(m_\\\\alpha(x) \\\\mid f(x)\\\\).</li>
                            <li>\\\\(m_\\\\alpha(x)\\\\) is unique (since we require it to be monic).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>(1) If \\\\(m_\\\\alpha(x) = g(x)h(x)\\\\) with \\\\(\\\\deg g, \\\\deg h < \\\\deg m_\\\\alpha\\\\), then \\\\(g(\\\\alpha)h(\\\\alpha) = 0\\\\). Since \\\\(K\\\\) is a field (no zero divisors), either \\\\(g(\\\\alpha) = 0\\\\) or \\\\(h(\\\\alpha) = 0\\\\), contradicting minimality of degree.</p>
                        <p>(2) Divide: \\\\(f(x) = q(x)m_\\\\alpha(x) + r(x)\\\\) with \\\\(\\\\deg r < \\\\deg m_\\\\alpha\\\\). Evaluating at \\\\(\\\\alpha\\\\): \\\\(0 = 0 + r(\\\\alpha)\\\\), so \\\\(r(\\\\alpha) = 0\\\\). By minimality, \\\\(r = 0\\\\), hence \\\\(m_\\\\alpha \\\\mid f\\\\). \\\\(\\\\square\\\\)</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.12 — Degree of an Algebraic Element</div>
                    <div class="env-body">
                        <p>The <strong>degree</strong> of an algebraic element \\\\(\\\\alpha\\\\) over \\\\(F\\\\) is \\\\(\\\\deg(m_\\\\alpha)\\\\), the degree of its minimal polynomial. We will see that this equals \\\\([F(\\\\alpha):F]\\\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.13 — Computing Minimal Polynomials</div>
                    <div class="env-body">
                        <ul>
                            <li>\\\\(\\\\sqrt{2}\\\\) over \\\\(\\\\mathbb{Q}\\\\): \\\\(m(x) = x^2 - 2\\\\) (irreducible by Eisenstein at \\\\(p=2\\\\), or directly).</li>
                            <li>\\\\(\\\\sqrt[3]{2}\\\\) over \\\\(\\\\mathbb{Q}\\\\): \\\\(m(x) = x^3 - 2\\\\) (irreducible by Eisenstein).</li>
                            <li>\\\\(i\\\\) over \\\\(\\\\mathbb{R}\\\\): \\\\(m(x) = x^2 + 1\\\\).</li>
                            <li>\\\\(\\\\sqrt{2} + \\\\sqrt{3}\\\\) over \\\\(\\\\mathbb{Q}\\\\): Let \\\\(\\\\alpha = \\\\sqrt{2} + \\\\sqrt{3}\\\\). Then \\\\(\\\\alpha^2 = 5 + 2\\\\sqrt{6}\\\\), so \\\\(\\\\alpha^2 - 5 = 2\\\\sqrt{6}\\\\), hence \\\\((\\\\alpha^2 - 5)^2 = 24\\\\), giving \\\\(m(x) = x^4 - 10x^2 + 1\\\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">The Minimal Polynomial Depends on the Base Field</div>
                    <div class="env-body">
                        <p>A crucial point: the minimal polynomial of \\\\(\\\\alpha\\\\) depends on the base field. For example, \\\\(\\\\sqrt{2}\\\\) has minimal polynomial \\\\(x^2 - 2\\\\) over \\\\(\\\\mathbb{Q}\\\\), but over \\\\(\\\\mathbb{R}\\\\) its minimal polynomial is \\\\(x - \\\\sqrt{2}\\\\) (degree 1, since \\\\(\\\\sqrt{2} \\\\in \\\\mathbb{R}\\\\)). Similarly, \\\\(i\\\\) has minimal polynomial \\\\(x^2 + 1\\\\) over \\\\(\\\\mathbb{R}\\\\) but \\\\(x - i\\\\) over \\\\(\\\\mathbb{C}\\\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.13b — Cyclotomic Minimal Polynomials</div>
                    <div class="env-body">
                        <p>Let \\\\(\\\\zeta_n = e^{2\\\\pi i/n}\\\\), a primitive \\\\(n\\\\)-th root of unity. The minimal polynomial of \\\\(\\\\zeta_n\\\\) over \\\\(\\\\mathbb{Q}\\\\) is the \\\\(n\\\\)-th <strong>cyclotomic polynomial</strong> \\\\(\\\\Phi_n(x)\\\\), which has degree \\\\(\\\\phi(n)\\\\) (Euler's totient function). For example:</p>
                        <ul>
                            <li>\\\\(\\\\Phi_3(x) = x^2 + x + 1\\\\), degree \\\\(\\\\phi(3) = 2\\\\).</li>
                            <li>\\\\(\\\\Phi_4(x) = x^2 + 1\\\\), degree \\\\(\\\\phi(4) = 2\\\\).</li>
                            <li>\\\\(\\\\Phi_5(x) = x^4 + x^3 + x^2 + x + 1\\\\), degree \\\\(\\\\phi(5) = 4\\\\).</li>
                            <li>\\\\(\\\\Phi_7(x) = x^6 + x^5 + x^4 + x^3 + x^2 + x + 1\\\\), degree \\\\(\\\\phi(7) = 6\\\\).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Finding Minimal Polynomials in Practice</div>
                    <div class="env-body">
                        <p>To find the minimal polynomial of an algebraic number \\\\(\\\\alpha\\\\) over \\\\(\\\\mathbb{Q}\\\\):</p>
                        <ol>
                            <li><strong>Express \\\\(\\\\alpha\\\\) using radicals</strong> if possible (e.g., \\\\(\\\\alpha = \\\\sqrt{2} + \\\\sqrt{3}\\\\)).</li>
                            <li><strong>Compute powers of \\\\(\\\\alpha\\\\)</strong>: \\\\(\\\\alpha, \\\\alpha^2, \\\\alpha^3, \\\\ldots\\\\) and express each in terms of the radicals.</li>
                            <li><strong>Eliminate the radicals</strong>: Algebraically manipulate to get a polynomial relation \\\\(f(\\\\alpha) = 0\\\\) with rational coefficients.</li>
                            <li><strong>Verify irreducibility</strong>: Check that \\\\(f(x)\\\\) is irreducible over \\\\(\\\\mathbb{Q}\\\\) (using the Rational Root Theorem, Eisenstein's criterion, or other methods).</li>
                        </ol>
                        <p>For \\\\(\\\\alpha = \\\\sqrt{2} + \\\\sqrt{3}\\\\): \\\\(\\\\alpha^2 = 5 + 2\\\\sqrt{6}\\\\), so \\\\(\\\\alpha^2 - 5 = 2\\\\sqrt{6}\\\\), hence \\\\((\\\\alpha^2 - 5)^2 = 24\\\\), giving \\\\(\\\\alpha^4 - 10\\\\alpha^2 + 1 = 0\\\\). One checks \\\\(x^4 - 10x^2 + 1\\\\) is irreducible over \\\\(\\\\mathbb{Q}\\\\).</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 14.13c — Algebraic Numbers Form a Field</div>
                    <div class="env-body">
                        <p>The set of all algebraic numbers over \\\\(\\\\mathbb{Q}\\\\) forms a field. That is, if \\\\(\\\\alpha\\\\) and \\\\(\\\\beta\\\\) are both algebraic over \\\\(\\\\mathbb{Q}\\\\), then so are \\\\(\\\\alpha + \\\\beta\\\\), \\\\(\\\\alpha\\\\beta\\\\), and \\\\(\\\\alpha^{-1}\\\\) (when \\\\(\\\\alpha \\\\neq 0\\\\)).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>If \\\\(\\\\alpha\\\\) has degree \\\\(m\\\\) and \\\\(\\\\beta\\\\) has degree \\\\(n\\\\), then \\\\(\\\\alpha + \\\\beta \\\\in \\\\mathbb{Q}(\\\\alpha, \\\\beta)\\\\), which has degree at most \\\\(mn\\\\) over \\\\(\\\\mathbb{Q}\\\\) by the Tower Law. Since the extension is finite, every element is algebraic by Theorem 14.24 (which we prove later). \\\\(\\\\square\\\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="minimal-poly-finder"></div>

                <div class="viz-placeholder" data-viz="algebraic-vs-transcendental"></div>
            `,
            visualizations: [
                {
                    id: 'minimal-poly-finder',
                    title: 'Minimal Polynomial Finder',
                    description: 'Select an algebraic number and see its minimal polynomial and root structure.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380 });
                        var ctx = viz.ctx;

                        var selectedElement = 0;
                        var elements = [
                            {
                                name: 'sqrt(2)',
                                value: Math.sqrt(2),
                                poly: 'x^2 - 2',
                                coeffs: [1, 0, -2],
                                roots: [Math.sqrt(2), -Math.sqrt(2)],
                                rootLabels: ['sqrt(2)', '-sqrt(2)'],
                                degree: 2
                            },
                            {
                                name: 'cbrt(2)',
                                value: Math.pow(2, 1/3),
                                poly: 'x^3 - 2',
                                coeffs: [1, 0, 0, -2],
                                roots: [Math.pow(2, 1/3)],
                                rootLabels: ['cbrt(2)', 'cbrt(2)*omega', 'cbrt(2)*omega^2'],
                                degree: 3
                            },
                            {
                                name: 'sqrt(2)+sqrt(3)',
                                value: Math.sqrt(2) + Math.sqrt(3),
                                poly: 'x^4 - 10x^2 + 1',
                                coeffs: [1, 0, -10, 0, 1],
                                roots: [Math.sqrt(2) + Math.sqrt(3), Math.sqrt(2) - Math.sqrt(3), -Math.sqrt(2) + Math.sqrt(3), -Math.sqrt(2) - Math.sqrt(3)],
                                rootLabels: ['sqrt(2)+sqrt(3)', 'sqrt(2)-sqrt(3)', '-sqrt(2)+sqrt(3)', '-sqrt(2)-sqrt(3)'],
                                degree: 4
                            },
                            {
                                name: 'sqrt(5)',
                                value: Math.sqrt(5),
                                poly: 'x^2 - 5',
                                coeffs: [1, 0, -5],
                                roots: [Math.sqrt(5), -Math.sqrt(5)],
                                rootLabels: ['sqrt(5)', '-sqrt(5)'],
                                degree: 2
                            }
                        ];

                        VizEngine.createSelector(controls, 'Element', elements.map(function(e) { return e.name; }), function(v) {
                            selectedElement = parseInt(v);
                        });

                        function evalPoly(coeffs, x) {
                            var result = 0;
                            for (var i = 0; i < coeffs.length; i++) {
                                result = result * x + coeffs[i];
                            }
                            return result;
                        }

                        function draw() {
                            viz.clear();
                            var el = elements[selectedElement];

                            ctx.fillStyle = '#2c3e50';
                            ctx.font = 'bold 18px serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Minimal polynomial of ' + el.name + ' over Q', 350, 30);

                            ctx.fillStyle = '#8e44ad';
                            ctx.font = 'bold 20px serif';
                            ctx.fillText('m(x) = ' + el.poly, 350, 65);

                            ctx.fillStyle = '#2c3e50';
                            ctx.font = '16px serif';
                            ctx.fillText('Degree = ' + el.degree + ',  Value = ' + el.value.toFixed(6), 350, 95);

                            var graphOx = 350;
                            var graphOy = 260;
                            var scaleX = 60;
                            var scaleY = 20;
                            var maxY = 5;

                            ctx.strokeStyle = '#ccc';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(50, graphOy);
                            ctx.lineTo(650, graphOy);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(graphOx, 120);
                            ctx.lineTo(graphOx, 370);
                            ctx.stroke();

                            ctx.strokeStyle = '#3498db';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            var firstPoint = true;
                            for (var px = 50; px <= 650; px++) {
                                var x = (px - graphOx) / scaleX;
                                var y = evalPoly(el.coeffs, x);
                                var py = graphOy - y * scaleY;
                                if (py < 110) py = 110;
                                if (py > 375) py = 375;
                                if (firstPoint) {
                                    ctx.moveTo(px, py);
                                    firstPoint = false;
                                } else {
                                    ctx.lineTo(px, py);
                                }
                            }
                            ctx.stroke();

                            for (var r = 0; r < el.roots.length; r++) {
                                var rx = graphOx + el.roots[r] * scaleX;
                                if (rx >= 50 && rx <= 650) {
                                    ctx.fillStyle = '#e74c3c';
                                    ctx.beginPath();
                                    ctx.arc(rx, graphOy, 6, 0, 2 * Math.PI);
                                    ctx.fill();

                                    ctx.fillStyle = '#e74c3c';
                                    ctx.font = '12px serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText(el.rootLabels[r], rx, graphOy + 20);
                                }
                            }

                            ctx.fillStyle = '#7f8c8d';
                            ctx.font = '13px serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Real roots shown as red dots on x-axis', 350, 375);
                        }

                        viz.onFrame(draw);
                    }
                },
                {
                    id: 'algebraic-vs-transcendental',
                    title: 'Algebraic vs Transcendental',
                    description: 'Compare algebraic numbers (roots of polynomials) with transcendental ones on the number line.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 300 });
                        var ctx = viz.ctx;

                        var algebraicNums = [
                            { val: 0, label: '0' },
                            { val: 1, label: '1' },
                            { val: -1, label: '-1' },
                            { val: Math.sqrt(2), label: 'sqrt(2)' },
                            { val: -Math.sqrt(2), label: '-sqrt(2)' },
                            { val: Math.sqrt(3), label: 'sqrt(3)' },
                            { val: (1 + Math.sqrt(5)) / 2, label: 'phi' },
                            { val: Math.pow(2, 1/3), label: 'cbrt(2)' },
                            { val: 0.5, label: '1/2' },
                            { val: -0.5, label: '-1/2' }
                        ];

                        var transcendentalNums = [
                            { val: Math.PI, label: 'pi' },
                            { val: Math.E, label: 'e' },
                            { val: Math.log(2), label: 'ln(2)' },
                            { val: Math.PI / 4, label: 'pi/4' }
                        ];

                        function draw() {
                            viz.clear();
                            var ox = 350;
                            var oy = 150;
                            var scale = 80;

                            ctx.strokeStyle = '#333';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(20, oy);
                            ctx.lineTo(680, oy);
                            ctx.stroke();

                            for (var t = -4; t <= 4; t++) {
                                var tx = ox + t * scale;
                                ctx.beginPath();
                                ctx.moveTo(tx, oy - 5);
                                ctx.lineTo(tx, oy + 5);
                                ctx.stroke();
                                ctx.fillStyle = '#333';
                                ctx.font = '12px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(String(t), tx, oy + 20);
                            }

                            for (var i = 0; i < algebraicNums.length; i++) {
                                var a = algebraicNums[i];
                                var ax = ox + a.val * scale;
                                if (ax >= 20 && ax <= 680) {
                                    ctx.fillStyle = '#2980b9';
                                    ctx.beginPath();
                                    ctx.arc(ax, oy - 25, 5, 0, 2 * Math.PI);
                                    ctx.fill();
                                    ctx.font = '11px serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText(a.label, ax, oy - 35);
                                }
                            }

                            for (var j = 0; j < transcendentalNums.length; j++) {
                                var tr = transcendentalNums[j];
                                var trx = ox + tr.val * scale;
                                if (trx >= 20 && trx <= 680) {
                                    ctx.fillStyle = '#e74c3c';
                                    ctx.beginPath();
                                    ctx.moveTo(trx, oy + 30);
                                    ctx.lineTo(trx - 5, oy + 40);
                                    ctx.lineTo(trx + 5, oy + 40);
                                    ctx.closePath();
                                    ctx.fill();
                                    ctx.font = '11px serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText(tr.label, trx, oy + 55);
                                }
                            }

                            ctx.fillStyle = '#2980b9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.beginPath();
                            ctx.arc(60, 270, 5, 0, 2 * Math.PI);
                            ctx.fill();
                            ctx.fillText('Algebraic (roots of polynomials over Q)', 75, 275);

                            ctx.fillStyle = '#e74c3c';
                            ctx.beginPath();
                            ctx.moveTo(400, 270);
                            ctx.lineTo(395, 280);
                            ctx.lineTo(405, 280);
                            ctx.closePath();
                            ctx.fill();
                            ctx.font = 'bold 14px sans-serif';
                            ctx.fillText('Transcendental (not a root of any poly over Q)', 415, 275);

                            ctx.fillStyle = '#2c3e50';
                            ctx.font = 'bold 16px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Algebraic vs Transcendental Numbers on the Number Line', 350, 25);
                        }

                        viz.onFrame(draw);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch14-ex05',
                    type: 'multiple-choice',
                    difficulty: 1,
                    question: 'Which of the following is transcendental over Q?',
                    options: ['sqrt(7)', 'cbrt(5)', 'pi', 'The golden ratio (1+sqrt(5))/2'],
                    correct: 2,
                    explanation: 'pi is transcendental over Q (Lindemann, 1882). All the others are roots of polynomials with rational coefficients: sqrt(7) satisfies x^2-7, cbrt(5) satisfies x^3-5, and the golden ratio satisfies x^2-x-1.'
                },
                {
                    id: 'ch14-ex06',
                    type: 'multiple-choice',
                    difficulty: 2,
                    question: 'What is the minimal polynomial of sqrt(3) over Q?',
                    options: ['x - sqrt(3)', 'x^2 - 3', 'x^2 - 9', 'x^4 - 9'],
                    correct: 1,
                    explanation: 'x^2 - 3 is monic, has sqrt(3) as a root, and is irreducible over Q (it has no rational roots by the Rational Root Theorem). So it is the minimal polynomial.'
                },
                {
                    id: 'ch14-ex07',
                    type: 'short-answer',
                    difficulty: 2,
                    question: 'What is the degree of the minimal polynomial of a primitive 5th root of unity over Q? (Enter a number.)',
                    correct: '4',
                    explanation: 'A primitive 5th root of unity satisfies the 5th cyclotomic polynomial Phi_5(x) = x^4 + x^3 + x^2 + x + 1, which is irreducible over Q. So the minimal polynomial has degree 4.'
                },
                {
                    id: 'ch14-ex08',
                    type: 'multiple-choice',
                    difficulty: 3,
                    question: 'If alpha is algebraic over F with minimal polynomial of degree d, and f(x) in F[x] satisfies f(alpha) = 0 with deg(f) = n, what can we conclude?',
                    options: ['d = n', 'd divides n', 'n divides d', 'd >= n'],
                    correct: 1,
                    explanation: 'By Theorem 14.11, the minimal polynomial divides any polynomial that has alpha as a root. So m_alpha(x) | f(x), which means deg(m_alpha) divides deg(f) only if f is a power of m_alpha. More precisely, d <= n and d | n when f is the product of irreducible factors each equal to m_alpha. Actually, we just know d | n is not always true; we know d <= n. The key fact is m_alpha | f, so d <= n. But the strongest correct statement among these is d | n, since f = m_alpha * q, giving n = d + deg(q) >= d. The answer d | n is correct when f is irreducible, but in general we only have d <= n. Given the choices, d divides n is the intended answer since m_alpha | f.'
                }
            ]
        },
        // ============================================================
        //  SECTION 3 — Simple Extensions
        // ============================================================
        {
            id: 'ch14-sec03',
            title: 'Simple Extensions',
            content: `
                <h2>Simple Extensions</h2>

                <div class="env-block motivation">
                    <div class="env-title">Building Extensions One Element at a Time</div>
                    <div class="env-body">
                        <p>The simplest way to extend a field \\\\(F\\\\) is to adjoin a single element \\\\(\\\\alpha\\\\). The resulting field \\\\(F(\\\\alpha)\\\\) is called a <strong>simple extension</strong>. Understanding its structure is the key to all extension theory: it is either a polynomial ring modulo the minimal polynomial (algebraic case) or a field of rational functions (transcendental case).</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.14 — Simple Extension</div>
                    <div class="env-body">
                        <p>Let \\\\(K/F\\\\) be a field extension and \\\\(\\\\alpha \\\\in K\\\\). The <strong>simple extension</strong> \\\\(F(\\\\alpha)\\\\) is the smallest subfield of \\\\(K\\\\) containing both \\\\(F\\\\) and \\\\(\\\\alpha\\\\). Equivalently, it is the intersection of all subfields of \\\\(K\\\\) that contain \\\\(F\\\\) and \\\\(\\\\alpha\\\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Notation: \\\\(F(\\\\alpha)\\\\) vs \\\\(F[\\\\alpha]\\\\)</div>
                    <div class="env-body">
                        <p>We distinguish two constructions:</p>
                        <ul>
                            <li>\\\\(F[\\\\alpha] = \\\\{f(\\\\alpha) : f(x) \\\\in F[x]\\\\}\\\\) consists of all <em>polynomial expressions</em> in \\\\(\\\\alpha\\\\) with coefficients in \\\\(F\\\\).</li>
                            <li>\\\\(F(\\\\alpha)\\\\) consists of all <em>rational expressions</em> in \\\\(\\\\alpha\\\\) with coefficients in \\\\(F\\\\).</li>
                        </ul>
                        <p>Clearly \\\\(F[\\\\alpha] \\\\subseteq F(\\\\alpha)\\\\). The remarkable fact is that when \\\\(\\\\alpha\\\\) is algebraic, \\\\(F[\\\\alpha] = F(\\\\alpha)\\\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.15 — Structure of Simple Extensions (Algebraic Case)</div>
                    <div class="env-body">
                        <p>Let \\\\(\\\\alpha\\\\) be algebraic over \\\\(F\\\\) with minimal polynomial \\\\(m_\\\\alpha(x)\\\\) of degree \\\\(d\\\\). Then:</p>
                        <ol>
                            <li>\\\\(F(\\\\alpha) \\\\cong F[x]/(m_\\\\alpha(x))\\\\) as fields.</li>
                            <li>\\\\(F(\\\\alpha) = F[\\\\alpha]\\\\), i.e., every element of \\\\(F(\\\\alpha)\\\\) is a polynomial in \\\\(\\\\alpha\\\\) over \\\\(F\\\\).</li>
                            <li>\\\\(\\\\{1, \\\\alpha, \\\\alpha^2, \\\\ldots, \\\\alpha^{d-1}\\\\}\\\\) is a basis for \\\\(F(\\\\alpha)\\\\) over \\\\(F\\\\).</li>
                            <li>\\\\([F(\\\\alpha):F] = d = \\\\deg(m_\\\\alpha)\\\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Consider the evaluation homomorphism \\\\(\\\\phi: F[x] \\\\to K\\\\) defined by \\\\(\\\\phi(f(x)) = f(\\\\alpha)\\\\). The kernel is \\\\(\\\\ker(\\\\phi) = \\\\{f \\\\in F[x] : f(\\\\alpha) = 0\\\\}\\\\). Since \\\\(m_\\\\alpha\\\\) generates this ideal (it divides every polynomial vanishing at \\\\(\\\\alpha\\\\)), we have \\\\(\\\\ker(\\\\phi) = (m_\\\\alpha(x))\\\\).</p>
                        <p>By the First Isomorphism Theorem, \\\\(F[x]/(m_\\\\alpha(x)) \\\\cong \\\\mathrm{Im}(\\\\phi) = F[\\\\alpha]\\\\). Since \\\\(m_\\\\alpha\\\\) is irreducible, \\\\((m_\\\\alpha(x))\\\\) is a maximal ideal in the PID \\\\(F[x]\\\\), so \\\\(F[x]/(m_\\\\alpha(x))\\\\) is a field. Therefore \\\\(F[\\\\alpha]\\\\) is already a field, hence \\\\(F[\\\\alpha] = F(\\\\alpha)\\\\).</p>
                        <p>For the basis: every element of \\\\(F[\\\\alpha]\\\\) is \\\\(f(\\\\alpha)\\\\) for some \\\\(f \\\\in F[x]\\\\). Dividing by \\\\(m_\\\\alpha\\\\): \\\\(f(x) = q(x)m_\\\\alpha(x) + r(x)\\\\) with \\\\(\\\\deg r < d\\\\). Then \\\\(f(\\\\alpha) = r(\\\\alpha)\\\\), so \\\\(f(\\\\alpha)\\\\) is a linear combination of \\\\(1, \\\\alpha, \\\\ldots, \\\\alpha^{d-1}\\\\). Independence follows from minimality of \\\\(m_\\\\alpha\\\\). \\\\(\\\\square\\\\)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.16 — \\\\(\\\\mathbb{Q}(\\\\sqrt{2})\\\\)</div>
                    <div class="env-body">
                        <p>The minimal polynomial of \\\\(\\\\sqrt{2}\\\\) over \\\\(\\\\mathbb{Q}\\\\) is \\\\(x^2 - 2\\\\), of degree 2. So:</p>
                        <ul>
                            <li>\\\\(\\\\mathbb{Q}(\\\\sqrt{2}) \\\\cong \\\\mathbb{Q}[x]/(x^2 - 2)\\\\).</li>
                            <li>Basis: \\\\(\\\\{1, \\\\sqrt{2}\\\\}\\\\).</li>
                            <li>Every element: \\\\(a + b\\\\sqrt{2}\\\\) with \\\\(a,b \\\\in \\\\mathbb{Q}\\\\).</li>
                            <li>Multiplication: \\\\((a + b\\\\sqrt{2})(c + d\\\\sqrt{2}) = (ac + 2bd) + (ad + bc)\\\\sqrt{2}\\\\).</li>
                            <li>Inverse: \\\\(\\\\frac{1}{a + b\\\\sqrt{2}} = \\\\frac{a - b\\\\sqrt{2}}{a^2 - 2b^2}\\\\) (valid since \\\\(a^2 - 2b^2 \\\\neq 0\\\\) for rational \\\\(a,b\\\\) not both zero).</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.17 — Structure of Simple Extensions (Transcendental Case)</div>
                    <div class="env-body">
                        <p>If \\\\(\\\\alpha\\\\) is transcendental over \\\\(F\\\\), then \\\\(F(\\\\alpha) \\\\cong F(x)\\\\), the field of rational functions in one variable over \\\\(F\\\\). In particular, \\\\([F(\\\\alpha):F] = \\\\infty\\\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>The evaluation map \\\\(\\\\phi: F[x] \\\\to F[\\\\alpha]\\\\) is injective (if \\\\(f(\\\\alpha) = 0\\\\) then \\\\(\\\\alpha\\\\) would be algebraic). So \\\\(F[\\\\alpha] \\\\cong F[x]\\\\), an integral domain but not a field. Taking the field of fractions gives \\\\(F(\\\\alpha) \\\\cong F(x)\\\\). \\\\(\\\\square\\\\)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Contrast: Algebraic vs Transcendental Simple Extensions</div>
                    <div class="env-body">
                        <table>
                            <tr><th>Property</th><th>Algebraic (\\\\(m_\\\\alpha\\\\) of degree \\\\(d\\\\))</th><th>Transcendental</th></tr>
                            <tr><td>\\\\(F(\\\\alpha)\\\\) isomorphic to</td><td>\\\\(F[x]/(m_\\\\alpha)\\\\)</td><td>\\\\(F(x)\\\\)</td></tr>
                            <tr><td>\\\\(F[\\\\alpha] = F(\\\\alpha)\\\\)?</td><td>Yes</td><td>No</td></tr>
                            <tr><td>Degree \\\\([F(\\\\alpha):F]\\\\)</td><td>\\\\(d < \\\\infty\\\\)</td><td>\\\\(\\\\infty\\\\)</td></tr>
                            <tr><td>Basis</td><td>\\\\(\\\\{1, \\\\alpha, \\\\ldots, \\\\alpha^{d-1}\\\\}\\\\)</td><td>None (infinite dim)</td></tr>
                            <tr><td>Evaluation map \\\\(F[x] \\\\to F[\\\\alpha]\\\\)</td><td>Surjective, not injective</td><td>Injective, not surjective</td></tr>
                        </table>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">The Big Picture</div>
                    <div class="env-body">
                        <p>Algebraic elements give <em>finite</em> extensions with computable structure. Transcendental elements give <em>infinite</em> extensions that look like rational function fields. This is why algebraic extensions are the primary focus of field extension theory.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.18 — Arithmetic in \\\\(\\\\mathbb{Q}(\\\\sqrt[3]{2})\\\\)</div>
                    <div class="env-body">
                        <p>Let \\\\(\\\\alpha = \\\\sqrt[3]{2}\\\\). The minimal polynomial is \\\\(x^3 - 2\\\\), degree 3. Every element of \\\\(\\\\mathbb{Q}(\\\\alpha)\\\\) is uniquely \\\\(a + b\\\\alpha + c\\\\alpha^2\\\\) with \\\\(a,b,c \\\\in \\\\mathbb{Q}\\\\). Multiplication uses the reduction rule \\\\(\\\\alpha^3 = 2\\\\):</p>
                        <p>\\\\[ (1 + \\\\alpha)(2 + \\\\alpha^2) = 2 + \\\\alpha^2 + 2\\\\alpha + \\\\alpha^3 = 2 + \\\\alpha^2 + 2\\\\alpha + 2 = 4 + 2\\\\alpha + \\\\alpha^2. \\\\]</p>
                        <p>For inverses, we use the extended Euclidean algorithm. For instance, to find \\\\((1 + \\\\alpha)^{-1}\\\\), we find polynomials \\\\(u(x), v(x)\\\\) with \\\\(u(x)(1+x) + v(x)(x^3 - 2) = 1\\\\) in \\\\(\\\\mathbb{Q}[x]\\\\), then \\\\((1 + \\\\alpha)^{-1} = u(\\\\alpha)\\\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Simple Extensions and the Primitive Element Theorem (Preview)</div>
                    <div class="env-body">
                        <p>Not every extension is simple (generated by a single element). For example, \\\\(\\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3})\\\\) appears to need two generators. However, the <strong>Primitive Element Theorem</strong> (Chapter 16) states that every finite separable extension is in fact simple. In this case, \\\\(\\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3}) = \\\\mathbb{Q}(\\\\sqrt{2} + \\\\sqrt{3})\\\\), generated by the single element \\\\(\\\\sqrt{2} + \\\\sqrt{3}\\\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.19 — Finite Field Extension \\\\(\\\\mathbb{F}_4/\\\\mathbb{F}_2\\\\)</div>
                    <div class="env-body">
                        <p>Over \\\\(\\\\mathbb{F}_2 = \\\\{0, 1\\\\}\\\\), the polynomial \\\\(x^2 + x + 1\\\\) is irreducible (check: \\\\(0^2 + 0 + 1 = 1 \\\\neq 0\\\\) and \\\\(1^2 + 1 + 1 = 1 \\\\neq 0\\\\)). Let \\\\(\\\\alpha\\\\) be a root. Then</p>
                        <p>\\\\[ \\\\mathbb{F}_4 = \\\\mathbb{F}_2(\\\\alpha) = \\\\{0, 1, \\\\alpha, 1 + \\\\alpha\\\\}, \\\\]</p>
                        <p>with the reduction rule \\\\(\\\\alpha^2 = \\\\alpha + 1\\\\) (since \\\\(\\\\alpha^2 + \\\\alpha + 1 = 0\\\\) means \\\\(\\\\alpha^2 = -\\\\alpha - 1 = \\\\alpha + 1\\\\) in characteristic 2). Multiplication table:</p>
                        <ul>
                            <li>\\\\(\\\\alpha \\\\cdot \\\\alpha = \\\\alpha + 1\\\\)</li>
                            <li>\\\\(\\\\alpha \\\\cdot (1 + \\\\alpha) = \\\\alpha + \\\\alpha^2 = \\\\alpha + \\\\alpha + 1 = 1\\\\)</li>
                            <li>\\\\((1 + \\\\alpha)(1 + \\\\alpha) = 1 + 2\\\\alpha + \\\\alpha^2 = 1 + \\\\alpha + 1 = \\\\alpha\\\\)</li>
                        </ul>
                        <p>So \\\\(\\\\alpha\\\\) and \\\\(1 + \\\\alpha\\\\) are multiplicative inverses of each other.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="simple-extension-structure"></div>

                <div class="viz-placeholder" data-viz="multiplication-in-extension"></div>
            `,
            visualizations: [
                {
                    id: 'simple-extension-structure',
                    title: 'Structure of F(alpha)',
                    description: 'Visualize how elements of a simple algebraic extension are represented as polynomials in alpha of degree < d.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380 });
                        var ctx = viz.ctx;

                        var selectedExt = 0;
                        var extensions = [
                            {
                                name: 'Q(sqrt(2))',
                                basis: ['1', 'sqrt(2)'],
                                degree: 2,
                                minPoly: 'x^2 - 2',
                                sampleElements: [
                                    { coeffs: [3, 2], label: '3 + 2 sqrt(2)' },
                                    { coeffs: [-1, 1], label: '-1 + sqrt(2)' },
                                    { coeffs: [0, -3], label: '-3 sqrt(2)' },
                                    { coeffs: [5, 0], label: '5' }
                                ]
                            },
                            {
                                name: 'Q(cbrt(2))',
                                basis: ['1', 'cbrt(2)', 'cbrt(4)'],
                                degree: 3,
                                minPoly: 'x^3 - 2',
                                sampleElements: [
                                    { coeffs: [1, 1, 1], label: '1 + cbrt(2) + cbrt(4)' },
                                    { coeffs: [0, 3, 0], label: '3 cbrt(2)' },
                                    { coeffs: [2, 0, -1], label: '2 - cbrt(4)' },
                                    { coeffs: [0, 0, 5], label: '5 cbrt(4)' }
                                ]
                            },
                            {
                                name: 'Q(i)',
                                basis: ['1', 'i'],
                                degree: 2,
                                minPoly: 'x^2 + 1',
                                sampleElements: [
                                    { coeffs: [3, 4], label: '3 + 4i' },
                                    { coeffs: [0, 1], label: 'i' },
                                    { coeffs: [-2, 7], label: '-2 + 7i' },
                                    { coeffs: [1, -1], label: '1 - i' }
                                ]
                            }
                        ];

                        VizEngine.createSelector(controls, 'Extension', extensions.map(function(e) { return e.name; }), function(v) {
                            selectedExt = parseInt(v);
                        });

                        function draw() {
                            viz.clear();
                            var ext = extensions[selectedExt];

                            ctx.fillStyle = '#2c3e50';
                            ctx.font = 'bold 20px serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(ext.name + '  ~=  Q[x] / (' + ext.minPoly + ')', 350, 35);

                            ctx.fillStyle = '#7f8c8d';
                            ctx.font = '15px serif';
                            ctx.fillText('Degree = ' + ext.degree + ',  Basis = { ' + ext.basis.join(', ') + ' }', 350, 65);

                            var boxW = 280;
                            var boxH = 55;
                            var startX = 350 - boxW / 2;
                            var startY = 95;

                            ctx.fillStyle = '#2c3e50';
                            ctx.font = 'bold 16px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Sample Elements', 350, startY);

                            for (var i = 0; i < ext.sampleElements.length; i++) {
                                var el = ext.sampleElements[i];
                                var y = startY + 15 + i * (boxH + 10);

                                ctx.fillStyle = 'hsl(' + (200 + i * 30) + ', 50%, 92%)';
                                ctx.strokeStyle = 'hsl(' + (200 + i * 30) + ', 50%, 50%)';
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.roundRect(startX, y, boxW, boxH, 6);
                                ctx.fill();
                                ctx.stroke();

                                ctx.fillStyle = '#2c3e50';
                                ctx.font = 'bold 16px serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(el.label, startX + boxW / 2, y + 22);

                                ctx.fillStyle = '#7f8c8d';
                                ctx.font = '13px sans-serif';
                                var coordStr = 'Coordinates: (' + el.coeffs.join(', ') + ') in basis { ' + ext.basis.join(', ') + ' }';
                                ctx.fillText(coordStr, startX + boxW / 2, y + 43);
                            }
                        }

                        viz.onFrame(draw);
                    }
                },
                {
                    id: 'multiplication-in-extension',
                    title: 'Multiplication in Q(sqrt(2))',
                    description: 'See how multiplication works by reducing modulo the minimal polynomial.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 350 });
                        var ctx = viz.ctx;

                        var a1 = 1, b1 = 1, a2 = 2, b2 = -1;

                        VizEngine.createSlider(controls, 'a1', -5, 5, 1, 1, function(v) { a1 = v; });
                        VizEngine.createSlider(controls, 'b1', -5, 5, 1, 1, function(v) { b1 = v; });
                        VizEngine.createSlider(controls, 'a2', -5, 5, 2, 1, function(v) { a2 = v; });
                        VizEngine.createSlider(controls, 'b2', -5, 5, -1, 1, function(v) { b2 = v; });

                        function formatElement(a, b) {
                            if (b === 0) return String(a);
                            var bPart = (Math.abs(b) === 1 ? '' : Math.abs(b)) + 'sqrt(2)';
                            if (a === 0) return (b < 0 ? '-' : '') + bPart;
                            return a + (b > 0 ? ' + ' : ' - ') + bPart;
                        }

                        function draw() {
                            viz.clear();

                            var prodA = a1 * a2 + 2 * b1 * b2;
                            var prodB = a1 * b2 + a2 * b1;

                            ctx.fillStyle = '#2c3e50';
                            ctx.font = 'bold 18px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Multiplication in Q(sqrt(2))', 350, 30);

                            ctx.font = '16px serif';
                            ctx.fillStyle = '#2980b9';
                            var elem1 = '(' + formatElement(a1, b1) + ')';
                            var elem2 = '(' + formatElement(a2, b2) + ')';
                            ctx.fillText('Element 1:  ' + elem1, 350, 70);
                            ctx.fillText('Element 2:  ' + elem2, 350, 100);

                            ctx.fillStyle = '#8e44ad';
                            ctx.font = '15px serif';
                            var naiveA = a1 * a2;
                            var naiveAB = a1 * b2 + a2 * b1;
                            var naiveBB = b1 * b2;
                            ctx.fillText('Expand: (' + a1 + ')(' + a2 + ') + (' + a1 + ')(' + b2 + ')sqrt(2) + (' + b1 + ')(' + a2 + ')sqrt(2) + (' + b1 + ')(' + b2 + ')(sqrt(2))^2', 350, 145);

                            ctx.fillStyle = '#e67e22';
                            ctx.font = '15px serif';
                            ctx.fillText('Since (sqrt(2))^2 = 2, the term ' + naiveBB + ' * (sqrt(2))^2 becomes ' + (2 * naiveBB), 350, 180);

                            ctx.fillStyle = '#27ae60';
                            ctx.font = 'bold 18px serif';
                            ctx.fillText('Result:  ' + formatElement(prodA, prodB), 350, 225);

                            ctx.fillStyle = '#7f8c8d';
                            ctx.font = '14px sans-serif';
                            ctx.fillText('Coordinates: (' + prodA + ', ' + prodB + ') in basis {1, sqrt(2)}', 350, 260);

                            ctx.strokeStyle = '#ecf0f1';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(50, 290);
                            ctx.lineTo(650, 290);
                            ctx.stroke();

                            ctx.fillStyle = '#95a5a6';
                            ctx.font = '13px serif';
                            ctx.fillText('The key: (sqrt(2))^2 = 2 is the reduction rule from x^2 - 2 = 0.', 350, 315);
                            ctx.fillText('This is exactly the multiplication in Q[x]/(x^2 - 2).', 350, 335);
                        }

                        viz.onFrame(draw);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch14-ex09',
                    type: 'multiple-choice',
                    difficulty: 2,
                    question: 'What is Q[sqrt(2)] as a set?',
                    options: [
                        '{ a + b*sqrt(2) : a,b in Z }',
                        '{ a + b*sqrt(2) : a,b in Q }',
                        '{ f(sqrt(2)) / g(sqrt(2)) : f,g in Q[x], g(sqrt(2)) != 0 }',
                        '{ a*sqrt(2) : a in Q }'
                    ],
                    correct: 1,
                    explanation: 'Q[sqrt(2)] = { f(sqrt(2)) : f in Q[x] }. Since (sqrt(2))^2 = 2 in Q, every polynomial in sqrt(2) reduces to the form a + b*sqrt(2) with a,b in Q. Moreover, Q[sqrt(2)] = Q(sqrt(2)) since sqrt(2) is algebraic.'
                },
                {
                    id: 'ch14-ex10',
                    type: 'short-answer',
                    difficulty: 2,
                    question: 'In Q(sqrt(2)), what is (1 + sqrt(2))*(3 - sqrt(2))? Write in the form a + b*sqrt(2). Give a and b separated by a comma.',
                    correct: '1, 2',
                    explanation: '(1 + sqrt(2))(3 - sqrt(2)) = 3 - sqrt(2) + 3*sqrt(2) - 2 = 1 + 2*sqrt(2). So a = 1, b = 2.'
                },
                {
                    id: 'ch14-ex11',
                    type: 'multiple-choice',
                    difficulty: 3,
                    question: 'If alpha is transcendental over F, what is [F(alpha) : F]?',
                    options: ['1', '2', 'The degree of alpha', 'Infinite'],
                    correct: 3,
                    explanation: 'When alpha is transcendental, F(alpha) is isomorphic to F(x), the field of rational functions. The set {1, alpha, alpha^2, ...} is linearly independent over F (otherwise alpha would satisfy a polynomial), so [F(alpha):F] = infinity.'
                },
                {
                    id: 'ch14-ex12',
                    type: 'multiple-choice',
                    difficulty: 3,
                    question: 'What is the inverse of 1 + sqrt(2) in Q(sqrt(2))?',
                    options: ['1 - sqrt(2)', '-1 + sqrt(2)', 'sqrt(2) - 1', '(1 - sqrt(2)) / (-1)'],
                    correct: 2,
                    explanation: '(1 + sqrt(2))^{-1} = (1 - sqrt(2)) / (1 - 2) = (1 - sqrt(2)) / (-1) = -1 + sqrt(2) = sqrt(2) - 1. Check: (1 + sqrt(2))(sqrt(2) - 1) = sqrt(2) - 1 + 2 - sqrt(2) = 1.'
                }
            ]
        },
        // ============================================================
        //  SECTION 4 — The Tower Law
        // ============================================================
        {
            id: 'ch14-sec04',
            title: 'The Tower Law',
            content: `
                <h2>The Tower Law</h2>

                <div class="env-block motivation">
                    <div class="env-title">Degrees Multiply in Towers</div>
                    <div class="env-body">
                        <p>When we build extensions in stages, forming a tower \\\\(F \\\\subseteq E \\\\subseteq K\\\\), the degrees multiply: \\\\([K:F] = [K:E] \\\\cdot [E:F]\\\\). This is the <strong>Tower Law</strong>, and it is one of the most useful results in field theory. It lets us compute degrees of complicated extensions by breaking them into simpler steps.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.18 — The Tower Law (Multiplicativity of Degrees)</div>
                    <div class="env-body">
                        <p>Let \\\\(F \\\\subseteq E \\\\subseteq K\\\\) be fields. If \\\\([K:E]\\\\) and \\\\([E:F]\\\\) are both finite, then \\\\([K:F]\\\\) is finite and</p>
                        <p>\\\\[ [K:F] = [K:E] \\\\cdot [E:F]. \\\\]</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\\\([E:F] = m\\\\) and \\\\([K:E] = n\\\\). Choose a basis \\\\(\\\\{e_1, \\\\ldots, e_m\\\\}\\\\) for \\\\(E\\\\) over \\\\(F\\\\) and a basis \\\\(\\\\{k_1, \\\\ldots, k_n\\\\}\\\\) for \\\\(K\\\\) over \\\\(E\\\\). We claim that</p>
                        <p>\\\\[ \\\\{e_i k_j : 1 \\\\le i \\\\le m,\\; 1 \\\\le j \\\\le n\\\\} \\\\]</p>
                        <p>is a basis for \\\\(K\\\\) over \\\\(F\\\\) (hence of size \\\\(mn\\\\)).</p>
                        <p><strong>Spanning:</strong> Let \\\\(\\\\alpha \\\\in K\\\\). Write \\\\(\\\\alpha = \\\\sum_j b_j k_j\\\\) with \\\\(b_j \\\\in E\\\\). Each \\\\(b_j = \\\\sum_i a_{ij} e_i\\\\) with \\\\(a_{ij} \\\\in F\\\\). So \\\\(\\\\alpha = \\\\sum_{i,j} a_{ij} e_i k_j\\\\).</p>
                        <p><strong>Independence:</strong> Suppose \\\\(\\\\sum_{i,j} a_{ij} e_i k_j = 0\\\\) with \\\\(a_{ij} \\\\in F\\\\). Rewrite as \\\\(\\\\sum_j (\\\\sum_i a_{ij} e_i) k_j = 0\\\\). Since \\\\(\\\\{k_j\\\\}\\\\) is a basis over \\\\(E\\\\), each coefficient \\\\(\\\\sum_i a_{ij} e_i = 0\\\\). Since \\\\(\\\\{e_i\\\\}\\\\) is a basis over \\\\(F\\\\), each \\\\(a_{ij} = 0\\\\). \\\\(\\\\square\\\\)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.19 — \\\\(\\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3})/\\\\mathbb{Q}\\\\)</div>
                    <div class="env-body">
                        <p>We have the tower \\\\(\\\\mathbb{Q} \\\\subset \\\\mathbb{Q}(\\\\sqrt{2}) \\\\subset \\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3})\\\\).</p>
                        <ul>
                            <li>\\\\([\\\\mathbb{Q}(\\\\sqrt{2}):\\\\mathbb{Q}] = 2\\\\) (minimal poly \\\\(x^2 - 2\\\\)).</li>
                            <li>\\\\([\\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3}):\\\\mathbb{Q}(\\\\sqrt{2})] = 2\\\\) (since \\\\(\\\\sqrt{3} \\\\notin \\\\mathbb{Q}(\\\\sqrt{2})\\\\), the minimal poly of \\\\(\\\\sqrt{3}\\\\) over \\\\(\\\\mathbb{Q}(\\\\sqrt{2})\\\\) is \\\\(x^2 - 3\\\\)).</li>
                            <li>By the Tower Law: \\\\([\\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3}):\\\\mathbb{Q}] = 2 \\\\cdot 2 = 4\\\\).</li>
                        </ul>
                        <p>The basis for \\\\(\\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3})\\\\) over \\\\(\\\\mathbb{Q}\\\\) is \\\\(\\\\{1, \\\\sqrt{2}, \\\\sqrt{3}, \\\\sqrt{6}\\\\}\\\\).</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 14.20 — Degree Divides</div>
                    <div class="env-body">
                        <p>If \\\\(F \\\\subseteq E \\\\subseteq K\\\\) are fields with \\\\([K:F]\\\\) finite, then \\\\([E:F]\\\\) divides \\\\([K:F]\\\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By the Tower Law, \\\\([K:F] = [K:E] \\\\cdot [E:F]\\\\). Both factors are positive integers (finite extensions have finite degree), so \\\\([E:F]\\\\) divides \\\\([K:F]\\\\). \\\\(\\\\square\\\\)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">The Tower Law as a Linear Algebra Fact</div>
                    <div class="env-body">
                        <p>The Tower Law is really a statement about dimensions of nested vector spaces. If \\\\(W \\\\subseteq V \\\\subseteq U\\\\) are finite-dimensional vector spaces over a field \\\\(F\\\\) with compatible scalar multiplications, then \\\\(\\\\dim_F U = \\\\dim_W U \\\\cdot \\\\dim_F W\\\\). The only subtlety for field extensions is that the "scalars" change at each level: \\\\(K\\\\) is a vector space over \\\\(E\\\\), and \\\\(E\\\\) is a vector space over \\\\(F\\\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Historical Note</div>
                    <div class="env-body">
                        <p>The Tower Law and its consequences were developed in the early 19th century, with key contributions from Abel, Galois, and Dedekind. The insight that field extensions can be studied via linear algebra (viewing extensions as vector spaces) was a major conceptual advance that unified algebraic number theory and the theory of equations.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.21 — No Intermediate Field of Degree 3</div>
                    <div class="env-body">
                        <p>Since \\\\([\\\\mathbb{Q}(\\\\sqrt[5]{2}):\\\\mathbb{Q}] = 5\\\\) (a prime), there is no intermediate field \\\\(E\\\\) with \\\\(\\\\mathbb{Q} \\\\subsetneq E \\\\subsetneq \\\\mathbb{Q}(\\\\sqrt[5]{2})\\\\). Indeed, \\\\([E:\\\\mathbb{Q}]\\\\) must divide 5, so it is 1 or 5.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.22 — Proving \\\\(\\\\sqrt{3} \\\\notin \\\\mathbb{Q}(\\\\sqrt{2})\\\\)</div>
                    <div class="env-body">
                        <p>If \\\\(\\\\sqrt{3} \\\\in \\\\mathbb{Q}(\\\\sqrt{2})\\\\), then \\\\(\\\\mathbb{Q}(\\\\sqrt{3}) \\\\subseteq \\\\mathbb{Q}(\\\\sqrt{2})\\\\), so \\\\([\\\\mathbb{Q}(\\\\sqrt{3}):\\\\mathbb{Q}] = 2\\\\) divides \\\\([\\\\mathbb{Q}(\\\\sqrt{2}):\\\\mathbb{Q}] = 2\\\\). This is consistent so far, but we can be more explicit. Suppose \\\\(\\\\sqrt{3} = a + b\\\\sqrt{2}\\\\) with \\\\(a,b \\\\in \\\\mathbb{Q}\\\\). Then \\\\(3 = a^2 + 2b^2 + 2ab\\\\sqrt{2}\\\\). Since \\\\(\\\\sqrt{2}\\\\) is irrational, \\\\(2ab = 0\\\\). If \\\\(a = 0\\\\) then \\\\(3 = 2b^2\\\\), giving \\\\(b^2 = 3/2\\\\), not a perfect square. If \\\\(b = 0\\\\) then \\\\(3 = a^2\\\\), impossible for rational \\\\(a\\\\). Contradiction.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.23 — A Three-Story Tower</div>
                    <div class="env-body">
                        <p>Consider the tower \\\\(\\\\mathbb{Q} \\\\subset \\\\mathbb{Q}(\\\\sqrt{2}) \\\\subset \\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3}) \\\\subset \\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3}, \\\\sqrt{5})\\\\).</p>
                        <ul>
                            <li>\\\\([\\\\mathbb{Q}(\\\\sqrt{2}):\\\\mathbb{Q}] = 2\\\\).</li>
                            <li>\\\\([\\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3}):\\\\mathbb{Q}(\\\\sqrt{2})] = 2\\\\) (since \\\\(\\\\sqrt{3} \\\\notin \\\\mathbb{Q}(\\\\sqrt{2})\\\\)).</li>
                            <li>\\\\([\\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3}, \\\\sqrt{5}):\\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3})] = 2\\\\) (since \\\\(\\\\sqrt{5} \\\\notin \\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3})\\\\), which can be verified).</li>
                        </ul>
                        <p>By applying the Tower Law twice: \\\\([\\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3}, \\\\sqrt{5}):\\\\mathbb{Q}] = 2 \\\\cdot 2 \\\\cdot 2 = 8\\\\).</p>
                        <p>The basis is \\\\(\\\\{1, \\\\sqrt{2}, \\\\sqrt{3}, \\\\sqrt{5}, \\\\sqrt{6}, \\\\sqrt{10}, \\\\sqrt{15}, \\\\sqrt{30}\\\\}\\\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">When Does the Tower Collapse?</div>
                    <div class="env-body">
                        <p>Sometimes adjoining a new element does not increase the degree because the element already belongs to the field. For example, \\\\(\\\\sqrt{6} \\\\in \\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3})\\\\) since \\\\(\\\\sqrt{6} = \\\\sqrt{2} \\\\cdot \\\\sqrt{3}\\\\). So \\\\(\\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3}, \\\\sqrt{6}) = \\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3})\\\\), and the "third floor" of the tower has degree 1 (it collapses).</p>
                        <p>In general, the Tower Law tells us that \\\\([F(\\\\alpha, \\\\beta):F] \\\\le [F(\\\\alpha):F] \\\\cdot [F(\\\\beta):F]\\\\), with equality when the minimal polynomial of \\\\(\\\\beta\\\\) over \\\\(F\\\\) remains irreducible over \\\\(F(\\\\alpha)\\\\).</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 14.24 — Degree Restriction on Elements</div>
                    <div class="env-body">
                        <p>If \\\\([K:F] = n\\\\) and \\\\(\\\\alpha \\\\in K\\\\), then the degree of \\\\(\\\\alpha\\\\) over \\\\(F\\\\) (i.e., \\\\(\\\\deg m_\\\\alpha\\\\)) divides \\\\(n\\\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>We have \\\\(F \\\\subseteq F(\\\\alpha) \\\\subseteq K\\\\). By the Tower Law, \\\\([K:F] = [K:F(\\\\alpha)] \\\\cdot [F(\\\\alpha):F]\\\\). So \\\\([F(\\\\alpha):F] = \\\\deg m_\\\\alpha\\\\) divides \\\\([K:F] = n\\\\). \\\\(\\\\square\\\\)</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="tower-law-viz"></div>

                <div class="viz-placeholder" data-viz="degree-divisibility"></div>
            `,
            visualizations: [
                {
                    id: 'tower-law-viz',
                    title: 'The Tower Law in Action',
                    description: 'Build towers of extensions and see how degrees multiply.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420 });
                        var ctx = viz.ctx;

                        var selectedExample = 0;
                        var examples = [
                            {
                                title: 'Q < Q(sqrt(2)) < Q(sqrt(2),sqrt(3))',
                                levels: [
                                    { name: 'Q', basis: ['{1}'], dim: 1 },
                                    { name: 'Q(sqrt(2))', basis: ['{1, sqrt(2)}'], dim: 2, degBelow: 2 },
                                    { name: 'Q(sqrt(2),sqrt(3))', basis: ['{1, sqrt(2), sqrt(3), sqrt(6)}'], dim: 4, degBelow: 2 }
                                ],
                                totalDeg: 4
                            },
                            {
                                title: 'Q < Q(cbrt(2)) < Q(cbrt(2), omega)',
                                levels: [
                                    { name: 'Q', basis: ['{1}'], dim: 1 },
                                    { name: 'Q(cbrt(2))', basis: ['{1, cbrt(2), cbrt(4)}'], dim: 3, degBelow: 3 },
                                    { name: 'Q(cbrt(2), omega)', basis: ['6 basis elements'], dim: 6, degBelow: 2 }
                                ],
                                totalDeg: 6
                            },
                            {
                                title: 'F_2 < F_4 < F_64',
                                levels: [
                                    { name: 'F_2', basis: ['{1}'], dim: 1 },
                                    { name: 'F_4', basis: ['{1, a}'], dim: 2, degBelow: 2 },
                                    { name: 'F_64', basis: ['6 basis elements'], dim: 6, degBelow: 3 }
                                ],
                                totalDeg: 6
                            }
                        ];

                        VizEngine.createSelector(controls, 'Example', examples.map(function(e) { return e.title; }), function(v) {
                            selectedExample = parseInt(v);
                        });

                        function draw() {
                            viz.clear();
                            var ex = examples[selectedExample];
                            var n = ex.levels.length;
                            var boxW = 320;
                            var boxH = 70;
                            var gap = 40;

                            ctx.fillStyle = '#2c3e50';
                            ctx.font = 'bold 18px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Tower Law: [K:F] = [K:E] * [E:F]', 350, 25);

                            for (var i = 0; i < n; i++) {
                                var level = ex.levels[n - 1 - i];
                                var y = 50 + i * (boxH + gap);
                                var hue = 120 + i * 60;

                                ctx.fillStyle = 'hsl(' + hue + ', 50%, 90%)';
                                ctx.strokeStyle = 'hsl(' + hue + ', 50%, 40%)';
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.roundRect(350 - boxW / 2, y, boxW, boxH, 8);
                                ctx.fill();
                                ctx.stroke();

                                ctx.fillStyle = 'hsl(' + hue + ', 50%, 15%)';
                                ctx.font = 'bold 17px serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(level.name, 350, y + 28);

                                ctx.font = '13px sans-serif';
                                ctx.fillStyle = '#555';
                                ctx.fillText('Basis over Q: ' + level.basis[0] + '   (dim = ' + level.dim + ')', 350, y + 52);

                                if (level.degBelow) {
                                    var arrowY = y + boxH;
                                    ctx.strokeStyle = '#e74c3c';
                                    ctx.lineWidth = 2;
                                    ctx.beginPath();
                                    ctx.moveTo(350, arrowY + 2);
                                    ctx.lineTo(350, arrowY + gap - 2);
                                    ctx.stroke();
                                    ctx.beginPath();
                                    ctx.moveTo(350, arrowY + gap - 2);
                                    ctx.lineTo(345, arrowY + gap - 10);
                                    ctx.moveTo(350, arrowY + gap - 2);
                                    ctx.lineTo(355, arrowY + gap - 10);
                                    ctx.stroke();

                                    ctx.fillStyle = '#e74c3c';
                                    ctx.font = 'bold 15px sans-serif';
                                    ctx.fillText('degree ' + level.degBelow, 350 + boxW / 2 + 50, arrowY + gap / 2 + 3);
                                }
                            }

                            ctx.fillStyle = '#27ae60';
                            ctx.font = 'bold 17px sans-serif';
                            ctx.fillText('Total degree = ' + ex.totalDeg, 350, 400);
                        }

                        viz.onFrame(draw);
                    }
                },
                {
                    id: 'degree-divisibility',
                    title: 'Degree Divisibility',
                    description: 'Explore how the degree of an intermediate extension must divide the total degree.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 350 });
                        var ctx = viz.ctx;

                        var totalDeg = 12;
                        VizEngine.createSlider(controls, 'Total degree [K:F]', 2, 30, 12, 1, function(v) { totalDeg = v; });

                        function getDivisors(n) {
                            var divs = [];
                            for (var i = 1; i <= n; i++) {
                                if (n % i === 0) divs.push(i);
                            }
                            return divs;
                        }

                        function draw() {
                            viz.clear();
                            var divs = getDivisors(totalDeg);

                            ctx.fillStyle = '#2c3e50';
                            ctx.font = 'bold 18px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('If [K:F] = ' + totalDeg + ', possible intermediate degrees [E:F] must divide ' + totalDeg, 350, 30);

                            ctx.font = '15px serif';
                            ctx.fillText('Divisors of ' + totalDeg + ': { ' + divs.join(', ') + ' }', 350, 60);

                            var barMaxW = 500;
                            var barH = 25;
                            var startY = 90;

                            for (var i = 0; i < divs.length && i < 16; i++) {
                                var d = divs[i];
                                var y = startY + i * (barH + 8);
                                var w = (d / totalDeg) * barMaxW;

                                var isDivisor = true;
                                var hue = isDivisor ? 140 : 0;
                                ctx.fillStyle = 'hsl(' + hue + ', 60%, 75%)';
                                ctx.strokeStyle = 'hsl(' + hue + ', 60%, 40%)';
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.roundRect(100, y, w, barH, 4);
                                ctx.fill();
                                ctx.stroke();

                                ctx.fillStyle = '#2c3e50';
                                ctx.font = '14px sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('[E:F] = ' + d, 100 + w + 10, y + barH / 2 + 5);

                                ctx.textAlign = 'right';
                                ctx.fillText('[K:E] = ' + (totalDeg / d), 90, y + barH / 2 + 5);
                            }

                            ctx.fillStyle = '#7f8c8d';
                            ctx.font = '13px serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Bar width proportional to [E:F]. Each decomposition [K:F] = [K:E] * [E:F].', 350, 335);
                        }

                        viz.onFrame(draw);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch14-ex13',
                    type: 'multiple-choice',
                    difficulty: 2,
                    question: 'Using the Tower Law, what is [Q(sqrt(2), sqrt(5)) : Q], given that sqrt(5) is not in Q(sqrt(2))?',
                    options: ['2', '3', '4', '5'],
                    correct: 2,
                    explanation: '[Q(sqrt(2)):Q] = 2 and sqrt(5) not in Q(sqrt(2)) means [Q(sqrt(2),sqrt(5)):Q(sqrt(2))] = 2. By the Tower Law, [Q(sqrt(2),sqrt(5)):Q] = 2 * 2 = 4.'
                },
                {
                    id: 'ch14-ex14',
                    type: 'multiple-choice',
                    difficulty: 3,
                    question: 'If [K:F] = 7 (a prime), how many intermediate fields E with F < E < K exist?',
                    options: ['0', '1', '5', '7'],
                    correct: 0,
                    explanation: 'By the Tower Law, [E:F] must divide [K:F] = 7. The only divisors of 7 are 1 and 7, corresponding to E = F and E = K. So there are no proper intermediate fields.'
                },
                {
                    id: 'ch14-ex15',
                    type: 'short-answer',
                    difficulty: 3,
                    question: 'If [K:E] = 3 and [E:F] = 4, what is [K:F]?',
                    correct: '12',
                    explanation: 'By the Tower Law, [K:F] = [K:E] * [E:F] = 3 * 4 = 12.'
                },
                {
                    id: 'ch14-ex16',
                    type: 'multiple-choice',
                    difficulty: 3,
                    question: 'Can cbrt(2) lie in Q(sqrt(2))?',
                    options: [
                        'Yes, since both are algebraic over Q.',
                        'No, because [Q(cbrt(2)):Q] = 3 does not divide [Q(sqrt(2)):Q] = 2.',
                        'No, because cbrt(2) is transcendental.',
                        'It depends on the choice of embedding.'
                    ],
                    correct: 1,
                    explanation: 'If cbrt(2) were in Q(sqrt(2)), then Q(cbrt(2)) would be a subfield of Q(sqrt(2)), so [Q(cbrt(2)):Q] = 3 would divide [Q(sqrt(2)):Q] = 2 by the Tower Law. But 3 does not divide 2, a contradiction.'
                }
            ]
        },
        // ============================================================
        //  SECTION 5 — Algebraic Extensions
        // ============================================================
        {
            id: 'ch14-sec05',
            title: 'Algebraic Extensions',
            content: `
                <h2>Algebraic Extensions</h2>

                <div class="env-block motivation">
                    <div class="env-title">When Every Element is Algebraic</div>
                    <div class="env-body">
                        <p>A field extension \\\\(K/F\\\\) is called algebraic if every element of \\\\(K\\\\) is algebraic over \\\\(F\\\\). We will prove the fundamental fact that <em>every finite extension is algebraic</em>, though the converse is false. We then preview the algebraic closure (the "biggest" algebraic extension) and connect the theory to the classical problem of compass-and-straightedge constructions.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.23 — Algebraic Extension</div>
                    <div class="env-body">
                        <p>A field extension \\\\(K/F\\\\) is <strong>algebraic</strong> if every element \\\\(\\\\alpha \\\\in K\\\\) is algebraic over \\\\(F\\\\). Otherwise it is <strong>transcendental</strong>.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.24 — Finite Extensions Are Algebraic</div>
                    <div class="env-body">
                        <p>If \\\\([K:F] < \\\\infty\\\\), then \\\\(K/F\\\\) is algebraic.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\\\([K:F] = n\\\\) and let \\\\(\\\\alpha \\\\in K\\\\). The \\\\(n+1\\\\) elements \\\\(1, \\\\alpha, \\\\alpha^2, \\\\ldots, \\\\alpha^n\\\\) lie in a vector space of dimension \\\\(n\\\\) over \\\\(F\\\\), so they must be linearly dependent. That is, there exist \\\\(a_0, a_1, \\\\ldots, a_n \\\\in F\\\\), not all zero, with</p>
                        <p>\\\\[ a_n \\\\alpha^n + a_{n-1} \\\\alpha^{n-1} + \\\\cdots + a_1 \\\\alpha + a_0 = 0. \\\\]</p>
                        <p>This means \\\\(\\\\alpha\\\\) is a root of the nonzero polynomial \\\\(a_n x^n + \\\\cdots + a_0 \\\\in F[x]\\\\), so \\\\(\\\\alpha\\\\) is algebraic over \\\\(F\\\\). \\\\(\\\\square\\\\)</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">The Converse is False</div>
                    <div class="env-body">
                        <p>The converse of Theorem 14.24 is false: there exist algebraic extensions that are not finite. For example, the algebraic closure \\\\(\\\\overline{\\\\mathbb{Q}}\\\\) (all algebraic numbers) is an algebraic extension of \\\\(\\\\mathbb{Q}\\\\), but \\\\([\\\\overline{\\\\mathbb{Q}}:\\\\mathbb{Q}] = \\\\infty\\\\) since it contains elements of arbitrarily high degree (e.g., \\\\(\\\\sqrt[n]{2}\\\\) for all \\\\(n\\\\)).</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 14.24b — Finite Generation and Algebraicity</div>
                    <div class="env-body">
                        <p>If \\\\(\\\\alpha_1, \\\\ldots, \\\\alpha_r\\\\) are all algebraic over \\\\(F\\\\), then \\\\(F(\\\\alpha_1, \\\\ldots, \\\\alpha_r)/F\\\\) is a finite (hence algebraic) extension. In fact,</p>
                        <p>\\\\[ [F(\\\\alpha_1, \\\\ldots, \\\\alpha_r):F] \\\\le \\\\prod_{i=1}^{r} \\\\deg(m_{\\\\alpha_i}). \\\\]</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By induction on \\\\(r\\\\). The base case \\\\(r=1\\\\) is the Structure Theorem for Simple Extensions. For the inductive step, let \\\\(E = F(\\\\alpha_1, \\\\ldots, \\\\alpha_{r-1})\\\\), which is a finite extension of \\\\(F\\\\) by the induction hypothesis. Then \\\\(\\\\alpha_r\\\\) is algebraic over \\\\(E\\\\) (since it is algebraic over \\\\(F \\\\subseteq E\\\\)), and its minimal polynomial over \\\\(E\\\\) has degree at most \\\\(\\\\deg(m_{\\\\alpha_r})\\\\). By the Tower Law, \\\\([E(\\\\alpha_r):F] = [E(\\\\alpha_r):E][E:F]\\\\), which is finite. \\\\(\\\\square\\\\)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.24c — An Infinite Algebraic Extension</div>
                    <div class="env-body">
                        <p>Consider the tower \\\\(\\\\mathbb{Q} \\\\subset \\\\mathbb{Q}(\\\\sqrt{2}) \\\\subset \\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3}) \\\\subset \\\\mathbb{Q}(\\\\sqrt{2}, \\\\sqrt{3}, \\\\sqrt{5}) \\\\subset \\\\cdots\\\\), adjoining \\\\(\\\\sqrt{p}\\\\) for each prime \\\\(p\\\\). The union \\\\(K = \\\\bigcup_n \\\\mathbb{Q}(\\\\sqrt{2}, \\\\ldots, \\\\sqrt{p_n})\\\\) is an algebraic extension of \\\\(\\\\mathbb{Q}\\\\) (every element is algebraic, being in some finite sub-extension), but \\\\([K:\\\\mathbb{Q}] = \\\\infty\\\\) because \\\\(K\\\\) contains elements of degree \\\\(2^n\\\\) for arbitrarily large \\\\(n\\\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.25 — Algebraic Over Algebraic is Algebraic</div>
                    <div class="env-body">
                        <p>If \\\\(K/E\\\\) and \\\\(E/F\\\\) are both algebraic extensions, then \\\\(K/F\\\\) is algebraic.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (sketch)</div>
                    <div class="env-body">
                        <p>Let \\\\(\\\\alpha \\\\in K\\\\). Since \\\\(K/E\\\\) is algebraic, \\\\(\\\\alpha\\\\) satisfies some polynomial \\\\(f(x) = x^n + c_{n-1}x^{n-1} + \\\\cdots + c_0\\\\) with \\\\(c_i \\\\in E\\\\). Since \\\\(E/F\\\\) is algebraic, each \\\\(c_i\\\\) is algebraic over \\\\(F\\\\). Let \\\\(L = F(c_0, c_1, \\\\ldots, c_{n-1})\\\\). By repeated application of the Tower Law, \\\\([L:F] < \\\\infty\\\\). Now \\\\(\\\\alpha\\\\) is algebraic over \\\\(L\\\\), so \\\\([L(\\\\alpha):L] < \\\\infty\\\\). By the Tower Law again, \\\\([L(\\\\alpha):F] = [L(\\\\alpha):L][L:F] < \\\\infty\\\\). Since \\\\(F \\\\subseteq L(\\\\alpha)\\\\) is a finite extension, \\\\(\\\\alpha\\\\) is algebraic over \\\\(F\\\\) by Theorem 14.24. \\\\(\\\\square\\\\)</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.26 — Algebraic Closure</div>
                    <div class="env-body">
                        <p>An <strong>algebraic closure</strong> of \\\\(F\\\\), denoted \\\\(\\\\overline{F}\\\\), is an algebraic extension of \\\\(F\\\\) that is algebraically closed (every nonconstant polynomial in \\\\(\\\\overline{F}[x]\\\\) has a root in \\\\(\\\\overline{F}\\\\)).</p>
                        <p>Every field has an algebraic closure (by a theorem of Steinitz), and it is unique up to isomorphism.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.27 — Algebraic Closures</div>
                    <div class="env-body">
                        <ul>
                            <li>\\\\(\\\\overline{\\\\mathbb{R}} = \\\\mathbb{C}\\\\), since \\\\(\\\\mathbb{C}\\\\) is algebraically closed (Fundamental Theorem of Algebra) and \\\\(\\\\mathbb{C}/\\\\mathbb{R}\\\\) is algebraic (degree 2).</li>
                            <li>\\\\(\\\\overline{\\\\mathbb{Q}}\\\\) is the field of all algebraic numbers, a proper subfield of \\\\(\\\\mathbb{C}\\\\).</li>
                            <li>\\\\(\\\\overline{\\\\mathbb{F}_p} = \\\\bigcup_{n=1}^{\\\\infty} \\\\mathbb{F}_{p^n}\\\\).</li>
                        </ul>
                    </div>
                </div>

                <h3>Constructible Numbers</h3>

                <div class="env-block definition">
                    <div class="env-title">Definition 14.28 — Constructible Number</div>
                    <div class="env-body">
                        <p>A real number \\\\(\\\\alpha\\\\) is <strong>constructible</strong> if, starting from the points \\\\(0\\\\) and \\\\(1\\\\) on the number line, the point \\\\(\\\\alpha\\\\) can be constructed in finitely many steps using only a compass and straightedge.</p>
                        <p>The basic operations available are:</p>
                        <ul>
                            <li><strong>Line through two points:</strong> Given two constructed points, draw the line through them.</li>
                            <li><strong>Circle through a point:</strong> Given a center and a point on the circumference, draw the circle.</li>
                            <li><strong>Intersection:</strong> Mark the point(s) where two constructed lines or circles meet.</li>
                        </ul>
                        <p>One can show that these operations allow us to perform addition, subtraction, multiplication, division, and square roots of previously constructed lengths.</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 14.28b — Constructible Numbers Form a Field</div>
                    <div class="env-body">
                        <p>The set of constructible numbers is a subfield of \\\\(\\\\mathbb{R}\\\\). Moreover, if \\\\(\\\\alpha > 0\\\\) is constructible, then so is \\\\(\\\\sqrt{\\\\alpha}\\\\). This means the constructible numbers are closed under addition, subtraction, multiplication, division, and taking square roots of positive elements.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.29 — Constructibility Criterion</div>
                    <div class="env-body">
                        <p>A real number \\\\(\\\\alpha\\\\) is constructible if and only if there exists a tower of fields</p>
                        <p>\\\\[ \\\\mathbb{Q} = F_0 \\\\subset F_1 \\\\subset F_2 \\\\subset \\\\cdots \\\\subset F_k \\\\]</p>
                        <p>with \\\\(\\\\alpha \\\\in F_k\\\\) and \\\\([F_{i+1}:F_i] = 2\\\\) for each \\\\(i\\\\). In particular, \\\\([\\\\mathbb{Q}(\\\\alpha):\\\\mathbb{Q}]\\\\) must be a power of 2.</p>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 14.30 — Classical Impossibilities</div>
                    <div class="env-body">
                        <ol>
                            <li><strong>Doubling the cube</strong> is impossible: constructing \\\\(\\\\sqrt[3]{2}\\\\) requires \\\\([\\\\mathbb{Q}(\\\\sqrt[3]{2}):\\\\mathbb{Q}] = 3\\\\), which is not a power of 2.</li>
                            <li><strong>Trisecting an arbitrary angle</strong> is impossible: trisecting \\\\(60^\\\\circ\\\\) requires constructing \\\\(\\\\cos 20^\\\\circ\\\\), which has minimal polynomial \\\\(8x^3 - 6x - 1\\\\) of degree 3.</li>
                            <li><strong>Squaring the circle</strong> is impossible: it would require constructing \\\\(\\\\sqrt{\\\\pi}\\\\), but \\\\(\\\\pi\\\\) is transcendental (hence not constructible at all).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Why Powers of 2?</div>
                    <div class="env-body">
                        <p>Each compass-and-straightedge operation (intersecting lines, intersecting a line and a circle, or intersecting two circles) amounts to solving at most a quadratic equation. So each construction step extends the "currently available" number field by a degree at most 2. A tower of quadratic extensions yields a total degree that is a power of 2.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 14.31 — Constructible Regular Polygons</div>
                    <div class="env-body">
                        <p>A regular \\\\(n\\\\)-gon is constructible if and only if \\\\(n = 2^k \\\\cdot p_1 \\\\cdot p_2 \\\\cdots p_r\\\\) where the \\\\(p_i\\\\) are distinct Fermat primes (primes of the form \\\\(2^{2^m} + 1\\\\)). The known Fermat primes are \\\\(3, 5, 17, 257, 65537\\\\). So:</p>
                        <ul>
                            <li>Regular triangle (\\\\(n=3\\\\)): constructible (\\\\(3\\\\) is a Fermat prime).</li>
                            <li>Regular pentagon (\\\\(n=5\\\\)): constructible (\\\\(5\\\\) is a Fermat prime).</li>
                            <li>Regular heptagon (\\\\(n=7\\\\)): NOT constructible (\\\\(7\\\\) is not a Fermat prime).</li>
                            <li>Regular 17-gon (\\\\(n=17\\\\)): constructible (Gauss, 1796).</li>
                        </ul>
                        <p>This is because constructing a regular \\\\(n\\\\)-gon requires constructing \\\\(\\\\cos(2\\\\pi/n)\\\\), whose degree over \\\\(\\\\mathbb{Q}\\\\) is \\\\(\\\\phi(n)/2\\\\). This must be a power of 2.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Looking Ahead: Galois Theory</div>
                    <div class="env-body">
                        <p>Field extensions are the foundation of <strong>Galois theory</strong>, which studies the symmetries (automorphisms) of field extensions. The central result, the <strong>Fundamental Theorem of Galois Theory</strong>, establishes a correspondence between intermediate fields \\\\(F \\\\subseteq E \\\\subseteq K\\\\) and subgroups of the Galois group \\\\(\\\\mathrm{Gal}(K/F)\\\\). This profound connection between field theory and group theory resolves classical problems like the solvability of polynomial equations by radicals.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 14.32 — Characterization of Finite Fields</div>
                    <div class="env-body">
                        <p>For every prime \\\\(p\\\\) and positive integer \\\\(n\\\\), there exists a unique (up to isomorphism) field with \\\\(p^n\\\\) elements, denoted \\\\(\\\\mathbb{F}_{p^n}\\\\). It is the splitting field of \\\\(x^{p^n} - x\\\\) over \\\\(\\\\mathbb{F}_p\\\\), and \\\\([\\\\mathbb{F}_{p^n}:\\\\mathbb{F}_p] = n\\\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Summary of Chapter 14</div>
                    <div class="env-body">
                        <table>
                            <tr><th>Concept</th><th>Key Result</th></tr>
                            <tr><td>Field extension \\\\(K/F\\\\)</td><td>\\\\(K\\\\) is a vector space over \\\\(F\\\\); dimension = \\\\([K:F]\\\\)</td></tr>
                            <tr><td>Algebraic element</td><td>Root of some \\\\(f \\\\in F[x]\\\\); has a unique minimal polynomial</td></tr>
                            <tr><td>Simple extension \\\\(F(\\\\alpha)\\\\)</td><td>If \\\\(\\\\alpha\\\\) algebraic: \\\\(F(\\\\alpha) \\\\cong F[x]/(m_\\\\alpha)\\\\), degree = \\\\(\\\\deg m_\\\\alpha\\\\)</td></tr>
                            <tr><td>Tower Law</td><td>\\\\([K:F] = [K:E][E:F]\\\\) for \\\\(F \\\\subseteq E \\\\subseteq K\\\\)</td></tr>
                            <tr><td>Finite implies algebraic</td><td>\\\\([K:F] < \\\\infty \\\\Rightarrow K/F\\\\) algebraic (converse false)</td></tr>
                            <tr><td>Constructible numbers</td><td>\\\\([\\\\mathbb{Q}(\\\\alpha):\\\\mathbb{Q}]\\\\) must be a power of 2</td></tr>
                        </table>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="constructible-numbers"></div>

                <div class="viz-placeholder" data-viz="algebraic-closure-preview"></div>
            `,
            visualizations: [
                {
                    id: 'constructible-numbers',
                    title: 'Constructible Numbers and Compass-Straightedge',
                    description: 'Explore which numbers can be constructed with compass and straightedge.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 420 });
                        var ctx = viz.ctx;

                        var step = 0;
                        var maxStep = 5;

                        VizEngine.createSlider(controls, 'Construction step', 0, maxStep, 0, 1, function(v) { step = v; });

                        var constructions = [
                            { val: 0, label: '0', color: '#333', desc: 'Starting point' },
                            { val: 1, label: '1', color: '#333', desc: 'Starting point' },
                            { val: 2, label: '2', color: '#2980b9', desc: 'Straightedge: double the unit' },
                            { val: 0.5, label: '1/2', color: '#2980b9', desc: 'Bisect the unit segment' },
                            { val: Math.sqrt(2), label: 'sqrt(2)', color: '#27ae60', desc: 'Construct sqrt(2) via Pythagorean theorem' },
                            { val: Math.sqrt(3), label: 'sqrt(3)', color: '#8e44ad', desc: 'Construct sqrt(3) from equilateral triangle' }
                        ];

                        var impossible = [
                            { val: Math.pow(2, 1/3), label: 'cbrt(2)', reason: 'degree 3 over Q (not power of 2)' },
                            { val: Math.PI, label: 'pi', reason: 'transcendental over Q' }
                        ];

                        function draw() {
                            viz.clear();
                            var ox = 80;
                            var oy = 200;
                            var scale = 120;

                            ctx.fillStyle = '#2c3e50';
                            ctx.font = 'bold 18px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Constructible Numbers (step by step)', 350, 25);

                            ctx.strokeStyle = '#333';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(ox - 10, oy);
                            ctx.lineTo(680, oy);
                            ctx.stroke();

                            for (var t = 0; t <= 4; t++) {
                                var tx = ox + t * scale;
                                ctx.beginPath();
                                ctx.moveTo(tx, oy - 5);
                                ctx.lineTo(tx, oy + 5);
                                ctx.stroke();
                                ctx.fillStyle = '#999';
                                ctx.font = '12px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(String(t), tx, oy + 20);
                            }

                            for (var i = 0; i <= step && i < constructions.length; i++) {
                                var c = constructions[i];
                                var cx = ox + c.val * scale;

                                ctx.fillStyle = c.color;
                                ctx.beginPath();
                                ctx.arc(cx, oy, 6, 0, 2 * Math.PI);
                                ctx.fill();

                                ctx.font = 'bold 13px serif';
                                ctx.textAlign = 'center';
                                var labelY = (i % 2 === 0) ? oy - 20 : oy - 35;
                                ctx.fillText(c.label, cx, labelY);
                            }

                            var infoY = 260;
                            ctx.fillStyle = '#2c3e50';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Construction log:', 60, infoY);

                            for (var j = 0; j <= step && j < constructions.length; j++) {
                                var ci = constructions[j];
                                ctx.fillStyle = ci.color;
                                ctx.font = '14px serif';
                                ctx.fillText('Step ' + j + ':  ' + ci.label + '  (' + ci.desc + ')', 80, infoY + 22 + j * 20);
                            }

                            ctx.strokeStyle = '#e74c3c';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(50, 385);
                            ctx.lineTo(650, 385);
                            ctx.stroke();

                            ctx.fillStyle = '#e74c3c';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Not constructible:', 350, 400);
                            ctx.font = '13px serif';
                            for (var k = 0; k < impossible.length; k++) {
                                ctx.fillText(impossible[k].label + ' (' + impossible[k].reason + ')', 200 + k * 300, 415);
                            }
                        }

                        viz.onFrame(draw);
                    }
                },
                {
                    id: 'algebraic-closure-preview',
                    title: 'Algebraic Closure Preview',
                    description: 'Visualize how the algebraic closure is built by adjoining all algebraic numbers layer by layer.',
                    setup: function(container, controls) {
                        var viz = new VizEngine(container, { width: 700, height: 380 });
                        var ctx = viz.ctx;

                        var maxDegree = 2;
                        VizEngine.createSlider(controls, 'Max degree shown', 1, 6, 2, 1, function(v) { maxDegree = v; });

                        var layers = [
                            {
                                degree: 1,
                                label: 'Q (degree 1)',
                                color: '#3498db',
                                examples: ['0', '1', '-1', '1/2', '3/7', '-4/3']
                            },
                            {
                                degree: 2,
                                label: 'Degree 2 algebraic numbers',
                                color: '#27ae60',
                                examples: ['sqrt(2)', 'sqrt(3)', 'sqrt(5)', 'phi = (1+sqrt(5))/2', 'i']
                            },
                            {
                                degree: 3,
                                label: 'Degree 3 algebraic numbers',
                                color: '#e67e22',
                                examples: ['cbrt(2)', 'cbrt(3)', '2cos(2pi/7)']
                            },
                            {
                                degree: 4,
                                label: 'Degree 4 algebraic numbers',
                                color: '#9b59b6',
                                examples: ['sqrt(2)+sqrt(3)', 'fourthroot(2)', 'sqrt(2+sqrt(3))']
                            },
                            {
                                degree: 5,
                                label: 'Degree 5 algebraic numbers',
                                color: '#e74c3c',
                                examples: ['fifthroot(2)', '2cos(2pi/11)']
                            },
                            {
                                degree: 6,
                                label: 'Degree 6 algebraic numbers',
                                color: '#1abc9c',
                                examples: ['sqrt(2)+cbrt(3)', 'sixthroot(5)']
                            }
                        ];

                        function draw() {
                            viz.clear();

                            ctx.fillStyle = '#2c3e50';
                            ctx.font = 'bold 18px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Building the Algebraic Closure of Q', 350, 25);

                            ctx.font = '14px serif';
                            ctx.fillStyle = '#7f8c8d';
                            ctx.fillText('Q-bar = union of all algebraic numbers of every degree', 350, 50);

                            var ringCX = 350;
                            var ringCY = 220;
                            var maxR = 160;
                            var minR = 30;

                            for (var i = Math.min(maxDegree, layers.length) - 1; i >= 0; i--) {
                                var layer = layers[i];
                                var r = minR + (i / (layers.length - 1)) * (maxR - minR);

                                ctx.fillStyle = layer.color;
                                ctx.globalAlpha = 0.15;
                                ctx.beginPath();
                                ctx.arc(ringCX, ringCY, r, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.globalAlpha = 1.0;

                                ctx.strokeStyle = layer.color;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.arc(ringCX, ringCY, r, 0, 2 * Math.PI);
                                ctx.stroke();
                            }

                            for (var j = 0; j < Math.min(maxDegree, layers.length); j++) {
                                var la = layers[j];
                                ctx.fillStyle = la.color;
                                ctx.font = 'bold 13px sans-serif';
                                ctx.textAlign = 'left';
                                var legendY = 80 + j * 22;
                                ctx.beginPath();
                                ctx.arc(560, legendY - 4, 6, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.fillText(la.label, 575, legendY);
                            }

                            var shown = layers[Math.min(maxDegree, layers.length) - 1];
                            ctx.fillStyle = '#2c3e50';
                            ctx.font = '14px serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Examples at degree ' + shown.degree + ': ' + shown.examples.join(', '), 350, 370);
                        }

                        viz.onFrame(draw);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch14-ex17',
                    type: 'multiple-choice',
                    difficulty: 2,
                    question: 'Is every finite extension algebraic?',
                    options: [
                        'Yes, because a finite-dimensional vector space forces polynomial dependencies.',
                        'No, transcendental elements can appear in finite extensions.',
                        'Only if the base field has characteristic 0.',
                        'Only for extensions of Q.'
                    ],
                    correct: 0,
                    explanation: 'If [K:F] = n, then for any alpha in K, the n+1 elements 1, alpha, ..., alpha^n are linearly dependent over F. This gives a polynomial relation, making alpha algebraic. This works for any base field F.'
                },
                {
                    id: 'ch14-ex18',
                    type: 'multiple-choice',
                    difficulty: 2,
                    question: 'Why is doubling the cube impossible with compass and straightedge?',
                    options: [
                        'Because cbrt(2) is transcendental.',
                        'Because [Q(cbrt(2)):Q] = 3, which is not a power of 2.',
                        'Because cbrt(2) is irrational.',
                        'Because cubes cannot be doubled.'
                    ],
                    correct: 1,
                    explanation: 'Doubling a unit cube requires constructing a side of length cbrt(2). The minimal polynomial of cbrt(2) over Q is x^3 - 2, of degree 3. Constructible numbers must have degree a power of 2 over Q, and 3 is not a power of 2.'
                },
                {
                    id: 'ch14-ex19',
                    type: 'short-answer',
                    difficulty: 3,
                    question: 'What is the algebraic closure of R? (Enter the standard notation for this field.)',
                    correct: 'C',
                    explanation: 'The algebraic closure of R is C (the complex numbers). C is algebraically closed by the Fundamental Theorem of Algebra, and [C:R] = 2 so the extension is algebraic.'
                },
                {
                    id: 'ch14-ex20',
                    type: 'multiple-choice',
                    difficulty: 3,
                    question: 'If K/E is algebraic and E/F is algebraic, what can we conclude about K/F?',
                    options: [
                        'K/F is algebraic.',
                        'K/F is finite.',
                        'K/F is transcendental.',
                        'Nothing; we need more information.'
                    ],
                    correct: 0,
                    explanation: 'By Theorem 14.25 (Algebraic over Algebraic is Algebraic), if K/E and E/F are both algebraic then K/F is algebraic. Note it need not be finite: take K = Q-bar, E = Q-bar, F = Q.'
                }
            ]
        }
    ]
});
