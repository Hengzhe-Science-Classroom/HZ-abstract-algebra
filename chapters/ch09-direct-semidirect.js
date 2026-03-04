window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch09',
    number: 9,
    title: 'Direct and Semidirect Products',
    subtitle: 'Direct products, recognition theorem, semidirect products, extensions',
    sections: [
        // ============================================================
        // SECTION 1: Direct Products
        // ============================================================
        {
            id: 'ch09-sec01',
            title: 'Direct Products',
            content: `
<h2>1 &mdash; Direct Products</h2>

<p>Given two groups \\(G\\) and \\(H\\), we can build a new, larger group by pairing their elements. This construction, the <strong>external direct product</strong>, is one of the most fundamental ways to combine groups.</p>

<h3>1.1 Definition</h3>

<div class="definition">
<strong>Definition 1.1 (External Direct Product).</strong> Let \\((G, \\cdot)\\) and \\((H, \\ast)\\) be groups. The <strong>external direct product</strong> \\(G \\times H\\) is the set of ordered pairs
\\[G \\times H = \\{(g, h) \\mid g \\in G,\\; h \\in H\\}\\]
equipped with componentwise multiplication:
\\[(g_1, h_1)(g_2, h_2) = (g_1 \\cdot g_2,\\; h_1 \\ast h_2).\\]
</div>

<h3>1.2 Verification of Group Axioms</h3>

<p>We check \\(G \\times H\\) is indeed a group:</p>
<ul>
<li><strong>Closure:</strong> If \\(g_1, g_2 \\in G\\) and \\(h_1, h_2 \\in H\\), then \\(g_1 g_2 \\in G\\) and \\(h_1 h_2 \\in H\\), so \\((g_1 g_2, h_1 h_2) \\in G \\times H\\).</li>
<li><strong>Associativity:</strong> Follows from associativity in each component.</li>
<li><strong>Identity:</strong> \\((e_G, e_H)\\), where \\(e_G\\) and \\(e_H\\) are the identities of \\(G\\) and \\(H\\).</li>
<li><strong>Inverses:</strong> \\((g, h)^{-1} = (g^{-1}, h^{-1})\\).</li>
</ul>

<h3>1.3 Order Formula</h3>

<div class="theorem">
<strong>Proposition 1.2.</strong> If \\(G\\) and \\(H\\) are finite, then \\(|G \\times H| = |G| \\cdot |H|\\).
</div>

<p>More precisely, the order of an element \\((g, h)\\) in \\(G \\times H\\) is</p>
\\[\\operatorname{ord}(g, h) = \\operatorname{lcm}(\\operatorname{ord}(g),\\, \\operatorname{ord}(h)).\\]

<div class="example">
<strong>Example 1.3.</strong> Consider \\(\\mathbb{Z}_2 \\times \\mathbb{Z}_3\\). This group has \\(2 \\cdot 3 = 6\\) elements. Since \\(\\gcd(2, 3) = 1\\), the element \\((1, 1)\\) has order \\(\\operatorname{lcm}(2, 3) = 6\\), so \\(\\mathbb{Z}_2 \\times \\mathbb{Z}_3 \\cong \\mathbb{Z}_6\\).
</div>

<div class="example">
<strong>Example 1.4.</strong> In contrast, \\(\\mathbb{Z}_2 \\times \\mathbb{Z}_2\\) has four elements, each of order at most 2. This is the <strong>Klein four-group</strong> \\(V_4\\), which is not cyclic and hence \\(V_4 \\not\\cong \\mathbb{Z}_4\\).
</div>

<h3>1.4 When is a Direct Product Cyclic?</h3>

<div class="theorem">
<strong>Theorem 1.5.</strong> \\(\\mathbb{Z}_m \\times \\mathbb{Z}_n\\) is cyclic if and only if \\(\\gcd(m, n) = 1\\). In that case, \\(\\mathbb{Z}_m \\times \\mathbb{Z}_n \\cong \\mathbb{Z}_{mn}\\).
</div>

<p>This generalizes: \\(\\mathbb{Z}_{n_1} \\times \\cdots \\times \\mathbb{Z}_{n_k} \\cong \\mathbb{Z}_{n_1 \\cdots n_k}\\) if and only if the \\(n_i\\) are pairwise coprime.</p>

<h3>1.5 Projection and Embedding</h3>

<p>Two natural families of homomorphisms connect \\(G \\times H\\) to its factors:</p>
<ul>
<li><strong>Projections:</strong> \\(\\pi_1: G \\times H \\to G\\) given by \\(\\pi_1(g, h) = g\\), and \\(\\pi_2: G \\times H \\to H\\) given by \\(\\pi_2(g, h) = h\\). Both are surjective homomorphisms.</li>
<li><strong>Embeddings:</strong> \\(\\iota_1: G \\to G \\times H\\) given by \\(\\iota_1(g) = (g, e_H)\\), and \\(\\iota_2: H \\to G \\times H\\) given by \\(\\iota_2(h) = (e_G, h)\\). Both are injective homomorphisms.</li>
</ul>

<p>The images \\(\\bar{G} = \\iota_1(G) = G \\times \\{e_H\\}\\) and \\(\\bar{H} = \\iota_2(H) = \\{e_G\\} \\times H\\) are normal subgroups of \\(G \\times H\\). Moreover, \\(\\bar{G} \\cap \\bar{H} = \\{(e_G, e_H)\\}\\) and every element of \\(\\bar{G}\\) commutes with every element of \\(\\bar{H}\\).</p>

<h3>1.6 Subgroup Structure of Direct Products</h3>

<div class="theorem">
<strong>Proposition 1.6 (Goursat's Lemma, simplified).</strong> Not every subgroup of \\(G \\times H\\) is of the form \\(A \\times B\\) for subgroups \\(A \\leq G\\), \\(B \\leq H\\). However, the <em>normal</em> subgroups of \\(G \\times H\\) have a particularly nice description when \\(G\\) and \\(H\\) have no common quotient: in that case every normal subgroup is a product \\(N_1 \\times N_2\\) with \\(N_1 \\trianglelefteq G\\) and \\(N_2 \\trianglelefteq H\\).
</div>

<div class="example">
<strong>Example 1.7.</strong> In \\(\\mathbb{Z}_2 \\times \\mathbb{Z}_2\\), the "diagonal" subgroup \\(D = \\{(0,0), (1,1)\\}\\) is a subgroup of order 2. It is <em>not</em> of the form \\(A \\times B\\), since the only subgroups of \\(\\mathbb{Z}_2\\) are \\(\\{0\\}\\) and \\(\\mathbb{Z}_2\\), and none of the four products \\(\\{0\\} \\times \\{0\\}\\), \\(\\{0\\} \\times \\mathbb{Z}_2\\), \\(\\mathbb{Z}_2 \\times \\{0\\}\\), \\(\\mathbb{Z}_2 \\times \\mathbb{Z}_2\\) equals \\(D\\).
</div>

<h3>1.7 Direct Products of More Than Two Groups</h3>

<p>The construction generalizes in the obvious way. Given groups \\(G_1, G_2, \\ldots, G_n\\), we define</p>
\\[G_1 \\times G_2 \\times \\cdots \\times G_n = \\{(g_1, g_2, \\ldots, g_n) \\mid g_i \\in G_i\\}\\]
<p>with componentwise multiplication. The order formula becomes</p>
\\[|G_1 \\times \\cdots \\times G_n| = |G_1| \\cdot |G_2| \\cdots |G_n|\\]
<p>and the element order formula becomes</p>
\\[\\operatorname{ord}(g_1, \\ldots, g_n) = \\operatorname{lcm}(\\operatorname{ord}(g_1), \\ldots, \\operatorname{ord}(g_n)).\\]

<div class="example">
<strong>Example 1.8.</strong> The group \\(\\mathbb{Z}_2 \\times \\mathbb{Z}_2 \\times \\mathbb{Z}_2\\) has 8 elements, each of order at most 2. It is abelian but not cyclic. Every nonidentity element has order 2, so this group has 7 elements of order 2 (plus the identity). This is the <strong>elementary abelian group</strong> \\(E_8\\).
</div>

<div class="example">
<strong>Example 1.9.</strong> By the Chinese Remainder Theorem, \\(\\mathbb{Z}_{30} \\cong \\mathbb{Z}_2 \\times \\mathbb{Z}_3 \\times \\mathbb{Z}_5\\) since \\(30 = 2 \\cdot 3 \\cdot 5\\) and the factors are pairwise coprime. The element \\((1, 1, 1)\\) generates the entire product with order \\(\\operatorname{lcm}(2, 3, 5) = 30\\).
</div>

<h3>1.8 Center and Commutator of Direct Products</h3>

<div class="theorem">
<strong>Proposition 1.10.</strong> For any groups \\(G\\) and \\(H\\):
<ol>
<li>\\(Z(G \\times H) = Z(G) \\times Z(H)\\).</li>
<li>\\([G \\times H, G \\times H] = [G, G] \\times [H, H]\\).</li>
</ol>
</div>

<p>This means the center and commutator subgroup behave "componentwise" under direct products, which is a powerful computational tool.</p>

<div class="viz-placeholder" data-viz="viz-direct-product-table"></div>

<div class="viz-placeholder" data-viz="viz-direct-product-lattice"></div>
`,
            visualizations: [
                {
                    id: 'viz-direct-product-table',
                    title: 'Direct Product Cayley Table',
                    description: 'Choose two cyclic groups and see the Cayley table of their direct product. Colors encode element orders.',
                    setup: function(container, controls) {
                        var canvas = document.createElement('canvas');
                        var W = Math.min(container.clientWidth || 560, 560);
                        var H = 420;
                        var dpr = window.devicePixelRatio || 1;
                        canvas.width = W * dpr; canvas.height = H * dpr;
                        canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
                        var ctx = canvas.getContext('2d');
                        ctx.scale(dpr, dpr);
                        container.appendChild(canvas);

                        var m = 2, n = 3;
                        var colors = ['#58a6ff','#3fb950','#f0883e','#bc8cff','#f85149','#d29922','#f778ba','#3fb9a0'];

                        function gcd(a, b) { while (b) { var t = b; b = a % b; a = t; } return a; }
                        function lcm(a, b) { return a * b / gcd(a, b); }

                        function draw() {
                            ctx.fillStyle = '#0c0c20';
                            ctx.fillRect(0, 0, W, H);
                            var elems = [];
                            for (var i = 0; i < m; i++) {
                                for (var j = 0; j < n; j++) {
                                    elems.push([i, j]);
                                }
                            }
                            var sz = elems.length;
                            var cellSize = Math.min(Math.floor((W - 60) / (sz + 1)), Math.floor((H - 60) / (sz + 1)), 36);
                            var ox = 30, oy = 30;

                            ctx.font = Math.min(cellSize - 4, 13) + 'px monospace';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';

                            // Header row and column
                            for (var i = 0; i < sz; i++) {
                                var label = '(' + elems[i][0] + ',' + elems[i][1] + ')';
                                ctx.fillStyle = '#8b949e';
                                ctx.fillText(label, ox + (i + 1.5) * cellSize, oy + cellSize * 0.5);
                                ctx.fillText(label, ox + cellSize * 0.5, oy + (i + 1.5) * cellSize);
                            }

                            // Table cells
                            for (var r = 0; r < sz; r++) {
                                for (var c = 0; c < sz; c++) {
                                    var prodA = (elems[r][0] + elems[c][0]) % m;
                                    var prodB = (elems[r][1] + elems[c][1]) % n;
                                    var ord = lcm(prodA === 0 ? 1 : m / gcd(prodA, m), prodB === 0 ? 1 : n / gcd(prodB, n));
                                    if (prodA === 0 && prodB === 0) ord = 1;
                                    var ci = (ord - 1) % colors.length;
                                    var cx = ox + (c + 1) * cellSize;
                                    var cy = oy + (r + 1) * cellSize;
                                    ctx.fillStyle = colors[ci] + '33';
                                    ctx.fillRect(cx, cy, cellSize, cellSize);
                                    ctx.strokeStyle = '#1a1a40';
                                    ctx.lineWidth = 0.5;
                                    ctx.strokeRect(cx, cy, cellSize, cellSize);
                                    ctx.fillStyle = colors[ci];
                                    ctx.fillText('(' + prodA + ',' + prodB + ')', cx + cellSize / 2, cy + cellSize / 2);
                                }
                            }

                            ctx.fillStyle = '#f0f6fc';
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Z' + m + ' x Z' + n + '  (order ' + (m * n) + ', cyclic: ' + (gcd(m, n) === 1 ? 'yes' : 'no') + ')', ox, H - 10);
                        }

                        draw();
                        VizEngine.createSlider(container, 'm', 2, 6, m, 1, function(v) { m = Math.round(v); draw(); });
                        VizEngine.createSlider(container, 'n', 2, 6, n, 1, function(v) { n = Math.round(v); draw(); });

                        return { stopAnimation: function() {} };
                    }
                },
                {
                    id: 'viz-direct-product-lattice',
                    title: 'Element Orders in Direct Products',
                    description: 'Visualize element orders in Z_m x Z_n. Each dot represents an element; its vertical position and color encode its order.',
                    setup: function(container) {
                        var viz = new VizEngine(container, { scale: 40, originX: 60, originY: 350 });
                        var m = 3, n = 4;

                        function gcd(a, b) { while (b) { var t = b; b = a % b; a = t; } return a; }
                        function lcm(a, b) { return a * b / gcd(a, b); }
                        function elemOrd(a, mod) { if (a === 0) return 1; return mod / gcd(a, mod); }
                        var orderColors = ['#58a6ff','#3fb950','#f0883e','#bc8cff','#f85149','#d29922','#f778ba','#3fb9a0'];

                        function draw() {
                            viz.clear();
                            var elems = [];
                            for (var i = 0; i < m; i++) {
                                for (var j = 0; j < n; j++) {
                                    var o = lcm(elemOrd(i, m), elemOrd(j, n));
                                    elems.push({ a: i, b: j, ord: o });
                                }
                            }
                            var maxOrd = 0;
                            for (var k = 0; k < elems.length; k++) { if (elems[k].ord > maxOrd) maxOrd = elems[k].ord; }

                            var spacing = Math.min(40, (viz.width - 120) / (elems.length));
                            for (var k = 0; k < elems.length; k++) {
                                var e = elems[k];
                                var px = 60 + k * spacing;
                                var py = viz.height - 50 - (e.ord / maxOrd) * (viz.height - 100);
                                var ci = (e.ord - 1) % orderColors.length;
                                viz.ctx.fillStyle = orderColors[ci];
                                viz.ctx.beginPath();
                                viz.ctx.arc(px, py, 6, 0, Math.PI * 2);
                                viz.ctx.fill();
                                viz.ctx.fillStyle = '#8b949e';
                                viz.ctx.font = '9px monospace';
                                viz.ctx.textAlign = 'center';
                                viz.ctx.fillText('(' + e.a + ',' + e.b + ')', px, py + 16);
                            }
                            // Y-axis label
                            viz.ctx.save();
                            viz.ctx.translate(15, viz.height / 2);
                            viz.ctx.rotate(-Math.PI / 2);
                            viz.ctx.fillStyle = '#8b949e';
                            viz.ctx.font = '12px -apple-system,sans-serif';
                            viz.ctx.textAlign = 'center';
                            viz.ctx.fillText('order', 0, 0);
                            viz.ctx.restore();
                            // Scale markers
                            for (var o = 1; o <= maxOrd; o++) {
                                var yy = viz.height - 50 - (o / maxOrd) * (viz.height - 100);
                                viz.ctx.fillStyle = '#4a4a7a';
                                viz.ctx.font = '10px monospace';
                                viz.ctx.textAlign = 'right';
                                viz.ctx.fillText(o, 45, yy + 3);
                                viz.ctx.strokeStyle = '#1a1a40';
                                viz.ctx.lineWidth = 0.5;
                                viz.ctx.beginPath(); viz.ctx.moveTo(50, yy); viz.ctx.lineTo(viz.width - 20, yy); viz.ctx.stroke();
                            }
                            viz.ctx.fillStyle = '#f0f6fc';
                            viz.ctx.font = '13px -apple-system,sans-serif';
                            viz.ctx.textAlign = 'left';
                            viz.ctx.fillText('Z' + m + ' x Z' + n, 60, 20);
                        }
                        draw();
                        VizEngine.createSlider(container, 'm', 2, 8, m, 1, function(v) { m = Math.round(v); draw(); });
                        VizEngine.createSlider(container, 'n', 2, 8, n, 1, function(v) { n = Math.round(v); draw(); });
                        return viz;
                    }
                }
            ],
            exercises: [
                {
                    question: 'List all elements of \\(\\mathbb{Z}_2 \\times \\mathbb{Z}_2\\) and compute the order of each. Is this group cyclic?',
                    hint: 'There are four elements: \\((0,0), (0,1), (1,0), (1,1)\\). Compute how many times you must add each to itself to reach \\((0,0)\\).',
                    solution: 'The elements are \\((0,0), (0,1), (1,0), (1,1)\\). Orders: \\(\\operatorname{ord}(0,0)=1\\), \\(\\operatorname{ord}(0,1)=2\\), \\(\\operatorname{ord}(1,0)=2\\), \\(\\operatorname{ord}(1,1)=2\\). Since no element has order 4, the group is not cyclic.'
                },
                {
                    question: 'Show that \\(\\mathbb{Z}_6 \\cong \\mathbb{Z}_2 \\times \\mathbb{Z}_3\\) by exhibiting an explicit isomorphism.',
                    hint: 'Map a generator of \\(\\mathbb{Z}_6\\) to a generator of \\(\\mathbb{Z}_2 \\times \\mathbb{Z}_3\\).',
                    solution: 'Define \\(\\varphi: \\mathbb{Z}_6 \\to \\mathbb{Z}_2 \\times \\mathbb{Z}_3\\) by \\(\\varphi(k) = (k \\bmod 2,\\; k \\bmod 3)\\). Then \\(\\varphi(1) = (1,1)\\) which has order \\(\\operatorname{lcm}(2,3) = 6\\), so \\(\\varphi\\) maps the generator to a generator. Since both groups have order 6 and are cyclic, \\(\\varphi\\) is an isomorphism.'
                },
                {
                    question: 'Find the order of \\((2, 3)\\) in \\(\\mathbb{Z}_4 \\times \\mathbb{Z}_5\\).',
                    hint: 'Use the formula \\(\\operatorname{ord}(a, b) = \\operatorname{lcm}(\\operatorname{ord}(a), \\operatorname{ord}(b))\\).',
                    solution: 'In \\(\\mathbb{Z}_4\\), \\(\\operatorname{ord}(2) = 2\\). In \\(\\mathbb{Z}_5\\), \\(\\operatorname{ord}(3) = \\) ? We compute: \\(3, 6 \\equiv 1, \\ldots\\) Wait: \\(3^1 = 3\\), \\(3 \\cdot 2 = 6 \\equiv 1 \\pmod{5}\\). So \\(\\operatorname{ord}(3) = \\) ... Actually in additive notation: \\(1 \\cdot 3 = 3\\), \\(2 \\cdot 3 = 6 \\equiv 1\\), \\(3 \\cdot 3 = 9 \\equiv 4\\), \\(4 \\cdot 3 = 12 \\equiv 2\\), \\(5 \\cdot 3 = 15 \\equiv 0\\). So \\(\\operatorname{ord}(3) = 5\\). Therefore \\(\\operatorname{ord}(2,3) = \\operatorname{lcm}(2, 5) = 10\\).'
                },
                {
                    question: 'Prove that \\(\\mathbb{Z}_2 \\times \\mathbb{Z}_6 \\not\\cong \\mathbb{Z}_4 \\times \\mathbb{Z}_3\\).',
                    hint: 'Compare the maximal orders of elements in each group.',
                    solution: 'In \\(\\mathbb{Z}_2 \\times \\mathbb{Z}_6\\), the maximal element order is \\(\\operatorname{lcm}(2, 6) = 6\\). In \\(\\mathbb{Z}_4 \\times \\mathbb{Z}_3\\), the element \\((1,1)\\) has order \\(\\operatorname{lcm}(4,3) = 12\\). Since \\(\\mathbb{Z}_4 \\times \\mathbb{Z}_3\\) has an element of order 12 but \\(\\mathbb{Z}_2 \\times \\mathbb{Z}_6\\) does not, the groups cannot be isomorphic.'
                }
            ]
        },
        // ============================================================
        // SECTION 2: Internal Direct Products
        // ============================================================
        {
            id: 'ch09-sec02',
            title: 'Internal Direct Products',
            content: `
<h2>2 &mdash; Internal Direct Products</h2>

<p>Sometimes a group \\(G\\) that we already have in hand turns out to be "secretly" a direct product of two of its own subgroups. The <strong>recognition theorem</strong> tells us exactly when this happens.</p>

<h3>2.1 Definition</h3>

<div class="definition">
<strong>Definition 2.1 (Internal Direct Product).</strong> Let \\(G\\) be a group with normal subgroups \\(N\\) and \\(K\\). We say \\(G\\) is the <strong>internal direct product</strong> of \\(N\\) and \\(K\\), and write \\(G = N \\times K\\), if the following three conditions hold:
<ol>
<li>\\(N \\trianglelefteq G\\) and \\(K \\trianglelefteq G\\),</li>
<li>\\(N \\cap K = \\{e\\}\\),</li>
<li>\\(NK = G\\), i.e., every \\(g \\in G\\) can be written as \\(g = nk\\) for some \\(n \\in N\\), \\(k \\in K\\).</li>
</ol>
</div>

<h3>2.2 The Recognition Theorem</h3>

<div class="theorem">
<strong>Theorem 2.2 (Recognition Theorem for Direct Products).</strong> If \\(G = N \\times K\\) is an internal direct product, then the map
\\[\\varphi: N \\times K \\to G, \\quad \\varphi(n, k) = nk\\]
is an isomorphism from the external direct product \\(N \\times K\\) to \\(G\\).
</div>

<p><em>Proof sketch.</em> The key observation is that elements of \\(N\\) and \\(K\\) commute: if \\(n \\in N\\) and \\(k \\in K\\), consider the commutator \\([n, k] = nkn^{-1}k^{-1}\\). Since \\(N\\) is normal, \\(kn^{-1}k^{-1} \\in N\\), so \\([n,k] = n(kn^{-1}k^{-1}) \\in N\\). Similarly, since \\(K\\) is normal, \\(nkn^{-1} \\in K\\), so \\([n,k] = (nkn^{-1})k^{-1} \\in K\\). Thus \\([n,k] \\in N \\cap K = \\{e\\}\\), giving \\(nk = kn\\).</p>

<p>With commutativity established, \\(\\varphi\\) is a homomorphism: \\(\\varphi(n_1 n_2, k_1 k_2) = n_1 n_2 k_1 k_2 = n_1 k_1 n_2 k_2 = \\varphi(n_1, k_1) \\varphi(n_2, k_2)\\). Surjectivity follows from \\(G = NK\\), and injectivity from \\(N \\cap K = \\{e\\}\\).</p>

<h3>2.3 Examples</h3>

<div class="example">
<strong>Example 2.3.</strong> In \\(\\mathbb{Z}_6\\), let \\(N = \\langle 3 \\rangle = \\{0, 3\\} \\cong \\mathbb{Z}_2\\) and \\(K = \\langle 2 \\rangle = \\{0, 2, 4\\} \\cong \\mathbb{Z}_3\\). Then \\(N \\cap K = \\{0\\}\\), \\(|NK| = |N||K|/|N \\cap K| = 6 = |\\mathbb{Z}_6|\\), and both are normal (since \\(\\mathbb{Z}_6\\) is abelian). So \\(\\mathbb{Z}_6 = N \\times K \\cong \\mathbb{Z}_2 \\times \\mathbb{Z}_3\\).
</div>

<div class="example">
<strong>Example 2.4.</strong> The group \\(\\mathbb{Z}_4\\) is <em>not</em> an internal direct product of proper subgroups. Its only proper nontrivial subgroup is \\(\\langle 2 \\rangle = \\{0, 2\\}\\), and we need two subgroups whose product gives the whole group.
</div>

<h3>2.4 Multiple Factors</h3>

<p>The theorem generalizes. A group \\(G\\) is the internal direct product of normal subgroups \\(N_1, \\ldots, N_k\\) if:</p>
<ol>
<li>Each \\(N_i \\trianglelefteq G\\),</li>
<li>\\(G = N_1 N_2 \\cdots N_k\\),</li>
<li>\\(N_i \\cap (N_1 \\cdots N_{i-1} N_{i+1} \\cdots N_k) = \\{e\\}\\) for each \\(i\\).</li>
</ol>

<p>Then \\(G \\cong N_1 \\times N_2 \\times \\cdots \\times N_k\\).</p>

<div class="viz-placeholder" data-viz="viz-internal-recognition"></div>
`,
            visualizations: [
                {
                    id: 'viz-internal-recognition',
                    title: 'Internal Direct Product Checker',
                    description: 'For Z_n, pick two subgroups and check whether Z_n is their internal direct product. The three conditions are verified visually.',
                    setup: function(container) {
                        var canvas = document.createElement('canvas');
                        var W = Math.min(container.clientWidth || 560, 560);
                        var H2 = 380;
                        var dpr = window.devicePixelRatio || 1;
                        canvas.width = W * dpr; canvas.height = H2 * dpr;
                        canvas.style.width = W + 'px'; canvas.style.height = H2 + 'px';
                        var ctx = canvas.getContext('2d');
                        ctx.scale(dpr, dpr);
                        container.appendChild(canvas);

                        var nVal = 12, d1 = 2, d2 = 3;

                        function gcd(a, b) { while (b) { var t = b; b = a % b; a = t; } return a; }

                        function draw() {
                            ctx.fillStyle = '#0c0c20';
                            ctx.fillRect(0, 0, W, H2);

                            var subN = []; // subgroup generated by d1
                            for (var i = 0; i < nVal; i++) { if ((i * d1) % nVal === 0 && i > 0) { break; } }
                            var ordD1 = nVal / gcd(d1, nVal);
                            for (var j = 0; j < ordD1; j++) { subN.push((d1 * j) % nVal); }
                            subN.sort(function(a, b) { return a - b; });

                            var ordD2 = nVal / gcd(d2, nVal);
                            var subK = [];
                            for (var j = 0; j < ordD2; j++) { subK.push((d2 * j) % nVal); }
                            subK.sort(function(a, b) { return a - b; });

                            // Intersection
                            var inter = [];
                            for (var j = 0; j < subN.length; j++) {
                                if (subK.indexOf(subN[j]) >= 0) inter.push(subN[j]);
                            }

                            // Product set NK
                            var prodSet = {};
                            for (var j = 0; j < subN.length; j++) {
                                for (var k = 0; k < subK.length; k++) {
                                    prodSet[(subN[j] + subK[k]) % nVal] = true;
                                }
                            }
                            var prodSize = Object.keys(prodSet).length;

                            var cond1 = true; // always normal in abelian group
                            var cond2 = (inter.length === 1 && inter[0] === 0);
                            var cond3 = (prodSize === nVal);
                            var isDP = cond1 && cond2 && cond3;

                            // Draw elements on a circle
                            var cx = W / 2, cy = 160, R = 110;
                            for (var j = 0; j < nVal; j++) {
                                var angle = -Math.PI / 2 + (2 * Math.PI * j) / nVal;
                                var px = cx + R * Math.cos(angle);
                                var py = cy + R * Math.sin(angle);
                                var inN = subN.indexOf(j) >= 0;
                                var inK = subK.indexOf(j) >= 0;
                                var col = '#4a4a7a';
                                if (inN && inK) col = '#f0883e';
                                else if (inN) col = '#58a6ff';
                                else if (inK) col = '#3fb950';
                                ctx.beginPath();
                                ctx.arc(px, py, 14, 0, Math.PI * 2);
                                ctx.fillStyle = col + '44';
                                ctx.fill();
                                ctx.strokeStyle = col;
                                ctx.lineWidth = 2;
                                ctx.stroke();
                                ctx.fillStyle = col;
                                ctx.font = '12px monospace';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(j, px, py);
                            }

                            // Legend and conditions
                            var ly = 295;
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = '#58a6ff'; ctx.fillText('N = <' + d1 + '> = {' + subN.join(',') + '}  (|N|=' + subN.length + ')', 20, ly);
                            ctx.fillStyle = '#3fb950'; ctx.fillText('K = <' + d2 + '> = {' + subK.join(',') + '}  (|K|=' + subK.length + ')', 20, ly + 18);
                            ctx.fillStyle = '#f0883e'; ctx.fillText('N ∩ K = {' + inter.join(',') + '}', 20, ly + 36);

                            ctx.fillStyle = cond1 ? '#3fb950' : '#f85149';
                            ctx.fillText((cond1 ? '\u2713' : '\u2717') + ' Both normal (Z_' + nVal + ' is abelian)', 20, ly + 58);
                            ctx.fillStyle = cond2 ? '#3fb950' : '#f85149';
                            ctx.fillText((cond2 ? '\u2713' : '\u2717') + ' N ∩ K = {0}', 20, ly + 74);
                            ctx.fillStyle = cond3 ? '#3fb950' : '#f85149';
                            ctx.fillText((cond3 ? '\u2713' : '\u2717') + ' NK = Z_' + nVal + '  (|NK|=' + prodSize + ')', 20, ly + 90);

                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillStyle = isDP ? '#3fb950' : '#f85149';
                            ctx.fillText(isDP ? 'Z_' + nVal + ' = N x K  (internal direct product)' : 'NOT an internal direct product', 20, ly + 115);
                        }
                        draw();
                        VizEngine.createSlider(container, 'n', 4, 30, nVal, 1, function(v) { nVal = Math.round(v); d1 = Math.min(d1, nVal - 1); d2 = Math.min(d2, nVal - 1); draw(); });
                        VizEngine.createSlider(container, 'generator of N', 1, 29, d1, 1, function(v) { d1 = Math.round(v) % nVal; draw(); });
                        VizEngine.createSlider(container, 'generator of K', 1, 29, d2, 1, function(v) { d2 = Math.round(v) % nVal; draw(); });

                        return { stopAnimation: function() {} };
                    }
                }
            ],
            exercises: [
                {
                    question: 'In \\(\\mathbb{Z}_{15}\\), find subgroups \\(N\\) and \\(K\\) such that \\(\\mathbb{Z}_{15}\\) is the internal direct product of \\(N\\) and \\(K\\).',
                    hint: 'Since \\(15 = 3 \\cdot 5\\), look for subgroups of order 3 and order 5.',
                    solution: 'Take \\(N = \\langle 5 \\rangle = \\{0, 5, 10\\} \\cong \\mathbb{Z}_3\\) and \\(K = \\langle 3 \\rangle = \\{0, 3, 6, 9, 12\\} \\cong \\mathbb{Z}_5\\). Then \\(N \\cap K = \\{0\\}\\), \\(|NK| = 3 \\cdot 5 / 1 = 15\\), and both are normal. So \\(\\mathbb{Z}_{15} = N \\times K \\cong \\mathbb{Z}_3 \\times \\mathbb{Z}_5\\).'
                },
                {
                    question: 'Explain why \\(\\mathbb{Z}_4\\) cannot be written as an internal direct product of two proper nontrivial subgroups.',
                    hint: 'What are the subgroups of \\(\\mathbb{Z}_4\\)?',
                    solution: 'The subgroups of \\(\\mathbb{Z}_4\\) are \\(\\{0\\}\\), \\(\\{0, 2\\}\\), and \\(\\mathbb{Z}_4\\). The only proper nontrivial subgroup is \\(H = \\{0, 2\\}\\). For an internal direct product we need two such subgroups \\(N, K\\) with \\(N \\cap K = \\{0\\}\\) and \\(|NK| = 4\\). But the only candidate is \\(N = K = \\{0, 2\\}\\), giving \\(N \\cap K = \\{0, 2\\} \\neq \\{0\\}\\). So no decomposition is possible.'
                },
                {
                    question: 'Prove that if \\(G = N \\times K\\) is an internal direct product with \\(N, K \\trianglelefteq G\\), then \\(nk = kn\\) for all \\(n \\in N\\) and \\(k \\in K\\).',
                    hint: 'Consider the commutator \\([n, k] = nkn^{-1}k^{-1}\\) and show it lies in both \\(N\\) and \\(K\\).',
                    solution: 'Write \\(c = nkn^{-1}k^{-1}\\). Since \\(K \\trianglelefteq G\\), we have \\(nkn^{-1} \\in K\\), so \\(c = (nkn^{-1})k^{-1} \\in K\\). Since \\(N \\trianglelefteq G\\), we have \\(kn^{-1}k^{-1} \\in N\\), so \\(c = n(kn^{-1}k^{-1}) \\in N\\). Thus \\(c \\in N \\cap K = \\{e\\}\\), giving \\(nkn^{-1}k^{-1} = e\\), i.e., \\(nk = kn\\).'
                }
            ]
        },
        // ============================================================
        // SECTION 3: Semidirect Products
        // ============================================================
        {
            id: 'ch09-sec03',
            title: 'Semidirect Products',
            content: `
<h2>3 &mdash; Semidirect Products</h2>

<p>In a direct product \\(N \\times K\\), both factors are normal. What if we relax this, requiring only \\(N\\) to be normal while allowing \\(K\\) to act on \\(N\\) by conjugation in a nontrivial way? This leads to the <strong>semidirect product</strong>, a far richer construction.</p>

<h3>3.1 Motivation</h3>

<p>Consider the symmetric group \\(S_3\\). It has a normal subgroup \\(N = A_3 \\cong \\mathbb{Z}_3\\) and a subgroup \\(K = \\{e, (12)\\} \\cong \\mathbb{Z}_2\\). We have \\(N \\cap K = \\{e\\}\\) and \\(NK = S_3\\). But \\(K\\) is <em>not</em> normal in \\(S_3\\), and \\(S_3\\) is not a direct product. The multiplication "twists": \\(K\\) acts on \\(N\\) by conjugation, sending \\((123)\\) to \\((132)\\).</p>

<h3>3.2 The External Definition</h3>

<div class="definition">
<strong>Definition 3.1 (Semidirect Product).</strong> Let \\(N\\) and \\(K\\) be groups and let \\(\\varphi: K \\to \\operatorname{Aut}(N)\\) be a homomorphism. The <strong>semidirect product</strong> \\(N \\rtimes_\\varphi K\\) is the set \\(N \\times K\\) with multiplication
\\[(n_1, k_1)(n_2, k_2) = (n_1 \\cdot \\varphi(k_1)(n_2),\\; k_1 k_2).\\]
</div>

<p>Notice that when \\(\\varphi\\) is the trivial homomorphism (every \\(k\\) maps to \\(\\operatorname{id}_N\\)), we recover the direct product. The map \\(\\varphi\\) controls how \\(K\\) "twists" the normal factor \\(N\\).</p>

<h3>3.3 Verification of Group Axioms</h3>

<ul>
<li><strong>Identity:</strong> \\((e_N, e_K)\\). Check: \\((e_N, e_K)(n, k) = (e_N \\cdot \\varphi(e_K)(n), e_K k) = (n, k)\\).</li>
<li><strong>Inverse:</strong> \\((n, k)^{-1} = (\\varphi(k^{-1})(n^{-1}), k^{-1})\\).</li>
<li><strong>Associativity:</strong> Follows from \\(\\varphi\\) being a homomorphism into \\(\\operatorname{Aut}(N)\\).</li>
</ul>

<h3>3.4 The Internal Viewpoint</h3>

<div class="theorem">
<strong>Theorem 3.2 (Recognition Theorem for Semidirect Products).</strong> Let \\(G\\) be a group with subgroups \\(N\\) and \\(K\\) such that:
<ol>
<li>\\(N \\trianglelefteq G\\),</li>
<li>\\(N \\cap K = \\{e\\}\\),</li>
<li>\\(NK = G\\).</li>
</ol>
Then \\(G \\cong N \\rtimes_\\varphi K\\) where \\(\\varphi: K \\to \\operatorname{Aut}(N)\\) is defined by \\(\\varphi(k)(n) = knk^{-1}\\).
</div>

<p>Compared to the direct product recognition theorem, we have dropped the requirement that \\(K\\) be normal. The "price" is that the product structure is twisted by the conjugation action.</p>

<h3>3.5 How Different \\(\\varphi\\) Give Different Groups</h3>

<p>For the same pair \\((N, K)\\), different choices of \\(\\varphi: K \\to \\operatorname{Aut}(N)\\) can yield non-isomorphic semidirect products. The study of these choices connects to the cohomology theory of groups (discussed briefly in Section 5).</p>

<div class="example">
<strong>Example 3.3.</strong> Let \\(N = \\mathbb{Z}_3\\) and \\(K = \\mathbb{Z}_2\\). Then \\(\\operatorname{Aut}(\\mathbb{Z}_3) \\cong \\mathbb{Z}_2\\), with the nontrivial automorphism being \\(x \\mapsto -x\\) (i.e., \\(x \\mapsto 2x \\pmod{3}\\)). There are exactly two homomorphisms \\(\\varphi: \\mathbb{Z}_2 \\to \\mathbb{Z}_2\\):
<ul>
<li>\\(\\varphi\\) trivial: yields \\(\\mathbb{Z}_3 \\times \\mathbb{Z}_2 \\cong \\mathbb{Z}_6\\),</li>
<li>\\(\\varphi\\) surjective: yields \\(\\mathbb{Z}_3 \\rtimes \\mathbb{Z}_2 \\cong S_3\\).</li>
</ul>
</div>

<div class="viz-placeholder" data-viz="viz-semidirect-twist"></div>

<div class="viz-placeholder" data-viz="viz-semidirect-table"></div>
`,
            visualizations: [
                {
                    id: 'viz-semidirect-twist',
                    title: 'Semidirect Product: The Twist',
                    description: 'Compare multiplication in the direct product (no twist) vs. the semidirect product (with twist). Watch how the action of K on N changes the result.',
                    setup: function(container) {
                        var canvas = document.createElement('canvas');
                        var W = Math.min(container.clientWidth || 560, 560);
                        var H2 = 340;
                        var dpr = window.devicePixelRatio || 1;
                        canvas.width = W * dpr; canvas.height = H2 * dpr;
                        canvas.style.width = W + 'px'; canvas.style.height = H2 + 'px';
                        var ctx = canvas.getContext('2d');
                        ctx.scale(dpr, dpr);
                        container.appendChild(canvas);

                        // Z_3 semidirect Z_2
                        // phi: 1 -> inversion (x -> 2x mod 3)
                        var elems = [];
                        for (var a = 0; a < 3; a++) {
                            for (var b = 0; b < 2; b++) {
                                elems.push([a, b]);
                            }
                        }

                        function directMult(e1, e2) {
                            return [(e1[0] + e2[0]) % 3, (e1[1] + e2[1]) % 2];
                        }
                        function semiMult(e1, e2) {
                            // (n1,k1)*(n2,k2) = (n1 + phi(k1)(n2), k1+k2)
                            // phi(0)=id, phi(1)=inversion (x->2x mod 3)
                            var twisted_n2 = (e1[1] === 0) ? e2[0] : (2 * e2[0]) % 3;
                            return [(e1[0] + twisted_n2) % 3, (e1[1] + e2[1]) % 2];
                        }

                        var selA = 0, selB = 0;

                        function draw() {
                            ctx.fillStyle = '#0c0c20';
                            ctx.fillRect(0, 0, W, H2);

                            var e1 = elems[selA];
                            var e2 = elems[selB];
                            var dp = directMult(e1, e2);
                            var sp = semiMult(e1, e2);

                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.textAlign = 'center';

                            // Title
                            ctx.fillStyle = '#f0f6fc';
                            ctx.font = 'bold 15px -apple-system,sans-serif';
                            ctx.fillText('Z_3 x Z_2  vs  Z_3 >' + String.fromCharCode(8906) + ' Z_2', W / 2, 25);

                            ctx.font = '14px -apple-system,sans-serif';
                            var lx = W / 4, rx = 3 * W / 4;

                            // Left: direct product
                            ctx.fillStyle = '#58a6ff';
                            ctx.fillText('Direct Product', lx, 55);
                            ctx.fillStyle = '#c9d1d9';
                            ctx.fillText('(' + e1[0] + ',' + e1[1] + ') * (' + e2[0] + ',' + e2[1] + ')', lx, 80);
                            ctx.fillText('= (' + e1[0] + '+' + e2[0] + ' mod 3, ' + e1[1] + '+' + e2[1] + ' mod 2)', lx, 100);
                            ctx.fillStyle = '#58a6ff';
                            ctx.font = 'bold 16px monospace';
                            ctx.fillText('= (' + dp[0] + ', ' + dp[1] + ')', lx, 125);

                            // Right: semidirect product
                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.fillStyle = '#f0883e';
                            ctx.fillText('Semidirect Product', rx, 55);
                            var twistLabel = (e1[1] === 0) ? e2[0] : '2*' + e2[0] + ' mod 3';
                            var twisted = (e1[1] === 0) ? e2[0] : (2 * e2[0]) % 3;
                            ctx.fillStyle = '#c9d1d9';
                            ctx.fillText('(' + e1[0] + ',' + e1[1] + ') * (' + e2[0] + ',' + e2[1] + ')', rx, 80);
                            ctx.fillText('= (' + e1[0] + '+phi(' + e1[1] + ')(' + e2[0] + '), ' + e1[1] + '+' + e2[1] + ' mod 2)', rx, 100);
                            ctx.fillStyle = '#f0883e';
                            ctx.fillText('phi(' + e1[1] + ')(' + e2[0] + ') = ' + twistLabel + ' = ' + twisted, rx, 118);
                            ctx.font = 'bold 16px monospace';
                            ctx.fillText('= (' + sp[0] + ', ' + sp[1] + ')', rx, 145);

                            // Separator
                            ctx.strokeStyle = '#4a4a7a';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 4]);
                            ctx.beginPath(); ctx.moveTo(W / 2, 45); ctx.lineTo(W / 2, 155); ctx.stroke();
                            ctx.setLineDash([]);

                            var same = (dp[0] === sp[0] && dp[1] === sp[1]);
                            ctx.font = '13px -apple-system,sans-serif';
                            ctx.fillStyle = same ? '#3fb950' : '#f85149';
                            ctx.textAlign = 'center';
                            ctx.fillText(same ? 'Same result (no twist effect here)' : 'Different! The twist changed the result.', W / 2, 175);

                            // Draw all 6 elements in two rows
                            ctx.font = '11px monospace';
                            ctx.textAlign = 'center';
                            ctx.fillStyle = '#8b949e';
                            ctx.fillText('Elements of the group (click to select):', W / 2, 200);
                            for (var i = 0; i < 6; i++) {
                                var ex = 60 + i * 80;
                                var ey1 = 225, ey2 = 265;
                                // First operand row
                                ctx.fillStyle = (i === selA) ? '#58a6ff44' : '#1a1a40';
                                ctx.fillRect(ex - 25, ey1 - 12, 50, 24);
                                ctx.strokeStyle = (i === selA) ? '#58a6ff' : '#4a4a7a';
                                ctx.lineWidth = 1;
                                ctx.strokeRect(ex - 25, ey1 - 12, 50, 24);
                                ctx.fillStyle = (i === selA) ? '#58a6ff' : '#c9d1d9';
                                ctx.fillText('(' + elems[i][0] + ',' + elems[i][1] + ')', ex, ey1 + 1);
                                // Second operand row
                                ctx.fillStyle = (i === selB) ? '#f0883e44' : '#1a1a40';
                                ctx.fillRect(ex - 25, ey2 - 12, 50, 24);
                                ctx.strokeStyle = (i === selB) ? '#f0883e' : '#4a4a7a';
                                ctx.strokeRect(ex - 25, ey2 - 12, 50, 24);
                                ctx.fillStyle = (i === selB) ? '#f0883e' : '#c9d1d9';
                                ctx.fillText('(' + elems[i][0] + ',' + elems[i][1] + ')', ex, ey2 + 1);
                            }
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '10px -apple-system,sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('1st operand', 10, 226);
                            ctx.fillText('2nd operand', 10, 266);

                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillStyle = '#8b949e';
                            ctx.textAlign = 'center';
                            ctx.fillText('phi(0) = id,   phi(1) = (x -> 2x mod 3)', W / 2, H2 - 15);
                        }

                        canvas.addEventListener('click', function(ev) {
                            var rect = canvas.getBoundingClientRect();
                            var mx = ev.clientX - rect.left;
                            var my = ev.clientY - rect.top;
                            for (var i = 0; i < 6; i++) {
                                var ex = 60 + i * 80;
                                if (mx >= ex - 25 && mx <= ex + 25) {
                                    if (my >= 213 && my <= 237) { selA = i; draw(); return; }
                                    if (my >= 253 && my <= 277) { selB = i; draw(); return; }
                                }
                            }
                        });

                        draw();
                        return { stopAnimation: function() {} };
                    }
                },
                {
                    id: 'viz-semidirect-table',
                    title: 'Cayley Table: Direct vs. Semidirect',
                    description: 'Side-by-side Cayley tables for Z_3 x Z_2 (direct) and Z_3 >' + String.fromCharCode(8906) + ' Z_2 (semidirect, i.e., S_3).',
                    setup: function(container) {
                        var canvas = document.createElement('canvas');
                        var W = Math.min(container.clientWidth || 560, 560);
                        var H2 = 320;
                        var dpr = window.devicePixelRatio || 1;
                        canvas.width = W * dpr; canvas.height = H2 * dpr;
                        canvas.style.width = W + 'px'; canvas.style.height = H2 + 'px';
                        var ctx = canvas.getContext('2d');
                        ctx.scale(dpr, dpr);
                        container.appendChild(canvas);

                        var elems = [[0,0],[1,0],[2,0],[0,1],[1,1],[2,1]];
                        var labels = ['(0,0)','(1,0)','(2,0)','(0,1)','(1,1)','(2,1)'];
                        var colors = ['#58a6ff','#3fb950','#f0883e','#bc8cff','#f85149','#d29922'];

                        function directM(a, b) {
                            return [(a[0]+b[0])%3, (a[1]+b[1])%2];
                        }
                        function semiM(a, b) {
                            var tw = (a[1]===0) ? b[0] : (2*b[0])%3;
                            return [(a[0]+tw)%3, (a[1]+b[1])%2];
                        }
                        function indexOf(e) {
                            for (var i = 0; i < 6; i++) { if (elems[i][0]===e[0] && elems[i][1]===e[1]) return i; }
                            return 0;
                        }

                        function drawTable(ox, oy, title, multFn) {
                            var cs = 38;
                            ctx.fillStyle = '#f0f6fc';
                            ctx.font = 'bold 12px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(title, ox + (7*cs)/2, oy - 8);

                            ctx.font = '9px monospace';
                            for (var i = 0; i < 6; i++) {
                                ctx.fillStyle = colors[i];
                                ctx.fillText(labels[i], ox + (i+1.5)*cs, oy + cs*0.5);
                                ctx.fillText(labels[i], ox + cs*0.5, oy + (i+1.5)*cs);
                            }
                            for (var r = 0; r < 6; r++) {
                                for (var c = 0; c < 6; c++) {
                                    var prod = multFn(elems[r], elems[c]);
                                    var ci = indexOf(prod);
                                    var px = ox + (c+1)*cs;
                                    var py = oy + (r+1)*cs;
                                    ctx.fillStyle = colors[ci] + '33';
                                    ctx.fillRect(px, py, cs, cs);
                                    ctx.strokeStyle = '#1a1a40';
                                    ctx.lineWidth = 0.5;
                                    ctx.strokeRect(px, py, cs, cs);
                                    ctx.fillStyle = colors[ci];
                                    ctx.fillText(labels[ci], px + cs/2, py + cs/2);
                                }
                            }
                        }

                        ctx.fillStyle = '#0c0c20';
                        ctx.fillRect(0, 0, W, H2);
                        drawTable(5, 30, 'Z3 x Z2 (direct)', directM);
                        drawTable(W/2 + 5, 30, 'Z3 >' + String.fromCharCode(8906) + ' Z2 (semidirect)', semiM);

                        ctx.fillStyle = '#8b949e';
                        ctx.font = '11px -apple-system,sans-serif';
                        ctx.textAlign = 'center';
                        ctx.fillText('Left: abelian (Z6).   Right: non-abelian (S3).', W/2, H2 - 10);

                        return { stopAnimation: function() {} };
                    }
                }
            ],
            exercises: [
                {
                    question: 'Verify that the identity in \\(N \\rtimes_\\varphi K\\) is \\((e_N, e_K)\\) and compute the inverse of \\((n, k)\\).',
                    hint: 'For the inverse, solve \\((n, k)(x, y) = (e_N, e_K)\\) using the multiplication rule.',
                    solution: 'Identity: \\((e_N, e_K)(n, k) = (e_N \\cdot \\varphi(e_K)(n), e_K k) = (e_N \\cdot n, k) = (n, k)\\). For the inverse: \\((n, k)(x, y) = (n \\cdot \\varphi(k)(x), ky) = (e_N, e_K)\\) requires \\(y = k^{-1}\\) and \\(\\varphi(k)(x) = n^{-1}\\), so \\(x = \\varphi(k)^{-1}(n^{-1}) = \\varphi(k^{-1})(n^{-1})\\). Thus \\((n,k)^{-1} = (\\varphi(k^{-1})(n^{-1}), k^{-1})\\).'
                },
                {
                    question: 'Show that \\(\\bar{N} = \\{(n, e_K) \\mid n \\in N\\}\\) is a normal subgroup of \\(N \\rtimes_\\varphi K\\).',
                    hint: 'Conjugate \\((n, e_K)\\) by an arbitrary \\((m, k)\\) and show the result lies in \\(\\bar{N}\\).',
                    solution: 'Compute \\((m, k)(n, e_K)(m, k)^{-1}\\). First, \\((m, k)(n, e_K) = (m \\cdot \\varphi(k)(n), k)\\). Then multiply by \\((\\varphi(k^{-1})(m^{-1}), k^{-1})\\): we get \\((m \\cdot \\varphi(k)(n) \\cdot \\varphi(k)(\\varphi(k^{-1})(m^{-1})), e_K) = (m \\cdot \\varphi(k)(n) \\cdot m^{-1}, e_K)\\). This is of the form \\((\\cdot, e_K) \\in \\bar{N}\\). So \\(\\bar{N} \\trianglelefteq N \\rtimes_\\varphi K\\).'
                },
                {
                    question: 'For \\(N = \\mathbb{Z}_5\\) and \\(K = \\mathbb{Z}_4\\), how many homomorphisms \\(\\varphi: K \\to \\operatorname{Aut}(N)\\) are there? How many non-isomorphic semidirect products does this give?',
                    hint: '\\(\\operatorname{Aut}(\\mathbb{Z}_5) \\cong \\mathbb{Z}_4\\). A homomorphism \\(\\mathbb{Z}_4 \\to \\mathbb{Z}_4\\) is determined by where 1 goes, and that image must divide 4.',
                    solution: '\\(\\operatorname{Aut}(\\mathbb{Z}_5) \\cong \\mathbb{Z}_4\\), with elements \\(\\{\\operatorname{id}, x \\mapsto 2x, x \\mapsto 3x, x \\mapsto 4x\\}\\) of orders 1, 4, 4, 2 respectively. A homomorphism \\(\\varphi: \\mathbb{Z}_4 \\to \\mathbb{Z}_4\\) sends the generator 1 to an element whose order divides 4, so there are 4 choices (0, 1, 2, 3). These give distinct homomorphisms. However, the maps sending 1 to elements of the same order yield isomorphic semidirect products (by an automorphism of \\(K\\)). So the non-isomorphic semidirect products correspond to: (i) trivial (order 1, giving \\(\\mathbb{Z}_{20}\\)), (ii) order 2 (giving the Frobenius group), (iii) order 4 (two choices, but they are conjugate in \\(\\operatorname{Aut}(N)\\), giving one group). Total: 3 non-isomorphic groups.'
                }
            ]
        },
        // ============================================================
        // SECTION 4: Examples of Semidirect Products
        // ============================================================
        {
            id: 'ch09-sec04',
            title: 'Examples of Semidirect Products',
            content: `
<h2>4 &mdash; Examples of Semidirect Products</h2>

<p>The semidirect product construction accounts for a large family of groups. Let us examine the most important examples.</p>

<h3>4.1 Dihedral Groups</h3>

<div class="theorem">
<strong>Proposition 4.1.</strong> The dihedral group \\(D_n\\) (symmetries of a regular \\(n\\)-gon, order \\(2n\\)) is a semidirect product:
\\[D_n \\cong \\mathbb{Z}_n \\rtimes_\\varphi \\mathbb{Z}_2\\]
where \\(\\varphi(1)(x) = -x \\pmod{n}\\), i.e., the nontrivial element of \\(\\mathbb{Z}_2\\) acts on \\(\\mathbb{Z}_n\\) by inversion.
</div>

<p><em>Proof.</em> Let \\(r\\) be rotation by \\(2\\pi/n\\) and \\(s\\) be a reflection. Then \\(N = \\langle r \\rangle \\cong \\mathbb{Z}_n\\) is normal (index 2), \\(K = \\langle s \\rangle \\cong \\mathbb{Z}_2\\), \\(N \\cap K = \\{e\\}\\), and \\(NK = D_n\\). The conjugation action is \\(srs^{-1} = r^{-1}\\), which is the inversion map on \\(\\mathbb{Z}_n\\).</p>

<h3>4.2 Groups of Order pq</h3>

<div class="theorem">
<strong>Theorem 4.2.</strong> Let \\(p\\) and \\(q\\) be primes with \\(p > q\\). Let \\(G\\) be a group of order \\(pq\\).
<ol>
<li>If \\(q \\nmid (p - 1)\\), then \\(G \\cong \\mathbb{Z}_{pq}\\).</li>
<li>If \\(q \\mid (p - 1)\\), then there are exactly two groups of order \\(pq\\) (up to isomorphism): the cyclic group \\(\\mathbb{Z}_{pq}\\) and a non-abelian group \\(\\mathbb{Z}_p \\rtimes \\mathbb{Z}_q\\).</li>
</ol>
</div>

<p><em>Proof sketch.</em> By Sylow, \\(G\\) has a unique (hence normal) Sylow \\(p\\)-subgroup \\(N \\cong \\mathbb{Z}_p\\). Let \\(K\\) be any Sylow \\(q\\)-subgroup. Then \\(N \\cap K = \\{e\\}\\) (order reasons) and \\(|NK| = pq = |G|\\). So \\(G = N \\rtimes_\\varphi K\\) for some \\(\\varphi: \\mathbb{Z}_q \\to \\operatorname{Aut}(\\mathbb{Z}_p) \\cong \\mathbb{Z}_{p-1}\\). A nontrivial homomorphism exists iff \\(q \\mid (p-1)\\).</p>

<div class="example">
<strong>Example 4.3 (Order 6).</strong> With \\(p = 3, q = 2\\): \\(2 \\mid (3-1) = 2\\), so there are two groups of order 6. They are \\(\\mathbb{Z}_6\\) and \\(S_3 \\cong \\mathbb{Z}_3 \\rtimes \\mathbb{Z}_2\\).
</div>

<div class="example">
<strong>Example 4.4 (Order 15).</strong> With \\(p = 5, q = 3\\): \\(3 \\nmid (5-1) = 4\\), so the only group of order 15 is \\(\\mathbb{Z}_{15}\\).
</div>

<div class="example">
<strong>Example 4.5 (Order 21).</strong> With \\(p = 7, q = 3\\): \\(3 \\mid (7-1) = 6\\), so there are two groups of order 21: the cyclic \\(\\mathbb{Z}_{21}\\) and a non-abelian \\(\\mathbb{Z}_7 \\rtimes \\mathbb{Z}_3\\).
</div>

<h3>4.3 The Affine Group</h3>

<p>The group of affine transformations \\(x \\mapsto ax + b\\) on a field \\(\\mathbb{F}\\) (with \\(a \\neq 0\\)) is</p>
\\[\\operatorname{Aff}(\\mathbb{F}) = \\mathbb{F} \\rtimes \\mathbb{F}^\\times\\]
<p>where \\(\\mathbb{F}\\) is the additive group of translations and \\(\\mathbb{F}^\\times\\) acts by scaling: \\(\\varphi(a)(b) = ab\\).</p>

<h3>4.4 Euclidean Isometries</h3>

<p>The group of rigid motions of \\(\\mathbb{R}^n\\) is a semidirect product:</p>
\\[\\operatorname{E}(n) = \\mathbb{R}^n \\rtimes O(n)\\]
<p>where \\(\\mathbb{R}^n\\) is the normal subgroup of translations, and the orthogonal group \\(O(n)\\) (rotations and reflections) acts on translations by its natural action on vectors.</p>

<div class="viz-placeholder" data-viz="viz-dihedral-semidirect"></div>

<div class="viz-placeholder" data-viz="viz-groups-pq"></div>
`,
            visualizations: [
                {
                    id: 'viz-dihedral-semidirect',
                    title: 'Dihedral Group as Semidirect Product',
                    description: 'See how D_n arises as Z_n semidirect Z_2. The rotation subgroup (blue) is normal; the reflection (orange) acts by inversion.',
                    setup: function(container) {
                        var viz = new VizEngine(container, { scale: 80, originX: 280, originY: 200 });
                        var nVal = 5;
                        var showReflection = false;
                        var animT = 0;

                        function draw() {
                            viz.clear();
                            var R = 1.5;
                            // Draw polygon
                            var pts = [];
                            for (var i = 0; i < nVal; i++) {
                                var angle = -Math.PI/2 + 2*Math.PI*i/nVal;
                                pts.push([R*Math.cos(angle), R*Math.sin(angle)]);
                            }
                            // Draw edges
                            for (var i = 0; i < nVal; i++) {
                                var j = (i+1) % nVal;
                                viz.drawSegment(pts[i][0], pts[i][1], pts[j][0], pts[j][1], '#4a4a7a', 1.5);
                            }
                            // Label vertices
                            for (var i = 0; i < nVal; i++) {
                                var angle = -Math.PI/2 + 2*Math.PI*i/nVal;
                                var lx = (R+0.25)*Math.cos(angle);
                                var ly = (R+0.25)*Math.sin(angle);
                                viz.drawPoint(pts[i][0], pts[i][1], '#58a6ff', i.toString(), 4);
                            }

                            // Rotation arrow
                            var rotAngle = 2*Math.PI/nVal;
                            viz.ctx.strokeStyle = '#58a6ff';
                            viz.ctx.lineWidth = 2;
                            var arcR = 0.6 * viz.scale;
                            var cx2 = viz.originX, cy2 = viz.originY;
                            viz.ctx.beginPath();
                            viz.ctx.arc(cx2, cy2, arcR, -Math.PI/2, -Math.PI/2 + rotAngle - 0.15, false);
                            viz.ctx.stroke();
                            // arrowhead
                            var endA = -Math.PI/2 + rotAngle - 0.15;
                            var ax = cx2 + arcR*Math.cos(endA);
                            var ay = cy2 + arcR*Math.sin(endA);
                            viz.ctx.fillStyle = '#58a6ff';
                            viz.ctx.beginPath();
                            viz.ctx.moveTo(ax + 8*Math.cos(endA+0.5), ay + 8*Math.sin(endA+0.5));
                            viz.ctx.lineTo(ax, ay);
                            viz.ctx.lineTo(ax + 8*Math.cos(endA+Math.PI-0.5), ay + 8*Math.sin(endA+Math.PI-0.5));
                            viz.ctx.fill();

                            // Reflection axis
                            if (showReflection) {
                                viz.drawSegment(0, -2, 0, 2, '#f0883e', 1.5, true);
                                viz.screenText('s (reflection)', viz.width - 20, 30, '#f0883e', 12, 'right');
                                // Show inversion: r -> r^{-1}
                                viz.screenText('srs^{-1} = r^{-1}', viz.width - 20, 50, '#f0883e', 12, 'right');
                            }

                            viz.screenText('r = rotation by 2pi/' + nVal, 20, 20, '#58a6ff', 12, 'left');
                            viz.screenText('D' + nVal + ' = Z' + nVal + ' >' + String.fromCharCode(8906) + ' Z2', 20, viz.height - 15, '#f0f6fc', 13, 'left');
                            viz.screenText('|D' + nVal + '| = ' + (2*nVal), 20, viz.height - 35, '#8b949e', 12, 'left');
                        }
                        draw();

                        VizEngine.createSlider(container, 'n', 3, 12, nVal, 1, function(v) { nVal = Math.round(v); draw(); });
                        VizEngine.createButton(container, 'Toggle reflection axis', function() { showReflection = !showReflection; draw(); });

                        return viz;
                    }
                },
                {
                    id: 'viz-groups-pq',
                    title: 'Groups of Order pq',
                    description: 'Choose primes p > q and see whether a non-abelian group of order pq exists.',
                    setup: function(container) {
                        var canvas = document.createElement('canvas');
                        var W = Math.min(container.clientWidth || 560, 560);
                        var H2 = 260;
                        var dpr = window.devicePixelRatio || 1;
                        canvas.width = W * dpr; canvas.height = H2 * dpr;
                        canvas.style.width = W + 'px'; canvas.style.height = H2 + 'px';
                        var ctx = canvas.getContext('2d');
                        ctx.scale(dpr, dpr);
                        container.appendChild(canvas);

                        var primes = [2,3,5,7,11,13,17,19,23,29,31];
                        var pIdx = 2, qIdx = 0; // p=5, q=2

                        function draw() {
                            ctx.fillStyle = '#0c0c20'; ctx.fillRect(0, 0, W, H2);
                            var p = primes[pIdx], q = primes[qIdx];
                            if (p <= q) { p = primes[pIdx]; q = primes[Math.max(0, pIdx-1)]; qIdx = Math.max(0, pIdx-1); }

                            var divides = ((p - 1) % q === 0);
                            ctx.font = 'bold 16px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillStyle = '#f0f6fc';
                            ctx.fillText('Groups of order pq = ' + p + ' * ' + q + ' = ' + (p*q), W/2, 30);

                            ctx.font = '14px -apple-system,sans-serif';
                            ctx.fillStyle = '#8b949e';
                            ctx.fillText('p = ' + p + ',  q = ' + q + ',  p - 1 = ' + (p-1), W/2, 60);

                            ctx.fillStyle = divides ? '#f0883e' : '#3fb950';
                            ctx.fillText('q | (p-1)? ' + q + ' | ' + (p-1) + ' = ' + (divides ? 'YES' : 'NO'), W/2, 90);

                            ctx.font = '15px -apple-system,sans-serif';
                            if (divides) {
                                ctx.fillStyle = '#f0883e';
                                ctx.fillText('Two groups of order ' + (p*q) + ':', W/2, 130);
                                ctx.font = '14px -apple-system,sans-serif';
                                ctx.fillStyle = '#58a6ff';
                                ctx.fillText('(1) Z_' + (p*q) + '  (cyclic, abelian)', W/2, 160);
                                ctx.fillStyle = '#f85149';
                                ctx.fillText('(2) Z_' + p + ' >' + String.fromCharCode(8906) + ' Z_' + q + '  (non-abelian)', W/2, 185);
                            } else {
                                ctx.fillStyle = '#3fb950';
                                ctx.fillText('Only ONE group of order ' + (p*q) + ':', W/2, 130);
                                ctx.font = '14px -apple-system,sans-serif';
                                ctx.fillStyle = '#58a6ff';
                                ctx.fillText('Z_' + (p*q) + '  (cyclic, abelian)', W/2, 160);
                            }

                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillStyle = '#4a4a7a';
                            ctx.fillText('Aut(Z_' + p + ') = Z_' + (p-1) + '.  Need q | (p-1) for a nontrivial phi: Z_' + q + ' -> Z_' + (p-1), W/2, H2 - 15);
                        }
                        draw();
                        VizEngine.createSlider(container, 'p (larger prime)', 0, primes.length - 1, pIdx, 1, function(v) {
                            pIdx = Math.round(v);
                            if (qIdx >= pIdx) qIdx = Math.max(0, pIdx - 1);
                            draw();
                        });
                        VizEngine.createSlider(container, 'q (smaller prime)', 0, primes.length - 1, qIdx, 1, function(v) {
                            qIdx = Math.round(v);
                            if (qIdx >= pIdx) qIdx = pIdx - 1;
                            if (qIdx < 0) qIdx = 0;
                            draw();
                        });

                        return { stopAnimation: function() {} };
                    }
                }
            ],
            exercises: [
                {
                    question: 'Write down the multiplication table for \\(D_3 \\cong \\mathbb{Z}_3 \\rtimes \\mathbb{Z}_2\\), labeling elements as \\((a, b)\\) with \\(a \\in \\mathbb{Z}_3\\) and \\(b \\in \\mathbb{Z}_2\\).',
                    hint: 'Use the rule \\((a_1, b_1)(a_2, b_2) = (a_1 + (-1)^{b_1} a_2 \\bmod 3,\\; b_1 + b_2 \\bmod 2)\\).',
                    solution: 'Elements: \\((0,0), (1,0), (2,0), (0,1), (1,1), (2,1)\\). Multiplication uses \\(\\varphi(0) = \\operatorname{id}\\), \\(\\varphi(1)(x) = -x \\bmod 3\\). For example: \\((1,1)(2,0) = (1 + \\varphi(1)(2), 1) = (1 + (-2 \\bmod 3), 1) = (1+1, 1) = (2, 1)\\). And \\((0,1)(1,0) = (0 + \\varphi(1)(1), 1) = (0 + 2, 1) = (2, 1)\\). This matches the non-abelian structure of \\(S_3\\).'
                },
                {
                    question: 'Classify all groups of order 35.',
                    hint: '\\(35 = 5 \\cdot 7\\). Check if \\(5 \\mid (7 - 1)\\).',
                    solution: '\\(35 = 5 \\cdot 7\\) with \\(p = 7, q = 5\\). We check: \\(q \\mid (p-1)\\), i.e., \\(5 \\mid 6\\)? No. Therefore the only group of order 35 is \\(\\mathbb{Z}_{35}\\).'
                },
                {
                    question: 'Classify all groups of order 21. Describe the non-abelian one explicitly as a semidirect product.',
                    hint: '\\(21 = 3 \\cdot 7\\) with \\(p = 7, q = 3\\). Check \\(3 \\mid 6\\).',
                    solution: '\\(21 = 3 \\cdot 7\\) with \\(p = 7, q = 3\\). Since \\(3 \\mid (7-1) = 6\\), there are two groups. (1) \\(\\mathbb{Z}_{21}\\). (2) \\(\\mathbb{Z}_7 \\rtimes_\\varphi \\mathbb{Z}_3\\) where \\(\\varphi: \\mathbb{Z}_3 \\to \\operatorname{Aut}(\\mathbb{Z}_7) \\cong \\mathbb{Z}_6\\). We need an element of order 3 in \\(\\mathbb{Z}_6\\), which is 2. So \\(\\varphi(1)\\) is the automorphism \\(x \\mapsto 2x \\bmod 7\\) (check: \\(2^3 = 8 \\equiv 1 \\pmod{7}\\), order 3). Multiplication: \\((a_1, b_1)(a_2, b_2) = (a_1 + 2^{b_1} a_2 \\bmod 7, b_1 + b_2 \\bmod 3)\\).'
                },
                {
                    question: 'Show that the affine group \\(\\operatorname{Aff}(\\mathbb{F}_p) = \\{x \\mapsto ax + b \\mid a \\in \\mathbb{F}_p^\\times, b \\in \\mathbb{F}_p\\}\\) has order \\(p(p-1)\\) and identify its semidirect product structure.',
                    hint: 'The translations \\(x \\mapsto x + b\\) form a normal subgroup isomorphic to \\(\\mathbb{F}_p\\).',
                    solution: 'The translations \\(N = \\{x \\mapsto x + b\\}\\) form a normal subgroup with \\(|N| = p\\), isomorphic to \\((\\mathbb{F}_p, +)\\). The scalings \\(K = \\{x \\mapsto ax\\}\\) form a subgroup with \\(|K| = p-1\\), isomorphic to \\(\\mathbb{F}_p^\\times\\). We have \\(N \\cap K = \\{\\operatorname{id}\\}\\) and \\(|NK| = p(p-1) = |\\operatorname{Aff}(\\mathbb{F}_p)|\\). The conjugation action is: \\((x \\mapsto ax)(x \\mapsto x+b)(x \\mapsto a^{-1}x) = (x \\mapsto x + ab)\\), so \\(\\varphi(a)(b) = ab\\). Thus \\(\\operatorname{Aff}(\\mathbb{F}_p) \\cong \\mathbb{F}_p \\rtimes \\mathbb{F}_p^\\times\\).'
                }
            ]
        },
        // ============================================================
        // SECTION 5: Group Extensions
        // ============================================================
        {
            id: 'ch09-sec05',
            title: 'Group Extensions',
            content: `
<h2>5 &mdash; Group Extensions</h2>

<p>Both direct and semidirect products are special cases of a more general question: given groups \\(N\\) and \\(Q\\), what groups \\(G\\) can be built from them?</p>

<h3>5.1 Short Exact Sequences</h3>

<div class="definition">
<strong>Definition 5.1.</strong> A <strong>short exact sequence</strong> of groups is a diagram
\\[1 \\to N \\xrightarrow{\\iota} G \\xrightarrow{\\pi} Q \\to 1\\]
where \\(\\iota\\) is injective, \\(\\pi\\) is surjective, and \\(\\ker \\pi = \\operatorname{im} \\iota\\). We say \\(G\\) is an <strong>extension</strong> of \\(Q\\) by \\(N\\).
</div>

<p>In concrete terms: \\(N\\) embeds as a normal subgroup of \\(G\\), and the quotient \\(G/N \\cong Q\\). The extension problem asks: given \\(N\\) and \\(Q\\), classify all possible groups \\(G\\).</p>

<h3>5.2 Split Extensions</h3>

<div class="definition">
<strong>Definition 5.2.</strong> The short exact sequence \\(1 \\to N \\to G \\to Q \\to 1\\) <strong>splits</strong> if there exists a homomorphism \\(s: Q \\to G\\) such that \\(\\pi \\circ s = \\operatorname{id}_Q\\).
</div>

<div class="theorem">
<strong>Theorem 5.3.</strong> The sequence splits if and only if \\(G\\) is a semidirect product \\(N \\rtimes Q\\).
</div>

<p><em>Proof sketch.</em> If the sequence splits via \\(s: Q \\to G\\), let \\(K = s(Q)\\). Then \\(K \\cong Q\\), \\(N \\cap K = \\{e\\}\\) (since \\(\\pi|_K\\) is injective), and \\(NK = G\\) (since \\(\\pi\\) is surjective and every coset \\(gN\\) contains an element of \\(K\\)). Conversely, if \\(G = N \\rtimes K\\) with \\(K \\cong Q\\), then the inclusion \\(K \\hookrightarrow G\\) gives the splitting.</p>

<h3>5.3 Non-split Extensions</h3>

<p>Not every extension splits. The classic example:</p>

<div class="example">
<strong>Example 5.4.</strong> The sequence \\(1 \\to \\mathbb{Z}_2 \\to \\mathbb{Z}_4 \\to \\mathbb{Z}_2 \\to 1\\) (where \\(\\iota(1) = 2\\) and \\(\\pi(k) = k \\bmod 2\\)) does <em>not</em> split. If it did, there would be a subgroup \\(K \\leq \\mathbb{Z}_4\\) with \\(K \\cong \\mathbb{Z}_2\\) and \\(\\mathbb{Z}_4 = \\{0,2\\} \\rtimes K\\). But the only subgroup of order 2 in \\(\\mathbb{Z}_4\\) is \\(\\{0,2\\}\\) itself, giving \\(N \\cap K \\neq \\{0\\}\\).
</div>

<p>So the "same" \\(N\\) and \\(Q\\) can give genuinely different extensions. For \\(N = \\mathbb{Z}_2\\), \\(Q = \\mathbb{Z}_2\\), we get:</p>
<ul>
<li>\\(\\mathbb{Z}_2 \\times \\mathbb{Z}_2 = V_4\\) (split, direct product),</li>
<li>\\(\\mathbb{Z}_4\\) (non-split).</li>
</ul>

<h3>5.4 The Extension Problem and Cohomology</h3>

<p>The full classification of extensions is governed by <strong>group cohomology</strong>. Given an action of \\(Q\\) on \\(N\\), the second cohomology group \\(H^2(Q, N)\\) parametrizes equivalence classes of extensions:</p>

\\[\\{\\text{extensions of } Q \\text{ by } N \\text{ with given action}\\} / {\\sim} \\;\\longleftrightarrow\\; H^2(Q, N).\\]

<p>The identity element of \\(H^2(Q, N)\\) corresponds to the split extension (semidirect product). Other elements correspond to non-split extensions.</p>

<h3>5.5 Summary: The Hierarchy</h3>

<div class="env-block intuition">
<strong>Summary.</strong> We have a hierarchy of product constructions:
<ol>
<li><strong>Direct product</strong> \\(N \\times K\\): both \\(N, K\\) normal, \\(\\varphi\\) trivial.</li>
<li><strong>Semidirect product</strong> \\(N \\rtimes_\\varphi K\\): only \\(N\\) normal, \\(\\varphi\\) possibly nontrivial.</li>
<li><strong>General extension:</strong> \\(N\\) is normal in \\(G\\) with \\(G/N \\cong K\\), but no complement \\(K\\) need exist inside \\(G\\).</li>
</ol>
Each level adds complexity. The direct product is abelian when both factors are; the semidirect product can be non-abelian; general extensions can be "tighter" still (like \\(\\mathbb{Z}_4\\) as an extension of \\(\\mathbb{Z}_2\\) by \\(\\mathbb{Z}_2\\)).
</div>

<div class="viz-placeholder" data-viz="viz-extension-diagram"></div>

<div class="viz-placeholder" data-viz="viz-extension-hierarchy"></div>
`,
            visualizations: [
                {
                    id: 'viz-extension-diagram',
                    title: 'Short Exact Sequence Diagram',
                    description: 'Animate the short exact sequence 1 -> N -> G -> Q -> 1 for chosen groups, showing the kernel-image relationship.',
                    setup: function(container) {
                        var viz = new VizEngine(container, { width: 520, height: 280, scale: 1, originX: 0, originY: 0 });
                        var example = 0;
                        // Examples: 0 = Z2->Z4->Z2 (non-split), 1 = Z3->S3->Z2 (split), 2 = Z2->V4->Z2 (split)
                        var examples = [
                            { N: 'Z2', G: 'Z4', Q: 'Z2', split: false,
                              Nelems: ['0','1'], Gelems: ['0','1','2','3'], Qelems: ['0','1'],
                              iota: [0, 2], pi: [0, 1, 0, 1] },
                            { N: 'Z3', G: 'S3', Q: 'Z2', split: true,
                              Nelems: ['e','r','r2'], Gelems: ['e','r','r2','s','sr','sr2'], Qelems: ['0','1'],
                              iota: [0, 1, 2], pi: [0, 0, 0, 1, 1, 1] },
                            { N: 'Z2', G: 'V4', Q: 'Z2', split: true,
                              Nelems: ['(0,0)','(1,0)'], Gelems: ['(0,0)','(1,0)','(0,1)','(1,1)'], Qelems: ['0','1'],
                              iota: [0, 1], pi: [0, 0, 1, 1] }
                        ];

                        function draw() {
                            var ctx = viz.ctx;
                            ctx.fillStyle = '#0c0c20';
                            ctx.fillRect(0, 0, viz.width, viz.height);
                            var ex = examples[example];

                            var y = 100;
                            var positions = [30, 110, 270, 420, 500];
                            var labels = ['1', ex.N, ex.G, ex.Q, '1'];
                            var nodeColors = ['#4a4a7a', '#58a6ff', '#f0883e', '#3fb950', '#4a4a7a'];

                            // Draw nodes
                            for (var i = 0; i < 5; i++) {
                                ctx.fillStyle = nodeColors[i];
                                ctx.font = 'bold 16px -apple-system,sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(labels[i], positions[i], y);
                            }

                            // Draw arrows
                            ctx.strokeStyle = '#8b949e';
                            ctx.lineWidth = 1.5;
                            for (var i = 0; i < 4; i++) {
                                var x1 = positions[i] + 18, x2 = positions[i+1] - 18;
                                ctx.beginPath(); ctx.moveTo(x1, y); ctx.lineTo(x2, y); ctx.stroke();
                                ctx.beginPath();
                                ctx.moveTo(x2, y);
                                ctx.lineTo(x2 - 8, y - 5);
                                ctx.lineTo(x2 - 8, y + 5);
                                ctx.closePath();
                                ctx.fillStyle = '#8b949e'; ctx.fill();
                            }

                            // Arrow labels
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = '#c9d1d9';
                            ctx.fillText('i', (positions[1]+positions[2])/2, y - 15);
                            ctx.fillText('pi', (positions[2]+positions[3])/2, y - 15);

                            // Elements below
                            var ey = 150;
                            ctx.font = '11px monospace';
                            // N elements
                            ctx.fillStyle = '#58a6ff';
                            for (var i = 0; i < ex.Nelems.length; i++) {
                                ctx.fillText(ex.Nelems[i], 110, ey + i * 18);
                            }
                            // G elements
                            ctx.fillStyle = '#f0883e';
                            for (var i = 0; i < ex.Gelems.length; i++) {
                                ctx.fillText(ex.Gelems[i], 270, ey + i * 18);
                            }
                            // Q elements
                            ctx.fillStyle = '#3fb950';
                            for (var i = 0; i < ex.Qelems.length; i++) {
                                ctx.fillText(ex.Qelems[i], 420, ey + i * 18);
                            }

                            // iota arrows (N -> G)
                            for (var i = 0; i < ex.iota.length; i++) {
                                var ny = ey + i * 18;
                                var gy = ey + ex.iota[i] * 18;
                                ctx.strokeStyle = '#58a6ff44';
                                ctx.lineWidth = 1;
                                ctx.beginPath(); ctx.moveTo(130, ny); ctx.lineTo(245, gy); ctx.stroke();
                            }

                            // pi arrows (G -> Q)
                            for (var i = 0; i < ex.pi.length; i++) {
                                var gy2 = ey + i * 18;
                                var qy = ey + ex.pi[i] * 18;
                                ctx.strokeStyle = '#3fb95044';
                                ctx.beginPath(); ctx.moveTo(295, gy2); ctx.lineTo(400, qy); ctx.stroke();
                            }

                            // Split info
                            ctx.font = 'bold 13px -apple-system,sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillStyle = ex.split ? '#3fb950' : '#f85149';
                            ctx.fillText(ex.split ? 'SPLITS (semidirect product)' : 'DOES NOT SPLIT', viz.width / 2, 35);
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = '#8b949e';
                            ctx.fillText('ker(pi) = im(i) = ' + ex.N + ' inside ' + ex.G, viz.width / 2, 55);
                        }
                        draw();

                        VizEngine.createButton(container, 'Z2 -> Z4 -> Z2 (non-split)', function() { example = 0; draw(); });
                        VizEngine.createButton(container, 'Z3 -> S3 -> Z2 (split)', function() { example = 1; draw(); });
                        VizEngine.createButton(container, 'Z2 -> V4 -> Z2 (split)', function() { example = 2; draw(); });

                        return viz;
                    }
                },
                {
                    id: 'viz-extension-hierarchy',
                    title: 'Product Hierarchy',
                    description: 'A visual summary of the hierarchy: direct product, semidirect product, and general extension.',
                    setup: function(container) {
                        var canvas = document.createElement('canvas');
                        var W = Math.min(container.clientWidth || 560, 520);
                        var H2 = 320;
                        var dpr = window.devicePixelRatio || 1;
                        canvas.width = W * dpr; canvas.height = H2 * dpr;
                        canvas.style.width = W + 'px'; canvas.style.height = H2 + 'px';
                        var ctx = canvas.getContext('2d');
                        ctx.scale(dpr, dpr);
                        container.appendChild(canvas);

                        ctx.fillStyle = '#0c0c20';
                        ctx.fillRect(0, 0, W, H2);

                        var cx = W / 2;
                        // Three nested boxes
                        var boxes = [
                            { y: 20, h: 270, label: 'General Extension', sub: '1 -> N -> G -> Q -> 1', color: '#f85149', ex: 'Z4 (ext of Z2 by Z2)' },
                            { y: 55, h: 195, label: 'Semidirect Product', sub: 'G = N >' + String.fromCharCode(8906) + ' K', color: '#f0883e', ex: 'S3 = Z3 >' + String.fromCharCode(8906) + ' Z2' },
                            { y: 90, h: 120, label: 'Direct Product', sub: 'G = N x K', color: '#58a6ff', ex: 'Z6 = Z2 x Z3' }
                        ];

                        for (var i = 0; i < boxes.length; i++) {
                            var b = boxes[i];
                            var bw = W - 40 - i * 50;
                            var bx = (W - bw) / 2;
                            ctx.strokeStyle = b.color;
                            ctx.lineWidth = 2;
                            ctx.strokeRect(bx, b.y, bw, b.h);
                            ctx.fillStyle = b.color + '11';
                            ctx.fillRect(bx, b.y, bw, b.h);

                            ctx.font = 'bold 14px -apple-system,sans-serif';
                            ctx.fillStyle = b.color;
                            ctx.textAlign = 'center';
                            ctx.fillText(b.label, cx, b.y + 20);
                            ctx.font = '12px -apple-system,sans-serif';
                            ctx.fillStyle = '#c9d1d9';
                            ctx.fillText(b.sub, cx, b.y + 38);
                            ctx.font = '11px -apple-system,sans-serif';
                            ctx.fillStyle = '#8b949e';
                            ctx.fillText('e.g., ' + b.ex, cx, b.y + 55);
                        }

                        // Conditions
                        ctx.font = '11px -apple-system,sans-serif';
                        ctx.textAlign = 'left';
                        ctx.fillStyle = '#58a6ff';
                        ctx.fillText('Both N, K normal', 50, H2 - 15);
                        ctx.fillStyle = '#f0883e';
                        ctx.fillText('Only N normal, K complements', W/2 - 60, H2 - 15);

                        return { stopAnimation: function() {} };
                    }
                }
            ],
            exercises: [
                {
                    question: 'Prove that the short exact sequence \\(1 \\to \\mathbb{Z}_2 \\to \\mathbb{Z}_4 \\to \\mathbb{Z}_2 \\to 1\\) does not split.',
                    hint: 'A splitting would give a subgroup \\(K \\leq \\mathbb{Z}_4\\) with \\(K \\cong \\mathbb{Z}_2\\) and \\(K \\cap \\langle 2 \\rangle = \\{0\\}\\).',
                    solution: 'A splitting \\(s: \\mathbb{Z}_2 \\to \\mathbb{Z}_4\\) with \\(\\pi \\circ s = \\operatorname{id}\\) requires \\(s(1)\\) to be an element of order 2 in \\(\\mathbb{Z}_4\\) that maps to \\(1\\) under \\(\\pi\\). The elements of \\(\\mathbb{Z}_4\\) of order 2 are just \\(\\{2\\}\\), but \\(\\pi(2) = 0 \\neq 1\\). The elements mapping to 1 are \\(\\{1, 3\\}\\), which have order 4. So no splitting exists.'
                },
                {
                    question: 'Show that every short exact sequence \\(1 \\to N \\to G \\to Q \\to 1\\) with \\(Q\\) free splits.',
                    hint: 'A free group \\(Q\\) has a basis. Define the splitting \\(s\\) on basis elements.',
                    solution: 'Let \\(Q\\) be free on generators \\(\\{q_i\\}\\). Since \\(\\pi\\) is surjective, for each \\(q_i\\) choose \\(g_i \\in G\\) with \\(\\pi(g_i) = q_i\\). By the universal property of free groups, the map \\(q_i \\mapsto g_i\\) extends to a unique homomorphism \\(s: Q \\to G\\). By construction, \\(\\pi(s(q_i)) = q_i\\), so \\(\\pi \\circ s = \\operatorname{id}_Q\\). Thus the sequence splits.'
                },
                {
                    question: 'List all extensions of \\(\\mathbb{Z}_3\\) by \\(\\mathbb{Z}_3\\) (i.e., groups \\(G\\) with a normal subgroup \\(N \\cong \\mathbb{Z}_3\\) and \\(G/N \\cong \\mathbb{Z}_3\\)). Which are split?',
                    hint: 'Such \\(G\\) has order 9. What are the groups of order \\(p^2\\)?',
                    solution: 'Groups of order \\(9 = 3^2\\) are abelian (since groups of order \\(p^2\\) are abelian). There are exactly two: \\(\\mathbb{Z}_9\\) and \\(\\mathbb{Z}_3 \\times \\mathbb{Z}_3\\). For \\(\\mathbb{Z}_3 \\times \\mathbb{Z}_3\\): take \\(N = \\mathbb{Z}_3 \\times \\{0\\}\\), \\(G/N \\cong \\mathbb{Z}_3\\). The sequence splits since \\(K = \\{0\\} \\times \\mathbb{Z}_3\\) is a complement. For \\(\\mathbb{Z}_9\\): the unique subgroup of order 3 is \\(N = \\{0, 3, 6\\}\\), \\(G/N \\cong \\mathbb{Z}_3\\). This does not split: the elements mapping to the generator of \\(G/N\\) (namely 1, 2, 4, 5, 7, 8) all have order 9, not 3. So there is no complement.'
                },
                {
                    question: 'Let \\(G = \\mathbb{Z}_{12}\\). Write \\(G\\) as both an internal direct product of two nontrivial subgroups and verify the conditions of the recognition theorem.',
                    hint: 'Factor 12 into coprime parts and use the corresponding subgroups.',
                    solution: '\\(12 = 4 \\cdot 3\\), and \\(\\gcd(4, 3) = 1\\). Let \\(N = \\langle 3 \\rangle = \\{0, 3, 6, 9\\} \\cong \\mathbb{Z}_4\\) and \\(K = \\langle 4 \\rangle = \\{0, 4, 8\\} \\cong \\mathbb{Z}_3\\). Check: (1) Both normal (\\(\\mathbb{Z}_{12}\\) is abelian). (2) \\(N \\cap K\\): need \\(x \\in \\{0,3,6,9\\} \\cap \\{0,4,8\\}\\). Only \\(x = 0\\). (3) \\(|NK| = |N||K|/|N \\cap K| = 4 \\cdot 3/1 = 12 = |G|\\). So \\(\\mathbb{Z}_{12} = N \\times K \\cong \\mathbb{Z}_4 \\times \\mathbb{Z}_3\\).'
                }
            ]
        }
    ]
});
