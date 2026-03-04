window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch06',
    number: 6,
    title: 'Group Homomorphisms and Isomorphism Theorems',
    subtitle: 'Homomorphisms, kernels, images, all three isomorphism theorems',
    sections: [

        /* ============================================================
           SECTION 1: Group Homomorphisms
           ============================================================ */
        {
            id: 'ch06-sec01',
            title: 'Group Homomorphisms',
            content: `
<div class="env-block intuition">
<strong>Where we are.</strong>
Having studied groups, subgroups, cosets, normal subgroups, and quotient groups, we now ask the central question of algebra: when do two groups share the same structure? The answer lies in <em>homomorphisms</em>, structure-preserving maps between groups. Homomorphisms are the morphisms of the category of groups; they let us compare, relate, and classify groups in a systematic way.
</div>

<h2>Group Homomorphisms</h2>

<p><strong>Section roadmap.</strong>
We define group homomorphisms, verify fundamental properties, and work through three important families of examples: the determinant map, the sign homomorphism, and the exponential map.</p>

<div class="concept-box">
<h3>Definition: Group Homomorphism</h3>
<p>Let \\((G, \\cdot)\\) and \\((H, *)\\) be groups. A function \\(\\varphi: G \\to H\\) is a <strong>group homomorphism</strong> if for all \\(a, b \\in G\\),</p>
\\[\\varphi(a \\cdot b) = \\varphi(a) * \\varphi(b).\\]
<p>In words: \\(\\varphi\\) respects the group operations. You can either multiply first and then map, or map first and then multiply; you get the same answer either way.</p>
</div>

<p>This single equation has surprisingly strong consequences.</p>

<div class="concept-box">
<h3>Proposition: Basic Properties of Homomorphisms</h3>
<p>Let \\(\\varphi: G \\to H\\) be a homomorphism. Then:</p>
<ol>
  <li>\\(\\varphi(e_G) = e_H\\) (identity maps to identity).</li>
  <li>\\(\\varphi(a^{-1}) = \\varphi(a)^{-1}\\) for all \\(a \\in G\\) (inverses map to inverses).</li>
  <li>\\(\\varphi(a^n) = \\varphi(a)^n\\) for all \\(a \\in G\\) and \\(n \\in \\mathbb{Z}\\).</li>
</ol>
</div>

<p><strong>Proof of (1).</strong> We have \\(\\varphi(e_G) = \\varphi(e_G \\cdot e_G) = \\varphi(e_G) * \\varphi(e_G)\\). Multiplying both sides on the left by \\(\\varphi(e_G)^{-1}\\) gives \\(e_H = \\varphi(e_G)\\). \\(\\square\\)</p>

<p><strong>Proof of (2).</strong> We have \\(e_H = \\varphi(e_G) = \\varphi(a \\cdot a^{-1}) = \\varphi(a) * \\varphi(a^{-1})\\). So \\(\\varphi(a^{-1})\\) is the inverse of \\(\\varphi(a)\\) in \\(H\\). \\(\\square\\)</p>

<h3>Example 1: The Determinant Map</h3>
<p>The map \\(\\det: GL_n(\\mathbb{R}) \\to \\mathbb{R}^*\\) from the general linear group (invertible \\(n \\times n\\) matrices under multiplication) to the nonzero reals is a homomorphism because</p>
\\[\\det(AB) = \\det(A) \\cdot \\det(B).\\]
<p>This is the multiplicativity of the determinant, a key fact from linear algebra. The kernel of this map is \\(SL_n(\\mathbb{R})\\), the special linear group of matrices with determinant 1.</p>

<h3>Example 2: The Sign Homomorphism</h3>
<p>The map \\(\\text{sgn}: S_n \\to \\{\\pm 1\\}\\) sends each permutation to its sign (\\(+1\\) for even permutations, \\(-1\\) for odd). Since the sign of a product of permutations equals the product of their signs,</p>
\\[\\text{sgn}(\\sigma \\tau) = \\text{sgn}(\\sigma) \\cdot \\text{sgn}(\\tau),\\]
<p>this is a homomorphism from \\(S_n\\) to the multiplicative group \\(\\{\\pm 1\\}\\). Its kernel is the alternating group \\(A_n\\).</p>

<h3>Example 3: The Exponential Map</h3>
<p>The map \\(\\exp: (\\mathbb{R}, +) \\to (\\mathbb{R}^+, \\cdot)\\) defined by \\(\\exp(x) = e^x\\) is a homomorphism because</p>
\\[\\exp(x + y) = e^{x+y} = e^x \\cdot e^y = \\exp(x) \\cdot \\exp(y).\\]
<p>This map is actually bijective; its inverse is the logarithm \\(\\ln: (\\mathbb{R}^+, \\cdot) \\to (\\mathbb{R}, +)\\). So \\(\\exp\\) is an <strong>isomorphism</strong>, and the additive group of reals is isomorphic to the multiplicative group of positive reals.</p>

<div class="concept-box">
<h3>Special Types of Homomorphisms</h3>
<ul>
  <li>A <strong>monomorphism</strong> (injective homomorphism) is a homomorphism that is one-to-one.</li>
  <li>An <strong>epimorphism</strong> (surjective homomorphism) is a homomorphism that is onto.</li>
  <li>An <strong>isomorphism</strong> is a bijective homomorphism. We write \\(G \\cong H\\).</li>
  <li>An <strong>endomorphism</strong> is a homomorphism from a group to itself: \\(\\varphi: G \\to G\\).</li>
  <li>An <strong>automorphism</strong> is an isomorphism from a group to itself.</li>
</ul>
</div>

<h3>Example 4: Trivial and Canonical Homomorphisms</h3>
<p>For any groups \\(G\\) and \\(H\\):</p>
<ul>
  <li>The <strong>trivial homomorphism</strong> \\(\\varphi(g) = e_H\\) for all \\(g \\in G\\) is always a homomorphism.</li>
  <li>The <strong>identity map</strong> \\(\\text{id}_G: G \\to G\\) is always an automorphism.</li>
  <li>If \\(N \\trianglelefteq G\\), the <strong>canonical projection</strong> \\(\\pi: G \\to G/N\\) defined by \\(\\pi(g) = gN\\) is a surjective homomorphism with kernel \\(N\\).</li>
</ul>
            `,
            visualizations: [
                {
                    id: 'ch06-viz01',
                    title: 'Homomorphism Visualizer',
                    setup(container) {
                        var canvas = document.createElement('canvas');
                        canvas.width = 580;
                        canvas.height = 380;
                        container.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        // Z_6 -> Z_3 via phi(k) = k mod 3
                        var srcElems = [0, 1, 2, 3, 4, 5];
                        var dstElems = [0, 1, 2];
                        var phi = function(k) { return k % 3; };

                        var colors = ['#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6', '#ec4899'];
                        var dstColors = ['#3b82f6', '#ef4444', '#22c55e'];

                        var hoverIdx = -1;

                        function srcPos(i) {
                            var angle = -Math.PI / 2 + (2 * Math.PI * i) / 6;
                            return { x: 140 + 90 * Math.cos(angle), y: 190 + 90 * Math.sin(angle) };
                        }
                        function dstPos(j) {
                            var angle = -Math.PI / 2 + (2 * Math.PI * j) / 3;
                            return { x: 440 + 70 * Math.cos(angle), y: 190 + 70 * Math.sin(angle) };
                        }

                        function draw() {
                            ctx.clearRect(0, 0, 580, 380);

                            // Labels
                            ctx.fillStyle = '#e2e8f0';
                            ctx.font = 'bold 16px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('G = Z/6Z', 140, 30);
                            ctx.fillText('H = Z/3Z', 440, 30);

                            ctx.font = '13px sans-serif';
                            ctx.fillStyle = '#94a3b8';
                            ctx.fillText('phi(k) = k mod 3', 290, 25);

                            // Draw mapping arrows
                            for (var i = 0; i < 6; i++) {
                                var s = srcPos(i);
                                var d = dstPos(phi(i));
                                var alpha = (hoverIdx === i) ? 1.0 : 0.25;
                                ctx.strokeStyle = 'rgba(148, 163, 184, ' + alpha + ')';
                                ctx.lineWidth = (hoverIdx === i) ? 2.5 : 1;
                                ctx.beginPath();
                                ctx.moveTo(s.x + 18, s.y);
                                ctx.lineTo(d.x - 18, d.y);
                                ctx.stroke();

                                // Arrowhead
                                var dx = d.x - 18 - s.x - 18;
                                var dy = d.y - s.y;
                                var len = Math.sqrt(dx * dx + dy * dy);
                                var ux = dx / len;
                                var uy = dy / len;
                                var ax = d.x - 18;
                                var ay = d.y;
                                ctx.fillStyle = 'rgba(148, 163, 184, ' + alpha + ')';
                                ctx.beginPath();
                                ctx.moveTo(ax, ay);
                                ctx.lineTo(ax - 8 * ux + 4 * uy, ay - 8 * uy - 4 * ux);
                                ctx.lineTo(ax - 8 * ux - 4 * uy, ay - 8 * uy + 4 * ux);
                                ctx.fill();
                            }

                            // Draw source nodes
                            for (var i = 0; i < 6; i++) {
                                var p = srcPos(i);
                                var isKernel = (phi(i) === 0);
                                ctx.beginPath();
                                ctx.arc(p.x, p.y, 16, 0, 2 * Math.PI);
                                ctx.fillStyle = isKernel ? '#1e293b' : '#1e293b';
                                ctx.fill();
                                ctx.strokeStyle = isKernel ? '#f59e0b' : colors[i];
                                ctx.lineWidth = (hoverIdx === i) ? 3 : 2;
                                ctx.stroke();
                                ctx.fillStyle = isKernel ? '#f59e0b' : '#e2e8f0';
                                ctx.font = 'bold 14px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(String(i), p.x, p.y);
                            }

                            // Draw destination nodes
                            for (var j = 0; j < 3; j++) {
                                var p = dstPos(j);
                                ctx.beginPath();
                                ctx.arc(p.x, p.y, 18, 0, 2 * Math.PI);
                                ctx.fillStyle = '#1e293b';
                                ctx.fill();
                                ctx.strokeStyle = dstColors[j];
                                ctx.lineWidth = 2;
                                ctx.stroke();
                                ctx.fillStyle = '#e2e8f0';
                                ctx.font = 'bold 15px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(String(j), p.x, p.y);
                            }

                            // Kernel label
                            ctx.fillStyle = '#f59e0b';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('ker(phi) = {0, 3}', 140, 340);
                            ctx.fillStyle = '#94a3b8';
                            ctx.fillText('Hover over source elements', 290, 365);
                        }

                        canvas.addEventListener('mousemove', function(e) {
                            var rect = canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;
                            hoverIdx = -1;
                            for (var i = 0; i < 6; i++) {
                                var p = srcPos(i);
                                if ((mx - p.x) * (mx - p.x) + (my - p.y) * (my - p.y) < 400) {
                                    hoverIdx = i;
                                    break;
                                }
                            }
                            draw();
                        });

                        canvas.addEventListener('mouseleave', function() {
                            hoverIdx = -1;
                            draw();
                        });

                        draw();
                    }
                },
                {
                    id: 'ch06-viz02',
                    title: 'Homomorphism Property Checker',
                    setup(container) {
                        var canvas = document.createElement('canvas');
                        canvas.width = 580;
                        canvas.height = 360;
                        container.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        // Demonstrate phi(ab) = phi(a)phi(b) in Z_6 -> Z_3
                        var aVal = 0;
                        var bVal = 0;
                        var mod6 = function(x) { return ((x % 6) + 6) % 6; };
                        var mod3 = function(x) { return ((x % 3) + 3) % 3; };
                        var phi = function(k) { return mod3(k); };

                        function drawState() {
                            ctx.clearRect(0, 0, 580, 360);

                            ctx.fillStyle = '#e2e8f0';
                            ctx.font = 'bold 16px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Verifying: phi(a + b) = phi(a) + phi(b)  in Z/6Z -> Z/3Z', 290, 30);

                            var ab = mod6(aVal + bVal);
                            var phiA = phi(aVal);
                            var phiB = phi(bVal);
                            var phiAB = phi(ab);
                            var phiApB = mod3(phiA + phiB);

                            // Left side
                            ctx.fillStyle = '#3b82f6';
                            ctx.font = '15px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('a = ' + aVal + '   (in Z/6Z)', 40, 80);
                            ctx.fillText('b = ' + bVal + '   (in Z/6Z)', 40, 110);
                            ctx.fillText('a + b = ' + aVal + ' + ' + bVal + ' = ' + ab + ' mod 6', 40, 150);
                            ctx.fillStyle = '#22c55e';
                            ctx.fillText('phi(a + b) = phi(' + ab + ') = ' + phiAB, 40, 190);

                            // Right side
                            ctx.fillStyle = '#ef4444';
                            ctx.textAlign = 'left';
                            ctx.fillText('phi(a) = ' + phiA + '   (in Z/3Z)', 320, 80);
                            ctx.fillText('phi(b) = ' + phiB + '   (in Z/3Z)', 320, 110);
                            ctx.fillText('phi(a) + phi(b) = ' + phiA + ' + ' + phiB + ' = ' + phiApB + ' mod 3', 320, 150);
                            ctx.fillStyle = '#22c55e';
                            ctx.fillText('Result: ' + phiApB, 320, 190);

                            // Verdict
                            var match = (phiAB === phiApB);
                            ctx.fillStyle = match ? '#22c55e' : '#ef4444';
                            ctx.font = 'bold 18px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(match ? 'EQUAL -- Homomorphism property holds!' : 'NOT EQUAL -- Something is wrong!', 290, 240);

                            // Buttons
                            ctx.fillStyle = '#334155';
                            ctx.fillRect(100, 280, 80, 35);
                            ctx.fillRect(200, 280, 80, 35);
                            ctx.fillRect(310, 280, 80, 35);
                            ctx.fillRect(410, 280, 80, 35);

                            ctx.fillStyle = '#e2e8f0';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('a - 1', 140, 302);
                            ctx.fillText('a + 1', 240, 302);
                            ctx.fillText('b - 1', 350, 302);
                            ctx.fillText('b + 1', 450, 302);

                            ctx.fillStyle = '#64748b';
                            ctx.font = '12px sans-serif';
                            ctx.fillText('Click buttons to change a and b', 290, 345);
                        }

                        canvas.addEventListener('click', function(e) {
                            var rect = canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;
                            if (my >= 280 && my <= 315) {
                                if (mx >= 100 && mx <= 180) aVal = mod6(aVal - 1);
                                else if (mx >= 200 && mx <= 280) aVal = mod6(aVal + 1);
                                else if (mx >= 310 && mx <= 390) bVal = mod6(bVal - 1);
                                else if (mx >= 410 && mx <= 490) bVal = mod6(bVal + 1);
                            }
                            drawState();
                        });

                        drawState();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch06-ex01',
                    type: 'multiple-choice',
                    question: 'Which of the following maps is a group homomorphism?',
                    options: [
                        'f: Z -> Z defined by f(n) = n + 1 (under addition)',
                        'f: Z -> Z defined by f(n) = 2n (under addition)',
                        'f: Z -> Z defined by f(n) = n^2 (under addition)',
                        'f: R* -> R* defined by f(x) = x + 1 (under multiplication)'
                    ],
                    correct: 1,
                    explanation: 'We need f(a + b) = f(a) + f(b). For f(n) = 2n: f(a + b) = 2(a + b) = 2a + 2b = f(a) + f(b). The map f(n) = n + 1 fails: f(a + b) = a + b + 1, but f(a) + f(b) = a + b + 2. The map f(n) = n^2 fails: f(1 + 1) = 4, but f(1) + f(1) = 2.'
                },
                {
                    id: 'ch06-ex02',
                    type: 'multiple-choice',
                    question: 'Let phi: G -> H be a homomorphism. If g in G has order 12, which of the following is always true about the order of phi(g)?',
                    options: [
                        'ord(phi(g)) = 12',
                        'ord(phi(g)) divides 12',
                        '12 divides ord(phi(g))',
                        'ord(phi(g)) = 1'
                    ],
                    correct: 1,
                    explanation: 'Since g^12 = e_G, we get phi(g)^12 = phi(g^12) = phi(e_G) = e_H. So the order of phi(g) divides 12. It need not equal 12 (consider the trivial homomorphism) and need not be 1 (consider the identity).'
                },
                {
                    id: 'ch06-ex03',
                    type: 'multiple-choice',
                    question: 'The canonical projection pi: Z -> Z/5Z sending n to n mod 5 is a homomorphism. What is pi(17)?',
                    options: [
                        '0',
                        '2',
                        '3',
                        '5'
                    ],
                    correct: 1,
                    explanation: 'pi(17) = 17 mod 5 = 2, since 17 = 3 * 5 + 2.'
                }
            ]
        },

        /* ============================================================
           SECTION 2: Kernels and Images
           ============================================================ */
        {
            id: 'ch06-sec02',
            title: 'Kernels and Images',
            content: `
<h2>Kernels and Images</h2>

<p><strong>Section roadmap.</strong>
We define the two most important subsets associated with a homomorphism: the kernel and the image. We prove that the kernel is always a normal subgroup of the domain, the image is always a subgroup of the codomain, and that injectivity is characterized by a trivial kernel.</p>

<div class="concept-box">
<h3>Definition: Kernel and Image</h3>
<p>Let \\(\\varphi: G \\to H\\) be a homomorphism.</p>
<ul>
  <li>The <strong>kernel</strong> of \\(\\varphi\\) is \\(\\ker(\\varphi) = \\{g \\in G \\mid \\varphi(g) = e_H\\}\\).</li>
  <li>The <strong>image</strong> of \\(\\varphi\\) is \\(\\text{im}(\\varphi) = \\{\\varphi(g) \\mid g \\in G\\} \\subseteq H\\).</li>
</ul>
</div>

<div class="concept-box">
<h3>Theorem: The Kernel is a Normal Subgroup</h3>
<p>If \\(\\varphi: G \\to H\\) is a homomorphism, then \\(\\ker(\\varphi) \\trianglelefteq G\\).</p>
</div>

<p><strong>Proof.</strong></p>
<p><em>Subgroup:</em> Since \\(\\varphi(e_G) = e_H\\), we have \\(e_G \\in \\ker(\\varphi)\\). If \\(a, b \\in \\ker(\\varphi)\\), then \\(\\varphi(ab) = \\varphi(a)\\varphi(b) = e_H \\cdot e_H = e_H\\), so \\(ab \\in \\ker(\\varphi)\\). If \\(a \\in \\ker(\\varphi)\\), then \\(\\varphi(a^{-1}) = \\varphi(a)^{-1} = e_H^{-1} = e_H\\), so \\(a^{-1} \\in \\ker(\\varphi)\\).</p>

<p><em>Normality:</em> For any \\(g \\in G\\) and \\(k \\in \\ker(\\varphi)\\), we have</p>
\\[\\varphi(gkg^{-1}) = \\varphi(g)\\varphi(k)\\varphi(g^{-1}) = \\varphi(g) \\cdot e_H \\cdot \\varphi(g)^{-1} = e_H,\\]
<p>so \\(gkg^{-1} \\in \\ker(\\varphi)\\). Therefore \\(\\ker(\\varphi) \\trianglelefteq G\\). \\(\\square\\)</p>

<div class="concept-box">
<h3>Theorem: The Image is a Subgroup</h3>
<p>If \\(\\varphi: G \\to H\\) is a homomorphism, then \\(\\text{im}(\\varphi) \\le H\\).</p>
</div>

<p><strong>Proof.</strong> Since \\(\\varphi(e_G) = e_H\\), we have \\(e_H \\in \\text{im}(\\varphi)\\). If \\(\\varphi(a), \\varphi(b) \\in \\text{im}(\\varphi)\\), then \\(\\varphi(a)\\varphi(b) = \\varphi(ab) \\in \\text{im}(\\varphi)\\). If \\(\\varphi(a) \\in \\text{im}(\\varphi)\\), then \\(\\varphi(a)^{-1} = \\varphi(a^{-1}) \\in \\text{im}(\\varphi)\\). \\(\\square\\)</p>

<div class="concept-box">
<h3>Theorem: Injectivity Criterion</h3>
<p>A homomorphism \\(\\varphi: G \\to H\\) is injective if and only if \\(\\ker(\\varphi) = \\{e_G\\}\\).</p>
</div>

<p><strong>Proof.</strong></p>
<p>(\\(\\Rightarrow\\)) If \\(\\varphi\\) is injective and \\(\\varphi(g) = e_H = \\varphi(e_G)\\), then \\(g = e_G\\).</p>
<p>(\\(\\Leftarrow\\)) If \\(\\ker(\\varphi) = \\{e_G\\}\\) and \\(\\varphi(a) = \\varphi(b)\\), then \\(\\varphi(ab^{-1}) = \\varphi(a)\\varphi(b)^{-1} = e_H\\), so \\(ab^{-1} \\in \\ker(\\varphi) = \\{e_G\\}\\), giving \\(a = b\\). \\(\\square\\)</p>

<h3>Examples Revisited</h3>
<ul>
  <li>\\(\\ker(\\det) = SL_n(\\mathbb{R})\\), the special linear group. Since \\(\\det\\) is surjective onto \\(\\mathbb{R}^*\\), we have \\(\\text{im}(\\det) = \\mathbb{R}^*\\).</li>
  <li>\\(\\ker(\\text{sgn}) = A_n\\), the alternating group. The image is \\(\\{\\pm 1\\}\\).</li>
  <li>\\(\\ker(\\exp) = \\{0\\}\\) (since \\(e^x = 1\\) only when \\(x = 0\\)), so \\(\\exp\\) is injective. The image is \\(\\mathbb{R}^+\\).</li>
</ul>

<div class="concept-box">
<h3>Preimage of a Subgroup</h3>
<p>If \\(\\varphi: G \\to H\\) is a homomorphism and \\(K \\le H\\), then \\(\\varphi^{-1}(K) = \\{g \\in G \\mid \\varphi(g) \\in K\\} \\le G\\). Moreover, if \\(K \\trianglelefteq H\\), then \\(\\varphi^{-1}(K) \\trianglelefteq G\\).</p>
</div>

<p>This is a powerful tool: pulling back normal subgroups through a homomorphism always yields normal subgroups.</p>
            `,
            visualizations: [
                {
                    id: 'ch06-viz03',
                    title: 'Kernel and Image Diagram',
                    setup(container) {
                        var canvas = document.createElement('canvas');
                        canvas.width = 580;
                        canvas.height = 380;
                        container.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        // Z_12 -> Z_4 via phi(k) = k mod 4
                        var n = 12;
                        var m = 4;
                        var phi = function(k) { return k % m; };

                        function draw() {
                            ctx.clearRect(0, 0, 580, 380);

                            // Draw G ellipse
                            ctx.strokeStyle = '#3b82f6';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.ellipse(150, 190, 120, 160, 0, 0, 2 * Math.PI);
                            ctx.stroke();
                            ctx.fillStyle = '#e2e8f0';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('G = Z/12Z', 150, 25);

                            // Draw H ellipse
                            ctx.strokeStyle = '#22c55e';
                            ctx.beginPath();
                            ctx.ellipse(440, 190, 80, 160, 0, 0, 2 * Math.PI);
                            ctx.stroke();
                            ctx.fillText('H = Z/4Z', 440, 25);

                            // Draw kernel region in G
                            ctx.fillStyle = 'rgba(245, 158, 11, 0.15)';
                            ctx.beginPath();
                            ctx.ellipse(150, 110, 50, 45, 0, 0, 2 * Math.PI);
                            ctx.fill();
                            ctx.strokeStyle = '#f59e0b';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.ellipse(150, 110, 50, 45, 0, 0, 2 * Math.PI);
                            ctx.stroke();
                            ctx.fillStyle = '#f59e0b';
                            ctx.font = '12px sans-serif';
                            ctx.fillText('ker = {0,4,8}', 150, 65);

                            // Place source elements in three rows (by coset of kernel)
                            var srcPositions = [];
                            // kernel elements: 0, 4, 8
                            var kernelElems = [0, 4, 8];
                            var coset1 = [1, 5, 9];
                            var coset2 = [2, 6, 10];
                            var coset3 = [3, 7, 11];
                            var cosets = [kernelElems, coset1, coset2, coset3];
                            var yStarts = [90, 160, 225, 290];

                            for (var c = 0; c < 4; c++) {
                                for (var j = 0; j < 3; j++) {
                                    var elem = cosets[c][j];
                                    var xp = 100 + j * 50;
                                    var yp = yStarts[c];
                                    srcPositions[elem] = { x: xp, y: yp };
                                }
                            }

                            // Destination positions
                            var dstPositions = [];
                            for (var j = 0; j < m; j++) {
                                dstPositions[j] = { x: 440, y: 90 + j * 65 };
                            }

                            // Draw arrows
                            for (var i = 0; i < n; i++) {
                                var sp = srcPositions[i];
                                var dp = dstPositions[phi(i)];
                                ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(sp.x + 12, sp.y);
                                ctx.lineTo(dp.x - 14, dp.y);
                                ctx.stroke();
                            }

                            // Draw source nodes
                            for (var i = 0; i < n; i++) {
                                var p = srcPositions[i];
                                var isKernel = (phi(i) === 0);
                                ctx.beginPath();
                                ctx.arc(p.x, p.y, 12, 0, 2 * Math.PI);
                                ctx.fillStyle = '#1e293b';
                                ctx.fill();
                                ctx.strokeStyle = isKernel ? '#f59e0b' : '#64748b';
                                ctx.lineWidth = 1.5;
                                ctx.stroke();
                                ctx.fillStyle = isKernel ? '#f59e0b' : '#e2e8f0';
                                ctx.font = '11px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(String(i), p.x, p.y);
                            }

                            // Draw destination nodes
                            for (var j = 0; j < m; j++) {
                                var p = dstPositions[j];
                                ctx.beginPath();
                                ctx.arc(p.x, p.y, 14, 0, 2 * Math.PI);
                                ctx.fillStyle = '#1e293b';
                                ctx.fill();
                                ctx.strokeStyle = '#22c55e';
                                ctx.lineWidth = 2;
                                ctx.stroke();
                                ctx.fillStyle = '#e2e8f0';
                                ctx.font = 'bold 13px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(String(j), p.x, p.y);
                            }

                            // Labels for image
                            ctx.fillStyle = '#22c55e';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('im = Z/4Z (surjective)', 440, 365);

                            ctx.fillStyle = '#94a3b8';
                            ctx.font = '12px sans-serif';
                            ctx.fillText('phi: Z/12Z -> Z/4Z,  phi(k) = k mod 4', 290, 375);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch06-ex04',
                    type: 'multiple-choice',
                    question: 'Let phi: Z -> Z/6Z be the canonical projection phi(n) = n mod 6. What is ker(phi)?',
                    options: [
                        '{0}',
                        '6Z = {..., -12, -6, 0, 6, 12, ...}',
                        'Z/6Z',
                        '{0, 1, 2, 3, 4, 5}'
                    ],
                    correct: 1,
                    explanation: 'The kernel consists of all integers n such that n mod 6 = 0, which is the set 6Z = {6k : k in Z}.'
                },
                {
                    id: 'ch06-ex05',
                    type: 'multiple-choice',
                    question: 'A homomorphism phi: G -> H satisfies |ker(phi)| = 1 and |im(phi)| = |G|. This means phi is:',
                    options: [
                        'Surjective but not necessarily injective',
                        'Injective but not necessarily surjective',
                        'An isomorphism from G to H',
                        'An isomorphism from G to im(phi)'
                    ],
                    correct: 3,
                    explanation: 'Since |ker(phi)| = 1, phi is injective. Since |im(phi)| = |G|, phi is a bijection onto its image. So phi is an isomorphism from G to im(phi). It is not necessarily an isomorphism from G to H unless im(phi) = H.'
                },
                {
                    id: 'ch06-ex06',
                    type: 'multiple-choice',
                    question: 'Let phi: S_3 -> Z/2Z be the sign homomorphism. What is |ker(phi)|?',
                    options: [
                        '1',
                        '2',
                        '3',
                        '6'
                    ],
                    correct: 2,
                    explanation: 'The kernel of the sign homomorphism is A_3, the alternating group on 3 elements. |A_3| = |S_3|/2 = 6/2 = 3. The even permutations in S_3 are: e, (1 2 3), and (1 3 2).'
                },
                {
                    id: 'ch06-ex07',
                    type: 'multiple-choice',
                    question: 'If phi: G -> H is a homomorphism with |G| = 20 and |H| = 12, what are the possible values of |ker(phi)|?',
                    options: [
                        '4, 5, 10, or 20',
                        '5, 10, or 20',
                        '1, 2, 4, 5, 10, or 20',
                        '4 or 20'
                    ],
                    correct: 1,
                    explanation: 'By the first isomorphism theorem, G/ker(phi) is isomorphic to im(phi). So |G|/|ker(phi)| = |im(phi)|, which must divide |H| = 12. Thus |G|/|ker(phi)| divides 12, so 20/|ker(phi)| divides 12. The divisors of 20 are 1, 2, 4, 5, 10, 20. We need 20/d | 12: d=1 gives 20 (no), d=2 gives 10 (no), d=4 gives 5 (no, 5 does not divide 12), d=5 gives 4 (yes), d=10 gives 2 (yes), d=20 gives 1 (yes). So |ker(phi)| in {5, 10, 20}.'
                }
            ]
        },

        /* ============================================================
           SECTION 3: The First Isomorphism Theorem
           ============================================================ */
        {
            id: 'ch06-sec03',
            title: 'The First Isomorphism Theorem',
            content: `
<h2>The First Isomorphism Theorem</h2>

<p><strong>Section roadmap.</strong>
We state and prove the First Isomorphism Theorem, arguably the most important theorem in introductory group theory. It tells us that every homomorphism factors through a quotient, and that quotient is isomorphic to the image. We then apply it to several examples.</p>

<div class="concept-box">
<h3>Theorem: First Isomorphism Theorem (FIT)</h3>
<p>Let \\(\\varphi: G \\to H\\) be a group homomorphism. Then:</p>
<ol>
  <li>\\(\\ker(\\varphi) \\trianglelefteq G\\).</li>
  <li>The map \\(\\bar{\\varphi}: G/\\ker(\\varphi) \\to \\text{im}(\\varphi)\\) defined by \\(\\bar{\\varphi}(g\\ker(\\varphi)) = \\varphi(g)\\) is a well-defined isomorphism.</li>
</ol>
<p>In short: \\(G / \\ker(\\varphi) \\cong \\text{im}(\\varphi)\\).</p>
</div>

<p><strong>Proof.</strong></p>
<p>Part (1) was proved in the previous section. For part (2), we must show \\(\\bar{\\varphi}\\) is well-defined, a homomorphism, injective, and surjective.</p>

<p><em>Well-defined:</em> If \\(g_1 \\ker(\\varphi) = g_2 \\ker(\\varphi)\\), then \\(g_2^{-1}g_1 \\in \\ker(\\varphi)\\), so \\(\\varphi(g_2^{-1}g_1) = e_H\\), giving \\(\\varphi(g_1) = \\varphi(g_2)\\). Thus \\(\\bar{\\varphi}(g_1\\ker(\\varphi)) = \\bar{\\varphi}(g_2\\ker(\\varphi))\\).</p>

<p><em>Homomorphism:</em></p>
\\[\\bar{\\varphi}(g_1K \\cdot g_2K) = \\bar{\\varphi}(g_1g_2 K) = \\varphi(g_1g_2) = \\varphi(g_1)\\varphi(g_2) = \\bar{\\varphi}(g_1K) \\cdot \\bar{\\varphi}(g_2K),\\]
<p>where \\(K = \\ker(\\varphi)\\).</p>

<p><em>Injective:</em> If \\(\\bar{\\varphi}(gK) = e_H\\), then \\(\\varphi(g) = e_H\\), so \\(g \\in K\\), giving \\(gK = K = e_{G/K}\\). So \\(\\ker(\\bar{\\varphi})\\) is trivial.</p>

<p><em>Surjective:</em> Every element of \\(\\text{im}(\\varphi)\\) has the form \\(\\varphi(g) = \\bar{\\varphi}(gK)\\). \\(\\square\\)</p>

<div class="env-block intuition">
<strong>Intuition.</strong> The First Isomorphism Theorem says that every surjective homomorphism is essentially a quotient map. You can always factor a homomorphism \\(\\varphi: G \\to H\\) as a projection \\(G \\twoheadrightarrow G/\\ker(\\varphi)\\) followed by an isomorphism \\(G/\\ker(\\varphi) \\xrightarrow{\\sim} \\text{im}(\\varphi)\\) followed by the inclusion \\(\\text{im}(\\varphi) \\hookrightarrow H\\).
</div>

<h3>Application 1: Quotient by the Kernel of det</h3>
<p>Applying the FIT to \\(\\det: GL_n(\\mathbb{R}) \\to \\mathbb{R}^*\\):</p>
\\[GL_n(\\mathbb{R}) / SL_n(\\mathbb{R}) \\cong \\mathbb{R}^*.\\]
<p>Every nonzero real number is a determinant of some invertible matrix, and two matrices are in the same coset of \\(SL_n\\) if and only if they have the same determinant.</p>

<h3>Application 2: Quotient by the Kernel of sgn</h3>
<p>Applying the FIT to \\(\\text{sgn}: S_n \\to \\{\\pm 1\\}\\):</p>
\\[S_n / A_n \\cong \\{\\pm 1\\} \\cong \\mathbb{Z}/2\\mathbb{Z}.\\]
<p>So the quotient of the symmetric group by the alternating group is always the cyclic group of order 2.</p>

<h3>Application 3: A Quotient of Z</h3>
<p>Consider \\(\\varphi: \\mathbb{Z} \\to \\mathbb{Z}/n\\mathbb{Z}\\) defined by \\(\\varphi(k) = k \\bmod n\\). This is a surjective homomorphism with \\(\\ker(\\varphi) = n\\mathbb{Z}\\). The FIT gives:</p>
\\[\\mathbb{Z}/n\\mathbb{Z} \\cong \\mathbb{Z}/n\\mathbb{Z},\\]
<p>which is tautological but illustrates the general pattern: the quotient by \\(n\\mathbb{Z}\\) produces the cyclic group of order \\(n\\).</p>

<h3>Application 4: Surjection from Z to any Cyclic Group</h3>
<p>Every cyclic group of order \\(n\\) is isomorphic to \\(\\mathbb{Z}/n\\mathbb{Z}\\). Indeed, if \\(G = \\langle g \\rangle\\) has order \\(n\\), the map \\(\\varphi: \\mathbb{Z} \\to G\\) defined by \\(\\varphi(k) = g^k\\) is a surjective homomorphism with kernel \\(n\\mathbb{Z}\\).</p>

<div class="concept-box">
<h3>Counting Formula</h3>
<p>If \\(\\varphi: G \\to H\\) is a homomorphism with \\(G\\) finite, then</p>
\\[|G| = |\\ker(\\varphi)| \\cdot |\\text{im}(\\varphi)|.\\]
<p>This follows immediately from the FIT: \\(|G/\\ker(\\varphi)| = |\\text{im}(\\varphi)|\\), and \\(|G/\\ker(\\varphi)| = |G|/|\\ker(\\varphi)|\\) by Lagrange's theorem.</p>
</div>
            `,
            visualizations: [
                {
                    id: 'ch06-viz04',
                    title: 'First Isomorphism Theorem Diagram',
                    setup(container) {
                        var canvas = document.createElement('canvas');
                        canvas.width = 580;
                        canvas.height = 400;
                        container.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var animT = 0;
                        var animId = null;

                        function draw() {
                            ctx.clearRect(0, 0, 580, 400);

                            // Title
                            ctx.fillStyle = '#e2e8f0';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('First Isomorphism Theorem: G/ker(phi) ~ im(phi)', 290, 25);

                            // G circle
                            ctx.strokeStyle = '#3b82f6';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.ellipse(100, 140, 65, 55, 0, 0, 2 * Math.PI);
                            ctx.stroke();
                            ctx.fillStyle = '#3b82f6';
                            ctx.font = 'bold 18px sans-serif';
                            ctx.fillText('G', 100, 80);

                            // H circle
                            ctx.strokeStyle = '#22c55e';
                            ctx.beginPath();
                            ctx.ellipse(480, 140, 65, 55, 0, 0, 2 * Math.PI);
                            ctx.stroke();
                            ctx.fillStyle = '#22c55e';
                            ctx.fillText('H', 480, 80);

                            // im(phi) inside H
                            ctx.strokeStyle = '#f59e0b';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.ellipse(480, 145, 40, 35, 0, 0, 2 * Math.PI);
                            ctx.stroke();
                            ctx.fillStyle = '#f59e0b';
                            ctx.font = '13px sans-serif';
                            ctx.fillText('im(phi)', 480, 155);

                            // phi arrow G -> H
                            var pulse = 0.5 + 0.5 * Math.sin(animT * 0.03);
                            ctx.strokeStyle = 'rgba(226, 232, 240, ' + (0.5 + 0.3 * pulse) + ')';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(170, 130);
                            ctx.lineTo(410, 130);
                            ctx.stroke();
                            // arrowhead
                            ctx.beginPath();
                            ctx.moveTo(410, 130);
                            ctx.lineTo(400, 124);
                            ctx.lineTo(400, 136);
                            ctx.fillStyle = '#e2e8f0';
                            ctx.fill();
                            ctx.fillStyle = '#e2e8f0';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.fillText('phi', 290, 120);

                            // G/ker(phi) circle
                            ctx.strokeStyle = '#8b5cf6';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.ellipse(100, 310, 65, 55, 0, 0, 2 * Math.PI);
                            ctx.stroke();
                            ctx.fillStyle = '#8b5cf6';
                            ctx.font = 'bold 16px sans-serif';
                            ctx.fillText('G/ker(phi)', 100, 310);

                            // pi arrow G -> G/ker
                            ctx.strokeStyle = '#94a3b8';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(100, 200);
                            ctx.lineTo(100, 250);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(100, 250);
                            ctx.lineTo(94, 240);
                            ctx.lineTo(106, 240);
                            ctx.fillStyle = '#94a3b8';
                            ctx.fill();
                            ctx.font = '13px sans-serif';
                            ctx.fillStyle = '#94a3b8';
                            ctx.textAlign = 'right';
                            ctx.fillText('pi', 90, 230);

                            // phi-bar arrow G/ker -> im(phi)
                            ctx.strokeStyle = '#ef4444';
                            ctx.lineWidth = 2.5;
                            ctx.setLineDash([]);
                            ctx.beginPath();
                            ctx.moveTo(170, 300);
                            ctx.lineTo(435, 170);
                            ctx.stroke();
                            // arrowhead
                            var dx = 435 - 170;
                            var dy = 170 - 300;
                            var len = Math.sqrt(dx * dx + dy * dy);
                            var ux = dx / len;
                            var uy = dy / len;
                            ctx.beginPath();
                            ctx.moveTo(435, 170);
                            ctx.lineTo(435 - 10 * ux + 5 * uy, 170 - 10 * uy - 5 * ux);
                            ctx.lineTo(435 - 10 * ux - 5 * uy, 170 - 10 * uy + 5 * ux);
                            ctx.fillStyle = '#ef4444';
                            ctx.fill();
                            ctx.textAlign = 'center';
                            ctx.fillStyle = '#ef4444';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.fillText('phi-bar (isomorphism)', 310, 260);

                            // Inclusion arrow im(phi) -> H
                            ctx.fillStyle = '#94a3b8';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('inclusion', 480, 185);

                            // Legend
                            ctx.fillStyle = '#64748b';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('phi = inclusion  o  phi-bar  o  pi', 290, 390);

                            animT++;
                        }

                        function animate() {
                            draw();
                            animId = requestAnimationFrame(animate);
                        }

                        animate();

                        container._cleanup = function() {
                            if (animId) cancelAnimationFrame(animId);
                        };
                    }
                },
                {
                    id: 'ch06-viz05',
                    title: 'FIT for Z/12Z -> Z/4Z',
                    setup(container) {
                        var canvas = document.createElement('canvas');
                        canvas.width = 580;
                        canvas.height = 380;
                        container.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        var cosetColors = ['#3b82f6', '#ef4444', '#22c55e', '#f59e0b'];

                        function draw() {
                            ctx.clearRect(0, 0, 580, 380);

                            ctx.fillStyle = '#e2e8f0';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('FIT: Z/12Z  ->  Z/4Z   with ker = 3Z/12Z = {0,3,6,9}', 290, 25);

                            // Draw Z/12Z as a clock
                            ctx.fillStyle = '#94a3b8';
                            ctx.font = '13px sans-serif';
                            ctx.fillText('Z/12Z', 150, 55);

                            for (var i = 0; i < 12; i++) {
                                var angle = -Math.PI / 2 + (2 * Math.PI * i) / 12;
                                var x = 150 + 95 * Math.cos(angle);
                                var y = 200 + 95 * Math.sin(angle);
                                var coset = i % 4;

                                ctx.beginPath();
                                ctx.arc(x, y, 15, 0, 2 * Math.PI);
                                ctx.fillStyle = '#0f172a';
                                ctx.fill();
                                ctx.strokeStyle = cosetColors[coset];
                                ctx.lineWidth = 2;
                                ctx.stroke();

                                ctx.fillStyle = cosetColors[coset];
                                ctx.font = 'bold 13px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(String(i), x, y);
                            }

                            // Draw quotient G/ker in the middle
                            ctx.fillStyle = '#94a3b8';
                            ctx.font = '13px sans-serif';
                            ctx.textBaseline = 'alphabetic';
                            ctx.fillText('Z/12Z / ker', 350, 55);

                            var cosetLabels = ['{0,4,8}', '{1,5,9}', '{2,6,10}', '{3,7,11}'];
                            for (var j = 0; j < 4; j++) {
                                var cy = 110 + j * 65;
                                ctx.fillStyle = '#0f172a';
                                ctx.fillRect(300, cy - 18, 100, 36);
                                ctx.strokeStyle = cosetColors[j];
                                ctx.lineWidth = 2;
                                ctx.strokeRect(300, cy - 18, 100, 36);
                                ctx.fillStyle = cosetColors[j];
                                ctx.font = '12px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(cosetLabels[j], 350, cy);
                            }

                            // Draw Z/4Z on the right
                            ctx.fillStyle = '#94a3b8';
                            ctx.font = '13px sans-serif';
                            ctx.textBaseline = 'alphabetic';
                            ctx.fillText('Z/4Z', 510, 55);

                            for (var k = 0; k < 4; k++) {
                                var cy = 110 + k * 65;
                                ctx.beginPath();
                                ctx.arc(510, cy, 18, 0, 2 * Math.PI);
                                ctx.fillStyle = '#0f172a';
                                ctx.fill();
                                ctx.strokeStyle = cosetColors[k];
                                ctx.lineWidth = 2;
                                ctx.stroke();
                                ctx.fillStyle = cosetColors[k];
                                ctx.font = 'bold 15px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(String(k), 510, cy);
                            }

                            // Isomorphism arrows from cosets to Z/4Z
                            for (var j = 0; j < 4; j++) {
                                var cy = 110 + j * 65;
                                ctx.strokeStyle = cosetColors[j];
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                ctx.moveTo(405, cy);
                                ctx.lineTo(488, cy);
                                ctx.stroke();
                                ctx.beginPath();
                                ctx.moveTo(488, cy);
                                ctx.lineTo(480, cy - 4);
                                ctx.lineTo(480, cy + 4);
                                ctx.fillStyle = cosetColors[j];
                                ctx.fill();
                            }

                            // Isomorphism label
                            ctx.fillStyle = '#ef4444';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textBaseline = 'alphabetic';
                            ctx.fillText('isomorphism', 450, 365);
                            ctx.fillStyle = '#64748b';
                            ctx.font = '12px sans-serif';
                            ctx.fillText('Same color = same coset = same image under phi', 290, 375);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch06-ex08',
                    type: 'multiple-choice',
                    question: 'By the First Isomorphism Theorem, what is GL_2(R)/SL_2(R) isomorphic to?',
                    options: [
                        'Z/2Z',
                        'R (the additive group of reals)',
                        'R* (the multiplicative group of nonzero reals)',
                        'SL_2(R)'
                    ],
                    correct: 2,
                    explanation: 'det: GL_2(R) -> R* is a surjective homomorphism with kernel SL_2(R). By the FIT, GL_2(R)/SL_2(R) is isomorphic to im(det) = R*.'
                },
                {
                    id: 'ch06-ex09',
                    type: 'multiple-choice',
                    question: 'Let phi: Z -> Z/10Z be the canonical projection. By the FIT, Z/ker(phi) is isomorphic to which group?',
                    options: [
                        'Z',
                        'Z/10Z',
                        '10Z',
                        'Z/5Z'
                    ],
                    correct: 1,
                    explanation: 'ker(phi) = 10Z and im(phi) = Z/10Z. By the FIT, Z/10Z (which equals Z/ker(phi)) is isomorphic to im(phi) = Z/10Z.'
                },
                {
                    id: 'ch06-ex10',
                    type: 'multiple-choice',
                    question: 'Let phi: Z/12Z -> Z/4Z be defined by phi(k) = k mod 4. What is |ker(phi)|?',
                    options: [
                        '2',
                        '3',
                        '4',
                        '6'
                    ],
                    correct: 1,
                    explanation: 'ker(phi) = {k in Z/12Z : k mod 4 = 0} = {0, 4, 8}, so |ker(phi)| = 3. Check: |Z/12Z| = |ker(phi)| * |im(phi)| = 3 * 4 = 12.'
                }
            ]
        },

        /* ============================================================
           SECTION 4: The Second and Third Isomorphism Theorems
           ============================================================ */
        {
            id: 'ch06-sec04',
            title: 'The Second and Third Isomorphism Theorems',
            content: `
<h2>The Second and Third Isomorphism Theorems</h2>

<p><strong>Section roadmap.</strong>
We build on the First Isomorphism Theorem to prove two further structural results. The Second Isomorphism Theorem (the "Diamond" or "Parallelogram" theorem) relates a subgroup and a normal subgroup. The Third Isomorphism Theorem tells us how quotients of quotients work.</p>

<div class="concept-box">
<h3>Theorem: Second Isomorphism Theorem (Diamond Theorem)</h3>
<p>Let \\(G\\) be a group, \\(H \\le G\\), and \\(N \\trianglelefteq G\\). Then:</p>
<ol>
  <li>\\(HN = \\{hn : h \\in H, n \\in N\\}\\) is a subgroup of \\(G\\).</li>
  <li>\\(H \\cap N \\trianglelefteq H\\).</li>
  <li>\\(H / (H \\cap N) \\cong HN / N\\).</li>
</ol>
</div>

<p><strong>Proof sketch.</strong></p>
<p>(1) Since \\(N\\) is normal, \\(HN = NH\\), so the product \\(HN\\) is closed under multiplication and inverses.</p>

<p>(2) and (3): Define \\(\\varphi: H \\to HN/N\\) by \\(\\varphi(h) = hN\\). This is a homomorphism because \\(\\varphi(h_1 h_2) = h_1 h_2 N = (h_1 N)(h_2 N) = \\varphi(h_1)\\varphi(h_2)\\).</p>

<p><em>Surjective:</em> Every coset in \\(HN/N\\) has the form \\(hnN = hN = \\varphi(h)\\) for some \\(h \\in H\\) (since \\(n \\in N\\)).</p>

<p><em>Kernel:</em> \\(\\ker(\\varphi) = \\{h \\in H : hN = N\\} = \\{h \\in H : h \\in N\\} = H \\cap N\\).</p>

<p>By the First Isomorphism Theorem, \\(H/(H \\cap N) \\cong HN/N\\), and \\(H \\cap N \\trianglelefteq H\\). \\(\\square\\)</p>

<div class="env-block intuition">
<strong>Why "Diamond"?</strong> Draw the subgroup lattice: \\(HN\\) sits on top, \\(H\\) and \\(N\\) in the middle, and \\(H \\cap N\\) at the bottom, forming a diamond shape. The theorem says the "left side" \\(H/(H \\cap N)\\) is isomorphic to the "right side" \\(HN/N\\).
</div>

<div class="concept-box">
<h3>Theorem: Third Isomorphism Theorem</h3>
<p>Let \\(G\\) be a group and \\(N \\trianglelefteq G\\), \\(M \\trianglelefteq G\\) with \\(N \\le M\\). Then:</p>
<ol>
  <li>\\(M/N \\trianglelefteq G/N\\).</li>
  <li>\\((G/N) \\,/\\, (M/N) \\cong G/M\\).</li>
</ol>
<p>Informally: "quotient of a quotient is a quotient." You can cancel \\(N\\) from the numerator and denominator.</p>
</div>

<p><strong>Proof.</strong> Define \\(\\varphi: G/N \\to G/M\\) by \\(\\varphi(gN) = gM\\).</p>

<p><em>Well-defined:</em> If \\(g_1N = g_2N\\), then \\(g_2^{-1}g_1 \\in N \\subseteq M\\), so \\(g_1M = g_2M\\).</p>

<p><em>Homomorphism:</em> \\(\\varphi(g_1N \\cdot g_2N) = \\varphi(g_1g_2 N) = g_1g_2 M = (g_1M)(g_2M) = \\varphi(g_1N)\\varphi(g_2N)\\).</p>

<p><em>Surjective:</em> For any \\(gM \\in G/M\\), we have \\(\\varphi(gN) = gM\\).</p>

<p><em>Kernel:</em> \\(\\ker(\\varphi) = \\{gN : gM = M\\} = \\{gN : g \\in M\\} = M/N\\).</p>

<p>By the First Isomorphism Theorem, \\((G/N)/(M/N) \\cong G/M\\). \\(\\square\\)</p>

<h3>Example: Third Isomorphism Theorem with Z</h3>
<p>Let \\(G = \\mathbb{Z}\\), \\(N = 12\\mathbb{Z}\\), \\(M = 4\\mathbb{Z}\\). Then \\(N \\le M\\) (since \\(12\\mathbb{Z} \\subseteq 4\\mathbb{Z}\\)), and:</p>
\\[(\\mathbb{Z}/12\\mathbb{Z}) \\,/\\, (4\\mathbb{Z}/12\\mathbb{Z}) \\cong \\mathbb{Z}/4\\mathbb{Z}.\\]
<p>Here \\(4\\mathbb{Z}/12\\mathbb{Z} = \\{0, 4, 8\\}\\) inside \\(\\mathbb{Z}/12\\mathbb{Z}\\), and the quotient has \\(12/4 = 3\\)... wait, let us recount. \\(|\\mathbb{Z}/12\\mathbb{Z}| = 12\\), \\(|4\\mathbb{Z}/12\\mathbb{Z}| = 3\\), so the quotient has order \\(12/3 = 4\\), isomorphic to \\(\\mathbb{Z}/4\\mathbb{Z}\\). Correct.</p>

<div class="concept-box">
<h3>The Lattice Isomorphism Theorem (Correspondence Theorem)</h3>
<p>Let \\(N \\trianglelefteq G\\). There is a bijection between:</p>
<ul>
  <li>subgroups of \\(G\\) that contain \\(N\\), and</li>
  <li>subgroups of \\(G/N\\),</li>
</ul>
<p>given by \\(H \\mapsto H/N\\) (with \\(N \\le H \\le G\\)). This bijection preserves normality, intersections, and joins. It is sometimes called the "Fourth Isomorphism Theorem."</p>
</div>

<p>This theorem is extremely useful for understanding the structure of quotient groups. It tells us that the subgroup lattice of \\(G/N\\) is exactly the part of the subgroup lattice of \\(G\\) that lies above \\(N\\).</p>
            `,
            visualizations: [
                {
                    id: 'ch06-viz06',
                    title: 'Diamond (Second) Isomorphism Theorem',
                    setup(container) {
                        var canvas = document.createElement('canvas');
                        canvas.width = 580;
                        canvas.height = 400;
                        container.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        function draw() {
                            ctx.clearRect(0, 0, 580, 400);

                            ctx.fillStyle = '#e2e8f0';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Second Isomorphism Theorem (Diamond Diagram)', 290, 25);

                            // Diamond vertices
                            var top = { x: 290, y: 80, label: 'HN' };
                            var left = { x: 150, y: 190, label: 'H' };
                            var right = { x: 430, y: 190, label: 'N' };
                            var bottom = { x: 290, y: 300, label: 'H \\u2229 N' };

                            // Draw edges
                            ctx.strokeStyle = '#64748b';
                            ctx.lineWidth = 2;
                            // top-left
                            ctx.beginPath();
                            ctx.moveTo(top.x, top.y + 20);
                            ctx.lineTo(left.x, left.y - 20);
                            ctx.stroke();
                            // top-right
                            ctx.beginPath();
                            ctx.moveTo(top.x, top.y + 20);
                            ctx.lineTo(right.x, right.y - 20);
                            ctx.stroke();
                            // left-bottom
                            ctx.beginPath();
                            ctx.moveTo(left.x, left.y + 20);
                            ctx.lineTo(bottom.x, bottom.y - 20);
                            ctx.stroke();
                            // right-bottom
                            ctx.beginPath();
                            ctx.moveTo(right.x, right.y + 20);
                            ctx.lineTo(bottom.x, bottom.y - 20);
                            ctx.stroke();

                            // Draw nodes
                            var nodes = [top, left, right, bottom];
                            var nodeColors = ['#8b5cf6', '#3b82f6', '#22c55e', '#f59e0b'];
                            for (var i = 0; i < 4; i++) {
                                var n = nodes[i];
                                ctx.beginPath();
                                ctx.arc(n.x, n.y, 18, 0, 2 * Math.PI);
                                ctx.fillStyle = '#0f172a';
                                ctx.fill();
                                ctx.strokeStyle = nodeColors[i];
                                ctx.lineWidth = 2.5;
                                ctx.stroke();
                                ctx.fillStyle = nodeColors[i];
                                ctx.font = 'bold 14px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(n.label, n.x, n.y);
                            }

                            // Edge labels
                            ctx.font = '13px sans-serif';
                            ctx.textBaseline = 'alphabetic';

                            // Left edge: [HN : H]
                            ctx.fillStyle = '#3b82f6';
                            ctx.textAlign = 'right';
                            ctx.fillText('[HN : H]', 200, 130);

                            // Right edge: [HN : N] = |HN/N|
                            ctx.fillStyle = '#22c55e';
                            ctx.textAlign = 'left';
                            ctx.fillText('[HN : N]', 380, 130);

                            // Left-bottom: [H : H cap N]
                            ctx.fillStyle = '#3b82f6';
                            ctx.textAlign = 'right';
                            ctx.fillText('[H : H\\u2229N]', 195, 260);

                            // Right-bottom: [N : H cap N]
                            ctx.fillStyle = '#22c55e';
                            ctx.textAlign = 'left';
                            ctx.fillText('[N : H\\u2229N]', 385, 260);

                            // Isomorphism annotation
                            ctx.fillStyle = '#ef4444';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('H / (H \\u2229 N)  \\u2245  HN / N', 290, 355);

                            ctx.fillStyle = '#94a3b8';
                            ctx.font = '12px sans-serif';
                            ctx.fillText('Left side index = Right side index', 290, 380);

                            // Normal subgroup indicators
                            ctx.fillStyle = '#22c55e';
                            ctx.font = '11px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('(N normal in G)', 455, 210);
                            ctx.fillStyle = '#f59e0b';
                            ctx.fillText('(H\\u2229N normal in H)', 310, 318);
                        }

                        draw();
                    }
                },
                {
                    id: 'ch06-viz07',
                    title: 'Third Isomorphism Theorem: Quotient of Quotient',
                    setup(container) {
                        var canvas = document.createElement('canvas');
                        canvas.width = 580;
                        canvas.height = 380;
                        container.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        // Example: G = Z/12Z, M = <4> = {0,4,8}, N = <2> = {0,2,4,6,8,10}
                        // Actually let's use G=Z, N=12Z, M=4Z for clarity
                        // (G/N)/(M/N) = (Z/12Z)/(4Z/12Z) ~ Z/4Z

                        function draw() {
                            ctx.clearRect(0, 0, 580, 380);

                            ctx.fillStyle = '#e2e8f0';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Third Isomorphism Theorem: (G/N) / (M/N) ~ G/M', 290, 25);

                            // Draw nested boxes: G contains M contains N
                            // G box
                            ctx.strokeStyle = '#3b82f6';
                            ctx.lineWidth = 2;
                            ctx.strokeRect(30, 60, 220, 290);
                            ctx.fillStyle = '#3b82f6';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('G = Z', 40, 55);

                            // M box inside G
                            ctx.strokeStyle = '#f59e0b';
                            ctx.strokeRect(50, 90, 180, 170);
                            ctx.fillStyle = '#f59e0b';
                            ctx.fillText('M = 4Z', 60, 88);

                            // N box inside M
                            ctx.strokeStyle = '#ef4444';
                            ctx.strokeRect(70, 120, 140, 80);
                            ctx.fillStyle = '#ef4444';
                            ctx.fillText('N = 12Z', 80, 118);

                            // Elements inside N
                            ctx.fillStyle = '#ef4444';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('...,-12, 0, 12,...', 140, 160);

                            // Elements in M but not N
                            ctx.fillStyle = '#f59e0b';
                            ctx.fillText('4, 8, -4, -8,...', 140, 230);

                            // Elements in G but not M
                            ctx.fillStyle = '#3b82f6';
                            ctx.fillText('1, 2, 3, 5,...', 140, 325);

                            // Arrow to quotients
                            ctx.strokeStyle = '#94a3b8';
                            ctx.lineWidth = 1.5;
                            ctx.beginPath();
                            ctx.moveTo(260, 200);
                            ctx.lineTo(310, 200);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(310, 200);
                            ctx.lineTo(303, 195);
                            ctx.lineTo(303, 205);
                            ctx.fillStyle = '#94a3b8';
                            ctx.fill();

                            // Quotient column: G/N
                            ctx.strokeStyle = '#8b5cf6';
                            ctx.lineWidth = 2;
                            ctx.strokeRect(320, 60, 100, 290);
                            ctx.fillStyle = '#8b5cf6';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('G/N = Z/12Z', 370, 55);

                            // M/N inside G/N
                            ctx.strokeStyle = '#f59e0b';
                            ctx.strokeRect(330, 80, 80, 80);
                            ctx.fillStyle = '#f59e0b';
                            ctx.font = '12px sans-serif';
                            ctx.fillText('M/N', 370, 98);
                            ctx.fillText('{0,4,8}', 370, 118);
                            ctx.fillText('(order 3)', 370, 138);

                            // Remaining cosets
                            ctx.fillStyle = '#8b5cf6';
                            ctx.font = '11px sans-serif';
                            var labels = ['1+N', '2+N', '3+N', '5+N', '6+N', '7+N', '9+N', '10+N', '11+N'];
                            for (var i = 0; i < labels.length; i++) {
                                ctx.fillText(labels[i], 370, 175 + i * 18);
                            }

                            // Final quotient
                            ctx.strokeStyle = '#22c55e';
                            ctx.lineWidth = 2;

                            ctx.beginPath();
                            ctx.moveTo(430, 200);
                            ctx.lineTo(470, 200);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(470, 200);
                            ctx.lineTo(463, 195);
                            ctx.lineTo(463, 205);
                            ctx.fillStyle = '#94a3b8';
                            ctx.fill();

                            ctx.strokeRect(480, 100, 90, 200);
                            ctx.fillStyle = '#22c55e';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.fillText('G/M', 525, 95);
                            ctx.fillText('= Z/4Z', 525, 115);

                            ctx.font = '14px sans-serif';
                            var gm = ['0+M', '1+M', '2+M', '3+M'];
                            for (var k = 0; k < 4; k++) {
                                ctx.fillText(gm[k], 525, 160 + k * 40);
                            }

                            ctx.fillStyle = '#64748b';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('(Z/12Z) / ({0,4,8})  ~  Z/4Z', 290, 370);
                        }

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch06-ex11',
                    type: 'multiple-choice',
                    question: 'In S_4, let H = {e, (1 2)(3 4), (1 3)(2 4), (1 4)(2 3)} (the Klein four-group) and N = A_4. By the Second Isomorphism Theorem, H/(H cap N) is isomorphic to HN/N. Since H is a subgroup of A_4, what is HN?',
                    options: [
                        'H itself',
                        'A_4',
                        'S_4',
                        'The trivial group'
                    ],
                    correct: 1,
                    explanation: 'Since H is a subgroup of A_4 = N, we have HN = N = A_4. Also H cap N = H (since H is contained in N). So H/H ~ A_4/A_4, both trivial, which is consistent.'
                },
                {
                    id: 'ch06-ex12',
                    type: 'multiple-choice',
                    question: 'By the Third Isomorphism Theorem with G = Z, N = 30Z, M = 6Z: what is (Z/30Z)/(6Z/30Z) isomorphic to?',
                    options: [
                        'Z/5Z',
                        'Z/6Z',
                        'Z/30Z',
                        'Z/36Z'
                    ],
                    correct: 1,
                    explanation: 'By the Third Isomorphism Theorem, (G/N)/(M/N) is isomorphic to G/M = Z/6Z. We can verify: |Z/30Z| = 30, |6Z/30Z| = 5 (elements {0,6,12,18,24}), so the quotient has order 30/5 = 6.'
                },
                {
                    id: 'ch06-ex13',
                    type: 'multiple-choice',
                    question: 'The Lattice Isomorphism Theorem (Correspondence Theorem) says subgroups of G/N correspond to:',
                    options: [
                        'All subgroups of G',
                        'Subgroups of G that contain N',
                        'Normal subgroups of G',
                        'Subgroups of N'
                    ],
                    correct: 1,
                    explanation: 'The correspondence is between subgroups of G/N and subgroups of G that contain N, via the map H -> H/N. A subgroup of G that does not contain N does not give a well-defined "quotient by N."'
                }
            ]
        },

        /* ============================================================
           SECTION 5: Automorphisms
           ============================================================ */
        {
            id: 'ch06-sec05',
            title: 'Automorphisms',
            content: `
<h2>Automorphisms</h2>

<p><strong>Section roadmap.</strong>
We study automorphisms (isomorphisms from a group to itself), inner automorphisms, and the fundamental relationship \\(\\text{Inn}(G) \\cong G/Z(G)\\).</p>

<div class="concept-box">
<h3>Definition: Automorphism Group</h3>
<p>An <strong>automorphism</strong> of a group \\(G\\) is an isomorphism \\(\\varphi: G \\to G\\). The set of all automorphisms of \\(G\\), denoted \\(\\text{Aut}(G)\\), forms a group under composition. The identity element is \\(\\text{id}_G\\), and the inverse of \\(\\varphi\\) is \\(\\varphi^{-1}\\).</p>
</div>

<h3>Example: Aut(Z/nZ)</h3>
<p>An automorphism of \\(\\mathbb{Z}/n\\mathbb{Z}\\) is determined by where it sends the generator \\(1\\). If \\(\\varphi(1) = k\\), then \\(\\varphi\\) is an automorphism if and only if \\(k\\) generates \\(\\mathbb{Z}/n\\mathbb{Z}\\), which happens if and only if \\(\\gcd(k, n) = 1\\). Therefore:</p>
\\[\\text{Aut}(\\mathbb{Z}/n\\mathbb{Z}) \\cong (\\mathbb{Z}/n\\mathbb{Z})^\\times,\\]
<p>the group of units modulo \\(n\\). In particular, \\(|\\text{Aut}(\\mathbb{Z}/n\\mathbb{Z})| = \\varphi(n)\\), where \\(\\varphi\\) is Euler's totient function.</p>

<p>For example:</p>
<ul>
  <li>\\(\\text{Aut}(\\mathbb{Z}/6\\mathbb{Z}) \\cong (\\mathbb{Z}/6\\mathbb{Z})^\\times = \\{1, 5\\} \\cong \\mathbb{Z}/2\\mathbb{Z}\\).</li>
  <li>\\(\\text{Aut}(\\mathbb{Z}/8\\mathbb{Z}) \\cong (\\mathbb{Z}/8\\mathbb{Z})^\\times = \\{1, 3, 5, 7\\} \\cong \\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/2\\mathbb{Z}\\).</li>
  <li>\\(\\text{Aut}(\\mathbb{Z}/5\\mathbb{Z}) \\cong (\\mathbb{Z}/5\\mathbb{Z})^\\times = \\{1, 2, 3, 4\\} \\cong \\mathbb{Z}/4\\mathbb{Z}\\).</li>
</ul>

<div class="concept-box">
<h3>Definition: Inner Automorphisms</h3>
<p>For \\(g \\in G\\), the <strong>conjugation map</strong> \\(\\iota_g: G \\to G\\) defined by \\(\\iota_g(x) = gxg^{-1}\\) is an automorphism of \\(G\\). It is called an <strong>inner automorphism</strong>. The set of all inner automorphisms is denoted \\(\\text{Inn}(G)\\).</p>
</div>

<p>Let us verify \\(\\iota_g\\) is indeed an automorphism:</p>
<ul>
  <li><em>Homomorphism:</em> \\(\\iota_g(xy) = g(xy)g^{-1} = (gxg^{-1})(gyg^{-1}) = \\iota_g(x)\\iota_g(y)\\).</li>
  <li><em>Bijective:</em> The inverse is \\(\\iota_{g^{-1}}\\), since \\(\\iota_g \\circ \\iota_{g^{-1}} = \\text{id}_G\\).</li>
</ul>

<div class="concept-box">
<h3>Theorem: Inn(G) is Normal in Aut(G)</h3>
<p>\\(\\text{Inn}(G) \\trianglelefteq \\text{Aut}(G)\\).</p>
</div>

<p><strong>Proof.</strong> For any \\(\\alpha \\in \\text{Aut}(G)\\) and \\(\\iota_g \\in \\text{Inn}(G)\\):</p>
\\[(\\alpha \\circ \\iota_g \\circ \\alpha^{-1})(x) = \\alpha(g \\cdot \\alpha^{-1}(x) \\cdot g^{-1}) = \\alpha(g) \\cdot x \\cdot \\alpha(g)^{-1} = \\iota_{\\alpha(g)}(x).\\]
<p>So \\(\\alpha \\circ \\iota_g \\circ \\alpha^{-1} = \\iota_{\\alpha(g)} \\in \\text{Inn}(G)\\). \\(\\square\\)</p>

<p>The quotient \\(\\text{Aut}(G)/\\text{Inn}(G)\\) is called the <strong>outer automorphism group</strong>, denoted \\(\\text{Out}(G)\\).</p>

<div class="concept-box">
<h3>Theorem: Inn(G) is isomorphic to G/Z(G)</h3>
<p>The map \\(\\Phi: G \\to \\text{Aut}(G)\\) defined by \\(\\Phi(g) = \\iota_g\\) is a homomorphism with:</p>
<ul>
  <li>\\(\\text{im}(\\Phi) = \\text{Inn}(G)\\), and</li>
  <li>\\(\\ker(\\Phi) = Z(G)\\) (the center of \\(G\\)).</li>
</ul>
<p>By the First Isomorphism Theorem, \\(G/Z(G) \\cong \\text{Inn}(G)\\).</p>
</div>

<p><strong>Proof.</strong></p>
<p><em>Homomorphism:</em> \\(\\Phi(gh)(x) = \\iota_{gh}(x) = (gh)x(gh)^{-1} = g(hxh^{-1})g^{-1} = \\iota_g(\\iota_h(x)) = (\\Phi(g) \\circ \\Phi(h))(x)\\).</p>

<p><em>Image:</em> By definition, \\(\\text{im}(\\Phi) = \\{\\iota_g : g \\in G\\} = \\text{Inn}(G)\\).</p>

<p><em>Kernel:</em> \\(\\Phi(g) = \\text{id}_G\\) means \\(gxg^{-1} = x\\) for all \\(x \\in G\\), which means \\(g\\) commutes with every element, i.e., \\(g \\in Z(G)\\). \\(\\square\\)</p>

<h3>Consequences</h3>
<ul>
  <li>If \\(G\\) is abelian, then \\(Z(G) = G\\), so \\(\\text{Inn}(G) \\cong G/G = \\{e\\}\\). Every automorphism is outer.</li>
  <li>\\(\\text{Inn}(S_3) \\cong S_3/Z(S_3) = S_3/\\{e\\} \\cong S_3\\), so \\(|\\text{Inn}(S_3)| = 6\\). In fact, \\(\\text{Aut}(S_3) \\cong S_3\\), so \\(\\text{Out}(S_3) = \\{e\\}\\), meaning every automorphism of \\(S_3\\) is inner.</li>
  <li>For \\(G = D_4\\) (the dihedral group of order 8), \\(|Z(D_4)| = 2\\), so \\(|\\text{Inn}(D_4)| = 8/2 = 4\\). One can show \\(|\\text{Aut}(D_4)| = 8\\), so \\(|\\text{Out}(D_4)| = 2\\).</li>
</ul>

<div class="concept-box">
<h3>A Corollary: G/Z(G) Cannot Be Cyclic (Unless Trivial)</h3>
<p>If \\(G/Z(G)\\) is cyclic, then \\(G\\) is abelian (hence \\(G = Z(G)\\) and \\(G/Z(G) = \\{e\\}\\)).</p>
</div>

<p><strong>Proof.</strong> If \\(G/Z(G) = \\langle gZ(G) \\rangle\\), then every element of \\(G\\) has the form \\(g^k z\\) for some \\(k \\in \\mathbb{Z}\\) and \\(z \\in Z(G)\\). For any two elements \\(g^a z_1\\) and \\(g^b z_2\\):</p>
\\[(g^a z_1)(g^b z_2) = g^a g^b z_1 z_2 = g^{a+b} z_1 z_2 = g^b g^a z_2 z_1 = (g^b z_2)(g^a z_1),\\]
<p>since \\(z_1, z_2\\) commute with everything and powers of \\(g\\) commute with each other. So \\(G\\) is abelian. \\(\\square\\)</p>
            `,
            visualizations: [
                {
                    id: 'ch06-viz08',
                    title: 'Automorphism Group Explorer',
                    setup(container) {
                        var canvas = document.createElement('canvas');
                        canvas.width = 580;
                        canvas.height = 400;
                        container.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        // Explore Aut(Z/nZ) for various n
                        var nVal = 6;
                        var maxN = 12;

                        function gcd(a, b) {
                            while (b) { var t = b; b = a % b; a = t; }
                            return a;
                        }

                        function getUnits(n) {
                            var units = [];
                            for (var k = 1; k < n; k++) {
                                if (gcd(k, n) === 1) units.push(k);
                            }
                            return units;
                        }

                        function draw() {
                            ctx.clearRect(0, 0, 580, 400);

                            ctx.fillStyle = '#e2e8f0';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Aut(Z/' + nVal + 'Z) = (Z/' + nVal + 'Z)*', 290, 28);

                            var units = getUnits(nVal);

                            ctx.fillStyle = '#94a3b8';
                            ctx.font = '13px sans-serif';
                            ctx.fillText('|Aut| = phi(' + nVal + ') = ' + units.length, 290, 52);

                            // Draw Z/nZ as a circle
                            ctx.fillStyle = '#64748b';
                            ctx.font = '12px sans-serif';
                            ctx.fillText('Elements of Z/' + nVal + 'Z:', 150, 80);

                            var cx = 150;
                            var cy = 210;
                            var radius = 95;
                            for (var i = 0; i < nVal; i++) {
                                var angle = -Math.PI / 2 + (2 * Math.PI * i) / nVal;
                                var x = cx + radius * Math.cos(angle);
                                var y = cy + radius * Math.sin(angle);
                                var isUnit = (gcd(i, nVal) === 1) || i === 0;

                                ctx.beginPath();
                                ctx.arc(x, y, 14, 0, 2 * Math.PI);
                                ctx.fillStyle = '#0f172a';
                                ctx.fill();
                                ctx.strokeStyle = (i > 0 && gcd(i, nVal) === 1) ? '#22c55e' : '#475569';
                                ctx.lineWidth = 2;
                                ctx.stroke();

                                ctx.fillStyle = (i > 0 && gcd(i, nVal) === 1) ? '#22c55e' : '#94a3b8';
                                ctx.font = 'bold 12px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(String(i), x, y);
                            }

                            // Units list
                            ctx.textBaseline = 'alphabetic';
                            ctx.fillStyle = '#22c55e';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Units (generators): {' + units.join(', ') + '}', 310, 90);

                            // Show the multiplication table of units
                            ctx.fillStyle = '#e2e8f0';
                            ctx.font = 'bold 12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Cayley table of (Z/' + nVal + 'Z)*:', 430, 115);

                            var tableX = 330;
                            var tableY = 130;
                            var cellSize = Math.min(25, 180 / (units.length + 1));

                            // Header row
                            ctx.fillStyle = '#f59e0b';
                            ctx.font = (cellSize > 18 ? '11' : '9') + 'px sans-serif';
                            ctx.fillText('*', tableX, tableY + cellSize / 2 + 3);
                            for (var j = 0; j < units.length; j++) {
                                ctx.fillText(String(units[j]), tableX + (j + 1) * cellSize, tableY + cellSize / 2 + 3);
                            }

                            // Table body
                            for (var i = 0; i < units.length; i++) {
                                ctx.fillStyle = '#f59e0b';
                                ctx.fillText(String(units[i]), tableX, tableY + (i + 1) * cellSize + cellSize / 2 + 3);
                                for (var j = 0; j < units.length; j++) {
                                    var prod = (units[i] * units[j]) % nVal;
                                    ctx.fillStyle = '#cbd5e1';
                                    ctx.fillText(String(prod), tableX + (j + 1) * cellSize, tableY + (i + 1) * cellSize + cellSize / 2 + 3);
                                }
                            }

                            // Navigation buttons
                            ctx.fillStyle = '#334155';
                            ctx.fillRect(350, 355, 60, 30);
                            ctx.fillRect(430, 355, 60, 30);

                            ctx.fillStyle = '#e2e8f0';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('n - 1', 380, 375);
                            ctx.fillText('n + 1', 460, 375);

                            ctx.fillStyle = '#64748b';
                            ctx.font = '11px sans-serif';
                            ctx.fillText('Green nodes = generators (units)', 150, 345);
                        }

                        canvas.addEventListener('click', function(e) {
                            var rect = canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;
                            if (my >= 355 && my <= 385) {
                                if (mx >= 350 && mx <= 410 && nVal > 2) {
                                    nVal--;
                                    draw();
                                } else if (mx >= 430 && mx <= 490 && nVal < maxN) {
                                    nVal++;
                                    draw();
                                }
                            }
                        });

                        draw();
                    }
                },
                {
                    id: 'ch06-viz09',
                    title: 'Inner Automorphisms and the Center',
                    setup(container) {
                        var canvas = document.createElement('canvas');
                        canvas.width = 580;
                        canvas.height = 380;
                        container.appendChild(canvas);
                        var ctx = canvas.getContext('2d');

                        // S_3 example: elements, center, Inn(S_3) ~ S_3/Z(S_3) ~ S_3
                        var elements = ['e', '(12)', '(13)', '(23)', '(123)', '(132)'];
                        var center = ['e'];
                        var selected = 0;

                        // Conjugation table for S_3
                        // iota_g(x) = g x g^{-1}
                        // S_3 = {e, (12), (13), (23), (123), (132)}
                        // index: 0=e, 1=(12), 2=(13), 3=(23), 4=(123), 5=(132)
                        var conjTable = [
                            [0, 1, 2, 3, 4, 5],  // iota_e
                            [0, 1, 3, 2, 5, 4],  // iota_(12): fixes e,(12); swaps (13)<->(23), (123)<->(132)
                            [0, 3, 2, 1, 5, 4],  // iota_(13): fixes e,(13); swaps (12)<->(23), (123)<->(132)
                            [0, 2, 1, 3, 5, 4],  // iota_(23): fixes e,(23); swaps (12)<->(13), (123)<->(132)
                            [0, 3, 1, 2, 4, 5],  // iota_(123): fixes e,(123),(132); permutes (12)->(23)->(13)
                            [0, 2, 3, 1, 4, 5]   // iota_(132): fixes e,(123),(132); permutes (12)->(13)->(23)
                        ];

                        function draw() {
                            ctx.clearRect(0, 0, 580, 380);

                            ctx.fillStyle = '#e2e8f0';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Inner Automorphisms of S_3', 290, 25);
                            ctx.fillStyle = '#94a3b8';
                            ctx.font = '12px sans-serif';
                            ctx.fillText('Z(S_3) = {e},  so Inn(S_3) ~ S_3/{e} ~ S_3  (|Inn| = 6)', 290, 48);

                            // Draw element selection
                            ctx.fillStyle = '#64748b';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Choose g for conjugation by g:', 30, 80);

                            for (var i = 0; i < 6; i++) {
                                var bx = 30 + i * 90;
                                var by = 90;
                                ctx.fillStyle = (i === selected) ? '#3b82f6' : '#1e293b';
                                ctx.fillRect(bx, by, 80, 30);
                                ctx.strokeStyle = (i === selected) ? '#3b82f6' : '#475569';
                                ctx.lineWidth = 1;
                                ctx.strokeRect(bx, by, 80, 30);
                                ctx.fillStyle = '#e2e8f0';
                                ctx.font = '12px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(elements[i], bx + 40, by + 20);
                            }

                            // Show the conjugation action
                            ctx.fillStyle = '#e2e8f0';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Action of iota_' + elements[selected] + ':', 290, 155);

                            // Draw mapping
                            var mapping = conjTable[selected];
                            for (var i = 0; i < 6; i++) {
                                var lx = 80;
                                var rx = 430;
                                var ly = 185 + i * 30;
                                var ry = 185 + mapping[i] * 30;

                                // Source
                                ctx.fillStyle = (i === mapping[i]) ? '#22c55e' : '#e2e8f0';
                                ctx.font = '13px sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText(elements[i], lx + 60, ly + 5);

                                // Destination
                                ctx.textAlign = 'left';
                                ctx.fillText(elements[mapping[i]], rx, ly + 5);

                                // Arrow
                                ctx.strokeStyle = (i === mapping[i]) ? '#22c55e' : '#94a3b8';
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(lx + 70, ly);
                                ctx.lineTo(rx - 10, ly);
                                ctx.stroke();
                                // arrowhead
                                ctx.beginPath();
                                ctx.moveTo(rx - 10, ly);
                                ctx.lineTo(rx - 18, ly - 3);
                                ctx.lineTo(rx - 18, ly + 3);
                                ctx.fillStyle = (i === mapping[i]) ? '#22c55e' : '#94a3b8';
                                ctx.fill();

                                // Arrow label
                                ctx.fillStyle = '#64748b';
                                ctx.font = '10px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('|->', 290, ly + 4);
                            }

                            // Count fixed points
                            var fixed = 0;
                            for (var i = 0; i < 6; i++) {
                                if (mapping[i] === i) fixed++;
                            }
                            ctx.fillStyle = '#22c55e';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Fixed points (green): ' + fixed, 290, 375);
                        }

                        canvas.addEventListener('click', function(e) {
                            var rect = canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;
                            if (my >= 90 && my <= 120) {
                                for (var i = 0; i < 6; i++) {
                                    var bx = 30 + i * 90;
                                    if (mx >= bx && mx <= bx + 80) {
                                        selected = i;
                                        draw();
                                        break;
                                    }
                                }
                            }
                        });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch06-ex14',
                    type: 'multiple-choice',
                    question: 'What is |Aut(Z/7Z)|?',
                    options: [
                        '6',
                        '7',
                        '3',
                        '1'
                    ],
                    correct: 0,
                    explanation: 'Aut(Z/7Z) is isomorphic to (Z/7Z)*, the group of units modulo 7. Since 7 is prime, every nonzero element is a unit, so |(Z/7Z)*| = phi(7) = 6.'
                },
                {
                    id: 'ch06-ex15',
                    type: 'multiple-choice',
                    question: 'Let G be a group with |Z(G)| = 5 and |G| = 20. What is |Inn(G)|?',
                    options: [
                        '4',
                        '5',
                        '15',
                        '20'
                    ],
                    correct: 0,
                    explanation: 'By the theorem Inn(G) ~ G/Z(G), we have |Inn(G)| = |G/Z(G)| = |G|/|Z(G)| = 20/5 = 4.'
                },
                {
                    id: 'ch06-ex16',
                    type: 'multiple-choice',
                    question: 'If G is abelian, what is Inn(G)?',
                    options: [
                        'G itself',
                        'Aut(G)',
                        'The trivial group {id}',
                        'Z(G)'
                    ],
                    correct: 2,
                    explanation: 'If G is abelian, then Z(G) = G, so Inn(G) ~ G/Z(G) = G/G = {e}. Every conjugation is the identity: gxg^{-1} = x for all g, x.'
                },
                {
                    id: 'ch06-ex17',
                    type: 'multiple-choice',
                    question: 'Which statement about Out(G) = Aut(G)/Inn(G) is FALSE?',
                    options: [
                        'Out(S_3) is trivial (every automorphism of S_3 is inner)',
                        'Out(Z/nZ) = Aut(Z/nZ) for all n, since Inn(Z/nZ) is trivial',
                        'Out(G) is always abelian',
                        'If G is abelian, then Out(G) = Aut(G)'
                    ],
                    correct: 2,
                    explanation: 'Out(G) is NOT always abelian. While it happens to be abelian for many small groups, there exist groups G for which Out(G) is nonabelian. The other statements are all correct.'
                }
            ]
        }

    ]
});
