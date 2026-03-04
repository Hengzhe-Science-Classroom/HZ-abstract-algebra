// === Chapter 11: Rings and Ideals ===
window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch11',
    number: 11,
    title: 'Rings and Ideals',
    subtitle: 'Ring definition, examples, ideals, quotient rings',
    sections: [
        // ============================================================
        // SECTION 1: Rings
        // ============================================================
        {
            id: 'ch11-sec01',
            title: 'Rings',
            content: `
<div class="env-block intuition">
    <div class="env-title">From Groups to Rings</div>
    <div class="env-body">
        <p>So far in this course we have studied groups, structures with a single binary operation. But the most familiar algebraic objects (the integers, polynomials, matrices) carry <em>two</em> operations that interact: addition and multiplication. A <strong>ring</strong> is the algebraic structure that captures this interplay. Moving from groups to rings opens the door to the rich theory of factorization, divisibility, and eventually field extensions and Galois theory.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> Define rings, identify the key axioms, and explore a wide collection of examples that will accompany us throughout the rest of the course.</p>

<h2>11.1 The Ring Axioms</h2>

<p>Recall that a group provides a set with one operation satisfying closure, associativity, identity, and inverses. A ring asks for <em>two</em> operations that cooperate via the distributive law.</p>

<div class="env-block definition">
<strong>Definition 11.1.1 (Ring).</strong> A <em>ring</em> is a set \\(R\\) equipped with two binary operations, addition \\(+\\) and multiplication \\(\\cdot\\), satisfying:
<ol>
<li>\\((R, +)\\) is an abelian group (with identity element \\(0_R\\) and additive inverse \\(-a\\) for each \\(a\\)).</li>
<li>Multiplication is associative: \\(a(bc) = (ab)c\\) for all \\(a, b, c \\in R\\).</li>
<li>Distributive laws hold on both sides:
\\[
a(b + c) = ab + ac \\quad \\text{and} \\quad (a + b)c = ac + bc.
\\]</li>
</ol>
</div>

<div class="env-block remark">
<strong>Remark 11.1.2 (Convention).</strong> Different textbooks adopt different conventions. Some authors require every ring to have a multiplicative identity \\(1_R\\); others do not. In this course, <strong>we do not</strong> require \\(1_R\\) by default. When a ring possesses a multiplicative identity, we call it a <em>ring with unity</em> (or a <em>unital ring</em>). When we write "Let \\(R\\) be a ring with \\(1\\)," we mean \\(R\\) has a multiplicative identity.
</div>

<div class="env-block definition">
<strong>Definition 11.1.3.</strong> Let \\(R\\) be a ring.
<ul>
<li>\\(R\\) is <em>commutative</em> if \\(ab = ba\\) for all \\(a, b \\in R\\).</li>
<li>\\(R\\) is a <em>ring with unity</em> if there exists an element \\(1_R \\in R\\) such that \\(1_R \\cdot a = a \\cdot 1_R = a\\) for all \\(a \\in R\\).</li>
</ul>
</div>

<h3>Basic Consequences of the Axioms</h3>

<div class="env-block theorem">
<strong>Proposition 11.1.4.</strong> Let \\(R\\) be a ring. For all \\(a, b \\in R\\):
<ol>
<li>\\(0_R \\cdot a = a \\cdot 0_R = 0_R\\).</li>
<li>\\((-a)b = a(-b) = -(ab)\\).</li>
<li>\\((-a)(-b) = ab\\).</li>
<li>If \\(R\\) has unity, then the multiplicative identity \\(1_R\\) is unique.</li>
</ol>
</div>

<div class="env-block proof">
<strong>Proof.</strong>
(1) We have \\(0_R \\cdot a = (0_R + 0_R) \\cdot a = 0_R \\cdot a + 0_R \\cdot a\\). Cancelling \\(0_R \\cdot a\\) (using the additive group structure) gives \\(0_R \\cdot a = 0_R\\). The right version is analogous.
<br><br>
(2) We compute \\((-a)b + ab = (-a + a)b = 0_R \\cdot b = 0_R\\), so \\((-a)b = -(ab)\\). Similarly \\(a(-b) = -(ab)\\).
<br><br>
(3) By (2), \\((-a)(-b) = -(a(-b)) = -(-(ab)) = ab\\).
<br><br>
(4) If \\(1\\) and \\(1'\\) are both multiplicative identities, then \\(1 = 1 \\cdot 1' = 1'\\). \\(\\square\\)
</div>

<h2>11.1.2 Important Examples</h2>

<p>The power of the ring concept lies in its generality. Here are the main families of examples we will revisit throughout the course.</p>

<div class="env-block example">
<strong>Example 11.1.5 (The integers).</strong> \\((\\mathbb{Z}, +, \\cdot)\\) is a commutative ring with unity \\(1\\). This is the prototypical ring.
</div>

<div class="env-block example">
<strong>Example 11.1.6 (Integers modulo \\(n\\)).</strong> For any positive integer \\(n \\geq 2\\), the set \\(\\mathbb{Z}/n\\mathbb{Z} = \\{\\overline{0}, \\overline{1}, \\ldots, \\overline{n-1}\\}\\) with addition and multiplication modulo \\(n\\) is a commutative ring with unity \\(\\overline{1}\\). When \\(n\\) is prime, this ring is actually a field (every nonzero element has a multiplicative inverse).
</div>

<div class="env-block example">
<strong>Example 11.1.7 (Matrix rings).</strong> The set \\(M_n(R)\\) of all \\(n \\times n\\) matrices with entries from a ring \\(R\\) is a ring under matrix addition and multiplication. When \\(n \\geq 2\\), \\(M_n(R)\\) is <strong>noncommutative</strong> even if \\(R\\) is commutative. The unity is the identity matrix \\(I_n\\).
</div>

<div class="env-block example">
<strong>Example 11.1.8 (Polynomial rings).</strong> Let \\(R\\) be a commutative ring with unity. The polynomial ring \\(R[x] = \\{a_0 + a_1 x + \\cdots + a_n x^n : a_i \\in R, n \\geq 0\\}\\) with the usual addition and multiplication of polynomials is a commutative ring with unity. We will study \\(R[x]\\) in depth in Chapter 13.
</div>

<div class="env-block example">
<strong>Example 11.1.9 (Gaussian integers).</strong> \\(\\mathbb{Z}[i] = \\{a + bi : a, b \\in \\mathbb{Z}\\}\\) with the usual complex addition and multiplication is a commutative ring with unity. It plays a starring role in algebraic number theory.
</div>

<div class="env-block example">
<strong>Example 11.1.10 (The zero ring).</strong> The set \\(\\{0\\}\\) with \\(0 + 0 = 0\\) and \\(0 \\cdot 0 = 0\\) is a ring (the <em>zero ring</em> or <em>trivial ring</em>). Here \\(1_R = 0_R\\). This is the unique ring in which \\(1 = 0\\).
</div>

<div class="env-block example">
<strong>Example 11.1.11 (Function rings).</strong> Let \\(X\\) be any set and \\(R\\) a ring. The set \\(\\mathrm{Fun}(X, R)\\) of all functions \\(f: X \\to R\\) is a ring under pointwise operations:
\\[
(f + g)(x) = f(x) + g(x), \\qquad (fg)(x) = f(x)g(x).
\\]
This ring is commutative if and only if \\(R\\) is commutative.
</div>

<div class="viz-placeholder" data-viz="viz-ring-operation-table"></div>

<div class="env-block remark">
<strong>Remark 11.1.12.</strong> The visualization above lets you explore the addition and multiplication tables for \\(\\mathbb{Z}/n\\mathbb{Z}\\). Notice how the multiplication table reveals structure: rows of zero divisors (when \\(n\\) is composite) stand out, and when \\(n\\) is prime, every nonzero row is a permutation of the nonzero elements.
</div>
`,
            visualizations: [
                {
                    id: 'viz-ring-operation-table',
                    title: 'Operation Tables for \\(\\mathbb{Z}/n\\mathbb{Z}\\)',
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 1 });
                        const canvas = engine.canvas;
                        const ctx = engine.ctx;

                        let n = 6;
                        let showOp = 'mult'; // 'add' or 'mult'

                        VizEngine.createSlider(controls, 'n', 2, 12, n, 1, v => { n = Math.round(v); });
                        VizEngine.createButton(controls, 'Addition', () => { showOp = 'add'; });
                        VizEngine.createButton(controls, 'Multiplication', () => { showOp = 'mult'; });

                        const colors = [
                            '#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51',
                            '#606c38', '#283618', '#dda15e', '#bc6c25', '#6d6875',
                            '#b5838d', '#e5989b', '#ffcdb2'
                        ];

                        engine.onDraw = function() {
                            const W = canvas.width;
                            const H = canvas.height;
                            ctx.clearRect(0, 0, W, H);

                            const cellSize = Math.min(Math.floor((W - 80) / (n + 1)), Math.floor((H - 80) / (n + 1)), 50);
                            const startX = Math.floor((W - cellSize * (n + 1)) / 2);
                            const startY = Math.floor((H - cellSize * (n + 1)) / 2);

                            ctx.font = Math.max(10, Math.min(16, cellSize * 0.45)) + 'px monospace';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';

                            // Title
                            ctx.fillStyle = '#e0e0e0';
                            ctx.font = '16px sans-serif';
                            var opSymbol = showOp === 'add' ? '+' : '\u00d7';
                            ctx.fillText('Z/' + n + 'Z  (' + opSymbol + ')', W / 2, startY - 20);
                            ctx.font = Math.max(10, Math.min(16, cellSize * 0.45)) + 'px monospace';

                            // Header row and column
                            for (var i = 0; i < n; i++) {
                                // Column header
                                ctx.fillStyle = '#aaaaaa';
                                ctx.fillText('' + i, startX + (i + 1) * cellSize + cellSize / 2, startY + cellSize / 2);
                                // Row header
                                ctx.fillText('' + i, startX + cellSize / 2, startY + (i + 1) * cellSize + cellSize / 2);
                            }

                            // Operation symbol in corner
                            ctx.fillStyle = '#ffffff';
                            ctx.fillText(opSymbol, startX + cellSize / 2, startY + cellSize / 2);

                            // Table cells
                            for (var r = 0; r < n; r++) {
                                for (var c = 0; c < n; c++) {
                                    var val;
                                    if (showOp === 'add') {
                                        val = (r + c) % n;
                                    } else {
                                        val = (r * c) % n;
                                    }
                                    var cx = startX + (c + 1) * cellSize;
                                    var cy = startY + (r + 1) * cellSize;

                                    // Cell background
                                    ctx.fillStyle = colors[val % colors.length];
                                    ctx.globalAlpha = 0.5;
                                    ctx.fillRect(cx + 1, cy + 1, cellSize - 2, cellSize - 2);
                                    ctx.globalAlpha = 1.0;

                                    // Cell text
                                    ctx.fillStyle = '#ffffff';
                                    ctx.fillText('' + val, cx + cellSize / 2, cy + cellSize / 2);
                                }
                            }

                            // Grid lines
                            ctx.strokeStyle = '#555555';
                            ctx.lineWidth = 1;
                            for (var k = 0; k <= n + 1; k++) {
                                ctx.beginPath();
                                ctx.moveTo(startX + k * cellSize, startY);
                                ctx.lineTo(startX + k * cellSize, startY + (n + 1) * cellSize);
                                ctx.stroke();
                                ctx.beginPath();
                                ctx.moveTo(startX, startY + k * cellSize);
                                ctx.lineTo(startX + (n + 1) * cellSize, startY + k * cellSize);
                                ctx.stroke();
                            }

                            // Highlight header separator
                            ctx.strokeStyle = '#ffffff';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(startX + cellSize, startY);
                            ctx.lineTo(startX + cellSize, startY + (n + 1) * cellSize);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(startX, startY + cellSize);
                            ctx.lineTo(startX + (n + 1) * cellSize, startY + cellSize);
                            ctx.stroke();
                        };

                        engine.start();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch11-sec01-ex01',
                    type: 'mc',
                    question: 'Which of the following is NOT one of the ring axioms?',
                    options: [
                        '(R, +) is an abelian group',
                        'Multiplication is associative',
                        'Every nonzero element has a multiplicative inverse',
                        'Distributive laws hold on both sides'
                    ],
                    answer: 2,
                    explanation: 'Having multiplicative inverses for all nonzero elements is the axiom of a division ring (or field if commutative), not a general ring. Many rings, such as the integers, have elements without multiplicative inverses.'
                },
                {
                    id: 'ch11-sec01-ex02',
                    type: 'mc',
                    question: 'In the matrix ring \\(M_2(\\mathbb{R})\\), which property fails?',
                    options: [
                        'Associativity of multiplication',
                        'Commutativity of multiplication',
                        'Existence of additive inverses',
                        'Distributive law'
                    ],
                    answer: 1,
                    explanation: 'Matrix multiplication is not commutative in general. For example, if \\(A = \\begin{pmatrix} 1 & 1 \\\\\\\\ 0 & 0 \\end{pmatrix}\\) and \\(B = \\begin{pmatrix} 0 & 0 \\\\\\\\ 1 & 1 \\end{pmatrix}\\), then \\(AB \\neq BA\\).'
                },
                {
                    id: 'ch11-sec01-ex03',
                    type: 'mc',
                    question: 'In any ring \\(R\\), what is \\(0_R \\cdot a\\) for any element \\(a\\)?',
                    options: [
                        'a',
                        '0_R',
                        '1_R',
                        'It depends on the ring'
                    ],
                    answer: 1,
                    explanation: 'By the distributive law, \\(0_R \\cdot a = (0_R + 0_R) \\cdot a = 0_R \\cdot a + 0_R \\cdot a\\). Cancelling gives \\(0_R \\cdot a = 0_R\\). This holds in every ring.'
                },
                {
                    id: 'ch11-sec01-ex04',
                    type: 'mc',
                    question: 'Which of these is a commutative ring with unity?',
                    options: [
                        'M_2(Z) (2x2 integer matrices)',
                        '2Z (even integers under usual operations)',
                        'Z[i] (Gaussian integers)',
                        'The set of 2x2 upper triangular matrices over R'
                    ],
                    answer: 2,
                    explanation: 'The Gaussian integers \\(\\mathbb{Z}[i]\\) form a commutative ring with unity \\(1 = 1 + 0i\\). Matrix rings are noncommutative; \\(2\\mathbb{Z}\\) lacks a multiplicative identity; upper triangular matrices are noncommutative.'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Subrings and Ring Properties
        // ============================================================
        {
            id: 'ch11-sec02',
            title: 'Subrings and Ring Properties',
            content: `
<div class="env-block intuition">
    <div class="env-title">Refining the Ring Concept</div>
    <div class="env-body">
        <p>Just as subgroups are subsets closed under the group operation, <strong>subrings</strong> are subsets of a ring that are themselves rings. Beyond subrings, we classify ring elements by their multiplicative behavior: can they divide zero? Do they have inverses? These distinctions lead to the hierarchy of integral domains and fields.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> Define subrings, identify zero divisors and units, and introduce integral domains and fields as rings satisfying progressively stronger conditions.</p>

<h2>11.2 Subrings</h2>

<div class="env-block definition">
<strong>Definition 11.2.1 (Subring).</strong> Let \\(R\\) be a ring. A nonempty subset \\(S \\subseteq R\\) is a <em>subring</em> of \\(R\\) if \\(S\\) is itself a ring under the operations inherited from \\(R\\).
</div>

<div class="env-block theorem">
<strong>Proposition 11.2.2 (Subring Test).</strong> A nonempty subset \\(S\\) of a ring \\(R\\) is a subring if and only if for all \\(a, b \\in S\\):
<ol>
<li>\\(a - b \\in S\\) (closure under subtraction), and</li>
<li>\\(ab \\in S\\) (closure under multiplication).</li>
</ol>
</div>

<div class="env-block proof">
<strong>Proof.</strong> The forward direction is clear. For the converse, condition (1) guarantees that \\((S, +)\\) is a subgroup of \\((R, +)\\) by the one-step subgroup test. Condition (2) gives closure under multiplication. Associativity and distributivity are inherited from \\(R\\). \\(\\square\\)
</div>

<div class="env-block example">
<strong>Example 11.2.3.</strong> Here are some important subrings:
<ul>
<li>\\(\\mathbb{Z} \\subseteq \\mathbb{Q} \\subseteq \\mathbb{R} \\subseteq \\mathbb{C}\\): each is a subring of the next.</li>
<li>\\(\\mathbb{Z}[i] = \\{a + bi : a, b \\in \\mathbb{Z}\\}\\) is a subring of \\(\\mathbb{C}\\).</li>
<li>\\(n\\mathbb{Z} = \\{nk : k \\in \\mathbb{Z}\\}\\) is a subring of \\(\\mathbb{Z}\\) for any \\(n \\geq 1\\). Note that \\(n\\mathbb{Z}\\) has a unity only when \\(n = 1\\).</li>
<li>The set of upper triangular matrices is a subring of \\(M_n(R)\\).</li>
</ul>
</div>

<h2>11.2.2 Zero Divisors</h2>

<div class="env-block definition">
<strong>Definition 11.2.4 (Zero Divisor).</strong> Let \\(R\\) be a ring. A nonzero element \\(a \\in R\\) is a <em>zero divisor</em> if there exists a nonzero \\(b \\in R\\) such that \\(ab = 0\\) or \\(ba = 0\\).
</div>

<div class="env-block example">
<strong>Example 11.2.5.</strong> In \\(\\mathbb{Z}/6\\mathbb{Z}\\), we have \\(\\overline{2} \\cdot \\overline{3} = \\overline{0}\\), so both \\(\\overline{2}\\) and \\(\\overline{3}\\) are zero divisors. Similarly, \\(\\overline{4} \\cdot \\overline{3} = \\overline{12} = \\overline{0}\\), making \\(\\overline{4}\\) a zero divisor as well. The only nonzero elements that are <em>not</em> zero divisors are \\(\\overline{1}\\) and \\(\\overline{5}\\).
</div>

<div class="viz-placeholder" data-viz="viz-zero-divisor-graph"></div>

<h2>11.2.3 Units</h2>

<div class="env-block definition">
<strong>Definition 11.2.6 (Unit).</strong> Let \\(R\\) be a ring with unity. An element \\(u \\in R\\) is a <em>unit</em> if there exists \\(v \\in R\\) with \\(uv = vu = 1_R\\). The set of all units of \\(R\\) is denoted \\(R^\\times\\) (or \\(U(R)\\)).
</div>

<div class="env-block theorem">
<strong>Proposition 11.2.7.</strong> Let \\(R\\) be a ring with unity. Then \\((R^\\times, \\cdot)\\) is a group, called the <em>group of units</em> of \\(R\\).
</div>

<div class="env-block proof">
<strong>Proof.</strong> Closure: if \\(u, v \\in R^\\times\\), then \\((uv)(v^{-1}u^{-1}) = 1_R\\), so \\(uv \\in R^\\times\\). Associativity is inherited. The identity \\(1_R\\) is a unit. Each unit has an inverse by definition. \\(\\square\\)
</div>

<div class="env-block example">
<strong>Example 11.2.8.</strong> Some groups of units:
<ul>
<li>\\(\\mathbb{Z}^\\times = \\{1, -1\\}\\).</li>
<li>\\((\\mathbb{Z}/n\\mathbb{Z})^\\times = \\{\\overline{a} : \\gcd(a, n) = 1\\}\\). Its order is \\(\\varphi(n)\\) (Euler's totient).</li>
<li>\\(\\mathbb{Z}[i]^\\times = \\{1, -1, i, -i\\}\\).</li>
<li>\\(M_n(\\mathbb{R})^\\times = GL_n(\\mathbb{R})\\), the general linear group.</li>
</ul>
</div>

<div class="env-block theorem">
<strong>Proposition 11.2.9.</strong> In a ring with unity, no element can be both a unit and a zero divisor.
</div>

<div class="env-block proof">
<strong>Proof.</strong> Suppose \\(u\\) is a unit with inverse \\(u^{-1}\\), and \\(ub = 0\\) for some \\(b\\). Then \\(b = u^{-1}(ub) = u^{-1} \\cdot 0 = 0\\). So \\(u\\) is not a zero divisor. \\(\\square\\)
</div>

<h2>11.2.4 Integral Domains and Fields</h2>

<div class="env-block definition">
<strong>Definition 11.2.10 (Integral Domain).</strong> A commutative ring \\(R\\) with unity \\(1_R \\neq 0_R\\) is an <em>integral domain</em> if \\(R\\) has no zero divisors. Equivalently, for all \\(a, b \\in R\\), \\(ab = 0\\) implies \\(a = 0\\) or \\(b = 0\\).
</div>

<div class="env-block definition">
<strong>Definition 11.2.11 (Field).</strong> A commutative ring \\(R\\) with unity \\(1_R \\neq 0_R\\) is a <em>field</em> if every nonzero element is a unit, i.e., \\(R^\\times = R \\setminus \\{0\\}\\).
</div>

<div class="env-block theorem">
<strong>Theorem 11.2.12.</strong> Every field is an integral domain.
</div>

<div class="env-block proof">
<strong>Proof.</strong> Let \\(F\\) be a field and suppose \\(ab = 0\\) with \\(a \\neq 0\\). Since \\(a\\) is a unit, multiply both sides by \\(a^{-1}\\): \\(b = a^{-1} \\cdot 0 = 0\\). \\(\\square\\)
</div>

<div class="env-block theorem">
<strong>Theorem 11.2.13.</strong> Every finite integral domain is a field.
</div>

<div class="env-block proof">
<strong>Proof.</strong> Let \\(D\\) be a finite integral domain and let \\(a \\in D\\) be nonzero. Consider the map \\(\\varphi: D \\to D\\) defined by \\(\\varphi(x) = ax\\). Since \\(D\\) has no zero divisors, \\(\\varphi\\) is injective: if \\(ax = ay\\), then \\(a(x - y) = 0\\), so \\(x = y\\). Since \\(D\\) is finite, any injective map from \\(D\\) to itself is surjective. In particular, \\(1_D\\) is in the image, so \\(ax = 1_D\\) for some \\(x\\). Thus \\(a\\) is a unit. \\(\\square\\)
</div>

<div class="env-block example">
<strong>Example 11.2.14.</strong>
<ul>
<li>\\(\\mathbb{Z}\\) is an integral domain but not a field (\\(2\\) has no inverse in \\(\\mathbb{Z}\\)).</li>
<li>\\(\\mathbb{Q}, \\mathbb{R}, \\mathbb{C}\\) are fields.</li>
<li>\\(\\mathbb{Z}/p\\mathbb{Z}\\) is a field when \\(p\\) is prime (by the theorem above, since it is a finite integral domain).</li>
<li>\\(\\mathbb{Z}/6\\mathbb{Z}\\) is neither an integral domain nor a field (\\(\\overline{2} \\cdot \\overline{3} = \\overline{0}\\)).</li>
</ul>
</div>

<div class="env-block remark">
<strong>Remark 11.2.15 (The hierarchy).</strong> We have the chain of implications:
\\[
\\text{Field} \\implies \\text{Integral domain} \\implies \\text{Commutative ring with unity} \\implies \\text{Ring.}
\\]
None of these implications reverses in general (though they do for finite commutative rings with unity, where integral domain and field coincide).
</div>
`,
            visualizations: [
                {
                    id: 'viz-zero-divisor-graph',
                    title: 'Zero Divisor Graph of \\(\\mathbb{Z}/n\\mathbb{Z}\\)',
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 1 });
                        const canvas = engine.canvas;
                        const ctx = engine.ctx;

                        let n = 12;
                        VizEngine.createSlider(controls, 'n', 2, 24, n, 1, v => { n = Math.round(v); });

                        engine.onDraw = function() {
                            const W = canvas.width;
                            const H = canvas.height;
                            ctx.clearRect(0, 0, W, H);

                            var cx = W / 2;
                            var cy = H / 2;
                            var radius = Math.min(W, H) * 0.35;

                            // Find zero divisors
                            var zeroDivisors = [];
                            for (var a = 1; a < n; a++) {
                                for (var b = 1; b < n; b++) {
                                    if ((a * b) % n === 0) {
                                        if (zeroDivisors.indexOf(a) === -1) zeroDivisors.push(a);
                                        break;
                                    }
                                }
                            }

                            // Place all nonzero elements on a circle
                            var elements = [];
                            for (var i = 1; i < n; i++) {
                                var angle = -Math.PI / 2 + (2 * Math.PI * (i - 1)) / (n - 1);
                                elements.push({
                                    val: i,
                                    x: cx + radius * Math.cos(angle),
                                    y: cy + radius * Math.sin(angle),
                                    isZD: zeroDivisors.indexOf(i) !== -1
                                });
                            }

                            // Draw edges between zero divisor pairs
                            ctx.lineWidth = 1;
                            for (var ia = 0; ia < elements.length; ia++) {
                                for (var ib = ia + 1; ib < elements.length; ib++) {
                                    var a2 = elements[ia].val;
                                    var b2 = elements[ib].val;
                                    if ((a2 * b2) % n === 0) {
                                        ctx.strokeStyle = 'rgba(231, 111, 81, 0.5)';
                                        ctx.beginPath();
                                        ctx.moveTo(elements[ia].x, elements[ia].y);
                                        ctx.lineTo(elements[ib].x, elements[ib].y);
                                        ctx.stroke();
                                    }
                                }
                            }

                            // Draw nodes
                            var nodeRadius = Math.max(10, Math.min(18, 200 / n));
                            ctx.font = Math.max(9, Math.min(14, nodeRadius * 0.9)) + 'px monospace';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';

                            for (var j = 0; j < elements.length; j++) {
                                var el = elements[j];
                                ctx.beginPath();
                                ctx.arc(el.x, el.y, nodeRadius, 0, 2 * Math.PI);
                                if (el.isZD) {
                                    ctx.fillStyle = '#e76f51';
                                } else {
                                    ctx.fillStyle = '#2a9d8f';
                                }
                                ctx.fill();
                                ctx.strokeStyle = '#ffffff';
                                ctx.lineWidth = 1.5;
                                ctx.stroke();

                                ctx.fillStyle = '#ffffff';
                                ctx.fillText('' + el.val, el.x, el.y);
                            }

                            // Title
                            ctx.fillStyle = '#e0e0e0';
                            ctx.font = '14px sans-serif';
                            ctx.fillText('Zero Divisor Graph of Z/' + n + 'Z', cx, 20);

                            // Legend
                            ctx.font = '12px sans-serif';
                            ctx.fillStyle = '#e76f51';
                            ctx.fillRect(10, H - 40, 12, 12);
                            ctx.fillStyle = '#e0e0e0';
                            ctx.textAlign = 'left';
                            ctx.fillText('Zero divisor', 28, H - 30);

                            ctx.fillStyle = '#2a9d8f';
                            ctx.fillRect(10, H - 22, 12, 12);
                            ctx.fillStyle = '#e0e0e0';
                            ctx.fillText('Non-zero-divisor', 28, H - 12);

                            ctx.fillStyle = '#aaaaaa';
                            ctx.fillText('Edges connect pairs a, b with ab = 0 mod ' + n, cx - 100, H - 10);
                        };

                        engine.start();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch11-sec02-ex01',
                    type: 'mc',
                    question: 'Which of the following is a subring of \\(\\mathbb{Z}\\)?',
                    options: [
                        'The set of odd integers',
                        'The set {0, 1}',
                        'The set of even integers 2Z',
                        'The set of positive integers'
                    ],
                    answer: 2,
                    explanation: 'The even integers \\(2\\mathbb{Z}\\) are closed under subtraction and multiplication, so they form a subring. The odd integers are not closed under addition (1 + 1 = 2 is not odd). The set \\(\\{0,1\\}\\) is not closed under subtraction (\\(0 - 1 = -1\\)). The positive integers are not closed under subtraction.'
                },
                {
                    id: 'ch11-sec02-ex02',
                    type: 'mc',
                    question: 'How many zero divisors does \\(\\mathbb{Z}/8\\mathbb{Z}\\) have?',
                    options: [
                        '2',
                        '3',
                        '4',
                        '5'
                    ],
                    answer: 1,
                    explanation: 'The zero divisors in \\(\\mathbb{Z}/8\\mathbb{Z}\\) are the nonzero elements \\(\\overline{a}\\) with \\(\\gcd(a, 8) > 1\\). These are \\(\\overline{2}, \\overline{4}, \\overline{6}\\), so there are 3 zero divisors. Check: \\(2 \\cdot 4 = 8 \\equiv 0\\), \\(4 \\cdot 2 = 8 \\equiv 0\\), \\(6 \\cdot 4 = 24 \\equiv 0\\).'
                },
                {
                    id: 'ch11-sec02-ex03',
                    type: 'mc',
                    question: 'Which statement is true about the group of units \\((\\mathbb{Z}/12\\mathbb{Z})^\\times\\)?',
                    options: [
                        'It has order 6',
                        'It has order 4',
                        'It has order 3',
                        'It has order 12'
                    ],
                    answer: 1,
                    explanation: 'The units of \\(\\mathbb{Z}/12\\mathbb{Z}\\) are the elements coprime to 12: \\(\\overline{1}, \\overline{5}, \\overline{7}, \\overline{11}\\). Thus \\(|(\\mathbb{Z}/12\\mathbb{Z})^\\times| = \\varphi(12) = 4\\).'
                },
                {
                    id: 'ch11-sec02-ex04',
                    type: 'mc',
                    question: 'Which of the following is an integral domain but NOT a field?',
                    options: [
                        'Z/5Z',
                        'Z (the integers)',
                        'Q (the rationals)',
                        'Z/6Z'
                    ],
                    answer: 1,
                    explanation: '\\(\\mathbb{Z}\\) has no zero divisors (so it is an integral domain), but 2 has no multiplicative inverse in \\(\\mathbb{Z}\\) (so it is not a field). \\(\\mathbb{Z}/5\\mathbb{Z}\\) and \\(\\mathbb{Q}\\) are fields. \\(\\mathbb{Z}/6\\mathbb{Z}\\) is not an integral domain.'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Ideals
        // ============================================================
        {
            id: 'ch11-sec03',
            title: 'Ideals',
            content: `
<div class="env-block intuition">
    <div class="env-title">Why Ideals?</div>
    <div class="env-body">
        <p>In group theory, normal subgroups are the "right" substructures for forming quotients: \\(G/N\\) is a well-defined group precisely when \\(N \\trianglelefteq G\\). What is the ring-theoretic analogue? Subrings are not enough; we need a stronger condition called an <strong>ideal</strong>. An ideal \\(I\\) of a ring \\(R\\) is a subring that "absorbs" multiplication by arbitrary ring elements, ensuring that the quotient \\(R/I\\) inherits a well-defined ring structure.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> Define ideals, work through key examples, introduce principal ideals, and explore how ideals combine through sums, products, and intersections.</p>

<h2>11.3 Definition and First Examples</h2>

<div class="env-block definition">
<strong>Definition 11.3.1 (Ideal).</strong> Let \\(R\\) be a ring. A subset \\(I \\subseteq R\\) is a <em>(two-sided) ideal</em> of \\(R\\), written \\(I \\trianglelefteq R\\), if:
<ol>
<li>\\((I, +)\\) is a subgroup of \\((R, +)\\), and</li>
<li>For all \\(r \\in R\\) and \\(a \\in I\\), both \\(ra \\in I\\) and \\(ar \\in I\\) (absorption).</li>
</ol>
</div>

<div class="env-block remark">
<strong>Remark 11.3.2.</strong> Equivalently, \\(I \\trianglelefteq R\\) if and only if \\(I\\) is nonempty and for all \\(a, b \\in I\\) and \\(r \\in R\\): (i) \\(a - b \\in I\\), (ii) \\(ra \\in I\\), and (iii) \\(ar \\in I\\). In a commutative ring, conditions (ii) and (iii) are the same.
</div>

<div class="env-block example">
<strong>Example 11.3.3 (Trivial ideals).</strong> Every ring \\(R\\) has at least two ideals:
<ul>
<li>The <em>zero ideal</em> \\(\\{0\\}\\), often written \\((0)\\).</li>
<li>The <em>whole ring</em> \\(R\\) itself.</li>
</ul>
A ring in which these are the only ideals is called <em>simple</em>.
</div>

<div class="env-block example">
<strong>Example 11.3.4 (Ideals of \\(\\mathbb{Z}\\)).</strong> The ideals of \\(\\mathbb{Z}\\) are exactly the sets \\(n\\mathbb{Z} = \\{nk : k \\in \\mathbb{Z}\\}\\) for \\(n \\geq 0\\). To see this, note that any ideal of \\(\\mathbb{Z}\\) is in particular a subgroup of \\((\\mathbb{Z}, +)\\), hence cyclic. If \\(I = n\\mathbb{Z}\\), then for any \\(m \\in \\mathbb{Z}\\) and \\(nk \\in I\\), we have \\(m \\cdot nk = n(mk) \\in I\\), confirming absorption.
</div>

<div class="env-block example">
<strong>Example 11.3.5.</strong> In the ring \\(\\mathbb{Z}/12\\mathbb{Z}\\), the ideals correspond to divisors of 12:
\\[
(\\overline{1}) = \\mathbb{Z}/12\\mathbb{Z}, \\quad (\\overline{2}) = \\{\\overline{0}, \\overline{2}, \\overline{4}, \\overline{6}, \\overline{8}, \\overline{10}\\}, \\quad (\\overline{3}) = \\{\\overline{0}, \\overline{3}, \\overline{6}, \\overline{9}\\},
\\]
\\[
(\\overline{4}) = \\{\\overline{0}, \\overline{4}, \\overline{8}\\}, \\quad (\\overline{6}) = \\{\\overline{0}, \\overline{6}\\}, \\quad (\\overline{0}) = \\{\\overline{0}\\}.
\\]
</div>

<h2>11.3.2 Principal Ideals</h2>

<div class="env-block definition">
<strong>Definition 11.3.6 (Principal Ideal).</strong> Let \\(R\\) be a commutative ring with unity and let \\(a \\in R\\). The <em>principal ideal generated by \\(a\\)</em> is
\\[
(a) = aR = \\{ar : r \\in R\\}.
\\]
More generally, in a noncommutative ring with unity, the two-sided ideal generated by \\(a\\) is \\(RaR = \\{\\sum_{i} r_i a s_i : r_i, s_i \\in R\\}\\).
</div>

<div class="env-block definition">
<strong>Definition 11.3.7 (Principal Ideal Domain).</strong> An integral domain \\(R\\) is a <em>principal ideal domain (PID)</em> if every ideal of \\(R\\) is principal. The integers \\(\\mathbb{Z}\\) and the polynomial ring \\(F[x]\\) over a field \\(F\\) are the most important examples of PIDs.
</div>

<div class="env-block example">
<strong>Example 11.3.8.</strong> \\(\\mathbb{Z}\\) is a PID: every ideal is \\((n) = n\\mathbb{Z}\\). Likewise, \\(\\mathbb{Q}[x]\\) is a PID (we will prove this in Chapter 13). However, \\(\\mathbb{Z}[x]\\) is <strong>not</strong> a PID. The ideal \\((2, x) = \\{2f(x) + xg(x) : f, g \\in \\mathbb{Z}[x]\\}\\) cannot be generated by a single polynomial.
</div>

<h2>11.3.3 Operations on Ideals</h2>

<div class="env-block definition">
<strong>Definition 11.3.9 (Sum, Product, Intersection).</strong> Let \\(I, J\\) be ideals of \\(R\\).
<ul>
<li><strong>Sum:</strong> \\(I + J = \\{a + b : a \\in I, b \\in J\\}\\). This is the smallest ideal containing both \\(I\\) and \\(J\\).</li>
<li><strong>Product:</strong> \\(IJ = \\{\\sum_{k=1}^n a_k b_k : a_k \\in I, b_k \\in J, n \\in \\mathbb{N}\\}\\). This is the set of all finite sums of products.</li>
<li><strong>Intersection:</strong> \\(I \\cap J\\) is always an ideal.</li>
</ul>
</div>

<div class="env-block theorem">
<strong>Proposition 11.3.10.</strong> For ideals \\(I, J \\trianglelefteq R\\):
<ol>
<li>\\(I + J\\), \\(IJ\\), and \\(I \\cap J\\) are all ideals of \\(R\\).</li>
<li>\\(IJ \\subseteq I \\cap J \\subseteq I + J\\).</li>
<li>In \\(\\mathbb{Z}\\): \\((m) + (n) = (\\gcd(m,n))\\), \\((m) \\cap (n) = (\\mathrm{lcm}(m,n))\\), and \\((m)(n) = (mn)\\).</li>
</ol>
</div>

<div class="env-block proof">
<strong>Proof of (3).</strong> For the sum: \\((m) + (n)\\) is the smallest ideal containing both \\(m\\) and \\(n\\), which is \\((d)\\) where \\(d = \\gcd(m,n)\\) by Bezout's identity. For the intersection: \\(k \\in (m) \\cap (n)\\) if and only if \\(m \\mid k\\) and \\(n \\mid k\\), if and only if \\(\\mathrm{lcm}(m,n) \\mid k\\). For the product: \\((m)(n)\\) consists of all finite sums of terms \\(ma \\cdot nb = mn(ab)\\), which equals \\((mn)\\). \\(\\square\\)
</div>

<div class="viz-placeholder" data-viz="viz-ideal-lattice"></div>

<div class="env-block remark">
<strong>Remark 11.3.11.</strong> The lattice of ideals of \\(\\mathbb{Z}/n\\mathbb{Z}\\) mirrors the lattice of divisors of \\(n\\). The visualization above shows this correspondence: each divisor of \\(n\\) generates an ideal, and containment follows divisibility in reverse (if \\(d_1 \\mid d_2\\), then \\((d_2) \\subseteq (d_1)\\)).
</div>

<div class="env-block theorem">
<strong>Proposition 11.3.12 (Ideal Generated by a Subset).</strong> Let \\(S \\subseteq R\\). The ideal generated by \\(S\\) is
\\[
(S) = \\bigcap \\{I : I \\trianglelefteq R, \\; S \\subseteq I\\},
\\]
the smallest ideal of \\(R\\) containing \\(S\\). When \\(R\\) is commutative with unity and \\(S = \\{a_1, \\ldots, a_k\\}\\), this equals
\\[
(a_1, \\ldots, a_k) = a_1 R + \\cdots + a_k R = \\{a_1 r_1 + \\cdots + a_k r_k : r_i \\in R\\}.
\\]
</div>
`,
            visualizations: [
                {
                    id: 'viz-ideal-lattice',
                    title: 'Ideal Lattice of \\(\\mathbb{Z}/n\\mathbb{Z}\\)',
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 1 });
                        const canvas = engine.canvas;
                        const ctx = engine.ctx;

                        let n = 12;
                        VizEngine.createSlider(controls, 'n', 2, 36, n, 1, v => { n = Math.round(v); });

                        function getDivisors(m) {
                            var divs = [];
                            for (var i = 1; i <= m; i++) {
                                if (m % i === 0) divs.push(i);
                            }
                            return divs;
                        }

                        engine.onDraw = function() {
                            var W = canvas.width;
                            var H = canvas.height;
                            ctx.clearRect(0, 0, W, H);

                            var divs = getDivisors(n);
                            var numDivs = divs.length;

                            // Assign levels: level = number of prime factors (with multiplicity)
                            function omega(m) {
                                var count = 0;
                                var temp = m;
                                for (var p = 2; p * p <= temp; p++) {
                                    while (temp % p === 0) { count++; temp /= p; }
                                }
                                if (temp > 1) count++;
                                return count;
                            }

                            var maxLevel = 0;
                            var levels = {};
                            for (var i = 0; i < numDivs; i++) {
                                var lv = omega(divs[i]);
                                levels[divs[i]] = lv;
                                if (lv > maxLevel) maxLevel = lv;
                            }

                            // Group by level
                            var byLevel = {};
                            for (var j = 0; j <= maxLevel; j++) byLevel[j] = [];
                            for (var k = 0; k < numDivs; k++) {
                                byLevel[levels[divs[k]]].push(divs[k]);
                            }

                            // Position nodes
                            var paddingY = 50;
                            var paddingX = 40;
                            var layerH = (H - 2 * paddingY) / Math.max(maxLevel, 1);
                            var positions = {};

                            for (var lv2 = 0; lv2 <= maxLevel; lv2++) {
                                var row = byLevel[lv2];
                                var rowLen = row.length;
                                var y = paddingY + (maxLevel - lv2) * layerH;
                                for (var ri = 0; ri < rowLen; ri++) {
                                    var x = paddingX + (ri + 0.5) * (W - 2 * paddingX) / rowLen;
                                    positions[row[ri]] = { x: x, y: y };
                                }
                            }

                            // Draw edges (d1 divides d2 and d2/d1 is prime)
                            ctx.strokeStyle = 'rgba(42, 157, 143, 0.5)';
                            ctx.lineWidth = 1.5;
                            for (var a = 0; a < numDivs; a++) {
                                for (var b = a + 1; b < numDivs; b++) {
                                    var d1 = divs[a];
                                    var d2 = divs[b];
                                    if (d2 % d1 === 0) {
                                        var ratio = d2 / d1;
                                        // Check if ratio is prime
                                        var isPrime = ratio >= 2;
                                        for (var t = 2; t * t <= ratio; t++) {
                                            if (ratio % t === 0) { isPrime = false; break; }
                                        }
                                        if (isPrime) {
                                            ctx.beginPath();
                                            ctx.moveTo(positions[d1].x, positions[d1].y);
                                            ctx.lineTo(positions[d2].x, positions[d2].y);
                                            ctx.stroke();
                                        }
                                    }
                                }
                            }

                            // Draw nodes
                            var nodeR = Math.max(14, Math.min(24, 300 / numDivs));
                            ctx.font = Math.max(9, Math.min(13, nodeR * 0.65)) + 'px monospace';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';

                            for (var m = 0; m < numDivs; m++) {
                                var d = divs[m];
                                var pos = positions[d];
                                ctx.beginPath();
                                ctx.arc(pos.x, pos.y, nodeR, 0, 2 * Math.PI);
                                if (d === 1) {
                                    ctx.fillStyle = '#e76f51'; // top (whole ring)
                                } else if (d === n) {
                                    ctx.fillStyle = '#264653'; // bottom (zero ideal)
                                } else {
                                    ctx.fillStyle = '#2a9d8f';
                                }
                                ctx.fill();
                                ctx.strokeStyle = '#ffffff';
                                ctx.lineWidth = 1.5;
                                ctx.stroke();

                                // Label: show ideal (d)
                                ctx.fillStyle = '#ffffff';
                                ctx.fillText('(' + d + ')', pos.x, pos.y);
                            }

                            // Title and note
                            ctx.fillStyle = '#e0e0e0';
                            ctx.font = '14px sans-serif';
                            ctx.fillText('Ideal Lattice of Z/' + n + 'Z', W / 2, 18);
                            ctx.font = '11px sans-serif';
                            ctx.fillStyle = '#aaaaaa';
                            ctx.fillText('Top = (1) = whole ring, Bottom = (' + n + ') = (0)', W / 2, H - 10);
                        };

                        engine.start();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch11-sec03-ex01',
                    type: 'mc',
                    question: 'Which of the following is NOT an ideal of \\(\\mathbb{Z}\\)?',
                    options: [
                        '5Z (multiples of 5)',
                        'Z (the whole ring)',
                        '{0}',
                        'The set of odd integers'
                    ],
                    answer: 3,
                    explanation: 'The set of odd integers is not an ideal of \\(\\mathbb{Z}\\) because it is not even a subgroup of \\((\\mathbb{Z}, +)\\): \\(1 + 1 = 2\\) is not odd. In fact, the ideals of \\(\\mathbb{Z}\\) are exactly the sets \\(n\\mathbb{Z}\\) for \\(n \\geq 0\\).'
                },
                {
                    id: 'ch11-sec03-ex02',
                    type: 'mc',
                    question: 'In \\(\\mathbb{Z}\\), what is the ideal \\((6) + (10)\\)?',
                    options: [
                        '(60)',
                        '(6)',
                        '(2)',
                        '(16)'
                    ],
                    answer: 2,
                    explanation: 'The sum of ideals \\((6) + (10)\\) is the ideal generated by 6 and 10, which is \\((\\gcd(6, 10)) = (2)\\). This follows from Bezout: \\(2 = \\gcd(6, 10)\\) and \\(2 = 2 \\cdot 10 - 3 \\cdot 6\\).'
                },
                {
                    id: 'ch11-sec03-ex03',
                    type: 'mc',
                    question: 'Why is \\(\\mathbb{Z}[x]\\) NOT a principal ideal domain?',
                    options: [
                        'It is not commutative',
                        'It has zero divisors',
                        'The ideal (2, x) is not principal',
                        'It does not have a unity'
                    ],
                    answer: 2,
                    explanation: 'The ideal \\((2, x) = \\{2f(x) + xg(x) : f, g \\in \\mathbb{Z}[x]\\}\\) consists of polynomials with even constant term. No single polynomial generates this ideal: a generator would need to divide both 2 and \\(x\\), so it would have to be a unit, but then \\((2, x) = \\mathbb{Z}[x]\\), which is false since \\(1 \\notin (2, x)\\).'
                },
                {
                    id: 'ch11-sec03-ex04',
                    type: 'mc',
                    question: 'In \\(\\mathbb{Z}\\), what is the product ideal \\((3)(4)\\)?',
                    options: [
                        '(7)',
                        '(12)',
                        '(1)',
                        '(3)'
                    ],
                    answer: 1,
                    explanation: 'The product of ideals \\((3)(4)\\) consists of all finite sums of terms \\(3a \\cdot 4b = 12(ab)\\), which is exactly \\(12\\mathbb{Z} = (12)\\). In general, \\((m)(n) = (mn)\\) in \\(\\mathbb{Z}\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Quotient Rings
        // ============================================================
        {
            id: 'ch11-sec04',
            title: 'Quotient Rings',
            content: `
<div class="env-block intuition">
    <div class="env-title">Building New Rings from Old</div>
    <div class="env-body">
        <p>Quotient groups \\(G/N\\) gave us a powerful way to create new groups by "collapsing" a normal subgroup to the identity. The ring-theoretic analogue is the <strong>quotient ring</strong> \\(R/I\\), which collapses an ideal \\(I\\) to zero. This construction is the engine behind modular arithmetic, the creation of number fields, and the classification of rings. The key insight is that ideals are precisely the subsets for which the quotient inherits a well-defined ring structure.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> Construct the quotient ring \\(R/I\\), verify that multiplication is well-defined, and explore the fundamental examples that arise.</p>

<h2>11.4 Construction of \\(R/I\\)</h2>

<p>Let \\(R\\) be a ring and \\(I \\trianglelefteq R\\) an ideal. Since \\((I, +)\\) is a normal subgroup of the abelian group \\((R, +)\\), we can form the quotient group \\(R/I\\) whose elements are cosets \\(a + I = \\{a + i : i \\in I\\}\\). The question is: can we also define multiplication on these cosets?</p>

<div class="env-block definition">
<strong>Definition 11.4.1 (Quotient Ring).</strong> Let \\(I \\trianglelefteq R\\). The <em>quotient ring</em> \\(R/I\\) is the set of cosets \\(\\{a + I : a \\in R\\}\\) with operations:
\\[
(a + I) + (b + I) = (a + b) + I, \\qquad (a + I)(b + I) = ab + I.
\\]
</div>

<div class="env-block theorem">
<strong>Theorem 11.4.2 (Well-definedness).</strong> The multiplication in \\(R/I\\) is well-defined if and only if \\(I\\) is an ideal of \\(R\\).
</div>

<div class="env-block proof">
<strong>Proof.</strong> Suppose \\(I \\trianglelefteq R\\). We must show that the product does not depend on the choice of coset representatives. If \\(a + I = a' + I\\) and \\(b + I = b' + I\\), then \\(a' = a + i\\) and \\(b' = b + j\\) for some \\(i, j \\in I\\). Then
\\[
a'b' = (a + i)(b + j) = ab + aj + ib + ij.
\\]
Since \\(I\\) is an ideal, \\(aj \\in I\\), \\(ib \\in I\\), and \\(ij \\in I\\), so \\(aj + ib + ij \\in I\\). Therefore \\(a'b' + I = ab + I\\).
<br><br>
Conversely, if multiplication on cosets is well-defined, one can show \\(I\\) must satisfy the absorption property (if \\(r \\in R\\) and \\(a \\in I\\), then \\(ra\\) and \\(ar\\) must lie in \\(I\\)). \\(\\square\\)
</div>

<div class="env-block theorem">
<strong>Corollary 11.4.3.</strong> With the operations above, \\(R/I\\) is a ring. If \\(R\\) is commutative, so is \\(R/I\\). If \\(R\\) has unity \\(1_R\\), then \\(1_R + I\\) is the unity of \\(R/I\\).
</div>

<h2>11.4.2 Key Examples</h2>

<div class="env-block example">
<strong>Example 11.4.4 (The integers mod \\(n\\), revisited).</strong> Consider \\(\\mathbb{Z}\\) and the ideal \\((n) = n\\mathbb{Z}\\). The quotient ring \\(\\mathbb{Z}/(n)\\) has cosets \\(\\overline{0}, \\overline{1}, \\ldots, \\overline{n-1}\\), with addition and multiplication modulo \\(n\\). This is exactly \\(\\mathbb{Z}/n\\mathbb{Z}\\), the ring we have been working with since the start of the course. The quotient ring perspective explains <em>why</em> modular arithmetic works: it is a special case of the general quotient ring construction.
</div>

<div class="env-block example">
<strong>Example 11.4.5 (Constructing \\(\\mathbb{C}\\) from \\(\\mathbb{R}\\)).</strong> Consider the polynomial ring \\(\\mathbb{R}[x]\\) and the ideal \\(I = (x^2 + 1)\\). The quotient \\(\\mathbb{R}[x]/(x^2 + 1)\\) is a ring whose elements are cosets \\(f(x) + I\\). Since \\(x^2 + 1 \\in I\\), we have \\(x^2 \\equiv -1\\) in the quotient. Every element can be written uniquely as \\(a + bx + I\\) with \\(a, b \\in \\mathbb{R}\\). The resulting ring is isomorphic to \\(\\mathbb{C}\\), with \\(x + I\\) playing the role of \\(i\\).
</div>

<div class="env-block example">
<strong>Example 11.4.6 (A quotient with zero divisors).</strong> In \\(\\mathbb{Z}[x]/(x^2)\\), the element \\(x + (x^2)\\) is nonzero but satisfies \\((x + (x^2))^2 = x^2 + (x^2) = 0 + (x^2)\\). So \\(x + (x^2)\\) is a nilpotent zero divisor. This ring is sometimes called the "ring of dual numbers" over \\(\\mathbb{Z}\\).
</div>

<div class="viz-placeholder" data-viz="viz-quotient-ring-table"></div>

<h2>11.4.3 The Natural Projection</h2>

<div class="env-block definition">
<strong>Definition 11.4.7.</strong> The <em>natural projection</em> (or <em>canonical surjection</em>) is the map \\(\\pi: R \\to R/I\\) defined by \\(\\pi(a) = a + I\\). This is a surjective ring homomorphism with \\(\\ker(\\pi) = I\\).
</div>

<div class="env-block theorem">
<strong>Theorem 11.4.8 (First Isomorphism Theorem for Rings).</strong> Let \\(\\varphi: R \\to S\\) be a ring homomorphism. Then \\(\\ker(\\varphi) \\trianglelefteq R\\) and
\\[
R / \\ker(\\varphi) \\cong \\mathrm{im}(\\varphi).
\\]
The isomorphism is given by \\(a + \\ker(\\varphi) \\mapsto \\varphi(a)\\).
</div>

<div class="env-block proof">
<strong>Proof.</strong> Let \\(K = \\ker(\\varphi)\\). First, \\(K\\) is an ideal: if \\(a \\in K\\) and \\(r \\in R\\), then \\(\\varphi(ra) = \\varphi(r)\\varphi(a) = \\varphi(r) \\cdot 0 = 0\\), so \\(ra \\in K\\) (similarly \\(ar \\in K\\)).
<br><br>
Define \\(\\overline{\\varphi}: R/K \\to S\\) by \\(\\overline{\\varphi}(a + K) = \\varphi(a)\\). This is well-defined: if \\(a + K = b + K\\), then \\(a - b \\in K\\), so \\(\\varphi(a) = \\varphi(b)\\). It is a ring homomorphism (check on representatives). It is injective: \\(\\overline{\\varphi}(a + K) = 0\\) implies \\(a \\in K\\), so \\(a + K = K\\). Its image is \\(\\mathrm{im}(\\varphi)\\). \\(\\square\\)
</div>

<div class="env-block example">
<strong>Example 11.4.9.</strong> The evaluation map \\(\\mathrm{ev}_a: \\mathbb{R}[x] \\to \\mathbb{R}\\) defined by \\(\\mathrm{ev}_a(f) = f(a)\\) is a surjective ring homomorphism with kernel \\((x - a)\\). By the first isomorphism theorem, \\(\\mathbb{R}[x]/(x - a) \\cong \\mathbb{R}\\).
</div>
`,
            visualizations: [
                {
                    id: 'viz-quotient-ring-table',
                    title: 'Quotient Ring \\(\\mathbb{Z}/n\\mathbb{Z}\\) as \\(\\mathbb{Z}/(n)\\)',
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 1 });
                        const canvas = engine.canvas;
                        const ctx = engine.ctx;

                        let n = 6;
                        let highlightCoset = -1;

                        VizEngine.createSlider(controls, 'n', 2, 10, n, 1, v => { n = Math.round(v); highlightCoset = -1; });

                        canvas.addEventListener('click', function(e) {
                            var rect = canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;
                            var W = canvas.width;
                            var H = canvas.height;
                            var barH = (H - 100) / n;
                            var idx = Math.floor((my - 60) / barH);
                            if (idx >= 0 && idx < n) {
                                highlightCoset = (highlightCoset === idx) ? -1 : idx;
                            }
                        });

                        var cosetColors = [
                            '#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51',
                            '#606c38', '#dda15e', '#bc6c25', '#6d6875', '#b5838d'
                        ];

                        engine.onDraw = function() {
                            var W = canvas.width;
                            var H = canvas.height;
                            ctx.clearRect(0, 0, W, H);

                            ctx.fillStyle = '#e0e0e0';
                            ctx.font = '15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Cosets of (' + n + ') in Z', W / 2, 25);
                            ctx.font = '11px sans-serif';
                            ctx.fillStyle = '#aaaaaa';
                            ctx.fillText('Click a coset to highlight its elements on the number line', W / 2, 42);

                            var barH = Math.min(35, (H - 110) / n);
                            var startY = 60;
                            var barW = W - 100;
                            var barX = 50;

                            // Show a number line from -2n to 3n
                            var lo = -2 * n;
                            var hi = 3 * n;
                            var range = hi - lo;

                            ctx.font = '12px monospace';
                            ctx.textBaseline = 'middle';

                            for (var c = 0; c < n; c++) {
                                var y = startY + c * barH;
                                var isHighlighted = (highlightCoset === c);

                                // Coset label
                                ctx.textAlign = 'right';
                                ctx.fillStyle = isHighlighted ? '#ffffff' : '#cccccc';
                                ctx.fillText(c + ' + (' + n + ')', barX - 5, y + barH / 2);

                                // Bar background
                                ctx.fillStyle = isHighlighted ? 'rgba(42, 157, 143, 0.3)' : 'rgba(255,255,255,0.05)';
                                ctx.fillRect(barX, y + 2, barW, barH - 4);

                                // Plot elements on the number line
                                for (var val = lo; val <= hi; val++) {
                                    if (((val % n) + n) % n === c) {
                                        var px = barX + ((val - lo) / range) * barW;
                                        ctx.beginPath();
                                        ctx.arc(px, y + barH / 2, isHighlighted ? 5 : 3, 0, 2 * Math.PI);
                                        ctx.fillStyle = cosetColors[c % cosetColors.length];
                                        ctx.fill();

                                        if (isHighlighted) {
                                            ctx.textAlign = 'center';
                                            ctx.fillStyle = '#ffffff';
                                            ctx.font = '9px monospace';
                                            ctx.fillText('' + val, px, y + barH / 2 - 9);
                                            ctx.font = '12px monospace';
                                        }
                                    }
                                }
                            }

                            // Number line at bottom
                            var nlY = startY + n * barH + 15;
                            ctx.strokeStyle = '#888888';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(barX, nlY);
                            ctx.lineTo(barX + barW, nlY);
                            ctx.stroke();

                            ctx.textAlign = 'center';
                            ctx.fillStyle = '#aaaaaa';
                            ctx.font = '10px monospace';
                            for (var t = lo; t <= hi; t++) {
                                if (t % n === 0) {
                                    var tx = barX + ((t - lo) / range) * barW;
                                    ctx.beginPath();
                                    ctx.moveTo(tx, nlY - 4);
                                    ctx.lineTo(tx, nlY + 4);
                                    ctx.stroke();
                                    ctx.fillText('' + t, tx, nlY + 14);
                                }
                            }
                        };

                        engine.start();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch11-sec04-ex01',
                    type: 'mc',
                    question: 'Why is the ideal condition necessary for the quotient ring \\(R/I\\) to be well-defined?',
                    options: [
                        'To ensure the quotient is finite',
                        'To ensure coset multiplication does not depend on the choice of representatives',
                        'To ensure the quotient is commutative',
                        'To ensure every element has a multiplicative inverse'
                    ],
                    answer: 1,
                    explanation: 'If \\(I\\) is merely a subring but not an ideal, then the product \\((a+I)(b+I) = ab + I\\) might depend on which representatives \\(a, b\\) we choose. The absorption property of ideals (\\(rI \\subseteq I\\) and \\(Ir \\subseteq I\\)) is exactly what guarantees independence from representative choice.'
                },
                {
                    id: 'ch11-sec04-ex02',
                    type: 'mc',
                    question: 'Which ring is isomorphic to \\(\\mathbb{R}[x]/(x^2+1)\\)?',
                    options: [
                        'R (the real numbers)',
                        'R x R (direct product)',
                        'C (the complex numbers)',
                        'Z/2Z'
                    ],
                    answer: 2,
                    explanation: 'In the quotient \\(\\mathbb{R}[x]/(x^2+1)\\), we have \\(x^2 \\equiv -1\\), so \\(x\\) plays the role of \\(i\\). Every element has the form \\(a + bx\\) with \\(a, b \\in \\mathbb{R}\\), and multiplication follows the rule \\(x^2 = -1\\). This is exactly \\(\\mathbb{C}\\).'
                },
                {
                    id: 'ch11-sec04-ex03',
                    type: 'mc',
                    question: 'What is the kernel of the evaluation map \\(\\mathrm{ev}_3: \\mathbb{R}[x] \\to \\mathbb{R}\\) defined by \\(f \\mapsto f(3)\\)?',
                    options: [
                        '(3)',
                        '(x)',
                        '(x - 3)',
                        '(x + 3)'
                    ],
                    answer: 2,
                    explanation: 'The kernel consists of all polynomials \\(f\\) with \\(f(3) = 0\\). A polynomial vanishes at 3 if and only if \\((x-3)\\) divides it. So \\(\\ker(\\mathrm{ev}_3) = (x-3)\\), and by the first isomorphism theorem, \\(\\mathbb{R}[x]/(x-3) \\cong \\mathbb{R}\\).'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Prime and Maximal Ideals
        // ============================================================
        {
            id: 'ch11-sec05',
            title: 'Prime and Maximal Ideals',
            content: `
<div class="env-block intuition">
    <div class="env-title">The Ideal Hierarchy</div>
    <div class="env-body">
        <p>Among all ideals of a ring, two special classes stand out: <strong>prime ideals</strong> and <strong>maximal ideals</strong>. These are the algebraic counterparts of prime numbers and irreducible elements. The beautiful characterization theorems of this section connect properties of an ideal \\(I\\) to properties of the quotient ring \\(R/I\\): a prime ideal yields an integral domain, and a maximal ideal yields a field.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> Define prime and maximal ideals, prove the characterization theorems via quotient rings, and explore the relationship between the two notions.</p>

<h2>11.5 Prime Ideals</h2>

<div class="env-block definition">
<strong>Definition 11.5.1 (Prime Ideal).</strong> Let \\(R\\) be a commutative ring with unity. A proper ideal \\(P \\subsetneq R\\) is <em>prime</em> if for all \\(a, b \\in R\\):
\\[
ab \\in P \\implies a \\in P \\text{ or } b \\in P.
\\]
</div>

<div class="env-block remark">
<strong>Remark 11.5.2.</strong> The condition "\\(P\\) is proper" (i.e., \\(P \\neq R\\)) is essential. The whole ring \\(R\\) satisfies the implication vacuously but is excluded by convention.
</div>

<div class="env-block example">
<strong>Example 11.5.3.</strong>
<ul>
<li>In \\(\\mathbb{Z}\\), the prime ideals are \\((0)\\) and \\((p)\\) for prime numbers \\(p\\). The ideal \\((0)\\) is prime because \\(\\mathbb{Z}\\) is an integral domain. The ideal \\((p)\\) is prime because \\(p \\mid ab\\) implies \\(p \\mid a\\) or \\(p \\mid b\\) (Euclid's lemma).</li>
<li>The ideal \\((6) \\trianglelefteq \\mathbb{Z}\\) is NOT prime: \\(2 \\cdot 3 = 6 \\in (6)\\), but \\(2 \\notin (6)\\) and \\(3 \\notin (6)\\).</li>
</ul>
</div>

<div class="env-block theorem">
<strong>Theorem 11.5.4 (Prime Ideal Characterization).</strong> Let \\(R\\) be a commutative ring with unity and \\(P \\subsetneq R\\) a proper ideal. Then \\(P\\) is prime if and only if \\(R/P\\) is an integral domain.
</div>

<div class="env-block proof">
<strong>Proof.</strong> (\\(\\Rightarrow\\)) Suppose \\(P\\) is prime. We need to show \\(R/P\\) has no zero divisors. Let \\((a+P)(b+P) = 0+P\\) in \\(R/P\\). Then \\(ab + P = P\\), so \\(ab \\in P\\). Since \\(P\\) is prime, \\(a \\in P\\) or \\(b \\in P\\), i.e., \\(a + P = P\\) or \\(b + P = P\\). Also, \\(R/P\\) is nonzero since \\(P \\neq R\\), and \\(1 + P \\neq 0 + P\\) since \\(1 \\notin P\\). So \\(R/P\\) is an integral domain.
<br><br>
(\\(\\Leftarrow\\)) Suppose \\(R/P\\) is an integral domain. If \\(ab \\in P\\), then \\((a+P)(b+P) = ab + P = P = 0_{R/P}\\). Since \\(R/P\\) has no zero divisors, \\(a + P = P\\) or \\(b + P = P\\), meaning \\(a \\in P\\) or \\(b \\in P\\). \\(\\square\\)
</div>

<h2>11.5.2 Maximal Ideals</h2>

<div class="env-block definition">
<strong>Definition 11.5.5 (Maximal Ideal).</strong> Let \\(R\\) be a commutative ring with unity. A proper ideal \\(M \\subsetneq R\\) is <em>maximal</em> if there is no ideal \\(J\\) with \\(M \\subsetneq J \\subsetneq R\\). Equivalently, \\(M\\) is maximal if the only ideals containing \\(M\\) are \\(M\\) itself and \\(R\\).
</div>

<div class="env-block example">
<strong>Example 11.5.6.</strong>
<ul>
<li>In \\(\\mathbb{Z}\\), the maximal ideals are exactly \\((p)\\) for prime \\(p\\). The ideal \\((6)\\) is not maximal because \\((6) \\subsetneq (2) \\subsetneq \\mathbb{Z}\\).</li>
<li>In \\(\\mathbb{Z}/12\\mathbb{Z}\\), the maximal ideals are \\((\\overline{2})\\) and \\((\\overline{3})\\), corresponding to the prime divisors of 12.</li>
<li>The ideal \\((0) \\trianglelefteq \\mathbb{Z}\\) is prime but NOT maximal (since \\((0) \\subsetneq (2) \\subsetneq \\mathbb{Z}\\)).</li>
</ul>
</div>

<div class="env-block theorem">
<strong>Theorem 11.5.7 (Maximal Ideal Characterization).</strong> Let \\(R\\) be a commutative ring with unity and \\(M \\subsetneq R\\) a proper ideal. Then \\(M\\) is maximal if and only if \\(R/M\\) is a field.
</div>

<div class="env-block proof">
<strong>Proof.</strong> (\\(\\Rightarrow\\)) Suppose \\(M\\) is maximal. Let \\(a + M\\) be a nonzero element of \\(R/M\\), so \\(a \\notin M\\). Consider the ideal \\(M + (a) = \\{m + ra : m \\in M, r \\in R\\}\\). Since \\(a \\notin M\\), we have \\(M \\subsetneq M + (a)\\). By maximality, \\(M + (a) = R\\). In particular, \\(1_R \\in M + (a)\\), so there exist \\(m \\in M\\) and \\(r \\in R\\) with \\(1 = m + ra\\). Then in \\(R/M\\):
\\[
(r + M)(a + M) = ra + M = (1 - m) + M = 1 + M.
\\]
So \\(a + M\\) has a multiplicative inverse, and \\(R/M\\) is a field.
<br><br>
(\\(\\Leftarrow\\)) Suppose \\(R/M\\) is a field. Let \\(J\\) be an ideal with \\(M \\subseteq J \\subseteq R\\). The image \\(\\pi(J) = J/M\\) is an ideal of the field \\(R/M\\). But the only ideals of a field are \\(\\{0\\}\\) and the field itself. So either \\(J/M = \\{0\\}\\) (meaning \\(J = M\\)) or \\(J/M = R/M\\) (meaning \\(J = R\\)). Hence \\(M\\) is maximal. \\(\\square\\)
</div>

<h2>11.5.3 The Relationship: Maximal Implies Prime</h2>

<div class="env-block theorem">
<strong>Corollary 11.5.8.</strong> Every maximal ideal is prime.
</div>

<div class="env-block proof">
<strong>Proof.</strong> If \\(M\\) is maximal, then \\(R/M\\) is a field, hence an integral domain (every field is an integral domain). By the prime ideal characterization, \\(M\\) is prime. \\(\\square\\)
</div>

<div class="env-block remark">
<strong>Remark 11.5.9.</strong> The converse is false in general. In \\(\\mathbb{Z}\\), the ideal \\((0)\\) is prime (since \\(\\mathbb{Z}\\) is an integral domain) but not maximal (since \\((0) \\subsetneq (2)\\)). However, in a <strong>principal ideal domain</strong>, every nonzero prime ideal is maximal (we will prove this in Chapter 12).
</div>

<div class="env-block theorem">
<strong>Theorem 11.5.10 (Existence of Maximal Ideals).</strong> Let \\(R\\) be a ring with unity and \\(I \\subsetneq R\\) a proper ideal. Then there exists a maximal ideal \\(M\\) of \\(R\\) with \\(I \\subseteq M\\). In particular, every ring with unity has at least one maximal ideal.
</div>

<div class="env-block proof">
<strong>Proof sketch.</strong> This uses Zorn's Lemma. Consider the set \\(\\mathcal{S}\\) of all proper ideals containing \\(I\\), ordered by inclusion. It is nonempty (\\(I \\in \\mathcal{S}\\)). For any chain \\(\\{J_\\alpha\\}\\) in \\(\\mathcal{S}\\), the union \\(\\bigcup J_\\alpha\\) is an ideal, and it is proper (if it contained \\(1_R\\), then \\(1_R \\in J_\\alpha\\) for some \\(\\alpha\\), contradicting \\(J_\\alpha \\neq R\\)). By Zorn's Lemma, \\(\\mathcal{S}\\) has a maximal element. \\(\\square\\)
</div>

<div class="viz-placeholder" data-viz="viz-prime-maximal-hierarchy"></div>

<div class="env-block remark">
<strong>Remark 11.5.11.</strong> The visualization above shows the ideal lattice of \\(\\mathbb{Z}/n\\mathbb{Z}\\), highlighting which ideals are prime and which are maximal. In this ring, the two notions coincide for nonzero ideals: the prime ideals (other than the zero ideal, when it is prime) are exactly the maximal ideals, corresponding to ideals generated by prime divisors of \\(n\\).
</div>

<h2>11.5.4 Summary Table</h2>

<table style="width:100%; border-collapse:collapse; margin: 1em 0;">
<tr style="border-bottom: 2px solid #555;">
<th style="text-align:left; padding:6px;">Condition on \\(I \\subsetneq R\\)</th>
<th style="text-align:left; padding:6px;">Equivalent condition on \\(R/I\\)</th>
</tr>
<tr style="border-bottom: 1px solid #333;">
<td style="padding:6px;">\\(I\\) is an ideal</td>
<td style="padding:6px;">\\(R/I\\) is a well-defined ring</td>
</tr>
<tr style="border-bottom: 1px solid #333;">
<td style="padding:6px;">\\(I\\) is a prime ideal</td>
<td style="padding:6px;">\\(R/I\\) is an integral domain</td>
</tr>
<tr style="border-bottom: 1px solid #333;">
<td style="padding:6px;">\\(I\\) is a maximal ideal</td>
<td style="padding:6px;">\\(R/I\\) is a field</td>
</tr>
</table>

<div class="env-block example">
<strong>Example 11.5.12 (Putting it all together).</strong> Consider the ring \\(\\mathbb{Z}[x]\\).
<ul>
<li>\\((x)\\) is prime but not maximal: \\(\\mathbb{Z}[x]/(x) \\cong \\mathbb{Z}\\) (an integral domain, not a field).</li>
<li>\\((x, 2)\\) is maximal: \\(\\mathbb{Z}[x]/(x, 2) \\cong \\mathbb{Z}/2\\mathbb{Z}\\) (a field).</li>
<li>\\((x^2 + 1)\\) is prime: \\(\\mathbb{Z}[x]/(x^2+1) \\cong \\mathbb{Z}[i]\\) (an integral domain).</li>
<li>\\((0)\\) is prime: \\(\\mathbb{Z}[x]\\) is an integral domain.</li>
</ul>
</div>
`,
            visualizations: [
                {
                    id: 'viz-prime-maximal-hierarchy',
                    title: 'Prime and Maximal Ideals in \\(\\mathbb{Z}/n\\mathbb{Z}\\)',
                    setup(body, controls) {
                        const engine = new VizEngine(body, { scale: 1 });
                        const canvas = engine.canvas;
                        const ctx = engine.ctx;

                        let n = 30;
                        VizEngine.createSlider(controls, 'n', 2, 60, n, 1, v => { n = Math.round(v); });

                        function getDivisors(m) {
                            var divs = [];
                            for (var i = 1; i <= m; i++) {
                                if (m % i === 0) divs.push(i);
                            }
                            return divs;
                        }

                        function isPrime(k) {
                            if (k < 2) return false;
                            for (var i = 2; i * i <= k; i++) {
                                if (k % i === 0) return false;
                            }
                            return true;
                        }

                        // For Z/nZ: ideal (d) is prime iff n/d is prime or (d)=(0) and Z/nZ is an integral domain
                        // Actually in Z/nZ, ideals are (d) for d|n. The ideal (d) corresponds to the ideal dZ/nZ.
                        // R/I where R = Z/nZ and I = (d) is isomorphic to Z/dZ.
                        // So (d) is prime iff Z/dZ is an integral domain iff d is prime or d=1 (but d=1 gives the zero ring? No, Z/1Z = 0).
                        // Wait: let me reconsider.
                        // In Z/nZ, the ideal generated by d (where d|n) has order n/d.
                        // The quotient (Z/nZ)/(d) is isomorphic to Z/dZ.
                        // (d) is prime iff Z/dZ is an integral domain iff d is 0 or d is prime.
                        // But d|n and d>=1, so (d) is prime iff d is prime.
                        // (d) is maximal iff Z/dZ is a field iff d is prime.
                        // So in Z/nZ, prime nonzero ideals = maximal ideals = {(p) : p prime, p|n}.
                        // The zero ideal (which is (n) since n=0 in Z/nZ) is prime iff Z/nZ is an integral domain iff n is prime.

                        engine.onDraw = function() {
                            var W = canvas.width;
                            var H = canvas.height;
                            ctx.clearRect(0, 0, W, H);

                            var divs = getDivisors(n);
                            var numDivs = divs.length;

                            // Assign levels
                            function omega(m) {
                                var count = 0;
                                var temp = m;
                                for (var p = 2; p * p <= temp; p++) {
                                    while (temp % p === 0) { count++; temp /= p; }
                                }
                                if (temp > 1) count++;
                                return count;
                            }

                            var maxLevel = 0;
                            var levels = {};
                            for (var i = 0; i < numDivs; i++) {
                                var lv = omega(divs[i]);
                                levels[divs[i]] = lv;
                                if (lv > maxLevel) maxLevel = lv;
                            }

                            var byLevel = {};
                            for (var j = 0; j <= maxLevel; j++) byLevel[j] = [];
                            for (var k = 0; k < numDivs; k++) {
                                byLevel[levels[divs[k]]].push(divs[k]);
                            }

                            var paddingY = 55;
                            var paddingX = 40;
                            var layerH = maxLevel > 0 ? (H - 2 * paddingY) / maxLevel : (H - 2 * paddingY);
                            var positions = {};

                            for (var lv2 = 0; lv2 <= maxLevel; lv2++) {
                                var row = byLevel[lv2];
                                var rowLen = row.length;
                                var y = paddingY + (maxLevel - lv2) * layerH;
                                for (var ri = 0; ri < rowLen; ri++) {
                                    var x = paddingX + (ri + 0.5) * (W - 2 * paddingX) / rowLen;
                                    positions[row[ri]] = { x: x, y: y };
                                }
                            }

                            // Draw edges
                            ctx.lineWidth = 1;
                            for (var a = 0; a < numDivs; a++) {
                                for (var b = a + 1; b < numDivs; b++) {
                                    var d1 = divs[a];
                                    var d2 = divs[b];
                                    if (d2 % d1 === 0) {
                                        var ratio = d2 / d1;
                                        var isP = isPrime(ratio);
                                        if (isP) {
                                            ctx.strokeStyle = 'rgba(150, 150, 150, 0.4)';
                                            ctx.beginPath();
                                            ctx.moveTo(positions[d1].x, positions[d1].y);
                                            ctx.lineTo(positions[d2].x, positions[d2].y);
                                            ctx.stroke();
                                        }
                                    }
                                }
                            }

                            // Draw nodes
                            var nodeR = Math.max(12, Math.min(22, 350 / numDivs));
                            ctx.font = Math.max(8, Math.min(12, nodeR * 0.6)) + 'px monospace';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';

                            for (var m = 0; m < numDivs; m++) {
                                var d = divs[m];
                                var pos = positions[d];

                                // Determine type
                                // (d) in Z/nZ: quotient is Z/dZ
                                // prime iff d is prime; maximal iff d is prime
                                // The zero ideal (d=n) is prime iff n is prime
                                var isMax = false;
                                var isPri = false;

                                if (d === n) {
                                    // This is the zero ideal
                                    isPri = isPrime(n);
                                } else if (isPrime(d)) {
                                    isMax = true;
                                    isPri = true;
                                }

                                ctx.beginPath();
                                ctx.arc(pos.x, pos.y, nodeR, 0, 2 * Math.PI);

                                if (isMax) {
                                    ctx.fillStyle = '#e76f51'; // maximal (and prime)
                                } else if (isPri) {
                                    ctx.fillStyle = '#e9c46a'; // prime only
                                } else if (d === 1) {
                                    ctx.fillStyle = '#264653'; // whole ring
                                } else {
                                    ctx.fillStyle = '#2a9d8f'; // regular ideal
                                }
                                ctx.fill();

                                ctx.strokeStyle = '#ffffff';
                                ctx.lineWidth = 1.5;
                                ctx.stroke();

                                ctx.fillStyle = '#ffffff';
                                ctx.fillText('(' + d + ')', pos.x, pos.y);
                            }

                            // Title
                            ctx.fillStyle = '#e0e0e0';
                            ctx.font = '14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Ideals of Z/' + n + 'Z: Prime and Maximal', W / 2, 18);

                            // Legend
                            ctx.font = '11px sans-serif';
                            var legendY = H - 18;

                            ctx.fillStyle = '#e76f51';
                            ctx.fillRect(W / 2 - 190, legendY - 8, 10, 10);
                            ctx.fillStyle = '#e0e0e0';
                            ctx.textAlign = 'left';
                            ctx.fillText('Maximal (= Prime)', W / 2 - 176, legendY);

                            ctx.fillStyle = '#2a9d8f';
                            ctx.fillRect(W / 2 - 20, legendY - 8, 10, 10);
                            ctx.fillStyle = '#e0e0e0';
                            ctx.fillText('Other ideal', W / 2 - 6, legendY);

                            ctx.fillStyle = '#264653';
                            ctx.fillRect(W / 2 + 90, legendY - 8, 10, 10);
                            ctx.fillStyle = '#e0e0e0';
                            ctx.fillText('Whole ring (1)', W / 2 + 104, legendY);
                        };

                        engine.start();
                        return engine;
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch11-sec05-ex01',
                    type: 'mc',
                    question: 'The ideal \\((6)\\) in \\(\\mathbb{Z}\\) is:',
                    options: [
                        'Prime and maximal',
                        'Prime but not maximal',
                        'Maximal but not prime',
                        'Neither prime nor maximal'
                    ],
                    answer: 3,
                    explanation: 'The ideal \\((6)\\) is not prime because \\(2 \\cdot 3 = 6 \\in (6)\\) but \\(2 \\notin (6)\\) and \\(3 \\notin (6)\\). It is not maximal because \\((6) \\subsetneq (2) \\subsetneq \\mathbb{Z}\\). Equivalently, \\(\\mathbb{Z}/(6) \\cong \\mathbb{Z}/6\\mathbb{Z}\\) has zero divisors and is therefore neither an integral domain nor a field.'
                },
                {
                    id: 'ch11-sec05-ex02',
                    type: 'mc',
                    question: 'If \\(M\\) is a maximal ideal of a commutative ring \\(R\\) with unity, what is \\(R/M\\)?',
                    options: [
                        'An integral domain',
                        'A field',
                        'A principal ideal domain',
                        'A polynomial ring'
                    ],
                    answer: 1,
                    explanation: 'By the Maximal Ideal Characterization Theorem, \\(R/M\\) is a field. This is because the only ideals of \\(R\\) containing \\(M\\) are \\(M\\) and \\(R\\) itself, which translates into the quotient having no proper nonzero ideals, the defining property of a field.'
                },
                {
                    id: 'ch11-sec05-ex03',
                    type: 'mc',
                    question: 'In \\(\\mathbb{Z}\\), the ideal \\((0)\\) is:',
                    options: [
                        'Neither prime nor maximal',
                        'Prime and maximal',
                        'Prime but not maximal',
                        'Maximal but not prime'
                    ],
                    answer: 2,
                    explanation: 'The ideal \\((0)\\) is prime because \\(\\mathbb{Z}/(0) \\cong \\mathbb{Z}\\) is an integral domain. However, it is not maximal because \\(\\mathbb{Z}\\) is not a field (for instance, \\((0) \\subsetneq (2) \\subsetneq \\mathbb{Z}\\)).'
                },
                {
                    id: 'ch11-sec05-ex04',
                    type: 'mc',
                    question: 'Which of the following ideals of \\(\\mathbb{Z}[x]\\) is maximal?',
                    options: [
                        '(x)',
                        '(2)',
                        '(x, 3)',
                        '(x^2 + 1)'
                    ],
                    answer: 2,
                    explanation: 'We have \\(\\mathbb{Z}[x]/(x, 3) \\cong \\mathbb{Z}/3\\mathbb{Z}\\), which is a field (since 3 is prime). Therefore \\((x, 3)\\) is maximal. The other quotients are: \\(\\mathbb{Z}[x]/(x) \\cong \\mathbb{Z}\\) (not a field), \\(\\mathbb{Z}[x]/(2) \\cong (\\mathbb{Z}/2\\mathbb{Z})[x]\\) (not a field), and \\(\\mathbb{Z}[x]/(x^2+1) \\cong \\mathbb{Z}[i]\\) (not a field, since 2 has no inverse).'
                }
            ]
        }
    ]
});
