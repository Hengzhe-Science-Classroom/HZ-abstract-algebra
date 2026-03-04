window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch05',
    number: 5,
    title: 'Normal Subgroups and Quotient Groups',
    subtitle: 'Normality, quotient construction, first isomorphism theorem',
    sections: [

        // ===== SECTION 1: Normal Subgroups =====
        {
            id: 'ch05-sec01',
            title: 'Normal Subgroups',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>From cosets to quotients.</strong> In the previous chapter we saw that a subgroup \\(H \\le G\\) partitions \\(G\\) into cosets. A natural wish is to turn the set of cosets into a group. However, this only works when left and right cosets coincide, which leads us to <em>normal subgroups</em>, one of the most important concepts in group theory.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define normal subgroups, give several equivalent characterizations, and explore key examples including the center of a group.</p>
                </div>

                <h2>Motivation</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>If you want to "divide" a group \\(G\\) by a subgroup \\(N\\) and get a well-defined group structure on the quotient, you need the subgroup to be "compatible" with every element of \\(G\\). Concretely, multiplying cosets \\((aN)(bN)\\) must not depend on which representatives \\(a\\) and \\(b\\) you pick. This forces the condition that conjugating \\(N\\) by any element of \\(G\\) returns \\(N\\) itself.</p>
                    </div>
                </div>

                <h2>Definition and Equivalent Conditions</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.1 (Normal Subgroup)</div>
                    <div class="env-body">
                        <p>A subgroup \\(N\\) of a group \\(G\\) is called <strong>normal</strong>, written \\(N \\trianglelefteq G\\), if for every \\(g \\in G\\),</p>
                        \\[gNg^{-1} = N,\\]
                        <p>where \\(gNg^{-1} = \\{gng^{-1} : n \\in N\\}\\).</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.2 (Equivalent Characterizations of Normality)</div>
                    <div class="env-body">
                        <p>Let \\(N \\le G\\). The following are equivalent:</p>
                        <ol>
                            <li>\\(N \\trianglelefteq G\\) (i.e., \\(gNg^{-1} = N\\) for all \\(g \\in G\\)).</li>
                            <li>\\(gNg^{-1} \\subseteq N\\) for all \\(g \\in G\\).</li>
                            <li>\\(gN = Ng\\) for all \\(g \\in G\\) (left cosets equal right cosets).</li>
                            <li>\\(N\\) is the kernel of some homomorphism \\(\\varphi: G \\to H\\).</li>
                            <li>Every conjugate of an element of \\(N\\) lies in \\(N\\): \\(gng^{-1} \\in N\\) for all \\(g \\in G\\), \\(n \\in N\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof (selected implications)</div>
                    <div class="env-body">
                        <p><strong>(1) \\(\\Leftrightarrow\\) (2):</strong> The direction (1)\\(\\Rightarrow\\)(2) is immediate. For (2)\\(\\Rightarrow\\)(1): if \\(gNg^{-1} \\subseteq N\\) for all \\(g\\), apply this with \\(g^{-1}\\) to get \\(g^{-1}Ng \\subseteq N\\), i.e., \\(N \\subseteq gNg^{-1}\\). Combined with the hypothesis, \\(gNg^{-1} = N\\).</p>
                        <p><strong>(1) \\(\\Leftrightarrow\\) (3):</strong> We have \\(gNg^{-1} = N\\) if and only if \\(gN = Ng\\), since multiplying on the right by \\(g\\) is a bijection.</p>
                        <p><strong>(2) \\(\\Leftrightarrow\\) (5):</strong> This is just unpacking the set inclusion element-wise.</p>
                        <p>The equivalence with (4) will be proved after we introduce the quotient map in Section 3.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h2>Key Examples</h2>

                <div class="env-block example">
                    <div class="env-title">Example 5.3 (Normal Subgroups in Abelian Groups)</div>
                    <div class="env-body">
                        <p>If \\(G\\) is abelian, then <em>every</em> subgroup \\(N\\) is normal, since \\(gng^{-1} = gg^{-1}n = n \\in N\\) for all \\(g \\in G\\), \\(n \\in N\\). In particular, \\(n\\mathbb{Z} \\trianglelefteq \\mathbb{Z}\\) for every \\(n\\).</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.4 (\\(A_n \\trianglelefteq S_n\\))</div>
                    <div class="env-body">
                        <p>The alternating group \\(A_n\\) is normal in \\(S_n\\) because it is the kernel of the sign homomorphism \\(\\text{sgn}: S_n \\to \\{\\pm 1\\}\\). Equivalently, \\([S_n : A_n] = 2\\), and any subgroup of index 2 is automatically normal (since the single non-identity coset must equal both the left and right coset of any element outside the subgroup).</p>
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 5.5 (Index 2 Implies Normal)</div>
                    <div class="env-body">
                        <p>If \\([G : N] = 2\\), then \\(N \\trianglelefteq G\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>There are exactly two left cosets: \\(N\\) and \\(gN\\) for any \\(g \\notin N\\). Likewise there are two right cosets: \\(N\\) and \\(Ng\\). Since cosets partition \\(G\\) and the coset \\(N\\) is the same on both sides, the remaining cosets must also coincide: \\(gN = Ng\\). Hence \\(N\\) is normal.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.6 (Non-normal Subgroup)</div>
                    <div class="env-body">
                        <p>In \\(S_3\\), the subgroup \\(H = \\{e, (1\\;2)\\}\\) is <em>not</em> normal. We check: \\((1\\;3)(1\\;2)(1\\;3)^{-1} = (1\\;3)(1\\;2)(1\\;3) = (2\\;3) \\notin H\\). So \\(gHg^{-1} \\neq H\\) for \\(g = (1\\;3)\\).</p>
                    </div>
                </div>

                <h2>The Center of a Group</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.7 (Center)</div>
                    <div class="env-body">
                        <p>The <strong>center</strong> of a group \\(G\\) is</p>
                        \\[Z(G) = \\{z \\in G : zg = gz \\text{ for all } g \\in G\\}.\\]
                    </div>
                </div>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 5.8</div>
                    <div class="env-body">
                        <p>\\(Z(G) \\trianglelefteq G\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>First, \\(Z(G)\\) is a subgroup (it contains \\(e\\), is closed under products and inverses since if \\(z\\) commutes with all \\(g\\) then so does \\(z^{-1}\\)). For normality, let \\(z \\in Z(G)\\) and \\(g \\in G\\). Then \\(gzg^{-1} = zgg^{-1} = z \\in Z(G)\\). So \\(gZ(G)g^{-1} \\subseteq Z(G)\\) for all \\(g\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>The trivial subgroup \\(\\{e\\}\\) and \\(G\\) itself are always normal in \\(G\\). These are called the <strong>trivial normal subgroups</strong>. A group with no other normal subgroups is called <strong>simple</strong>, which we study in Section 4.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch05-viz01"></div>
            `,
            visualizations: [
                {
                    id: 'ch05-viz01',
                    title: 'Normal Subgroup Test in S3',
                    description: 'Check whether gNg^{-1} = N for each element g in S3',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 400;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');
                        var W = canvas.width, H = canvas.height;

                        var elems = ['e', '(1 2)', '(1 3)', '(2 3)', '(1 2 3)', '(1 3 2)'];
                        var mult = {
                            'e':     {'e':'e','(1 2)':'(1 2)','(1 3)':'(1 3)','(2 3)':'(2 3)','(1 2 3)':'(1 2 3)','(1 3 2)':'(1 3 2)'},
                            '(1 2)': {'e':'(1 2)','(1 2)':'e','(1 3)':'(1 3 2)','(2 3)':'(1 2 3)','(1 2 3)':'(2 3)','(1 3 2)':'(1 3)'},
                            '(1 3)': {'e':'(1 3)','(1 2)':'(1 2 3)','(1 3)':'e','(2 3)':'(1 3 2)','(1 2 3)':'(1 2)','(1 3 2)':'(2 3)'},
                            '(2 3)': {'e':'(2 3)','(1 2)':'(1 3 2)','(1 3)':'(1 2 3)','(2 3)':'e','(1 2 3)':'(1 3)','(1 3 2)':'(1 2)'},
                            '(1 2 3)':{'e':'(1 2 3)','(1 2)':'(1 3)','(1 3)':'(2 3)','(2 3)':'(1 2)','(1 2 3)':'(1 3 2)','(1 3 2)':'e'},
                            '(1 3 2)':{'e':'(1 3 2)','(1 2)':'(2 3)','(1 3)':'(1 2)','(2 3)':'(1 3)','(1 2 3)':'e','(1 3 2)':'(1 2 3)'}
                        };
                        var inv = {'e':'e','(1 2)':'(1 2)','(1 3)':'(1 3)','(2 3)':'(2 3)','(1 2 3)':'(1 3 2)','(1 3 2)':'(1 2 3)'};

                        var subgroups = {
                            '{e, (1 2)}': ['e', '(1 2)'],
                            '{e, (1 3)}': ['e', '(1 3)'],
                            '{e, (2 3)}': ['e', '(2 3)'],
                            '{e, (1 2 3), (1 3 2)}': ['e', '(1 2 3)', '(1 3 2)']
                        };
                        var subNames = Object.keys(subgroups);
                        var chosenSub = 0;

                        function conjugate(g, n) {
                            return mult[g][mult[n][inv[g]]];
                        }

                        function draw() {
                            ctx.clearRect(0, 0, W, H);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, H);

                            var N = subgroups[subNames[chosenSub]];
                            var isNormal = true;

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Normal subgroup test: gNg\u207B\u00B9 for N = ' + subNames[chosenSub], W / 2, 25);

                            var rowH = 50;
                            var startY = 55;
                            ctx.font = '13px monospace';
                            ctx.textAlign = 'left';

                            for (var gi = 0; gi < elems.length; gi++) {
                                var g = elems[gi];
                                var conj = [];
                                for (var ni = 0; ni < N.length; ni++) {
                                    conj.push(conjugate(g, N[ni]));
                                }
                                conj.sort();
                                var sortedN = N.slice().sort();
                                var match = conj.length === sortedN.length && conj.every(function(v, i) { return v === sortedN[i]; });
                                if (!match) isNormal = false;

                                var y = startY + gi * rowH;
                                ctx.fillStyle = match ? '#1b4721' : '#5e2020';
                                ctx.fillRect(10, y, W - 20, rowH - 6);
                                ctx.strokeStyle = match ? '#56d364' : '#f85149';
                                ctx.lineWidth = 1.5;
                                ctx.strokeRect(10, y, W - 20, rowH - 6);

                                ctx.fillStyle = '#e6edf3';
                                ctx.textAlign = 'left';
                                ctx.fillText('g = ' + g, 20, y + 20);
                                ctx.fillText('gNg\u207B\u00B9 = {' + conj.join(', ') + '}', 20, y + 38);

                                ctx.textAlign = 'right';
                                ctx.fillStyle = match ? '#56d364' : '#f85149';
                                ctx.fillText(match ? '= N \u2713' : '\u2260 N \u2717', W - 20, y + 30);
                            }

                            var bottomY = startY + elems.length * rowH + 10;
                            ctx.textAlign = 'center';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.fillStyle = isNormal ? '#56d364' : '#f85149';
                            ctx.fillText(isNormal ? 'N is NORMAL in S\u2083' : 'N is NOT normal in S\u2083', W / 2, bottomY + 10);
                        }

                        var sel = document.createElement('select');
                        sel.style.cssText = 'padding:4px 8px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;border-radius:4px;';
                        for (var i = 0; i < subNames.length; i++) {
                            var opt = document.createElement('option');
                            opt.value = i;
                            opt.textContent = 'N = ' + subNames[i];
                            sel.appendChild(opt);
                        }
                        sel.addEventListener('change', function() {
                            chosenSub = parseInt(sel.value);
                            draw();
                        });
                        controls.appendChild(sel);
                        draw();
                        return { cleanup: function() {} };
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex01',
                    type: 'multiple-choice',
                    question: 'Which of the following subgroups of S3 is normal?',
                    options: ['{e, (1 2)}', '{e, (1 3)}', '{e, (1 2 3), (1 3 2)}', '{e, (2 3)}'],
                    answer: 2,
                    explanation: 'The subgroup A3 = {e, (1 2 3), (1 3 2)} has index 2 in S3, so it is automatically normal. The order-2 subgroups are not normal because conjugation moves their non-identity element to a different transposition.'
                },
                {
                    id: 'ch05-ex02',
                    type: 'multiple-choice',
                    question: 'What is the center Z(S3)?',
                    options: ['S3', '{e, (1 2 3), (1 3 2)}', '{e}', '{e, (1 2)}'],
                    answer: 2,
                    explanation: 'In S3, no non-identity element commutes with every other element. For example, (1 2)(1 3) = (1 3 2) but (1 3)(1 2) = (1 2 3). So Z(S3) = {e}.'
                },
                {
                    id: 'ch05-ex03',
                    type: 'short-answer',
                    question: 'True or false: Every subgroup of an abelian group is normal.',
                    answer: 'True',
                    explanation: 'In an abelian group, gng^{-1} = n for all g, n. So gNg^{-1} = N automatically for every subgroup N.'
                }
            ]
        },

        // ===== SECTION 2: Quotient Groups =====
        {
            id: 'ch05-sec02',
            title: 'Quotient Groups',
            content: `
                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Construct the quotient group \\(G/N\\), prove that the coset multiplication is well-defined, and compute several examples.</p>
                </div>

                <h2>Constructing \\(G/N\\)</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>A quotient group is what you get when you "collapse" a normal subgroup to the identity. Each coset \\(gN\\) becomes a single element of the new group. The group operation on cosets is inherited from \\(G\\): multiply representatives and take the coset of the result. Normality is exactly the condition that guarantees this does not depend on which representatives you choose.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.9 (Quotient Group)</div>
                    <div class="env-body">
                        <p>Let \\(N \\trianglelefteq G\\). The <strong>quotient group</strong> (or factor group) \\(G/N\\) is the set of all left cosets of \\(N\\) in \\(G\\),</p>
                        \\[G/N = \\{gN : g \\in G\\},\\]
                        <p>equipped with the binary operation</p>
                        \\[(aN)(bN) = (ab)N.\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.10 (Well-definedness and Group Structure)</div>
                    <div class="env-body">
                        <p>If \\(N \\trianglelefteq G\\), then:</p>
                        <ol>
                            <li>The operation \\((aN)(bN) = (ab)N\\) is <strong>well-defined</strong> (independent of coset representatives).</li>
                            <li>\\(G/N\\) with this operation is a group, with identity element \\(eN = N\\) and inverses \\((gN)^{-1} = g^{-1}N\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>Well-definedness.</strong> Suppose \\(aN = a'N\\) and \\(bN = b'N\\). We must show \\((ab)N = (a'b')N\\), i.e., \\((a'b')^{-1}(ab) \\in N\\). Write \\(a' = an_1\\) and \\(b' = bn_2\\) for some \\(n_1, n_2 \\in N\\). Then</p>
                        \\[(a'b')^{-1}(ab) = (an_1 bn_2)^{-1}(ab) = n_2^{-1}b^{-1}n_1^{-1}a^{-1}ab = n_2^{-1}b^{-1}n_1^{-1}b \\cdot b^{-1}ab \\cdot b^{-1}b.\\]
                        <p>Simplifying: \\((a'b')^{-1}(ab) = n_2^{-1}(b^{-1}n_1^{-1}b)\\). Since \\(N\\) is normal, \\(b^{-1}n_1^{-1}b \\in N\\), so this product lies in \\(N\\).</p>
                        <p><strong>Group axioms.</strong> Associativity: \\(((aN)(bN))(cN) = (ab)N \\cdot cN = ((ab)c)N = (a(bc))N = aN \\cdot (bc)N = (aN)((bN)(cN))\\). Identity: \\((eN)(gN) = (eg)N = gN\\). Inverses: \\((gN)(g^{-1}N) = (gg^{-1})N = eN = N\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h2>Examples</h2>

                <div class="env-block example">
                    <div class="env-title">Example 5.11 (\\(\\mathbb{Z}/n\\mathbb{Z}\\))</div>
                    <div class="env-body">
                        <p>Take \\(G = \\mathbb{Z}\\) and \\(N = n\\mathbb{Z}\\). The cosets are \\(\\bar{0}, \\bar{1}, \\ldots, \\overline{n-1}\\), where \\(\\bar{k} = k + n\\mathbb{Z}\\). The quotient group \\(\\mathbb{Z}/n\\mathbb{Z}\\) is the cyclic group of order \\(n\\) with addition modulo \\(n\\). This is the prototype of all quotient groups.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.12 (\\(S_3/A_3\\))</div>
                    <div class="env-body">
                        <p>Since \\(A_3 = \\{e, (1\\;2\\;3), (1\\;3\\;2)\\} \\trianglelefteq S_3\\) with \\([S_3:A_3] = 2\\), we get \\(S_3/A_3 = \\{A_3, (1\\;2)A_3\\}\\). This is a group of order 2, isomorphic to \\(\\mathbb{Z}/2\\mathbb{Z}\\). The coset \\(A_3\\) consists of even permutations, and \\((1\\;2)A_3\\) consists of odd permutations.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.13 (\\(\\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/2\\mathbb{Z}\\) Quotient)</div>
                    <div class="env-body">
                        <p>Let \\(G = \\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/2\\mathbb{Z} = \\{(0,0),(1,0),(0,1),(1,1)\\}\\) and \\(N = \\{(0,0),(1,0)\\}\\). Then \\(G/N\\) has two elements: \\(N\\) and \\((0,1)+N = \\{(0,1),(1,1)\\}\\). So \\(G/N \\cong \\mathbb{Z}/2\\mathbb{Z}\\).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why Normality is Necessary)</div>
                    <div class="env-body">
                        <p>If \\(N\\) is not normal, the coset multiplication \\((aN)(bN) = (ab)N\\) is not well-defined. For example, in \\(S_3\\) with \\(H = \\{e, (1\\;2)\\}\\), the product of cosets \\((1\\;3)H \\cdot (2\\;3)H\\) gives different results depending on which representatives we choose. This is exactly why normality is needed.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch05-viz02"></div>
            `,
            visualizations: [
                {
                    id: 'ch05-viz02',
                    title: 'Quotient Group Multiplication Table',
                    description: 'View the Cayley table of G/N for small groups',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 400;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');
                        var W = canvas.width, Ht = canvas.height;

                        var examples = [
                            {
                                name: 'Z/6Z modulo {0,3}',
                                cosets: ['{0,3}', '{1,4}', '{2,5}'],
                                labels: ['0+N', '1+N', '2+N'],
                                table: [[0,1,2],[1,2,0],[2,0,1]]
                            },
                            {
                                name: 'S3 modulo A3',
                                cosets: ['A3={e,(123),(132)}', '(12)A3={(12),(13),(23)}'],
                                labels: ['A3', '(12)A3'],
                                table: [[0,1],[1,0]]
                            },
                            {
                                name: 'Z/12Z modulo {0,4,8}',
                                cosets: ['{0,4,8}', '{1,5,9}', '{2,6,10}', '{3,7,11}'],
                                labels: ['0+N', '1+N', '2+N', '3+N'],
                                table: [[0,1,2,3],[1,2,3,0],[2,3,0,1],[3,0,1,2]]
                            }
                        ];

                        var chosen = 0;
                        var hoverR = -1, hoverC = -1;

                        var colors = ['#58a6ff', '#f0883e', '#56d364', '#f778ba', '#d2a8ff'];

                        function draw() {
                            ctx.clearRect(0, 0, W, Ht);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, Ht);

                            var ex = examples[chosen];
                            var n = ex.labels.length;

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Cayley table of ' + ex.name, W / 2, 25);

                            var cellW = Math.min(80, (W - 120) / (n + 1));
                            var cellH = 36;
                            var startX = (W - cellW * (n + 1)) / 2;
                            var startY = 60;

                            ctx.font = '12px monospace';

                            // Header row
                            ctx.fillStyle = '#8b949e';
                            ctx.fillText('\u00D7', startX + cellW / 2, startY + cellH / 2 + 4);
                            for (var c = 0; c < n; c++) {
                                ctx.fillStyle = colors[c % colors.length];
                                ctx.fillText(ex.labels[c], startX + (c + 1) * cellW + cellW / 2, startY + cellH / 2 + 4);
                            }

                            // Rows
                            for (var r = 0; r < n; r++) {
                                var y = startY + (r + 1) * cellH;
                                ctx.fillStyle = colors[r % colors.length];
                                ctx.textAlign = 'center';
                                ctx.fillText(ex.labels[r], startX + cellW / 2, y + cellH / 2 + 4);

                                for (var c2 = 0; c2 < n; c2++) {
                                    var x = startX + (c2 + 1) * cellW;
                                    var val = ex.table[r][c2];
                                    var isHover = (r === hoverR && c2 === hoverC);

                                    ctx.fillStyle = isHover ? '#30363d' : '#161b22';
                                    ctx.fillRect(x + 1, y + 1, cellW - 2, cellH - 2);
                                    ctx.strokeStyle = '#30363d';
                                    ctx.lineWidth = 1;
                                    ctx.strokeRect(x + 1, y + 1, cellW - 2, cellH - 2);

                                    ctx.fillStyle = colors[val % colors.length];
                                    ctx.textAlign = 'center';
                                    ctx.fillText(ex.labels[val], x + cellW / 2, y + cellH / 2 + 4);
                                }
                            }

                            // Coset details
                            var detailY = startY + (n + 2) * cellH + 10;
                            ctx.font = '12px sans-serif';
                            ctx.fillStyle = '#8b949e';
                            ctx.textAlign = 'left';
                            for (var k = 0; k < ex.cosets.length; k++) {
                                ctx.fillStyle = colors[k % colors.length];
                                ctx.fillText(ex.labels[k] + ' = ' + ex.cosets[k], 20, detailY + k * 20);
                            }
                        }

                        canvas.addEventListener('mousemove', function(e) {
                            var rect = canvas.getBoundingClientRect();
                            var ex = examples[chosen];
                            var n = ex.labels.length;
                            var cellW = Math.min(80, (W - 120) / (n + 1));
                            var cellH = 36;
                            var startX = (W - cellW * (n + 1)) / 2;
                            var startY = 60;
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;
                            var c = Math.floor((mx - startX) / cellW) - 1;
                            var r = Math.floor((my - startY) / cellH) - 1;
                            if (r >= 0 && r < n && c >= 0 && c < n) {
                                hoverR = r; hoverC = c;
                            } else {
                                hoverR = -1; hoverC = -1;
                            }
                            draw();
                        });

                        var sel = document.createElement('select');
                        sel.style.cssText = 'padding:4px 8px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;border-radius:4px;';
                        for (var i = 0; i < examples.length; i++) {
                            var opt = document.createElement('option');
                            opt.value = i;
                            opt.textContent = examples[i].name;
                            sel.appendChild(opt);
                        }
                        sel.addEventListener('change', function() {
                            chosen = parseInt(sel.value);
                            hoverR = -1; hoverC = -1;
                            draw();
                        });
                        controls.appendChild(sel);
                        draw();
                        return { cleanup: function() {} };
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex04',
                    type: 'multiple-choice',
                    question: 'What is the order of the quotient group Z/12Z divided by the subgroup {0, 4, 8}?',
                    options: ['2', '3', '4', '6'],
                    answer: 2,
                    explanation: 'The subgroup N = {0, 4, 8} has order 3. By Lagrange, |G/N| = |G|/|N| = 12/3 = 4.'
                },
                {
                    id: 'ch05-ex05',
                    type: 'multiple-choice',
                    question: 'Which group is S3/A3 isomorphic to?',
                    options: ['Z/2Z', 'Z/3Z', 'S3', 'Z/6Z'],
                    answer: 0,
                    explanation: 'Since [S3 : A3] = 2, the quotient S3/A3 has order 2. The only group of order 2 is Z/2Z.'
                },
                {
                    id: 'ch05-ex06',
                    type: 'short-answer',
                    question: 'True or false: If N is not normal in G, then G/N can still be made into a group with coset multiplication.',
                    answer: 'False',
                    explanation: 'Normality is both necessary and sufficient for the coset multiplication (aN)(bN) = (ab)N to be well-defined. Without normality, the result depends on the choice of representatives, so no group structure exists.'
                },
                {
                    id: 'ch05-ex07',
                    type: 'multiple-choice',
                    question: 'In the quotient group G/N, what is the identity element?',
                    options: ['e', 'N', 'G', 'eN = gN for some g'],
                    answer: 1,
                    explanation: 'The identity element of G/N is the coset eN = N. For any coset gN, we have (eN)(gN) = (eg)N = gN, confirming N acts as the identity.'
                }
            ]
        },

        // ===== SECTION 3: The Quotient Map =====
        {
            id: 'ch05-sec03',
            title: 'The Quotient Map',
            content: `
                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define the natural projection \\(\\pi: G \\to G/N\\), establish its key properties, and show that every normal subgroup is the kernel of some homomorphism.</p>
                </div>

                <h2>The Natural Projection</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.14 (Quotient Map)</div>
                    <div class="env-body">
                        <p>Let \\(N \\trianglelefteq G\\). The <strong>natural projection</strong> (or canonical surjection) is the map</p>
                        \\[\\pi: G \\to G/N, \\quad \\pi(g) = gN.\\]
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.15 (Properties of the Quotient Map)</div>
                    <div class="env-body">
                        <p>The natural projection \\(\\pi: G \\to G/N\\) satisfies:</p>
                        <ol>
                            <li>\\(\\pi\\) is a <strong>surjective homomorphism</strong>.</li>
                            <li>\\(\\ker(\\pi) = N\\).</li>
                            <li>For any subgroup \\(H\\) of \\(G\\) containing \\(N\\), \\(\\pi(H) = H/N\\) is a subgroup of \\(G/N\\).</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(1)</strong> Homomorphism: \\(\\pi(ab) = (ab)N = (aN)(bN) = \\pi(a)\\pi(b)\\). Surjection: every coset \\(gN\\) is the image of \\(g\\).</p>
                        <p><strong>(2)</strong> \\(\\ker(\\pi) = \\{g \\in G : \\pi(g) = N\\} = \\{g \\in G : gN = N\\} = \\{g \\in G : g \\in N\\} = N\\).</p>
                        <p><strong>(3)</strong> If \\(N \\le H \\le G\\), then \\(\\pi(H) = \\{hN : h \\in H\\} = H/N\\). This is a subgroup of \\(G/N\\) because \\(\\pi\\) is a homomorphism and the image of a subgroup under a homomorphism is a subgroup.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Completing the Proof of Theorem 5.2)</div>
                    <div class="env-body">
                        <p>We can now verify characterization (4) of normality. If \\(N \\trianglelefteq G\\), then \\(N = \\ker(\\pi)\\) where \\(\\pi: G \\to G/N\\) is the quotient map. Conversely, if \\(N = \\ker(\\varphi)\\) for some homomorphism \\(\\varphi: G \\to H\\), then for any \\(g \\in G\\) and \\(n \\in N\\), \\(\\varphi(gng^{-1}) = \\varphi(g)\\varphi(n)\\varphi(g)^{-1} = \\varphi(g)e_H\\varphi(g)^{-1} = e_H\\), so \\(gng^{-1} \\in N\\).</p>
                    </div>
                </div>

                <h2>The Universal Property</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.16 (Universal Property of the Quotient)</div>
                    <div class="env-body">
                        <p>Let \\(N \\trianglelefteq G\\) and let \\(\\varphi: G \\to H\\) be a homomorphism with \\(N \\subseteq \\ker(\\varphi)\\). Then there exists a <strong>unique</strong> homomorphism \\(\\bar{\\varphi}: G/N \\to H\\) such that \\(\\varphi = \\bar{\\varphi} \\circ \\pi\\). That is, \\(\\bar{\\varphi}(gN) = \\varphi(g)\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>Well-definedness:</strong> If \\(gN = g'N\\), then \\(g' = gn\\) for some \\(n \\in N \\subseteq \\ker(\\varphi)\\), so \\(\\varphi(g') = \\varphi(gn) = \\varphi(g)\\varphi(n) = \\varphi(g)\\). Thus \\(\\bar{\\varphi}(gN) = \\varphi(g)\\) does not depend on the representative.</p>
                        <p><strong>Homomorphism:</strong> \\(\\bar{\\varphi}((aN)(bN)) = \\bar{\\varphi}((ab)N) = \\varphi(ab) = \\varphi(a)\\varphi(b) = \\bar{\\varphi}(aN)\\bar{\\varphi}(bN)\\).</p>
                        <p><strong>Uniqueness:</strong> Any \\(\\psi: G/N \\to H\\) satisfying \\(\\varphi = \\psi \\circ \\pi\\) must have \\(\\psi(gN) = \\psi(\\pi(g)) = \\varphi(g)\\), which determines \\(\\psi\\) completely.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch05-viz03"></div>
            `,
            visualizations: [
                {
                    id: 'ch05-viz03',
                    title: 'Quotient Map Visualization',
                    description: 'See how the projection pi: G -> G/N maps elements to their cosets',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 380;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');
                        var W = canvas.width, H = canvas.height;

                        // Z/6Z -> Z/6Z / <3> = Z/3Z
                        var elems = [0, 1, 2, 3, 4, 5];
                        var cosetOf = [0, 1, 2, 0, 1, 2]; // element i maps to coset cosetOf[i]
                        var cosetLabels = ['0+N', '1+N', '2+N'];
                        var cosetMembers = [[0, 3], [1, 4], [2, 5]];

                        var palette = ['#58a6ff', '#f0883e', '#56d364'];
                        var hoverElem = -1;

                        function elemPos(i) {
                            var angle = -Math.PI / 2 + (2 * Math.PI * i) / 6;
                            return { x: 140 + 90 * Math.cos(angle), y: 200 + 90 * Math.sin(angle) };
                        }
                        function cosetPos(j) {
                            var y = 100 + j * 100;
                            return { x: 440, y: y };
                        }

                        function draw() {
                            ctx.clearRect(0, 0, W, H);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, H);

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('G = Z/6Z', 140, 30);
                            ctx.fillText('G/N = Z/6Z / {0,3}', 440, 30);
                            ctx.fillText('\u03C0', 290, 160);

                            // Arrow
                            ctx.strokeStyle = '#8b949e';
                            ctx.lineWidth = 1.5;
                            ctx.setLineDash([5, 3]);
                            ctx.beginPath();
                            ctx.moveTo(250, 165);
                            ctx.lineTo(340, 165);
                            ctx.stroke();
                            ctx.setLineDash([]);
                            ctx.beginPath();
                            ctx.moveTo(340, 165);
                            ctx.lineTo(332, 160);
                            ctx.lineTo(332, 170);
                            ctx.closePath();
                            ctx.fillStyle = '#8b949e';
                            ctx.fill();

                            // Draw elements in G
                            for (var i = 0; i < elems.length; i++) {
                                var p = elemPos(i);
                                var c = cosetOf[i];
                                var isHover = (hoverElem === i);
                                ctx.beginPath();
                                ctx.arc(p.x, p.y, isHover ? 22 : 18, 0, 2 * Math.PI);
                                ctx.fillStyle = isHover ? palette[c] : '#161b22';
                                ctx.fill();
                                ctx.strokeStyle = palette[c];
                                ctx.lineWidth = isHover ? 3 : 2;
                                ctx.stroke();
                                ctx.fillStyle = '#e6edf3';
                                ctx.font = 'bold 14px monospace';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(String(elems[i]), p.x, p.y);
                            }

                            // Draw cosets in G/N
                            for (var j = 0; j < 3; j++) {
                                var cp = cosetPos(j);
                                var isTarget = (hoverElem >= 0 && cosetOf[hoverElem] === j);
                                ctx.beginPath();
                                ctx.roundRect(cp.x - 60, cp.y - 22, 120, 44, 8);
                                ctx.fillStyle = isTarget ? palette[j] + '44' : '#161b22';
                                ctx.fill();
                                ctx.strokeStyle = palette[j];
                                ctx.lineWidth = isTarget ? 3 : 2;
                                ctx.stroke();
                                ctx.fillStyle = isTarget ? '#ffffff' : '#e6edf3';
                                ctx.font = '13px monospace';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(cosetLabels[j] + ' = {' + cosetMembers[j].join(',') + '}', cp.x, cp.y);
                            }

                            // Draw mapping lines if hovering
                            if (hoverElem >= 0) {
                                var p = elemPos(hoverElem);
                                var c = cosetOf[hoverElem];
                                var cp = cosetPos(c);
                                ctx.strokeStyle = palette[c];
                                ctx.lineWidth = 2;
                                ctx.setLineDash([4, 3]);
                                ctx.beginPath();
                                ctx.moveTo(p.x + 20, p.y);
                                ctx.lineTo(cp.x - 60, cp.y);
                                ctx.stroke();
                                ctx.setLineDash([]);
                            }

                            ctx.textBaseline = 'alphabetic';
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('N = {0, 3}. Hover over elements to see the mapping.', W / 2, H - 20);
                        }

                        canvas.addEventListener('mousemove', function(e) {
                            var rect = canvas.getBoundingClientRect();
                            var mx = e.clientX - rect.left;
                            var my = e.clientY - rect.top;
                            hoverElem = -1;
                            for (var i = 0; i < elems.length; i++) {
                                var p = elemPos(i);
                                if ((mx - p.x) * (mx - p.x) + (my - p.y) * (my - p.y) < 500) {
                                    hoverElem = i;
                                    break;
                                }
                            }
                            draw();
                        });
                        canvas.addEventListener('mouseleave', function() {
                            hoverElem = -1;
                            draw();
                        });

                        draw();
                        return { cleanup: function() {} };
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex08',
                    type: 'multiple-choice',
                    question: 'What is the kernel of the natural projection pi: G -> G/N?',
                    options: ['G', '{e}', 'N', 'G/N'],
                    answer: 2,
                    explanation: 'By definition, ker(pi) = {g in G : pi(g) = eN = N} = {g in G : gN = N} = N.'
                },
                {
                    id: 'ch05-ex09',
                    type: 'short-answer',
                    question: 'True or false: The quotient map pi: G -> G/N is always injective.',
                    answer: 'False',
                    explanation: 'The quotient map is injective only when N = {e}. Otherwise, all elements of N map to the same coset eN = N, so pi is not injective whenever |N| > 1.'
                },
                {
                    id: 'ch05-ex10',
                    type: 'multiple-choice',
                    question: 'Let phi: Z -> Z/5Z be the natural projection. How many elements of Z map to the coset 2 + 5Z?',
                    options: ['1', '5', 'Infinitely many', 'None'],
                    answer: 2,
                    explanation: 'The coset 2 + 5Z = {..., -8, -3, 2, 7, 12, ...} contains infinitely many integers. Each of them maps to 2 + 5Z under the projection.'
                }
            ]
        },

        // ===== SECTION 4: Simple Groups =====
        {
            id: 'ch05-sec04',
            title: 'Simple Groups',
            content: `
                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define simple groups, prove that \\(A_n\\) is simple for \\(n \\ge 5\\), and discuss the role of simple groups in the classification program.</p>
                </div>

                <h2>Definition and First Examples</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Simple groups are the "atoms" of group theory. Just as integers factor into primes, finite groups can be broken down (via composition series) into simple groups. A group is simple when it has no nontrivial way to form a quotient, meaning the only normal subgroups are the trivial ones.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.17 (Simple Group)</div>
                    <div class="env-body">
                        <p>A group \\(G\\) with \\(|G| > 1\\) is <strong>simple</strong> if its only normal subgroups are \\(\\{e\\}\\) and \\(G\\) itself.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.18 (Cyclic Groups of Prime Order)</div>
                    <div class="env-body">
                        <p>If \\(p\\) is prime, then \\(\\mathbb{Z}/p\\mathbb{Z}\\) is simple. Indeed, by Lagrange's theorem, any subgroup must have order dividing \\(p\\), so the only subgroups are \\(\\{0\\}\\) and the whole group. Since there are no proper nontrivial subgroups at all, there are certainly no proper nontrivial normal subgroups.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.19 (\\(A_3\\) is Simple, \\(A_4\\) is Not)</div>
                    <div class="env-body">
                        <p>\\(A_3 \\cong \\mathbb{Z}/3\\mathbb{Z}\\) is simple (order 3 is prime). However, \\(A_4\\) is <em>not</em> simple: the Klein four-group \\(V = \\{e, (1\\;2)(3\\;4), (1\\;3)(2\\;4), (1\\;4)(2\\;3)\\}\\) is a normal subgroup of \\(A_4\\) with \\(|V| = 4\\).</p>
                    </div>
                </div>

                <h2>Simplicity of \\(A_n\\) for \\(n \\ge 5\\)</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.20 (\\(A_n\\) is Simple for \\(n \\ge 5\\))</div>
                    <div class="env-body">
                        <p>For every \\(n \\ge 5\\), the alternating group \\(A_n\\) is simple.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p>The proof proceeds in two key steps:</p>
                        <p><strong>Step 1.</strong> Show that \\(A_n\\) is generated by 3-cycles. Every even permutation is a product of an even number of transpositions, and every product of two transpositions can be written as a product of 3-cycles: \\((a\\;b)(a\\;c) = (a\\;c\\;b)\\) and \\((a\\;b)(c\\;d) = (a\\;c\\;b)(a\\;c\\;d)\\).</p>
                        <p><strong>Step 2.</strong> Show that if \\(N \\trianglelefteq A_n\\) and \\(N \\neq \\{e\\}\\), then \\(N\\) contains all 3-cycles. The argument uses the fact that for \\(n \\ge 5\\), given any non-identity \\(\\sigma \\in N\\), one can produce a 3-cycle in \\(N\\) by taking commutators \\([\\sigma, \\tau] = \\sigma\\tau\\sigma^{-1}\\tau^{-1}\\) with suitably chosen \\(\\tau\\). Once \\(N\\) contains one 3-cycle, normality forces it to contain all conjugates, hence all 3-cycles (since all 3-cycles in \\(A_n\\) are conjugate for \\(n \\ge 5\\)).</p>
                        <p>Since all 3-cycles lie in \\(N\\) and they generate \\(A_n\\), we get \\(N = A_n\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Why \\(n \\ge 5\\)?)</div>
                    <div class="env-body">
                        <p>The condition \\(n \\ge 5\\) is sharp. We have: \\(A_1\\) and \\(A_2\\) are trivial; \\(A_3 \\cong \\mathbb{Z}/3\\mathbb{Z}\\) is simple (but abelian); \\(A_4\\) has the Klein four-group as a normal subgroup. So the first nonabelian simple alternating group is \\(A_5\\), which has order 60.</p>
                    </div>
                </div>

                <h2>Role in Classification</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 5.21 (Composition Series)</div>
                    <div class="env-body">
                        <p>A <strong>composition series</strong> of a group \\(G\\) is a chain of subgroups</p>
                        \\[\\{e\\} = G_0 \\trianglelefteq G_1 \\trianglelefteq \\cdots \\trianglelefteq G_k = G\\]
                        <p>such that each quotient \\(G_{i+1}/G_i\\) is simple. The simple quotients are called <strong>composition factors</strong>.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.22 (Jordan-Holder)</div>
                    <div class="env-body">
                        <p>Any two composition series of a finite group \\(G\\) have the same length and the same composition factors (up to permutation and isomorphism).</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Classification of Finite Simple Groups)</div>
                    <div class="env-body">
                        <p>The classification theorem (completed around 2004, spanning thousands of journal pages) states that every finite simple group is one of: a cyclic group \\(\\mathbb{Z}/p\\mathbb{Z}\\) for \\(p\\) prime; an alternating group \\(A_n\\) for \\(n \\ge 5\\); a group of Lie type (e.g., \\(PSL_n(q)\\)); or one of 26 sporadic groups. The largest sporadic group is the Monster, with order approximately \\(8 \\times 10^{53}\\).</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch05-viz04"></div>
            `,
            visualizations: [
                {
                    id: 'ch05-viz04',
                    title: 'Normal Subgroup Lattice',
                    description: 'Explore the lattice of normal subgroups for small groups',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 380;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');
                        var W = canvas.width, H = canvas.height;

                        var groups = [
                            {
                                name: 'S3 (not simple)',
                                nodes: [
                                    { label: 'S3', x: 0.5, y: 0.1, order: 6 },
                                    { label: 'A3', x: 0.5, y: 0.5, order: 3 },
                                    { label: '{e}', x: 0.5, y: 0.9, order: 1 }
                                ],
                                edges: [[0,1],[1,2]],
                                note: 'Normal subgroups: {e}, A3, S3. Quotient S3/A3 = Z/2Z.'
                            },
                            {
                                name: 'A4 (not simple)',
                                nodes: [
                                    { label: 'A4', x: 0.5, y: 0.1, order: 12 },
                                    { label: 'V4', x: 0.5, y: 0.5, order: 4 },
                                    { label: '{e}', x: 0.5, y: 0.9, order: 1 }
                                ],
                                edges: [[0,1],[1,2]],
                                note: 'V4 = {e,(12)(34),(13)(24),(14)(23)} is normal. A4/V4 = Z/3Z.'
                            },
                            {
                                name: 'A5 (simple!)',
                                nodes: [
                                    { label: 'A5', x: 0.5, y: 0.1, order: 60 },
                                    { label: '{e}', x: 0.5, y: 0.9, order: 1 }
                                ],
                                edges: [[0,1]],
                                note: 'Only normal subgroups are {e} and A5 itself. A5 is the smallest nonabelian simple group.'
                            },
                            {
                                name: 'Z/12Z (not simple)',
                                nodes: [
                                    { label: 'Z/12Z', x: 0.5, y: 0.05, order: 12 },
                                    { label: '<2>=Z/6Z', x: 0.3, y: 0.3, order: 6 },
                                    { label: '<3>=Z/4Z', x: 0.7, y: 0.3, order: 4 },
                                    { label: '<4>=Z/3Z', x: 0.3, y: 0.6, order: 3 },
                                    { label: '<6>=Z/2Z', x: 0.7, y: 0.6, order: 2 },
                                    { label: '{0}', x: 0.5, y: 0.9, order: 1 }
                                ],
                                edges: [[0,1],[0,2],[1,3],[1,4],[2,4],[3,5],[4,5]],
                                note: 'Abelian, so every subgroup is normal. Many nontrivial quotients.'
                            }
                        ];
                        var chosen = 0;

                        var colors = ['#58a6ff', '#f0883e', '#56d364', '#f778ba', '#d2a8ff', '#79c0ff'];

                        function draw() {
                            ctx.clearRect(0, 0, W, H);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, H);

                            var g = groups[chosen];
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Normal subgroup lattice of ' + g.name, W / 2, 22);

                            var padX = 60, padY = 50;
                            var drawW = W - 2 * padX;
                            var drawH = H - 2 * padY - 30;

                            // Draw edges
                            ctx.strokeStyle = '#30363d';
                            ctx.lineWidth = 2;
                            for (var ei = 0; ei < g.edges.length; ei++) {
                                var a = g.nodes[g.edges[ei][0]];
                                var b = g.nodes[g.edges[ei][1]];
                                ctx.beginPath();
                                ctx.moveTo(padX + a.x * drawW, padY + a.y * drawH);
                                ctx.lineTo(padX + b.x * drawW, padY + b.y * drawH);
                                ctx.stroke();
                            }

                            // Draw nodes
                            for (var ni = 0; ni < g.nodes.length; ni++) {
                                var nd = g.nodes[ni];
                                var nx = padX + nd.x * drawW;
                                var ny = padY + nd.y * drawH;
                                ctx.beginPath();
                                ctx.arc(nx, ny, 20, 0, 2 * Math.PI);
                                ctx.fillStyle = colors[ni % colors.length] + '33';
                                ctx.fill();
                                ctx.strokeStyle = colors[ni % colors.length];
                                ctx.lineWidth = 2;
                                ctx.stroke();
                                ctx.fillStyle = '#e6edf3';
                                ctx.font = '11px monospace';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(nd.label, nx, ny);
                                ctx.font = '10px sans-serif';
                                ctx.fillStyle = '#8b949e';
                                ctx.fillText('|' + nd.order + '|', nx, ny + 28);
                            }

                            ctx.textBaseline = 'alphabetic';
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(g.note, W / 2, H - 15);
                        }

                        var sel = document.createElement('select');
                        sel.style.cssText = 'padding:4px 8px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;border-radius:4px;';
                        for (var i = 0; i < groups.length; i++) {
                            var opt = document.createElement('option');
                            opt.value = i;
                            opt.textContent = groups[i].name;
                            sel.appendChild(opt);
                        }
                        sel.addEventListener('change', function() {
                            chosen = parseInt(sel.value);
                            draw();
                        });
                        controls.appendChild(sel);
                        draw();
                        return { cleanup: function() {} };
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex11',
                    type: 'multiple-choice',
                    question: 'Which of the following groups is simple?',
                    options: ['Z/4Z', 'S3', 'A5', 'A4'],
                    answer: 2,
                    explanation: 'A5 is the smallest nonabelian simple group (order 60). Z/4Z has the normal subgroup {0,2}. S3 has the normal subgroup A3. A4 has the normal subgroup V4 (the Klein four-group).'
                },
                {
                    id: 'ch05-ex12',
                    type: 'short-answer',
                    question: 'True or false: Z/7Z is a simple group.',
                    answer: 'True',
                    explanation: 'Since 7 is prime, Z/7Z has no proper nontrivial subgroups at all (by Lagrange, any subgroup order must divide 7). Hence it is simple.'
                },
                {
                    id: 'ch05-ex13',
                    type: 'multiple-choice',
                    question: 'What is the smallest n such that A_n is a nonabelian simple group?',
                    options: ['3', '4', '5', '6'],
                    answer: 2,
                    explanation: 'A3 is cyclic of order 3 (abelian and simple). A4 is not simple (it has the Klein four-group as a normal subgroup). A5, with order 60, is the first nonabelian simple group among the alternating groups.'
                }
            ]
        },

        // ===== SECTION 5: The First Isomorphism Theorem =====
        {
            id: 'ch05-sec05',
            title: 'The First Isomorphism Theorem',
            content: `
                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and prove the First Isomorphism Theorem, then work through several applications showing how it identifies quotient groups with familiar groups.</p>
                </div>

                <h2>Statement and Proof</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>The First Isomorphism Theorem says that every surjective homomorphism is "secretly" a quotient map. If \\(\\varphi: G \\to H\\) is a homomorphism, then the image \\(\\text{im}(\\varphi)\\) is a copy of the quotient \\(G/\\ker(\\varphi)\\). The kernel measures exactly what information is lost by \\(\\varphi\\), and the theorem says that is the <em>only</em> information lost.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 5.23 (First Isomorphism Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(\\varphi: G \\to H\\) be a group homomorphism. Then:</p>
                        <ol>
                            <li>\\(\\ker(\\varphi) \\trianglelefteq G\\).</li>
                            <li>\\(\\text{im}(\\varphi) \\le H\\).</li>
                            <li>The map \\(\\bar{\\varphi}: G/\\ker(\\varphi) \\to \\text{im}(\\varphi)\\) defined by \\(\\bar{\\varphi}(g\\ker(\\varphi)) = \\varphi(g)\\) is an isomorphism:</li>
                        </ol>
                        \\[G/\\ker(\\varphi) \\cong \\text{im}(\\varphi).\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(K = \\ker(\\varphi)\\).</p>
                        <p><strong>(1)</strong> We showed in Theorem 5.2 that every kernel is normal: for \\(g \\in G\\) and \\(k \\in K\\), \\(\\varphi(gkg^{-1}) = \\varphi(g)e_H\\varphi(g)^{-1} = e_H\\), so \\(gkg^{-1} \\in K\\).</p>
                        <p><strong>(2)</strong> \\(\\text{im}(\\varphi)\\) is nonempty (contains \\(e_H\\)) and closed under products and inverses, so it is a subgroup of \\(H\\).</p>
                        <p><strong>(3)</strong> Define \\(\\bar{\\varphi}(gK) = \\varphi(g)\\).</p>
                        <ul>
                            <li><em>Well-defined:</em> If \\(gK = g'K\\), then \\(g' = gk\\) for some \\(k \\in K\\), so \\(\\varphi(g') = \\varphi(g)\\varphi(k) = \\varphi(g)e_H = \\varphi(g)\\).</li>
                            <li><em>Homomorphism:</em> \\(\\bar{\\varphi}((aK)(bK)) = \\bar{\\varphi}((ab)K) = \\varphi(ab) = \\varphi(a)\\varphi(b) = \\bar{\\varphi}(aK)\\bar{\\varphi}(bK)\\).</li>
                            <li><em>Injective:</em> If \\(\\bar{\\varphi}(gK) = e_H\\), then \\(\\varphi(g) = e_H\\), so \\(g \\in K\\), hence \\(gK = K\\). The kernel of \\(\\bar{\\varphi}\\) is trivial.</li>
                            <li><em>Surjective onto \\(\\text{im}(\\varphi)\\):</em> Every \\(\\varphi(g) \\in \\text{im}(\\varphi)\\) is the image of \\(gK\\).</li>
                        </ul>
                        <p>Therefore \\(\\bar{\\varphi}\\) is an isomorphism \\(G/K \\xrightarrow{\\sim} \\text{im}(\\varphi)\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h2>Applications</h2>

                <div class="env-block example">
                    <div class="env-title">Example 5.24 (Determinant and the Special Linear Group)</div>
                    <div class="env-body">
                        <p>The determinant map \\(\\det: GL_n(\\mathbb{R}) \\to \\mathbb{R}^*\\) is a surjective homomorphism with \\(\\ker(\\det) = SL_n(\\mathbb{R})\\). By the First Isomorphism Theorem,</p>
                        \\[GL_n(\\mathbb{R})/SL_n(\\mathbb{R}) \\cong \\mathbb{R}^*.\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.25 (Sign Homomorphism)</div>
                    <div class="env-body">
                        <p>The sign map \\(\\text{sgn}: S_n \\to \\{\\pm 1\\}\\) is surjective with kernel \\(A_n\\). By the First Isomorphism Theorem,</p>
                        \\[S_n/A_n \\cong \\{\\pm 1\\} \\cong \\mathbb{Z}/2\\mathbb{Z}.\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.26 (Reduction Modulo \\(n\\))</div>
                    <div class="env-body">
                        <p>The map \\(\\varphi: \\mathbb{Z} \\to \\mathbb{Z}/n\\mathbb{Z}\\) sending \\(k \\mapsto \\bar{k}\\) is a surjective homomorphism with \\(\\ker(\\varphi) = n\\mathbb{Z}\\). The First Isomorphism Theorem gives</p>
                        \\[\\mathbb{Z}/n\\mathbb{Z} \\cong \\mathbb{Z}/n\\mathbb{Z},\\]
                        <p>which is tautological but confirms the construction is consistent. A more interesting application: the map \\(\\varphi: \\mathbb{Z}/12\\mathbb{Z} \\to \\mathbb{Z}/4\\mathbb{Z}\\) defined by \\(\\varphi(\\bar{k}) = k \\bmod 4\\) has kernel \\(\\{\\bar{0}, \\bar{4}, \\bar{8}\\} \\cong \\mathbb{Z}/3\\mathbb{Z}\\), giving</p>
                        \\[(\\mathbb{Z}/12\\mathbb{Z})/(\\mathbb{Z}/3\\mathbb{Z}) \\cong \\mathbb{Z}/4\\mathbb{Z}.\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 5.27 (Exponential Map Revisited)</div>
                    <div class="env-body">
                        <p>Consider the map \\(\\varphi: (\\mathbb{R}, +) \\to (\\mathbb{C}^*, \\cdot)\\) defined by \\(\\varphi(t) = e^{2\\pi i t}\\). This is a homomorphism because \\(e^{2\\pi i(s+t)} = e^{2\\pi is}e^{2\\pi it}\\). The image is the unit circle \\(S^1\\), and \\(\\ker(\\varphi) = \\mathbb{Z}\\) (those \\(t\\) for which \\(e^{2\\pi it} = 1\\)). The First Isomorphism Theorem gives</p>
                        \\[\\mathbb{R}/\\mathbb{Z} \\cong S^1.\\]
                        <p>This is a fundamental result connecting the additive real line to the circle group.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="ch05-viz05"></div>
                <div class="viz-placeholder" data-viz="ch05-viz06"></div>
            `,
            visualizations: [
                {
                    id: 'ch05-viz05',
                    title: 'First Isomorphism Theorem Diagram',
                    description: 'Interactive commutative diagram for the First Isomorphism Theorem',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 360;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');
                        var W = canvas.width, H = canvas.height;

                        var examples = [
                            {
                                name: 'det: GL_n(R) -> R*',
                                G: 'GL_n(R)', H: 'R*',
                                K: 'SL_n(R)', imag: 'R*',
                                quotient: 'GL_n(R)/SL_n(R)',
                                iso: 'GL_n(R)/SL_n(R) \u2245 R*'
                            },
                            {
                                name: 'sgn: S_n -> {+/-1}',
                                G: 'S_n', H: '{+/-1}',
                                K: 'A_n', imag: '{+/-1}',
                                quotient: 'S_n/A_n',
                                iso: 'S_n/A_n \u2245 Z/2Z'
                            },
                            {
                                name: 'exp: R -> S^1',
                                G: '(R, +)', H: '(C*, \u00B7)',
                                K: 'Z', imag: 'S\u00B9',
                                quotient: 'R/Z',
                                iso: 'R/Z \u2245 S\u00B9'
                            }
                        ];
                        var chosen = 0;
                        var animT = 0;
                        var animId = null;

                        function draw() {
                            ctx.clearRect(0, 0, W, H);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, H);

                            var ex = examples[chosen];

                            // Positions of the three objects
                            var gx = 100, gy = 80;   // G (top-left)
                            var hx = 480, hy = 80;   // H (top-right)
                            var qx = 100, qy = 280;  // G/K (bottom-left)

                            // phi: G -> H (top arrow)
                            ctx.strokeStyle = '#58a6ff';
                            ctx.lineWidth = 2;
                            drawArrow(ctx, gx + 50, gy, hx - 60, hy);
                            ctx.fillStyle = '#58a6ff';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('\u03C6', (gx + hx) / 2, gy - 12);

                            // pi: G -> G/K (left arrow down)
                            ctx.strokeStyle = '#f0883e';
                            drawArrow(ctx, gx, gy + 20, qx, qy - 20);
                            ctx.fillStyle = '#f0883e';
                            ctx.fillText('\u03C0', gx - 20, (gy + qy) / 2);

                            // phi-bar: G/K -> im(phi) (diagonal arrow)
                            var pulse = 0.5 + 0.5 * Math.sin(animT * 3);
                            ctx.strokeStyle = 'rgba(86,211,100,' + (0.5 + 0.5 * pulse) + ')';
                            ctx.lineWidth = 2.5;
                            drawArrow(ctx, qx + 70, qy - 10, hx - 60, hy + 20);
                            ctx.fillStyle = '#56d364';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.fillText('\u03C6\u0305  (\u2245)', (qx + hx) / 2 + 30, (qy + hy) / 2 + 10);

                            // Labels for objects
                            ctx.font = 'bold 15px monospace';
                            ctx.textAlign = 'center';
                            ctx.fillStyle = '#e6edf3';
                            ctx.fillText(ex.G, gx, gy);
                            ctx.fillText(ex.H, hx, hy);
                            ctx.fillText(ex.quotient, qx + 30, qy);

                            // ker and im annotations
                            ctx.font = '12px sans-serif';
                            ctx.fillStyle = '#f0883e';
                            ctx.textAlign = 'left';
                            ctx.fillText('ker(\u03C6) = ' + ex.K, 20, qy + 40);
                            ctx.fillStyle = '#58a6ff';
                            ctx.fillText('im(\u03C6) = ' + ex.imag, 320, hy + 40);

                            // Result
                            ctx.fillStyle = '#56d364';
                            ctx.font = 'bold 16px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('First Isomorphism Theorem: ' + ex.iso, W / 2, H - 20);
                        }

                        function drawArrow(c, x1, y1, x2, y2) {
                            var angle = Math.atan2(y2 - y1, x2 - x1);
                            c.beginPath();
                            c.moveTo(x1, y1);
                            c.lineTo(x2, y2);
                            c.stroke();
                            c.beginPath();
                            c.moveTo(x2, y2);
                            c.lineTo(x2 - 10 * Math.cos(angle - 0.3), y2 - 10 * Math.sin(angle - 0.3));
                            c.lineTo(x2 - 10 * Math.cos(angle + 0.3), y2 - 10 * Math.sin(angle + 0.3));
                            c.closePath();
                            c.fillStyle = c.strokeStyle;
                            c.fill();
                        }

                        function animate() {
                            animT += 0.016;
                            draw();
                            animId = requestAnimationFrame(animate);
                        }

                        var sel = document.createElement('select');
                        sel.style.cssText = 'padding:4px 8px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;border-radius:4px;';
                        for (var i = 0; i < examples.length; i++) {
                            var opt = document.createElement('option');
                            opt.value = i;
                            opt.textContent = examples[i].name;
                            sel.appendChild(opt);
                        }
                        sel.addEventListener('change', function() {
                            chosen = parseInt(sel.value);
                        });
                        controls.appendChild(sel);
                        animate();
                        return { cleanup: function() { if (animId) cancelAnimationFrame(animId); } };
                    }
                },
                {
                    id: 'ch05-viz06',
                    title: 'R/Z = S1 Visualization',
                    description: 'See how the real line wraps around the circle via the exponential map',
                    setup: function(body, controls) {
                        var canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 340;
                        body.appendChild(canvas);
                        var ctx = canvas.getContext('2d');
                        var W = canvas.width, H = canvas.height;

                        var t = 0.0;
                        var animId = null;
                        var dragging = false;

                        function draw() {
                            ctx.clearRect(0, 0, W, H);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, H);

                            // Real line on left
                            var lineX = 80;
                            var lineTop = 40, lineBot = H - 40;
                            ctx.strokeStyle = '#30363d';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(lineX, lineTop);
                            ctx.lineTo(lineX, lineBot);
                            ctx.stroke();

                            // Tick marks for integers
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '11px monospace';
                            ctx.textAlign = 'right';
                            for (var k = -2; k <= 3; k++) {
                                var yy = H / 2 - k * 50;
                                if (yy < lineTop || yy > lineBot) continue;
                                ctx.beginPath();
                                ctx.moveTo(lineX - 5, yy);
                                ctx.lineTo(lineX + 5, yy);
                                ctx.stroke();
                                ctx.fillText(String(k), lineX - 10, yy + 4);
                            }

                            // Current point on real line
                            var ptY = H / 2 - t * 50;
                            ctx.beginPath();
                            ctx.arc(lineX, ptY, 6, 0, 2 * Math.PI);
                            ctx.fillStyle = '#58a6ff';
                            ctx.fill();

                            ctx.fillStyle = '#58a6ff';
                            ctx.textAlign = 'left';
                            ctx.font = '12px sans-serif';
                            ctx.fillText('t = ' + t.toFixed(2), lineX + 15, ptY + 4);

                            // Circle on right
                            var cx = 380, cy = H / 2, cr = 100;
                            ctx.strokeStyle = '#30363d';
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.arc(cx, cy, cr, 0, 2 * Math.PI);
                            ctx.stroke();

                            // Point on circle: e^{2pi i t}
                            var angle = 2 * Math.PI * t;
                            var px = cx + cr * Math.cos(angle - Math.PI / 2);
                            var py = cy - cr * Math.sin(Math.PI / 2 - angle);
                            // Correcting: angle measured from top going clockwise
                            px = cx + cr * Math.sin(angle);
                            py = cy - cr * Math.cos(angle);

                            ctx.beginPath();
                            ctx.arc(px, py, 7, 0, 2 * Math.PI);
                            ctx.fillStyle = '#56d364';
                            ctx.fill();

                            // Mark 1 (top of circle)
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '11px monospace';
                            ctx.textAlign = 'center';
                            ctx.fillText('1', cx, cy - cr - 10);
                            ctx.fillText('-1', cx, cy + cr + 14);
                            ctx.fillText('i', cx + cr + 12, cy + 4);
                            ctx.fillText('-i', cx - cr - 14, cy + 4);

                            // Arrow from real line to circle
                            ctx.strokeStyle = '#8b949e';
                            ctx.lineWidth = 1;
                            ctx.setLineDash([4, 3]);
                            ctx.beginPath();
                            ctx.moveTo(lineX + 10, ptY);
                            ctx.lineTo(px - 10, py);
                            ctx.stroke();
                            ctx.setLineDash([]);

                            // Labels
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('R', lineX, 25);
                            ctx.fillText('S\u00B9 = R/Z', cx, 25);
                            ctx.fillText('\u03C6(t) = e^(2\u03C0it)', W / 2, H - 10);

                            // Show that integer values all map to 1
                            ctx.fillStyle = '#f0883e';
                            ctx.font = '11px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('ker = Z (all integers map to 1)', 460, cy - 20);
                        }

                        // Slider for t
                        var slider = document.createElement('input');
                        slider.type = 'range';
                        slider.min = '-2';
                        slider.max = '3';
                        slider.step = '0.01';
                        slider.value = '0';
                        slider.style.cssText = 'width:200px;';
                        slider.addEventListener('input', function() {
                            t = parseFloat(slider.value);
                            draw();
                        });
                        var label = document.createElement('span');
                        label.style.cssText = 'color:#c9d1d9;margin-left:8px;font-size:13px;';
                        label.textContent = 'Drag to change t';
                        controls.appendChild(slider);
                        controls.appendChild(label);
                        draw();
                        return { cleanup: function() {} };
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch05-ex14',
                    type: 'multiple-choice',
                    question: 'The First Isomorphism Theorem states that if phi: G -> H is a homomorphism, then G/ker(phi) is isomorphic to:',
                    options: ['H', 'ker(phi)', 'im(phi)', 'G'],
                    answer: 2,
                    explanation: 'The First Isomorphism Theorem gives G/ker(phi) = im(phi). The quotient by the kernel is isomorphic to the image, not to the entire codomain H (unless phi is surjective).'
                },
                {
                    id: 'ch05-ex15',
                    type: 'multiple-choice',
                    question: 'Consider the map phi: Z -> Z/6Z sending k to k mod 6. What is Z/ker(phi)?',
                    options: ['Z', 'Z/6Z', '{0}', 'Z/3Z'],
                    answer: 1,
                    explanation: 'The kernel is 6Z. By the First Isomorphism Theorem, Z/6Z = Z/ker(phi) = im(phi) = Z/6Z.'
                },
                {
                    id: 'ch05-ex16',
                    type: 'short-answer',
                    question: 'Using the First Isomorphism Theorem, what is R/Z isomorphic to? (Answer with a standard mathematical name.)',
                    answer: 'S1',
                    explanation: 'The map t -> e^{2 pi i t} from (R,+) to (C*,*) has kernel Z and image S1 (the unit circle). By the First Isomorphism Theorem, R/Z = S1.'
                },
                {
                    id: 'ch05-ex17',
                    type: 'multiple-choice',
                    question: 'If phi: G -> H is a surjective homomorphism with trivial kernel, what can we conclude?',
                    options: ['G and H are both abelian', 'G = H/ker(phi)', 'G is isomorphic to H', 'H is a subgroup of G'],
                    answer: 2,
                    explanation: 'If ker(phi) = {e} and phi is surjective, then phi is a bijective homomorphism, hence an isomorphism. By the First Isomorphism Theorem, G/{e} = G = im(phi) = H.'
                }
            ]
        }
    ]
});
