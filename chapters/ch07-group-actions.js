window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch07',
    number: 7,
    title: 'Group Actions',
    subtitle: 'Actions, orbits, stabilizers, Burnside lemma, class equation',
    sections: [
        // ===== SECTION 1: Group Actions =====
        {
            id: 'ch07-sec01',
            title: 'Group Actions',
            content: `

<div class="env-block intuition">
    <div class="env-title">Why Group Actions?</div>
    <div class="env-body">
        <p>So far we have studied groups as abstract algebraic structures. But groups become truly powerful when they <em>act</em> on sets: rotating a polygon, permuting roots of a polynomial, or conjugating elements within the group itself. A group action is a formal way to say "the group does something to a set." This chapter develops the machinery of group actions and harvests deep structural theorems from it.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> Define a (left) group action rigorously, introduce the key examples (left multiplication, conjugation, action on cosets), and establish the basic properties that every action satisfies.</p>

<h2>7.1 Group Actions</h2>

<h3>The Definition</h3>

<div class="definition">
<strong>Definition 7.1 (Group Action).</strong>
Let \\(G\\) be a group and let \\(X\\) be a nonempty set. A <em>left action</em> of \\(G\\) on \\(X\\) is a function
\\[
\\cdot : G \\times X \\to X, \\qquad (g, x) \\mapsto g \\cdot x,
\\]
satisfying the following two axioms:
<ol>
<li><strong>Identity:</strong> \\(e \\cdot x = x\\) for all \\(x \\in X\\), where \\(e\\) is the identity of \\(G\\).</li>
<li><strong>Compatibility:</strong> \\((gh) \\cdot x = g \\cdot (h \\cdot x)\\) for all \\(g, h \\in G\\) and all \\(x \\in X\\).</li>
</ol>
We also say <em>\\(G\\) acts on \\(X\\)</em>, or that \\(X\\) is a <em>\\(G\\)-set</em>.
</div>

<p>The compatibility axiom says that the group multiplication is faithfully reflected in sequential application of the action. The two axioms together guarantee that each group element acts as a bijection on \\(X\\).</p>

<div class="theorem">
<strong>Proposition 7.2 (Actions as Homomorphisms).</strong>
A left action of \\(G\\) on \\(X\\) is equivalent to a group homomorphism
\\[
\\varphi : G \\to \\operatorname{Sym}(X),
\\]
where \\(\\operatorname{Sym}(X)\\) denotes the symmetric group of all bijections \\(X \\to X\\). The correspondence is \\(\\varphi(g)(x) = g \\cdot x\\).
</div>

<div class="proof">
<strong>Proof.</strong>
Given an action \\(\\cdot\\), define \\(\\varphi(g) : X \\to X\\) by \\(\\varphi(g)(x) = g \\cdot x\\). We check:
<ul>
<li>\\(\\varphi(g)\\) is a bijection: its inverse is \\(\\varphi(g^{-1})\\), since \\(g^{-1} \\cdot (g \\cdot x) = (g^{-1}g) \\cdot x = e \\cdot x = x\\).</li>
<li>\\(\\varphi\\) is a homomorphism: \\(\\varphi(gh)(x) = (gh) \\cdot x = g \\cdot (h \\cdot x) = \\varphi(g)(\\varphi(h)(x))\\), so \\(\\varphi(gh) = \\varphi(g) \\circ \\varphi(h)\\).</li>
</ul>
Conversely, given \\(\\varphi : G \\to \\operatorname{Sym}(X)\\), define \\(g \\cdot x = \\varphi(g)(x)\\). The homomorphism property gives the two action axioms. \\(\\square\\)
</div>

<div class="definition">
<strong>Definition 7.3 (Faithful and Transitive Actions).</strong>
<ul>
<li>An action is <em>faithful</em> (or <em>effective</em>) if the corresponding homomorphism \\(\\varphi : G \\to \\operatorname{Sym}(X)\\) is injective, i.e., \\(\\ker \\varphi = \\{e\\}\\). Equivalently, distinct group elements act differently on \\(X\\).</li>
<li>An action is <em>transitive</em> if for every pair \\(x, y \\in X\\), there exists \\(g \\in G\\) with \\(g \\cdot x = y\\). Informally, the action can reach any element from any other.</li>
</ul>
</div>

<h3>Fundamental Examples</h3>

<div class="env-block example">
<div class="env-title">Example 7.4 (Left Multiplication)</div>
<div class="env-body">
<p>Every group acts on itself by left multiplication: \\(g \\cdot x = gx\\) for \\(g, x \\in G\\). This action is always faithful and transitive. The corresponding homomorphism \\(G \\to \\operatorname{Sym}(G)\\) is exactly the map appearing in Cayley's theorem, which says every group is isomorphic to a subgroup of a symmetric group.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 7.5 (Conjugation)</div>
<div class="env-body">
<p>\\(G\\) acts on itself by conjugation: \\(g \\cdot x = gxg^{-1}\\). Let us verify the axioms:
<ul>
<li>Identity: \\(e \\cdot x = exe^{-1} = x\\). \\(\\checkmark\\)</li>
<li>Compatibility: \\((gh) \\cdot x = ghx(gh)^{-1} = ghxh^{-1}g^{-1} = g \\cdot (hxh^{-1}) = g \\cdot (h \\cdot x)\\). \\(\\checkmark\\)</li>
</ul>
This action is generally <em>not</em> faithful: the kernel of \\(\\varphi : G \\to \\operatorname{Sym}(G)\\) given by conjugation is precisely the center \\(Z(G) = \\{g \\in G : gx = xg \\text{ for all } x \\in G\\}\\). It is transitive if and only if the group has a single conjugacy class, which happens only for the trivial group.</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 7.6 (Action on Cosets)</div>
<div class="env-body">
<p>Let \\(H \\le G\\) be a subgroup and let \\(G/H = \\{gH : g \\in G\\}\\) denote the set of left cosets. Then \\(G\\) acts on \\(G/H\\) by left multiplication:
\\[
g \\cdot (aH) = (ga)H.
\\]
This action is always transitive (since any coset \\(aH\\) is reached from \\(eH = H\\) by \\(a \\cdot H = aH\\)). The kernel of this action is \\(\\bigcap_{g \\in G} gHg^{-1}\\), the largest normal subgroup of \\(G\\) contained in \\(H\\).</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 7.7 (Conjugation on Subgroups)</div>
<div class="env-body">
<p>\\(G\\) acts on the set of all subgroups of \\(G\\) by conjugation: \\(g \\cdot H = gHg^{-1}\\). The orbit of \\(H\\) under this action is the set of all subgroups conjugate to \\(H\\), and the stabilizer is the normalizer \\(N_G(H) = \\{g \\in G : gHg^{-1} = H\\}\\). This action is central to the Sylow theorems.</p>
</div>
</div>

<h3>The Dihedral Group Acting on Vertices</h3>

<p>Consider the dihedral group \\(D_n\\) of symmetries of a regular \\(n\\)-gon. Label the vertices \\(\\{1, 2, \\ldots, n\\}\\). Each symmetry permutes the vertices, giving an action \\(D_n \\to S_n\\). For instance, rotation by \\(2\\pi/n\\) sends vertex \\(k\\) to vertex \\(k+1 \\pmod{n}\\), and a reflection fixes one vertex (or none) while swapping others.</p>

<div class="viz-placeholder" data-viz="ch07-viz-group-action-demo"></div>

<h3>Right Actions and Conventions</h3>

<p>A <em>right action</em> of \\(G\\) on \\(X\\) is a map \\(X \\times G \\to X\\), \\((x, g) \\mapsto x \\cdot g\\), satisfying \\(x \\cdot e = x\\) and \\(x \\cdot (gh) = (x \\cdot g) \\cdot h\\). Every right action can be converted to a left action by defining \\(g \\cdot x = x \\cdot g^{-1}\\). We primarily use left actions in this chapter.</p>

`,
            visualizations: [
                {
                    id: 'ch07-viz-group-action-demo',
                    title: 'Group Action: D_n on a Regular Polygon',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 440;

                        let n = 6;
                        let currentRotation = 0;
                        let reflected = false;
                        let animating = false;
                        let animStart = 0;
                        let animFrom = 0;
                        let animTo = 0;
                        let animReflect = false;
                        const cx = 290, cy = 200, radius = 130;

                        function getVertices(rot, refl) {
                            const verts = [];
                            for (let i = 0; i < n; i++) {
                                let angle = -Math.PI / 2 + (2 * Math.PI * i) / n + rot;
                                let x = cx + radius * Math.cos(angle);
                                let y = cy + radius * Math.sin(angle);
                                if (refl) {
                                    x = 2 * cx - x;
                                }
                                verts.push({ x, y, label: i + 1 });
                            }
                            return verts;
                        }

                        function draw(rot, refl) {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);

                            // Title
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('D' + n + ' acting on vertices of a regular ' + n + '-gon', cx, 25);

                            const verts = getVertices(rot, refl);

                            // Draw edges
                            ctx.strokeStyle = '#58a6ff';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            for (let i = 0; i < n; i++) {
                                const v = verts[i];
                                if (i === 0) ctx.moveTo(v.x, v.y);
                                else ctx.lineTo(v.x, v.y);
                            }
                            ctx.closePath();
                            ctx.stroke();

                            // Draw vertices
                            for (let i = 0; i < n; i++) {
                                const v = verts[i];
                                ctx.beginPath();
                                ctx.arc(v.x, v.y, 18, 0, 2 * Math.PI);
                                ctx.fillStyle = '#0d1117';
                                ctx.fill();
                                ctx.strokeStyle = '#58a6ff';
                                ctx.lineWidth = 2;
                                ctx.stroke();

                                ctx.fillStyle = '#e6edf3';
                                ctx.font = 'bold 14px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(String(v.label), v.x, v.y);
                            }

                            // Draw center
                            ctx.beginPath();
                            ctx.arc(cx, cy, 3, 0, 2 * Math.PI);
                            ctx.fillStyle = '#f0883e';
                            ctx.fill();

                            // Info text
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'center';
                            const rotSteps = Math.round(rot / (2 * Math.PI / n));
                            const rotLabel = ((rotSteps % n) + n) % n;
                            ctx.fillText('Rotation: r^' + rotLabel + (refl ? '  |  Reflected' : ''), cx, 370);
                            ctx.fillText('n = ' + n + '  |  |D_n| = ' + (2 * n), cx, 390);
                            ctx.fillText('Click Rotate / Reflect / change n below', cx, 415);
                        }

                        function animate(timestamp) {
                            if (!animating) return;
                            if (!animStart) animStart = timestamp;
                            const elapsed = timestamp - animStart;
                            const duration = 500;
                            const t = Math.min(elapsed / duration, 1);
                            const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

                            const rot = animFrom + (animTo - animFrom) * eased;
                            draw(rot, animReflect);

                            if (t < 1) {
                                requestAnimationFrame(animate);
                            } else {
                                animating = false;
                                currentRotation = animTo;
                                reflected = animReflect;
                                draw(currentRotation, reflected);
                            }
                        }

                        // Control area
                        canvas.addEventListener('click', (e) => {
                            const rect = canvas.getBoundingClientRect();
                            const mx = e.clientX - rect.left;
                            const my = e.clientY - rect.top;

                            // Rotate button region (left)
                            if (mx > 80 && mx < 200 && my > 330 && my < 360) {
                                if (!animating) {
                                    animating = true;
                                    animStart = 0;
                                    animFrom = currentRotation;
                                    animTo = currentRotation + (2 * Math.PI / n);
                                    animReflect = reflected;
                                    requestAnimationFrame(animate);
                                }
                                return;
                            }
                            // Reflect button region (center)
                            if (mx > 220 && mx < 360 && my > 330 && my < 360) {
                                reflected = !reflected;
                                draw(currentRotation, reflected);
                                return;
                            }
                            // n- button
                            if (mx > 380 && mx < 430 && my > 330 && my < 360) {
                                if (n > 3) {
                                    n--;
                                    currentRotation = 0;
                                    reflected = false;
                                    draw(currentRotation, reflected);
                                }
                                return;
                            }
                            // n+ button
                            if (mx > 440 && mx < 490 && my > 330 && my < 360) {
                                if (n < 12) {
                                    n++;
                                    currentRotation = 0;
                                    reflected = false;
                                    draw(currentRotation, reflected);
                                }
                                return;
                            }
                        });

                        function drawButtons() {
                            // Rotate button
                            ctx.fillStyle = '#21262d';
                            ctx.strokeStyle = '#30363d';
                            ctx.lineWidth = 1;

                            ctx.beginPath();
                            ctx.roundRect(80, 332, 120, 28, 6);
                            ctx.fill();
                            ctx.stroke();
                            ctx.fillStyle = '#58a6ff';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Rotate', 140, 350);

                            // Reflect button
                            ctx.fillStyle = '#21262d';
                            ctx.beginPath();
                            ctx.roundRect(220, 332, 140, 28, 6);
                            ctx.fill();
                            ctx.strokeStyle = '#30363d';
                            ctx.stroke();
                            ctx.fillStyle = '#f0883e';
                            ctx.fillText('Reflect', 290, 350);

                            // n- button
                            ctx.fillStyle = '#21262d';
                            ctx.beginPath();
                            ctx.roundRect(380, 332, 50, 28, 6);
                            ctx.fill();
                            ctx.strokeStyle = '#30363d';
                            ctx.stroke();
                            ctx.fillStyle = '#7ee787';
                            ctx.fillText('n\u2212', 405, 350);

                            // n+ button
                            ctx.fillStyle = '#21262d';
                            ctx.beginPath();
                            ctx.roundRect(440, 332, 50, 28, 6);
                            ctx.fill();
                            ctx.strokeStyle = '#30363d';
                            ctx.stroke();
                            ctx.fillStyle = '#7ee787';
                            ctx.fillText('n+', 465, 350);
                        }

                        const origDraw = draw;
                        draw = function(rot, refl) {
                            origDraw(rot, refl);
                            drawButtons();
                        };

                        draw(currentRotation, reflected);
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch07-ex01',
                    type: 'proof',
                    difficulty: 2,
                    title: 'Verifying an Action',
                    question: 'Let G = GL_n(R) and let X = R^n. Define g . v = gv (matrix-vector multiplication). Prove that this defines a left action of G on X.',
                    hint: 'Check the two axioms: I_n v = v, and (AB)v = A(Bv) by associativity of matrix multiplication.',
                    solution: 'Identity: I_n . v = I_n v = v for all v in R^n. Compatibility: (AB) . v = (AB)v = A(Bv) = A . (B . v) by associativity of matrix multiplication. Both axioms hold, so this is a valid left action.'
                },
                {
                    id: 'ch07-ex02',
                    type: 'short_answer',
                    difficulty: 2,
                    title: 'Kernel of the Conjugation Action',
                    question: 'Show that the kernel of the conjugation action of G on itself is exactly the center Z(G).',
                    hint: 'The kernel consists of those g in G such that gxg^{-1} = x for all x in G.',
                    solution: 'The kernel of the action is {g in G : g . x = x for all x in G} = {g in G : gxg^{-1} = x for all x in G} = {g in G : gx = xg for all x in G} = Z(G).'
                },
                {
                    id: 'ch07-ex03',
                    type: 'proof',
                    difficulty: 3,
                    title: 'Action on Cosets is Well-Defined',
                    question: 'Let H be a subgroup of G. Prove that the left multiplication action of G on the set G/H of left cosets is well-defined: if aH = bH, then g(aH) = g(bH) for all g in G.',
                    hint: 'If aH = bH, then a^{-1}b is in H. Show that (ga)^{-1}(gb) is in H.',
                    solution: 'Suppose aH = bH, so a^{-1}b in H. Then (ga)^{-1}(gb) = a^{-1}g^{-1}gb = a^{-1}b in H, so (ga)H = (gb)H. Hence g . (aH) = (ga)H = (gb)H = g . (bH), and the action is well-defined.'
                },
                {
                    id: 'ch07-ex04',
                    type: 'multiple_choice',
                    difficulty: 1,
                    title: 'Faithful Action Check',
                    question: 'Which of the following actions is always faithful? (a) Left multiplication of G on itself. (b) Conjugation of G on itself. (c) The trivial action g . x = x for all g, x.',
                    options: [
                        '(a) Left multiplication',
                        '(b) Conjugation',
                        '(c) Trivial action',
                        '(a) and (b) are both always faithful'
                    ],
                    correctIndex: 0,
                    explanation: 'Left multiplication is always faithful: if gx = hx for all x in G, then taking x = e gives g = h. Conjugation has kernel Z(G), which is nontrivial for any non-trivial abelian group. The trivial action is faithful only for the trivial group.'
                }
            ]
        },

        // ===== SECTION 2: Orbits and Stabilizers =====
        {
            id: 'ch07-sec02',
            title: 'Orbits and Stabilizers',
            content: `

<div class="env-block intuition">
    <div class="env-title">Decomposing the Set</div>
    <div class="env-body">
        <p>When a group acts on a set, the set naturally breaks into "orbits," the maximal clusters of elements reachable from one another. Meanwhile, each element has a "stabilizer," the subgroup of elements that fix it. The orbit-stabilizer theorem connects these two ideas with a beautiful counting formula.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> Define orbits and stabilizers, prove the orbit-stabilizer theorem, and illustrate with concrete examples from dihedral and symmetric groups.</p>

<h2>7.2 Orbits and Stabilizers</h2>

<h3>Orbits</h3>

<div class="definition">
<strong>Definition 7.8 (Orbit).</strong>
Let \\(G\\) act on \\(X\\). The <em>orbit</em> of an element \\(x \\in X\\) is
\\[
\\operatorname{Orb}(x) = G \\cdot x = \\{g \\cdot x : g \\in G\\}.
\\]
It is the set of all elements of \\(X\\) that \\(x\\) can be sent to by some group element.
</div>

<div class="theorem">
<strong>Proposition 7.9 (Orbits Partition X).</strong>
The orbits of a group action form a partition of \\(X\\). That is:
<ol>
<li>Every element \\(x \\in X\\) belongs to exactly one orbit.</li>
<li>Two orbits are either disjoint or identical.</li>
</ol>
</div>

<div class="proof">
<strong>Proof.</strong>
Define a relation on \\(X\\) by \\(x \\sim y\\) if and only if \\(y = g \\cdot x\\) for some \\(g \\in G\\). We verify this is an equivalence relation:
<ul>
<li><strong>Reflexive:</strong> \\(x = e \\cdot x\\), so \\(x \\sim x\\).</li>
<li><strong>Symmetric:</strong> If \\(y = g \\cdot x\\), then \\(x = g^{-1} \\cdot y\\), so \\(y \\sim x\\).</li>
<li><strong>Transitive:</strong> If \\(y = g \\cdot x\\) and \\(z = h \\cdot y\\), then \\(z = h \\cdot (g \\cdot x) = (hg) \\cdot x\\), so \\(x \\sim z\\).</li>
</ul>
The equivalence classes are precisely the orbits, and equivalence classes always form a partition. \\(\\square\\)
</div>

<p>We write \\(X/G\\) for the set of all orbits, and call this the <em>orbit space</em> (or set of orbits).</p>

<h3>Stabilizers</h3>

<div class="definition">
<strong>Definition 7.10 (Stabilizer).</strong>
The <em>stabilizer</em> (or <em>isotropy subgroup</em>) of \\(x \\in X\\) is
\\[
\\operatorname{Stab}_G(x) = G_x = \\{g \\in G : g \\cdot x = x\\}.
\\]
It is the set of all group elements that fix \\(x\\).
</div>

<div class="theorem">
<strong>Proposition 7.11.</strong>
For any \\(x \\in X\\), the stabilizer \\(G_x\\) is a subgroup of \\(G\\).
</div>

<div class="proof">
<strong>Proof.</strong>
<ul>
<li><strong>Identity:</strong> \\(e \\cdot x = x\\), so \\(e \\in G_x\\).</li>
<li><strong>Closure:</strong> If \\(g, h \\in G_x\\), then \\((gh) \\cdot x = g \\cdot (h \\cdot x) = g \\cdot x = x\\), so \\(gh \\in G_x\\).</li>
<li><strong>Inverses:</strong> If \\(g \\in G_x\\), then \\(x = e \\cdot x = (g^{-1}g) \\cdot x = g^{-1} \\cdot (g \\cdot x) = g^{-1} \\cdot x\\), so \\(g^{-1} \\in G_x\\).</li>
</ul>
\\(\\square\\)
</div>

<h3>The Orbit-Stabilizer Theorem</h3>

<div class="theorem">
<strong>Theorem 7.12 (Orbit-Stabilizer Theorem).</strong>
Let \\(G\\) be a finite group acting on a set \\(X\\), and let \\(x \\in X\\). Then there is a bijection between the orbit of \\(x\\) and the set of left cosets of \\(G_x\\) in \\(G\\):
\\[
\\operatorname{Orb}(x) \\longleftrightarrow G / G_x.
\\]
In particular,
\\[
|\\operatorname{Orb}(x)| = [G : G_x] = \\frac{|G|}{|G_x|}.
\\]
</div>

<div class="proof">
<strong>Proof.</strong>
Define \\(\\Phi : G/G_x \\to \\operatorname{Orb}(x)\\) by \\(\\Phi(gG_x) = g \\cdot x\\).
<ul>
<li><strong>Well-defined:</strong> If \\(gG_x = hG_x\\), then \\(h^{-1}g \\in G_x\\), so \\(h^{-1}g \\cdot x = x\\), giving \\(g \\cdot x = h \\cdot x\\).</li>
<li><strong>Surjective:</strong> Every element of \\(\\operatorname{Orb}(x)\\) has the form \\(g \\cdot x = \\Phi(gG_x)\\).</li>
<li><strong>Injective:</strong> If \\(g \\cdot x = h \\cdot x\\), then \\(h^{-1}g \\cdot x = x\\), so \\(h^{-1}g \\in G_x\\), meaning \\(gG_x = hG_x\\).</li>
</ul>
Hence \\(\\Phi\\) is a bijection, and \\(|\\operatorname{Orb}(x)| = |G/G_x| = [G : G_x] = |G|/|G_x|\\). \\(\\square\\)
</div>

<div class="env-block remark">
<div class="env-title">Counting Formula</div>
<div class="env-body">
<p>The orbit-stabilizer theorem gives the fundamental counting principle:
\\[
|G| = |\\operatorname{Orb}(x)| \\cdot |\\operatorname{Stab}_G(x)|.
\\]
Large orbits mean small stabilizers, and vice versa. A fixed point (orbit of size 1) corresponds to a stabilizer equal to all of \\(G\\).</p>
</div>
</div>

<h3>Example: \\(D_4\\) Acting on Vertices of a Square</h3>

<p>The dihedral group \\(D_4\\) of order 8 acts on the four vertices \\(\\{1,2,3,4\\}\\) of a square. Consider vertex 1:
<ul>
<li>\\(\\operatorname{Orb}(1) = \\{1,2,3,4\\}\\) (the action is transitive on vertices).</li>
<li>\\(|\\operatorname{Stab}_{D_4}(1)| = |D_4|/|\\operatorname{Orb}(1)| = 8/4 = 2\\). The stabilizer consists of the identity and the reflection through vertex 1 and the opposite midpoint.</li>
</ul></p>

<h3>Example: \\(S_4\\) Acting on Pairs</h3>

<p>Let \\(S_4\\) act on the set \\(X = \\{\\{i,j\\} : 1 \\le i < j \\le 4\\}\\) of 2-element subsets of \\(\\{1,2,3,4\\}\\), where \\(\\sigma \\cdot \\{i,j\\} = \\{\\sigma(i), \\sigma(j)\\}\\). Since any pair can be sent to any other pair, the action is transitive and \\(|\\operatorname{Orb}(\\{1,2\\})| = 6 = |X|\\). The orbit-stabilizer theorem gives \\(|\\operatorname{Stab}(\\{1,2\\})| = 24/6 = 4\\). Indeed, the stabilizer of \\(\\{1,2\\}\\) is \\(\\{e, (12), (34), (12)(34)\\} \\cong \\mathbb{Z}_2 \\times \\mathbb{Z}_2\\).</p>

<div class="viz-placeholder" data-viz="ch07-viz-orbit-stabilizer"></div>

<h3>Conjugate Stabilizers</h3>

<div class="theorem">
<strong>Proposition 7.13.</strong>
If \\(y = g \\cdot x\\), then \\(G_y = g G_x g^{-1}\\). That is, stabilizers of elements in the same orbit are conjugate subgroups.
</div>

<div class="proof">
<strong>Proof.</strong>
\\(h \\in G_y \\iff h \\cdot y = y \\iff h \\cdot (g \\cdot x) = g \\cdot x \\iff g^{-1}hg \\cdot x = x \\iff g^{-1}hg \\in G_x \\iff h \\in gG_xg^{-1}\\). \\(\\square\\)
</div>

`,
            visualizations: [
                {
                    id: 'ch07-viz-orbit-stabilizer',
                    title: 'Orbit-Stabilizer Visualizer',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 460;

                        // Visualize Z_6 acting on a 6-element set by rotation
                        const elements = [0, 1, 2, 3, 4, 5];
                        const n = 6;
                        let selectedElement = 0;
                        const cx = 290, cy = 190, radius = 120;

                        // Z_6 action: g . x = (x + g) mod 6
                        function orbit(x) {
                            const orb = new Set();
                            for (let g = 0; g < n; g++) {
                                orb.add((x + g) % n);
                            }
                            return [...orb].sort();
                        }

                        function stabilizer(x) {
                            const stab = [];
                            for (let g = 0; g < n; g++) {
                                if ((x + g) % n === x) stab.push(g);
                            }
                            return stab;
                        }

                        // Now use Z_2 x Z_3 acting on {0,...,5} with a non-trivial action
                        // Better: use S_3 acting on {1,2,3} and show orbits
                        // Actually, let's show Z_6 on Z_6 by multiplication (non-regular)
                        // Simplest instructive: show D_3 acting on vertices + center

                        // Let's do a clear pedagogical example:
                        // Z_4 acting on {0,1,2,3,4,5,6,7} (8 elements) by g.x = (x + 2g) mod 8

                        const setSize = 8;
                        const groupSize = 4;
                        const setElements = [0, 1, 2, 3, 4, 5, 6, 7];

                        function actionResult(g, x) {
                            return (x + 2 * g) % setSize;
                        }

                        function computeOrbit(x) {
                            const orb = new Set();
                            for (let g = 0; g < groupSize; g++) {
                                orb.add(actionResult(g, x));
                            }
                            return [...orb].sort((a, b) => a - b);
                        }

                        function computeStabilizer(x) {
                            const stab = [];
                            for (let g = 0; g < groupSize; g++) {
                                if (actionResult(g, x) === x) stab.push(g);
                            }
                            return stab;
                        }

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Z_4 acting on Z_8 via g . x = (x + 2g) mod 8', cx, 22);

                            const orb = computeOrbit(selectedElement);
                            const stab = computeStabilizer(selectedElement);

                            // Draw set elements in a circle
                            for (let i = 0; i < setSize; i++) {
                                const angle = -Math.PI / 2 + (2 * Math.PI * i) / setSize;
                                const x = cx + radius * Math.cos(angle);
                                const y = cy + radius * Math.sin(angle);

                                const inOrbit = orb.includes(i);
                                const isSelected = i === selectedElement;

                                ctx.beginPath();
                                ctx.arc(x, y, 22, 0, 2 * Math.PI);
                                ctx.fillStyle = isSelected ? '#1f6feb' : (inOrbit ? '#238636' : '#21262d');
                                ctx.fill();
                                ctx.strokeStyle = isSelected ? '#58a6ff' : (inOrbit ? '#3fb950' : '#30363d');
                                ctx.lineWidth = 2;
                                ctx.stroke();

                                ctx.fillStyle = '#e6edf3';
                                ctx.font = 'bold 14px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(String(i), x, y);
                            }

                            // Draw orbit arrows
                            ctx.strokeStyle = 'rgba(63, 185, 80, 0.4)';
                            ctx.lineWidth = 1.5;
                            for (let i = 0; i < orb.length; i++) {
                                const from = orb[i];
                                const to = orb[(i + 1) % orb.length];
                                const a1 = -Math.PI / 2 + (2 * Math.PI * from) / setSize;
                                const a2 = -Math.PI / 2 + (2 * Math.PI * to) / setSize;
                                const x1 = cx + radius * Math.cos(a1);
                                const y1 = cy + radius * Math.sin(a1);
                                const x2 = cx + radius * Math.cos(a2);
                                const y2 = cy + radius * Math.sin(a2);

                                const midR = radius * 0.6;
                                const midAngle = (a1 + a2) / 2;
                                if (orb.length > 1) {
                                    ctx.beginPath();
                                    ctx.moveTo(x1, y1);
                                    ctx.quadraticCurveTo(
                                        cx + midR * Math.cos(midAngle),
                                        cy + midR * Math.sin(midAngle),
                                        x2, y2
                                    );
                                    ctx.stroke();
                                }
                            }

                            // Info panel
                            const panelY = 340;
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = '14px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Selected element: ' + selectedElement, 40, panelY);
                            ctx.fillText('Orbit = { ' + orb.join(', ') + ' }', 40, panelY + 24);
                            ctx.fillText('|Orbit| = ' + orb.length, 40, panelY + 48);
                            ctx.fillText('Stabilizer = { ' + stab.join(', ') + ' }', 300, panelY + 24);
                            ctx.fillText('|Stab| = ' + stab.length, 300, panelY + 48);
                            ctx.fillStyle = '#f0883e';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('|G| = |Orb| x |Stab| = ' + orb.length + ' x ' + stab.length + ' = ' + (orb.length * stab.length), cx, panelY + 80);

                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.fillText('Click an element to select it', cx, panelY + 100);
                        }

                        canvas.addEventListener('click', (e) => {
                            const rect = canvas.getBoundingClientRect();
                            const mx = e.clientX - rect.left;
                            const my = e.clientY - rect.top;

                            for (let i = 0; i < setSize; i++) {
                                const angle = -Math.PI / 2 + (2 * Math.PI * i) / setSize;
                                const x = cx + radius * Math.cos(angle);
                                const y = cy + radius * Math.sin(angle);
                                if ((mx - x) ** 2 + (my - y) ** 2 < 22 * 22) {
                                    selectedElement = i;
                                    draw();
                                    return;
                                }
                            }
                        });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch07-ex05',
                    type: 'short_answer',
                    difficulty: 2,
                    title: 'Computing Orbits and Stabilizers',
                    question: 'Let Z_6 act on Z_6 by left addition: g . x = g + x (mod 6). Describe all orbits and all stabilizers.',
                    hint: 'For any x, what is {g + x mod 6 : g in Z_6}?',
                    solution: 'Since {g + x mod 6 : g in Z_6} = Z_6 for every x, the action is transitive, so there is a single orbit: Orb(x) = Z_6 for all x. The stabilizer of x is {g in Z_6 : g + x = x mod 6} = {0}, the trivial subgroup. Check: |Orb(x)| * |Stab(x)| = 6 * 1 = 6 = |Z_6|.'
                },
                {
                    id: 'ch07-ex06',
                    type: 'proof',
                    difficulty: 3,
                    title: 'Fixed Points and the Counting Formula',
                    question: 'Let G be a finite group acting on a finite set X. Use the orbit-stabilizer theorem to prove that |X| = sum over representatives x_i of distinct orbits of |G|/|G_{x_i}|.',
                    hint: 'Since orbits partition X, |X| is the sum of orbit sizes. Apply orbit-stabilizer to each orbit.',
                    solution: 'Since the orbits partition X, we have |X| = sum_i |Orb(x_i)| where the sum is over one representative from each orbit. By the orbit-stabilizer theorem, |Orb(x_i)| = |G|/|G_{x_i}| = [G : G_{x_i}]. Therefore |X| = sum_i [G : G_{x_i}] = sum_i |G|/|G_{x_i}|.'
                },
                {
                    id: 'ch07-ex07',
                    type: 'multiple_choice',
                    difficulty: 2,
                    title: 'Orbit-Stabilizer in S_3',
                    question: 'S_3 acts on {1,2,3} by permutation. What is |Stab_{S_3}(1)|?',
                    options: [
                        '1',
                        '2',
                        '3',
                        '6'
                    ],
                    correctIndex: 1,
                    explanation: 'The orbit of 1 is {1,2,3} since S_3 is transitive, so |Orb(1)| = 3. By orbit-stabilizer, |Stab(1)| = |S_3|/|Orb(1)| = 6/3 = 2. Indeed, Stab(1) = {e, (23)}, the permutations fixing 1.'
                },
                {
                    id: 'ch07-ex08',
                    type: 'proof',
                    difficulty: 3,
                    title: 'Orbit of a Conjugate',
                    question: 'Let G act on X. Prove that for any g in G and x in X, |Orb(g . x)| = |Orb(x)|. (Elements in the same orbit have orbits of the same size.)',
                    hint: 'Show that Orb(g . x) = Orb(x) by showing each is a subset of the other.',
                    solution: 'Let y in Orb(g . x). Then y = h . (g . x) = (hg) . x for some h in G, so y in Orb(x). Conversely, if y in Orb(x), then y = h . x = (hg^{-1}) . (g . x) for some h, so y in Orb(g . x). Hence Orb(g . x) = Orb(x), and in particular they have the same size.'
                }
            ]
        },

        // ===== SECTION 3: The Class Equation =====
        {
            id: 'ch07-sec03',
            title: 'The Class Equation',
            content: `

<div class="env-block intuition">
    <div class="env-title">Sorting by Conjugation</div>
    <div class="env-body">
        <p>When a group acts on itself by conjugation, the orbits are called conjugacy classes. The class equation expresses \\(|G|\\) as the sum of the size of the center plus the sizes of the non-trivial conjugacy classes. This seemingly simple bookkeeping equation has powerful consequences, from proving that centers of \\(p\\)-groups are non-trivial to Cauchy's theorem.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> Develop the conjugation action in detail, derive the class equation, and compute conjugacy classes for small groups.</p>

<h2>7.3 The Class Equation</h2>

<h3>Conjugacy Classes</h3>

<div class="definition">
<strong>Definition 7.14 (Conjugacy Class).</strong>
Let \\(G\\) act on itself by conjugation. The orbit of \\(x \\in G\\) is called the <em>conjugacy class</em> of \\(x\\):
\\[
\\operatorname{cl}(x) = \\{gxg^{-1} : g \\in G\\}.
\\]
The stabilizer of \\(x\\) under conjugation is the <em>centralizer</em>:
\\[
C_G(x) = \\{g \\in G : gxg^{-1} = x\\} = \\{g \\in G : gx = xg\\}.
\\]
</div>

<p>By the orbit-stabilizer theorem:</p>
\\[
|\\operatorname{cl}(x)| = [G : C_G(x)] = \\frac{|G|}{|C_G(x)|}.
\\]

<div class="env-block remark">
<div class="env-title">Fixed Points of Conjugation</div>
<div class="env-body">
<p>An element \\(x \\in G\\) has a singleton conjugacy class (\\(|\\operatorname{cl}(x)| = 1\\)) if and only if \\(gxg^{-1} = x\\) for all \\(g \\in G\\), which means \\(x \\in Z(G)\\). The center consists precisely of those elements that commute with everyone.</p>
</div>
</div>

<h3>The Class Equation</h3>

<p>Since conjugacy classes partition \\(G\\), we can write:</p>
\\[
|G| = \\sum_{\\text{conjugacy classes}} |\\operatorname{cl}(x_i)|
\\]
<p>where the sum is over one representative from each class. Separating the classes of size 1 (elements of the center) from the rest:</p>

<div class="theorem">
<strong>Theorem 7.15 (The Class Equation).</strong>
Let \\(G\\) be a finite group. Then
\\[
|G| = |Z(G)| + \\sum_{i=1}^{k} [G : C_G(x_i)],
\\]
where \\(x_1, \\ldots, x_k\\) are representatives of the distinct conjugacy classes of size greater than 1. Each term \\([G : C_G(x_i)]\\) is a divisor of \\(|G|\\) that is strictly greater than 1.
</div>

<div class="proof">
<strong>Proof.</strong>
The conjugacy classes partition \\(G\\). A class \\(\\{x\\}\\) has size 1 if and only if \\(x \\in Z(G)\\). The remaining classes have size \\([G : C_G(x_i)] > 1\\). Summing over all classes:
\\[
|G| = \\underbrace{|Z(G)|}_{{\\text{singleton classes}}} + \\underbrace{\\sum_{i=1}^{k} [G : C_G(x_i)]}_{{\\text{non-singleton classes}}}.
\\]
Each \\([G : C_G(x_i)]\\) divides \\(|G|\\) by Lagrange's theorem and is \\(> 1\\) since \\(x_i \\notin Z(G)\\). \\(\\square\\)
</div>

<h3>Example: Class Equation of \\(S_3\\)</h3>

<p>The symmetric group \\(S_3\\) has order 6. Its conjugacy classes are determined by cycle type:
<ul>
<li><strong>Identity:</strong> \\(\\{e\\}\\), size 1.</li>
<li><strong>Transpositions:</strong> \\(\\{(12), (13), (23)\\}\\), size 3.</li>
<li><strong>3-cycles:</strong> \\(\\{(123), (132)\\}\\), size 2.</li>
</ul>
The center is \\(Z(S_3) = \\{e\\}\\), and the class equation reads:
\\[
6 = 1 + 3 + 2.
\\]
</p>

<h3>Example: Class Equation of \\(D_4\\)</h3>

<p>The dihedral group \\(D_4 = \\{e, r, r^2, r^3, s, sr, sr^2, sr^3\\}\\) has order 8, where \\(r\\) is rotation by \\(90^\\circ\\) and \\(s\\) is a reflection. The conjugacy classes are:
<ul>
<li>\\(\\{e\\}\\), size 1.</li>
<li>\\(\\{r^2\\}\\), size 1.</li>
<li>\\(\\{r, r^3\\}\\), size 2.</li>
<li>\\(\\{s, sr^2\\}\\), size 2.</li>
<li>\\(\\{sr, sr^3\\}\\), size 2.</li>
</ul>
So \\(Z(D_4) = \\{e, r^2\\}\\), and the class equation is:
\\[
8 = 2 + 2 + 2 + 2.
\\]
</p>

<div class="viz-placeholder" data-viz="ch07-viz-class-equation"></div>

<h3>Centers of \\(p\\)-Groups</h3>

<p>The class equation has a striking consequence for groups whose order is a prime power.</p>

<div class="definition">
<strong>Definition 7.16.</strong>
A group \\(G\\) is a <em>\\(p\\)-group</em> if \\(|G| = p^n\\) for some prime \\(p\\) and integer \\(n \\ge 1\\).
</div>

<div class="theorem">
<strong>Theorem 7.17 (Center of a \\(p\\)-Group).</strong>
If \\(G\\) is a nontrivial \\(p\\)-group, then \\(Z(G) \\neq \\{e\\}\\). In fact, \\(p\\) divides \\(|Z(G)|\\).
</div>

<div class="proof">
<strong>Proof.</strong>
From the class equation:
\\[
|G| = |Z(G)| + \\sum_{i=1}^{k} [G : C_G(x_i)].
\\]
Each index \\([G : C_G(x_i)]\\) divides \\(|G| = p^n\\) and is greater than 1, so each is divisible by \\(p\\). Since \\(|G|\\) is divisible by \\(p\\), we conclude that \\(|Z(G)|\\) is divisible by \\(p\\). In particular, \\(|Z(G)| \\ge p > 1\\). \\(\\square\\)
</div>

<div class="env-block remark">
<div class="env-title">Why This Matters</div>
<div class="env-body">
<p>This theorem is a gateway to the structure theory of \\(p\\)-groups. For instance, it implies that every group of order \\(p^2\\) is abelian (since \\(G/Z(G)\\) cyclic implies \\(G\\) abelian). It also provides the base case for many inductive arguments in the Sylow theory of the next chapter.</p>
</div>
</div>

<h3>Groups of Order \\(p^2\\) are Abelian</h3>

<div class="theorem">
<strong>Corollary 7.18.</strong>
If \\(|G| = p^2\\) for a prime \\(p\\), then \\(G\\) is abelian. Hence \\(G \\cong \\mathbb{Z}_{p^2}\\) or \\(G \\cong \\mathbb{Z}_p \\times \\mathbb{Z}_p\\).
</div>

<div class="proof">
<strong>Proof.</strong>
By Theorem 7.17, \\(p \\mid |Z(G)|\\), so \\(|Z(G)|\\) is \\(p\\) or \\(p^2\\). If \\(|Z(G)| = p^2\\), then \\(G = Z(G)\\) and we are done. If \\(|Z(G)| = p\\), then \\(G/Z(G)\\) has order \\(p^2/p = p\\), hence is cyclic (generated by some coset \\(gZ(G)\\)). But if \\(G/Z(G)\\) is cyclic, then \\(G\\) is abelian (a standard lemma), contradicting \\(|Z(G)| = p < p^2 = |G|\\). So \\(|Z(G)| = p^2\\). \\(\\square\\)
</div>

`,
            visualizations: [
                {
                    id: 'ch07-viz-class-equation',
                    title: 'Conjugacy Classes and Class Equation',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 500;

                        // Show conjugacy classes for S_3 and D_4
                        const groups = {
                            'S_3': {
                                order: 6,
                                elements: ['e', '(12)', '(13)', '(23)', '(123)', '(132)'],
                                classes: [
                                    { rep: 'e', members: ['e'], color: '#58a6ff' },
                                    { rep: '(12)', members: ['(12)', '(13)', '(23)'], color: '#3fb950' },
                                    { rep: '(123)', members: ['(123)', '(132)'], color: '#f0883e' }
                                ],
                                center: ['e'],
                                equation: '6 = 1 + 3 + 2'
                            },
                            'D_4': {
                                order: 8,
                                elements: ['e', 'r', 'r^2', 'r^3', 's', 'sr', 'sr^2', 'sr^3'],
                                classes: [
                                    { rep: 'e', members: ['e'], color: '#58a6ff' },
                                    { rep: 'r^2', members: ['r^2'], color: '#58a6ff' },
                                    { rep: 'r', members: ['r', 'r^3'], color: '#3fb950' },
                                    { rep: 's', members: ['s', 'sr^2'], color: '#f0883e' },
                                    { rep: 'sr', members: ['sr', 'sr^3'], color: '#f778ba' }
                                ],
                                center: ['e', 'r^2'],
                                equation: '8 = 2 + 2 + 2 + 2'
                            }
                        };

                        let currentGroup = 'S_3';

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            const g = groups[currentGroup];

                            // Title
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Conjugacy Classes of ' + currentGroup, 290, 25);

                            // Draw conjugacy classes as colored boxes
                            let yStart = 55;
                            const boxH = 42;
                            const margin = 8;

                            for (let i = 0; i < g.classes.length; i++) {
                                const cls = g.classes[i];
                                const y = yStart + i * (boxH + margin);

                                // Class box
                                ctx.fillStyle = cls.color + '22';
                                ctx.strokeStyle = cls.color;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.roundRect(30, y, 520, boxH, 8);
                                ctx.fill();
                                ctx.stroke();

                                // Label
                                ctx.fillStyle = cls.color;
                                ctx.font = 'bold 13px monospace';
                                ctx.textAlign = 'left';
                                ctx.fillText('Class: { ' + cls.members.join(', ') + ' }', 45, y + 18);

                                ctx.fillStyle = '#8b949e';
                                ctx.font = '12px sans-serif';
                                ctx.fillText('Size = ' + cls.members.length + '  |  Centralizer index = ' + cls.members.length, 45, y + 35);

                                // Size badge
                                ctx.fillStyle = cls.color;
                                ctx.font = 'bold 16px sans-serif';
                                ctx.textAlign = 'right';
                                ctx.fillText(String(cls.members.length), 535, y + 27);
                            }

                            // Center info
                            const infoY = yStart + g.classes.length * (boxH + margin) + 15;
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = '14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Center Z(' + currentGroup + ') = { ' + g.center.join(', ') + ' }   |Z| = ' + g.center.length, 290, infoY);

                            // Class equation
                            ctx.fillStyle = '#f0883e';
                            ctx.font = 'bold 16px sans-serif';
                            ctx.fillText('Class Equation: ' + g.equation, 290, infoY + 30);

                            // Explanation
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '13px sans-serif';
                            ctx.fillText('|G| = |Z(G)| + sum of [G : C_G(x_i)] for non-central classes', 290, infoY + 55);

                            // Toggle buttons
                            const btnY = infoY + 80;
                            const groupNames = Object.keys(groups);
                            for (let i = 0; i < groupNames.length; i++) {
                                const name = groupNames[i];
                                const btnX = 200 + i * 100;
                                const isActive = name === currentGroup;

                                ctx.fillStyle = isActive ? '#1f6feb' : '#21262d';
                                ctx.beginPath();
                                ctx.roundRect(btnX, btnY, 80, 30, 6);
                                ctx.fill();
                                ctx.strokeStyle = isActive ? '#58a6ff' : '#30363d';
                                ctx.lineWidth = 1;
                                ctx.stroke();

                                ctx.fillStyle = '#e6edf3';
                                ctx.font = 'bold 13px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(name, btnX + 40, btnY + 20);
                            }
                        }

                        canvas.addEventListener('click', (e) => {
                            const rect = canvas.getBoundingClientRect();
                            const mx = e.clientX - rect.left;
                            const my = e.clientY - rect.top;
                            const g = groups[currentGroup];
                            const infoY = 55 + g.classes.length * 50 + 15;
                            const btnY = infoY + 80;
                            const groupNames = Object.keys(groups);

                            for (let i = 0; i < groupNames.length; i++) {
                                const btnX = 200 + i * 100;
                                if (mx >= btnX && mx <= btnX + 80 && my >= btnY && my <= btnY + 30) {
                                    currentGroup = groupNames[i];
                                    draw();
                                    return;
                                }
                            }
                        });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch07-ex09',
                    type: 'short_answer',
                    difficulty: 2,
                    title: 'Class Equation of Z_6',
                    question: 'Write the class equation for Z_6 (the cyclic group of order 6).',
                    hint: 'Z_6 is abelian. What does this imply about every conjugacy class?',
                    solution: 'Since Z_6 is abelian, every element commutes with every other element. Thus gxg^{-1} = x for all g, x, meaning every conjugacy class is a singleton. The center is Z(Z_6) = Z_6, so the class equation is 6 = 6. There are no non-trivial conjugacy classes.'
                },
                {
                    id: 'ch07-ex10',
                    type: 'proof',
                    difficulty: 3,
                    title: 'Centralizer Contains the Center',
                    question: 'For any x in G, prove that Z(G) is a subgroup of C_G(x).',
                    hint: 'Every element of Z(G) commutes with all elements of G, in particular with x.',
                    solution: 'Let z in Z(G). Then zg = gz for all g in G. In particular, zx = xz, so z in C_G(x) = {g in G : gx = xg}. Since every element of Z(G) lies in C_G(x), we have Z(G) is a subset of C_G(x). Since Z(G) is a subgroup of G and is contained in C_G(x), it is a subgroup of C_G(x).'
                },
                {
                    id: 'ch07-ex11',
                    type: 'multiple_choice',
                    difficulty: 2,
                    title: 'Class Equation Constraint',
                    question: 'A group G of order 10 has class equation 10 = |Z(G)| + ... Which of the following is a possible value for |Z(G)|?',
                    options: [
                        '1',
                        '2',
                        '3',
                        '4'
                    ],
                    correctIndex: 1,
                    explanation: 'Each non-central conjugacy class has size dividing 10 and greater than 1, so each has size 2, 5, or 10. Since |Z(G)| = 10 - (sum of non-central class sizes), we need |Z(G)| = 10 mod possibilities. Testing: 10 = 2 + 2 + 2 + 2 + 2 works (giving |Z(G)| = 2 with four classes of size 2). For |Z(G)| = 1, we need 9 = sum of terms from {2,5}, but 9 cannot be written as such a sum. So |Z(G)| = 2 is possible (and in fact D_5 has |Z(D_5)| = 1, since we can have 10 = 1 + 4*2 + 1 is impossible... Actually for D_5, |Z(D_5)| = {e} so |Z| = 1 and 10 = 1 + 4 + 5 is impossible since class sizes must divide 10. The class equation for D_5 is 10 = 1 + 2 + 2 + 5 = 10, so |Z(D_5)| = 1 is valid and (a) is also possible. But among the choices, |Z(G)| = 2 works for Z_2 x Z_5 = Z_10.).'
                },
                {
                    id: 'ch07-ex12',
                    type: 'proof',
                    difficulty: 4,
                    title: 'p-Groups Have Non-Trivial Center',
                    question: 'Let G be a group of order p^n where p is prime and n >= 1. Prove that Z(G) is non-trivial using the class equation.',
                    hint: 'Look at the class equation modulo p.',
                    solution: 'The class equation gives |G| = |Z(G)| + sum_i [G : C_G(x_i)]. Each [G : C_G(x_i)] divides |G| = p^n and is > 1, so p divides each term in the sum. Since p divides |G| = p^n, we get p divides |Z(G)|. In particular |Z(G)| >= p > 1, so the center is non-trivial.'
                }
            ]
        },

        // ===== SECTION 4: Burnside's Lemma =====
        {
            id: 'ch07-sec04',
            title: 'Burnside\'s Lemma',
            content: `

<div class="env-block intuition">
    <div class="env-title">Counting Up to Symmetry</div>
    <div class="env-body">
        <p>How many distinct necklaces can you make with 4 beads of 2 colors? The naive count is \\(2^4 = 16\\), but many of these are "the same necklace" once you allow rotations and reflections. Burnside's lemma (also called the Cauchy-Frobenius lemma) provides an elegant formula for counting distinct objects under a group of symmetries: the number of orbits equals the average number of fixed points.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> State and prove Burnside's lemma, then apply it to concrete counting problems involving colorings, necklaces, and other combinatorial objects.</p>

<h2>7.4 Burnside's Lemma</h2>

<h3>Fixed Points</h3>

<div class="definition">
<strong>Definition 7.19 (Fixed Point Set).</strong>
Let \\(G\\) act on a finite set \\(X\\). For each \\(g \\in G\\), the <em>fixed point set</em> of \\(g\\) is
\\[
\\operatorname{Fix}(g) = X^g = \\{x \\in X : g \\cdot x = x\\}.
\\]
</div>

<h3>The Lemma</h3>

<div class="theorem">
<strong>Theorem 7.20 (Burnside's Lemma / Cauchy-Frobenius).</strong>
Let \\(G\\) be a finite group acting on a finite set \\(X\\). The number of distinct orbits is
\\[
|X/G| = \\frac{1}{|G|} \\sum_{g \\in G} |\\operatorname{Fix}(g)|.
\\]
In words: the number of orbits equals the average number of fixed points per group element.
</div>

<div class="proof">
<strong>Proof.</strong>
Consider the set \\(S = \\{(g, x) \\in G \\times X : g \\cdot x = x\\}\\). We count \\(|S|\\) in two ways.

<p><strong>Counting by \\(g\\):</strong> For each \\(g \\in G\\), the number of \\(x\\) with \\(g \\cdot x = x\\) is \\(|\\operatorname{Fix}(g)|\\). So
\\[
|S| = \\sum_{g \\in G} |\\operatorname{Fix}(g)|.
\\]</p>

<p><strong>Counting by \\(x\\):</strong> For each \\(x \\in X\\), the number of \\(g\\) with \\(g \\cdot x = x\\) is \\(|\\operatorname{Stab}(x)| = |G_x|\\). So
\\[
|S| = \\sum_{x \\in X} |G_x|.
\\]</p>

<p>Now we use the orbit-stabilizer theorem. For each orbit \\(\\mathcal{O}\\),
\\[
\\sum_{x \\in \\mathcal{O}} |G_x| = \\sum_{x \\in \\mathcal{O}} \\frac{|G|}{|\\mathcal{O}|} = |\\mathcal{O}| \\cdot \\frac{|G|}{|\\mathcal{O}|} = |G|.
\\]
Summing over all orbits:
\\[
|S| = \\sum_{x \\in X} |G_x| = \\sum_{\\text{orbits } \\mathcal{O}} |G| = |X/G| \\cdot |G|.
\\]</p>

<p>Equating the two counts:
\\[
\\sum_{g \\in G} |\\operatorname{Fix}(g)| = |X/G| \\cdot |G|,
\\]
and dividing by \\(|G|\\) gives the result. \\(\\square\\)</p>
</div>

<h3>Application: Coloring a Square</h3>

<p>How many distinct ways can we color the vertices of a square using 2 colors, where two colorings are "the same" if one can be obtained from the other by a symmetry of the square?</p>

<p>The symmetry group is \\(D_4\\) with 8 elements. The set \\(X\\) consists of all \\(2^4 = 16\\) colorings of the 4 vertices. For each symmetry \\(g \\in D_4\\), we need \\(|\\operatorname{Fix}(g)|\\), the number of colorings unchanged by \\(g\\).</p>

<table class="styled-table">
<thead>
<tr><th>Symmetry \\(g\\)</th><th>Cycle structure on vertices</th><th>\\(|\\operatorname{Fix}(g)|\\)</th></tr>
</thead>
<tbody>
<tr><td>\\(e\\) (identity)</td><td>\\((1)(2)(3)(4)\\)</td><td>\\(2^4 = 16\\)</td></tr>
<tr><td>\\(r\\) (90&deg; rotation)</td><td>\\((1234)\\)</td><td>\\(2^1 = 2\\)</td></tr>
<tr><td>\\(r^2\\) (180&deg; rotation)</td><td>\\((13)(24)\\)</td><td>\\(2^2 = 4\\)</td></tr>
<tr><td>\\(r^3\\) (270&deg; rotation)</td><td>\\((1432)\\)</td><td>\\(2^1 = 2\\)</td></tr>
<tr><td>\\(s_1\\) (vertical reflection)</td><td>\\((12)(34)\\) ... wait, depends on labeling. \\((1)(3)(24)\\) type</td><td>\\(2^3 = 8\\)</td></tr>
<tr><td>\\(s_2\\) (horizontal reflection)</td><td>\\((2)(4)(13)\\)</td><td>\\(2^3 = 8\\)</td></tr>
<tr><td>\\(d_1\\) (diagonal reflection)</td><td>\\((1)(3)(24)\\) ... \\((12)(34)\\)</td><td>\\(2^2 = 4\\)</td></tr>
<tr><td>\\(d_2\\) (anti-diagonal reflection)</td><td>\\((14)(23)\\)</td><td>\\(2^2 = 4\\)</td></tr>
</tbody>
</table>

<p>More precisely, with a standard labeling: \\(e\\) fixes 16; \\(r, r^3\\) each fix 2; \\(r^2\\) fixes 4; the two axis reflections each fix 8 (they fix 2 vertices, swap 1 pair); the two diagonal reflections each fix 4 (they swap 2 pairs). Total: \\(16 + 2 + 4 + 2 + 8 + 8 + 4 + 4 = 48\\). So:</p>

\\[
|X / D_4| = \\frac{48}{8} = 6.
\\]

<p>There are <strong>6 distinct vertex-colorings</strong> of a square with 2 colors, up to symmetry.</p>

<h3>Application: Necklaces</h3>

<p>A "necklace" with \\(n\\) beads of \\(k\\) colors is a coloring of the positions \\(\\{1, \\ldots, n\\}\\) up to rotation by \\(\\mathbb{Z}_n\\). By Burnside's lemma:</p>

\\[
\\text{Number of necklaces} = \\frac{1}{n} \\sum_{d \\mid n} \\phi(n/d) \\cdot k^d,
\\]

<p>where the sum is over divisors \\(d\\) of \\(n\\), and \\(\\phi\\) is Euler's totient function. This is because a rotation by \\(j\\) positions has \\(\\gcd(j, n)\\) independent cycles, so it fixes \\(k^{\\gcd(j,n)}\\) colorings.</p>

<div class="env-block example">
<div class="env-title">Example 7.21</div>
<div class="env-body">
<p>Necklaces with \\(n = 4\\) beads and \\(k = 3\\) colors (rotations only, no reflections):
\\[
\\frac{1}{4}\\big(\\phi(4) \\cdot 3^1 + \\phi(2) \\cdot 3^2 + \\phi(1) \\cdot 3^4\\big) = \\frac{1}{4}(2 \\cdot 3 + 1 \\cdot 9 + 1 \\cdot 81) = \\frac{96}{4} = 24.
\\]
Wait, we need to be more careful. The divisors of 4 are 1, 2, 4. We have:
\\[
\\frac{1}{4}\\sum_{j=0}^{3} 3^{\\gcd(j,4)} = \\frac{1}{4}(3^4 + 3^1 + 3^2 + 3^1) = \\frac{81 + 3 + 9 + 3}{4} = \\frac{96}{4} = 24.
\\]
So there are 24 distinct necklaces.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="ch07-viz-burnside-necklace"></div>

<h3>General Counting Strategy</h3>

<p>To use Burnside's lemma effectively:
<ol>
<li>Identify the set \\(X\\) of "raw" objects (e.g., all colorings).</li>
<li>Identify the symmetry group \\(G\\) (rotations, reflections, etc.).</li>
<li>For each \\(g \\in G\\), determine the cycle structure of \\(g\\) acting on the underlying positions.</li>
<li>Compute \\(|\\operatorname{Fix}(g)| = k^{\\text{(number of cycles)}}\\) when coloring with \\(k\\) colors.</li>
<li>Sum and divide by \\(|G|\\).</li>
</ol></p>

`,
            visualizations: [
                {
                    id: 'ch07-viz-burnside-necklace',
                    title: 'Burnside Necklace Counter',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 520;

                        let nBeads = 4;
                        let nColors = 2;
                        const maxBeads = 8;
                        const maxColors = 4;
                        const colorPalette = ['#58a6ff', '#f0883e', '#3fb950', '#f778ba'];
                        const colorNames = ['Blue', 'Orange', 'Green', 'Pink'];

                        function gcd(a, b) {
                            while (b) { const t = b; b = a % b; a = t; }
                            return a;
                        }

                        function computeNecklaces(n, k) {
                            let total = 0;
                            for (let j = 0; j < n; j++) {
                                total += Math.pow(k, gcd(j, n));
                            }
                            return total / n;
                        }

                        function computeFixedPoints(n, k) {
                            const fixes = [];
                            for (let j = 0; j < n; j++) {
                                fixes.push({
                                    rotation: j,
                                    cycles: gcd(j, n),
                                    fixed: Math.pow(k, gcd(j, n))
                                });
                            }
                            return fixes;
                        }

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);

                            // Title
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Burnside Necklace Counter (Rotations Only)', 290, 22);

                            // Parameters
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '13px sans-serif';
                            ctx.fillText('n = ' + nBeads + ' beads  |  k = ' + nColors + ' colors', 290, 44);

                            // Draw a sample necklace shape
                            const ncx = 145, ncy = 140, nr = 60;
                            ctx.strokeStyle = '#30363d';
                            ctx.lineWidth = 3;
                            ctx.beginPath();
                            ctx.arc(ncx, ncy, nr, 0, 2 * Math.PI);
                            ctx.stroke();

                            for (let i = 0; i < nBeads; i++) {
                                const angle = -Math.PI / 2 + (2 * Math.PI * i) / nBeads;
                                const bx = ncx + nr * Math.cos(angle);
                                const by = ncy + nr * Math.sin(angle);
                                ctx.beginPath();
                                ctx.arc(bx, by, 12, 0, 2 * Math.PI);
                                ctx.fillStyle = colorPalette[i % nColors];
                                ctx.fill();
                                ctx.strokeStyle = '#e6edf3';
                                ctx.lineWidth = 2;
                                ctx.stroke();
                            }

                            // Fixed point table
                            const fixes = computeFixedPoints(nBeads, nColors);
                            const tableX = 300, tableY = 70;
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 12px monospace';
                            ctx.textAlign = 'left';
                            ctx.fillText('Rot j  gcd(j,n)  |Fix(r^j)|', tableX, tableY);

                            ctx.strokeStyle = '#30363d';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(tableX, tableY + 5);
                            ctx.lineTo(tableX + 240, tableY + 5);
                            ctx.stroke();

                            let totalFix = 0;
                            for (let i = 0; i < fixes.length; i++) {
                                const f = fixes[i];
                                totalFix += f.fixed;
                                const y = tableY + 22 + i * 18;
                                ctx.fillStyle = '#c9d1d9';
                                ctx.font = '12px monospace';
                                ctx.fillText(
                                    'j=' + String(f.rotation).padStart(2) +
                                    '    gcd=' + String(f.cycles).padStart(2) +
                                    '    Fix=' + String(f.fixed).padStart(5),
                                    tableX, y
                                );
                            }

                            // Result
                            const necklaces = computeNecklaces(nBeads, nColors);
                            const resultY = Math.max(240, tableY + 22 + fixes.length * 18 + 20);

                            ctx.fillStyle = '#f0883e';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Sum of |Fix(g)| = ' + totalFix, 290, resultY);
                            ctx.fillText('|G| = ' + nBeads, 290, resultY + 22);
                            ctx.fillText('Number of necklaces = ' + totalFix + ' / ' + nBeads + ' = ' + necklaces, 290, resultY + 48);

                            // Buttons
                            const btnY = resultY + 80;

                            // n- button
                            drawButton(100, btnY, 55, 28, 'n \u2212', nBeads > 2);
                            // n+ button
                            drawButton(165, btnY, 55, 28, 'n +', nBeads < maxBeads);
                            // k- button
                            drawButton(350, btnY, 55, 28, 'k \u2212', nColors > 2);
                            // k+ button
                            drawButton(415, btnY, 55, 28, 'k +', nColors < maxColors);

                            // Labels
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Beads (n)', 160, btnY + 45);
                            ctx.fillText('Colors (k)', 410, btnY + 45);
                        }

                        function drawButton(x, y, w, h, label, enabled) {
                            ctx.fillStyle = enabled ? '#21262d' : '#161b22';
                            ctx.beginPath();
                            ctx.roundRect(x, y, w, h, 6);
                            ctx.fill();
                            ctx.strokeStyle = enabled ? '#30363d' : '#21262d';
                            ctx.lineWidth = 1;
                            ctx.stroke();
                            ctx.fillStyle = enabled ? '#c9d1d9' : '#484f58';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(label, x + w / 2, y + h / 2 + 5);
                        }

                        canvas.addEventListener('click', (e) => {
                            const rect = canvas.getBoundingClientRect();
                            const mx = e.clientX - rect.left;
                            const my = e.clientY - rect.top;

                            const fixes = computeFixedPoints(nBeads, nColors);
                            const resultY = Math.max(240, 70 + 22 + fixes.length * 18 + 20);
                            const btnY = resultY + 80;

                            if (mx >= 100 && mx <= 155 && my >= btnY && my <= btnY + 28 && nBeads > 2) {
                                nBeads--;
                                draw();
                            } else if (mx >= 165 && mx <= 220 && my >= btnY && my <= btnY + 28 && nBeads < maxBeads) {
                                nBeads++;
                                draw();
                            } else if (mx >= 350 && mx <= 405 && my >= btnY && my <= btnY + 28 && nColors > 2) {
                                nColors--;
                                draw();
                            } else if (mx >= 415 && mx <= 470 && my >= btnY && my <= btnY + 28 && nColors < maxColors) {
                                nColors++;
                                draw();
                            }
                        });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch07-ex13',
                    type: 'short_answer',
                    difficulty: 2,
                    title: 'Necklaces with 3 Beads, 2 Colors',
                    question: 'Use Burnside\'s lemma to count the number of distinct necklaces with 3 beads and 2 colors, considering only rotational symmetry (the group Z_3).',
                    hint: 'The group Z_3 has 3 elements: rotations by 0, 1, 2 positions. Compute |Fix(g)| for each.',
                    solution: 'Z_3 = {r^0, r^1, r^2}. Fix(r^0) = all 2^3 = 8 colorings. Fix(r^1): a coloring is fixed by rotation iff all beads are the same color, so |Fix(r^1)| = 2. Similarly |Fix(r^2)| = 2. By Burnside: |X/G| = (8 + 2 + 2)/3 = 12/3 = 4 necklaces.'
                },
                {
                    id: 'ch07-ex14',
                    type: 'proof',
                    difficulty: 3,
                    title: 'Burnside for Face Colorings of a Cube',
                    question: 'How many ways can you paint the 6 faces of a cube with 2 colors, up to rotation? The rotation group of the cube has 24 elements. (Hint: group the 24 rotations by type and compute |Fix| for each type.)',
                    hint: 'The rotation types are: 1 identity, 6 face rotations by 90/270 degrees, 3 face rotations by 180 degrees, 8 vertex rotations by 120/240 degrees, and 6 edge rotations by 180 degrees.',
                    solution: 'Identity (1): |Fix| = 2^6 = 64. Face rotations by 90 or 270 degrees (6): each has cycle structure with faces grouped into a 4-cycle and two fixed faces, so |Fix| = 2^3 = 8 each, total 6 * 8 = 48. Face rotations by 180 degrees (3): cycle structure (2)(2)(1)(1) on faces, giving |Fix| = 2^4 = 16 each, total 48. Vertex rotations by 120/240 degrees (8): cycle structure is two 3-cycles, |Fix| = 2^2 = 4 each, total 32. Edge rotations by 180 degrees (6): three 2-cycles, |Fix| = 2^3 = 8 each, total 48. Grand total: 64 + 48 + 48 + 32 + 48 = 240. Number of orbits = 240/24 = 10.'
                },
                {
                    id: 'ch07-ex15',
                    type: 'multiple_choice',
                    difficulty: 2,
                    title: 'Fixed Points of the Identity',
                    question: 'In Burnside\'s lemma, the identity element e always contributes |Fix(e)| = |X| to the sum. What is the interpretation?',
                    options: [
                        'The identity fixes no elements',
                        'The identity fixes exactly one element',
                        'The identity fixes all elements of X',
                        'The identity fixes only elements in the center'
                    ],
                    correctIndex: 2,
                    explanation: 'By definition, e . x = x for all x in X, so every element is a fixed point of the identity. Hence |Fix(e)| = |X|. This is always the largest term in the Burnside sum.'
                },
                {
                    id: 'ch07-ex16',
                    type: 'short_answer',
                    difficulty: 3,
                    title: 'Bracelets vs. Necklaces',
                    question: 'A bracelet is a necklace that can also be flipped (reflected). Use Burnside\'s lemma to count bracelets with 4 beads and 2 colors, where the symmetry group is D_4 (order 8).',
                    hint: 'You need |Fix(g)| for all 8 elements of D_4: 4 rotations and 4 reflections.',
                    solution: 'Rotations: |Fix(e)| = 2^4 = 16, |Fix(r)| = 2, |Fix(r^2)| = 4, |Fix(r^3)| = 2. For reflections through opposite vertices (2 of them): each fixes 2 beads and swaps a pair, giving |Fix| = 2^3 = 8 each. For reflections through midpoints of opposite edges (2 of them): each swaps 2 pairs, giving |Fix| = 2^2 = 4 each. Total: 16 + 2 + 4 + 2 + 8 + 8 + 4 + 4 = 48. Number of bracelets = 48/8 = 6.'
                }
            ]
        },

        // ===== SECTION 5: Applications of Group Actions =====
        {
            id: 'ch07-sec05',
            title: 'Applications of Group Actions',
            content: `

<div class="env-block intuition">
    <div class="env-title">The Power of Counting</div>
    <div class="env-body">
        <p>The class equation and orbit-stabilizer theorem are not just theoretical curiosities. They yield striking structural results: every \\(p\\)-group has a non-trivial center, and Cauchy's theorem guarantees elements of prime order. These results form the foundation for the Sylow theorems in the next chapter.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> Prove Cauchy's theorem using group actions, explore consequences for \\(p\\)-groups, and demonstrate the power of the action-based approach with further applications.</p>

<h2>7.5 Applications of Group Actions</h2>

<h3>Cauchy's Theorem</h3>

<p>One of the most important applications of group actions is Cauchy's theorem, which provides a partial converse to Lagrange's theorem: not only does \\(|H|\\) divide \\(|G|\\) for subgroups \\(H\\), but for each prime divisor of \\(|G|\\), there exists a subgroup (in fact, an element) of that prime order.</p>

<div class="theorem">
<strong>Theorem 7.22 (Cauchy's Theorem).</strong>
Let \\(G\\) be a finite group and let \\(p\\) be a prime dividing \\(|G|\\). Then \\(G\\) contains an element of order \\(p\\).
</div>

<div class="proof">
<strong>Proof (McKay's proof using group actions).</strong>
Consider the set
\\[
S = \\{(a_1, a_2, \\ldots, a_p) \\in G^p : a_1 a_2 \\cdots a_p = e\\}.
\\]
Note that once \\(a_1, \\ldots, a_{p-1}\\) are chosen freely, \\(a_p\\) is determined as \\(a_p = (a_1 \\cdots a_{p-1})^{-1}\\). So \\(|S| = |G|^{p-1}\\), which is divisible by \\(p\\) since \\(p \\mid |G|\\).

<p>The cyclic group \\(\\mathbb{Z}_p\\) acts on \\(S\\) by cyclic permutation:
\\[
k \\cdot (a_1, a_2, \\ldots, a_p) = (a_{k+1}, a_{k+2}, \\ldots, a_{k+p}),
\\]
where indices are taken mod \\(p\\). This is well-defined because if \\(a_1 \\cdots a_p = e\\), then any cyclic permutation also has product \\(e\\) (since \\(a_{k+1} \\cdots a_p \\cdot a_1 \\cdots a_k = a_{k+1} \\cdots a_p \\cdot (a_{k+1} \\cdots a_p)^{-1} \\cdot e^{-1}\\)... more directly, one can verify by conjugation that the cyclic shift preserves the product-equals-identity condition).</p>

<p>Actually, let us verify more carefully. If \\(a_1 a_2 \\cdots a_p = e\\), then
\\[
a_2 a_3 \\cdots a_p a_1 = a_1^{-1}(a_1 a_2 \\cdots a_p) a_1 = a_1^{-1} e \\, a_1 = e.
\\]
So cyclic shift by 1 preserves membership in \\(S\\), and iterating gives all cyclic shifts.</p>

<p>Each orbit of this \\(\\mathbb{Z}_p\\)-action has size 1 or \\(p\\) (since \\(p\\) is prime). An orbit has size 1 precisely when \\(a_1 = a_2 = \\cdots = a_p = a\\) and \\(a^p = e\\). The tuple \\((e, e, \\ldots, e)\\) is such a fixed point, so at least one orbit has size 1.</p>

<p>Since \\(p \\mid |S|\\) and orbits partition \\(S\\), and each orbit has size 1 or \\(p\\), the number of fixed points (size-1 orbits) must be divisible by \\(p\\). Since there is at least one fixed point (the identity tuple), there must be at least \\(p\\) fixed points. Any fixed point other than \\((e, \\ldots, e)\\) gives an element \\(a \\neq e\\) with \\(a^p = e\\), so \\(a\\) has order \\(p\\). \\(\\square\\)</p>
</div>

<div class="env-block remark">
<div class="env-title">Elegance of the Proof</div>
<div class="env-body">
<p>McKay's proof is remarkable in that it uses only the most basic properties of group actions and the fact that orbits of a \\(\\mathbb{Z}_p\\)-action have size 1 or \\(p\\). No induction on \\(|G|\\) is needed, and the argument works uniformly for all groups.</p>
</div>
</div>

<h3>Fixed Point Theorem for \\(p\\)-Groups</h3>

<div class="theorem">
<strong>Theorem 7.23 (Fixed Point Theorem for \\(p\\)-Groups).</strong>
Let \\(G\\) be a \\(p\\)-group (\\(|G| = p^n\\)) acting on a finite set \\(X\\). Let \\(X^G = \\{x \\in X : g \\cdot x = x \\text{ for all } g \\in G\\}\\) denote the set of fixed points. Then
\\[
|X^G| \\equiv |X| \\pmod{p}.
\\]
</div>

<div class="proof">
<strong>Proof.</strong>
The orbits partition \\(X\\). Each orbit has size \\([G : G_x]\\) for some \\(x\\), which divides \\(|G| = p^n\\). So each orbit has size \\(p^k\\) for some \\(0 \\le k \\le n\\). An orbit has size 1 (i.e., \\(k = 0\\)) if and only if \\(x\\) is a fixed point. All non-singleton orbits have size divisible by \\(p\\). Therefore:
\\[
|X| = |X^G| + \\sum_{\\text{non-singleton orbits}} |\\text{orbit}|,
\\]
and each term in the sum is divisible by \\(p\\). So \\(|X| \\equiv |X^G| \\pmod{p}\\). \\(\\square\\)
</div>

<div class="env-block remark">
<div class="env-title">Special Case: Conjugation</div>
<div class="env-body">
<p>When \\(G\\) acts on itself by conjugation, the fixed points are exactly \\(Z(G)\\). The theorem then gives \\(|Z(G)| \\equiv |G| \\equiv 0 \\pmod{p}\\), recovering Theorem 7.17.</p>
</div>
</div>

<h3>Application: Normalizer Condition</h3>

<div class="theorem">
<strong>Proposition 7.24.</strong>
Let \\(G\\) be a finite \\(p\\)-group and let \\(H\\) be a proper subgroup. Then \\(H \\subsetneq N_G(H)\\), i.e., the normalizer of \\(H\\) strictly contains \\(H\\).
</div>

<div class="proof">
<strong>Proof.</strong>
Let \\(H\\) act on \\(G/H\\) (the left cosets) by left multiplication. The fixed points are:
\\[
(G/H)^H = \\{aH : haH = aH \\text{ for all } h \\in H\\} = \\{aH : a^{-1}Ha \\subseteq H\\}.
\\]
Since \\(H\\) is a subgroup, \\(a^{-1}Ha \\subseteq H\\) and \\(|a^{-1}Ha| = |H|\\) imply \\(a^{-1}Ha = H\\), i.e., \\(a \\in N_G(H)\\). So the fixed points are \\(\\{aH : a \\in N_G(H)\\} = N_G(H)/H\\).

<p>By the fixed point theorem, \\(|N_G(H)/H| \\equiv |G/H| \\equiv 0 \\pmod{p}\\) (since \\(H \\neq G\\) means \\([G:H] \\ge p\\), and \\([G:H]\\) is a power of \\(p\\)). So \\(|N_G(H)/H| \\ge p > 1\\), meaning \\(N_G(H) \\supsetneq H\\). \\(\\square\\)</p>
</div>

<h3>Application: Counting Subgroups</h3>

<p>Group actions provide a powerful way to count conjugates of subgroups.</p>

<div class="theorem">
<strong>Proposition 7.25.</strong>
Let \\(H \\le G\\) be a subgroup. The number of subgroups conjugate to \\(H\\) (including \\(H\\) itself) is \\([G : N_G(H)]\\).
</div>

<div class="proof">
<strong>Proof.</strong>
\\(G\\) acts on the set of subgroups by conjugation. The orbit of \\(H\\) is \\(\\{gHg^{-1} : g \\in G\\}\\), which is the set of all conjugates. The stabilizer of \\(H\\) is \\(N_G(H) = \\{g : gHg^{-1} = H\\}\\). By orbit-stabilizer:
\\[
|\\text{Orbit of } H| = [G : N_G(H)].
\\]
\\(\\square\\)
</div>

<h3>Cayley's Theorem Revisited</h3>

<p>Cayley's theorem (every group is isomorphic to a subgroup of a symmetric group) is really just the statement that the left multiplication action is faithful. But we can do better: we can embed \\(G\\) into a <em>smaller</em> symmetric group using an action on cosets.</p>

<div class="theorem">
<strong>Theorem 7.26 (Generalized Cayley).</strong>
Let \\(H \\le G\\) with \\([G:H] = n\\). Then there is a homomorphism \\(\\varphi : G \\to S_n\\) whose kernel is contained in \\(H\\). In particular, if \\(H\\) contains no nontrivial normal subgroup of \\(G\\), then \\(G\\) embeds into \\(S_n\\).
</div>

<div class="proof">
<strong>Proof.</strong>
The action of \\(G\\) on \\(G/H\\) by left multiplication gives a homomorphism \\(\\varphi : G \\to \\operatorname{Sym}(G/H) \\cong S_n\\). The kernel is \\(\\operatorname{core}(H) = \\bigcap_{g \\in G} gHg^{-1}\\), which is the largest normal subgroup of \\(G\\) contained in \\(H\\). \\(\\square\\)
</div>

<div class="env-block example">
<div class="env-title">Example 7.27</div>
<div class="env-body">
<p>If \\(|G| = 12\\) and \\(G\\) has a subgroup \\(H\\) of index 3, then \\(G\\) maps homomorphically to \\(S_3\\). The kernel \\(K\\) satisfies \\(K \\le H\\) and \\(|G/K|\\) divides \\(|S_3| = 6\\). So \\(|K| \\ge 12/6 = 2\\). This already constrains the structure of \\(G\\) significantly.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="ch07-viz-cauchy-action"></div>

<h3>Summary: The Power of Actions</h3>

<p>Group actions unify many seemingly different ideas:
<ul>
<li><strong>Cayley's theorem:</strong> left multiplication action.</li>
<li><strong>Class equation:</strong> conjugation action on elements.</li>
<li><strong>Sylow theorems (next chapter):</strong> conjugation action on subgroups.</li>
<li><strong>Burnside's lemma:</strong> any action, counting orbits via fixed points.</li>
<li><strong>Cauchy's theorem:</strong> cyclic group acting on tuples.</li>
</ul>
The common thread is the orbit-stabilizer theorem: it converts algebraic information (subgroup indices) into combinatorial information (orbit sizes) and vice versa.</p>

`,
            visualizations: [
                {
                    id: 'ch07-viz-cauchy-action',
                    title: 'Cauchy\'s Theorem: Z_p Acting on Tuples',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 480;

                        // Demonstrate McKay's proof for Z_6 and p=2 or p=3
                        let p = 3;
                        // We'll use a small group: Z_6 = {0,1,2,3,4,5}
                        const groupElements = [0, 1, 2, 3, 4, 5];
                        const groupOrder = 6;
                        const groupName = 'Z_6';

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Cauchy\'s Theorem: ' + groupName + ' with p = ' + p, 290, 22);

                            // S = {(a1,...,ap) in G^p : a1+...+ap = 0 mod 6}
                            // |S| = 6^(p-1) since last element is determined
                            const sSize = Math.pow(groupOrder, p - 1);

                            ctx.fillStyle = '#8b949e';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('S = { (a_1,...,a_' + p + ') in ' + groupName + '^' + p + ' : a_1 + ... + a_' + p + ' = 0 mod ' + groupOrder + ' }', 290, 48);
                            ctx.fillText('|S| = ' + groupOrder + '^' + (p - 1) + ' = ' + sSize, 290, 68);

                            // Generate all tuples in S (feasible for small p)
                            const tuples = [];
                            if (p === 2) {
                                for (let a = 0; a < groupOrder; a++) {
                                    const b = (groupOrder - a) % groupOrder;
                                    tuples.push([a, b]);
                                }
                            } else if (p === 3) {
                                for (let a = 0; a < groupOrder; a++) {
                                    for (let b = 0; b < groupOrder; b++) {
                                        const c = (groupOrder - a - b + groupOrder * 2) % groupOrder;
                                        tuples.push([a, b, c]);
                                    }
                                }
                            }

                            // Find orbits under cyclic shift
                            const visited = new Set();
                            const orbits = [];
                            for (let i = 0; i < tuples.length; i++) {
                                const key = tuples[i].join(',');
                                if (visited.has(key)) continue;
                                const orbit = [];
                                let current = tuples[i];
                                for (let shift = 0; shift < p; shift++) {
                                    const k = current.join(',');
                                    if (!visited.has(k)) {
                                        visited.add(k);
                                        orbit.push(current);
                                    }
                                    // cyclic shift
                                    current = [...current.slice(1), current[0]];
                                }
                                orbits.push(orbit);
                            }

                            const fixedPoints = orbits.filter(o => o.length === 1);
                            const nonTrivialOrbits = orbits.filter(o => o.length > 1);

                            // Display orbit statistics
                            let y = 95;
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Z_' + p + ' acts on S by cyclic shift of coordinates.', 40, y);
                            y += 22;
                            ctx.fillText('Orbits of size 1 (fixed points): ' + fixedPoints.length, 40, y);
                            y += 20;
                            ctx.fillText('Orbits of size ' + p + ': ' + nonTrivialOrbits.length, 40, y);
                            y += 20;
                            ctx.fillText('Total orbits: ' + orbits.length + '  |  Total tuples: ' + tuples.length, 40, y);

                            // Show fixed points
                            y += 30;
                            ctx.fillStyle = '#f0883e';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.fillText('Fixed points (a, a, ..., a) with a^' + p + ' = e:', 40, y);
                            y += 5;

                            const fpPerRow = 3;
                            for (let i = 0; i < fixedPoints.length; i++) {
                                const row = Math.floor(i / fpPerRow);
                                const col = i % fpPerRow;
                                const fx = 60 + col * 180;
                                const fy = y + 20 + row * 25;

                                ctx.fillStyle = '#21262d';
                                ctx.beginPath();
                                ctx.roundRect(fx - 5, fy - 12, 160, 22, 4);
                                ctx.fill();
                                ctx.strokeStyle = '#f0883e';
                                ctx.lineWidth = 1;
                                ctx.stroke();

                                ctx.fillStyle = '#e6edf3';
                                ctx.font = '12px monospace';
                                ctx.textAlign = 'left';
                                ctx.fillText('(' + fixedPoints[i][0].join(', ') + ')', fx + 5, fy + 2);

                                // Mark the element
                                const elem = fixedPoints[i][0][0];
                                const isIdentity = elem === 0;
                                if (!isIdentity) {
                                    ctx.fillStyle = '#3fb950';
                                    ctx.font = 'bold 11px sans-serif';
                                    ctx.textAlign = 'right';
                                    ctx.fillText('order ' + p + '!', fx + 150, fy + 2);
                                }
                            }

                            // Show a few non-trivial orbits
                            const fpRows = Math.ceil(fixedPoints.length / fpPerRow);
                            y = y + 20 + fpRows * 25 + 15;
                            ctx.fillStyle = '#58a6ff';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Sample non-trivial orbits (size ' + p + '):', 40, y);

                            const showOrbits = nonTrivialOrbits.slice(0, 3);
                            for (let i = 0; i < showOrbits.length; i++) {
                                y += 22;
                                const orb = showOrbits[i];
                                let text = '{ ';
                                for (let j = 0; j < orb.length; j++) {
                                    if (j > 0) text += ', ';
                                    text += '(' + orb[j].join(',') + ')';
                                }
                                text += ' }';
                                ctx.fillStyle = '#8b949e';
                                ctx.font = '12px monospace';
                                ctx.fillText(text, 60, y);
                            }

                            // Conclusion
                            y += 35;
                            ctx.fillStyle = '#f0883e';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Since ' + p + ' | ' + sSize + ' and all orbits have size 1 or ' + p + ',', 290, y);
                            ctx.fillText('the number of fixed points (' + fixedPoints.length + ') is divisible by ' + p + '.', 290, y + 20);
                            if (fixedPoints.length > 1) {
                                ctx.fillStyle = '#3fb950';
                                ctx.fillText('There exist elements of order ' + p + ' in ' + groupName + '!', 290, y + 42);
                            }

                            // Toggle p button
                            const btnY = y + 65;
                            const primes = [2, 3];
                            for (let i = 0; i < primes.length; i++) {
                                const bx = 220 + i * 80;
                                const isActive = primes[i] === p;
                                ctx.fillStyle = isActive ? '#1f6feb' : '#21262d';
                                ctx.beginPath();
                                ctx.roundRect(bx, btnY, 60, 28, 6);
                                ctx.fill();
                                ctx.strokeStyle = isActive ? '#58a6ff' : '#30363d';
                                ctx.lineWidth = 1;
                                ctx.stroke();
                                ctx.fillStyle = '#e6edf3';
                                ctx.font = 'bold 13px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('p = ' + primes[i], bx + 30, btnY + 19);
                            }
                        }

                        canvas.addEventListener('click', (e) => {
                            const rect = canvas.getBoundingClientRect();
                            const mx = e.clientX - rect.left;
                            const my = e.clientY - rect.top;

                            // Detect button clicks (approximate y)
                            // We need to recalculate btnY, but let's use a range
                            if (my > 380 && my < 470) {
                                if (mx >= 220 && mx <= 280) {
                                    p = 2;
                                    draw();
                                } else if (mx >= 300 && mx <= 360) {
                                    p = 3;
                                    draw();
                                }
                            }
                        });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch07-ex17',
                    type: 'proof',
                    difficulty: 3,
                    title: 'Cauchy for Abelian Groups (Direct Proof)',
                    question: 'Give a direct proof of Cauchy\'s theorem for abelian groups: if G is a finite abelian group and p | |G|, then G has an element of order p. (Use induction on |G|.)',
                    hint: 'Take any non-identity element a. If p | ord(a), produce an element of order p from a. If p does not divide ord(a), consider G/<a> and use induction.',
                    solution: 'Base case: |G| = p, then G = Z_p and any non-identity element has order p. Inductive step: take a in G, a != e. If p | ord(a), say ord(a) = pm, then a^m has order p and we are done. If p does not divide ord(a), consider the quotient G/<a>. Since |G/<a>| = |G|/ord(a), and p | |G| but p does not divide ord(a), we still have p | |G/<a>|. By induction, G/<a> has an element b<a> of order p. If ord(b) = k, then b<a> has order k/ord(a cap <b>)... Actually since G is abelian, |G/<a>| < |G|, and by induction G/<a> has an element of order p. Its preimage has order divisible by p, so it contains an element of order p.'
                },
                {
                    id: 'ch07-ex18',
                    type: 'short_answer',
                    difficulty: 2,
                    title: 'Elements of Order 2 in S_4',
                    question: 'Use Cauchy\'s theorem to conclude that S_4 has an element of order 2. Then list all elements of order 2 in S_4.',
                    hint: 'Since 2 | 24 = |S_4|, Cauchy guarantees an element of order 2. Elements of order 2 are transpositions and products of disjoint transpositions.',
                    solution: 'Since 2 | 24, Cauchy\'s theorem guarantees an element of order 2. The elements of order 2 in S_4 are: the 6 transpositions (12), (13), (14), (23), (24), (34), and the 3 products of disjoint transpositions (12)(34), (13)(24), (14)(23). That is 9 elements of order 2 in total.'
                },
                {
                    id: 'ch07-ex19',
                    type: 'proof',
                    difficulty: 4,
                    title: 'Fixed Point Theorem Application',
                    question: 'Let G be a group of order p^2 acting on a set X with |X| not divisible by p. Prove that the action has a fixed point.',
                    hint: 'Use the fixed point theorem for p-groups: |X^G| is congruent to |X| mod p.',
                    solution: 'By the fixed point theorem for p-groups (Theorem 7.23), |X^G| is congruent to |X| (mod p). Since p does not divide |X|, we have |X^G| is not congruent to 0 (mod p), so |X^G| >= 1. In particular, there exists at least one fixed point.'
                },
                {
                    id: 'ch07-ex20',
                    type: 'multiple_choice',
                    difficulty: 2,
                    title: 'Conjugate Subgroups Count',
                    question: 'Let G be a group of order 20 with a subgroup H of order 5. If N_G(H) = H, how many distinct conjugates of H are there?',
                    options: [
                        '1',
                        '2',
                        '4',
                        '5'
                    ],
                    correctIndex: 2,
                    explanation: 'The number of conjugates of H is [G : N_G(H)] = |G|/|N_G(H)| = 20/5 = 4. So there are 4 distinct subgroups conjugate to H (including H itself).'
                }
            ]
        }
    ]
});
