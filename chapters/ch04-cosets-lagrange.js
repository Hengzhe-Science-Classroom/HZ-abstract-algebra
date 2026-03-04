window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch04',
    number: 4,
    title: "Cosets and Lagrange's Theorem",
    subtitle: "Cosets, index, Lagrange's theorem, applications",
    sections: [
        // ===== SECTION 1: Cosets =====
        {
            id: 'ch04-sec01',
            title: 'Cosets',
            content: `
                <div class="bridge opening-bridge">
                    <p><strong>From subgroups to partitions.</strong> In the previous chapters we studied groups, subgroups, and cyclic groups. A natural question arises: given a subgroup \\(H\\) of a group \\(G\\), how does \\(H\\) sit inside \\(G\\)? The answer involves <em>cosets</em>, which partition \\(G\\) into equal-sized pieces. This decomposition is the key to one of the most important theorems in finite group theory.</p>
                </div>

                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Define left and right cosets, prove that they partition the group, and show that all cosets have the same cardinality.</p>
                </div>

                <h2>Left Cosets</h2>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Think of a subgroup \\(H\\) as a "template." A left coset \\(gH\\) is obtained by shifting every element of \\(H\\) by \\(g\\). It is like translating a shape in geometry: the shape stays the same size, but moves to a new position. The collection of all these shifts covers the entire group without overlap.</p>
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.1 (Left Coset)</div>
                    <div class="env-body">
                        <p>Let \\(H\\) be a subgroup of a group \\(G\\), and let \\(g \\in G\\). The <strong>left coset</strong> of \\(H\\) containing \\(g\\) is the set</p>
                        \\[gH = \\{gh : h \\in H\\}.\\]
                    </div>
                </div>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.2 (Right Coset)</div>
                    <div class="env-body">
                        <p>Similarly, the <strong>right coset</strong> of \\(H\\) containing \\(g\\) is</p>
                        \\[Hg = \\{hg : h \\in H\\}.\\]
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 4.3 (Cosets in \\(\\mathbb{Z}\\))</div>
                    <div class="env-body">
                        <p>Consider \\(G = \\mathbb{Z}\\) under addition and \\(H = 3\\mathbb{Z} = \\{\\ldots, -6, -3, 0, 3, 6, \\ldots\\}\\). The left cosets are:</p>
                        <ul>
                            <li>\\(0 + 3\\mathbb{Z} = \\{\\ldots, -6, -3, 0, 3, 6, \\ldots\\}\\)</li>
                            <li>\\(1 + 3\\mathbb{Z} = \\{\\ldots, -5, -2, 1, 4, 7, \\ldots\\}\\)</li>
                            <li>\\(2 + 3\\mathbb{Z} = \\{\\ldots, -4, -1, 2, 5, 8, \\ldots\\}\\)</li>
                        </ul>
                        <p>These are exactly the residue classes modulo 3. Since \\(\\mathbb{Z}\\) is abelian, left and right cosets coincide.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 4.4 (Cosets in \\(S_3\\))</div>
                    <div class="env-body">
                        <p>Let \\(G = S_3\\) and \\(H = \\{e, (1\\;2)\\}\\). The left cosets are:</p>
                        <ul>
                            <li>\\(eH = \\{e, (1\\;2)\\}\\)</li>
                            <li>\\((1\\;3)H = \\{(1\\;3), (1\\;2\\;3)\\}\\)</li>
                            <li>\\((2\\;3)H = \\{(2\\;3), (1\\;3\\;2)\\}\\)</li>
                        </ul>
                        <p>The right cosets are:</p>
                        <ul>
                            <li>\\(He = \\{e, (1\\;2)\\}\\)</li>
                            <li>\\(H(1\\;3) = \\{(1\\;3), (1\\;3\\;2)\\}\\)</li>
                            <li>\\(H(2\\;3) = \\{(2\\;3), (1\\;2\\;3)\\}\\)</li>
                        </ul>
                        <p>Notice the left and right cosets differ! This happens because \\(H\\) is not a normal subgroup of \\(S_3\\).</p>
                    </div>
                </div>

                <h2>Cosets Partition the Group</h2>

                <div class="env-block lemma">
                    <div class="env-title">Lemma 4.5 (Coset Equality Criterion)</div>
                    <div class="env-body">
                        <p>Let \\(H \\le G\\) and \\(a, b \\in G\\). The following are equivalent:</p>
                        <ol>
                            <li>\\(aH = bH\\)</li>
                            <li>\\(a \\in bH\\)</li>
                            <li>\\(b^{-1}a \\in H\\)</li>
                            <li>\\(aH \\cap bH \\neq \\emptyset\\)</li>
                        </ol>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(1) \\(\\Rightarrow\\) (2):</strong> If \\(aH = bH\\), then \\(a = ae \\in aH = bH\\).</p>
                        <p><strong>(2) \\(\\Rightarrow\\) (3):</strong> If \\(a \\in bH\\), then \\(a = bh\\) for some \\(h \\in H\\), so \\(b^{-1}a = h \\in H\\).</p>
                        <p><strong>(3) \\(\\Rightarrow\\) (1):</strong> Suppose \\(b^{-1}a = h_0 \\in H\\). For any \\(ah \\in aH\\), we have \\(ah = b(b^{-1}a)h = b(h_0 h) \\in bH\\), so \\(aH \\subseteq bH\\). Similarly, \\(a^{-1}b = h_0^{-1} \\in H\\) gives \\(bH \\subseteq aH\\).</p>
                        <p><strong>(1) \\(\\Rightarrow\\) (4):</strong> Obvious since cosets are nonempty.</p>
                        <p><strong>(4) \\(\\Rightarrow\\) (2):</strong> If \\(c \\in aH \\cap bH\\), then \\(c = ah_1 = bh_2\\), so \\(a = bh_2h_1^{-1} \\in bH\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.6 (Cosets Partition \\(G\\))</div>
                    <div class="env-body">
                        <p>Let \\(H \\le G\\). The left cosets of \\(H\\) in \\(G\\) form a <strong>partition</strong> of \\(G\\): every element of \\(G\\) lies in exactly one left coset, and two cosets are either identical or disjoint.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Every \\(g \\in G\\) belongs to the coset \\(gH\\), so the cosets cover \\(G\\). By Lemma 4.5, if \\(aH \\cap bH \\neq \\emptyset\\) then \\(aH = bH\\). Therefore distinct cosets are disjoint.</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Cosets as Equivalence Classes)</div>
                    <div class="env-body">
                        <p>Define \\(a \\sim b\\) if \\(b^{-1}a \\in H\\). This is an equivalence relation on \\(G\\), and the equivalence classes are precisely the left cosets \\(gH\\).</p>
                    </div>
                </div>

                <h2>All Cosets Have the Same Size</h2>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 4.7 (Equal Cardinality of Cosets)</div>
                    <div class="env-body">
                        <p>For any \\(g \\in G\\), the map \\(\\phi: H \\to gH\\) defined by \\(\\phi(h) = gh\\) is a bijection. In particular, \\(|gH| = |H|\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>Surjective:</strong> Every element of \\(gH\\) has the form \\(gh\\) for some \\(h \\in H\\).</p>
                        <p><strong>Injective:</strong> If \\(gh_1 = gh_2\\), then left-cancellation gives \\(h_1 = h_2\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="coset-partition-viz"></div>
                <div class="viz-placeholder" data-viz="coset-z12-viz"></div>
            `,
            visualizations: [
                {
                    id: 'coset-partition-viz',
                    title: 'Coset Partition of S3',
                    description: 'Visualize how left cosets of a subgroup partition S3 into disjoint blocks',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 380;
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');
                        const W = canvas.width, H = canvas.height;

                        const elements = ['e', '(1 2)', '(1 3)', '(2 3)', '(1 2 3)', '(1 3 2)'];
                        const subgroups = {
                            '{e, (1 2)}': [['e', '(1 2)'], ['(1 3)', '(1 2 3)'], ['(2 3)', '(1 3 2)']],
                            '{e, (1 3)}': [['e', '(1 3)'], ['(1 2)', '(1 3 2)'], ['(2 3)', '(1 2 3)']],
                            '{e, (2 3)}': [['e', '(2 3)'], ['(1 2)', '(1 2 3)'], ['(1 3)', '(1 3 2)']],
                            '{e, (1 2 3), (1 3 2)}': [['e', '(1 2 3)', '(1 3 2)'], ['(1 2)', '(1 3)', '(2 3)']]
                        };
                        const subNames = Object.keys(subgroups);
                        let chosen = 0;

                        const colors = ['#58a6ff', '#f0883e', '#56d364', '#f778ba', '#d2a8ff', '#79c0ff'];
                        const cosetColors = ['#264f78', '#5a3600', '#1b4721', '#5e2040'];

                        function draw() {
                            ctx.clearRect(0, 0, W, H);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, H);

                            const sub = subNames[chosen];
                            const cosets = subgroups[sub];

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Left cosets of H = ' + sub + ' in S\u2083', W / 2, 28);

                            const gap = 16;
                            const totalW = W - 2 * gap;
                            const cosetW = (totalW - (cosets.length - 1) * gap) / cosets.length;
                            const boxH = 240;
                            const topY = 50;

                            for (let ci = 0; ci < cosets.length; ci++) {
                                const coset = cosets[ci];
                                const x0 = gap + ci * (cosetW + gap);

                                ctx.fillStyle = cosetColors[ci % cosetColors.length];
                                ctx.strokeStyle = colors[ci % colors.length];
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.roundRect(x0, topY, cosetW, boxH, 10);
                                ctx.fill();
                                ctx.stroke();

                                ctx.fillStyle = colors[ci % colors.length];
                                ctx.font = 'bold 13px sans-serif';
                                ctx.textAlign = 'center';
                                var rep = coset[0] === 'e' ? 'e' : coset[0];
                                ctx.fillText(rep + 'H', x0 + cosetW / 2, topY + 24);

                                ctx.font = '15px monospace';
                                ctx.fillStyle = '#e6edf3';
                                var elemGap = boxH / (coset.length + 2);
                                for (var ei = 0; ei < coset.length; ei++) {
                                    var ey = topY + 45 + ei * elemGap;
                                    ctx.fillText(coset[ei], x0 + cosetW / 2, ey + elemGap / 2);
                                }
                            }

                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('|H| = ' + cosets[0].length + ',  number of cosets = ' + cosets.length + ',  |S\u2083| = 6 = ' + cosets[0].length + ' \u00d7 ' + cosets.length, W / 2, topY + boxH + 30);
                            ctx.fillText('Every element appears in exactly one coset (partition).', W / 2, topY + boxH + 50);
                        }

                        var sel = document.createElement('select');
                        sel.style.cssText = 'padding:4px 8px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;border-radius:4px;';
                        for (var si = 0; si < subNames.length; si++) {
                            var opt = document.createElement('option');
                            opt.value = si;
                            opt.textContent = 'H = ' + subNames[si];
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
                },
                {
                    id: 'coset-z12-viz',
                    title: 'Coset Decomposition of Z/12Z',
                    description: 'See how cosets of a subgroup tile the cyclic group Z/12Z around a clock face',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');
                        const W = canvas.width, H = canvas.height;

                        const divs = [1, 2, 3, 4, 6, 12];
                        let dIdx = 2;

                        const palette = ['#58a6ff', '#f0883e', '#56d364', '#f778ba', '#d2a8ff', '#79c0ff',
                                         '#ffa657', '#7ee787', '#ff7b72', '#d2a8ff', '#a5d6ff', '#ffd700'];

                        function draw() {
                            ctx.clearRect(0, 0, W, H);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, H);

                            var d = divs[dIdx];
                            var subSize = 12 / d;
                            var numCosets = d;

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Cosets of H = <' + subSize * (subSize > 1 ? 1 : 0) + '> = ' + d + 'Z/12Z in Z/12Z', W / 2, 24);

                            var cx = W / 2, cy = H / 2 + 10, R = 140;

                            ctx.strokeStyle = '#30363d';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.arc(cx, cy, R, 0, 2 * Math.PI);
                            ctx.stroke();

                            for (var i = 0; i < 12; i++) {
                                var angle = -Math.PI / 2 + (2 * Math.PI * i) / 12;
                                var cosetIdx = i % d;
                                var color = palette[cosetIdx % palette.length];

                                var px = cx + R * Math.cos(angle);
                                var py = cy + R * Math.sin(angle);

                                ctx.fillStyle = color;
                                ctx.beginPath();
                                ctx.arc(px, py, 20, 0, 2 * Math.PI);
                                ctx.fill();

                                ctx.fillStyle = '#0d1117';
                                ctx.font = 'bold 14px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('' + i, px, py);
                            }

                            var legendY = H - 70;
                            ctx.font = '12px sans-serif';
                            ctx.textBaseline = 'top';
                            for (var c = 0; c < numCosets; c++) {
                                var lx = 30 + c * (W / numCosets);
                                ctx.fillStyle = palette[c % palette.length];
                                ctx.beginPath();
                                ctx.arc(lx, legendY, 6, 0, 2 * Math.PI);
                                ctx.fill();

                                var members = [];
                                for (var m = c; m < 12; m += d) members.push(m);
                                ctx.fillStyle = '#c9d1d9';
                                ctx.textAlign = 'left';
                                ctx.fillText(c + ' + H = {' + members.join(', ') + '}', lx + 12, legendY - 6);
                            }

                            ctx.fillStyle = '#8b949e';
                            ctx.textAlign = 'center';
                            ctx.fillText('|H| = ' + (12 / d) + ',  [Z/12Z : H] = ' + d + ',  |G| = |H| \u00b7 [G:H] = ' + (12 / d) + ' \u00d7 ' + d + ' = 12', W / 2, H - 20);
                        }

                        var sel = document.createElement('select');
                        sel.style.cssText = 'padding:4px 8px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;border-radius:4px;';
                        for (var di = 0; di < divs.length; di++) {
                            var opt = document.createElement('option');
                            opt.value = di;
                            var subOrder = 12 / divs[di];
                            opt.textContent = 'H = <' + divs[di] + '>,  |H| = ' + subOrder;
                            if (di === dIdx) opt.selected = true;
                            sel.appendChild(opt);
                        }
                        sel.addEventListener('change', function() {
                            dIdx = parseInt(sel.value);
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
                    id: 'ch04-ex01',
                    type: 'multiple-choice',
                    question: 'Let H = {0, 4, 8} in Z/12Z. How many distinct left cosets does H have?',
                    options: ['2', '3', '4', '6'],
                    answer: 2,
                    explanation: 'H has order 3. By Lagrange\'s theorem (or by direct computation), the number of cosets is |G|/|H| = 12/3 = 4. The cosets are {0,4,8}, {1,5,9}, {2,6,10}, {3,7,11}.'
                },
                {
                    id: 'ch04-ex02',
                    type: 'multiple-choice',
                    question: 'In S3, let H = {e, (1 2 3), (1 3 2)}. How many left cosets of H are there?',
                    options: ['1', '2', '3', '6'],
                    answer: 1,
                    explanation: '|S3| = 6 and |H| = 3, so the number of cosets is 6/3 = 2. The cosets are H = {e, (1 2 3), (1 3 2)} and (1 2)H = {(1 2), (2 3), (1 3)}.'
                },
                {
                    id: 'ch04-ex03',
                    type: 'multiple-choice',
                    question: 'If aH = bH, which of the following must be true?',
                    options: ['a = b', 'a and b are in H', 'b&#8315;&#185;a is in H', 'ab is in H'],
                    answer: 2,
                    explanation: 'By the coset equality criterion, aH = bH if and only if b&#8315;&#185;a belongs to H. We do not need a = b or that a, b themselves belong to H.'
                },
                {
                    id: 'ch04-ex04',
                    type: 'short-answer',
                    question: 'True or false: In every group, the left cosets of H equal the right cosets of H.',
                    answer: 'False',
                    explanation: 'Left and right cosets coincide if and only if H is a normal subgroup. For instance, in S3 with H = {e, (1 2)}, the left coset (1 3)H differs from the right coset H(1 3).'
                }
            ]
        },

        // ===== SECTION 2: Lagrange's Theorem =====
        {
            id: 'ch04-sec02',
            title: "Lagrange's Theorem",
            content: `
                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> State and prove Lagrange's theorem, the cornerstone result that the order of any subgroup divides the order of the group. Introduce the index \\([G:H]\\).</p>
                </div>

                <h2>The Index of a Subgroup</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.8 (Index)</div>
                    <div class="env-body">
                        <p>Let \\(H \\le G\\). The <strong>index</strong> of \\(H\\) in \\(G\\), denoted \\([G:H]\\), is the number of distinct left cosets of \\(H\\) in \\(G\\). (This may be infinite.)</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 4.9</div>
                    <div class="env-body">
                        <ul>
                            <li>\\([\\mathbb{Z} : n\\mathbb{Z}] = n\\) for any \\(n \\ge 1\\).</li>
                            <li>\\([S_3 : \\{e, (1\\;2)\\}] = 3\\).</li>
                            <li>\\([S_3 : A_3] = 2\\), where \\(A_3 = \\{e, (1\\;2\\;3), (1\\;3\\;2)\\}\\).</li>
                        </ul>
                    </div>
                </div>

                <h2>Lagrange's Theorem</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.10 (Lagrange's Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(G\\) be a finite group and \\(H \\le G\\). Then</p>
                        \\[|G| = |H| \\cdot [G:H].\\]
                        <p>In particular, \\(|H|\\) divides \\(|G|\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>By Theorem 4.6, the distinct left cosets \\(g_1H, g_2H, \\ldots, g_kH\\) form a partition of \\(G\\), where \\(k = [G:H]\\). Therefore:</p>
                        \\[|G| = |g_1 H| + |g_2 H| + \\cdots + |g_k H|.\\]
                        <p>By Proposition 4.7, every coset has the same cardinality as \\(H\\): \\(|g_i H| = |H|\\) for all \\(i\\). Thus:</p>
                        \\[|G| = k \\cdot |H| = [G:H] \\cdot |H|.\\]
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block intuition">
                    <div class="env-title">Intuition</div>
                    <div class="env-body">
                        <p>Lagrange's theorem says that \\(G\\) is tiled by copies of \\(H\\), each having the same size. Counting tiles times the size of each tile gives the total size. This is analogous to: if a floor of area 24 is tiled by tiles of area 4, then you use exactly 6 tiles.</p>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 4.11 (Subgroups of \\(S_3\\))</div>
                    <div class="env-body">
                        <p>\\(|S_3| = 6\\). By Lagrange, any subgroup has order dividing 6, i.e., order 1, 2, 3, or 6. Indeed:</p>
                        <ul>
                            <li>Order 1: \\(\\{e\\}\\)</li>
                            <li>Order 2: \\(\\{e, (1\\;2)\\}\\), \\(\\{e, (1\\;3)\\}\\), \\(\\{e, (2\\;3)\\}\\)</li>
                            <li>Order 3: \\(A_3 = \\{e, (1\\;2\\;3), (1\\;3\\;2)\\}\\)</li>
                            <li>Order 6: \\(S_3\\) itself</li>
                        </ul>
                        <p>There is no subgroup of order 4 or 5.</p>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Converse is False)</div>
                    <div class="env-body">
                        <p>The converse of Lagrange's theorem does <strong>not</strong> hold in general. If \\(d \\mid |G|\\), there need not be a subgroup of order \\(d\\). For example, \\(A_4\\) has order 12, and \\(6 \\mid 12\\), but \\(A_4\\) has no subgroup of order 6.</p>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="lagrange-subgroup-lattice"></div>
            `,
            visualizations: [
                {
                    id: 'lagrange-subgroup-lattice',
                    title: 'Subgroup Lattice and Lagrange Divisibility',
                    description: 'Explore the subgroup lattice of small groups and verify that every subgroup order divides the group order',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 420;
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');
                        const W = canvas.width, H = canvas.height;

                        var groups = {
                            'Z/6Z': {
                                order: 6,
                                subs: [
                                    { name: '{0}', order: 1, x: 0.5, y: 0.85 },
                                    { name: '<3> = {0,3}', order: 2, x: 0.3, y: 0.55 },
                                    { name: '<2> = {0,2,4}', order: 3, x: 0.7, y: 0.55 },
                                    { name: 'Z/6Z', order: 6, x: 0.5, y: 0.2 }
                                ],
                                edges: [[0,1],[0,2],[1,3],[2,3]]
                            },
                            'S3': {
                                order: 6,
                                subs: [
                                    { name: '{e}', order: 1, x: 0.5, y: 0.88 },
                                    { name: '{e,(1 2)}', order: 2, x: 0.15, y: 0.58 },
                                    { name: '{e,(1 3)}', order: 2, x: 0.38, y: 0.58 },
                                    { name: '{e,(2 3)}', order: 2, x: 0.62, y: 0.58 },
                                    { name: 'A3', order: 3, x: 0.85, y: 0.58 },
                                    { name: 'S3', order: 6, x: 0.5, y: 0.18 }
                                ],
                                edges: [[0,1],[0,2],[0,3],[0,4],[1,5],[2,5],[3,5],[4,5]]
                            },
                            'Z/12Z': {
                                order: 12,
                                subs: [
                                    { name: '{0}', order: 1, x: 0.5, y: 0.92 },
                                    { name: '<6>', order: 2, x: 0.25, y: 0.72 },
                                    { name: '<4>', order: 3, x: 0.5, y: 0.72 },
                                    { name: '<3>', order: 4, x: 0.75, y: 0.72 },
                                    { name: '<2>', order: 6, x: 0.35, y: 0.45 },
                                    { name: '<1> = Z/12Z', order: 12, x: 0.5, y: 0.15 }
                                ],
                                edges: [[0,1],[0,2],[0,3],[1,4],[2,4],[2,3],[3,5],[4,5]]
                            }
                        };
                        var gNames = Object.keys(groups);
                        var gIdx = 1;

                        var nodeColors = ['#8b949e','#58a6ff','#56d364','#f0883e','#f778ba','#d2a8ff','#79c0ff'];

                        function draw() {
                            ctx.clearRect(0, 0, W, H);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, H);

                            var g = groups[gNames[gIdx]];
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Subgroup lattice of ' + gNames[gIdx] + '  (|G| = ' + g.order + ')', W / 2, 24);

                            for (var ei = 0; ei < g.edges.length; ei++) {
                                var e = g.edges[ei];
                                var a = g.subs[e[0]], b = g.subs[e[1]];
                                ctx.strokeStyle = '#30363d';
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                ctx.moveTo(a.x * W, a.y * H);
                                ctx.lineTo(b.x * W, b.y * H);
                                ctx.stroke();
                            }

                            for (var si = 0; si < g.subs.length; si++) {
                                var s = g.subs[si];
                                var nx = s.x * W, ny = s.y * H;
                                var divides = g.order % s.order === 0;

                                ctx.fillStyle = nodeColors[si % nodeColors.length];
                                ctx.beginPath();
                                ctx.arc(nx, ny, 18, 0, 2 * Math.PI);
                                ctx.fill();

                                ctx.fillStyle = '#0d1117';
                                ctx.font = 'bold 13px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('' + s.order, nx, ny);

                                ctx.fillStyle = '#c9d1d9';
                                ctx.font = '11px sans-serif';
                                ctx.textBaseline = 'top';
                                ctx.fillText(s.name, nx, ny + 22);
                            }

                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            var divisors = [];
                            for (var d = 1; d <= g.order; d++) {
                                if (g.order % d === 0) divisors.push(d);
                            }
                            ctx.fillText('Divisors of ' + g.order + ': {' + divisors.join(', ') + '}.  Every subgroup order appears in this set.', W / 2, H - 22);
                        }

                        var sel = document.createElement('select');
                        sel.style.cssText = 'padding:4px 8px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;border-radius:4px;';
                        for (var gi = 0; gi < gNames.length; gi++) {
                            var opt = document.createElement('option');
                            opt.value = gi;
                            opt.textContent = gNames[gi];
                            if (gi === gIdx) opt.selected = true;
                            sel.appendChild(opt);
                        }
                        sel.addEventListener('change', function() { gIdx = parseInt(sel.value); draw(); });
                        controls.appendChild(sel);
                        draw();
                        return { cleanup: function() {} };
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch04-ex05',
                    type: 'multiple-choice',
                    question: 'A group G has order 20. Which of the following CANNOT be the order of a subgroup?',
                    options: ['2', '4', '5', '6'],
                    answer: 3,
                    explanation: 'By Lagrange\'s theorem, the order of any subgroup must divide |G| = 20. The divisors of 20 are 1, 2, 4, 5, 10, 20. Since 6 does not divide 20, there can be no subgroup of order 6.'
                },
                {
                    id: 'ch04-ex06',
                    type: 'multiple-choice',
                    question: 'What is the index [S4 : A4]?',
                    options: ['2', '3', '4', '6'],
                    answer: 0,
                    explanation: '|S4| = 24 and |A4| = 12, so [S4 : A4] = 24/12 = 2. In general, [Sn : An] = 2 for all n >= 2.'
                },
                {
                    id: 'ch04-ex07',
                    type: 'short-answer',
                    question: 'Does A4 (order 12) have a subgroup of order 6? Answer Yes or No.',
                    answer: 'No',
                    explanation: 'Although 6 divides 12, A4 famously has no subgroup of order 6. This shows the converse of Lagrange\'s theorem fails: a divisor of |G| does not guarantee a subgroup of that order.'
                },
                {
                    id: 'ch04-ex08',
                    type: 'multiple-choice',
                    question: 'Let G be a group of order 35. How many possible subgroup orders are there (including 1 and 35)?',
                    options: ['2', '3', '4', '5'],
                    answer: 2,
                    explanation: '35 = 5 * 7, so its divisors are 1, 5, 7, 35. That gives 4 possible subgroup orders.'
                }
            ]
        },

        // ===== SECTION 3: Consequences of Lagrange's Theorem =====
        {
            id: 'ch04-sec03',
            title: "Consequences of Lagrange's Theorem",
            content: `
                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Derive powerful corollaries: the order of an element divides \\(|G|\\), groups of prime order are cyclic, and Fermat's little theorem follows as a special case.</p>
                </div>

                <h2>Order of an Element Divides \\(|G|\\)</h2>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 4.12 (Element Order Divides Group Order)</div>
                    <div class="env-body">
                        <p>Let \\(G\\) be a finite group and \\(g \\in G\\). Then the order of \\(g\\) divides \\(|G|\\). In particular,</p>
                        \\[g^{|G|} = e.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>The order of \\(g\\) equals \\(|\\langle g \\rangle|\\), the order of the cyclic subgroup generated by \\(g\\). By Lagrange, \\(|\\langle g \\rangle|\\) divides \\(|G|\\). Writing \\(|G| = |\\langle g \\rangle| \\cdot q\\), we get \\(g^{|G|} = (g^{|\\langle g \\rangle|})^q = e^q = e\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h2>Groups of Prime Order Are Cyclic</h2>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 4.13 (Prime Order Implies Cyclic)</div>
                    <div class="env-body">
                        <p>If \\(|G| = p\\) where \\(p\\) is prime, then \\(G\\) is cyclic. Moreover, \\(G \\cong \\mathbb{Z}/p\\mathbb{Z}\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(g \\in G\\), \\(g \\neq e\\). Then \\(|\\langle g \\rangle|\\) divides \\(|G| = p\\). Since \\(g \\neq e\\), we have \\(|\\langle g \\rangle| > 1\\), and the only divisor of \\(p\\) greater than 1 is \\(p\\) itself. So \\(|\\langle g \\rangle| = p = |G|\\), giving \\(\\langle g \\rangle = G\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>This means a group of prime order has exactly two subgroups: \\(\\{e\\}\\) and \\(G\\) itself. It is the "simplest" kind of group in the sense that it cannot be broken down further.</p>
                    </div>
                </div>

                <h2>Fermat's Little Theorem</h2>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 4.14 (Fermat's Little Theorem)</div>
                    <div class="env-body">
                        <p>Let \\(p\\) be a prime and \\(a\\) an integer with \\(\\gcd(a, p) = 1\\). Then</p>
                        \\[a^{p-1} \\equiv 1 \\pmod{p}.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Consider the multiplicative group \\(G = (\\mathbb{Z}/p\\mathbb{Z})^{\\times}\\). Since \\(p\\) is prime, every nonzero residue is invertible, so \\(|G| = p - 1\\). The element \\(\\bar{a} = a \\bmod p\\) lies in \\(G\\) (since \\(\\gcd(a,p) = 1\\)). By Corollary 4.12, \\(\\bar{a}^{|G|} = \\bar{1}\\), i.e., \\(a^{p-1} \\equiv 1 \\pmod{p}\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block corollary">
                    <div class="env-title">Corollary 4.15 (Euler's Theorem)</div>
                    <div class="env-body">
                        <p>More generally, for any \\(n \\ge 1\\) and \\(\\gcd(a, n) = 1\\),</p>
                        \\[a^{\\phi(n)} \\equiv 1 \\pmod{n},\\]
                        <p>where \\(\\phi(n) = |(\\mathbb{Z}/n\\mathbb{Z})^{\\times}|\\) is Euler's totient function.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Apply Corollary 4.12 to \\(G = (\\mathbb{Z}/n\\mathbb{Z})^{\\times}\\), which has order \\(\\phi(n)\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <h2>Wilson's Theorem (Another Application)</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.16 (Wilson's Theorem)</div>
                    <div class="env-body">
                        <p>For a prime \\(p\\), \\((p-1)! \\equiv -1 \\pmod{p}\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p>In \\((\\mathbb{Z}/p\\mathbb{Z})^{\\times}\\), pair each element \\(a\\) with its inverse \\(a^{-1}\\). The only elements that are their own inverse satisfy \\(a^2 \\equiv 1\\), i.e., \\(a \\equiv \\pm 1\\). After pairing, the product of all elements reduces to \\(1 \\cdot (-1) = -1\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="fermat-little-viz"></div>
                <div class="viz-placeholder" data-viz="prime-order-viz"></div>
            `,
            visualizations: [
                {
                    id: 'fermat-little-viz',
                    title: "Fermat's Little Theorem Explorer",
                    description: 'Compute a^(p-1) mod p for various a and primes p, verifying the result is always 1',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 350;
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');
                        const W = canvas.width, HH = canvas.height;

                        var primes = [3, 5, 7, 11, 13];
                        var pIdx = 1;

                        function modPow(base, exp, mod) {
                            var result = 1;
                            base = base % mod;
                            while (exp > 0) {
                                if (exp % 2 === 1) result = (result * base) % mod;
                                exp = Math.floor(exp / 2);
                                base = (base * base) % mod;
                            }
                            return result;
                        }

                        function draw() {
                            ctx.clearRect(0, 0, W, HH);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, HH);

                            var p = primes[pIdx];
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText("Fermat's Little Theorem: a^" + (p - 1) + " mod " + p + " for gcd(a," + p + ") = 1", W / 2, 26);

                            var vals = [];
                            for (var a = 1; a < p; a++) {
                                vals.push({ a: a, result: modPow(a, p - 1, p) });
                            }

                            var colW = Math.min(80, (W - 40) / vals.length);
                            var startX = (W - colW * vals.length) / 2;
                            var barTop = 60;
                            var barMaxH = 180;

                            for (var i = 0; i < vals.length; i++) {
                                var v = vals[i];
                                var bx = startX + i * colW + colW * 0.15;
                                var bw = colW * 0.7;
                                var bh = (v.result / (p - 1)) * barMaxH;

                                ctx.fillStyle = v.result === 1 ? '#56d364' : '#f85149';
                                ctx.fillRect(bx, barTop + barMaxH - bh, bw, bh);

                                ctx.fillStyle = '#c9d1d9';
                                ctx.font = '12px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('a=' + v.a, bx + bw / 2, barTop + barMaxH + 16);
                                ctx.fillText('' + v.result, bx + bw / 2, barTop + barMaxH - bh - 6);
                            }

                            ctx.fillStyle = '#56d364';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('All results equal 1, confirming Fermat\'s Little Theorem!', W / 2, barTop + barMaxH + 50);

                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.fillText('Powers: a^' + (p - 1) + ' mod ' + p + '.  Group: (Z/' + p + 'Z)* has order ' + (p - 1) + '.', W / 2, HH - 20);
                        }

                        var sel = document.createElement('select');
                        sel.style.cssText = 'padding:4px 8px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;border-radius:4px;';
                        for (var pi = 0; pi < primes.length; pi++) {
                            var opt = document.createElement('option');
                            opt.value = pi;
                            opt.textContent = 'p = ' + primes[pi];
                            if (pi === pIdx) opt.selected = true;
                            sel.appendChild(opt);
                        }
                        sel.addEventListener('change', function() { pIdx = parseInt(sel.value); draw(); });
                        controls.appendChild(sel);
                        draw();
                        return { cleanup: function() {} };
                    }
                },
                {
                    id: 'prime-order-viz',
                    title: 'Groups of Prime Order Are Cyclic',
                    description: 'Pick any nonidentity element in a group of prime order and watch it generate the whole group',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 360;
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');
                        const W = canvas.width, HH = canvas.height;

                        var primeOrders = [2, 3, 5, 7];
                        var pIdx = 2;
                        var generator = 1;

                        function draw() {
                            ctx.clearRect(0, 0, W, HH);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, HH);

                            var p = primeOrders[pIdx];

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Z/' + p + 'Z: every nonzero element generates the whole group', W / 2, 26);

                            var cx = W / 2, cy = HH / 2, R = 110;
                            var generated = [];
                            var current = 0;
                            for (var step = 0; step < p; step++) {
                                current = (current + generator) % p;
                                generated.push(current);
                            }

                            for (var i = 0; i < p; i++) {
                                var angle = -Math.PI / 2 + (2 * Math.PI * i) / p;
                                var px = cx + R * Math.cos(angle);
                                var py = cy + R * Math.sin(angle);

                                var genOrder = generated.indexOf(i);
                                var reached = genOrder >= 0;

                                ctx.fillStyle = reached ? '#58a6ff' : '#30363d';
                                ctx.beginPath();
                                ctx.arc(px, py, 22, 0, 2 * Math.PI);
                                ctx.fill();

                                if (reached) {
                                    ctx.fillStyle = '#fff';
                                    ctx.font = '10px sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText('step ' + (genOrder + 1), px, py - 10);
                                }

                                ctx.fillStyle = reached ? '#fff' : '#8b949e';
                                ctx.font = 'bold 14px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('' + i, px, py + 6);
                            }

                            for (var j = 0; j < generated.length - 1; j++) {
                                var fromEl = generated[j === 0 ? generated.length - 1 : j - 1];
                                if (j === 0) fromEl = 0;
                                var toEl = generated[j];
                                var a1 = -Math.PI / 2 + (2 * Math.PI * fromEl) / p;
                                var a2 = -Math.PI / 2 + (2 * Math.PI * toEl) / p;
                                var x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1);
                                var x2 = cx + R * Math.cos(a2), y2 = cy + R * Math.sin(a2);

                                ctx.strokeStyle = 'rgba(88,166,255,0.4)';
                                ctx.lineWidth = 1.5;
                                ctx.beginPath();
                                ctx.moveTo(x1, y1);
                                ctx.lineTo(x2, y2);
                                ctx.stroke();
                            }

                            ctx.fillStyle = '#56d364';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('<' + generator + '> = {' + generated.sort(function(a, b) { return a - b; }).join(', ') + '} = Z/' + p + 'Z', W / 2, HH - 50);
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.fillText('Since |G| = ' + p + ' is prime, every nonidentity element generates G.', W / 2, HH - 25);
                        }

                        var sel = document.createElement('select');
                        sel.style.cssText = 'padding:4px 8px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;border-radius:4px;margin-right:8px;';
                        for (var pi = 0; pi < primeOrders.length; pi++) {
                            var opt = document.createElement('option');
                            opt.value = pi;
                            opt.textContent = 'p = ' + primeOrders[pi];
                            if (pi === pIdx) opt.selected = true;
                            sel.appendChild(opt);
                        }
                        sel.addEventListener('change', function() {
                            pIdx = parseInt(sel.value);
                            generator = 1;
                            genSel.innerHTML = '';
                            for (var g = 1; g < primeOrders[pIdx]; g++) {
                                var o = document.createElement('option');
                                o.value = g;
                                o.textContent = 'generator = ' + g;
                                genSel.appendChild(o);
                            }
                            draw();
                        });
                        controls.appendChild(sel);

                        var genSel = document.createElement('select');
                        genSel.style.cssText = 'padding:4px 8px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;border-radius:4px;';
                        for (var g = 1; g < primeOrders[pIdx]; g++) {
                            var o2 = document.createElement('option');
                            o2.value = g;
                            o2.textContent = 'generator = ' + g;
                            genSel.appendChild(o2);
                        }
                        genSel.addEventListener('change', function() { generator = parseInt(genSel.value); draw(); });
                        controls.appendChild(genSel);
                        draw();
                        return { cleanup: function() {} };
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch04-ex09',
                    type: 'multiple-choice',
                    question: 'In a group of order 15, what are the possible orders of elements?',
                    options: ['1, 3, 5, 15', '1, 2, 3, 5, 15', '1, 5, 15', 'Any number from 1 to 15'],
                    answer: 0,
                    explanation: 'By Corollary 4.12, the order of any element divides |G| = 15. The divisors of 15 are 1, 3, 5, and 15.'
                },
                {
                    id: 'ch04-ex10',
                    type: 'multiple-choice',
                    question: 'What is 2^10 mod 11?',
                    options: ['1', '2', '10', '1024'],
                    answer: 0,
                    explanation: 'By Fermat\'s little theorem, since 11 is prime and gcd(2,11) = 1, we have 2^10 = 2^(11-1) = 1 (mod 11).'
                },
                {
                    id: 'ch04-ex11',
                    type: 'short-answer',
                    question: 'True or false: A group of order 17 must be cyclic.',
                    answer: 'True',
                    explanation: 'Since 17 is prime, Corollary 4.13 tells us the group is cyclic (isomorphic to Z/17Z).'
                },
                {
                    id: 'ch04-ex12',
                    type: 'multiple-choice',
                    question: 'Using Euler\'s theorem, what is 7^12 mod 18? (Note: phi(18) = 6.)',
                    options: ['1', '7', '13', '0'],
                    answer: 0,
                    explanation: 'gcd(7, 18) = 1 and phi(18) = 6. By Euler\'s theorem, 7^6 = 1 (mod 18). Therefore 7^12 = (7^6)^2 = 1^2 = 1 (mod 18).'
                }
            ]
        },

        // ===== SECTION 4: Counting with Cosets =====
        {
            id: 'ch04-sec04',
            title: 'Counting with Cosets',
            content: `
                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Derive the product formula \\(|HK| = |H||K|/|H \\cap K|\\) and apply counting arguments to deduce structural results about groups.</p>
                </div>

                <h2>Products of Subgroups</h2>

                <div class="env-block definition">
                    <div class="env-title">Definition 4.17 (Product of Subsets)</div>
                    <div class="env-body">
                        <p>For subsets \\(A, B\\) of a group \\(G\\), define</p>
                        \\[AB = \\{ab : a \\in A,\\; b \\in B\\}.\\]
                        <p>When \\(H\\) and \\(K\\) are subgroups, \\(HK\\) is a subset of \\(G\\) but <em>not necessarily</em> a subgroup.</p>
                    </div>
                </div>

                <div class="env-block lemma">
                    <div class="env-title">Lemma 4.18 (When is HK a Subgroup?)</div>
                    <div class="env-body">
                        <p>If \\(H\\) and \\(K\\) are subgroups of \\(G\\), then \\(HK\\) is a subgroup of \\(G\\) if and only if \\(HK = KH\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p><strong>(\\(\\Rightarrow\\)):</strong> If \\(HK\\) is a subgroup, then for any \\(kh \\in KH\\), we have \\(kh \\in HK\\) (since \\(HK\\) is closed and contains \\(K\\) and \\(H\\)). Similarly \\(HK \\subseteq KH\\).</p>
                        <p><strong>(\\(\\Leftarrow\\)):</strong> Suppose \\(HK = KH\\). We verify the subgroup criteria:</p>
                        <ul>
                            <li><em>Identity:</em> \\(e = ee \\in HK\\).</li>
                            <li><em>Closure:</em> \\((h_1k_1)(h_2k_2)\\). Since \\(k_1 h_2 \\in KH = HK\\), write \\(k_1 h_2 = h'k'\\). Then the product is \\(h_1 h' \\cdot k' k_2 \\in HK\\).</li>
                            <li><em>Inverse:</em> \\((hk)^{-1} = k^{-1}h^{-1} \\in KH = HK\\).</li>
                        </ul>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark</div>
                    <div class="env-body">
                        <p>In particular, if either \\(H\\) or \\(K\\) is normal in \\(G\\), then \\(HK = KH\\) and \\(HK\\) is a subgroup. Also, if \\(G\\) is abelian, then \\(HK\\) is always a subgroup.</p>
                    </div>
                </div>

                <h2>The Product Formula</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.19 (Product Formula)</div>
                    <div class="env-body">
                        <p>Let \\(H\\) and \\(K\\) be finite subgroups of \\(G\\). Then</p>
                        \\[|HK| = \\frac{|H| \\cdot |K|}{|H \\cap K|}.\\]
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Write \\(HK = \\bigcup_{k \\in K} Hk\\). This is a union of left cosets of \\(H\\) in some larger set. How many <em>distinct</em> cosets appear?</p>
                        <p>Two elements \\(k_1, k_2 \\in K\\) give the same coset \\(Hk_1 = Hk_2\\) if and only if \\(k_1 k_2^{-1} \\in H\\), which happens if and only if \\(k_1 k_2^{-1} \\in H \\cap K\\). So the distinct cosets are indexed by \\(K / (H \\cap K)\\), and there are \\(|K| / |H \\cap K|\\) of them (by Lagrange applied to \\(H \\cap K \\le K\\)).</p>
                        <p>Each coset \\(Hk\\) has \\(|H|\\) elements. The cosets are disjoint (as subsets of \\(G\\)). Therefore:</p>
                        \\[|HK| = |H| \\cdot \\frac{|K|}{|H \\cap K|} = \\frac{|H| \\cdot |K|}{|H \\cap K|}.\\]
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 4.20</div>
                    <div class="env-body">
                        <p>In \\(S_3\\), let \\(H = \\{e, (1\\;2)\\}\\) and \\(K = \\{e, (1\\;3)\\}\\). Then \\(H \\cap K = \\{e\\}\\), so</p>
                        \\[|HK| = \\frac{2 \\cdot 2}{1} = 4.\\]
                        <p>Indeed, \\(HK = \\{e, (1\\;2), (1\\;3), (1\\;2)(1\\;3)\\} = \\{e, (1\\;2), (1\\;3), (1\\;3\\;2)\\}\\), which has 4 elements. Note \\(HK\\) is not a subgroup here (4 does not divide 6).</p>
                    </div>
                </div>

                <h2>Application: Unique Subgroup Argument</h2>

                <div class="env-block proposition">
                    <div class="env-title">Proposition 4.21</div>
                    <div class="env-body">
                        <p>Let \\(|G| = pq\\) where \\(p < q\\) are primes. If \\(p \\nmid (q - 1)\\), then \\(G\\) is cyclic.</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p>By Cauchy's theorem (which we will prove using Lagrange-type arguments), \\(G\\) has elements of order \\(p\\) and \\(q\\), generating subgroups \\(H\\) and \\(K\\) of those orders. Since \\(\\gcd(p,q) = 1\\), we get \\(H \\cap K = \\{e\\}\\), so \\(|HK| = pq = |G|\\). Further Sylow-type counting (using \\(p \\nmid (q-1)\\)) shows \\(H\\) and \\(K\\) are unique and normal, making \\(G \\cong H \\times K \\cong \\mathbb{Z}/pq\\mathbb{Z}\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="product-formula-viz"></div>
                <div class="viz-placeholder" data-viz="hk-intersection-viz"></div>
            `,
            visualizations: [
                {
                    id: 'product-formula-viz',
                    title: 'Product Formula |HK| = |H||K| / |H n K|',
                    description: 'Visualize the product of two subgroups in Z/12Z and verify the product formula',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 400;
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');
                        const W = canvas.width, HH = canvas.height;

                        var subgroupsOf12 = {
                            '<6> = {0,6}': [0, 6],
                            '<4> = {0,4,8}': [0, 4, 8],
                            '<3> = {0,3,6,9}': [0, 3, 6, 9],
                            '<2> = {0,2,4,6,8,10}': [0, 2, 4, 6, 8, 10]
                        };
                        var subNames = Object.keys(subgroupsOf12);
                        var hIdx = 1;
                        var kIdx = 2;

                        function computeHK(hArr, kArr) {
                            var result = new Set();
                            for (var i = 0; i < hArr.length; i++) {
                                for (var j = 0; j < kArr.length; j++) {
                                    result.add((hArr[i] + kArr[j]) % 12);
                                }
                            }
                            return Array.from(result).sort(function(a, b) { return a - b; });
                        }

                        function intersection(a, b) {
                            return a.filter(function(x) { return b.indexOf(x) >= 0; });
                        }

                        function draw() {
                            ctx.clearRect(0, 0, W, HH);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, HH);

                            var hArr = subgroupsOf12[subNames[hIdx]];
                            var kArr = subgroupsOf12[subNames[kIdx]];
                            var hk = computeHK(hArr, kArr);
                            var inter = intersection(hArr, kArr);

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Product Formula in Z/12Z (additive)', W / 2, 24);

                            var cx = W / 2, cy = 200, R = 120;
                            for (var i = 0; i < 12; i++) {
                                var angle = -Math.PI / 2 + (2 * Math.PI * i) / 12;
                                var px = cx + R * Math.cos(angle);
                                var py = cy + R * Math.sin(angle);

                                var inH = hArr.indexOf(i) >= 0;
                                var inK = kArr.indexOf(i) >= 0;
                                var inHK = hk.indexOf(i) >= 0;

                                var color = '#30363d';
                                if (inH && inK) color = '#d2a8ff';
                                else if (inH) color = '#58a6ff';
                                else if (inK) color = '#f0883e';
                                else if (inHK) color = '#56d364';

                                ctx.fillStyle = color;
                                ctx.beginPath();
                                ctx.arc(px, py, 18, 0, 2 * Math.PI);
                                ctx.fill();

                                ctx.fillStyle = '#fff';
                                ctx.font = 'bold 13px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText('' + i, px, py);
                            }

                            var ly = 345;
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'left';
                            var items = [
                                { color: '#58a6ff', text: 'H = {' + hArr.join(',') + '}  (|H| = ' + hArr.length + ')' },
                                { color: '#f0883e', text: 'K = {' + kArr.join(',') + '}  (|K| = ' + kArr.length + ')' },
                                { color: '#d2a8ff', text: 'H n K = {' + inter.join(',') + '}  (|H n K| = ' + inter.length + ')' },
                                { color: '#56d364', text: 'H+K = {' + hk.join(',') + '}  (|H+K| = ' + hk.length + ')' }
                            ];
                            for (var li = 0; li < items.length; li++) {
                                var lx = 20 + li * (W / 4);
                                ctx.fillStyle = items[li].color;
                                ctx.beginPath();
                                ctx.arc(lx, ly, 5, 0, 2 * Math.PI);
                                ctx.fill();
                                ctx.fillStyle = '#c9d1d9';
                                ctx.fillText(items[li].text, lx + 10, ly + 4);
                            }

                            var expected = (hArr.length * kArr.length) / inter.length;
                            ctx.fillStyle = '#58a6ff';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('|H||K|/|H n K| = ' + hArr.length + ' * ' + kArr.length + ' / ' + inter.length + ' = ' + expected + '  =  |H+K| = ' + hk.length + '  \u2713', W / 2, HH - 15);
                        }

                        var selH = document.createElement('select');
                        selH.style.cssText = 'padding:4px 8px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;border-radius:4px;margin-right:8px;';
                        var selK = document.createElement('select');
                        selK.style.cssText = selH.style.cssText;
                        for (var si = 0; si < subNames.length; si++) {
                            var o1 = document.createElement('option');
                            o1.value = si; o1.textContent = 'H = ' + subNames[si];
                            if (si === hIdx) o1.selected = true;
                            selH.appendChild(o1);
                            var o2 = document.createElement('option');
                            o2.value = si; o2.textContent = 'K = ' + subNames[si];
                            if (si === kIdx) o2.selected = true;
                            selK.appendChild(o2);
                        }
                        selH.addEventListener('change', function() { hIdx = parseInt(selH.value); draw(); });
                        selK.addEventListener('change', function() { kIdx = parseInt(selK.value); draw(); });
                        controls.appendChild(selH);
                        controls.appendChild(selK);
                        draw();
                        return { cleanup: function() {} };
                    }
                },
                {
                    id: 'hk-intersection-viz',
                    title: 'Overlap and Counting in HK',
                    description: 'See how pairs (h,k) can produce the same product, with the overlap governed by H intersect K',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 380;
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');
                        const W = canvas.width, HH = canvas.height;

                        function draw() {
                            ctx.clearRect(0, 0, W, HH);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, HH);

                            var hArr = [0, 4, 8];
                            var kArr = [0, 3, 6, 9];
                            var inter = [0];

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Why |HK| = |H||K|/|H n K|: Counting Pairs', W / 2, 24);

                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillStyle = '#c9d1d9';
                            ctx.fillText('H = {0, 4, 8},  K = {0, 3, 6, 9},  H n K = {0}', 20, 55);
                            ctx.fillText('Total pairs (h,k): |H| x |K| = 3 x 4 = 12', 20, 78);

                            var grid = [];
                            for (var hi = 0; hi < hArr.length; hi++) {
                                for (var ki = 0; ki < kArr.length; ki++) {
                                    grid.push({ h: hArr[hi], k: kArr[ki], sum: (hArr[hi] + kArr[ki]) % 12 });
                                }
                            }

                            var cellW = 70, cellH = 36;
                            var startX = 50, startY = 110;

                            ctx.fillStyle = '#8b949e';
                            ctx.font = 'bold 12px sans-serif';
                            ctx.textAlign = 'center';
                            for (var ki2 = 0; ki2 < kArr.length; ki2++) {
                                ctx.fillText('k=' + kArr[ki2], startX + 70 + ki2 * cellW + cellW / 2, startY - 8);
                            }
                            ctx.textAlign = 'right';
                            for (var hi2 = 0; hi2 < hArr.length; hi2++) {
                                ctx.fillText('h=' + hArr[hi2], startX + 60, startY + hi2 * cellH + cellH / 2 + 5);
                            }

                            var sumColors = {};
                            var colorList = ['#58a6ff', '#f0883e', '#56d364', '#f778ba', '#d2a8ff', '#79c0ff',
                                             '#ffa657', '#7ee787', '#ff7b72', '#a5d6ff', '#ffd700', '#86e1fc'];
                            var colorIdx = 0;

                            for (var gi = 0; gi < grid.length; gi++) {
                                var g = grid[gi];
                                if (!(g.sum in sumColors)) {
                                    sumColors[g.sum] = colorList[colorIdx % colorList.length];
                                    colorIdx++;
                                }
                            }

                            for (var gi2 = 0; gi2 < grid.length; gi2++) {
                                var gg = grid[gi2];
                                var row = Math.floor(gi2 / kArr.length);
                                var col = gi2 % kArr.length;
                                var x = startX + 70 + col * cellW;
                                var y = startY + row * cellH;

                                ctx.fillStyle = sumColors[gg.sum];
                                ctx.globalAlpha = 0.3;
                                ctx.fillRect(x, y, cellW, cellH);
                                ctx.globalAlpha = 1.0;

                                ctx.strokeStyle = '#30363d';
                                ctx.lineWidth = 1;
                                ctx.strokeRect(x, y, cellW, cellH);

                                ctx.fillStyle = '#e6edf3';
                                ctx.font = '12px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(gg.h + '+' + gg.k + '=' + gg.sum, x + cellW / 2, y + cellH / 2);
                            }

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.textBaseline = 'top';
                            var uniqueSums = Object.keys(sumColors).sort(function(a, b) { return parseInt(a) - parseInt(b); });
                            ctx.fillText('Distinct sums (= H+K): {' + uniqueSums.join(', ') + '}  (' + uniqueSums.length + ' elements)', 20, startY + hArr.length * cellH + 20);
                            ctx.fillText('Each sum appears |H n K| = 1 time(s), so |HK| = 12/1 = 12.', 20, startY + hArr.length * cellH + 45);

                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Same-colored cells produce the same element of G. The redundancy factor is |H n K|.', W / 2, HH - 16);
                        }

                        draw();
                        return { cleanup: function() {} };
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch04-ex13',
                    type: 'multiple-choice',
                    question: 'In Z/12Z, let H = <4> = {0,4,8} and K = <6> = {0,6}. What is |H+K|?',
                    options: ['3', '4', '5', '6'],
                    answer: 3,
                    explanation: 'H n K = {0}, so |HK| = |H||K|/|H n K| = 3*2/1 = 6. The set H+K = {0, 2, 4, 6, 8, 10} = <2>.'
                },
                {
                    id: 'ch04-ex14',
                    type: 'multiple-choice',
                    question: 'Let H and K be subgroups of a finite group G with |H| = 10, |K| = 14, and |H n K| = 2. What is |HK|?',
                    options: ['24', '70', '140', '22'],
                    answer: 1,
                    explanation: 'By the product formula, |HK| = |H||K|/|H n K| = 10 * 14 / 2 = 70.'
                },
                {
                    id: 'ch04-ex15',
                    type: 'short-answer',
                    question: 'Let G be a group of order 77 = 7 * 11. Is G necessarily cyclic? (Hint: Does 7 divide 11 - 1 = 10?)',
                    answer: 'Yes',
                    explanation: 'Since 7 does not divide 10 = 11 - 1, by Proposition 4.21, G must be cyclic (isomorphic to Z/77Z).'
                }
            ]
        },

        // ===== SECTION 5: The Index and its Properties =====
        {
            id: 'ch04-sec05',
            title: 'The Index and its Properties',
            content: `
                <div class="bridge section-roadmap">
                    <p><strong>Section goal:</strong> Prove the tower law \\([G:K] = [G:H][H:K]\\) for the index, show that subgroups of index 2 are always normal, and preview the connection to quotient groups.</p>
                </div>

                <h2>The Tower Law (Multiplicativity of the Index)</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.22 (Tower Law for Indices)</div>
                    <div class="env-body">
                        <p>Let \\(K \\le H \\le G\\). Then</p>
                        \\[[G:K] = [G:H] \\cdot [H:K].\\]
                        <p>This holds whether the indices are finite or infinite (with the convention \\(\\infty \\cdot n = \\infty\\)).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Let \\(\\{g_i H\\}_{i \\in I}\\) be the distinct left cosets of \\(H\\) in \\(G\\), and \\(\\{h_j K\\}_{j \\in J}\\) be the distinct left cosets of \\(K\\) in \\(H\\). We claim that</p>
                        \\[\\{g_i h_j K : i \\in I,\\; j \\in J\\}\\]
                        <p>is exactly the set of distinct left cosets of \\(K\\) in \\(G\\).</p>
                        <p><strong>Every coset appears:</strong> Let \\(gK\\) be a left coset of \\(K\\) in \\(G\\). Then \\(g \\in g_i H\\) for some \\(i\\), so \\(g = g_i h\\) for some \\(h \\in H\\). Then \\(h \\in h_j K\\) for some \\(j\\), so \\(h = h_j k\\). Thus \\(g = g_i h_j k\\) and \\(gK = g_i h_j K\\).</p>
                        <p><strong>Distinct cosets are distinct:</strong> Suppose \\(g_i h_j K = g_{i'} h_{j'} K\\). Then \\(g_i h_j\\) and \\(g_{i'} h_{j'}\\) lie in the same coset of \\(K\\), so \\(g_{i'} h_{j'} = g_i h_j k\\) for some \\(k \\in K \\subseteq H\\). Then \\(g_{i'}^{-1} g_i = h_{j'} k^{-1} h_j^{-1} \\in H\\), so \\(g_i H = g_{i'} H\\), giving \\(i = i'\\). Then \\(h_j K = h_{j'} K\\), giving \\(j = j'\\).</p>
                        <p>Therefore \\([G:K] = |I| \\cdot |J| = [G:H] \\cdot [H:K]\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 4.23</div>
                    <div class="env-body">
                        <p>Let \\(G = \\mathbb{Z}\\), \\(H = 6\\mathbb{Z}\\), \\(K = 30\\mathbb{Z}\\). Then:</p>
                        <ul>
                            <li>\\([\\mathbb{Z} : 6\\mathbb{Z}] = 6\\)</li>
                            <li>\\([6\\mathbb{Z} : 30\\mathbb{Z}] = 5\\)</li>
                            <li>\\([\\mathbb{Z} : 30\\mathbb{Z}] = 30 = 6 \\times 5\\). \\(\\checkmark\\)</li>
                        </ul>
                    </div>
                </div>

                <h2>Subgroups of Index 2 Are Normal</h2>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.24 (Index 2 Implies Normal)</div>
                    <div class="env-body">
                        <p>If \\([G:H] = 2\\), then \\(H \\trianglelefteq G\\) (i.e., \\(H\\) is a normal subgroup of \\(G\\)).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof</div>
                    <div class="env-body">
                        <p>Since \\([G:H] = 2\\), there are exactly two left cosets: \\(H\\) itself and \\(gH\\) for any \\(g \\notin H\\). Similarly, there are two right cosets: \\(H\\) and \\(Hg\\).</p>
                        <p>For any \\(g \\notin H\\), the left coset \\(gH\\) consists of all elements not in \\(H\\), i.e., \\(gH = G \\setminus H\\). Similarly, \\(Hg = G \\setminus H\\). Therefore \\(gH = Hg\\) for all \\(g \\in G\\).</p>
                        <p>When \\(g \\in H\\), we trivially have \\(gH = H = Hg\\). So left and right cosets agree for all \\(g\\), which means \\(H \\trianglelefteq G\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="env-block example">
                    <div class="env-title">Example 4.25</div>
                    <div class="env-body">
                        <ul>
                            <li>\\(A_n\\) has index 2 in \\(S_n\\), so \\(A_n \\trianglelefteq S_n\\) for all \\(n \\ge 2\\).</li>
                            <li>\\(\\text{SL}_n(\\mathbb{R})\\) has index 2 in a suitable subgroup of \\(\\text{GL}_n(\\mathbb{R})\\)? Not quite, but \\(\\text{SL}_n(\\mathbb{R}) \\trianglelefteq \\text{GL}_n(\\mathbb{R})\\) by a different argument (kernel of the determinant map).</li>
                            <li>In \\(D_n\\) (the dihedral group of order \\(2n\\)), the rotation subgroup \\(\\langle r \\rangle\\) has order \\(n\\) and index 2, so it is normal.</li>
                        </ul>
                    </div>
                </div>

                <div class="env-block remark">
                    <div class="env-title">Remark (Index 2 is Special)</div>
                    <div class="env-body">
                        <p>Index 2 is the only index that guarantees normality. A subgroup of index 3 need not be normal. For example, \\(\\{e, (1\\;2)\\}\\) has index 3 in \\(S_3\\) but is not normal.</p>
                    </div>
                </div>

                <h2>Looking Ahead: Quotient Groups</h2>

                <div class="env-block remark">
                    <div class="env-title">Preview (Chapter 5)</div>
                    <div class="env-body">
                        <p>When \\(H \\trianglelefteq G\\), the set of cosets \\(G/H = \\{gH : g \\in G\\}\\) itself forms a group under the operation \\((aH)(bH) = (ab)H\\). This is the <strong>quotient group</strong>, and its order is \\([G:H]\\). The entire theory of quotient groups, homomorphisms, and the isomorphism theorems builds on the coset machinery developed in this chapter.</p>
                    </div>
                </div>

                <div class="env-block theorem">
                    <div class="env-title">Theorem 4.26 (Poincare's Theorem)</div>
                    <div class="env-body">
                        <p>If \\(H \\le G\\) with \\([G:H] = n < \\infty\\), then there exists a normal subgroup \\(N \\trianglelefteq G\\) with \\(N \\le H\\) and \\([G:N]\\) dividing \\(n!\\).</p>
                    </div>
                </div>

                <div class="env-block proof">
                    <div class="env-title">Proof Sketch</div>
                    <div class="env-body">
                        <p>Consider the left multiplication action of \\(G\\) on the set of left cosets \\(G/H\\). This gives a homomorphism \\(\\phi: G \\to S_n\\) (where \\(n = [G:H]\\)). The kernel \\(N = \\ker(\\phi)\\) is a normal subgroup contained in \\(H\\), and by the first isomorphism theorem, \\(G/N \\cong \\text{Im}(\\phi) \\le S_n\\), so \\([G:N] = |G/N|\\) divides \\(|S_n| = n!\\).</p>
                        <div class="qed">&#8718;</div>
                    </div>
                </div>

                <div class="viz-placeholder" data-viz="tower-law-viz"></div>
                <div class="viz-placeholder" data-viz="index2-normal-viz"></div>
            `,
            visualizations: [
                {
                    id: 'tower-law-viz',
                    title: 'Tower Law: [G:K] = [G:H][H:K]',
                    description: 'Visualize nested coset decompositions that illustrate the tower law for indices',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 400;
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');
                        const W = canvas.width, HH = canvas.height;

                        var examples = [
                            {
                                name: 'Z, 6Z, 30Z',
                                G: 'Z', H: '6Z', K: '30Z',
                                GH: 6, HK: 5, GK: 30,
                                cosets: [
                                    { label: '0+6Z', subs: ['0+30Z','6+30Z','12+30Z','18+30Z','24+30Z'] },
                                    { label: '1+6Z', subs: ['1+30Z','7+30Z','13+30Z','19+30Z','25+30Z'] },
                                    { label: '2+6Z', subs: ['2+30Z','8+30Z','14+30Z','20+30Z','26+30Z'] },
                                    { label: '3+6Z', subs: ['3+30Z','9+30Z','15+30Z','21+30Z','27+30Z'] },
                                    { label: '4+6Z', subs: ['4+30Z','10+30Z','16+30Z','22+30Z','28+30Z'] },
                                    { label: '5+6Z', subs: ['5+30Z','11+30Z','17+30Z','23+30Z','29+30Z'] }
                                ]
                            },
                            {
                                name: 'Z/12Z, <2>, <6>',
                                G: 'Z/12Z', H: '<2>={0,2,4,6,8,10}', K: '<6>={0,6}',
                                GH: 2, HK: 3, GK: 6,
                                cosets: [
                                    { label: '0+<2>', subs: ['{0,6}','{2,8}','{4,10}'] },
                                    { label: '1+<2>', subs: ['{1,7}','{3,9}','{5,11}'] }
                                ]
                            }
                        ];
                        var eIdx = 0;

                        var outerColors = ['#264f78', '#3d2800', '#1b4721', '#5e2040', '#2d1a4e', '#1a3a4e'];
                        var borderColors = ['#58a6ff', '#f0883e', '#56d364', '#f778ba', '#d2a8ff', '#79c0ff'];

                        function draw() {
                            ctx.clearRect(0, 0, W, HH);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, HH);

                            var ex = examples[eIdx];
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Tower Law: [' + ex.G + ':' + ex.K + '] = [' + ex.G + ':' + ex.H + '] x [' + ex.H + ':' + ex.K + '] = ' + ex.GH + ' x ' + ex.HK + ' = ' + ex.GK, W / 2, 26);

                            var numOuter = ex.cosets.length;
                            var gap = 10;
                            var outerW = (W - (numOuter + 1) * gap) / numOuter;
                            var topY = 50;
                            var outerH = HH - topY - 70;

                            for (var oi = 0; oi < numOuter; oi++) {
                                var ox = gap + oi * (outerW + gap);
                                var coset = ex.cosets[oi];

                                ctx.fillStyle = outerColors[oi % outerColors.length];
                                ctx.strokeStyle = borderColors[oi % borderColors.length];
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.roundRect(ox, topY, outerW, outerH, 8);
                                ctx.fill();
                                ctx.stroke();

                                ctx.fillStyle = borderColors[oi % borderColors.length];
                                ctx.font = 'bold 11px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(coset.label, ox + outerW / 2, topY + 18);

                                var numInner = coset.subs.length;
                                var innerGap = 4;
                                var innerW = outerW - 2 * innerGap;
                                var innerH = (outerH - 30 - (numInner + 1) * innerGap) / numInner;

                                for (var ii = 0; ii < numInner; ii++) {
                                    var iy = topY + 26 + innerGap + ii * (innerH + innerGap);
                                    ctx.fillStyle = 'rgba(255,255,255,0.07)';
                                    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
                                    ctx.lineWidth = 1;
                                    ctx.beginPath();
                                    ctx.roundRect(ox + innerGap, iy, innerW, innerH, 4);
                                    ctx.fill();
                                    ctx.stroke();

                                    ctx.fillStyle = '#c9d1d9';
                                    ctx.font = '10px sans-serif';
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'middle';
                                    ctx.fillText(coset.subs[ii], ox + outerW / 2, iy + innerH / 2);
                                }
                            }

                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Outer boxes = cosets of H in G (' + ex.GH + ').  Inner boxes = cosets of K in H (' + ex.HK + ').  Total = ' + ex.GK + '.', W / 2, HH - 40);
                        }

                        var sel = document.createElement('select');
                        sel.style.cssText = 'padding:4px 8px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;border-radius:4px;';
                        for (var ei = 0; ei < examples.length; ei++) {
                            var opt = document.createElement('option');
                            opt.value = ei;
                            opt.textContent = examples[ei].name;
                            sel.appendChild(opt);
                        }
                        sel.addEventListener('change', function() { eIdx = parseInt(sel.value); draw(); });
                        controls.appendChild(sel);
                        draw();
                        return { cleanup: function() {} };
                    }
                },
                {
                    id: 'index2-normal-viz',
                    title: 'Index 2 Subgroups Are Normal',
                    description: 'Verify that left and right cosets coincide when the index is 2',
                    setup: function(body, controls) {
                        const canvas = document.createElement('canvas');
                        canvas.width = body.clientWidth || 580;
                        canvas.height = 380;
                        body.appendChild(canvas);
                        const ctx = canvas.getContext('2d');
                        const W = canvas.width, HH = canvas.height;

                        var examples = [
                            {
                                name: 'A3 in S3 (index 2)',
                                H: ['e', '(1 2 3)', '(1 3 2)'],
                                complement: ['(1 2)', '(1 3)', '(2 3)'],
                                leftCosets: [
                                    { rep: 'e', elems: ['e', '(1 2 3)', '(1 3 2)'] },
                                    { rep: '(1 2)', elems: ['(1 2)', '(1 3)', '(2 3)'] }
                                ],
                                rightCosets: [
                                    { rep: 'e', elems: ['e', '(1 2 3)', '(1 3 2)'] },
                                    { rep: '(1 2)', elems: ['(1 2)', '(2 3)', '(1 3)'] }
                                ]
                            },
                            {
                                name: 'Rotations in D4 (index 2)',
                                H: ['1', 'r', 'r^2', 'r^3'],
                                complement: ['s', 'sr', 'sr^2', 'sr^3'],
                                leftCosets: [
                                    { rep: '1', elems: ['1', 'r', 'r^2', 'r^3'] },
                                    { rep: 's', elems: ['s', 'sr', 'sr^2', 'sr^3'] }
                                ],
                                rightCosets: [
                                    { rep: '1', elems: ['1', 'r', 'r^2', 'r^3'] },
                                    { rep: 's', elems: ['s', 'sr', 'sr^2', 'sr^3'] }
                                ]
                            }
                        ];
                        var eIdx = 0;

                        function draw() {
                            ctx.clearRect(0, 0, W, HH);
                            ctx.fillStyle = '#0d1117';
                            ctx.fillRect(0, 0, W, HH);

                            var ex = examples[eIdx];
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText(ex.name + ': left cosets = right cosets (normal!)', W / 2, 26);

                            var midX = W / 2;
                            var leftX = midX - 20;
                            var rightX = midX + 20;
                            var topY = 55;
                            var boxW = (W / 2) - 40;
                            var boxH = 130;

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Left Cosets (gH)', leftX - boxW / 2, topY - 5);
                            ctx.fillText('Right Cosets (Hg)', rightX + boxW / 2, topY - 5);

                            for (var ci = 0; ci < ex.leftCosets.length; ci++) {
                                var lc = ex.leftCosets[ci];
                                var rc = ex.rightCosets[ci];
                                var yOff = topY + 10 + ci * (boxH + 15);

                                var color = ci === 0 ? '#58a6ff' : '#f0883e';
                                var bg = ci === 0 ? '#1a3a5c' : '#3d2800';

                                ctx.fillStyle = bg;
                                ctx.strokeStyle = color;
                                ctx.lineWidth = 2;
                                ctx.beginPath();
                                ctx.roundRect(leftX - boxW, yOff, boxW, boxH, 8);
                                ctx.fill();
                                ctx.stroke();

                                ctx.beginPath();
                                ctx.roundRect(rightX, yOff, boxW, boxH, 8);
                                ctx.fill();
                                ctx.stroke();

                                ctx.fillStyle = color;
                                ctx.font = 'bold 12px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(lc.rep + ' \u00b7 H', leftX - boxW / 2, yOff + 20);
                                ctx.fillText('H \u00b7 ' + rc.rep, rightX + boxW / 2, yOff + 20);

                                ctx.font = '13px monospace';
                                ctx.fillStyle = '#e6edf3';
                                for (var ei2 = 0; ei2 < lc.elems.length; ei2++) {
                                    ctx.textAlign = 'center';
                                    ctx.fillText(lc.elems[ei2], leftX - boxW / 2, yOff + 42 + ei2 * 20);
                                    ctx.fillText(rc.elems[ei2], rightX + boxW / 2, yOff + 42 + ei2 * 20);
                                }

                                var setL = lc.elems.slice().sort().join(',');
                                var setR = rc.elems.slice().sort().join(',');
                                var match = setL === setR;
                                ctx.fillStyle = match ? '#56d364' : '#f85149';
                                ctx.font = 'bold 16px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'middle';
                                ctx.fillText(match ? '=' : '\u2260', midX, yOff + boxH / 2);
                            }

                            ctx.fillStyle = '#56d364';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'top';
                            ctx.fillText('Left cosets = Right cosets for all g, so H is normal in G.', W / 2, HH - 40);
                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.fillText('With only 2 cosets, the non-H coset must be G \\ H on both sides.', W / 2, HH - 18);
                        }

                        var sel = document.createElement('select');
                        sel.style.cssText = 'padding:4px 8px;background:#161b22;color:#c9d1d9;border:1px solid #30363d;border-radius:4px;';
                        for (var ei3 = 0; ei3 < examples.length; ei3++) {
                            var opt = document.createElement('option');
                            opt.value = ei3;
                            opt.textContent = examples[ei3].name;
                            sel.appendChild(opt);
                        }
                        sel.addEventListener('change', function() { eIdx = parseInt(sel.value); draw(); });
                        controls.appendChild(sel);
                        draw();
                        return { cleanup: function() {} };
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch04-ex16',
                    type: 'multiple-choice',
                    question: 'Let K <= H <= G with [G:H] = 3 and [H:K] = 4. What is [G:K]?',
                    options: ['7', '12', '1', '64'],
                    answer: 1,
                    explanation: 'By the tower law, [G:K] = [G:H] * [H:K] = 3 * 4 = 12.'
                },
                {
                    id: 'ch04-ex17',
                    type: 'short-answer',
                    question: 'True or false: Every subgroup of index 2 is normal.',
                    answer: 'True',
                    explanation: 'By Theorem 4.24, if [G:H] = 2, there are only two cosets. For any g not in H, both gH and Hg equal G \\ H, so left and right cosets coincide, making H normal.'
                },
                {
                    id: 'ch04-ex18',
                    type: 'multiple-choice',
                    question: 'Which of the following is NOT a consequence of this chapter\'s results?',
                    options: [
                        'The order of any element divides |G|',
                        'Every group of prime order is cyclic',
                        'Every group of order p^2 is abelian',
                        'a^(p-1) = 1 mod p for gcd(a,p)=1'
                    ],
                    answer: 2,
                    explanation: 'The statement "every group of order p^2 is abelian" is true but requires the theory of p-groups and group actions (Chapter 8), not just Lagrange\'s theorem. The other three all follow directly from Lagrange\'s theorem and its corollaries in this chapter.'
                },
                {
                    id: 'ch04-ex19',
                    type: 'multiple-choice',
                    question: 'Let G be a finite group and H a subgroup of index 3. Must H be normal in G?',
                    options: ['Yes, always', 'No, not necessarily', 'Only if G is abelian', 'Only if |G| is odd'],
                    answer: 1,
                    explanation: 'No. For example, {e, (1 2)} has index 3 in S3 but is not normal. Index 2 is the only index that automatically guarantees normality.'
                }
            ]
        }
    ]
});
