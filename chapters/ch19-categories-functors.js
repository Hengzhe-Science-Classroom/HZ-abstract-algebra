window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch19',
    number: 19,
    title: 'Categories and Functors',
    subtitle: 'Categories, functors, natural transformations, universal properties',
    sections: [
        // ============================================================
        // SECTION 1: Categories
        // ============================================================
        {
            id: 'ch19-sec01',
            title: 'Categories',
            content: `
<h2>1. Categories</h2>

<h3>1.1 Motivation</h3>
<p>
Throughout this course we have studied groups, rings, modules, and their homomorphisms. In each setting, the pattern is the same: we have a collection of algebraic structures and structure-preserving maps between them. <strong>Category theory</strong> provides a unified language to describe all such situations at once, revealing common patterns across different areas of mathematics.
</p>

<h3>1.2 Definition of a Category</h3>
<div class="definition">
<strong>Definition (Category).</strong> A <em>category</em> \\(\\mathcal{C}\\) consists of:
<ol>
<li>A class \\(\\operatorname{Ob}(\\mathcal{C})\\) of <em>objects</em>.</li>
<li>For each pair of objects \\(A, B\\), a set \\(\\operatorname{Hom}_{\\mathcal{C}}(A, B)\\) of <em>morphisms</em> (or <em>arrows</em>) from \\(A\\) to \\(B\\).</li>
<li>For each triple \\(A, B, C\\), a <em>composition law</em>
\\[\\circ: \\operatorname{Hom}(B, C) \\times \\operatorname{Hom}(A, B) \\to \\operatorname{Hom}(A, C),\\quad (g, f) \\mapsto g \\circ f.\\]</li>
<li>For each object \\(A\\), an <em>identity morphism</em> \\(\\operatorname{id}_A \\in \\operatorname{Hom}(A, A)\\).</li>
</ol>
These data must satisfy:
<ul>
<li><strong>Associativity:</strong> \\(h \\circ (g \\circ f) = (h \\circ g) \\circ f\\) whenever the compositions are defined.</li>
<li><strong>Identity law:</strong> \\(f \\circ \\operatorname{id}_A = f\\) and \\(\\operatorname{id}_B \\circ f = f\\) for all \\(f: A \\to B\\).</li>
</ul>
</div>

<h3>1.3 Fundamental Examples</h3>

<div class="example">
<strong>Example 1: \\(\\mathbf{Set}\\).</strong> Objects are sets, morphisms are functions, composition is ordinary function composition. The identity morphism on a set \\(A\\) is the identity function \\(\\operatorname{id}_A(a) = a\\).
</div>

<div class="example">
<strong>Example 2: \\(\\mathbf{Grp}\\).</strong> Objects are groups, morphisms are group homomorphisms. Composition of homomorphisms is again a homomorphism, and the identity map on any group is a homomorphism.
</div>

<div class="example">
<strong>Example 3: \\(\\mathbf{Ring}\\).</strong> Objects are rings (with unity), morphisms are ring homomorphisms preserving \\(1\\). Similarly, \\(\\mathbf{CRing}\\) denotes the category of commutative rings.
</div>

<div class="example">
<strong>Example 4: \\(\\mathbf{Top}\\).</strong> Objects are topological spaces, morphisms are continuous maps.
</div>

<div class="example">
<strong>Example 5: \\(\\mathbf{Vect}_k\\).</strong> Objects are vector spaces over a field \\(k\\), morphisms are \\(k\\)-linear maps.
</div>

<div class="example">
<strong>Example 6: Small categories.</strong> Any group \\(G\\) can be viewed as a category with a single object \\(\\bullet\\) and \\(\\operatorname{Hom}(\\bullet, \\bullet) = G\\), where composition is the group operation. Similarly, a poset \\((P, \\leq)\\) defines a category: objects are elements of \\(P\\), and there is a unique morphism \\(a \\to b\\) if and only if \\(a \\leq b\\).
</div>

<h3>1.4 Isomorphisms in a Category</h3>
<div class="definition">
<strong>Definition.</strong> A morphism \\(f: A \\to B\\) in a category \\(\\mathcal{C}\\) is an <em>isomorphism</em> if there exists \\(g: B \\to A\\) such that \\(g \\circ f = \\operatorname{id}_A\\) and \\(f \\circ g = \\operatorname{id}_B\\).
</div>
<p>
In \\(\\mathbf{Set}\\), isomorphisms are bijections. In \\(\\mathbf{Grp}\\), they are group isomorphisms. In \\(\\mathbf{Top}\\), they are homeomorphisms. The notion of isomorphism is thus unified across all of algebra and beyond.
</p>

<h3>1.5 Monomorphisms and Epimorphisms</h3>
<p>
A morphism \\(f: A \\to B\\) is a <em>monomorphism</em> if \\(f \\circ g_1 = f \\circ g_2\\) implies \\(g_1 = g_2\\) for all \\(g_1, g_2: C \\to A\\). It is an <em>epimorphism</em> if \\(g_1 \\circ f = g_2 \\circ f\\) implies \\(g_1 = g_2\\) for all \\(g_1, g_2: B \\to C\\). In \\(\\mathbf{Set}\\), monomorphisms are injections and epimorphisms are surjections, but this correspondence does not hold in every category.
</p>
`,
            visualizations: [
                {
                    id: 'viz-ch19-category-examples',
                    title: 'Category Examples Gallery',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 420;
                        let selected = 0;
                        const cats = [
                            {
                                name: 'Set',
                                draw: (ctx) => {
                                    ctx.fillStyle = '#333'; ctx.font = 'bold 15px sans-serif';
                                    ctx.textAlign = 'center'; ctx.fillText('Category Set', 290, 80);
                                    const drawSet = (cx, cy, label, elems) => {
                                        ctx.strokeStyle = '#4a90d9'; ctx.lineWidth = 2;
                                        ctx.beginPath(); ctx.ellipse(cx, cy, 55, 70, 0, 0, 2 * Math.PI);
                                        ctx.stroke(); ctx.fillStyle = '#e8f0fe'; ctx.fill();
                                        ctx.fillStyle = '#2a5f8f'; ctx.font = 'bold 13px sans-serif';
                                        ctx.fillText(label, cx, cy - 80);
                                        ctx.font = '14px monospace'; ctx.fillStyle = '#333';
                                        elems.forEach((e, i) => ctx.fillText(e, cx, cy - 30 + i * 25));
                                    };
                                    drawSet(170, 210, 'A = {1,2,3}', ['1', '2', '3']);
                                    drawSet(410, 210, 'B = {a,b}', ['a', 'b']);
                                    ctx.strokeStyle = '#e74c3c'; ctx.lineWidth = 2;
                                    [[0,0],[1,0],[2,1]].forEach(([from, to]) => {
                                        ctx.beginPath(); ctx.moveTo(225, 180 + from * 25); ctx.lineTo(355, 190 + to * 25); ctx.stroke();
                                    });
                                    ctx.fillStyle = '#e74c3c'; ctx.font = '14px sans-serif';
                                    ctx.fillText('f: A -> B (a morphism = function)', 290, 330);
                                }
                            },
                            {
                                name: 'Grp',
                                draw: (ctx) => {
                                    ctx.fillStyle = '#333'; ctx.font = 'bold 15px sans-serif';
                                    ctx.textAlign = 'center'; ctx.fillText('Category Grp', 290, 80);
                                    ['Z/2Z','Z/3Z','Z/6Z','S_3','Z'].forEach((g, i) => {
                                        const x = 100 + (i % 3) * 160, y = 140 + Math.floor(i / 3) * 120;
                                        ctx.fillStyle = '#4a90d9'; ctx.beginPath(); ctx.arc(x, y, 30, 0, 2 * Math.PI); ctx.fill();
                                        ctx.fillStyle = '#fff'; ctx.font = 'bold 13px monospace'; ctx.fillText(g, x, y + 4);
                                    });
                                    ctx.strokeStyle = '#e74c3c'; ctx.lineWidth = 1.5;
                                    [[100,140,260,140],[260,140,420,140]].forEach(([x1,y1,x2,y2]) => {
                                        ctx.beginPath(); ctx.moveTo(x1 + 30, y1); ctx.lineTo(x2 - 30, y2); ctx.stroke();
                                    });
                                    ctx.fillStyle = '#666'; ctx.font = '13px sans-serif';
                                    ctx.fillText('Morphisms = group homomorphisms', 290, 330);
                                }
                            },
                            {
                                name: 'Poset',
                                draw: (ctx) => {
                                    ctx.fillStyle = '#333'; ctx.font = 'bold 15px sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.fillText('Poset {1,2,3,6} by divisibility as a category', 290, 80);
                                    const ns = [{l:'6',x:290,y:120},{l:'2',x:190,y:210},{l:'3',x:390,y:210},{l:'1',x:290,y:300}];
                                    [[3,1],[3,2],[1,0],[2,0]].forEach(([i,j]) => {
                                        ctx.strokeStyle = '#aaa'; ctx.lineWidth = 2; ctx.beginPath();
                                        ctx.moveTo(ns[i].x, ns[i].y - 15); ctx.lineTo(ns[j].x, ns[j].y + 15); ctx.stroke();
                                    });
                                    ns.forEach(n => {
                                        ctx.fillStyle = '#2a5f8f'; ctx.beginPath(); ctx.arc(n.x, n.y, 20, 0, 2 * Math.PI); ctx.fill();
                                        ctx.fillStyle = '#fff'; ctx.font = 'bold 14px monospace'; ctx.fillText(n.l, n.x, n.y + 5);
                                    });
                                    ctx.fillStyle = '#666'; ctx.font = '13px sans-serif';
                                    ctx.fillText('a -> b iff a divides b (at most one morphism per pair)', 290, 355);
                                }
                            }
                        ];

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            ctx.fillStyle = '#f8f9fa';
                            ctx.fillRect(0, 0, canvas.width, canvas.height);
                            cats.forEach((c, i) => {
                                const bx = 20 + i * 190, by = 10, bw = 175, bh = 32;
                                ctx.fillStyle = i === selected ? '#4a90d9' : '#ddd';
                                ctx.fillRect(bx, by, bw, bh);
                                ctx.fillStyle = i === selected ? '#fff' : '#333';
                                ctx.font = '12px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(c.name, bx + bw / 2, by + 20);
                            });
                            ctx.save();
                            ctx.translate(0, 30);
                            cats[selected].draw(ctx);
                            ctx.restore();
                        }

                        canvas.addEventListener('click', (e) => {
                            const rect = canvas.getBoundingClientRect();
                            const mx = e.clientX - rect.left;
                            const my = e.clientY - rect.top;
                            if (my >= 10 && my <= 42) {
                                cats.forEach((_, i) => {
                                    if (mx >= 20 + i * 190 && mx <= 20 + i * 190 + 175) {
                                        selected = i;
                                        draw();
                                    }
                                });
                            }
                        });
                        draw();
                        return { cleanup: () => {} };
                    }
                },
                {
                    id: 'viz-ch19-composition',
                    title: 'Composition and Identity in a Category',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 380;

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            ctx.fillStyle = '#f8f9fa';
                            ctx.fillRect(0, 0, canvas.width, canvas.height);

                            ctx.fillStyle = '#333';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Composition: g . f and Associativity', 290, 30);

                            const objs = [['A',60],['B',210],['C',360],['D',510]];
                            objs.forEach(([l,x]) => {
                                ctx.fillStyle = '#4a90d9'; ctx.beginPath(); ctx.arc(x, 160, 25, 0, 2 * Math.PI); ctx.fill();
                                ctx.fillStyle = '#fff'; ctx.font = 'bold 16px sans-serif'; ctx.fillText(l, x, 165);
                            });

                            // Arrows f, g, h
                            const drawArrow = (x1, y1, x2, y2, label, color) => {
                                ctx.strokeStyle = color;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.moveTo(x1 + 28, y1);
                                ctx.lineTo(x2 - 28, y2);
                                ctx.stroke();
                                // arrowhead
                                const dx = x2 - x1, dy = y2 - y1;
                                const len = Math.sqrt(dx * dx + dy * dy);
                                const ux = dx / len, uy = dy / len;
                                const tx = x2 - 28 * ux, ty = y2 - 28 * uy;
                                ctx.beginPath();
                                ctx.moveTo(tx, ty);
                                ctx.lineTo(tx - 8 * ux + 5 * uy, ty - 8 * uy - 5 * ux);
                                ctx.moveTo(tx, ty);
                                ctx.lineTo(tx - 8 * ux - 5 * uy, ty - 8 * uy + 5 * ux);
                                ctx.stroke();
                                ctx.fillStyle = color;
                                ctx.font = 'italic 15px serif';
                                ctx.fillText(label, (x1 + x2) / 2, y1 - 20);
                            };
                            drawArrow(60, 160, 210, 160, 'f', '#e74c3c');
                            drawArrow(210, 160, 360, 160, 'g', '#27ae60');
                            drawArrow(360, 160, 510, 160, 'h', '#8e44ad');

                            // Composed arrows below
                            ctx.strokeStyle = '#e67e22';
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([6, 4]);
                            ctx.beginPath();
                            ctx.moveTo(88, 175);
                            ctx.quadraticCurveTo(285, 260, 332, 175);
                            ctx.stroke();
                            ctx.fillStyle = '#e67e22';
                            ctx.font = 'italic 14px serif';
                            ctx.fillText('g . f', 210, 250);

                            ctx.strokeStyle = '#2980b9';
                            ctx.beginPath();
                            ctx.moveTo(238, 175);
                            ctx.quadraticCurveTo(435, 260, 482, 175);
                            ctx.stroke();
                            ctx.fillStyle = '#2980b9';
                            ctx.font = 'italic 14px serif';
                            ctx.fillText('h . g', 360, 250);
                            ctx.setLineDash([]);

                            // Associativity text
                            ctx.fillStyle = '#333';
                            ctx.font = '14px sans-serif';
                            ctx.fillText('Associativity: h . (g . f) = (h . g) . f', 290, 310);
                            ctx.fillText('Identity: f . id_A = f = id_B . f', 290, 340);
                        }
                        draw();
                        return { cleanup: () => {} };
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch19-ex01',
                    type: 'multiple-choice',
                    question: 'In the category Grp, what are the isomorphisms?',
                    options: [
                        'Injective homomorphisms',
                        'Surjective homomorphisms',
                        'Bijective group homomorphisms',
                        'Any group homomorphism'
                    ],
                    answer: 2,
                    explanation: 'An isomorphism in a category is a morphism with a two-sided inverse. In Grp, this means a bijective group homomorphism, since the inverse of a bijective homomorphism is again a homomorphism.'
                },
                {
                    id: 'ch19-ex02',
                    type: 'short-answer',
                    question: 'A group G viewed as a category has how many objects? (Enter a number.)',
                    answer: '1',
                    explanation: 'A group G is viewed as a category with a single object (often written as a dot). The morphisms are the elements of G, and composition is the group operation.'
                },
                {
                    id: 'ch19-ex03',
                    type: 'multiple-choice',
                    question: 'In the category arising from a poset (P, <=), how many morphisms are there from a to b when a <= b?',
                    options: [
                        'Zero',
                        'Exactly one',
                        'At most two',
                        'Infinitely many'
                    ],
                    answer: 1,
                    explanation: 'In the category associated to a poset, there is exactly one morphism from a to b whenever a <= b, and no morphism otherwise. This ensures composition is well-defined and associative.'
                }
            ]
        },

        // ============================================================
        // SECTION 2: Functors
        // ============================================================
        {
            id: 'ch19-sec02',
            title: 'Functors',
            content: `
<h2>2. Functors</h2>

<h3>2.1 Covariant Functors</h3>
<p>
Just as homomorphisms are structure-preserving maps between algebraic objects, <em>functors</em> are structure-preserving maps between categories.
</p>
<div class="definition">
<strong>Definition (Covariant Functor).</strong> Let \\(\\mathcal{C}\\) and \\(\\mathcal{D}\\) be categories. A <em>covariant functor</em> \\(F: \\mathcal{C} \\to \\mathcal{D}\\) consists of:
<ol>
<li>An assignment \\(A \\mapsto F(A)\\) sending each object of \\(\\mathcal{C}\\) to an object of \\(\\mathcal{D}\\).</li>
<li>For each morphism \\(f: A \\to B\\) in \\(\\mathcal{C}\\), a morphism \\(F(f): F(A) \\to F(B)\\) in \\(\\mathcal{D}\\).</li>
</ol>
These must satisfy:
<ul>
<li>\\(F(\\operatorname{id}_A) = \\operatorname{id}_{F(A)}\\) for all objects \\(A\\).</li>
<li>\\(F(g \\circ f) = F(g) \\circ F(f)\\) for all composable morphisms \\(f, g\\).</li>
</ul>
</div>

<h3>2.2 Contravariant Functors</h3>
<div class="definition">
<strong>Definition (Contravariant Functor).</strong> A <em>contravariant functor</em> \\(F: \\mathcal{C} \\to \\mathcal{D}\\) reverses the direction of morphisms: given \\(f: A \\to B\\), we get \\(F(f): F(B) \\to F(A)\\). The composition axiom becomes \\(F(g \\circ f) = F(f) \\circ F(g)\\).
</div>
<p>
Equivalently, a contravariant functor \\(\\mathcal{C} \\to \\mathcal{D}\\) is the same as a covariant functor \\(\\mathcal{C}^{\\mathrm{op}} \\to \\mathcal{D}\\), where \\(\\mathcal{C}^{\\mathrm{op}}\\) is the <em>opposite category</em> (same objects, reversed arrows).
</p>

<h3>2.3 Key Examples</h3>

<div class="example">
<strong>Example 1: Forgetful Functors.</strong> The functor \\(U: \\mathbf{Grp} \\to \\mathbf{Set}\\) sends each group to its underlying set and each homomorphism to the same function viewed as a set map. It "forgets" the group structure. Similarly there are forgetful functors \\(\\mathbf{Ring} \\to \\mathbf{Set}\\), \\(\\mathbf{Ring} \\to \\mathbf{Ab}\\) (forget multiplication), and \\(\\mathbf{Top} \\to \\mathbf{Set}\\).
</div>

<div class="example">
<strong>Example 2: Free Functors.</strong> The functor \\(F: \\mathbf{Set} \\to \\mathbf{Grp}\\) sends a set \\(S\\) to the free group \\(F(S)\\) on \\(S\\). If \\(\\varphi: S \\to T\\) is a function, the universal property of the free group gives a unique homomorphism \\(F(\\varphi): F(S) \\to F(T)\\). This is left adjoint to the forgetful functor.
</div>

<div class="example">
<strong>Example 3: Hom Functors.</strong> Fix an object \\(A\\) in a category \\(\\mathcal{C}\\). The <em>covariant Hom functor</em> \\(\\operatorname{Hom}(A, -): \\mathcal{C} \\to \\mathbf{Set}\\) sends \\(B \\mapsto \\operatorname{Hom}(A, B)\\) and a morphism \\(f: B \\to C\\) to the map \\(f_* = f \\circ -\\). The <em>contravariant Hom functor</em> \\(\\operatorname{Hom}(-, B): \\mathcal{C}^{\\mathrm{op}} \\to \\mathbf{Set}\\) sends \\(A \\mapsto \\operatorname{Hom}(A, B)\\) and \\(f: A \\to A'\\) to \\(f^* = - \\circ f\\).
</div>

<div class="example">
<strong>Example 4: Power Set Functor.</strong> The covariant power set functor \\(\\mathcal{P}: \\mathbf{Set} \\to \\mathbf{Set}\\) sends \\(A \\mapsto \\mathcal{P}(A)\\) and \\(f: A \\to B\\) to the direct image \\(f_*: S \\mapsto f(S)\\). The contravariant version sends \\(f\\) to the preimage \\(f^{-1}\\).
</div>

<h3>2.4 Properties of Functors</h3>
<p>
A functor \\(F\\) is <em>faithful</em> if each map \\(\\operatorname{Hom}(A,B) \\to \\operatorname{Hom}(F(A), F(B))\\) is injective, <em>full</em> if each such map is surjective, and <em>fully faithful</em> if each is bijective. The forgetful functor \\(U: \\mathbf{Grp} \\to \\mathbf{Set}\\) is faithful but not full (not every function between groups is a homomorphism).
</p>
`,
            visualizations: [
                {
                    id: 'viz-ch19-functor-diagram',
                    title: 'Functor: Mapping Between Categories',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 400;

                        let showContra = false;

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            ctx.fillStyle = '#f8f9fa';
                            ctx.fillRect(0, 0, canvas.width, canvas.height);

                            // Toggle button
                            ctx.fillStyle = showContra ? '#e74c3c' : '#4a90d9';
                            ctx.fillRect(200, 10, 180, 30);
                            ctx.fillStyle = '#fff';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(showContra ? 'Contravariant' : 'Covariant', 290, 30);

                            // Category C box
                            ctx.strokeStyle = '#4a90d9';
                            ctx.lineWidth = 2;
                            ctx.strokeRect(30, 60, 220, 300);
                            ctx.fillStyle = '#4a90d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Category C', 140, 55);

                            // Category D box
                            ctx.strokeStyle = '#27ae60';
                            ctx.strokeRect(330, 60, 220, 300);
                            ctx.fillStyle = '#27ae60';
                            ctx.fillText('Category D', 440, 55);

                            // Objects in C
                            const cObjs = [
                                { label: 'A', x: 100, y: 140 },
                                { label: 'B', x: 180, y: 260 }
                            ];
                            cObjs.forEach(o => {
                                ctx.fillStyle = '#2a5f8f';
                                ctx.beginPath();
                                ctx.arc(o.x, o.y, 22, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.fillStyle = '#fff';
                                ctx.font = 'bold 15px sans-serif';
                                ctx.fillText(o.label, o.x, o.y + 5);
                            });

                            // Morphism f in C
                            ctx.strokeStyle = '#e74c3c';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(115, 157);
                            ctx.lineTo(165, 243);
                            ctx.stroke();
                            ctx.fillStyle = '#e74c3c';
                            ctx.font = 'italic 14px serif';
                            ctx.fillText('f', 125, 200);

                            // Objects in D
                            const dObjs = [
                                { label: 'F(A)', x: 400, y: 140 },
                                { label: 'F(B)', x: 480, y: 260 }
                            ];
                            dObjs.forEach(o => {
                                ctx.fillStyle = '#1a7a42';
                                ctx.beginPath();
                                ctx.arc(o.x, o.y, 22, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.fillStyle = '#fff';
                                ctx.font = 'bold 13px sans-serif';
                                ctx.fillText(o.label, o.x, o.y + 5);
                            });

                            // Morphism F(f) in D
                            ctx.strokeStyle = '#e74c3c';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            if (showContra) {
                                ctx.moveTo(465, 243);
                                ctx.lineTo(415, 157);
                                ctx.stroke();
                                ctx.fillStyle = '#e74c3c';
                                ctx.fillText('F(f)', 460, 200);
                            } else {
                                ctx.moveTo(415, 157);
                                ctx.lineTo(465, 243);
                                ctx.stroke();
                                ctx.fillStyle = '#e74c3c';
                                ctx.fillText('F(f)', 425, 200);
                            }

                            // Functor arrow
                            ctx.strokeStyle = '#8e44ad';
                            ctx.lineWidth = 3;
                            ctx.setLineDash([8, 4]);
                            ctx.beginPath();
                            ctx.moveTo(260, 200);
                            ctx.lineTo(320, 200);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.fillStyle = '#8e44ad';
                            ctx.font = 'bold 16px sans-serif';
                            ctx.fillText('F', 290, 195);

                            // Info
                            ctx.fillStyle = '#333';
                            ctx.font = '13px sans-serif';
                            if (showContra) {
                                ctx.fillText('Contravariant: F reverses arrows. F(g . f) = F(f) . F(g)', 290, 385);
                            } else {
                                ctx.fillText('Covariant: F preserves arrow direction. F(g . f) = F(g) . F(f)', 290, 385);
                            }
                        }

                        canvas.addEventListener('click', (e) => {
                            const rect = canvas.getBoundingClientRect();
                            const mx = e.clientX - rect.left;
                            const my = e.clientY - rect.top;
                            if (mx >= 200 && mx <= 380 && my >= 10 && my <= 40) {
                                showContra = !showContra;
                                draw();
                            }
                        });
                        draw();
                        return { cleanup: () => {} };
                    }
                },
                {
                    id: 'viz-ch19-forgetful-free',
                    title: 'Forgetful and Free Functors',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 380;

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            ctx.fillStyle = '#f8f9fa';
                            ctx.fillRect(0, 0, canvas.width, canvas.height);

                            ctx.fillStyle = '#333';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Forgetful and Free Functors', 290, 30);

                            // Grp box
                            ctx.fillStyle = '#e8f0fe';
                            ctx.fillRect(30, 60, 220, 260);
                            ctx.strokeStyle = '#4a90d9';
                            ctx.lineWidth = 2;
                            ctx.strokeRect(30, 60, 220, 260);
                            ctx.fillStyle = '#2a5f8f';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.fillText('Grp', 140, 55);

                            // Set box
                            ctx.fillStyle = '#eafaf1';
                            ctx.fillRect(330, 60, 220, 260);
                            ctx.strokeStyle = '#27ae60';
                            ctx.strokeRect(330, 60, 220, 260);
                            ctx.fillStyle = '#1a7a42';
                            ctx.fillText('Set', 440, 55);

                            // Group objects
                            const grps = [
                                { label: 'Z/3Z', x: 100, y: 130 },
                                { label: 'F({a,b})', x: 160, y: 240 }
                            ];
                            grps.forEach(o => {
                                ctx.fillStyle = '#2a5f8f';
                                ctx.beginPath();
                                ctx.arc(o.x, o.y, 25, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.fillStyle = '#fff';
                                ctx.font = 'bold 11px sans-serif';
                                ctx.fillText(o.label, o.x, o.y + 4);
                            });

                            // Set objects
                            const sets = [
                                { label: '{0,1,2}', x: 400, y: 130 },
                                { label: '{a,b}', x: 480, y: 240 }
                            ];
                            sets.forEach(o => {
                                ctx.fillStyle = '#1a7a42';
                                ctx.beginPath();
                                ctx.arc(o.x, o.y, 25, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.fillStyle = '#fff';
                                ctx.font = 'bold 11px sans-serif';
                                ctx.fillText(o.label, o.x, o.y + 4);
                            });

                            // Forgetful arrow (top)
                            ctx.strokeStyle = '#e74c3c';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(260, 120);
                            ctx.lineTo(320, 120);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(320, 120);
                            ctx.lineTo(312, 114);
                            ctx.moveTo(320, 120);
                            ctx.lineTo(312, 126);
                            ctx.stroke();
                            ctx.fillStyle = '#e74c3c';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.fillText('U (forgetful)', 290, 108);

                            // Free arrow (bottom)
                            ctx.strokeStyle = '#8e44ad';
                            ctx.beginPath();
                            ctx.moveTo(320, 250);
                            ctx.lineTo(260, 250);
                            ctx.stroke();
                            ctx.beginPath();
                            ctx.moveTo(260, 250);
                            ctx.lineTo(268, 244);
                            ctx.moveTo(260, 250);
                            ctx.lineTo(268, 256);
                            ctx.stroke();
                            ctx.fillStyle = '#8e44ad';
                            ctx.fillText('F (free)', 290, 268);

                            ctx.fillStyle = '#666';
                            ctx.font = '13px sans-serif';
                            ctx.fillText('U forgets structure; F freely generates it', 290, 350);
                        }
                        draw();
                        return { cleanup: () => {} };
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch19-ex04',
                    type: 'multiple-choice',
                    question: 'The forgetful functor U: Grp -> Set is:',
                    options: [
                        'Full and faithful',
                        'Faithful but not full',
                        'Full but not faithful',
                        'Neither full nor faithful'
                    ],
                    answer: 1,
                    explanation: 'The forgetful functor is faithful because distinct group homomorphisms give distinct functions. It is not full because there exist functions between the underlying sets of two groups that are not group homomorphisms.'
                },
                {
                    id: 'ch19-ex05',
                    type: 'multiple-choice',
                    question: 'A contravariant functor F: C -> D sends a morphism f: A -> B to:',
                    options: [
                        'F(f): F(A) -> F(B)',
                        'F(f): F(B) -> F(A)',
                        'F(f): A -> B',
                        'F(f): B -> A'
                    ],
                    answer: 1,
                    explanation: 'A contravariant functor reverses the direction of morphisms: given f: A -> B in C, it produces F(f): F(B) -> F(A) in D.'
                },
                {
                    id: 'ch19-ex06',
                    type: 'short-answer',
                    question: 'If F: C -> D is a functor and f is an isomorphism in C, is F(f) necessarily an isomorphism in D? (Yes or No)',
                    answer: 'Yes',
                    explanation: 'If f has inverse g (so g . f = id and f . g = id), then F(g) . F(f) = F(g . f) = F(id) = id and similarly F(f) . F(g) = id. So F(f) is an isomorphism with inverse F(g).'
                },
                {
                    id: 'ch19-ex07',
                    type: 'multiple-choice',
                    question: 'Which of these is a contravariant functor from Set to Set?',
                    options: [
                        'The identity functor',
                        'The power set functor via direct image',
                        'The power set functor via preimage',
                        'The free group functor'
                    ],
                    answer: 2,
                    explanation: 'The power set functor sending f: A -> B to the preimage map f^{-1}: P(B) -> P(A) is contravariant because it reverses the direction of morphisms. The direct image version is covariant.'
                }
            ]
        },

        // ============================================================
        // SECTION 3: Natural Transformations
        // ============================================================
        {
            id: 'ch19-sec03',
            title: 'Natural Transformations',
            content: `
<h2>3. Natural Transformations</h2>

<h3>3.1 Definition</h3>
<p>
If functors are "morphisms between categories," then natural transformations are "morphisms between functors." They capture when two functors are related in a coherent, systematic way.
</p>
<div class="definition">
<strong>Definition (Natural Transformation).</strong> Let \\(F, G: \\mathcal{C} \\to \\mathcal{D}\\) be two functors. A <em>natural transformation</em> \\(\\eta: F \\Rightarrow G\\) is a family of morphisms
\\[\\eta_A: F(A) \\to G(A) \\quad \\text{in } \\mathcal{D}\\]
indexed by the objects \\(A\\) of \\(\\mathcal{C}\\), such that for every morphism \\(f: A \\to B\\) in \\(\\mathcal{C}\\), the following diagram commutes:
\\[G(f) \\circ \\eta_A = \\eta_B \\circ F(f).\\]
Each \\(\\eta_A\\) is called a <em>component</em> of \\(\\eta\\).
</div>

<h3>3.2 The Naturality Square</h3>
<p>
The condition \\(G(f) \\circ \\eta_A = \\eta_B \\circ F(f)\\) is depicted as a commutative square:
</p>
<p style="text-align:center;">
\\(F(A) \\xrightarrow{\\eta_A} G(A)\\)<br>
\\(\\downarrow F(f) \\qquad\\qquad \\downarrow G(f)\\)<br>
\\(F(B) \\xrightarrow{\\eta_B} G(B)\\)
</p>
<p>
This square must commute for <em>every</em> morphism \\(f\\) in \\(\\mathcal{C}\\). This is a strong constraint that ensures the transformation is truly "natural," meaning it does not depend on arbitrary choices.
</p>

<h3>3.3 Natural Isomorphisms</h3>
<div class="definition">
<strong>Definition.</strong> A natural transformation \\(\\eta: F \\Rightarrow G\\) is a <em>natural isomorphism</em> if every component \\(\\eta_A\\) is an isomorphism. We then write \\(F \\cong G\\) and say \\(F\\) and \\(G\\) are <em>naturally isomorphic</em>.
</div>

<h3>3.4 Examples</h3>

<div class="example">
<strong>Example 1: Double Dual.</strong> For finite-dimensional vector spaces, the map \\(\\eta_V: V \\to V^{**}\\) sending \\(v\\) to the evaluation map \\(\\operatorname{ev}_v\\) is a natural isomorphism between the identity functor and the double-dual functor on \\(\\mathbf{fdVect}_k\\). In contrast, the isomorphism \\(V \\cong V^*\\) (which depends on a choice of basis) is <em>not</em> natural.
</div>

<div class="example">
<strong>Example 2: Abelianization.</strong> The abelianization map \\(G \\twoheadrightarrow G/[G,G]\\) defines a natural transformation from the identity functor on \\(\\mathbf{Grp}\\) to the abelianization functor \\(\\mathbf{Grp} \\to \\mathbf{Ab} \\hookrightarrow \\mathbf{Grp}\\).
</div>

<div class="example">
<strong>Example 3: Determinant.</strong> The determinant \\(\\det: GL_n(R) \\to R^\\times\\) is natural in the ring \\(R\\): for any ring homomorphism \\(\\varphi: R \\to S\\), we have \\(\\det(\\varphi(A)) = \\varphi(\\det(A))\\).
</div>

<h3>3.5 Functor Categories</h3>
<p>
Given categories \\(\\mathcal{C}\\) and \\(\\mathcal{D}\\), the collection of all functors \\(\\mathcal{C} \\to \\mathcal{D}\\) and natural transformations between them forms a category, denoted \\([\\mathcal{C}, \\mathcal{D}]\\) or \\(\\mathcal{D}^{\\mathcal{C}}\\). Objects are functors, morphisms are natural transformations, and composition is "vertical composition" of natural transformations: \\((\\epsilon \\circ \\eta)_A = \\epsilon_A \\circ \\eta_A\\).
</p>
`,
            visualizations: [
                {
                    id: 'viz-ch19-naturality-square',
                    title: 'The Naturality Square',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 400;

                        let animPhase = 0;
                        let animId = null;

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            ctx.fillStyle = '#f8f9fa';
                            ctx.fillRect(0, 0, canvas.width, canvas.height);

                            ctx.fillStyle = '#333';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Naturality Square: G(f) . eta_A = eta_B . F(f)', 290, 30);

                            // Four corners
                            const corners = [
                                { label: 'F(A)', x: 140, y: 120 },
                                { label: 'G(A)', x: 440, y: 120 },
                                { label: 'F(B)', x: 140, y: 300 },
                                { label: 'G(B)', x: 440, y: 300 }
                            ];

                            // Highlight paths based on animation
                            const topColor = (animPhase === 1 || animPhase === 0) ? '#e74c3c' : '#aaa';
                            const bottomColor = (animPhase === 2 || animPhase === 0) ? '#2980b9' : '#aaa';
                            const leftColor = (animPhase === 2 || animPhase === 0) ? '#27ae60' : '#aaa';
                            const rightColor = (animPhase === 1 || animPhase === 0) ? '#8e44ad' : '#aaa';

                            // Arrows
                            const drawHArrow = (x1, y, x2, label, color) => {
                                ctx.strokeStyle = color;
                                ctx.lineWidth = 2.5;
                                ctx.beginPath();
                                ctx.moveTo(x1 + 35, y);
                                ctx.lineTo(x2 - 35, y);
                                ctx.stroke();
                                ctx.beginPath();
                                ctx.moveTo(x2 - 35, y);
                                ctx.lineTo(x2 - 43, y - 5);
                                ctx.moveTo(x2 - 35, y);
                                ctx.lineTo(x2 - 43, y + 5);
                                ctx.stroke();
                                ctx.fillStyle = color;
                                ctx.font = 'italic 15px serif';
                                ctx.fillText(label, (x1 + x2) / 2, y - 12);
                            };
                            const drawVArrow = (x, y1, y2, label, color) => {
                                ctx.strokeStyle = color;
                                ctx.lineWidth = 2.5;
                                ctx.beginPath();
                                ctx.moveTo(x, y1 + 25);
                                ctx.lineTo(x, y2 - 25);
                                ctx.stroke();
                                ctx.beginPath();
                                ctx.moveTo(x, y2 - 25);
                                ctx.lineTo(x - 5, y2 - 33);
                                ctx.moveTo(x, y2 - 25);
                                ctx.lineTo(x + 5, y2 - 33);
                                ctx.stroke();
                                ctx.fillStyle = color;
                                ctx.font = 'italic 15px serif';
                                ctx.fillText(label, x - 35, (y1 + y2) / 2 + 4);
                            };

                            drawHArrow(140, 120, 440, 'eta_A', topColor);
                            drawHArrow(140, 300, 440, 'eta_B', bottomColor);
                            drawVArrow(140, 120, 300, 'F(f)', leftColor);
                            drawVArrow(440, 120, 300, 'G(f)', rightColor);

                            // Nodes
                            corners.forEach(c => {
                                ctx.fillStyle = '#4a90d9';
                                ctx.beginPath();
                                ctx.arc(c.x, c.y, 24, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.fillStyle = '#fff';
                                ctx.font = 'bold 13px sans-serif';
                                ctx.fillText(c.label, c.x, c.y + 4);
                            });

                            // Path labels
                            ctx.fillStyle = '#333';
                            ctx.font = '13px sans-serif';
                            if (animPhase === 1) {
                                ctx.fillText('Path 1: F(A) --eta_A--> G(A) --G(f)--> G(B)', 290, 365);
                            } else if (animPhase === 2) {
                                ctx.fillText('Path 2: F(A) --F(f)--> F(B) --eta_B--> G(B)', 290, 365);
                            } else {
                                ctx.fillText('Both paths give the same result (commutativity)', 290, 365);
                            }
                            ctx.fillText('Click to cycle through paths', 290, 390);
                        }

                        canvas.addEventListener('click', () => {
                            animPhase = (animPhase + 1) % 3;
                            draw();
                        });

                        draw();
                        return { cleanup: () => { if (animId) cancelAnimationFrame(animId); } };
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch19-ex08',
                    type: 'multiple-choice',
                    question: 'A natural transformation eta: F => G consists of:',
                    options: [
                        'A single morphism from F to G',
                        'A family of morphisms eta_A: F(A) -> G(A), one per object A, satisfying a commutativity condition',
                        'A functor from C to D',
                        'An isomorphism between categories'
                    ],
                    answer: 1,
                    explanation: 'A natural transformation is a family of component morphisms, one for each object, satisfying the naturality condition (commutativity of the naturality square) for every morphism in the source category.'
                },
                {
                    id: 'ch19-ex09',
                    type: 'multiple-choice',
                    question: 'The canonical map V -> V** (sending v to ev_v) for finite-dimensional vector spaces is:',
                    options: [
                        'A natural transformation but not a natural isomorphism',
                        'A natural isomorphism',
                        'Not natural',
                        'Only defined for specific vector spaces'
                    ],
                    answer: 1,
                    explanation: 'For finite-dimensional vector spaces, the evaluation map V -> V** is a natural isomorphism between the identity functor and the double-dual functor. It is natural because it does not depend on any choice of basis.'
                },
                {
                    id: 'ch19-ex10',
                    type: 'short-answer',
                    question: 'In a functor category [C, D], what are the objects? (Answer: functors or natural transformations)',
                    answer: 'functors',
                    explanation: 'In the functor category [C, D], the objects are functors C -> D and the morphisms are natural transformations between those functors.'
                }
            ]
        },

        // ============================================================
        // SECTION 4: Universal Properties
        // ============================================================
        {
            id: 'ch19-sec04',
            title: 'Universal Properties',
            content: `
<h2>4. Universal Properties</h2>

<h3>4.1 The Idea</h3>
<p>
Many constructions in algebra (products, direct sums, free groups, polynomial rings) are best characterized not by their internal structure but by a <em>universal property</em>: a condition that specifies the construction uniquely up to unique isomorphism via its relationship to all other objects.
</p>

<h3>4.2 Products</h3>
<div class="definition">
<strong>Definition (Categorical Product).</strong> Let \\(A\\) and \\(B\\) be objects in a category \\(\\mathcal{C}\\). A <em>product</em> of \\(A\\) and \\(B\\) is an object \\(A \\times B\\) together with morphisms \\(\\pi_1: A \\times B \\to A\\) and \\(\\pi_2: A \\times B \\to B\\) (the <em>projections</em>) such that for every object \\(C\\) and morphisms \\(f: C \\to A\\), \\(g: C \\to B\\), there exists a unique morphism \\(\\langle f, g \\rangle: C \\to A \\times B\\) with
\\[\\pi_1 \\circ \\langle f, g \\rangle = f \\quad \\text{and} \\quad \\pi_2 \\circ \\langle f, g \\rangle = g.\\]
</div>
<p>
In \\(\\mathbf{Set}\\), the product is the Cartesian product. In \\(\\mathbf{Grp}\\), it is the direct product. In \\(\\mathbf{Top}\\), it is the product space with the product topology.
</p>

<h3>4.3 Coproducts</h3>
<div class="definition">
<strong>Definition (Coproduct).</strong> The <em>coproduct</em> (or <em>sum</em>) of \\(A\\) and \\(B\\) is an object \\(A \\amalg B\\) with <em>injections</em> \\(\\iota_1: A \\to A \\amalg B\\) and \\(\\iota_2: B \\to A \\amalg B\\) satisfying the dual universal property: for every \\(C\\) and morphisms \\(f: A \\to C\\), \\(g: B \\to C\\), there exists a unique \\([f,g]: A \\amalg B \\to C\\) with \\([f,g] \\circ \\iota_1 = f\\) and \\([f,g] \\circ \\iota_2 = g\\).
</div>
<p>
In \\(\\mathbf{Set}\\), the coproduct is the disjoint union. In \\(\\mathbf{Ab}\\), the coproduct is the direct sum. In \\(\\mathbf{Grp}\\), the coproduct is the free product.
</p>

<h3>4.4 Free Objects</h3>
<div class="definition">
<strong>Definition (Free Object).</strong> Let \\(U: \\mathcal{C} \\to \\mathbf{Set}\\) be a forgetful functor. A <em>free object</em> on a set \\(S\\) is an object \\(F(S)\\) in \\(\\mathcal{C}\\) together with a function \\(\\eta: S \\to U(F(S))\\) such that for every object \\(A\\) in \\(\\mathcal{C}\\) and every function \\(f: S \\to U(A)\\), there exists a unique morphism \\(\\bar{f}: F(S) \\to A\\) in \\(\\mathcal{C}\\) with \\(U(\\bar{f}) \\circ \\eta = f\\).
</div>
<p>
This captures the notion of "freely generated." The free group on \\(S\\), the free abelian group (= \\(\\mathbb{Z}^{(S)}\\)), the polynomial ring \\(k[S]\\), and the free module \\(R^{(S)}\\) are all instances of free objects in their respective categories.
</p>

<h3>4.5 Uniqueness</h3>
<p>
A fundamental theorem of category theory states that any two objects satisfying the same universal property are <em>uniquely isomorphic</em>. For instance, if \\(P\\) and \\(P'\\) are both products of \\(A\\) and \\(B\\), then there is a unique isomorphism \\(P \\cong P'\\) compatible with the projections. This justifies speaking of "the" product.
</p>
`,
            visualizations: [
                {
                    id: 'viz-ch19-product-up',
                    title: 'Universal Property of Products',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 420;

                        let mode = 0; // 0 = product, 1 = coproduct

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            ctx.fillStyle = '#f8f9fa';
                            ctx.fillRect(0, 0, canvas.width, canvas.height);

                            // Toggle
                            ctx.fillStyle = mode === 0 ? '#4a90d9' : '#ddd';
                            ctx.fillRect(130, 8, 140, 28);
                            ctx.fillStyle = mode === 0 ? '#fff' : '#333';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Product', 200, 26);

                            ctx.fillStyle = mode === 1 ? '#e74c3c' : '#ddd';
                            ctx.fillRect(310, 8, 140, 28);
                            ctx.fillStyle = mode === 1 ? '#fff' : '#333';
                            ctx.fillText('Coproduct', 380, 26);

                            if (mode === 0) {
                                // Product diagram
                                ctx.fillStyle = '#333';
                                ctx.font = 'bold 15px sans-serif';
                                ctx.fillText('Universal Property of Product', 290, 60);

                                // A x B at center
                                const drawNode = (x, y, label, color) => {
                                    ctx.fillStyle = color;
                                    ctx.beginPath();
                                    ctx.arc(x, y, 24, 0, 2 * Math.PI);
                                    ctx.fill();
                                    ctx.fillStyle = '#fff';
                                    ctx.font = 'bold 13px sans-serif';
                                    ctx.fillText(label, x, y + 4);
                                };

                                drawNode(290, 200, 'A x B', '#4a90d9');
                                drawNode(120, 320, 'A', '#2a5f8f');
                                drawNode(460, 320, 'B', '#2a5f8f');
                                drawNode(290, 90, 'C', '#27ae60');

                                // Projections
                                const drawLabeledArrow = (x1, y1, x2, y2, label, color, dashed) => {
                                    ctx.strokeStyle = color;
                                    ctx.lineWidth = 2;
                                    if (dashed) ctx.setLineDash([6, 4]);
                                    else ctx.setLineDash([]);
                                    ctx.beginPath();
                                    const dx = x2 - x1, dy = y2 - y1;
                                    const len = Math.sqrt(dx * dx + dy * dy);
                                    const ux = dx / len, uy = dy / len;
                                    ctx.moveTo(x1 + 26 * ux, y1 + 26 * uy);
                                    ctx.lineTo(x2 - 26 * ux, y2 - 26 * uy);
                                    ctx.stroke();
                                    ctx.setLineDash([]);
                                    ctx.fillStyle = color;
                                    ctx.font = 'italic 14px serif';
                                    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
                                    ctx.fillText(label, mx + 12 * uy, my - 12 * ux);
                                };

                                drawLabeledArrow(290, 200, 120, 320, 'pi_1', '#e74c3c', false);
                                drawLabeledArrow(290, 200, 460, 320, 'pi_2', '#e74c3c', false);
                                drawLabeledArrow(290, 90, 120, 320, 'f', '#27ae60', false);
                                drawLabeledArrow(290, 90, 460, 320, 'g', '#27ae60', false);
                                drawLabeledArrow(290, 90, 290, 200, '<f,g>', '#8e44ad', true);

                                ctx.fillStyle = '#333';
                                ctx.font = '13px sans-serif';
                                ctx.fillText('There exists a unique <f,g> making the diagram commute', 290, 390);
                            } else {
                                // Coproduct diagram
                                ctx.fillStyle = '#333';
                                ctx.font = 'bold 15px sans-serif';
                                ctx.fillText('Universal Property of Coproduct', 290, 60);

                                const drawNode = (x, y, label, color) => {
                                    ctx.fillStyle = color;
                                    ctx.beginPath();
                                    ctx.arc(x, y, 24, 0, 2 * Math.PI);
                                    ctx.fill();
                                    ctx.fillStyle = '#fff';
                                    ctx.font = 'bold 13px sans-serif';
                                    ctx.fillText(label, x, y + 4);
                                };

                                drawNode(290, 200, 'A + B', '#e74c3c');
                                drawNode(120, 90, 'A', '#2a5f8f');
                                drawNode(460, 90, 'B', '#2a5f8f');
                                drawNode(290, 340, 'C', '#27ae60');

                                const drawLabeledArrow = (x1, y1, x2, y2, label, color, dashed) => {
                                    ctx.strokeStyle = color;
                                    ctx.lineWidth = 2;
                                    if (dashed) ctx.setLineDash([6, 4]);
                                    else ctx.setLineDash([]);
                                    ctx.beginPath();
                                    const dx = x2 - x1, dy = y2 - y1;
                                    const len = Math.sqrt(dx * dx + dy * dy);
                                    const ux = dx / len, uy = dy / len;
                                    ctx.moveTo(x1 + 26 * ux, y1 + 26 * uy);
                                    ctx.lineTo(x2 - 26 * ux, y2 - 26 * uy);
                                    ctx.stroke();
                                    ctx.setLineDash([]);
                                    ctx.fillStyle = color;
                                    ctx.font = 'italic 14px serif';
                                    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
                                    ctx.fillText(label, mx + 12 * uy, my - 12 * ux);
                                };

                                drawLabeledArrow(120, 90, 290, 200, 'i_1', '#e74c3c', false);
                                drawLabeledArrow(460, 90, 290, 200, 'i_2', '#e74c3c', false);
                                drawLabeledArrow(120, 90, 290, 340, 'f', '#27ae60', false);
                                drawLabeledArrow(460, 90, 290, 340, 'g', '#27ae60', false);
                                drawLabeledArrow(290, 200, 290, 340, '[f,g]', '#8e44ad', true);

                                ctx.fillStyle = '#333';
                                ctx.font = '13px sans-serif';
                                ctx.fillText('There exists a unique [f,g] making the diagram commute', 290, 390);
                            }
                        }

                        canvas.addEventListener('click', (e) => {
                            const rect = canvas.getBoundingClientRect();
                            const mx = e.clientX - rect.left;
                            const my = e.clientY - rect.top;
                            if (my >= 8 && my <= 36) {
                                if (mx >= 130 && mx <= 270) { mode = 0; draw(); }
                                if (mx >= 310 && mx <= 450) { mode = 1; draw(); }
                            }
                        });
                        draw();
                        return { cleanup: () => {} };
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch19-ex11',
                    type: 'multiple-choice',
                    question: 'In the category Set, the coproduct of two sets A and B is:',
                    options: [
                        'The Cartesian product A x B',
                        'The disjoint union A + B',
                        'The intersection of A and B',
                        'The set of functions from A to B'
                    ],
                    answer: 1,
                    explanation: 'In Set, the coproduct is the disjoint union. Given any functions f: A -> C and g: B -> C, there is a unique function from the disjoint union A + B to C that restricts to f on A and g on B.'
                },
                {
                    id: 'ch19-ex12',
                    type: 'multiple-choice',
                    question: 'If P and P\' are both products of A and B in a category, then:',
                    options: [
                        'P and P\' are equal',
                        'P and P\' are isomorphic, but the isomorphism may not be unique',
                        'P and P\' are uniquely isomorphic (compatible with projections)',
                        'P and P\' need not be related'
                    ],
                    answer: 2,
                    explanation: 'The universal property of the product guarantees that any two products are connected by a unique isomorphism that commutes with the projections. This is why we say "the" product.'
                },
                {
                    id: 'ch19-ex13',
                    type: 'short-answer',
                    question: 'In the category Grp, the coproduct of two groups G and H is called the ___ product. (One word)',
                    answer: 'free',
                    explanation: 'The coproduct in Grp is the free product G * H. Every element can be written as a reduced word alternating between elements of G and H.'
                },
                {
                    id: 'ch19-ex14',
                    type: 'multiple-choice',
                    question: 'The free group on a set S satisfies a universal property with respect to which functor?',
                    options: [
                        'The abelianization functor',
                        'The forgetful functor U: Grp -> Set',
                        'The identity functor on Set',
                        'The Hom functor'
                    ],
                    answer: 1,
                    explanation: 'The free group F(S) is a free object with respect to the forgetful functor U: Grp -> Set. Any function S -> U(G) extends uniquely to a group homomorphism F(S) -> G.'
                }
            ]
        },

        // ============================================================
        // SECTION 5: Limits and Colimits
        // ============================================================
        {
            id: 'ch19-sec05',
            title: 'Limits and Colimits',
            content: `
<h2>5. Limits and Colimits</h2>

<h3>5.1 Diagrams</h3>
<p>
Products and coproducts are special cases of a more general construction. A <em>diagram</em> in a category \\(\\mathcal{C}\\) is a functor \\(D: \\mathcal{J} \\to \\mathcal{C}\\) from a small "index category" \\(\\mathcal{J}\\). The shape of \\(\\mathcal{J}\\) determines what kind of limit or colimit we get.
</p>

<h3>5.2 Cones and Limits</h3>
<div class="definition">
<strong>Definition (Cone).</strong> A <em>cone</em> over a diagram \\(D: \\mathcal{J} \\to \\mathcal{C}\\) is an object \\(N\\) together with morphisms \\(\\psi_j: N \\to D(j)\\) for each \\(j \\in \\mathcal{J}\\) such that for every morphism \\(\\alpha: j \\to k\\) in \\(\\mathcal{J}\\), we have \\(D(\\alpha) \\circ \\psi_j = \\psi_k\\).
</div>
<div class="definition">
<strong>Definition (Limit).</strong> A <em>limit</em> of \\(D\\) is a universal cone: a cone \\((L, \\{\\pi_j\\})\\) such that for every other cone \\((N, \\{\\psi_j\\})\\), there exists a unique morphism \\(u: N \\to L\\) with \\(\\pi_j \\circ u = \\psi_j\\) for all \\(j\\).
</div>
<p>
When \\(\\mathcal{J}\\) is the discrete category on two objects, the limit is the <em>product</em>. When \\(\\mathcal{J}\\) is the empty category, the limit is the <em>terminal object</em>. When \\(\\mathcal{J}\\) is \\(\\bullet \\rightrightarrows \\bullet\\), the limit is the <em>equalizer</em>.
</p>

<h3>5.3 Colimits</h3>
<p>
Dually, a <em>cocone</em> under \\(D\\) is an object \\(N\\) with morphisms \\(\\iota_j: D(j) \\to N\\) compatible with \\(D\\). A <em>colimit</em> is a universal cocone: initial among all cocones.
</p>
<p>
Colimits generalize coproducts (discrete index category), initial objects (empty index category), and coequalizers (parallel-pair index category).
</p>

<h3>5.4 Pullbacks</h3>
<div class="definition">
<strong>Definition (Pullback).</strong> Given morphisms \\(f: A \\to C\\) and \\(g: B \\to C\\), their <em>pullback</em> (or <em>fiber product</em>) is the limit of the diagram \\(A \\xrightarrow{f} C \\xleftarrow{g} B\\). Concretely, it is an object \\(A \\times_C B\\) with projections \\(p_1, p_2\\) such that \\(f \\circ p_1 = g \\circ p_2\\), and this square is universal.
</div>
<p>
In \\(\\mathbf{Set}\\), the pullback is \\(A \\times_C B = \\{(a, b) \\in A \\times B \\mid f(a) = g(b)\\}\\). In algebra, the pullback of ring maps recovers the fiber product of rings.
</p>

<h3>5.5 Pushouts</h3>
<div class="definition">
<strong>Definition (Pushout).</strong> Given morphisms \\(f: C \\to A\\) and \\(g: C \\to B\\), their <em>pushout</em> is the colimit of the diagram \\(A \\xleftarrow{f} C \\xrightarrow{g} B\\). It is an object \\(A \\amalg_C B\\) with maps from \\(A\\) and \\(B\\) satisfying the dual universal property.
</div>
<p>
In \\(\\mathbf{Grp}\\), the pushout is the amalgamated free product \\(A *_C B\\). In \\(\\mathbf{Ab}\\), it is the direct sum modulo the relations identifying the images of \\(C\\).
</p>

<h3>5.6 Existence Theorems</h3>
<p>
A category is <em>complete</em> if all small limits exist, and <em>cocomplete</em> if all small colimits exist. The categories \\(\\mathbf{Set}\\), \\(\\mathbf{Grp}\\), \\(\\mathbf{Ab}\\), \\(\\mathbf{Ring}\\), and \\(R\\text{-}\\mathbf{Mod}\\) are both complete and cocomplete. A key theorem states: a category has all small limits if and only if it has all products and all equalizers.
</p>
`,
            visualizations: [
                {
                    id: 'viz-ch19-pullback',
                    title: 'Pullback and Pushout Diagrams',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 420;

                        let mode = 0; // 0 = pullback, 1 = pushout

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            ctx.fillStyle = '#f8f9fa';
                            ctx.fillRect(0, 0, canvas.width, canvas.height);

                            // Toggle
                            ctx.fillStyle = mode === 0 ? '#4a90d9' : '#ddd';
                            ctx.fillRect(130, 8, 140, 28);
                            ctx.fillStyle = mode === 0 ? '#fff' : '#333';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Pullback', 200, 26);

                            ctx.fillStyle = mode === 1 ? '#e74c3c' : '#ddd';
                            ctx.fillRect(310, 8, 140, 28);
                            ctx.fillStyle = mode === 1 ? '#fff' : '#333';
                            ctx.fillText('Pushout', 380, 26);

                            const drawNode = (x, y, label, color) => {
                                ctx.fillStyle = color;
                                ctx.beginPath();
                                ctx.arc(x, y, 24, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.fillStyle = '#fff';
                                ctx.font = 'bold 13px sans-serif';
                                ctx.fillText(label, x, y + 4);
                            };

                            const drawArrow = (x1, y1, x2, y2, label, color, dashed) => {
                                ctx.strokeStyle = color;
                                ctx.lineWidth = 2;
                                if (dashed) ctx.setLineDash([6, 4]);
                                else ctx.setLineDash([]);
                                const dx = x2 - x1, dy = y2 - y1;
                                const len = Math.sqrt(dx * dx + dy * dy);
                                const ux = dx / len, uy = dy / len;
                                ctx.beginPath();
                                ctx.moveTo(x1 + 26 * ux, y1 + 26 * uy);
                                ctx.lineTo(x2 - 26 * ux, y2 - 26 * uy);
                                ctx.stroke();
                                // arrowhead
                                const ax = x2 - 26 * ux, ay = y2 - 26 * uy;
                                ctx.beginPath();
                                ctx.moveTo(ax, ay);
                                ctx.lineTo(ax - 8 * ux + 5 * uy, ay - 8 * uy - 5 * ux);
                                ctx.moveTo(ax, ay);
                                ctx.lineTo(ax - 8 * ux - 5 * uy, ay - 8 * uy + 5 * ux);
                                ctx.stroke();
                                ctx.setLineDash([]);
                                ctx.fillStyle = color;
                                ctx.font = 'italic 14px serif';
                                const mx = (x1 + x2) / 2 + 14 * uy;
                                const my = (y1 + y2) / 2 - 14 * ux;
                                ctx.fillText(label, mx, my);
                            };

                            if (mode === 0) {
                                ctx.fillStyle = '#333';
                                ctx.font = 'bold 15px sans-serif';
                                ctx.fillText('Pullback (Fiber Product)', 290, 60);

                                drawNode(180, 150, 'A x_C B', '#8e44ad');
                                drawNode(420, 150, 'B', '#2a5f8f');
                                drawNode(180, 310, 'A', '#2a5f8f');
                                drawNode(420, 310, 'C', '#4a90d9');

                                drawArrow(180, 150, 420, 150, 'p_2', '#e74c3c', false);
                                drawArrow(180, 150, 180, 310, 'p_1', '#e74c3c', false);
                                drawArrow(420, 150, 420, 310, 'g', '#333', false);
                                drawArrow(180, 310, 420, 310, 'f', '#333', false);

                                ctx.fillStyle = '#333';
                                ctx.font = '13px sans-serif';
                                ctx.fillText('f . p_1 = g . p_2 (the square commutes)', 290, 380);
                                ctx.fillText('In Set: A x_C B = {(a,b) | f(a) = g(b)}', 290, 400);
                            } else {
                                ctx.fillStyle = '#333';
                                ctx.font = 'bold 15px sans-serif';
                                ctx.fillText('Pushout (Amalgamated Sum)', 290, 60);

                                drawNode(180, 150, 'C', '#4a90d9');
                                drawNode(420, 150, 'B', '#2a5f8f');
                                drawNode(180, 310, 'A', '#2a5f8f');
                                drawNode(420, 310, 'A+_C B', '#8e44ad');

                                drawArrow(180, 150, 420, 150, 'g', '#333', false);
                                drawArrow(180, 150, 180, 310, 'f', '#333', false);
                                drawArrow(420, 150, 420, 310, 'j_2', '#e74c3c', false);
                                drawArrow(180, 310, 420, 310, 'j_1', '#e74c3c', false);

                                ctx.fillStyle = '#333';
                                ctx.font = '13px sans-serif';
                                ctx.fillText('j_1 . f = j_2 . g (the square commutes)', 290, 380);
                                ctx.fillText('In Grp: the amalgamated free product A *_C B', 290, 400);
                            }
                        }

                        canvas.addEventListener('click', (e) => {
                            const rect = canvas.getBoundingClientRect();
                            const mx = e.clientX - rect.left;
                            const my = e.clientY - rect.top;
                            if (my >= 8 && my <= 36) {
                                if (mx >= 130 && mx <= 270) { mode = 0; draw(); }
                                if (mx >= 310 && mx <= 450) { mode = 1; draw(); }
                            }
                        });
                        draw();
                        return { cleanup: () => {} };
                    }
                },
                {
                    id: 'viz-ch19-limit-types',
                    title: 'Types of Limits and Colimits',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 380;

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            ctx.fillStyle = '#f8f9fa';
                            ctx.fillRect(0, 0, canvas.width, canvas.height);

                            ctx.fillStyle = '#333';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Zoo of Limits and Colimits', 290, 25);

                            const items = [
                                { limit: 'Terminal object', colimit: 'Initial object', shape: 'empty' },
                                { limit: 'Product', colimit: 'Coproduct', shape: 'discrete' },
                                { limit: 'Equalizer', colimit: 'Coequalizer', shape: 'parallel pair' },
                                { limit: 'Pullback', colimit: 'Pushout', shape: 'span / cospan' },
                                { limit: 'Inverse limit', colimit: 'Direct limit', shape: 'tower' }
                            ];

                            // Header
                            ctx.fillStyle = '#4a90d9';
                            ctx.fillRect(20, 45, 170, 28);
                            ctx.fillRect(200, 45, 170, 28);
                            ctx.fillRect(380, 45, 180, 28);
                            ctx.fillStyle = '#fff';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.fillText('Limit', 105, 64);
                            ctx.fillText('Colimit', 285, 64);
                            ctx.fillText('Index Shape', 470, 64);

                            items.forEach((item, i) => {
                                const y = 90 + i * 52;
                                ctx.fillStyle = i % 2 === 0 ? '#f0f4f8' : '#fff';
                                ctx.fillRect(20, y, 540, 48);

                                ctx.fillStyle = '#333';
                                ctx.font = '14px sans-serif';
                                ctx.fillText(item.limit, 105, y + 28);
                                ctx.fillText(item.colimit, 285, y + 28);
                                ctx.fillStyle = '#666';
                                ctx.font = '12px monospace';
                                ctx.fillText(item.shape, 470, y + 28);
                            });

                            ctx.strokeStyle = '#4a90d9';
                            ctx.lineWidth = 1;
                            ctx.strokeRect(20, 45, 540, 305);
                        }
                        draw();
                        return { cleanup: () => {} };
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch19-ex15',
                    type: 'multiple-choice',
                    question: 'The pullback of f: A -> C and g: B -> C in Set is:',
                    options: [
                        '{(a,b) in A x B | a = b}',
                        '{(a,b) in A x B | f(a) = g(b)}',
                        'A x B',
                        'The image of f intersected with the image of g'
                    ],
                    answer: 1,
                    explanation: 'The pullback (fiber product) in Set is the set of pairs (a,b) where f(a) = g(b). This is the subset of A x B where the two maps "agree" over C.'
                },
                {
                    id: 'ch19-ex16',
                    type: 'multiple-choice',
                    question: 'A category that has all small limits is called:',
                    options: [
                        'Abelian',
                        'Complete',
                        'Cocomplete',
                        'Concrete'
                    ],
                    answer: 1,
                    explanation: 'A category with all small limits is called complete. If it has all small colimits, it is called cocomplete. Many familiar algebraic categories (Set, Grp, Ab, R-Mod) are both.'
                },
                {
                    id: 'ch19-ex17',
                    type: 'short-answer',
                    question: 'The limit over the empty diagram (empty index category) is called the ___ object. (One word)',
                    answer: 'terminal',
                    explanation: 'When the index category is empty, a cone is just an object (with no morphisms to specify). The universal such object is one that every other object maps to uniquely, which is the terminal object.'
                },
                {
                    id: 'ch19-ex18',
                    type: 'multiple-choice',
                    question: 'A category has all small limits if and only if it has:',
                    options: [
                        'All products and all coproducts',
                        'All products and all equalizers',
                        'All pullbacks and a terminal object',
                        'Both (b) and (c) are correct'
                    ],
                    answer: 3,
                    explanation: 'A category has all small limits if and only if it has all products and all equalizers. Equivalently, it suffices to have all pullbacks and a terminal object. Both characterizations are standard results.'
                }
            ]
        }
    ]
});
