window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
  id: 'ch12',
  number: 12,
  title: 'Ring Homomorphisms and Factorization',
  subtitle: 'Ring homomorphisms, isomorphism theorems, PIDs, UFDs, Euclidean domains',
  sections: [

    // =====================================================================
    //  SECTION 1 — Ring Homomorphisms
    // =====================================================================
    {
      id: 'ch12-sec01',
      title: '1. Ring Homomorphisms',
      content: `
<h2>Ring Homomorphisms</h2>
<p class="section-roadmap"><em>In this section we extend the concept of homomorphism from groups to rings, study their kernels and images, and establish the fundamental connection between kernels and ideals.</em></p>

<div class="definition">
<strong>Definition (Ring Homomorphism).</strong> Let \\((R, +, \\cdot)\\) and \\((S, +, \\cdot)\\) be rings. A function \\(\\phi: R \\to S\\) is a <em>ring homomorphism</em> if for all \\(a, b \\in R\\):
<ol>
<li>\\(\\phi(a + b) = \\phi(a) + \\phi(b)\\) &nbsp;(preserves addition)</li>
<li>\\(\\phi(a \\cdot b) = \\phi(a) \\cdot \\phi(b)\\) &nbsp;(preserves multiplication)</li>
<li>\\(\\phi(1_R) = 1_S\\) &nbsp;(preserves the multiplicative identity, when rings are unital)</li>
</ol>
</div>

<p>Condition (1) says \\(\\phi\\) is a group homomorphism of the additive groups. Condition (2) adds compatibility with the ring multiplication. Together they ensure that the algebraic structure of \\(R\\) is faithfully reflected inside \\(S\\).</p>

<div class="example">
<strong>Example 1: Evaluation Homomorphism.</strong> Fix a ring \\(R\\) and an element \\(a \\in R\\). The map
\\[\\text{ev}_a : R[x] \\to R, \\quad f(x) \\mapsto f(a)\\]
is a ring homomorphism. It sends a polynomial to its value at \\(a\\). This seemingly simple map is enormously powerful: its kernel is the ideal \\((x - a)\\), giving rise to the Factor Theorem.
</div>

<div class="example">
<strong>Example 2: Reduction Modulo \\(n\\).</strong> The natural map
\\[\\pi: \\mathbb{Z} \\to \\mathbb{Z}/n\\mathbb{Z}, \\quad a \\mapsto a \\bmod n\\]
is a surjective ring homomorphism with kernel \\(n\\mathbb{Z}\\). This is the prototypical example of a quotient map for rings.
</div>

<div class="example">
<strong>Example 3: Complex Conjugation.</strong> The map \\(\\phi: \\mathbb{C} \\to \\mathbb{C}\\) defined by \\(\\phi(a + bi) = a - bi\\) is a ring automorphism (a bijective homomorphism from a ring to itself). It preserves both addition and multiplication, and its kernel is trivial.
</div>

<h3>Kernel and Image</h3>

<div class="definition">
<strong>Definition.</strong> Let \\(\\phi: R \\to S\\) be a ring homomorphism.
<ul>
<li>The <em>kernel</em> is \\(\\ker(\\phi) = \\{r \\in R : \\phi(r) = 0_S\\}\\).</li>
<li>The <em>image</em> is \\(\\text{im}(\\phi) = \\{\\phi(r) : r \\in R\\}\\).</li>
</ul>
</div>

<div class="theorem">
<strong>Theorem.</strong> Let \\(\\phi: R \\to S\\) be a ring homomorphism. Then:
<ol>
<li>\\(\\ker(\\phi)\\) is an ideal of \\(R\\).</li>
<li>\\(\\text{im}(\\phi)\\) is a subring of \\(S\\).</li>
<li>\\(\\phi\\) is injective if and only if \\(\\ker(\\phi) = \\{0\\}\\).</li>
</ol>
</div>

<div class="proof">
<strong>Proof sketch (kernel is an ideal).</strong>
Since \\(\\phi\\) is a group homomorphism on additive groups, \\(\\ker(\\phi)\\) is a subgroup of \\((R, +)\\). For the ideal property, let \\(r \\in R\\) and \\(k \\in \\ker(\\phi)\\). Then
\\[\\phi(rk) = \\phi(r)\\phi(k) = \\phi(r) \\cdot 0_S = 0_S,\\]
so \\(rk \\in \\ker(\\phi)\\). Similarly \\(kr \\in \\ker(\\phi)\\). Thus \\(\\ker(\\phi)\\) absorbs multiplication from both sides, making it a two-sided ideal. \\(\\square\\)
</div>

<div class="intuition">
<strong>Key Intuition.</strong> In group theory, the kernel of a homomorphism is a normal subgroup. In ring theory, the kernel gains an extra property: it absorbs ring multiplication. This is exactly the definition of an ideal. Ideals are to rings what normal subgroups are to groups.
</div>

<h3>Isomorphisms, Endomorphisms, Automorphisms</h3>

<p>Special types of ring homomorphisms carry special names:</p>

<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
<thead>
<tr style="background:#1a1a40;">
<th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Name</th>
<th style="padding:8px;border:1px solid #30363d;color:#3fb9a0;">Definition</th>
<th style="padding:8px;border:1px solid #30363d;color:#f0883e;">Example</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px;border:1px solid #30363d;">Isomorphism</td>
<td style="padding:8px;border:1px solid #30363d;">Bijective homomorphism</td>
<td style="padding:8px;border:1px solid #30363d;">\\(\\mathbb{Z}[i]/(1+i) \\cong \\mathbb{Z}/2\\mathbb{Z}\\)</td>
</tr>
<tr>
<td style="padding:8px;border:1px solid #30363d;">Endomorphism</td>
<td style="padding:8px;border:1px solid #30363d;">Homomorphism \\(R \\to R\\)</td>
<td style="padding:8px;border:1px solid #30363d;">Frobenius map \\(x \\mapsto x^p\\) on \\(\\mathbb{F}_p\\)</td>
</tr>
<tr>
<td style="padding:8px;border:1px solid #30363d;">Automorphism</td>
<td style="padding:8px;border:1px solid #30363d;">Bijective endomorphism</td>
<td style="padding:8px;border:1px solid #30363d;">Complex conjugation on \\(\\mathbb{C}\\)</td>
</tr>
</tbody>
</table>

<div class="env-block intuition"><div class="env-title">Looking Ahead</div><div class="env-body"><p>The kernel of a ring homomorphism is always an ideal, and every ideal arises as a kernel of some homomorphism. This correspondence leads directly to the isomorphism theorems, which we study in the next section.</p></div></div>
`,
      visualizations: [
        {
          id: 'viz-ch12-ring-hom-diagram',
          title: 'Ring Homomorphism Diagram',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 420 });

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;';
            wrap.appendChild(controls);

            let modN = 6;
            const slider = VizEngine.createSlider(controls, 'n (mod n)', 2, 12, modN, 1, (v) => {
              modN = Math.round(v);
              draw();
            });

            function draw() {
              viz.clear();
              const ctx = viz.ctx;

              // Title
              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'top';
              ctx.fillText('Ring Homomorphism: Z -> Z/' + modN + 'Z', 350, 15);

              // Draw R (Z) as a set of integers on the left
              const leftCX = 170, rightCX = 530;
              const cy = 230;

              // Ellipse for Z
              ctx.strokeStyle = viz.colors.blue;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.ellipse(leftCX, cy, 120, 160, 0, 0, Math.PI * 2);
              ctx.stroke();
              ctx.fillStyle = viz.colors.blue;
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Z', leftCX, 55);

              // Ellipse for Z/nZ
              ctx.strokeStyle = viz.colors.teal;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.ellipse(rightCX, cy, 100, 140, 0, 0, Math.PI * 2);
              ctx.stroke();
              ctx.fillStyle = viz.colors.teal;
              ctx.fillText('Z/' + modN + 'Z', rightCX, 55);

              // Draw elements of Z (show -n to 2n-1)
              const zElems = [];
              for (let i = -modN; i < 2 * modN; i++) {
                zElems.push(i);
              }

              const elemSpacing = Math.min(24, 280 / zElems.length);
              const startY = cy - (zElems.length - 1) * elemSpacing / 2;

              // Color map for residues
              const residueColors = [
                viz.colors.blue, viz.colors.teal, viz.colors.orange,
                viz.colors.green, viz.colors.purple, viz.colors.red,
                viz.colors.yellow, viz.colors.pink, '#66ccff',
                '#99ff99', '#ff9966', '#cc99ff', '#ff6699'
              ];

              // Draw Z elements and arrows
              for (let i = 0; i < zElems.length; i++) {
                const val = zElems[i];
                const residue = ((val % modN) + modN) % modN;
                const col = residueColors[residue % residueColors.length];
                const ey = startY + i * elemSpacing;

                // Element label
                ctx.fillStyle = col;
                ctx.font = '13px -apple-system,sans-serif';
                ctx.textAlign = 'right';
                ctx.fillText(String(val), leftCX + 20, ey);

                // Arrow to target residue class
                const targetY = 130 + residue * (220 / (modN - 1 || 1));
                ctx.strokeStyle = col + '55';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(leftCX + 30, ey);
                ctx.quadraticCurveTo(350, (ey + targetY) / 2, rightCX - 60, targetY);
                ctx.stroke();
              }

              // Draw Z/nZ elements
              for (let r = 0; r < modN; r++) {
                const col = residueColors[r % residueColors.length];
                const ry = 130 + r * (220 / (modN - 1 || 1));
                ctx.fillStyle = col;
                ctx.font = 'bold 14px -apple-system,sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText('[' + r + ']', rightCX - 15, ry);
              }

              // Kernel highlight
              ctx.fillStyle = viz.colors.red + '33';
              ctx.strokeStyle = viz.colors.red;
              ctx.lineWidth = 1.5;
              const kerElems = zElems.filter(v => ((v % modN) + modN) % modN === 0);
              for (const val of kerElems) {
                const idx = zElems.indexOf(val);
                const ey = startY + idx * elemSpacing;
                ctx.beginPath();
                ctx.arc(leftCX + 12, ey - 2, 10, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
              }

              // Legend
              ctx.fillStyle = viz.colors.red;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('Kernel = ' + modN + 'Z (circled in red)', 20, 405);
              ctx.fillStyle = viz.colors.text;
              ctx.fillText('Each color = one fiber (preimage of a residue class)', 350, 405);
            }

            draw();
          }
        },
        {
          id: 'viz-ch12-eval-hom',
          title: 'Evaluation Homomorphism Explorer',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 380, scale: 30, originY: 300 });

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;';
            wrap.appendChild(controls);

            let evalAt = 2;
            VizEngine.createSlider(controls, 'Evaluate at a =', -5, 5, evalAt, 0.5, (v) => {
              evalAt = v;
              draw();
            });

            // Polynomial coefficients: p(x) = x^2 - 3x + 2 = (x-1)(x-2)
            function poly(x) {
              return x * x - 3 * x + 2;
            }

            function draw() {
              viz.clear();
              viz.drawGrid(1);
              viz.drawAxes();
              const ctx = viz.ctx;

              // Draw polynomial curve
              viz.drawFunction(poly, -3, 8, viz.colors.blue, 2);

              // Mark evaluation point
              const val = poly(evalAt);
              const [sx, sy] = viz.toScreen(evalAt, val);
              const [sx0, sy0] = viz.toScreen(evalAt, 0);

              // Vertical dashed line
              ctx.strokeStyle = viz.colors.orange;
              ctx.lineWidth = 1;
              ctx.setLineDash([4, 4]);
              ctx.beginPath();
              ctx.moveTo(sx, sy0);
              ctx.lineTo(sx, sy);
              ctx.stroke();
              ctx.setLineDash([]);

              // Point on curve
              ctx.fillStyle = viz.colors.orange;
              ctx.beginPath();
              ctx.arc(sx, sy, 6, 0, Math.PI * 2);
              ctx.fill();

              // Labels
              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.textBaseline = 'bottom';
              ctx.fillText('p(x) = x\u00B2 - 3x + 2 = (x-1)(x-2)', 15, 30);

              ctx.fillStyle = viz.colors.orange;
              ctx.font = '13px -apple-system,sans-serif';
              ctx.fillText('ev(' + evalAt.toFixed(1) + ') = ' + val.toFixed(2), sx + 10, sy - 8);

              // Mark roots
              const roots = [1, 2];
              for (const r of roots) {
                const [rx, ry] = viz.toScreen(r, 0);
                ctx.fillStyle = viz.colors.red;
                ctx.beginPath();
                ctx.arc(rx, ry, 5, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = viz.colors.red;
                ctx.font = '11px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                ctx.fillText('x=' + r, rx, ry + 8);
              }

              // Info text
              ctx.fillStyle = viz.colors.text;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.textBaseline = 'bottom';
              ctx.fillText('Roots are where ev_a maps p(x) to 0: ker(ev_a) = (x - a)', 15, 375);
            }

            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch12-sec01-ex01',
          type: 'mcq',
          question: 'Let phi: Z -> Z/6Z be the natural projection. What is ker(phi)?',
          options: ['{0}', '2Z', '3Z', '6Z'],
          answer: 3,
          explanation: 'The kernel of the natural projection Z -> Z/nZ consists of all multiples of n. Thus ker(phi) = 6Z = {..., -12, -6, 0, 6, 12, ...}.'
        },
        {
          id: 'ch12-sec01-ex02',
          type: 'mcq',
          question: 'Which of the following maps is NOT a ring homomorphism?',
          options: [
            'phi: Z -> Z/5Z, a -> a mod 5',
            'phi: Z -> Z, a -> 2a',
            'phi: R[x] -> R, f(x) -> f(3)',
            'phi: C -> C, a + bi -> a - bi'
          ],
          answer: 1,
          explanation: 'The map a -> 2a does not preserve multiplication: phi(ab) = 2ab, but phi(a)phi(b) = (2a)(2b) = 4ab. It also does not send 1 to 1: phi(1) = 2. Hence it is not a ring homomorphism.'
        },
        {
          id: 'ch12-sec01-ex03',
          type: 'mcq',
          question: 'If phi: R -> S is a ring homomorphism with ker(phi) = {0}, then phi is:',
          options: ['Surjective', 'Injective', 'Bijective', 'The zero map'],
          answer: 1,
          explanation: 'A ring homomorphism is injective if and only if its kernel is trivial (contains only the zero element). Trivial kernel means phi(a) = phi(b) implies phi(a - b) = 0, so a - b = 0, i.e. a = b.'
        },
        {
          id: 'ch12-sec01-ex04',
          type: 'mcq',
          question: 'The image of a ring homomorphism phi: R -> S is:',
          options: ['An ideal of S', 'A subring of S', 'A field', 'Always equal to S'],
          answer: 1,
          explanation: 'The image im(phi) is closed under addition and multiplication (since phi preserves both operations) and contains 1_S. Thus im(phi) is a subring of S. It is not necessarily an ideal: for example, the inclusion Z -> Q has image Z, which is not an ideal of Q.'
        }
      ]
    },

    // =====================================================================
    //  SECTION 2 — Isomorphism Theorems for Rings
    // =====================================================================
    {
      id: 'ch12-sec02',
      title: '2. Isomorphism Theorems for Rings',
      content: `
<h2>Isomorphism Theorems for Rings</h2>
<p class="section-roadmap"><em>The isomorphism theorems for groups have direct analogs for rings. These theorems connect homomorphisms, ideals, and quotient rings in a precise way, providing the main structural tools for ring theory.</em></p>

<h3>First Isomorphism Theorem</h3>

<div class="theorem">
<strong>First Isomorphism Theorem (Rings).</strong> Let \\(\\phi: R \\to S\\) be a ring homomorphism. Then:
\\[R / \\ker(\\phi) \\cong \\text{im}(\\phi)\\]
The map \\(\\bar{\\phi}: R/\\ker(\\phi) \\to \\text{im}(\\phi)\\) defined by \\(\\bar{\\phi}(r + \\ker(\\phi)) = \\phi(r)\\) is a well-defined ring isomorphism.
</div>

<div class="intuition">
<strong>Intuition.</strong> The First Isomorphism Theorem says: "Modding out by what the homomorphism kills gives you what the homomorphism sees." Once we collapse the kernel to zero, the resulting quotient ring is a perfect copy of the image.
</div>

<div class="example">
<strong>Example.</strong> Consider \\(\\phi: \\mathbb{Z} \\to \\mathbb{Z}/n\\mathbb{Z}\\), the reduction mod \\(n\\). Then \\(\\ker(\\phi) = n\\mathbb{Z}\\) and \\(\\text{im}(\\phi) = \\mathbb{Z}/n\\mathbb{Z}\\). The First Isomorphism Theorem gives:
\\[\\mathbb{Z}/n\\mathbb{Z} \\cong \\mathbb{Z}/n\\mathbb{Z}\\]
which is a tautology in this case, but it confirms the theorem works. A more interesting application: the evaluation map \\(\\text{ev}_a: \\mathbb{R}[x] \\to \\mathbb{R}\\) is surjective with kernel \\((x - a)\\), so:
\\[\\mathbb{R}[x]/(x - a) \\cong \\mathbb{R}\\]
</div>

<h3>Second Isomorphism Theorem</h3>

<div class="theorem">
<strong>Second Isomorphism Theorem (Rings).</strong> Let \\(R\\) be a ring, \\(S\\) a subring of \\(R\\), and \\(I\\) an ideal of \\(R\\). Then \\(S + I = \\{s + i : s \\in S, i \\in I\\}\\) is a subring of \\(R\\), \\(S \\cap I\\) is an ideal of \\(S\\), and:
\\[(S + I)/I \\cong S/(S \\cap I)\\]
</div>

<div class="intuition">
<strong>Intuition.</strong> Think of \\(S\\) and \\(I\\) as two overlapping parts of \\(R\\). The quotient \\((S + I)/I\\) "sees" only the \\(S\\)-part (since \\(I\\) is killed). The quotient \\(S/(S \\cap I)\\) also kills the overlap. So both quotients capture the same information: "\\(S\\) without what it shares with \\(I\\)."
</div>

<h3>Third Isomorphism Theorem</h3>

<div class="theorem">
<strong>Third Isomorphism Theorem (Rings).</strong> Let \\(I \\subseteq J\\) be ideals of a ring \\(R\\). Then \\(J/I\\) is an ideal of \\(R/I\\) and:
\\[(R/I) \\big/ (J/I) \\cong R/J\\]
</div>

<div class="intuition">
<strong>Intuition.</strong> If you mod out by \\(I\\) first, and then mod out by \\(J/I\\) in the resulting quotient, the total effect is just modding out by \\(J\\) directly. In other words, "a quotient of a quotient is a quotient."
</div>

<div class="example">
<strong>Example.</strong> Let \\(R = \\mathbb{Z}\\), \\(I = 6\\mathbb{Z}\\), \\(J = 2\\mathbb{Z}\\). Then \\(I \\subseteq J\\), and:
\\[(\\mathbb{Z}/6\\mathbb{Z})/(2\\mathbb{Z}/6\\mathbb{Z}) \\cong \\mathbb{Z}/2\\mathbb{Z}\\]
Indeed, \\(\\mathbb{Z}/6\\mathbb{Z} = \\{0,1,2,3,4,5\\}\\) and \\(2\\mathbb{Z}/6\\mathbb{Z} = \\{0, 2, 4\\}\\), so the quotient has 2 elements, matching \\(\\mathbb{Z}/2\\mathbb{Z}\\).
</div>

<h3>The Lattice (Correspondence) Theorem</h3>

<div class="theorem">
<strong>Lattice Theorem.</strong> Let \\(I\\) be an ideal of \\(R\\). There is a bijection between:
<ul>
<li>Ideals of \\(R\\) that contain \\(I\\), and</li>
<li>Ideals of \\(R/I\\)</li>
</ul>
given by \\(J \\mapsto J/I\\), with inverse \\(\\bar{J} \\mapsto \\pi^{-1}(\\bar{J})\\). This bijection preserves inclusion, sums, and intersections.
</div>

<p>This theorem is a powerful organizational tool. It says: understanding the ideal structure of a quotient ring \\(R/I\\) is equivalent to understanding the ideals of \\(R\\) that contain \\(I\\).</p>

<div class="env-block intuition"><div class="env-title">Looking Ahead</div><div class="env-body"><p>The isomorphism theorems provide the language and tools needed to decompose rings into simpler pieces. In the next three sections, we explore a hierarchy of particularly well-behaved integral domains: Euclidean domains, PIDs, and UFDs.</p></div></div>
`,
      visualizations: [
        {
          id: 'viz-ch12-first-iso',
          title: 'First Isomorphism Theorem Diagram',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 400 });

            function draw() {
              viz.clear();
              const ctx = viz.ctx;

              // Title
              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 15px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('First Isomorphism Theorem: R/ker(phi) = im(phi)', 350, 20);

              // Draw R
              ctx.strokeStyle = viz.colors.blue;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.ellipse(140, 180, 100, 130, 0, 0, Math.PI * 2);
              ctx.stroke();
              ctx.fillStyle = viz.colors.blue;
              ctx.font = 'bold 18px -apple-system,sans-serif';
              ctx.fillText('R', 140, 40);

              // Draw ker(phi) inside R
              ctx.strokeStyle = viz.colors.red;
              ctx.lineWidth = 1.5;
              ctx.fillStyle = viz.colors.red + '22';
              ctx.beginPath();
              ctx.ellipse(140, 230, 50, 50, 0, 0, Math.PI * 2);
              ctx.fill();
              ctx.stroke();
              ctx.fillStyle = viz.colors.red;
              ctx.font = '14px -apple-system,sans-serif';
              ctx.fillText('ker(phi)', 140, 230);

              // Draw S
              ctx.strokeStyle = viz.colors.teal;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.ellipse(560, 180, 100, 130, 0, 0, Math.PI * 2);
              ctx.stroke();
              ctx.fillStyle = viz.colors.teal;
              ctx.font = 'bold 18px -apple-system,sans-serif';
              ctx.fillText('S', 560, 40);

              // Draw im(phi) inside S
              ctx.strokeStyle = viz.colors.green;
              ctx.lineWidth = 1.5;
              ctx.fillStyle = viz.colors.green + '22';
              ctx.beginPath();
              ctx.ellipse(560, 170, 60, 80, 0, 0, Math.PI * 2);
              ctx.fill();
              ctx.stroke();
              ctx.fillStyle = viz.colors.green;
              ctx.font = '14px -apple-system,sans-serif';
              ctx.fillText('im(phi)', 560, 170);

              // Arrow phi: R -> S
              ctx.strokeStyle = viz.colors.orange;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(245, 130);
              ctx.lineTo(455, 130);
              ctx.stroke();
              // Arrowhead
              ctx.fillStyle = viz.colors.orange;
              ctx.beginPath();
              ctx.moveTo(455, 130);
              ctx.lineTo(445, 124);
              ctx.lineTo(445, 136);
              ctx.closePath();
              ctx.fill();
              ctx.fillStyle = viz.colors.orange;
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.fillText('phi', 350, 120);

              // Draw R/ker(phi) below
              ctx.strokeStyle = viz.colors.purple;
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.ellipse(350, 340, 70, 40, 0, 0, Math.PI * 2);
              ctx.stroke();
              ctx.fillStyle = viz.colors.purple;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.fillText('R/ker(phi)', 350, 340);

              // Arrow R -> R/ker(phi)
              ctx.strokeStyle = viz.colors.purple + 'aa';
              ctx.lineWidth = 1.5;
              ctx.setLineDash([5, 3]);
              ctx.beginPath();
              ctx.moveTo(180, 290);
              ctx.lineTo(300, 330);
              ctx.stroke();
              ctx.setLineDash([]);
              ctx.fillStyle = viz.colors.purple;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillText('pi', 225, 300);

              // Arrow R/ker(phi) -> im(phi) (isomorphism)
              ctx.strokeStyle = viz.colors.yellow;
              ctx.lineWidth = 2;
              ctx.setLineDash([]);
              ctx.beginPath();
              ctx.moveTo(415, 325);
              ctx.lineTo(510, 230);
              ctx.stroke();
              ctx.fillStyle = viz.colors.yellow;
              ctx.beginPath();
              ctx.moveTo(510, 230);
              ctx.lineTo(500, 230);
              ctx.lineTo(506, 240);
              ctx.closePath();
              ctx.fill();
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.fillText('phi-bar (iso)', 480, 290);

              // Legend
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillStyle = viz.colors.text;
              ctx.fillText('phi = phi-bar . pi    (factorization through the quotient)', 80, 395);
            }

            draw();
          }
        },
        {
          id: 'viz-ch12-lattice-ideals',
          title: 'Lattice of Ideals of Z/12Z',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 400 });

            function draw() {
              viz.clear();
              const ctx = viz.ctx;

              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 15px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Lattice of Ideals of Z/12Z (Correspondence Theorem)', 350, 20);

              // Ideals of Z containing 12Z: 12Z, 6Z, 4Z, 3Z, 2Z, Z
              // Divisors of 12: 1, 2, 3, 4, 6, 12
              const nodes = [
                { id: 'Z', label: 'Z  <->  Z/12Z', x: 350, y: 60, color: viz.colors.white },
                { id: '2Z', label: '2Z  <->  (2)', x: 200, y: 140, color: viz.colors.blue },
                { id: '3Z', label: '3Z  <->  (3)', x: 500, y: 140, color: viz.colors.teal },
                { id: '4Z', label: '4Z  <->  (4)', x: 130, y: 230, color: viz.colors.orange },
                { id: '6Z', label: '6Z  <->  (6)', x: 350, y: 230, color: viz.colors.green },
                { id: '12Z', label: '12Z  <->  (0)', x: 350, y: 330, color: viz.colors.purple },
              ];

              const edges = [
                ['Z', '2Z'], ['Z', '3Z'],
                ['2Z', '4Z'], ['2Z', '6Z'],
                ['3Z', '6Z'],
                ['4Z', '12Z'], ['6Z', '12Z']
              ];

              function nodeById(id) { return nodes.find(n => n.id === id); }

              // Draw edges
              ctx.lineWidth = 1.5;
              for (const [fid, tid] of edges) {
                const f = nodeById(fid), t = nodeById(tid);
                ctx.strokeStyle = '#30363d';
                ctx.beginPath();
                ctx.moveTo(f.x, f.y + 12);
                ctx.lineTo(t.x, t.y - 12);
                ctx.stroke();
              }

              // Draw nodes
              for (const n of nodes) {
                ctx.fillStyle = n.color + '22';
                ctx.strokeStyle = n.color;
                ctx.lineWidth = 1.5;
                const w = 150, h = 28;
                ctx.beginPath();
                ctx.roundRect(n.x - w / 2, n.y - h / 2, w, h, 6);
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = n.color;
                ctx.font = '12px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(n.label, n.x, n.y);
              }

              // Legend
              ctx.fillStyle = viz.colors.text;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('Left: ideals of Z containing 12Z.  Right: corresponding ideals of Z/12Z.', 60, 380);
              ctx.fillText('Inclusion goes upward. The lattice structure is preserved.', 60, 395);
            }

            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch12-sec02-ex01',
          type: 'mcq',
          question: 'By the First Isomorphism Theorem, R[x]/(x^2 + 1) is isomorphic to which ring, where R = the real numbers?',
          options: ['R', 'R x R', 'C (the complex numbers)', 'R[x]'],
          answer: 2,
          explanation: 'Consider the evaluation homomorphism ev_i: R[x] -> C sending f(x) to f(i). This map is surjective (every a + bi = ev_i(a + bx)) and its kernel is (x^2 + 1). By the First Isomorphism Theorem, R[x]/(x^2 + 1) is isomorphic to C.'
        },
        {
          id: 'ch12-sec02-ex02',
          type: 'mcq',
          question: 'In the Third Isomorphism Theorem, (R/I)/(J/I) is isomorphic to:',
          options: ['R/I', 'R/J', 'J/I', 'I/J'],
          answer: 1,
          explanation: 'The Third Isomorphism Theorem states that if I is a subset of J and both are ideals of R, then (R/I)/(J/I) is isomorphic to R/J. Modding out in two steps is the same as modding out all at once.'
        },
        {
          id: 'ch12-sec02-ex03',
          type: 'mcq',
          question: 'How many ideals does Z/12Z have?',
          options: ['4', '6', '8', '12'],
          answer: 1,
          explanation: 'By the Lattice (Correspondence) Theorem, ideals of Z/12Z correspond to ideals of Z containing 12Z, which are the ideals nZ where n divides 12. The divisors of 12 are 1, 2, 3, 4, 6, 12, giving exactly 6 ideals.'
        }
      ]
    },

    // =====================================================================
    //  SECTION 3 — Euclidean Domains
    // =====================================================================
    {
      id: 'ch12-sec03',
      title: '3. Euclidean Domains',
      content: `
<h2>Euclidean Domains</h2>
<p class="section-roadmap"><em>We now begin exploring a hierarchy of well-behaved integral domains. Euclidean domains are those where a division algorithm exists, generalizing the familiar division with remainder in the integers and polynomial rings.</em></p>

<div class="definition">
<strong>Definition (Euclidean Domain).</strong> An integral domain \\(R\\) is a <em>Euclidean domain</em> (ED) if there exists a function \\(N: R \\setminus \\{0\\} \\to \\mathbb{Z}_{\\geq 0}\\) (called a <em>Euclidean norm</em> or <em>Euclidean function</em>) such that for all \\(a \\in R\\) and \\(b \\in R \\setminus \\{0\\}\\), there exist \\(q, r \\in R\\) with:
\\[a = bq + r, \\quad \\text{where } r = 0 \\text{ or } N(r) < N(b).\\]
</div>

<p>The key point is that we can "divide with remainder," and the remainder is always strictly smaller (in the norm) than the divisor. This is exactly the structure that makes the Euclidean algorithm work.</p>

<h3>Key Examples of Euclidean Domains</h3>

<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
<thead>
<tr style="background:#1a1a40;">
<th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Ring</th>
<th style="padding:8px;border:1px solid #30363d;color:#3fb9a0;">Euclidean Norm</th>
<th style="padding:8px;border:1px solid #30363d;color:#f0883e;">Division Algorithm</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px;border:1px solid #30363d;">\\(\\mathbb{Z}\\)</td>
<td style="padding:8px;border:1px solid #30363d;">\\(N(a) = |a|\\)</td>
<td style="padding:8px;border:1px solid #30363d;">\\(a = bq + r\\), \\(0 \\leq r < |b|\\)</td>
</tr>
<tr>
<td style="padding:8px;border:1px solid #30363d;">\\(F[x]\\) (\\(F\\) a field)</td>
<td style="padding:8px;border:1px solid #30363d;">\\(N(f) = \\deg(f)\\)</td>
<td style="padding:8px;border:1px solid #30363d;">Polynomial long division</td>
</tr>
<tr>
<td style="padding:8px;border:1px solid #30363d;">\\(\\mathbb{Z}[i]\\) (Gaussian integers)</td>
<td style="padding:8px;border:1px solid #30363d;">\\(N(a + bi) = a^2 + b^2\\)</td>
<td style="padding:8px;border:1px solid #30363d;">Divide in \\(\\mathbb{C}\\), round to nearest lattice point</td>
</tr>
</tbody>
</table>

<div class="example">
<strong>Example: Division in \\(\\mathbb{Z}[i]\\).</strong> To divide \\(\\alpha = 11 + 3i\\) by \\(\\beta = 1 + 2i\\), first compute in \\(\\mathbb{C}\\):
\\[\\frac{\\alpha}{\\beta} = \\frac{(11+3i)(1-2i)}{|1+2i|^2} = \\frac{11 - 22i + 3i - 6i^2}{5} = \\frac{17 - 19i}{5} = 3.4 - 3.8i.\\]
Round to the nearest Gaussian integer: \\(q = 3 - 4i\\). Then:
\\[r = \\alpha - \\beta q = (11+3i) - (1+2i)(3-4i) = (11+3i) - (11-2i) = 2i.\\]
Check: \\(N(r) = N(2i) = 4 < 5 = N(\\beta)\\). The division algorithm succeeds!
</div>

<h3>Euclidean Algorithm in Euclidean Domains</h3>

<p>Just as in \\(\\mathbb{Z}\\), we can compute GCDs via the Euclidean algorithm in any Euclidean domain:</p>

<div class="algorithm">
<strong>Euclidean Algorithm.</strong> Given \\(a, b\\) in an ED with \\(b \\neq 0\\):
<ol>
<li>Divide: \\(a = bq + r\\).</li>
<li>If \\(r = 0\\), then \\(\\gcd(a,b) = b\\). Stop.</li>
<li>Replace \\(a \\leftarrow b\\), \\(b \\leftarrow r\\). Go to step 1.</li>
</ol>
Termination is guaranteed because \\(N(r) < N(b)\\) at each step, so the norms strictly decrease.
</div>

<h3>ED implies PID</h3>

<div class="theorem">
<strong>Theorem.</strong> Every Euclidean domain is a principal ideal domain.
</div>

<div class="proof">
<strong>Proof.</strong> Let \\(I\\) be a nonzero ideal in the Euclidean domain \\(R\\). Among all nonzero elements of \\(I\\), choose \\(d \\in I\\) with \\(N(d)\\) minimal. We claim \\(I = (d)\\).

Clearly \\((d) \\subseteq I\\). For the reverse inclusion, let \\(a \\in I\\). By the division algorithm, \\(a = dq + r\\) with \\(r = 0\\) or \\(N(r) < N(d)\\). Since \\(r = a - dq \\in I\\), and \\(d\\) was chosen with minimal norm in \\(I\\), we must have \\(r = 0\\). Thus \\(a = dq \\in (d)\\). \\(\\square\\)
</div>

<div class="warning">
<strong>Caution.</strong> The converse is false! There exist PIDs that are not Euclidean domains. A famous example is \\(\\mathbb{Z}\\left[\\frac{1 + \\sqrt{-19}}{2}\\right]\\), which is a PID but admits no Euclidean function.
</div>

<div class="env-block intuition"><div class="env-title">Looking Ahead</div><div class="env-body"><p>We have shown ED implies PID. In the next section, we study PIDs in their own right and prove the next link in the chain: PID implies UFD.</p></div></div>
`,
      visualizations: [
        {
          id: 'viz-ch12-gaussian-division',
          title: 'Gaussian Integer Division Visualizer',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 500, scale: 35 });

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;';
            wrap.appendChild(controls);

            let alphaR = 11, alphaI = 3, betaR = 1, betaI = 2;

            VizEngine.createSlider(controls, 'Re(alpha)', -10, 15, alphaR, 1, (v) => { alphaR = Math.round(v); draw(); });
            VizEngine.createSlider(controls, 'Im(alpha)', -10, 10, alphaI, 1, (v) => { alphaI = Math.round(v); draw(); });
            VizEngine.createSlider(controls, 'Re(beta)', -5, 5, betaR, 1, (v) => { betaR = Math.round(v); draw(); });
            VizEngine.createSlider(controls, 'Im(beta)', -5, 5, betaI, 1, (v) => { betaI = Math.round(v); draw(); });

            function draw() {
              viz.clear();
              viz.drawGrid(1);
              viz.drawAxes();
              const ctx = viz.ctx;

              const normBeta = betaR * betaR + betaI * betaI;
              if (normBeta === 0) {
                ctx.fillStyle = viz.colors.red;
                ctx.font = 'bold 16px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('beta cannot be zero!', 350, 30);
                return;
              }

              // Compute alpha/beta in C
              const qRealExact = (alphaR * betaR + alphaI * betaI) / normBeta;
              const qImagExact = (alphaI * betaR - alphaR * betaI) / normBeta;

              // Round to nearest Gaussian integer
              const qR = Math.round(qRealExact);
              const qI = Math.round(qImagExact);

              // Remainder
              const rR = alphaR - (betaR * qR - betaI * qI);
              const rI = alphaI - (betaI * qR + betaR * qI);
              const normR = rR * rR + rI * rI;

              // Draw lattice points
              for (let x = -8; x <= 8; x++) {
                for (let y = -6; y <= 6; y++) {
                  const [sx, sy] = viz.toScreen(x, y);
                  ctx.fillStyle = '#333355';
                  ctx.beginPath();
                  ctx.arc(sx, sy, 2, 0, Math.PI * 2);
                  ctx.fill();
                }
              }

              // Draw alpha
              viz.drawPoint(alphaR, alphaI, viz.colors.blue, null, 7);
              ctx.fillStyle = viz.colors.blue;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              const [ax, ay] = viz.toScreen(alphaR, alphaI);
              ctx.fillText('alpha = ' + alphaR + '+' + alphaI + 'i', ax + 10, ay - 10);

              // Draw beta
              viz.drawPoint(betaR, betaI, viz.colors.teal, null, 7);
              const [bx, by] = viz.toScreen(betaR, betaI);
              ctx.fillStyle = viz.colors.teal;
              ctx.fillText('beta = ' + betaR + '+' + betaI + 'i', bx + 10, by - 10);

              // Draw exact quotient point
              const [ex, ey] = viz.toScreen(qRealExact, qImagExact);
              ctx.fillStyle = viz.colors.yellow + '88';
              ctx.beginPath();
              ctx.arc(ex, ey, 5, 0, Math.PI * 2);
              ctx.fill();

              // Draw circle around exact quotient with radius 1
              ctx.strokeStyle = viz.colors.yellow + '44';
              ctx.lineWidth = 1;
              ctx.setLineDash([4, 3]);
              ctx.beginPath();
              ctx.arc(ex, ey, viz.scale, 0, Math.PI * 2);
              ctx.stroke();
              ctx.setLineDash([]);

              // Draw q (rounded)
              viz.drawPoint(qR, qI, viz.colors.orange, null, 7);
              const [qx, qy] = viz.toScreen(qR, qI);
              ctx.fillStyle = viz.colors.orange;
              ctx.fillText('q = ' + qR + '+' + qI + 'i', qx + 10, qy + 15);

              // Draw remainder
              if (rR !== 0 || rI !== 0) {
                viz.drawPoint(rR, rI, viz.colors.red, null, 6);
                const [rx, ry] = viz.toScreen(rR, rI);
                ctx.fillStyle = viz.colors.red;
                ctx.fillText('r = ' + rR + '+' + rI + 'i', rx + 10, ry - 10);
              }

              // Info panel
              ctx.fillStyle = viz.colors.white;
              ctx.font = '13px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('alpha = beta * q + r', 15, 20);
              ctx.fillText('N(beta) = ' + normBeta + ',  N(r) = ' + normR + (normR < normBeta ? '  < N(beta)  OK' : '  CHECK'), 15, 38);
              ctx.fillStyle = viz.colors.text;
              ctx.font = '11px -apple-system,sans-serif';
              ctx.fillText('Yellow circle: all points within distance 1 of exact quotient', 15, 56);
            }

            draw();
          }
        },
        {
          id: 'viz-ch12-euclidean-algorithm',
          title: 'Euclidean Algorithm Step Tracer',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 360 });

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;';
            wrap.appendChild(controls);

            let valA = 252, valB = 105;
            VizEngine.createSlider(controls, 'a', 1, 500, valA, 1, (v) => { valA = Math.round(v); draw(); });
            VizEngine.createSlider(controls, 'b', 1, 500, valB, 1, (v) => { valB = Math.round(v); draw(); });

            function euclidSteps(a, b) {
              const steps = [];
              a = Math.abs(a); b = Math.abs(b);
              if (b === 0) return [{ a, b, q: 0, r: 0 }];
              while (b > 0) {
                const q = Math.floor(a / b);
                const r = a - b * q;
                steps.push({ a, b, q, r });
                a = b;
                b = r;
              }
              return steps;
            }

            function draw() {
              viz.clear();
              const ctx = viz.ctx;
              const steps = euclidSteps(valA, valB);

              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 15px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Euclidean Algorithm: gcd(' + valA + ', ' + valB + ')', 350, 20);

              const startY = 55;
              const lineH = 28;
              const maxSteps = Math.min(steps.length, 10);

              ctx.font = '14px monospace';
              ctx.textAlign = 'left';

              const barColors = [viz.colors.blue, viz.colors.teal, viz.colors.orange, viz.colors.green, viz.colors.purple, viz.colors.red, viz.colors.yellow, viz.colors.pink, '#66ccff', '#99ff99'];

              for (let i = 0; i < maxSteps; i++) {
                const s = steps[i];
                const y = startY + i * lineH;
                const col = barColors[i % barColors.length];

                ctx.fillStyle = col;
                ctx.fillText('Step ' + (i + 1) + ':  ' + s.a + ' = ' + s.b + ' x ' + s.q + ' + ' + s.r, 40, y);

                // Draw proportional bar
                const barX = 420;
                const barW = 250;
                const bPortion = (s.b * s.q) / s.a;
                const rPortion = s.r / s.a;

                ctx.fillStyle = col + '55';
                ctx.fillRect(barX, y - 10, barW * bPortion, 16);
                if (s.r > 0) {
                  ctx.fillStyle = viz.colors.red + '77';
                  ctx.fillRect(barX + barW * bPortion, y - 10, barW * rPortion, 16);
                }
                ctx.strokeStyle = col;
                ctx.lineWidth = 1;
                ctx.strokeRect(barX, y - 10, barW, 16);
              }

              // Result
              const gcdVal = steps[steps.length - 1].a;
              const resY = startY + maxSteps * lineH + 15;
              ctx.fillStyle = viz.colors.green;
              ctx.font = 'bold 16px -apple-system,sans-serif';
              ctx.fillText('gcd(' + valA + ', ' + valB + ') = ' + gcdVal, 40, resY);

              ctx.fillStyle = viz.colors.text;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillText('Bar shows: quotient portion (colored) + remainder (red)', 40, resY + 25);
            }

            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch12-sec03-ex01',
          type: 'mcq',
          question: 'Which of the following is NOT a Euclidean domain?',
          options: ['Z', 'Q[x]', 'Z[x]', 'Z[i] (Gaussian integers)'],
          answer: 2,
          explanation: 'Z[x] is not a Euclidean domain because polynomial division over Z does not always produce a valid quotient and remainder (leading coefficients may not divide). For example, dividing x by 2 in Z[x] fails. However, Z[x] is a UFD. When the coefficients form a field (like Q[x]), polynomial division always works.'
        },
        {
          id: 'ch12-sec03-ex02',
          type: 'mcq',
          question: 'In the Gaussian integers Z[i], what is the norm N(3 + 4i)?',
          options: ['5', '7', '12', '25'],
          answer: 3,
          explanation: 'The norm of a Gaussian integer a + bi is N(a + bi) = a^2 + b^2. So N(3 + 4i) = 9 + 16 = 25.'
        },
        {
          id: 'ch12-sec03-ex03',
          type: 'mcq',
          question: 'Why does the Euclidean algorithm always terminate in an ED?',
          options: [
            'Because the quotients increase',
            'Because the norms of remainders strictly decrease and are non-negative integers',
            'Because the ring is finite',
            'Because every element is a unit'
          ],
          answer: 1,
          explanation: 'At each step, N(r) < N(b), and the norms are non-negative integers. A strictly decreasing sequence of non-negative integers must eventually reach 0. Hence the algorithm terminates.'
        },
        {
          id: 'ch12-sec03-ex04',
          type: 'mcq',
          question: 'The proof that ED implies PID uses which key idea?',
          options: [
            'Every element is invertible in an ED',
            'The element of minimal norm in an ideal generates that ideal',
            'Every ideal is maximal in an ED',
            'Unique factorization holds in an ED'
          ],
          answer: 1,
          explanation: 'Given a nonzero ideal I, choose d in I with minimal norm N(d). For any a in I, divide a = dq + r. Since r = a - dq is in I and N(r) < N(d) would contradict minimality, r = 0. So a = dq, meaning I = (d).'
        }
      ]
    },

    // =====================================================================
    //  SECTION 4 — Principal Ideal Domains
    // =====================================================================
    {
      id: 'ch12-sec04',
      title: '4. Principal Ideal Domains',
      content: `
<h2>Principal Ideal Domains</h2>
<p class="section-roadmap"><em>A principal ideal domain (PID) is an integral domain in which every ideal is principal (generated by a single element). PIDs form the middle layer of our hierarchy ED &rarr; PID &rarr; UFD. In this section we explore their properties and prove the crucial implication PID implies UFD.</em></p>

<div class="definition">
<strong>Definition (PID).</strong> An integral domain \\(R\\) is a <em>principal ideal domain</em> if every ideal of \\(R\\) is principal, meaning for every ideal \\(I \\subseteq R\\) there exists \\(d \\in R\\) such that \\(I = (d) = dR\\).
</div>

<h3>Key Properties of PIDs</h3>

<div class="theorem">
<strong>Theorem (Properties of PIDs).</strong> Let \\(R\\) be a PID.
<ol>
<li><strong>GCDs exist:</strong> For any \\(a, b \\in R\\) (not both zero), there exists \\(d = \\gcd(a,b)\\) and it can be written as \\(d = ax + by\\) for some \\(x, y \\in R\\) (Bezout's identity).</li>
<li><strong>Irreducible = Prime:</strong> An element \\(p \\in R\\) is irreducible if and only if it is prime.</li>
<li><strong>Maximal = Nonzero prime ideals:</strong> An ideal \\((p)\\) is maximal if and only if \\(p\\) is irreducible.</li>
<li><strong>ACC on ideals:</strong> Every ascending chain of ideals \\(I_1 \\subseteq I_2 \\subseteq I_3 \\subseteq \\cdots\\) stabilizes (Noetherian property).</li>
</ol>
</div>

<div class="proof">
<strong>Proof of (1).</strong> Consider the ideal \\(I = (a, b) = \\{ax + by : x, y \\in R\\}\\). Since \\(R\\) is a PID, \\(I = (d)\\) for some \\(d\\). Since \\(a, b \\in (d)\\), we have \\(d \\mid a\\) and \\(d \\mid b\\). Since \\(d \\in (a,b)\\), there exist \\(x, y\\) with \\(d = ax + by\\), so any common divisor of \\(a\\) and \\(b\\) also divides \\(d\\). Thus \\(d = \\gcd(a,b)\\). \\(\\square\\)
</div>

<div class="proof">
<strong>Proof of (2), irreducible implies prime.</strong> Let \\(p\\) be irreducible in the PID \\(R\\), and suppose \\(p \\mid ab\\). We must show \\(p \\mid a\\) or \\(p \\mid b\\).

If \\(p \\nmid a\\), then \\(\\gcd(p, a) = 1\\) (since \\(p\\) is irreducible and does not divide \\(a\\)). By Bezout, \\(1 = px + ay\\) for some \\(x, y\\). Multiplying by \\(b\\): \\(b = pbx + aby\\). Since \\(p \\mid ab\\), both terms are divisible by \\(p\\), so \\(p \\mid b\\). \\(\\square\\)
</div>

<div class="intuition">
<strong>Key Insight.</strong> In a general integral domain, irreducible does not imply prime. The equation "irreducible = prime" is one of the most powerful properties of PIDs. It is this property that ultimately guarantees unique factorization.
</div>

<div class="example">
<strong>Example: \\(\\mathbb{Z}\\) as a PID.</strong> In \\(\\mathbb{Z}\\), every ideal has the form \\(n\\mathbb{Z}\\) for some \\(n \\geq 0\\). The GCD of \\(a\\) and \\(b\\) is the generator of the ideal \\((a, b)\\). For instance, \\((12, 18) = (6)\\) since \\(\\gcd(12, 18) = 6\\), and we can write \\(6 = 18 \\cdot 1 + 12 \\cdot (-1)\\) or \\(6 = 12 \\cdot 2 + 18 \\cdot (-1)\\).
</div>

<h3>PIDs That Are Not EDs</h3>

<p>The ring \\(\\mathbb{Z}\\left[\\frac{1 + \\sqrt{-19}}{2}\\right]\\) is a PID but not a Euclidean domain. This shows the inclusion ED \\(\\subsetneq\\) PID is strict. The proof that this ring is a PID is quite involved and uses the Dedekind-Hasse criterion as an alternative to the division algorithm.</p>

<h3>PID implies UFD</h3>

<div class="theorem">
<strong>Theorem.</strong> Every PID is a UFD.
</div>

<p>The proof has two parts:</p>

<div class="proof">
<strong>Part 1: Existence of factorization.</strong> Suppose not every nonzero non-unit has a factorization into irreducibles. Then there exists \\(a_1\\) that cannot be so factored. Since \\(a_1\\) is not irreducible itself, \\(a_1 = b_1 c_1\\) where neither factor is a unit. At least one of \\(b_1, c_1\\) (say \\(a_2 = b_1\\)) also cannot be factored into irreducibles. Continuing, we get a strictly ascending chain \\((a_1) \\subsetneq (a_2) \\subsetneq (a_3) \\subsetneq \\cdots\\), contradicting the ACC property of PIDs (Noetherian). \\(\\square\\)
</div>

<div class="proof">
<strong>Part 2: Uniqueness of factorization.</strong> Suppose \\(p_1 p_2 \\cdots p_m = q_1 q_2 \\cdots q_n\\) are two factorizations into irreducibles. Since \\(p_1\\) is irreducible and hence prime (in a PID), \\(p_1 \\mid q_j\\) for some \\(j\\). Since \\(q_j\\) is irreducible, \\(p_1\\) and \\(q_j\\) are associates. Cancel and use induction to show \\(m = n\\) and the factors match up to associates and reordering. \\(\\square\\)
</div>

<div class="env-block intuition"><div class="env-title">Looking Ahead</div><div class="env-body"><p>We have now established the chain ED &rArr; PID &rArr; UFD. The next section examines UFDs directly: what exactly is unique factorization, and what happens in rings where it fails?</p></div></div>
`,
      visualizations: [
        {
          id: 'viz-ch12-domain-hierarchy',
          title: 'ED, PID, UFD, ID Hierarchy',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 450 });

            let hoverTarget = null;

            function draw() {
              viz.clear();
              const ctx = viz.ctx;

              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 15px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Hierarchy of Integral Domains', 350, 20);

              // Concentric rounded rectangles (outermost to innermost)
              const levels = [
                { label: 'Integral Domain (ID)', x: 350, y: 240, w: 620, h: 360, color: viz.colors.text, examples: 'Z[sqrt(-5)], Z[x,y]' },
                { label: 'Unique Factorization Domain (UFD)', x: 350, y: 230, w: 500, h: 300, color: viz.colors.purple, examples: 'Z[x], Z[sqrt(-1)][x]' },
                { label: 'Principal Ideal Domain (PID)', x: 350, y: 220, w: 370, h: 230, color: viz.colors.teal, examples: 'Z, Z[(1+sqrt(-19))/2]' },
                { label: 'Euclidean Domain (ED)', x: 350, y: 210, w: 240, h: 150, color: viz.colors.blue, examples: 'Z, Q[x], Z[i], Z[omega]' },
                { label: 'Field', x: 350, y: 200, w: 120, h: 80, color: viz.colors.orange, examples: 'Q, R, C, F_p' },
              ];

              for (let i = 0; i < levels.length; i++) {
                const lv = levels[i];
                const isHovered = (hoverTarget === i);

                ctx.fillStyle = lv.color + (isHovered ? '33' : '11');
                ctx.strokeStyle = lv.color;
                ctx.lineWidth = isHovered ? 3 : 1.5;
                ctx.beginPath();
                ctx.roundRect(lv.x - lv.w / 2, lv.y - lv.h / 2, lv.w, lv.h, 16);
                ctx.fill();
                ctx.stroke();

                // Label at top of each rectangle
                ctx.fillStyle = lv.color;
                ctx.font = (isHovered ? 'bold ' : '') + '13px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                ctx.fillText(lv.label, lv.x, lv.y - lv.h / 2 + 6);
              }

              // Implication arrows on the right
              const arrowX = 660;
              const arrowData = [
                { from: 200, to: 220, label: 'Field => ED' },
                { from: 230, to: 250, label: '' },
              ];

              // Show examples for hovered level
              if (hoverTarget !== null && hoverTarget < levels.length) {
                const lv = levels[hoverTarget];
                ctx.fillStyle = lv.color;
                ctx.font = '13px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.fillText('Examples: ' + lv.examples, 350, 440);
              } else {
                ctx.fillStyle = viz.colors.text;
                ctx.font = '12px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('Hover over a level to see examples. Each inner class is strictly contained in the outer.', 350, 440);
              }

              // Strict containment markers
              ctx.fillStyle = viz.colors.yellow;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'right';
              ctx.fillText('Field', 150, 200);
              ctx.fillText('ED', 165, 240);
              ctx.fillText('PID', 195, 275);
              ctx.fillText('UFD', 120, 310);
              ctx.fillText('ID', 95, 355);
            }

            draw();

            viz.canvas.addEventListener('mousemove', (e) => {
              const rect = viz.canvas.getBoundingClientRect();
              const mx = e.clientX - rect.left;
              const my = e.clientY - rect.top;

              const levels = [
                { x: 350, y: 240, w: 620, h: 360 },
                { x: 350, y: 230, w: 500, h: 300 },
                { x: 350, y: 220, w: 370, h: 230 },
                { x: 350, y: 210, w: 240, h: 150 },
                { x: 350, y: 200, w: 120, h: 80 },
              ];

              let newHover = null;
              // Check innermost first
              for (let i = levels.length - 1; i >= 0; i--) {
                const lv = levels[i];
                if (mx >= lv.x - lv.w / 2 && mx <= lv.x + lv.w / 2 &&
                    my >= lv.y - lv.h / 2 && my <= lv.y + lv.h / 2) {
                  newHover = i;
                  break;
                }
              }

              if (newHover !== hoverTarget) {
                hoverTarget = newHover;
                draw();
              }
            });

            viz.canvas.addEventListener('mouseleave', () => {
              hoverTarget = null;
              draw();
            });
          }
        },
        {
          id: 'viz-ch12-bezout-identity',
          title: 'Bezout Identity Visualizer',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 380 });

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;';
            wrap.appendChild(controls);

            let valA = 12, valB = 18;
            VizEngine.createSlider(controls, 'a', 1, 100, valA, 1, (v) => { valA = Math.round(v); draw(); });
            VizEngine.createSlider(controls, 'b', 1, 100, valB, 1, (v) => { valB = Math.round(v); draw(); });

            function extGcd(a, b) {
              if (b === 0) return { g: a, x: 1, y: 0 };
              const res = extGcd(b, a % b);
              return { g: res.g, x: res.y, y: res.x - Math.floor(a / b) * res.y };
            }

            function draw() {
              viz.clear();
              const ctx = viz.ctx;

              const res = extGcd(valA, valB);

              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 15px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Bezout Identity: gcd(' + valA + ', ' + valB + ') = ' + res.g, 350, 25);

              ctx.fillStyle = viz.colors.orange;
              ctx.font = '16px -apple-system,sans-serif';
              ctx.fillText(res.g + ' = ' + valA + ' * (' + res.x + ') + ' + valB + ' * (' + res.y + ')', 350, 55);

              // Visualize multiples on a number line
              const maxVal = Math.max(valA, valB) * 3;
              const lineY = 140;
              const lineLeft = 50;
              const lineRight = 650;
              const lineW = lineRight - lineLeft;
              const pxPerUnit = lineW / maxVal;

              // Number line
              ctx.strokeStyle = viz.colors.axis;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(lineLeft, lineY);
              ctx.lineTo(lineRight, lineY);
              ctx.stroke();

              // Multiples of a
              ctx.fillStyle = viz.colors.blue + '44';
              for (let k = 0; k <= maxVal; k += valA) {
                const px = lineLeft + k * pxPerUnit;
                if (px > lineRight) break;
                ctx.fillRect(px - 2, lineY - 20, 4, 20);
              }

              // Multiples of b
              ctx.fillStyle = viz.colors.teal + '44';
              for (let k = 0; k <= maxVal; k += valB) {
                const px = lineLeft + k * pxPerUnit;
                if (px > lineRight) break;
                ctx.fillRect(px - 2, lineY, 4, 20);
              }

              // Multiples of gcd
              ctx.fillStyle = viz.colors.green;
              for (let k = 0; k <= maxVal; k += res.g) {
                const px = lineLeft + k * pxPerUnit;
                if (px > lineRight) break;
                ctx.beginPath();
                ctx.arc(px, lineY + 40, 4, 0, Math.PI * 2);
                ctx.fill();
              }

              // Legend
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillStyle = viz.colors.blue;
              ctx.fillText('Multiples of a = ' + valA, 50, 200);
              ctx.fillStyle = viz.colors.teal;
              ctx.fillText('Multiples of b = ' + valB, 50, 220);
              ctx.fillStyle = viz.colors.green;
              ctx.fillText('Multiples of gcd = ' + res.g + '  (lattice of (a) + (b) = (' + res.g + '))', 50, 240);

              // Ideal containment diagram
              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Ideal Lattice', 350, 275);

              // Draw three nodes: (a), (b), (gcd)
              const ideals = [
                { label: '(' + res.g + ') = (' + valA + ',' + valB + ')', x: 350, y: 310, color: viz.colors.green },
                { label: '(' + valA + ')', x: 230, y: 355, color: viz.colors.blue },
                { label: '(' + valB + ')', x: 470, y: 355, color: viz.colors.teal },
              ];

              // edges: gcd -> a, gcd -> b
              ctx.strokeStyle = '#30363d';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(350, 322);
              ctx.lineTo(230, 343);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(350, 322);
              ctx.lineTo(470, 343);
              ctx.stroke();

              for (const nd of ideals) {
                const w = ctx.measureText(nd.label).width + 20;
                ctx.fillStyle = nd.color + '22';
                ctx.strokeStyle = nd.color;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.roundRect(nd.x - w / 2, nd.y - 12, w, 24, 6);
                ctx.fill();
                ctx.stroke();
                ctx.fillStyle = nd.color;
                ctx.font = '12px -apple-system,sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(nd.label, nd.x, nd.y);
              }
            }

            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch12-sec04-ex01',
          type: 'mcq',
          question: 'In a PID, which of the following is TRUE?',
          options: [
            'Every element is a unit',
            'Every irreducible element is prime',
            'Every ideal is maximal',
            'The ring is always a field'
          ],
          answer: 1,
          explanation: 'In a PID, irreducible and prime are equivalent concepts. This is crucial for unique factorization. Not every element is a unit (e.g. 2 in Z), not every ideal is maximal (e.g. (0) in Z), and not every PID is a field (Z is a PID but not a field).'
        },
        {
          id: 'ch12-sec04-ex02',
          type: 'mcq',
          question: 'Which step in the proof that PID implies UFD uses the Noetherian property?',
          options: [
            'Showing uniqueness of factorization',
            'Showing existence of factorization (ascending chain argument)',
            'Showing irreducible equals prime',
            'Showing GCDs exist'
          ],
          answer: 1,
          explanation: 'The ascending chain condition (ACC) is used to show existence: if some element cannot be factored into irreducibles, we build an infinite strictly ascending chain of ideals, contradicting the Noetherian property of PIDs.'
        },
        {
          id: 'ch12-sec04-ex03',
          type: 'mcq',
          question: 'What is gcd(12, 18) in Z, expressed via Bezout identity?',
          options: [
            '6 = 12(2) + 18(-1)',
            '6 = 12(-1) + 18(1)',
            '6 = 12(3) + 18(-1)',
            '6 = 12(0) + 18(1/3)'
          ],
          answer: 1,
          explanation: 'gcd(12, 18) = 6, and 6 = 12(-1) + 18(1). We can verify: -12 + 18 = 6. The Bezout coefficients are x = -1 and y = 1 (or equivalently x = 2 and y = -1, since 24 - 18 = 6).'
        }
      ]
    },

    // =====================================================================
    //  SECTION 5 — Unique Factorization Domains
    // =====================================================================
    {
      id: 'ch12-sec05',
      title: '5. Unique Factorization Domains',
      content: `
<h2>Unique Factorization Domains</h2>
<p class="section-roadmap"><em>We now study the outermost useful layer in our hierarchy: Unique Factorization Domains (UFDs). A UFD is an integral domain where every nonzero non-unit factors into irreducibles in an essentially unique way. We examine what "essentially unique" means, distinguish irreducible from prime elements, and study a famous example where unique factorization fails.</em></p>

<div class="definition">
<strong>Definition (UFD).</strong> An integral domain \\(R\\) is a <em>unique factorization domain</em> if:
<ol>
<li><strong>Existence:</strong> Every nonzero non-unit \\(a \\in R\\) can be written as a product of irreducible elements: \\(a = p_1 p_2 \\cdots p_n\\).</li>
<li><strong>Uniqueness:</strong> If \\(a = p_1 \\cdots p_m = q_1 \\cdots q_n\\), then \\(m = n\\) and (after reordering) \\(p_i\\) and \\(q_i\\) are associates for each \\(i\\).</li>
</ol>
Two elements \\(a, b\\) are <em>associates</em> if \\(a = ub\\) for some unit \\(u\\).
</div>

<div class="intuition">
<strong>Intuition.</strong> "Unique factorization" means the Fundamental Theorem of Arithmetic generalizes: just as every positive integer factors uniquely into primes, every element of a UFD factors uniquely into irreducibles, up to reordering and units. The word "essentially" accounts for the ambiguity of units (e.g. \\(6 = 2 \\cdot 3 = (-2)(-3)\\)).
</div>

<h3>Irreducible vs. Prime</h3>

<div class="definition">
<strong>Definition.</strong> Let \\(R\\) be an integral domain and \\(p \\in R\\) be nonzero and not a unit.
<ul>
<li>\\(p\\) is <em>irreducible</em> if \\(p = ab\\) implies \\(a\\) is a unit or \\(b\\) is a unit.</li>
<li>\\(p\\) is <em>prime</em> if \\(p \\mid ab\\) implies \\(p \\mid a\\) or \\(p \\mid b\\).</li>
</ul>
</div>

<div class="theorem">
<strong>Facts.</strong>
<ol>
<li>In any integral domain: prime \\(\\Rightarrow\\) irreducible.</li>
<li>In a UFD: irreducible \\(\\Leftrightarrow\\) prime.</li>
<li>In a general integral domain: irreducible does NOT imply prime.</li>
</ol>
</div>

<div class="proof">
<strong>Proof that prime implies irreducible.</strong> Let \\(p\\) be prime, and suppose \\(p = ab\\). Then \\(p \\mid ab\\), so \\(p \\mid a\\) or \\(p \\mid b\\). Say \\(p \\mid a\\), so \\(a = pc\\). Then \\(p = pcb\\), giving \\(1 = cb\\) (cancellation in an integral domain), so \\(b\\) is a unit. \\(\\square\\)
</div>

<h3>The Classic Failure: \\(\\mathbb{Z}[\\sqrt{-5}]\\)</h3>

<div class="example">
<strong>Example.</strong> In \\(\\mathbb{Z}[\\sqrt{-5}] = \\{a + b\\sqrt{-5} : a, b \\in \\mathbb{Z}\\}\\), consider:
\\[6 = 2 \\cdot 3 = (1 + \\sqrt{-5})(1 - \\sqrt{-5}).\\]
We claim these are two genuinely different factorizations into irreducibles.

<strong>Step 1:</strong> Define the norm \\(N(a + b\\sqrt{-5}) = a^2 + 5b^2\\). This norm is multiplicative: \\(N(\\alpha\\beta) = N(\\alpha)N(\\beta)\\).

<strong>Step 2:</strong> The units are exactly those elements with \\(N(u) = 1\\), which means \\(a^2 + 5b^2 = 1\\), so \\(u = \\pm 1\\).

<strong>Step 3:</strong> \\(2\\) is irreducible. If \\(2 = \\alpha\\beta\\), then \\(4 = N(2) = N(\\alpha)N(\\beta)\\). The only factorizations of 4 from the set \\(\\{a^2 + 5b^2\\}\\) are \\(1 \\cdot 4\\) or \\(4 \\cdot 1\\) (since \\(a^2 + 5b^2 = 2\\) has no integer solutions). So one factor must be a unit.

<strong>Step 4:</strong> Similarly, \\(3\\), \\(1 + \\sqrt{-5}\\), and \\(1 - \\sqrt{-5}\\) are all irreducible.

<strong>Step 5:</strong> \\(2\\) and \\(3\\) are not associates (no unit \\(u\\) with \\(2 = 3u\\)), and neither is associate to \\(1 \\pm \\sqrt{-5}\\). So the two factorizations are genuinely different.
</div>

<div class="warning">
<strong>Key Takeaway.</strong> In \\(\\mathbb{Z}[\\sqrt{-5}]\\), the element \\(2\\) is irreducible but NOT prime: \\(2 \\mid (1+\\sqrt{-5})(1-\\sqrt{-5}) = 6\\) but \\(2 \\nmid (1+\\sqrt{-5})\\) and \\(2 \\nmid (1-\\sqrt{-5})\\). The failure of "irreducible implies prime" is exactly what causes unique factorization to fail.
</div>

<h3>Examples of UFDs</h3>

<table style="width:100%;border-collapse:collapse;margin:1rem 0;">
<thead>
<tr style="background:#1a1a40;">
<th style="padding:8px;border:1px solid #30363d;color:#58a6ff;">Ring</th>
<th style="padding:8px;border:1px solid #30363d;color:#3fb9a0;">UFD?</th>
<th style="padding:8px;border:1px solid #30363d;color:#f0883e;">Reason</th>
</tr>
</thead>
<tbody>
<tr>
<td style="padding:8px;border:1px solid #30363d;">\\(\\mathbb{Z}\\)</td>
<td style="padding:8px;border:1px solid #30363d;">Yes</td>
<td style="padding:8px;border:1px solid #30363d;">ED &rArr; PID &rArr; UFD</td>
</tr>
<tr>
<td style="padding:8px;border:1px solid #30363d;">\\(\\mathbb{Z}[i]\\)</td>
<td style="padding:8px;border:1px solid #30363d;">Yes</td>
<td style="padding:8px;border:1px solid #30363d;">ED (norm is Euclidean) &rArr; PID &rArr; UFD</td>
</tr>
<tr>
<td style="padding:8px;border:1px solid #30363d;">\\(\\mathbb{Z}[x]\\)</td>
<td style="padding:8px;border:1px solid #30363d;">Yes</td>
<td style="padding:8px;border:1px solid #30363d;">R UFD &rArr; R[x] UFD (Gauss's Lemma)</td>
</tr>
<tr>
<td style="padding:8px;border:1px solid #30363d;">\\(F[x]\\), \\(F\\) a field</td>
<td style="padding:8px;border:1px solid #30363d;">Yes</td>
<td style="padding:8px;border:1px solid #30363d;">ED &rArr; PID &rArr; UFD</td>
</tr>
<tr>
<td style="padding:8px;border:1px solid #30363d;">\\(\\mathbb{Z}[\\sqrt{-5}]\\)</td>
<td style="padding:8px;border:1px solid #30363d;">No</td>
<td style="padding:8px;border:1px solid #30363d;">\\(6 = 2 \\cdot 3 = (1+\\sqrt{-5})(1-\\sqrt{-5})\\)</td>
</tr>
<tr>
<td style="padding:8px;border:1px solid #30363d;">\\(\\mathbb{Z}[\\sqrt{-3}]\\)</td>
<td style="padding:8px;border:1px solid #30363d;">No</td>
<td style="padding:8px;border:1px solid #30363d;">\\(4 = 2 \\cdot 2 = (1+\\sqrt{-3})(1-\\sqrt{-3})\\)</td>
</tr>
</tbody>
</table>

<div class="theorem">
<strong>Gauss's Lemma.</strong> If \\(R\\) is a UFD, then \\(R[x]\\) is also a UFD.
</div>

<p>This theorem extends unique factorization from a ring to its polynomial ring. Applying it repeatedly: \\(\\mathbb{Z}[x_1, x_2, \\ldots, x_n]\\) is a UFD. Note, however, that \\(\\mathbb{Z}[x]\\) is a UFD but NOT a PID (the ideal \\((2, x)\\) is not principal).</p>

<h3>The Complete Hierarchy</h3>

<p>We can now state the full chain of implications:</p>

\\[\\text{Field} \\Rightarrow \\text{ED} \\Rightarrow \\text{PID} \\Rightarrow \\text{UFD} \\Rightarrow \\text{Integral Domain}\\]

<p>Each implication is strict (none of the converses hold in general), and each level adds new rings to the family while losing some structural guarantee.</p>

<div class="env-block intuition"><div class="env-title">Summary</div><div class="env-body"><p>This chapter has traced a path from ring homomorphisms (the maps between rings) through isomorphism theorems (the structural decomposition of rings) to the factorization hierarchy (ED, PID, UFD). Together, these tools form the foundation for studying polynomial rings, field extensions, and ultimately Galois theory in the chapters ahead.</p></div></div>
`,
      visualizations: [
        {
          id: 'viz-ch12-zsqrt5-factorization',
          title: 'Factorization Failure in Z[sqrt(-5)]',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 480, scale: 40 });

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;';
            wrap.appendChild(controls);

            let showNorm = true;
            const toggleBtn = VizEngine.createButton(controls, 'Toggle Norm Circles', () => {
              showNorm = !showNorm;
              draw();
            });

            function draw() {
              viz.clear();
              viz.drawGrid(1);
              viz.drawAxes();
              const ctx = viz.ctx;

              // Title
              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('Elements of Z[sqrt(-5)] on the complex plane', 350, 15);
              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillText('Horizontal: real part, Vertical: sqrt(5) * imaginary part', 350, 33);

              // Draw lattice points of Z[sqrt(-5)]
              // a + b*sqrt(-5) maps to (a, b*sqrt(5)) on the plane
              const s5 = Math.sqrt(5);
              for (let a = -6; a <= 6; a++) {
                for (let b = -3; b <= 3; b++) {
                  const norm = a * a + 5 * b * b;
                  const [sx, sy] = viz.toScreen(a, b * s5);
                  ctx.fillStyle = '#444466';
                  ctx.beginPath();
                  ctx.arc(sx, sy, 3, 0, Math.PI * 2);
                  ctx.fill();

                  if (showNorm && norm > 0 && norm <= 10) {
                    ctx.fillStyle = viz.colors.text;
                    ctx.font = '9px -apple-system,sans-serif';
                    ctx.textAlign = 'left';
                    ctx.fillText('N=' + norm, sx + 5, sy - 5);
                  }
                }
              }

              // Highlight the key elements of the factorization of 6
              const keyPoints = [
                { a: 2, b: 0, label: '2', color: viz.colors.blue, norm: 4 },
                { a: 3, b: 0, label: '3', color: viz.colors.teal, norm: 9 },
                { a: 1, b: 1, label: '1+sqrt(-5)', color: viz.colors.orange, norm: 6 },
                { a: 1, b: -1, label: '1-sqrt(-5)', color: viz.colors.red, norm: 6 },
                { a: 6, b: 0, label: '6', color: viz.colors.green, norm: 36 },
              ];

              for (const p of keyPoints) {
                const [sx, sy] = viz.toScreen(p.a, p.b * s5);
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(sx, sy, 7, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = p.color;
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.fillStyle = p.color;
                ctx.font = 'bold 12px -apple-system,sans-serif';
                ctx.textAlign = 'left';
                ctx.fillText(p.label + ' (N=' + p.norm + ')', sx + 10, sy - 3);
              }

              // Show the two factorizations
              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 13px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('Two distinct factorizations of 6:', 20, 420);

              ctx.fillStyle = viz.colors.blue;
              ctx.font = '13px -apple-system,sans-serif';
              ctx.fillText('6 = 2 * 3', 20, 442);
              ctx.fillStyle = viz.colors.text;
              ctx.fillText('(N: 36 = 4 * 9)', 120, 442);

              ctx.fillStyle = viz.colors.orange;
              ctx.fillText('6 = (1+sqrt(-5))(1-sqrt(-5))', 300, 442);
              ctx.fillStyle = viz.colors.text;
              ctx.fillText('(N: 36 = 6 * 6)', 560, 442);

              ctx.fillStyle = viz.colors.yellow;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.fillText('All four factors are irreducible but 2 and 3 are NOT prime!', 20, 465);
            }

            draw();
          }
        },
        {
          id: 'viz-ch12-norm-explorer',
          title: 'Norm Function Explorer for Number Rings',
          setup(container) {
            const wrap = document.createElement('div');
            wrap.style.cssText = 'padding:12px;';
            container.appendChild(wrap);

            const viz = new VizEngine(wrap, { width: 700, height: 420, scale: 50 });

            const controls = document.createElement('div');
            controls.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;';
            wrap.appendChild(controls);

            let ringChoice = 0; // 0: Z[i], 1: Z[sqrt(-2)], 2: Z[sqrt(-5)]
            const ringNames = ['Z[i]: N = a^2 + b^2', 'Z[sqrt(-2)]: N = a^2 + 2b^2', 'Z[sqrt(-5)]: N = a^2 + 5b^2'];
            const ringCoeffs = [1, 2, 5];

            const btnZi = VizEngine.createButton(controls, 'Z[i]', () => { ringChoice = 0; draw(); });
            const btnZ2 = VizEngine.createButton(controls, 'Z[sqrt(-2)]', () => { ringChoice = 1; draw(); });
            const btnZ5 = VizEngine.createButton(controls, 'Z[sqrt(-5)]', () => { ringChoice = 2; draw(); });

            let maxNorm = 10;
            VizEngine.createSlider(controls, 'Max norm', 1, 50, maxNorm, 1, (v) => { maxNorm = Math.round(v); draw(); });

            function draw() {
              viz.clear();
              viz.drawGrid(1);
              viz.drawAxes();
              const ctx = viz.ctx;

              const d = ringCoeffs[ringChoice];

              ctx.fillStyle = viz.colors.white;
              ctx.font = 'bold 14px -apple-system,sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText(ringNames[ringChoice], 350, 15);

              // Color elements by norm value
              const normColors = {};
              const colorPalette = [
                viz.colors.blue, viz.colors.teal, viz.colors.orange, viz.colors.green,
                viz.colors.purple, viz.colors.red, viz.colors.yellow, viz.colors.pink,
                '#66ccff', '#99ff99', '#ff9966', '#cc99ff'
              ];

              const sqrtD = Math.sqrt(d);
              const maxB = Math.ceil(Math.sqrt(maxNorm / d));
              const maxA = Math.ceil(Math.sqrt(maxNorm));

              let unitCount = 0;
              let totalCount = 0;

              for (let a = -maxA; a <= maxA; a++) {
                for (let b = -maxB; b <= maxB; b++) {
                  const norm = a * a + d * b * b;
                  if (norm > maxNorm || norm === 0) continue;
                  totalCount++;
                  if (norm === 1) unitCount++;

                  const col = colorPalette[(norm - 1) % colorPalette.length];
                  const [sx, sy] = viz.toScreen(a, b * sqrtD);

                  ctx.fillStyle = col;
                  ctx.beginPath();
                  ctx.arc(sx, sy, Math.max(3, 8 - norm * 0.3), 0, Math.PI * 2);
                  ctx.fill();

                  if (norm <= 6) {
                    ctx.fillStyle = col;
                    ctx.font = '9px -apple-system,sans-serif';
                    ctx.textAlign = 'left';
                    ctx.fillText(String(norm), sx + 6, sy - 4);
                  }
                }
              }

              // Draw norm level curves (ellipses)
              for (let n = 1; n <= Math.min(maxNorm, 12); n++) {
                const rA = Math.sqrt(n);
                const rB = Math.sqrt(n / d);
                ctx.strokeStyle = colorPalette[(n - 1) % colorPalette.length] + '33';
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.ellipse(viz.originX, viz.originY, rA * viz.scale, rB * sqrtD * viz.scale, 0, 0, Math.PI * 2);
                ctx.stroke();
              }

              // Info
              ctx.fillStyle = viz.colors.text;
              ctx.font = '12px -apple-system,sans-serif';
              ctx.textAlign = 'left';
              ctx.fillText('Elements with N <= ' + maxNorm + ': ' + totalCount + '  |  Units (N=1): ' + unitCount, 20, 405);
              ctx.fillText('Each color = one norm level. Ellipses show constant-norm curves.', 20, 390);
            }

            draw();
          }
        }
      ],
      exercises: [
        {
          id: 'ch12-sec05-ex01',
          type: 'mcq',
          question: 'In Z[sqrt(-5)], why does unique factorization fail for 6?',
          options: [
            'Because 6 is a unit',
            'Because 2 is irreducible but not prime',
            'Because Z[sqrt(-5)] is not an integral domain',
            'Because the norm function is not multiplicative'
          ],
          answer: 1,
          explanation: 'The element 2 divides 6 = (1+sqrt(-5))(1-sqrt(-5)) but does not divide either factor. So 2 is irreducible but not prime. When irreducible elements fail to be prime, unique factorization breaks down.'
        },
        {
          id: 'ch12-sec05-ex02',
          type: 'mcq',
          question: 'Which of the following rings is a UFD but NOT a PID?',
          options: ['Z', 'Q[x]', 'Z[x]', 'Z[i]'],
          answer: 2,
          explanation: 'Z[x] is a UFD by Gauss Lemma (since Z is a UFD), but it is not a PID: the ideal (2, x) = {f in Z[x] : f(0) is even} cannot be generated by a single polynomial. Both Z and Z[i] are EDs (hence PIDs), and Q[x] is an ED.'
        },
        {
          id: 'ch12-sec05-ex03',
          type: 'mcq',
          question: 'In a UFD, which statement is TRUE?',
          options: [
            'Every ideal is principal',
            'Every irreducible element is prime',
            'A division algorithm always exists',
            'The ring must be Noetherian'
          ],
          answer: 1,
          explanation: 'In any UFD, irreducible elements are prime. This is the key property that ensures uniqueness of factorization. Not every ideal need be principal (counterexample: Z[x]), no division algorithm is required, and while PIDs are Noetherian, general UFDs need not be (though in practice most common examples are).'
        },
        {
          id: 'ch12-sec05-ex04',
          type: 'mcq',
          question: 'What are the units in Z[sqrt(-5)]?',
          options: ['{1}', '{1, -1}', '{1, -1, sqrt(-5), -sqrt(-5)}', '{1, -1, 2, -2}'],
          answer: 1,
          explanation: 'The units are elements with norm N(a + b*sqrt(-5)) = a^2 + 5b^2 = 1. The only integer solutions are a = +/-1, b = 0, giving units {1, -1}.'
        }
      ]
    }
  ]
});
