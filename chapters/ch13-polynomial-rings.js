window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 'ch13',
  number: 13,
  title: 'Polynomial Rings',
  subtitle: 'F[x], division algorithm, irreducibility, Eisenstein criterion',
  sections: [
    // =====================================================================
    //  SECTION 1 — Polynomial Rings
    // =====================================================================
    {
      id: 'ch13-sec01',
      title: 'Polynomial Rings',
      content: `
<div class="env-block intuition">
    <div class="env-title">From Rings to Polynomial Rings</div>
    <div class="env-body">
        <p>Polynomials are among the most natural algebraic objects: they arise in number theory, geometry, and analysis. Given a ring \\(R\\), the polynomial ring \\(R[x]\\) provides the algebraic framework for studying polynomials systematically. When \\(R\\) is a field, \\(R[x]\\) enjoys a division algorithm remarkably similar to integer division, making it one of the best-behaved rings in algebra.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> Define polynomial rings, establish degree arithmetic, and prove the division algorithm in \\(F[x]\\).</p>

<h2>13.1 The Polynomial Ring \\(R[x]\\)</h2>

<div class="env-block definition">
<strong>Definition 13.1.1 (Polynomial Ring).</strong> Let \\(R\\) be a commutative ring with unity. A <em>polynomial</em> in \\(x\\) with coefficients in \\(R\\) is a formal expression
\\[f(x) = a_0 + a_1 x + a_2 x^2 + \\cdots + a_n x^n\\]
where \\(a_i \\in R\\) and all but finitely many \\(a_i\\) are zero. The set of all such polynomials, denoted \\(R[x]\\), forms a ring under the usual addition and multiplication of polynomials:
<ul>
<li><strong>Addition:</strong> \\((\\sum a_i x^i) + (\\sum b_i x^i) = \\sum (a_i + b_i) x^i\\).</li>
<li><strong>Multiplication:</strong> \\((\\sum a_i x^i)(\\sum b_j x^j) = \\sum_k c_k x^k\\) where \\(c_k = \\sum_{i+j=k} a_i b_j\\).</li>
</ul>
</div>

<div class="env-block remark">
<strong>Remark 13.1.2.</strong> The variable \\(x\\) is a formal indeterminate, not an element of \\(R\\). Two polynomials are equal if and only if all their coefficients agree. This is crucial: the polynomial \\(x^p - x\\) over \\(\\mathbb{F}_p\\) is nonzero even though it vanishes at every element of \\(\\mathbb{F}_p\\).
</div>

<h3>Degree</h3>

<div class="env-block definition">
<strong>Definition 13.1.3 (Degree).</strong> If \\(f(x) = a_0 + a_1 x + \\cdots + a_n x^n\\) with \\(a_n \\neq 0\\), we define \\(\\deg(f) = n\\) and call \\(a_n\\) the <em>leading coefficient</em>. A polynomial is <em>monic</em> if its leading coefficient is \\(1\\). By convention, the zero polynomial has no degree (or \\(\\deg(0) = -\\infty\\)).
</div>

<div class="env-block theorem">
<strong>Proposition 13.1.4 (Degree Arithmetic).</strong> Let \\(R\\) be an integral domain and \\(f, g \\in R[x]\\) be nonzero polynomials. Then:
<ol>
<li>\\(\\deg(fg) = \\deg(f) + \\deg(g)\\).</li>
<li>\\(\\deg(f + g) \\leq \\max(\\deg(f), \\deg(g))\\), with equality when \\(\\deg(f) \\neq \\deg(g)\\).</li>
</ol>
</div>

<div class="env-block proof">
<strong>Proof.</strong> (1) Let \\(f\\) have leading coefficient \\(a_m\\) and \\(g\\) have leading coefficient \\(b_n\\). The coefficient of \\(x^{m+n}\\) in \\(fg\\) is \\(a_m b_n\\), which is nonzero since \\(R\\) is an integral domain (no zero divisors). No higher power of \\(x\\) appears, so \\(\\deg(fg) = m + n\\).

(2) follows because the coefficient of \\(x^k\\) in \\(f + g\\) is \\(a_k + b_k\\), and if \\(\\deg(f) \\neq \\deg(g)\\), the leading term of the higher-degree polynomial survives. \\(\\square\\)
</div>

<div class="env-block remark">
<strong>Remark 13.1.5.</strong> The integral domain hypothesis is essential for part (1). In \\(\\mathbb{Z}/4\\mathbb{Z}[x]\\), we have \\(\\deg(2x) = 1\\) but \\(\\deg((2x)(2x)) = \\deg(4x^2) = \\deg(0)\\), so the degree formula fails when \\(R\\) has zero divisors.
</div>

<div class="env-block theorem">
<strong>Corollary 13.1.6.</strong> If \\(R\\) is an integral domain, then \\(R[x]\\) is also an integral domain.
</div>

<div class="env-block proof">
<strong>Proof.</strong> Let \\(f, g \\in R[x]\\) be nonzero. Then \\(\\deg(fg) = \\deg(f) + \\deg(g) \\geq 0\\), so \\(fg \\neq 0\\). \\(\\square\\)
</div>

<h2>13.1.2 The Division Algorithm in \\(F[x]\\)</h2>

<p>When the coefficient ring is a field, we can perform polynomial long division, just as we divide integers.</p>

<div class="env-block theorem">
<strong>Theorem 13.1.7 (Division Algorithm).</strong> Let \\(F\\) be a field and let \\(f, g \\in F[x]\\) with \\(g \\neq 0\\). There exist unique \\(q, r \\in F[x]\\) such that
\\[f = gq + r, \\quad \\text{where } r = 0 \\text{ or } \\deg(r) < \\deg(g).\\]
</div>

<div class="env-block proof">
<strong>Proof.</strong> <em>Existence:</em> By induction on \\(\\deg(f)\\). If \\(\\deg(f) < \\deg(g)\\), take \\(q = 0, r = f\\). Otherwise, let \\(f = a_m x^m + \\cdots\\) and \\(g = b_n x^n + \\cdots\\) with \\(m \\geq n\\). Set \\(f_1 = f - (a_m / b_n) x^{m-n} g\\). Then \\(\\deg(f_1) < \\deg(f)\\), and by induction \\(f_1 = gq_1 + r\\) with \\(\\deg(r) < \\deg(g)\\). Hence \\(f = g(q_1 + (a_m/b_n)x^{m-n}) + r\\).

<em>Uniqueness:</em> If \\(f = gq_1 + r_1 = gq_2 + r_2\\), then \\(g(q_1 - q_2) = r_2 - r_1\\). If \\(q_1 \\neq q_2\\), the left side has degree \\(\\geq \\deg(g)\\) while the right side has degree \\(< \\deg(g)\\), a contradiction. So \\(q_1 = q_2\\) and \\(r_1 = r_2\\). \\(\\square\\)
</div>

<div class="env-block example">
<strong>Example 13.1.8.</strong> Divide \\(f(x) = x^4 + 2x^2 + 1\\) by \\(g(x) = x^2 + 1\\) in \\(\\mathbb{Q}[x]\\):
\\[x^4 + 2x^2 + 1 = (x^2 + 1)(x^2 + 1) + 0.\\]
So \\(q(x) = x^2 + 1\\) and \\(r(x) = 0\\), showing \\(g \\mid f\\).
</div>

<div class="viz-placeholder" data-viz="viz-poly-division"></div>

<div class="env-block remark">
<strong>Remark 13.1.9.</strong> The division algorithm is the foundation for the Euclidean algorithm in \\(F[x]\\), just as integer division underlies the Euclidean algorithm in \\(\\mathbb{Z}\\). This makes \\(F[x]\\) a Euclidean domain.
</div>

<div class="viz-placeholder" data-viz="viz-degree-arithmetic"></div>
`,
      visualizations: [
        {
          id: 'viz-poly-division',
          title: 'Polynomial Long Division in F[x]',
          setup(body, controls) {
            const engine = new VizEngine(body, { scale: 1 });
            const canvas = engine.canvas;
            const ctx = engine.ctx;
            let dividend = [1, 0, 0, -2], divisor = [1, -1], step = 0, maxSteps = 0;

            function computeDiv(dvd, dvs) {
              var steps = [], rem = dvd.slice(), ms = dvd.length - dvs.length + 1;
              maxSteps = ms;
              for (var i = 0; i < ms; i++) {
                var c = rem[i] / dvs[0];
                steps.push({ qc: c, rem: rem.slice() });
                for (var j = 0; j <= dvs.length - 1; j++) rem[i + j] -= c * dvs[j];
              }
              steps.push({ qc: null, rem: rem.slice() });
              return steps;
            }
            var divSteps = computeDiv(dividend, divisor);

            function fmt(coeffs, sd) {
              var p = [];
              for (var i = 0; i < coeffs.length; i++) {
                var d = sd - i, c = coeffs[i];
                if (Math.abs(c) < 1e-10) continue;
                var s = c >= 0 ? (p.length ? ' + ' : '') : (p.length ? ' - ' : '-'), a = Math.abs(c);
                if (d === 0) p.push(s + a);
                else if (d === 1) p.push(s + (a === 1 ? 'x' : a + 'x'));
                else p.push(s + (a === 1 ? '' : '' + a) + 'x^' + d);
              }
              return p.length ? p.join('') : '0';
            }
            VizEngine.createButton(controls, 'x^3-2 / x-1', function() {
              dividend = [1,0,0,-2]; divisor = [1,-1]; step = 0; divSteps = computeDiv(dividend, divisor);
            });
            VizEngine.createButton(controls, 'x^4+1 / x^2+1', function() {
              dividend = [1,0,0,0,1]; divisor = [1,0,1]; step = 0; divSteps = computeDiv(dividend, divisor);
            });
            VizEngine.createButton(controls, 'Next Step', function() { if (step < divSteps.length - 1) step++; });
            VizEngine.createButton(controls, 'Reset', function() { step = 0; });

            engine.onDraw = function() {
              var W = canvas.width, H = canvas.height;
              ctx.clearRect(0, 0, W, H);
              ctx.textAlign = 'left'; ctx.textBaseline = 'top';
              var y = 30;
              ctx.fillStyle = '#58a6ff'; ctx.font = '16px sans-serif';
              ctx.fillText('Polynomial Long Division (step ' + step + '/' + (divSteps.length - 1) + ')', 20, y);
              y += 30;
              ctx.fillStyle = '#e0e0e0'; ctx.font = '14px monospace';
              var dvdS = fmt(dividend, dividend.length - 1), dvsS = fmt(divisor, divisor.length - 1);
              ctx.fillText('Dividend: ' + dvdS, 20, y); y += 22;
              ctx.fillText('Divisor:  ' + dvsS, 20, y); y += 30;
              if (step > 0) {
                var qc = [];
                for (var i = 0; i < step; i++) qc.push(divSteps[i].qc);
                ctx.fillStyle = '#3fb9a0';
                ctx.fillText('Quotient: ' + fmt(qc, dividend.length - 1 - (divisor.length - 1)), 20, y); y += 22;
              }
              var cur = divSteps[Math.min(step, divSteps.length - 1)];
              ctx.fillStyle = '#f0883e';
              ctx.fillText('Remainder: ' + fmt(cur.rem, dividend.length - 1), 20, y); y += 30;
              if (step >= divSteps.length - 1) {
                var fr = cur.rem.slice(maxSteps), qa = [];
                for (var j = 0; j < maxSteps; j++) qa.push(divSteps[j].qc);
                ctx.fillStyle = '#58a6ff'; ctx.font = '15px sans-serif';
                ctx.fillText('Result: ' + dvdS + ' = (' + dvsS + ')(' + fmt(qa, dividend.length - 1 - (divisor.length - 1)) + ') + ' + fmt(fr, divisor.length - 2), 20, y);
              }
            };
            engine.start();
            return engine;
          }
        },
        {
          id: 'viz-degree-arithmetic',
          title: 'Degree Arithmetic: \\(\\deg(fg) = \\deg(f) + \\deg(g)\\)',
          setup(body, controls) {
            const engine = new VizEngine(body, { scale: 1 });
            const canvas = engine.canvas;
            const ctx = engine.ctx;

            let degF = 2, degG = 3;
            VizEngine.createSlider(controls, 'deg(f)', 0, 6, degF, 1, function(v) { degF = Math.round(v); });
            VizEngine.createSlider(controls, 'deg(g)', 0, 6, degG, 1, function(v) { degG = Math.round(v); });

            engine.onDraw = function() {
              var W = canvas.width, H = canvas.height;
              ctx.clearRect(0, 0, W, H);

              var barH = 30, gap = 10, startY = 60, maxDeg = 12;
              var unit = (W - 120) / maxDeg;

              ctx.font = '14px sans-serif';
              ctx.textBaseline = 'middle';

              // f bar
              ctx.fillStyle = '#58a6ff';
              ctx.fillRect(60, startY, degF * unit, barH);
              ctx.fillStyle = '#e0e0e0';
              ctx.textAlign = 'right';
              ctx.fillText('deg(f)', 55, startY + barH / 2);
              ctx.textAlign = 'center';
              ctx.fillText('' + degF, 60 + degF * unit / 2, startY + barH / 2);

              // g bar
              var y2 = startY + barH + gap;
              ctx.fillStyle = '#3fb9a0';
              ctx.fillRect(60, y2, degG * unit, barH);
              ctx.fillStyle = '#e0e0e0';
              ctx.textAlign = 'right';
              ctx.fillText('deg(g)', 55, y2 + barH / 2);
              ctx.textAlign = 'center';
              ctx.fillText('' + degG, 60 + degG * unit / 2, y2 + barH / 2);

              // fg bar
              var y3 = y2 + barH + gap * 2;
              var prodDeg = degF + degG;
              ctx.fillStyle = '#f0883e';
              ctx.fillRect(60, y3, prodDeg * unit, barH);
              ctx.fillStyle = '#e0e0e0';
              ctx.textAlign = 'right';
              ctx.fillText('deg(fg)', 55, y3 + barH / 2);
              ctx.textAlign = 'center';
              ctx.fillText('' + degF + ' + ' + degG + ' = ' + prodDeg, 60 + prodDeg * unit / 2, y3 + barH / 2);

              // Title
              ctx.fillStyle = '#58a6ff';
              ctx.font = '16px sans-serif';
              ctx.fillText('Degree Arithmetic in an Integral Domain', W / 2, 25);
            };

            engine.start();
            return engine;
          }
        }
      ],
      exercises: [
        {
          id: 'ch13-sec01-ex01',
          type: 'mcq',
          question: 'What is \\(\\deg((2x^3 + 1)(3x^2 + x))\\) in \\(\\mathbb{Q}[x]\\)?',
          options: ['4', '5', '6', '3'],
          answer: 1,
          hint: 'Use the degree formula for products in an integral domain.',
          solution: 'Since \\(\\mathbb{Q}\\) is a field (hence an integral domain), \\(\\deg(fg) = \\deg(f) + \\deg(g) = 3 + 2 = 5\\).'
        },
        {
          id: 'ch13-sec01-ex02',
          type: 'mcq',
          question: 'In which of the following rings does the degree formula \\(\\deg(fg) = \\deg(f) + \\deg(g)\\) fail?',
          options: [
            'Q[x]',
            'R[x]',
            '(Z/6Z)[x]',
            'Z[x]'
          ],
          answer: 2,
          hint: 'The formula requires the coefficient ring to be an integral domain.',
          solution: '\\(\\mathbb{Z}/6\\mathbb{Z}\\) has zero divisors (e.g., \\(2 \\cdot 3 = 0\\)). In \\((\\mathbb{Z}/6\\mathbb{Z})[x]\\), \\((2x)(3x) = 6x^2 = 0\\), so \\(\\deg(fg) \\neq \\deg(f) + \\deg(g)\\).'
        },
        {
          id: 'ch13-sec01-ex03',
          type: 'short-answer',
          question: 'Perform the division algorithm: divide \\(f(x) = x^3 + x + 1\\) by \\(g(x) = x + 1\\) in \\(\\mathbb{Q}[x]\\). Find \\(q(x)\\) and \\(r\\).',
          hint: 'Use polynomial long division. The first step subtracts \\(x^2 \\cdot (x+1)\\) from \\(f(x)\\).',
          solution: 'We have \\(x^3 + x + 1 = (x+1)(x^2 - x + 2) + (-1)\\). So \\(q(x) = x^2 - x + 2\\) and \\(r = -1\\). Check: \\((x+1)(x^2 - x + 2) - 1 = x^3 - x^2 + 2x + x^2 - x + 2 - 1 = x^3 + x + 1\\).'
        },
        {
          id: 'ch13-sec01-ex04',
          type: 'mcq',
          question: 'Why does the division algorithm require the coefficient ring to be a field?',
          options: [
            'Fields have characteristic zero',
            'We need to divide by the leading coefficient of the divisor',
            'Polynomials over fields always have roots',
            'Fields are always finite'
          ],
          answer: 1,
          hint: 'Look at the proof of existence: what operation on coefficients is needed?',
          solution: 'In each step of the algorithm, we form \\(a_m / b_n\\) where \\(b_n\\) is the leading coefficient of the divisor. This division is only guaranteed to exist when the coefficient ring is a field (every nonzero element is a unit).'
        }
      ]
    },

    // =====================================================================
    //  SECTION 2 — Irreducibility in F[x]
    // =====================================================================
    {
      id: 'ch13-sec02',
      title: 'Irreducibility in F[x]',
      content: `
<div class="env-block intuition">
    <div class="env-title">Irreducible Polynomials as Primes</div>
    <div class="env-body">
        <p>Just as prime numbers are the building blocks of the integers, <strong>irreducible polynomials</strong> are the building blocks of \\(F[x]\\). Understanding which polynomials are irreducible over a given field is a central problem in algebra, with applications ranging from constructing field extensions to coding theory.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> Define irreducible polynomials, connect roots to factors, and develop the Rational Root Theorem as a practical irreducibility test.</p>

<h2>13.2 Irreducible Polynomials</h2>

<div class="env-block definition">
<strong>Definition 13.2.1 (Irreducible Polynomial).</strong> Let \\(F\\) be a field. A nonconstant polynomial \\(p(x) \\in F[x]\\) is <em>irreducible over \\(F\\)</em> if whenever \\(p(x) = f(x)g(x)\\) with \\(f, g \\in F[x]\\), either \\(f\\) or \\(g\\) is a constant (unit in \\(F[x]\\)). A nonconstant polynomial that is not irreducible is called <em>reducible</em>.
</div>

<div class="env-block remark">
<strong>Remark 13.2.2.</strong> Irreducibility depends on the field. The polynomial \\(x^2 + 1\\) is irreducible over \\(\\mathbb{R}\\) but reducible over \\(\\mathbb{C}\\) (where \\(x^2 + 1 = (x + i)(x - i)\\)). Similarly, \\(x^2 - 2\\) is irreducible over \\(\\mathbb{Q}\\) but reducible over \\(\\mathbb{R}\\).
</div>

<h3>Roots and Factors</h3>

<div class="env-block theorem">
<strong>Theorem 13.2.3 (Factor Theorem).</strong> Let \\(F\\) be a field and \\(f(x) \\in F[x]\\). Then \\(a \\in F\\) is a root of \\(f\\) (i.e., \\(f(a) = 0\\)) if and only if \\((x - a) \\mid f(x)\\) in \\(F[x]\\).
</div>

<div class="env-block proof">
<strong>Proof.</strong> By the division algorithm, write \\(f(x) = (x - a)q(x) + r\\) where \\(r \\in F\\) (since \\(\\deg(r) < 1\\)). Evaluating at \\(x = a\\): \\(f(a) = 0 \\cdot q(a) + r = r\\). So \\(f(a) = 0\\) iff \\(r = 0\\) iff \\((x - a) \\mid f(x)\\). \\(\\square\\)
</div>

<div class="env-block theorem">
<strong>Corollary 13.2.4.</strong> A polynomial of degree \\(n\\) over a field \\(F\\) has at most \\(n\\) roots in \\(F\\).
</div>

<div class="env-block proof">
<strong>Proof.</strong> By induction. If \\(f\\) has a root \\(a\\), then \\(f(x) = (x-a)g(x)\\) with \\(\\deg(g) = n - 1\\). Any other root \\(b \\neq a\\) satisfies \\(0 = f(b) = (b-a)g(b)\\), so \\(g(b) = 0\\) since \\(F\\) is a field. By induction, \\(g\\) has at most \\(n - 1\\) roots, giving \\(f\\) at most \\(n\\) roots. \\(\\square\\)
</div>

<div class="env-block theorem">
<strong>Proposition 13.2.5.</strong> Let \\(F\\) be a field and \\(f(x) \\in F[x]\\).
<ul>
<li>If \\(\\deg(f) = 1\\), then \\(f\\) is irreducible.</li>
<li>If \\(\\deg(f) \\in \\{2, 3\\}\\), then \\(f\\) is irreducible over \\(F\\) if and only if \\(f\\) has no root in \\(F\\).</li>
</ul>
</div>

<div class="env-block proof">
<strong>Proof.</strong> Degree 1 polynomials cannot factor into two nonconstant polynomials. For degree 2 or 3, if \\(f = gh\\) with both nonconstant, then one factor has degree 1, giving a root in \\(F\\). \\(\\square\\)
</div>

<div class="env-block remark">
<strong>Remark 13.2.6.</strong> This criterion fails for degree \\(\\geq 4\\). For example, \\(x^4 + 2x^2 + 1 = (x^2 + 1)^2\\) is reducible over \\(\\mathbb{R}\\) but has no real root.
</div>

<h3>The Rational Root Theorem</h3>

<div class="env-block theorem">
<strong>Theorem 13.2.7 (Rational Root Theorem).</strong> Let \\(f(x) = a_n x^n + \\cdots + a_1 x + a_0 \\in \\mathbb{Z}[x]\\). If \\(p/q \\in \\mathbb{Q}\\) is a root of \\(f\\) (with \\(\\gcd(p, q) = 1\\)), then \\(p \\mid a_0\\) and \\(q \\mid a_n\\).
</div>

<div class="env-block proof">
<strong>Proof.</strong> Substituting \\(p/q\\) and multiplying through by \\(q^n\\):
\\[a_n p^n + a_{n-1} p^{n-1} q + \\cdots + a_1 p q^{n-1} + a_0 q^n = 0.\\]
Since \\(p\\) divides every term except \\(a_0 q^n\\), we get \\(p \\mid a_0 q^n\\). Since \\(\\gcd(p,q) = 1\\), we conclude \\(p \\mid a_0\\). Similarly, \\(q \\mid a_n\\). \\(\\square\\)
</div>

<div class="env-block example">
<strong>Example 13.2.8.</strong> Show \\(f(x) = x^3 - 3x + 1\\) is irreducible over \\(\\mathbb{Q}\\). By the Rational Root Theorem, any rational root \\(p/q\\) satisfies \\(p \\mid 1\\) and \\(q \\mid 1\\), so the candidates are \\(\\pm 1\\). We check: \\(f(1) = -1 \\neq 0\\) and \\(f(-1) = 3 \\neq 0\\). Since \\(\\deg(f) = 3\\) and \\(f\\) has no rational root, \\(f\\) is irreducible over \\(\\mathbb{Q}\\).
</div>

<div class="viz-placeholder" data-viz="viz-root-test"></div>

<div class="viz-placeholder" data-viz="viz-irreducibility-field"></div>
`,
      visualizations: [
        {
          id: 'viz-root-test',
          title: 'Rational Root Test Visualizer',
          setup(body, controls) {
            const engine = new VizEngine(body, { scale: 1 });
            const canvas = engine.canvas;
            const ctx = engine.ctx;

            // Polynomial coefficients: a3 x^3 + a2 x^2 + a1 x + a0
            let coeffs = [1, 0, -3, 1]; // x^3 - 3x + 1

            VizEngine.createButton(controls, 'x^3 - 3x + 1', function() { coeffs = [1, 0, -3, 1]; });
            VizEngine.createButton(controls, '2x^3 + x - 3', function() { coeffs = [2, 0, 1, -3]; });
            VizEngine.createButton(controls, 'x^3 - 2', function() { coeffs = [1, 0, 0, -2]; });

            function getDivisors(n) {
              n = Math.abs(n);
              if (n === 0) return [0];
              var divs = [];
              for (var i = 1; i <= n; i++) {
                if (n % i === 0) { divs.push(i); divs.push(-i); }
              }
              return divs;
            }

            function evalPoly(c, x) {
              var val = 0;
              for (var i = 0; i < c.length; i++) val = val * x + c[i];
              return val;
            }

            engine.onDraw = function() {
              var W = canvas.width, H = canvas.height;
              ctx.clearRect(0, 0, W, H);

              ctx.fillStyle = '#58a6ff';
              ctx.font = '15px sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'top';
              ctx.fillText('Rational Root Theorem Test', W / 2, 10);

              var an = coeffs[0], a0 = coeffs[coeffs.length - 1];
              var pDivs = getDivisors(a0);
              var qDivs = getDivisors(an);
              // Only positive q
              var posQ = [];
              for (var i = 0; i < qDivs.length; i++) {
                if (qDivs[i] > 0) posQ.push(qDivs[i]);
              }

              var candidates = [];
              var seen = {};
              for (var pi = 0; pi < pDivs.length; pi++) {
                for (var qi = 0; qi < posQ.length; qi++) {
                  var num = pDivs[pi], den = posQ[qi];
                  var key = num + '/' + den;
                  if (!seen[key]) {
                    seen[key] = true;
                    candidates.push({ p: num, q: den, val: evalPoly(coeffs, num / den) });
                  }
                }
              }

              ctx.font = '13px monospace';
              ctx.textAlign = 'left';
              var y = 40;
              ctx.fillStyle = '#e0e0e0';
              ctx.fillText('Leading coeff a_n = ' + an + ', constant a_0 = ' + a0, 20, y); y += 22;
              ctx.fillText('Candidates p/q where p | ' + a0 + ' and q | ' + an + ':', 20, y); y += 22;

              var foundRoot = false;
              for (var ci = 0; ci < candidates.length && y < H - 20; ci++) {
                var c = candidates[ci];
                var frac = c.q === 1 ? '' + c.p : c.p + '/' + c.q;
                var isRoot = Math.abs(c.val) < 1e-9;
                if (isRoot) foundRoot = true;
                ctx.fillStyle = isRoot ? '#3fb9a0' : '#888888';
                ctx.fillText('  f(' + frac + ') = ' + (Math.round(c.val * 1000) / 1000) + (isRoot ? '  <-- ROOT' : ''), 20, y);
                y += 18;
              }

              y += 8;
              ctx.fillStyle = foundRoot ? '#3fb9a0' : '#f0883e';
              ctx.font = '14px sans-serif';
              ctx.fillText(foundRoot ? 'Has a rational root => reducible over Q' : 'No rational root => irreducible over Q (if deg <= 3)', 20, y);
            };

            engine.start();
            return engine;
          }
        },
        {
          id: 'viz-irreducibility-field',
          title: 'Irreducibility Depends on the Field',
          setup(body, controls) {
            const engine = new VizEngine(body, { scale: 1 });
            const canvas = engine.canvas;
            const ctx = engine.ctx;

            let choice = 0; // 0: x^2+1, 1: x^2-2, 2: x^2-1
            VizEngine.createButton(controls, 'x^2 + 1', function() { choice = 0; });
            VizEngine.createButton(controls, 'x^2 - 2', function() { choice = 1; });
            VizEngine.createButton(controls, 'x^2 + x + 1', function() { choice = 2; });

            var data = [
              {
                poly: 'x^2 + 1',
                fields: [
                  { name: 'Q', irr: true, reason: 'No rational root (check +/-1)' },
                  { name: 'R', irr: true, reason: 'No real root (x^2 >= 0)' },
                  { name: 'C', irr: false, reason: '(x+i)(x-i)' },
                  { name: 'F_2', irr: false, reason: '(x+1)^2 since 1^2+1=0 in F_2' }
                ]
              },
              {
                poly: 'x^2 - 2',
                fields: [
                  { name: 'Q', irr: true, reason: 'sqrt(2) is irrational' },
                  { name: 'R', irr: false, reason: '(x-sqrt(2))(x+sqrt(2))' },
                  { name: 'C', irr: false, reason: 'Same as over R' },
                  { name: 'F_3', irr: false, reason: '2=(-1) so x^2+1=(x+1)(x-1) since 1^2=1=-2 mod 3? No: 1^2-2=-1, 2^2-2=2. Irr over F_3.' }
                ]
              },
              {
                poly: 'x^2 + x + 1',
                fields: [
                  { name: 'Q', irr: true, reason: 'Discriminant = -3 < 0, no real root' },
                  { name: 'R', irr: true, reason: 'Negative discriminant' },
                  { name: 'C', irr: false, reason: 'Roots are primitive cube roots of unity' },
                  { name: 'F_2', irr: true, reason: 'f(0)=1, f(1)=1; no root in F_2' }
                ]
              }
            ];

            engine.onDraw = function() {
              var W = canvas.width, H = canvas.height;
              ctx.clearRect(0, 0, W, H);
              var d = data[choice];

              ctx.fillStyle = '#58a6ff';
              ctx.font = '16px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Irreducibility of ' + d.poly + ' over different fields', W / 2, 20);

              var y = 55;
              ctx.font = '13px monospace';
              ctx.textAlign = 'left';
              for (var i = 0; i < d.fields.length; i++) {
                var f = d.fields[i];
                ctx.fillStyle = f.irr ? '#3fb9a0' : '#e76f51';
                ctx.fillText((f.irr ? 'IRREDUCIBLE' : 'REDUCIBLE  ') + ' over ' + f.name, 20, y);
                ctx.fillStyle = '#aaaaaa';
                ctx.fillText('  ' + f.reason, 200, y);
                y += 28;
              }
            };

            engine.start();
            return engine;
          }
        }
      ],
      exercises: [
        {
          id: 'ch13-sec02-ex01',
          type: 'mcq',
          question: 'Is \\(x^4 + 4x^2 + 4\\) irreducible over \\(\\mathbb{Q}\\)?',
          options: [
            'Yes, it has no rational roots',
            'No, it factors as (x^2 + 2)^2',
            'Yes, by Eisenstein with p = 2',
            'No, it factors as (x^2 + 1)(x^2 + 4)'
          ],
          answer: 1,
          hint: 'Try to recognize this as a perfect square.',
          solution: 'We have \\(x^4 + 4x^2 + 4 = (x^2 + 2)^2\\), so it is reducible. Note that the absence of rational roots does not guarantee irreducibility for degree \\(\\geq 4\\).'
        },
        {
          id: 'ch13-sec02-ex02',
          type: 'short-answer',
          question: 'Show that \\(x^2 + 1\\) is irreducible over \\(\\mathbb{F}_3 = \\mathbb{Z}/3\\mathbb{Z}\\).',
          hint: 'Check all elements of \\(\\mathbb{F}_3\\) to see if any is a root.',
          solution: 'We evaluate: \\(f(0) = 1\\), \\(f(1) = 2\\), \\(f(2) = 4 \\equiv 1 \\pmod{3}\\). No element of \\(\\mathbb{F}_3\\) is a root. Since \\(\\deg(f) = 2\\), having no root implies irreducibility.'
        },
        {
          id: 'ch13-sec02-ex03',
          type: 'mcq',
          question: 'A polynomial of degree 5 over \\(\\mathbb{Q}\\) has no rational root. Can we conclude it is irreducible?',
          options: [
            'Yes, the Rational Root Theorem settles it',
            'No, it could factor into irreducibles of degrees 2 and 3',
            'Yes, for odd degree the root test suffices',
            'No, but only if the leading coefficient is not 1'
          ],
          answer: 1,
          hint: 'Consider how a degree 5 polynomial might factor without having a linear factor.',
          solution: 'A degree 5 polynomial could be the product of an irreducible quadratic and an irreducible cubic, neither of which contributes a root in \\(\\mathbb{Q}\\). For example, \\((x^2 + 1)(x^3 + x + 1)\\) has no rational root but is reducible. The no-root test only works for degree \\(\\leq 3\\).'
        }
      ]
    },

    // =====================================================================
    //  SECTION 3 — Eisenstein's Criterion
    // =====================================================================
    {
      id: 'ch13-sec03',
      title: "Eisenstein's Criterion",
      content: `
<div class="env-block intuition">
    <div class="env-title">A Powerful Irreducibility Test</div>
    <div class="env-body">
        <p>Testing irreducibility by checking roots only works for low-degree polynomials. Eisenstein's criterion provides a remarkably simple sufficient condition for irreducibility that works for any degree. It relies on divisibility by a single prime and handles many important cases, including cyclotomic polynomials.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> State and prove Eisenstein's criterion, apply it to classical examples, and use it to establish the irreducibility of cyclotomic polynomials.</p>

<h2>13.3 Eisenstein's Criterion</h2>

<div class="env-block theorem">
<strong>Theorem 13.3.1 (Eisenstein's Criterion).</strong> Let \\(f(x) = a_n x^n + a_{n-1}x^{n-1} + \\cdots + a_1 x + a_0 \\in \\mathbb{Z}[x]\\) with \\(n \\geq 1\\). If there exists a prime \\(p\\) such that:
<ol>
<li>\\(p \\nmid a_n\\) (the leading coefficient is not divisible by \\(p\\)),</li>
<li>\\(p \\mid a_i\\) for all \\(0 \\leq i \\leq n - 1\\),</li>
<li>\\(p^2 \\nmid a_0\\),</li>
</ol>
then \\(f(x)\\) is irreducible over \\(\\mathbb{Q}\\).
</div>

<div class="env-block proof">
<strong>Proof.</strong> Suppose for contradiction that \\(f = gh\\) in \\(\\mathbb{Z}[x]\\) with \\(g = b_r x^r + \\cdots + b_0\\) and \\(h = c_s x^s + \\cdots + c_0\\), where \\(r, s \\geq 1\\) and \\(r + s = n\\).

Since \\(a_0 = b_0 c_0\\) and \\(p \\mid a_0\\) but \\(p^2 \\nmid a_0\\), exactly one of \\(b_0, c_0\\) is divisible by \\(p\\). Say \\(p \\mid b_0\\) and \\(p \\nmid c_0\\).

Since \\(a_n = b_r c_s\\) and \\(p \\nmid a_n\\), we have \\(p \\nmid b_r\\). Let \\(k\\) be the smallest index such that \\(p \\nmid b_k\\). Then \\(1 \\leq k \\leq r < n\\).

Now consider the coefficient \\(a_k = b_k c_0 + b_{k-1} c_1 + \\cdots + b_0 c_k\\). Since \\(p \\mid b_i\\) for \\(i < k\\), every term after the first is divisible by \\(p\\). Also \\(p \\mid a_k\\) (since \\(k < n\\)). Therefore \\(p \\mid b_k c_0\\), and since \\(p \\nmid c_0\\) and \\(p\\) is prime, \\(p \\mid b_k\\), contradicting the choice of \\(k\\). \\(\\square\\)
</div>

<div class="env-block example">
<strong>Example 13.3.2.</strong> The polynomial \\(f(x) = x^4 + 10x^3 + 15x + 25\\) is irreducible over \\(\\mathbb{Q}\\) by Eisenstein with \\(p = 5\\): we have \\(5 \\nmid 1\\) (leading coefficient), \\(5 \\mid 10, 0, 15, 25\\), and \\(25 = 5^2 \\nmid 25\\) fails! Actually \\(5^2 \\mid 25\\), so Eisenstein does not apply directly. We need \\(p^2 \\nmid a_0 = 25\\), but \\(25 = 5^2\\). So this example does not satisfy Eisenstein. Let us fix it: \\(g(x) = x^4 + 10x^3 + 15x + 5\\) satisfies all three conditions with \\(p = 5\\), hence is irreducible.
</div>

<div class="env-block example">
<strong>Example 13.3.3.</strong> \\(f(x) = 2x^5 + 6x^3 + 9x^2 + 15x + 3\\) is irreducible over \\(\\mathbb{Q}\\) by Eisenstein with \\(p = 3\\): \\(3 \\nmid 2\\), the coefficients \\(6, 9, 15, 3\\) are all divisible by 3, and \\(9 \\nmid 3\\) (i.e., \\(3^2 = 9\\) does not divide \\(a_0 = 3\\)).
</div>

<h3>Eisenstein with a Substitution</h3>

<p>Sometimes Eisenstein does not apply directly but works after a change of variable.</p>

<div class="env-block example">
<strong>Example 13.3.4.</strong> Consider \\(f(x) = x^2 + x + 1\\). No prime \\(p\\) divides all non-leading coefficients (we would need \\(p \\mid 1\\) for the constant term, which is impossible). However, substituting \\(x = y + 1\\):
\\[f(y + 1) = (y+1)^2 + (y+1) + 1 = y^2 + 3y + 3.\\]
Now Eisenstein applies with \\(p = 3\\). Since \\(f(x)\\) is irreducible iff \\(f(x+1)\\) is irreducible, we conclude \\(x^2 + x + 1\\) is irreducible over \\(\\mathbb{Q}\\).
</div>

<h3>Cyclotomic Polynomials</h3>

<div class="env-block definition">
<strong>Definition 13.3.5.</strong> For a prime \\(p\\), the \\(p\\)-th <em>cyclotomic polynomial</em> is
\\[\\Phi_p(x) = x^{p-1} + x^{p-2} + \\cdots + x + 1 = \\frac{x^p - 1}{x - 1}.\\]
</div>

<div class="env-block theorem">
<strong>Theorem 13.3.6.</strong> For every prime \\(p\\), \\(\\Phi_p(x)\\) is irreducible over \\(\\mathbb{Q}\\).
</div>

<div class="env-block proof">
<strong>Proof.</strong> Substitute \\(x = y + 1\\):
\\[\\Phi_p(y+1) = \\frac{(y+1)^p - 1}{y} = y^{p-1} + \\binom{p}{1} y^{p-2} + \\binom{p}{2} y^{p-3} + \\cdots + \\binom{p}{p-1}.\\]
For \\(1 \\leq k \\leq p-1\\), \\(p \\mid \\binom{p}{k}\\). The constant term is \\(\\binom{p}{p-1} = p\\), and \\(p^2 \\nmid p\\). The leading coefficient is 1. Eisenstein with the prime \\(p\\) shows \\(\\Phi_p(y+1)\\) is irreducible, hence so is \\(\\Phi_p(x)\\). \\(\\square\\)
</div>

<div class="viz-placeholder" data-viz="viz-eisenstein-checker"></div>

<div class="viz-placeholder" data-viz="viz-cyclotomic-roots"></div>
`,
      visualizations: [
        {
          id: 'viz-eisenstein-checker',
          title: "Eisenstein's Criterion Checker",
          setup(body, controls) {
            const engine = new VizEngine(body, { scale: 1 });
            const canvas = engine.canvas;
            const ctx = engine.ctx;

            // coefficients from degree 0 upward: a0, a1, ..., an
            let coeffsAsc = [3, 15, 9, 6, 2]; // 2x^4+6x^3+9x^2+15x+3
            let testPrime = 3;

            VizEngine.createButton(controls, '2x^4+6x^3+9x^2+15x+3, p=3', function() {
              coeffsAsc = [3, 15, 9, 6, 2]; testPrime = 3;
            });
            VizEngine.createButton(controls, 'x^4+10x^3+15x+5, p=5', function() {
              coeffsAsc = [5, 15, 0, 10, 1]; testPrime = 5;
            });
            VizEngine.createButton(controls, 'x^3-2, p=2', function() {
              coeffsAsc = [-2, 0, 0, 1]; testPrime = 2;
            });

            engine.onDraw = function() {
              var W = canvas.width, H = canvas.height;
              ctx.clearRect(0, 0, W, H);
              var n = coeffsAsc.length - 1;
              var p = testPrime;
              var an = coeffsAsc[n], a0 = coeffsAsc[0];

              ctx.fillStyle = '#58a6ff';
              ctx.font = '15px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText("Eisenstein's Criterion with p = " + p, W / 2, 18);

              var y = 45;
              ctx.font = '13px monospace';
              ctx.textAlign = 'left';

              // Check condition 1: p does not divide a_n
              var cond1 = (an % p !== 0);
              ctx.fillStyle = cond1 ? '#3fb9a0' : '#e76f51';
              ctx.fillText('(1) p=' + p + ' does not divide a_' + n + '=' + an + ': ' + (cond1 ? 'PASS' : 'FAIL'), 20, y);
              y += 22;

              // Check condition 2: p divides a_i for i < n
              var cond2 = true;
              for (var i = 0; i < n; i++) {
                if (coeffsAsc[i] % p !== 0) { cond2 = false; break; }
              }
              ctx.fillStyle = cond2 ? '#3fb9a0' : '#e76f51';
              ctx.fillText('(2) p=' + p + ' divides a_0,...,a_' + (n-1) + ': ' + (cond2 ? 'PASS' : 'FAIL'), 20, y);
              y += 22;

              // Show each coefficient
              for (var j = 0; j < n; j++) {
                var div = (coeffsAsc[j] % p === 0);
                ctx.fillStyle = div ? '#888888' : '#e76f51';
                ctx.fillText('    a_' + j + ' = ' + coeffsAsc[j] + (div ? ' (divisible)' : ' (NOT divisible)'), 30, y);
                y += 18;
              }

              // Check condition 3: p^2 does not divide a_0
              var cond3 = (a0 % (p * p) !== 0);
              ctx.fillStyle = cond3 ? '#3fb9a0' : '#e76f51';
              ctx.fillText('(3) p^2=' + (p*p) + ' does not divide a_0=' + a0 + ': ' + (cond3 ? 'PASS' : 'FAIL'), 20, y);
              y += 28;

              var allPass = cond1 && cond2 && cond3;
              ctx.fillStyle = allPass ? '#3fb9a0' : '#f0883e';
              ctx.font = '14px sans-serif';
              ctx.fillText(allPass ? 'All conditions met => IRREDUCIBLE over Q' : 'Criterion does not apply (conditions not all met)', 20, y);
            };

            engine.start();
            return engine;
          }
        },
        {
          id: 'viz-cyclotomic-roots',
          title: 'Roots of Unity on the Unit Circle',
          setup(body, controls) {
            const engine = new VizEngine(body, { scale: 1 });
            const canvas = engine.canvas;
            const ctx = engine.ctx;

            let p = 5;
            VizEngine.createSlider(controls, 'p (prime)', 2, 13, p, 1, function(v) { p = Math.round(v); });

            engine.onDraw = function() {
              var W = canvas.width, H = canvas.height;
              ctx.clearRect(0, 0, W, H);

              var cx = W / 2, cy = H / 2 + 10;
              var R = Math.min(W, H) / 2 - 40;

              // Unit circle
              ctx.strokeStyle = '#444444';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.arc(cx, cy, R, 0, 2 * Math.PI);
              ctx.stroke();

              // Axes
              ctx.strokeStyle = '#333333';
              ctx.beginPath();
              ctx.moveTo(cx - R - 10, cy); ctx.lineTo(cx + R + 10, cy);
              ctx.moveTo(cx, cy - R - 10); ctx.lineTo(cx, cy + R + 10);
              ctx.stroke();

              ctx.fillStyle = '#58a6ff';
              ctx.font = '15px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('p-th roots of unity (p = ' + p + ')', W / 2, 15);

              // Draw roots
              for (var k = 0; k < p; k++) {
                var angle = 2 * Math.PI * k / p;
                var rx = cx + R * Math.cos(angle);
                var ry = cy - R * Math.sin(angle);

                // Connecting lines
                if (k > 0) {
                  var prevAngle = 2 * Math.PI * (k - 1) / p;
                  ctx.strokeStyle = 'rgba(63,185,160,0.4)';
                  ctx.lineWidth = 1;
                  ctx.beginPath();
                  ctx.moveTo(cx + R * Math.cos(prevAngle), cy - R * Math.sin(prevAngle));
                  ctx.lineTo(rx, ry);
                  ctx.stroke();
                }

                // Point
                ctx.fillStyle = k === 0 ? '#888888' : '#3fb9a0';
                ctx.beginPath();
                ctx.arc(rx, ry, 5, 0, 2 * Math.PI);
                ctx.fill();

                // Label
                ctx.fillStyle = '#e0e0e0';
                ctx.font = '11px monospace';
                var lx = cx + (R + 18) * Math.cos(angle);
                var ly = cy - (R + 18) * Math.sin(angle);
                ctx.fillText('w^' + k, lx, ly);
              }

              // Close polygon
              if (p > 1) {
                ctx.strokeStyle = 'rgba(63,185,160,0.4)';
                ctx.beginPath();
                ctx.moveTo(cx + R * Math.cos(2 * Math.PI * (p-1) / p), cy - R * Math.sin(2 * Math.PI * (p-1) / p));
                ctx.lineTo(cx + R, cy);
                ctx.stroke();
              }

              ctx.fillStyle = '#aaaaaa';
              ctx.font = '12px sans-serif';
              ctx.fillText('Grey = root x=1 (excluded from cyclotomic poly)', W / 2, H - 12);
            };

            engine.start();
            return engine;
          }
        }
      ],
      exercises: [
        {
          id: 'ch13-sec03-ex01',
          type: 'mcq',
          question: 'Which prime works for Eisenstein on \\(x^3 - 2\\)?',
          options: ['p = 3', 'p = 2', 'p = 5', 'No prime works'],
          answer: 1,
          hint: 'Check: does p divide all non-leading coefficients, and does p^2 fail to divide the constant?',
          solution: 'The coefficients are \\(1, 0, 0, -2\\). Take \\(p = 2\\): \\(2 \\nmid 1\\) (leading), \\(2 \\mid 0\\) and \\(2 \\mid 0\\) and \\(2 \\mid -2\\), and \\(4 \\nmid -2\\). All conditions are satisfied.'
        },
        {
          id: 'ch13-sec03-ex02',
          type: 'short-answer',
          question: 'Use Eisenstein with a substitution to prove \\(x^4 + 1\\) is irreducible over \\(\\mathbb{Q}\\).',
          hint: 'Try substituting \\(x = y + 1\\) and expand.',
          solution: 'Substitute \\(x = y + 1\\): \\((y+1)^4 + 1 = y^4 + 4y^3 + 6y^2 + 4y + 2\\). Apply Eisenstein with \\(p = 2\\): \\(2 \\nmid 1\\) (leading), \\(2 \\mid 4, 6, 4, 2\\), and \\(4 \\nmid 2\\). So \\((y+1)^4+1\\) is irreducible, hence \\(x^4+1\\) is irreducible over \\(\\mathbb{Q}\\).'
        },
        {
          id: 'ch13-sec03-ex03',
          type: 'mcq',
          question: 'The 7th cyclotomic polynomial \\(\\Phi_7(x) = x^6 + x^5 + x^4 + x^3 + x^2 + x + 1\\) is:',
          options: [
            'Reducible over Q because it has degree 6',
            'Irreducible over Q by direct application of Eisenstein',
            'Irreducible over Q by Eisenstein after substituting x = y+1',
            'Reducible over Q as a product of two cubics'
          ],
          answer: 2,
          hint: 'Recall the proof for general \\(\\Phi_p(x)\\) with \\(p\\) prime.',
          solution: 'By the theorem, \\(\\Phi_p(y+1) = y^{p-1} + \\binom{p}{1}y^{p-2} + \\cdots + p\\), and Eisenstein applies with the prime \\(p = 7\\). The substitution \\(x = y + 1\\) is essential since Eisenstein does not apply directly to \\(\\Phi_7(x)\\) (all non-leading coefficients are 1).'
        },
        {
          id: 'ch13-sec03-ex04',
          type: 'mcq',
          question: 'Eisenstein with \\(p = 3\\) on \\(f(x) = x^3 + 3x^2 + 9x + 9\\) gives:',
          options: [
            'Irreducible: all conditions satisfied',
            'Inconclusive: 3 divides the leading coefficient',
            'Inconclusive: 9 = 3^2 divides a_0 = 9',
            'Irreducible: by the Rational Root Theorem'
          ],
          answer: 2,
          hint: 'Check all three conditions carefully, especially the third.',
          solution: 'We have \\(a_0 = 9\\), and \\(p^2 = 9\\) divides \\(a_0 = 9\\). Condition (3) fails, so Eisenstein with \\(p = 3\\) is inconclusive. (The polynomial is actually reducible: try checking for roots.)'
        }
      ]
    },

    // =====================================================================
    //  SECTION 4 — Factorization in F[x]
    // =====================================================================
    {
      id: 'ch13-sec04',
      title: 'Factorization in F[x]',
      content: `
<div class="env-block intuition">
    <div class="env-title">F[x] is a Unique Factorization Domain</div>
    <div class="env-body">
        <p>The Fundamental Theorem of Arithmetic says every integer greater than 1 factors uniquely into primes. An analogous theorem holds for \\(F[x]\\): every nonconstant polynomial factors uniquely into irreducible polynomials. This powerful result follows from the fact that \\(F[x]\\) is a principal ideal domain.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> Prove that \\(F[x]\\) is a principal ideal domain and deduce unique factorization of polynomials.</p>

<h2>13.4 \\(F[x]\\) is a Principal Ideal Domain</h2>

<div class="env-block definition">
<strong>Definition 13.4.1.</strong> A <em>principal ideal domain</em> (PID) is an integral domain in which every ideal is principal, i.e., generated by a single element.
</div>

<div class="env-block theorem">
<strong>Theorem 13.4.2.</strong> If \\(F\\) is a field, then \\(F[x]\\) is a principal ideal domain.
</div>

<div class="env-block proof">
<strong>Proof.</strong> Let \\(I\\) be a nonzero ideal of \\(F[x]\\). Among all nonzero polynomials in \\(I\\), choose one of minimal degree, say \\(d(x)\\). We claim \\(I = (d(x))\\).

Clearly \\((d(x)) \\subseteq I\\). Conversely, let \\(f(x) \\in I\\). By the division algorithm, \\(f(x) = d(x)q(x) + r(x)\\) with \\(r = 0\\) or \\(\\deg(r) < \\deg(d)\\). Now \\(r(x) = f(x) - d(x)q(x) \\in I\\). If \\(r \\neq 0\\), then \\(r \\in I\\) has smaller degree than \\(d\\), contradicting the minimality of \\(d\\). So \\(r = 0\\) and \\(f(x) = d(x)q(x) \\in (d(x))\\). \\(\\square\\)
</div>

<div class="env-block remark">
<strong>Remark 13.4.3.</strong> The proof uses only the division algorithm, not any other property of fields. Any Euclidean domain is a PID by the same argument.
</div>

<h3>Irreducibles are Maximal</h3>

<div class="env-block theorem">
<strong>Theorem 13.4.4.</strong> In \\(F[x]\\), an ideal \\((p(x))\\) is maximal if and only if \\(p(x)\\) is irreducible.
</div>

<div class="env-block proof">
<strong>Proof.</strong> (\\(\\Rightarrow\\)) Suppose \\((p(x))\\) is maximal and \\(p = fg\\). Then \\((p) \\subseteq (f)\\). Since \\((p)\\) is maximal, either \\((f) = (p)\\) or \\((f) = F[x]\\). In the latter case \\(f\\) is a unit; in the former \\(g\\) is a unit. So \\(p\\) is irreducible.

(\\(\\Leftarrow\\)) Suppose \\(p\\) is irreducible and \\((p) \\subseteq (f)\\). Then \\(f \\mid p\\), so \\(p = fg\\) for some \\(g\\). By irreducibility, \\(f\\) or \\(g\\) is a unit. If \\(f\\) is a unit then \\((f) = F[x]\\). If \\(g\\) is a unit then \\((f) = (p)\\). Thus \\((p)\\) is maximal. \\(\\square\\)
</div>

<div class="env-block theorem">
<strong>Corollary 13.4.5.</strong> If \\(p(x)\\) is irreducible over \\(F\\), then \\(F[x]/(p(x))\\) is a field.
</div>

<h2>13.4.2 Unique Factorization</h2>

<div class="env-block theorem">
<strong>Theorem 13.4.6 (Unique Factorization in \\(F[x]\\)).</strong> Every nonconstant polynomial \\(f(x) \\in F[x]\\) can be written as
\\[f(x) = c \\, p_1(x) p_2(x) \\cdots p_k(x)\\]
where \\(c \\in F^\\times\\) and each \\(p_i(x)\\) is monic irreducible. This factorization is unique up to the ordering of the factors.
</div>

<div class="env-block proof">
<strong>Proof sketch.</strong> <em>Existence:</em> If \\(f\\) is irreducible, we are done. Otherwise \\(f = gh\\) with \\(\\deg(g), \\deg(h) < \\deg(f)\\), and we apply induction on degree.

<em>Uniqueness:</em> Suppose \\(c p_1 \\cdots p_k = d q_1 \\cdots q_m\\). Since \\(p_1\\) is irreducible (hence prime in the PID \\(F[x]\\)), \\(p_1 \\mid q_j\\) for some \\(j\\). Since \\(q_j\\) is irreducible and \\(p_1\\) is not a unit, \\(p_1\\) and \\(q_j\\) are associates (both monic implies \\(p_1 = q_j\\)). Cancel and induct. \\(\\square\\)
</div>

<div class="env-block example">
<strong>Example 13.4.7.</strong> Factor \\(x^4 - 1\\) over \\(\\mathbb{Q}\\):
\\[x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x-1)(x+1)(x^2+1).\\]
Each factor is irreducible over \\(\\mathbb{Q}\\), giving the unique factorization. Over \\(\\mathbb{R}\\), the same factorization holds. Over \\(\\mathbb{C}\\), we get \\((x-1)(x+1)(x-i)(x+i)\\).
</div>

<div class="env-block example">
<strong>Example 13.4.8.</strong> Factor \\(x^3 + x + 1\\) over \\(\\mathbb{F}_2\\). Check roots: \\(f(0) = 1 \\neq 0\\), \\(f(1) = 1 + 1 + 1 = 1 \\neq 0\\). No root in \\(\\mathbb{F}_2\\), so \\(f\\) is irreducible over \\(\\mathbb{F}_2\\) (degree 3, no root implies irreducible).
</div>

<div class="viz-placeholder" data-viz="viz-factorization-tree"></div>

<div class="viz-placeholder" data-viz="viz-pid-ideal-lattice"></div>
`,
      visualizations: [
        {
          id: 'viz-factorization-tree',
          title: 'Polynomial Factorization Tree',
          setup(body, controls) {
            const engine = new VizEngine(body, { scale: 1 });
            const canvas = engine.canvas, ctx = engine.ctx;
            let choice = 0;
            var trees = [
              { label: 'x^4 - 1 over Q', nodes: [
                { t: 'x^4 - 1', x: 0.5, y: 0.08, ch: [1,2] },
                { t: 'x^2 - 1', x: 0.3, y: 0.35, ch: [3,4] },
                { t: 'x^2 + 1', x: 0.7, y: 0.35, ch: [], ir: 1 },
                { t: 'x - 1', x: 0.2, y: 0.65, ch: [], ir: 1 },
                { t: 'x + 1', x: 0.4, y: 0.65, ch: [], ir: 1 }
              ]},
              { label: 'x^6 - 1 over Q', nodes: [
                { t: 'x^6 - 1', x: 0.5, y: 0.05, ch: [1,2] },
                { t: 'x^3 - 1', x: 0.25, y: 0.3, ch: [3,4] },
                { t: 'x^3 + 1', x: 0.75, y: 0.3, ch: [5,6] },
                { t: 'x - 1', x: 0.12, y: 0.6, ch: [], ir: 1 },
                { t: 'x^2+x+1', x: 0.38, y: 0.6, ch: [], ir: 1 },
                { t: 'x + 1', x: 0.62, y: 0.6, ch: [], ir: 1 },
                { t: 'x^2-x+1', x: 0.88, y: 0.6, ch: [], ir: 1 }
              ]},
              { label: 'x^4 - 1 over C', nodes: [
                { t: 'x^4 - 1', x: 0.5, y: 0.08, ch: [1,2,3,4] },
                { t: 'x - 1', x: 0.15, y: 0.55, ch: [], ir: 1 },
                { t: 'x + 1', x: 0.38, y: 0.55, ch: [], ir: 1 },
                { t: 'x - i', x: 0.62, y: 0.55, ch: [], ir: 1 },
                { t: 'x + i', x: 0.85, y: 0.55, ch: [], ir: 1 }
              ]}
            ];
            VizEngine.createButton(controls, 'x^4-1 / Q', function() { choice = 0; });
            VizEngine.createButton(controls, 'x^6-1 / Q', function() { choice = 1; });
            VizEngine.createButton(controls, 'x^4-1 / C', function() { choice = 2; });
            engine.onDraw = function() {
              var W = canvas.width, H = canvas.height;
              ctx.clearRect(0, 0, W, H);
              var tree = trees[choice];
              ctx.fillStyle = '#58a6ff'; ctx.font = '15px sans-serif';
              ctx.textAlign = 'center'; ctx.fillText(tree.label, W/2, 18);
              ctx.strokeStyle = '#555555'; ctx.lineWidth = 1.5;
              for (var i = 0; i < tree.nodes.length; i++) {
                var nd = tree.nodes[i], nx = nd.x*W, ny = nd.y*H+30;
                for (var ci = 0; ci < nd.ch.length; ci++) {
                  var c = tree.nodes[nd.ch[ci]];
                  ctx.beginPath(); ctx.moveTo(nx, ny+10); ctx.lineTo(c.x*W, c.y*H+20); ctx.stroke();
                }
              }
              for (var j = 0; j < tree.nodes.length; j++) {
                var n = tree.nodes[j], px = n.x*W, py = n.y*H+30;
                ctx.fillStyle = n.ir ? '#264653' : '#1a1a40';
                ctx.strokeStyle = n.ir ? '#3fb9a0' : '#58a6ff'; ctx.lineWidth = 2;
                ctx.font = '12px monospace';
                var tw = ctx.measureText(n.t).width + 16;
                ctx.beginPath(); ctx.roundRect(px-tw/2, py-11, tw, 22, 4); ctx.fill(); ctx.stroke();
                ctx.fillStyle = n.ir ? '#3fb9a0' : '#e0e0e0';
                ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(n.t, px, py);
              }
              ctx.fillStyle = '#888888'; ctx.font = '11px sans-serif';
              ctx.textBaseline = 'top'; ctx.fillText('Green = irreducible factor', W/2, H-16);
            };
            engine.start();
            return engine;
          }
        },
        {
          id: 'viz-pid-ideal-lattice',
          title: 'Ideal Lattice of \\(F[x]\\)',
          setup(body, controls) {
            const engine = new VizEngine(body, { scale: 1 });
            const canvas = engine.canvas, ctx = engine.ctx;
            var ideals = [
              { l: 'Q[x]', x: 0.5, y: 0.08, c: '#e0e0e0' },
              { l: '(x-1)', x: 0.2, y: 0.3, c: '#3fb9a0' },
              { l: '(x+1)', x: 0.4, y: 0.3, c: '#3fb9a0' },
              { l: '(x^2+1)', x: 0.6, y: 0.3, c: '#3fb9a0' },
              { l: '(x^2-1)', x: 0.3, y: 0.52, c: '#f0883e' },
              { l: '(x^4-1)', x: 0.5, y: 0.72, c: '#f0883e' },
              { l: '{0}', x: 0.5, y: 0.92, c: '#888888' }
            ];
            var edges = [[0,1],[0,2],[0,3],[1,4],[2,4],[3,5],[4,5],[5,6]];
            engine.onDraw = function() {
              var W = canvas.width, H = canvas.height;
              ctx.clearRect(0, 0, W, H);
              ctx.fillStyle = '#58a6ff'; ctx.font = '15px sans-serif'; ctx.textAlign = 'center';
              ctx.fillText('Ideal Lattice: Q[x] (selected ideals)', W/2, 18);
              ctx.strokeStyle = '#444444'; ctx.lineWidth = 1;
              for (var e = 0; e < edges.length; e++) {
                var f = ideals[edges[e][0]], t = ideals[edges[e][1]];
                ctx.beginPath(); ctx.moveTo(f.x*W, f.y*H+15); ctx.lineTo(t.x*W, t.y*H-5); ctx.stroke();
              }
              ctx.font = '12px monospace'; ctx.textBaseline = 'middle';
              for (var i = 0; i < ideals.length; i++) {
                var nd = ideals[i], px = nd.x*W, py = nd.y*H+5;
                var tw = ctx.measureText(nd.l).width + 14;
                ctx.fillStyle = '#1a1a40'; ctx.fillRect(px-tw/2, py-11, tw, 22);
                ctx.strokeStyle = nd.c; ctx.lineWidth = 1.5; ctx.strokeRect(px-tw/2, py-11, tw, 22);
                ctx.fillStyle = nd.c; ctx.textAlign = 'center'; ctx.fillText(nd.l, px, py);
              }
              ctx.fillStyle = '#888888'; ctx.font = '11px sans-serif'; ctx.textBaseline = 'top';
              ctx.fillText('Green = maximal (irreducible generator)', W/2, H-14);
            };
            engine.start();
            return engine;
          }
        }
      ],
      exercises: [
        {
          id: 'ch13-sec04-ex01',
          type: 'mcq',
          question: 'Why is every ideal of \\(F[x]\\) principal?',
          options: [
            'Because F[x] has finitely many ideals',
            'Because the division algorithm lets us reduce to a minimal-degree generator',
            'Because F[x] is a field',
            'Because polynomials commute'
          ],
          answer: 1,
          hint: 'Review the proof of Theorem 13.4.2. What key tool does it use?',
          solution: 'The proof takes any nonzero ideal \\(I\\), picks a polynomial \\(d(x)\\) of minimal degree in \\(I\\), and uses the division algorithm to show every element of \\(I\\) is a multiple of \\(d(x)\\). The division algorithm is the essential ingredient.'
        },
        {
          id: 'ch13-sec04-ex02',
          type: 'short-answer',
          question: 'Factor \\(x^4 + x^2 + 1\\) into irreducibles over \\(\\mathbb{Q}\\).',
          hint: 'Try adding and subtracting \\(x^2\\) to complete a square-like expression, or check if it factors as a product of two quadratics.',
          solution: 'We have \\(x^4 + x^2 + 1 = (x^2 + x + 1)(x^2 - x + 1)\\). Both factors are irreducible over \\(\\mathbb{Q}\\) since they have negative discriminant (\\(1 - 4 = -3\\) and \\(1 - 4 = -3\\)), so they have no real (hence no rational) roots.'
        },
        {
          id: 'ch13-sec04-ex03',
          type: 'mcq',
          question: 'If \\(p(x)\\) is irreducible over \\(F\\), what is \\(F[x]/(p(x))\\)?',
          options: [
            'An integral domain but not a field',
            'A field',
            'A principal ideal domain',
            'The zero ring'
          ],
          answer: 1,
          hint: 'Irreducible elements generate maximal ideals in a PID.',
          solution: 'Since \\(F[x]\\) is a PID, irreducible elements generate maximal ideals. The quotient of a commutative ring by a maximal ideal is a field. So \\(F[x]/(p(x))\\) is a field.'
        },
        {
          id: 'ch13-sec04-ex04',
          type: 'short-answer',
          question: 'Factor \\(x^3 + x + 1\\) over \\(\\mathbb{F}_3\\).',
          hint: 'First check for roots in \\(\\{0, 1, 2\\}\\).',
          solution: 'Evaluate: \\(f(0) = 1\\), \\(f(1) = 1 + 1 + 1 = 0\\) in \\(\\mathbb{F}_3\\). So \\(x = 1\\) is a root and \\((x - 1) \\mid f(x)\\). Dividing: \\(x^3 + x + 1 = (x - 1)(x^2 + x + 2)\\) in \\(\\mathbb{F}_3\\). Check \\(x^2 + x + 2\\): \\(f(0) = 2\\), \\(f(1) = 1+1+2 = 1\\), \\(f(2) = 4+2+2 = 8 \\equiv 2\\). No roots, so \\(x^2 + x + 2\\) is irreducible over \\(\\mathbb{F}_3\\).'
        }
      ]
    },

    // =====================================================================
    //  SECTION 5 — Polynomial Rings over Rings
    // =====================================================================
    {
      id: 'ch13-sec05',
      title: 'Polynomial Rings over Rings',
      content: `
<div class="env-block intuition">
    <div class="env-title">Beyond Fields: Polynomials over General Rings</div>
    <div class="env-body">
        <p>When coefficients come from a general ring \\(R\\) rather than a field, \\(R[x]\\) loses the division algorithm but retains many useful properties. Gauss's lemma provides the key bridge: it allows us to transfer irreducibility results between \\(\\mathbb{Z}[x]\\) and \\(\\mathbb{Q}[x]\\), connecting the arithmetic of integers and rationals.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> Study \\(R[x]\\) for general rings \\(R\\), introduce content and primitivity, and prove Gauss's lemma.</p>

<h2>13.5 Properties of \\(R[x]\\)</h2>

<div class="env-block theorem">
<strong>Proposition 13.5.1.</strong> Let \\(R\\) be a commutative ring with unity. Then:
<ol>
<li>\\(R[x]\\) is a commutative ring with unity (the unity is the constant polynomial 1).</li>
<li>If \\(R\\) is an integral domain, then so is \\(R[x]\\).</li>
<li>The units of \\(R[x]\\) are precisely the units of \\(R\\) (the constant polynomials that are units in \\(R\\)).</li>
</ol>
</div>

<div class="env-block proof">
<strong>Proof of (3).</strong> If \\(f(x)g(x) = 1\\) in \\(R[x]\\) and \\(R\\) is an integral domain, then \\(\\deg(f) + \\deg(g) = \\deg(1) = 0\\), so both \\(f\\) and \\(g\\) are constants, hence units in \\(R\\). \\(\\square\\)
</div>

<div class="env-block remark">
<strong>Remark 13.5.2.</strong> When \\(R\\) has zero divisors, (3) can fail. In \\((\\mathbb{Z}/4\\mathbb{Z})[x]\\), the polynomial \\(1 + 2x\\) is a unit: \\((1+2x)(1+2x) = 1 + 4x + 4x^2 = 1\\).
</div>

<h3>Content and Primitivity</h3>

<div class="env-block definition">
<strong>Definition 13.5.3 (Content).</strong> Let \\(f(x) = a_n x^n + \\cdots + a_0 \\in \\mathbb{Z}[x]\\). The <em>content</em> of \\(f\\), denoted \\(\\mathrm{cont}(f)\\), is \\(\\gcd(a_0, a_1, \\ldots, a_n)\\). A polynomial is <em>primitive</em> if \\(\\mathrm{cont}(f) = 1\\).
</div>

<div class="env-block example">
<strong>Example 13.5.4.</strong> The polynomial \\(6x^3 + 9x + 3\\) has content \\(\\gcd(6, 9, 3) = 3\\), so it is not primitive. We can write it as \\(3(2x^3 + 3x + 1)\\), where \\(2x^3 + 3x + 1\\) is primitive.
</div>

<h3>Gauss's Lemma</h3>

<div class="env-block theorem">
<strong>Theorem 13.5.5 (Gauss's Lemma).</strong> The product of two primitive polynomials in \\(\\mathbb{Z}[x]\\) is primitive.
</div>

<div class="env-block proof">
<strong>Proof.</strong> Let \\(f(x) = \\sum a_i x^i\\) and \\(g(x) = \\sum b_j x^j\\) be primitive, and suppose their product \\(h = fg\\) is not primitive. Then some prime \\(p\\) divides all coefficients of \\(h\\). Since \\(f\\) is primitive, not all \\(a_i\\) are divisible by \\(p\\); let \\(a_r\\) be the first coefficient not divisible by \\(p\\). Similarly, let \\(b_s\\) be the first coefficient of \\(g\\) not divisible by \\(p\\).

The coefficient of \\(x^{r+s}\\) in \\(h\\) is
\\[c_{r+s} = \\sum_{i+j=r+s} a_i b_j.\\]
Every term with \\(i < r\\) has \\(p \\mid a_i\\), and every term with \\(j < s\\) (equivalently \\(i > r\\)) has \\(p \\mid b_j\\). The only remaining term is \\(a_r b_s\\), which is not divisible by \\(p\\). So \\(p \\nmid c_{r+s}\\), contradicting \\(p \\mid c_k\\) for all \\(k\\). \\(\\square\\)
</div>

<div class="env-block theorem">
<strong>Corollary 13.5.6.</strong> For any nonzero \\(f \\in \\mathbb{Z}[x]\\), \\(\\mathrm{cont}(fg) = \\mathrm{cont}(f) \\cdot \\mathrm{cont}(g)\\) (up to sign).
</div>

<h3>Connecting \\(\\mathbb{Z}[x]\\) and \\(\\mathbb{Q}[x]\\)</h3>

<div class="env-block theorem">
<strong>Theorem 13.5.7 (Gauss's Lemma, Version 2).</strong> Let \\(f(x) \\in \\mathbb{Z}[x]\\) be primitive. If \\(f\\) is reducible in \\(\\mathbb{Q}[x]\\), then \\(f\\) is reducible in \\(\\mathbb{Z}[x]\\). Equivalently, if \\(f\\) is irreducible in \\(\\mathbb{Z}[x]\\) and primitive, then \\(f\\) is irreducible in \\(\\mathbb{Q}[x]\\).
</div>

<div class="env-block proof">
<strong>Proof.</strong> Suppose \\(f = gh\\) in \\(\\mathbb{Q}[x]\\) with \\(1 \\leq \\deg(g), \\deg(h) < \\deg(f)\\). Clearing denominators: \\(cf = g_0 h_0\\) where \\(c \\in \\mathbb{Z}\\) and \\(g_0, h_0 \\in \\mathbb{Z}[x]\\). Factor out contents: \\(g_0 = \\mathrm{cont}(g_0) \\cdot g_1\\), \\(h_0 = \\mathrm{cont}(h_0) \\cdot h_1\\) with \\(g_1, h_1\\) primitive. Then \\(cf = \\mathrm{cont}(g_0) \\cdot \\mathrm{cont}(h_0) \\cdot g_1 h_1\\). By Gauss's lemma, \\(g_1 h_1\\) is primitive. Comparing contents on both sides: \\(c = \\pm\\, \\mathrm{cont}(g_0) \\cdot \\mathrm{cont}(h_0)\\), so \\(f = \\pm g_1 h_1\\), a nontrivial factorization in \\(\\mathbb{Z}[x]\\). \\(\\square\\)
</div>

<div class="env-block example">
<strong>Example 13.5.8.</strong> To show \\(x^4 + 1\\) is irreducible over \\(\\mathbb{Q}\\), it suffices by Gauss to show it is irreducible in \\(\\mathbb{Z}[x]\\). We showed this using Eisenstein with substitution \\(x \\mapsto x+1\\) in Section 3.
</div>

<div class="env-block remark">
<strong>Remark 13.5.9.</strong> This framework generalizes: if \\(R\\) is a UFD, then \\(R[x]\\) is also a UFD. This is proven by establishing a version of Gauss's lemma for arbitrary UFDs, using the notion of content defined via the GCD in \\(R\\).
</div>

<div class="viz-placeholder" data-viz="viz-content-calculator"></div>

<div class="viz-placeholder" data-viz="viz-gauss-bridge"></div>
`,
      visualizations: [
        {
          id: 'viz-content-calculator',
          title: 'Content and Primitivity',
          setup(body, controls) {
            const engine = new VizEngine(body, { scale: 1 });
            const canvas = engine.canvas;
            const ctx = engine.ctx;

            // Coefficients (ascending): a0, a1, a2, a3
            let coeffs = [6, 9, 0, 3];

            VizEngine.createButton(controls, '3x^3 + 9x + 6', function() { coeffs = [6, 9, 0, 3]; });
            VizEngine.createButton(controls, '2x^3 + 3x + 1', function() { coeffs = [1, 3, 0, 2]; });
            VizEngine.createButton(controls, '12x^2 + 8x + 4', function() { coeffs = [4, 8, 12]; });
            VizEngine.createButton(controls, '5x^3 + x^2 + 3', function() { coeffs = [3, 0, 1, 5]; });

            function gcd(a, b) {
              a = Math.abs(a); b = Math.abs(b);
              while (b) { var t = b; b = a % b; a = t; }
              return a;
            }

            engine.onDraw = function() {
              var W = canvas.width, H = canvas.height;
              ctx.clearRect(0, 0, W, H);

              ctx.fillStyle = '#58a6ff';
              ctx.font = '15px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Content and Primitivity in Z[x]', W / 2, 18);

              var content = 0;
              for (var i = 0; i < coeffs.length; i++) content = gcd(content, coeffs[i]);
              if (content === 0) content = 1;

              var y = 50;
              ctx.font = '13px monospace';
              ctx.textAlign = 'left';
              ctx.fillStyle = '#e0e0e0';

              // Show polynomial
              var terms = [];
              for (var j = coeffs.length - 1; j >= 0; j--) {
                if (coeffs[j] === 0) continue;
                var c = coeffs[j];
                var sign = c >= 0 ? (terms.length > 0 ? ' + ' : '') : (terms.length > 0 ? ' - ' : '-');
                var ac = Math.abs(c);
                if (j === 0) terms.push(sign + ac);
                else if (j === 1) terms.push(sign + (ac === 1 ? '' : '' + ac) + 'x');
                else terms.push(sign + (ac === 1 ? '' : '' + ac) + 'x^' + j);
              }
              ctx.fillText('f(x) = ' + (terms.join('') || '0'), 20, y);
              y += 25;

              ctx.fillText('Coefficients: ' + coeffs.join(', '), 20, y);
              y += 25;

              ctx.fillStyle = '#3fb9a0';
              ctx.fillText('cont(f) = gcd(' + coeffs.filter(function(c) { return c !== 0; }).map(function(c) { return Math.abs(c); }).join(', ') + ') = ' + content, 20, y);
              y += 25;

              var isPrimitive = content === 1;
              ctx.fillStyle = isPrimitive ? '#3fb9a0' : '#f0883e';
              ctx.fillText(isPrimitive ? 'f is PRIMITIVE (content = 1)' : 'f is NOT primitive. Factor: f = ' + content + ' * (primitive part)', 20, y);
              y += 30;

              if (!isPrimitive) {
                var primCoeffs = coeffs.map(function(c) { return c / content; });
                var primTerms = [];
                for (var k = primCoeffs.length - 1; k >= 0; k--) {
                  if (primCoeffs[k] === 0) continue;
                  var pc = primCoeffs[k];
                  var s = pc >= 0 ? (primTerms.length > 0 ? ' + ' : '') : (primTerms.length > 0 ? ' - ' : '-');
                  var apc = Math.abs(pc);
                  if (k === 0) primTerms.push(s + apc);
                  else if (k === 1) primTerms.push(s + (apc === 1 ? '' : '' + apc) + 'x');
                  else primTerms.push(s + (apc === 1 ? '' : '' + apc) + 'x^' + k);
                }
                ctx.fillStyle = '#e0e0e0';
                ctx.fillText('Primitive part: ' + (primTerms.join('') || '0'), 20, y);
              }
            };

            engine.start();
            return engine;
          }
        },
        {
          id: 'viz-gauss-bridge',
          title: 'Gauss Lemma: Bridge between Z[x] and Q[x]',
          setup(body, controls) {
            const engine = new VizEngine(body, { scale: 1 });
            const canvas = engine.canvas;
            const ctx = engine.ctx;

            engine.onDraw = function() {
              var W = canvas.width, H = canvas.height;
              ctx.clearRect(0, 0, W, H);

              ctx.fillStyle = '#58a6ff';
              ctx.font = '15px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText("Gauss's Lemma: Connecting Z[x] and Q[x]", W / 2, 20);

              // Two boxes
              var bw = W * 0.35, bh = H * 0.5;
              var lx = W * 0.1, rx = W * 0.55;
              var by = H * 0.2;

              // Z[x] box
              ctx.strokeStyle = '#3fb9a0';
              ctx.lineWidth = 2;
              ctx.strokeRect(lx, by, bw, bh);
              ctx.fillStyle = '#3fb9a0';
              ctx.font = '16px sans-serif';
              ctx.fillText('Z[x]', lx + bw / 2, by - 8);

              ctx.font = '12px sans-serif';
              ctx.fillStyle = '#e0e0e0';
              var lcy = by + 30;
              ctx.fillText('Integral domain', lx + bw/2, lcy); lcy += 20;
              ctx.fillText('NOT a PID', lx + bw/2, lcy); lcy += 20;
              ctx.fillText('IS a UFD', lx + bw/2, lcy); lcy += 20;
              ctx.fillText('No division algorithm', lx + bw/2, lcy); lcy += 20;
              ctx.fillText('Has content/primitivity', lx + bw/2, lcy);

              // Q[x] box
              ctx.strokeStyle = '#58a6ff';
              ctx.strokeRect(rx, by, bw, bh);
              ctx.fillStyle = '#58a6ff';
              ctx.font = '16px sans-serif';
              ctx.fillText('Q[x]', rx + bw / 2, by - 8);

              ctx.font = '12px sans-serif';
              ctx.fillStyle = '#e0e0e0';
              var rcy = by + 30;
              ctx.fillText('Euclidean domain', rx + bw/2, rcy); rcy += 20;
              ctx.fillText('IS a PID', rx + bw/2, rcy); rcy += 20;
              ctx.fillText('IS a UFD', rx + bw/2, rcy); rcy += 20;
              ctx.fillText('Has division algorithm', rx + bw/2, rcy); rcy += 20;
              ctx.fillText('Unique factorization', rx + bw/2, rcy);

              // Arrow bridge
              var arrowY = by + bh / 2;
              ctx.strokeStyle = '#f0883e';
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(lx + bw + 5, arrowY - 5);
              ctx.lineTo(rx - 5, arrowY - 5);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(rx - 5, arrowY + 5);
              ctx.lineTo(lx + bw + 5, arrowY + 5);
              ctx.stroke();
              // Arrowheads
              ctx.beginPath();
              ctx.moveTo(rx - 5, arrowY - 5);
              ctx.lineTo(rx - 12, arrowY - 9);
              ctx.lineTo(rx - 12, arrowY - 1);
              ctx.fill();
              ctx.beginPath();
              ctx.moveTo(lx + bw + 5, arrowY + 5);
              ctx.lineTo(lx + bw + 12, arrowY + 1);
              ctx.lineTo(lx + bw + 12, arrowY + 9);
              ctx.fill();

              ctx.fillStyle = '#f0883e';
              ctx.font = '12px sans-serif';
              ctx.fillText("Gauss's Lemma", (lx + bw + rx) / 2, arrowY - 15);
              ctx.fillText('Primitive + irr in Z[x]', (lx + bw + rx) / 2, arrowY + 20);
              ctx.fillText('=> irr in Q[x]', (lx + bw + rx) / 2, arrowY + 34);
            };

            engine.start();
            return engine;
          }
        }
      ],
      exercises: [
        {
          id: 'ch13-sec05-ex01',
          type: 'mcq',
          question: 'What is the content of \\(f(x) = 12x^3 + 18x^2 + 6\\)?',
          options: ['2', '3', '6', '12'],
          answer: 2,
          hint: 'Compute \\(\\gcd(12, 18, 0, 6)\\).',
          solution: '\\(\\mathrm{cont}(f) = \\gcd(12, 18, 0, 6) = 6\\). So \\(f = 6(2x^3 + 3x^2 + 1)\\).'
        },
        {
          id: 'ch13-sec05-ex02',
          type: 'short-answer',
          question: 'Show that the product \\((2x + 1)(3x + 1) = 6x^2 + 5x + 1\\) is primitive, verifying Gauss\'s lemma.',
          hint: 'Check that both factors are primitive, then verify the product is primitive.',
          solution: 'We have \\(\\mathrm{cont}(2x + 1) = \\gcd(2, 1) = 1\\) and \\(\\mathrm{cont}(3x + 1) = \\gcd(3, 1) = 1\\), so both are primitive. Their product is \\(6x^2 + 5x + 1\\) with \\(\\mathrm{cont} = \\gcd(6, 5, 1) = 1\\), confirming it is primitive, as predicted by Gauss\'s lemma.'
        },
        {
          id: 'ch13-sec05-ex03',
          type: 'mcq',
          question: 'Which statement about \\(\\mathbb{Z}[x]\\) is TRUE?',
          options: [
            'Z[x] is a PID',
            'Z[x] is a Euclidean domain',
            'Z[x] is a UFD but not a PID',
            'Z[x] is not a UFD'
          ],
          answer: 2,
          hint: 'Consider the ideal \\((2, x)\\) in \\(\\mathbb{Z}[x]\\). Is it principal?',
          solution: 'The ideal \\((2, x) = \\{2f(x) + xg(x) : f, g \\in \\mathbb{Z}[x]\\}\\) consists of polynomials whose constant term is even. This ideal is not principal: if \\((2, x) = (d(x))\\), then \\(d \\mid 2\\) and \\(d \\mid x\\), forcing \\(d = \\pm 1\\) and \\((d) = \\mathbb{Z}[x]\\), but \\(1 \\notin (2, x)\\). So \\(\\mathbb{Z}[x]\\) is not a PID. However, since \\(\\mathbb{Z}\\) is a UFD, Gauss\'s lemma implies \\(\\mathbb{Z}[x]\\) is also a UFD.'
        },
        {
          id: 'ch13-sec05-ex04',
          type: 'short-answer',
          question: 'Using Gauss\'s lemma, explain why proving \\(x^3 - 2\\) is irreducible in \\(\\mathbb{Z}[x]\\) suffices to show it is irreducible in \\(\\mathbb{Q}[x]\\).',
          hint: 'What is the content of \\(x^3 - 2\\)?',
          solution: 'The polynomial \\(x^3 - 2\\) has content \\(\\gcd(1, 0, 0, -2) = 1\\), so it is primitive. By Gauss\'s lemma (Theorem 13.5.7), a primitive polynomial that is irreducible in \\(\\mathbb{Z}[x]\\) is also irreducible in \\(\\mathbb{Q}[x]\\). Since \\(x^3 - 2\\) has no integer roots (and hence no factorization into lower-degree integer polynomials), it is irreducible in \\(\\mathbb{Z}[x]\\), and therefore irreducible in \\(\\mathbb{Q}[x]\\).'
        }
      ]
    }
  ]
});
