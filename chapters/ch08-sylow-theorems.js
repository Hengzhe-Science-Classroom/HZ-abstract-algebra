window.CHAPTERS = window.CHAPTERS || [];
window.CHAPTERS.push({
    id: 'ch08',
    number: 8,
    title: 'Sylow Theorems and p-Groups',
    subtitle: 'Sylow theorems, applications to classification, p-groups',
    sections: [
        // ===== SECTION 1: p-Groups =====
        {
            id: 'ch08-sec01',
            title: 'p-Groups',
            content: `

<div class="env-block intuition">
    <div class="env-title">Why p-Groups?</div>
    <div class="env-body">
        <p>The prime numbers are the atoms of the integers. In group theory, groups whose orders are prime powers play an analogous atomic role. These <em>p-groups</em> have remarkably rigid structure: they always have nontrivial centers, and this single fact cascades into powerful classification results. Understanding p-groups is the essential prerequisite for the Sylow theorems, which decompose any finite group into prime-power pieces.</p>
    </div>
</div>

<p class="section-roadmap"><strong>Section goal:</strong> Define p-groups, prove that the center of a nontrivial p-group is nontrivial using the class equation, and deduce that groups of order \\(p^2\\) are abelian.</p>

<h2>8.1 p-Groups</h2>

<h3>Definition and First Examples</h3>

<div class="definition">
<strong>Definition 8.1 (p-Group).</strong>
Let \\(p\\) be a prime. A group \\(G\\) is called a <em>p-group</em> if every element of \\(G\\) has order a power of \\(p\\). Equivalently, if \\(G\\) is finite, then \\(G\\) is a p-group if and only if \\(|G| = p^k\\) for some integer \\(k \\ge 0\\).
</div>

<div class="env-block example">
<div class="env-title">Example 8.2</div>
<div class="env-body">
<ul>
<li>\\(\\mathbb{Z}/p^k\\mathbb{Z}\\) is a p-group of order \\(p^k\\).</li>
<li>\\(\\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/2\\mathbb{Z}\\) (the Klein four-group) is a 2-group of order 4.</li>
<li>The dihedral group \\(D_4\\) of order 8 is a 2-group.</li>
<li>The quaternion group \\(Q_8 = \\{\\pm 1, \\pm i, \\pm j, \\pm k\\}\\) is a 2-group of order 8.</li>
<li>The upper unitriangular matrices \\(\\text{UT}_n(\\mathbb{F}_p)\\) form a p-group of order \\(p^{\\binom{n}{2}}\\).</li>
</ul>
</div>
</div>

<h3>The Center of a p-Group</h3>

<p>The most fundamental structural result about p-groups uses the class equation from the theory of group actions. Recall that when \\(G\\) acts on itself by conjugation, the orbits are conjugacy classes, and the class equation reads:</p>

\\[
|G| = |Z(G)| + \\sum_{i} [G : C_G(g_i)],
\\]

<p>where the sum runs over representatives \\(g_i\\) of conjugacy classes of size greater than 1, and \\(C_G(g_i)\\) is the centralizer of \\(g_i\\).</p>

<div class="theorem">
<strong>Theorem 8.3 (Center of a p-Group is Nontrivial).</strong>
If \\(G\\) is a finite p-group with \\(|G| > 1\\), then \\(Z(G) \\neq \\{e\\}\\).
</div>

<div class="proof">
<strong>Proof.</strong>
Write the class equation \\(|G| = |Z(G)| + \\sum_i [G : C_G(g_i)]\\). Since \\(|G| = p^k\\) and each \\(C_G(g_i)\\) is a proper subgroup of \\(G\\) (as \\(g_i \\notin Z(G)\\)), each index \\([G : C_G(g_i)]\\) is divisible by \\(p\\). The left side \\(|G| = p^k\\) is divisible by \\(p\\). Therefore \\(|Z(G)| \\equiv |G| \\equiv 0 \\pmod{p}\\). Since \\(e \\in Z(G)\\), we have \\(|Z(G)| \\ge 1\\), and divisibility by \\(p\\) forces \\(|Z(G)| \\ge p\\). In particular, \\(Z(G) \\neq \\{e\\}\\). \\(\\square\\)
</div>

<div class="env-block remark">
<div class="env-title">Remark 8.4</div>
<div class="env-body">
<p>This argument is purely arithmetic: the class equation forces the center's size to be divisible by \\(p\\). No specific information about the group structure is needed beyond it being a p-group.</p>
</div>
</div>

<h3>Groups of Order \\(p^2\\)</h3>

<div class="theorem">
<strong>Theorem 8.5 (Groups of Order \\(p^2\\) are Abelian).</strong>
Every group of order \\(p^2\\) is abelian. Specifically, \\(G \\cong \\mathbb{Z}/p^2\\mathbb{Z}\\) or \\(G \\cong \\mathbb{Z}/p\\mathbb{Z} \\times \\mathbb{Z}/p\\mathbb{Z}\\).
</div>

<div class="proof">
<strong>Proof.</strong>
Let \\(|G| = p^2\\). By Theorem 8.3, \\(|Z(G)|\\) is divisible by \\(p\\), so \\(|Z(G)| = p\\) or \\(p^2\\). If \\(|Z(G)| = p^2\\), then \\(G = Z(G)\\) and \\(G\\) is abelian. Suppose \\(|Z(G)| = p\\). Then \\(G/Z(G)\\) has order \\(p^2/p = p\\), hence is cyclic. But if \\(G/Z(G)\\) is cyclic, then \\(G\\) is abelian (a standard result). This contradicts \\(|Z(G)| = p < p^2\\). Therefore \\(|Z(G)| = p^2\\) and \\(G\\) is abelian. The classification into \\(\\mathbb{Z}/p^2\\mathbb{Z}\\) or \\(\\mathbb{Z}/p\\mathbb{Z} \\times \\mathbb{Z}/p\\mathbb{Z}\\) follows from the fundamental theorem of finite abelian groups. \\(\\square\\)
</div>

<div class="env-block example">
<div class="env-title">Example 8.6 (Groups of Order 4 and 9)</div>
<div class="env-body">
<p>By Theorem 8.5, groups of order \\(4 = 2^2\\) are abelian: \\(\\mathbb{Z}/4\\mathbb{Z}\\) or \\(\\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/2\\mathbb{Z}\\). Similarly, groups of order \\(9 = 3^2\\) are abelian: \\(\\mathbb{Z}/9\\mathbb{Z}\\) or \\(\\mathbb{Z}/3\\mathbb{Z} \\times \\mathbb{Z}/3\\mathbb{Z}\\). There are no nonabelian groups of these orders.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="ch08-viz-pgroup-center"></div>

<div class="env-block remark">
<div class="env-title">Remark 8.7 (G/Z(G) Cyclic Implies G Abelian)</div>
<div class="env-body">
<p>The key lemma used above: if \\(G/Z(G)\\) is cyclic, then \\(G\\) is abelian. To see this, let \\(G/Z(G) = \\langle gZ(G) \\rangle\\). Then every element of \\(G\\) can be written as \\(g^a z\\) for some \\(a \\in \\mathbb{Z}\\) and \\(z \\in Z(G)\\). Given \\(g^a z_1\\) and \\(g^b z_2\\), we have \\(g^a z_1 \\cdot g^b z_2 = g^{a+b} z_1 z_2 = g^b z_2 \\cdot g^a z_1\\), since \\(z_1, z_2\\) commute with everything.</p>
</div>
</div>

`,
            visualizations: [
                {
                    id: 'ch08-viz-pgroup-center',
                    title: 'Center of a p-Group via the Class Equation',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 420;

                        let selectedP = 2;
                        let selectedK = 3;

                        function computeClassData(p, k) {
                            const order = Math.pow(p, k);
                            if (order === 1) return { order: 1, centerSize: 1, classes: [] };
                            if (order <= 4) {
                                if (p === 2 && k === 1) return { order: 2, centerSize: 2, classes: [] };
                                if (p === 2 && k === 2) return { order: 4, centerSize: 4, classes: [] };
                                if (p === 3 && k === 1) return { order: 3, centerSize: 3, classes: [] };
                            }
                            if (p === 2 && k === 3) {
                                return { order: 8, centerSize: 2, classes: [2, 2, 2], groupName: 'D_4' };
                            }
                            if (p === 3 && k === 2) {
                                return { order: 9, centerSize: 9, classes: [], groupName: 'Z/9Z' };
                            }
                            if (p === 2 && k === 4) {
                                return { order: 16, centerSize: 4, classes: [2, 2, 2, 2, 2, 2], groupName: 'D_4 x Z/2Z' };
                            }
                            const centerSize = Math.max(p, Math.pow(p, Math.max(1, k - 2)));
                            const remaining = order - centerSize;
                            const classSize = p;
                            const numClasses = remaining / classSize;
                            const classes = [];
                            for (let i = 0; i < numClasses; i++) classes.push(classSize);
                            return { order, centerSize, classes, groupName: 'p-group' };
                        }

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            const data = computeClassData(selectedP, selectedK);

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Class Equation for a ' + selectedP + '-group of order ' + selectedP + '^' + selectedK + ' = ' + data.order, 290, 25);

                            if (data.groupName) {
                                ctx.font = '13px sans-serif';
                                ctx.fillStyle = '#8b949e';
                                ctx.fillText('Example: ' + data.groupName, 290, 45);
                            }

                            const barY = 80;
                            const barH = 50;
                            const barMaxW = 520;
                            const startX = 30;

                            ctx.fillStyle = '#21262d';
                            ctx.fillRect(startX, barY, barMaxW, barH);
                            ctx.strokeStyle = '#30363d';
                            ctx.strokeRect(startX, barY, barMaxW, barH);

                            const totalW = barMaxW;
                            const centerW = (data.centerSize / data.order) * totalW;

                            ctx.fillStyle = '#238636';
                            ctx.fillRect(startX, barY, centerW, barH);
                            ctx.strokeStyle = '#2ea043';
                            ctx.strokeRect(startX, barY, centerW, barH);

                            ctx.fillStyle = '#ffffff';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'center';
                            if (centerW > 40) {
                                ctx.fillText('Z(G)', startX + centerW / 2, barY + barH / 2 - 8);
                                ctx.font = '12px sans-serif';
                                ctx.fillText('|Z(G)|=' + data.centerSize, startX + centerW / 2, barY + barH / 2 + 10);
                            }

                            let cx = startX + centerW;
                            const colors = ['#58a6ff', '#f0883e', '#bc8cff', '#f778ba', '#56d364'];
                            for (let i = 0; i < data.classes.length && i < 20; i++) {
                                const w = (data.classes[i] / data.order) * totalW;
                                ctx.fillStyle = colors[i % colors.length];
                                ctx.globalAlpha = 0.5;
                                ctx.fillRect(cx, barY, w, barH);
                                ctx.globalAlpha = 1.0;
                                ctx.strokeStyle = colors[i % colors.length];
                                ctx.strokeRect(cx, barY, w, barH);
                                cx += w;
                            }

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'left';
                            const eqY = 160;
                            ctx.fillText('Class equation: |G| = |Z(G)| + sum of [G : C_G(g_i)]', startX, eqY);

                            const classStr = data.classes.length > 0 ? data.classes.slice(0, 10).join(' + ') : '(none)';
                            ctx.fillText(data.order + ' = ' + data.centerSize + (data.classes.length > 0 ? ' + ' + classStr : ''), startX, eqY + 22);

                            ctx.fillStyle = '#238636';
                            ctx.fillText('Green = center elements (commute with everything)', startX, eqY + 52);
                            ctx.fillStyle = '#58a6ff';
                            ctx.fillText('Colored blocks = non-central conjugacy classes (size divisible by p)', startX, eqY + 72);

                            ctx.fillStyle = '#f0883e';
                            ctx.font = 'bold 13px sans-serif';
                            ctx.fillText('Key: p | |G| and p | each class size, so p | |Z(G)|, hence |Z(G)| >= p.', startX, eqY + 102);

                            // Controls
                            const ctrlY = 310;
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Prime p:', startX, ctrlY);

                            const primes = [2, 3, 5, 7];
                            primes.forEach((p, i) => {
                                const bx = startX + 70 + i * 55;
                                ctx.fillStyle = p === selectedP ? '#238636' : '#21262d';
                                ctx.beginPath();
                                ctx.roundRect(bx, ctrlY - 16, 45, 24, 4);
                                ctx.fill();
                                ctx.strokeStyle = '#30363d';
                                ctx.stroke();
                                ctx.fillStyle = '#e6edf3';
                                ctx.font = '13px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('p=' + p, bx + 22, ctrlY);
                            });

                            ctx.textAlign = 'left';
                            ctx.fillStyle = '#c9d1d9';
                            ctx.fillText('Exponent k:', startX, ctrlY + 40);

                            for (let k = 1; k <= 4; k++) {
                                const bx = startX + 90 + (k - 1) * 55;
                                ctx.fillStyle = k === selectedK ? '#238636' : '#21262d';
                                ctx.beginPath();
                                ctx.roundRect(bx, ctrlY + 24, 45, 24, 4);
                                ctx.fill();
                                ctx.strokeStyle = '#30363d';
                                ctx.stroke();
                                ctx.fillStyle = '#e6edf3';
                                ctx.font = '13px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('k=' + k, bx + 22, ctrlY + 40);
                            }

                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Click to change p or k', 290, ctrlY + 72);
                        }

                        canvas.addEventListener('click', (e) => {
                            const rect = canvas.getBoundingClientRect();
                            const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
                            const my = (e.clientY - rect.top) * (canvas.height / rect.height);
                            const startX = 30;
                            const ctrlY = 310;

                            const primes = [2, 3, 5, 7];
                            primes.forEach((p, i) => {
                                const bx = startX + 70 + i * 55;
                                if (mx >= bx && mx <= bx + 45 && my >= ctrlY - 16 && my <= ctrlY + 8) {
                                    selectedP = p;
                                    draw();
                                }
                            });

                            for (let k = 1; k <= 4; k++) {
                                const bx = startX + 90 + (k - 1) * 55;
                                if (mx >= bx && mx <= bx + 45 && my >= ctrlY + 24 && my <= ctrlY + 48) {
                                    selectedK = k;
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
                    id: 'ch08-ex01',
                    type: 'proof',
                    difficulty: 2,
                    title: 'Elements of p-Power Order',
                    question: 'Let G be a finite group with |G| = p^n. Prove that every element g in G has order dividing p^n, and hence has order p^k for some 0 <= k <= n.',
                    hint: 'Use Lagrange\'s theorem: the order of any element divides the order of the group.',
                    solution: 'By Lagrange\'s theorem, |g| divides |G| = p^n. Since the only divisors of p^n are p^0, p^1, ..., p^n, we conclude |g| = p^k for some 0 <= k <= n.'
                },
                {
                    id: 'ch08-ex02',
                    type: 'proof',
                    difficulty: 3,
                    title: 'Subgroups of p-Groups are p-Groups',
                    question: 'Prove that every subgroup and every quotient group of a finite p-group is again a p-group.',
                    hint: 'For subgroups, use Lagrange. For quotients, use the fact that |G/N| = |G|/|N| and both |G| and |N| are powers of p.',
                    solution: 'Let G be a p-group with |G| = p^n. If H <= G, then |H| divides |G| = p^n by Lagrange, so |H| = p^m for some m <= n, making H a p-group. If N is normal in G, then |G/N| = |G|/|N| = p^n / p^m = p^{n-m}, so G/N is also a p-group.'
                },
                {
                    id: 'ch08-ex03',
                    type: 'proof',
                    difficulty: 3,
                    title: 'G/Z(G) Cyclic Implies G Abelian',
                    question: 'Prove the lemma: if G/Z(G) is cyclic, then G is abelian.',
                    hint: 'Write every element as g^a z for a generator gZ(G) of G/Z(G) and z in Z(G). Then check commutativity.',
                    solution: 'Let G/Z(G) = <gZ(G)>. Every element of G has the form g^a z for some integer a and z in Z(G). Given x = g^a z_1 and y = g^b z_2, we get xy = g^a z_1 g^b z_2 = g^{a+b} z_1 z_2 (since z_1 commutes with g^b) = g^b z_2 g^a z_1 = yx. So G is abelian.'
                }
            ]
        },

        // ===== SECTION 2: Sylow's First Theorem =====
        {
            id: 'ch08-sec02',
            title: 'Sylow\'s First Theorem',
            content: `

<p class="section-roadmap"><strong>Section goal:</strong> State and prove the existence of Sylow p-subgroups using the class equation argument, and establish key terminology.</p>

<h2>8.2 Sylow's First Theorem</h2>

<h3>Setup and Terminology</h3>

<div class="definition">
<strong>Definition 8.8 (Sylow p-Subgroup).</strong>
Let \\(G\\) be a finite group and let \\(p\\) be a prime. Write \\(|G| = p^n m\\) where \\(p \\nmid m\\) (i.e., \\(p^n\\) is the highest power of \\(p\\) dividing \\(|G|\\)). A subgroup \\(P \\le G\\) is called a <em>Sylow p-subgroup</em> if \\(|P| = p^n\\). The set of all Sylow p-subgroups of \\(G\\) is denoted \\(\\text{Syl}_p(G)\\), and its cardinality is denoted \\(n_p(G)\\) or simply \\(n_p\\).
</div>

<div class="env-block example">
<div class="env-title">Example 8.9</div>
<div class="env-body">
<p>Let \\(G = S_3\\) with \\(|G| = 6 = 2 \\cdot 3\\). The Sylow 2-subgroups have order 2: they are \\(\\{e, (12)\\}\\), \\(\\{e, (13)\\}\\), \\(\\{e, (23)\\}\\), so \\(n_2 = 3\\). The Sylow 3-subgroup has order 3: \\(\\{e, (123), (132)\\}\\), so \\(n_3 = 1\\).</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 8.10</div>
<div class="env-body">
<p>Let \\(G = S_4\\) with \\(|G| = 24 = 2^3 \\cdot 3\\). A Sylow 2-subgroup has order 8. One such subgroup is the dihedral group \\(D_4\\) embedded as the symmetries of the square \\(\\{1,2,3,4\\}\\). The Sylow 3-subgroups have order 3; each is generated by a 3-cycle.</p>
</div>
</div>

<h3>The Existence Theorem</h3>

<div class="theorem">
<strong>Theorem 8.11 (Sylow's First Theorem).</strong>
Let \\(G\\) be a finite group and let \\(p\\) be a prime. If \\(p^k\\) divides \\(|G|\\), then \\(G\\) contains a subgroup of order \\(p^k\\). In particular, Sylow p-subgroups exist: \\(\\text{Syl}_p(G) \\neq \\emptyset\\).
</div>

<div class="proof">
<strong>Proof (via the class equation, for the Sylow subgroup case).</strong>
We proceed by strong induction on \\(|G|\\). Write \\(|G| = p^n m\\) with \\(p \\nmid m\\) and \\(n \\ge 1\\).

<p><strong>Case 1:</strong> \\(p\\) divides \\(|Z(G)|\\). By Cauchy's theorem (which follows from the class equation), \\(Z(G)\\) contains an element \\(z\\) of order \\(p\\). Since \\(z \\in Z(G)\\), the subgroup \\(N = \\langle z \\rangle\\) is normal in \\(G\\). Consider \\(\\bar{G} = G/N\\) with \\(|\\bar{G}| = |G|/p = p^{n-1}m\\). By induction, \\(\\bar{G}\\) has a subgroup \\(\\bar{P}\\) of order \\(p^{n-1}\\). Let \\(P = \\pi^{-1}(\\bar{P})\\) where \\(\\pi : G \\to G/N\\) is the projection. Then \\(|P| = |\\bar{P}| \\cdot |N| = p^{n-1} \\cdot p = p^n\\).</p>

<p><strong>Case 2:</strong> \\(p\\) does not divide \\(|Z(G)|\\). Use the class equation \\(|G| = |Z(G)| + \\sum_i [G : C_G(g_i)]\\). Since \\(p \\mid |G|\\) but \\(p \\nmid |Z(G)|\\), there exists some \\(i\\) with \\(p \\nmid [G : C_G(g_i)]\\). For this \\(i\\), since \\(|G| = [G : C_G(g_i)] \\cdot |C_G(g_i)|\\) and \\(p^n \\mid |G|\\) but \\(p \\nmid [G : C_G(g_i)]\\), we get \\(p^n \\mid |C_G(g_i)|\\). Since \\(C_G(g_i)\\) is a proper subgroup of \\(G\\) (as \\(g_i \\notin Z(G)\\)), by induction \\(C_G(g_i)\\) has a Sylow p-subgroup of order \\(p^n\\), which is also a Sylow p-subgroup of \\(G\\). \\(\\square\\)</p>
</div>

<div class="env-block remark">
<div class="env-title">Remark 8.12</div>
<div class="env-body">
<p>Cauchy's theorem (if \\(p \\mid |G|\\), then \\(G\\) has an element of order \\(p\\)) is a special case of Sylow's First Theorem with \\(k = 1\\). Historically, Cauchy's theorem is often proved first and then used in the proof of Sylow I, as we did above.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="ch08-viz-sylow-subgroups"></div>

`,
            visualizations: [
                {
                    id: 'ch08-viz-sylow-subgroups',
                    title: 'Sylow Subgroups of S_n',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 420;

                        const groupData = [
                            {
                                name: 'S_3', order: 6, factored: '2 * 3',
                                sylows: [
                                    { p: 2, size: 2, count: 3, examples: ['{e,(12)}', '{e,(13)}', '{e,(23)}'] },
                                    { p: 3, size: 3, count: 1, examples: ['{e,(123),(132)}'] }
                                ]
                            },
                            {
                                name: 'S_4', order: 24, factored: '2^3 * 3',
                                sylows: [
                                    { p: 2, size: 8, count: 3, examples: ['D_4 copies'] },
                                    { p: 3, size: 3, count: 4, examples: ['<(123)>', '<(124)>', '<(134)>', '<(234)>'] }
                                ]
                            },
                            {
                                name: 'A_4', order: 12, factored: '2^2 * 3',
                                sylows: [
                                    { p: 2, size: 4, count: 1, examples: ['{e,(12)(34),(13)(24),(14)(23)}'] },
                                    { p: 3, size: 3, count: 4, examples: ['<(123)>', '<(124)>', '<(134)>', '<(234)>'] }
                                ]
                            },
                            {
                                name: 'Z/12Z', order: 12, factored: '2^2 * 3',
                                sylows: [
                                    { p: 2, size: 4, count: 1, examples: ['{0,3,6,9}'] },
                                    { p: 3, size: 3, count: 1, examples: ['{0,4,8}'] }
                                ]
                            }
                        ];

                        let selectedGroup = 0;

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            const g = groupData[selectedGroup];

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Sylow Subgroups of ' + g.name, 290, 25);
                            ctx.font = '13px sans-serif';
                            ctx.fillStyle = '#8b949e';
                            ctx.fillText('|' + g.name + '| = ' + g.order + ' = ' + g.factored, 290, 45);

                            let y = 75;
                            g.sylows.forEach((s, si) => {
                                ctx.fillStyle = si === 0 ? '#58a6ff' : '#f0883e';
                                ctx.font = 'bold 14px sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('Sylow ' + s.p + '-subgroups: order ' + s.size + ', count n_' + s.p + ' = ' + s.count, 30, y);
                                y += 22;

                                ctx.font = '12px sans-serif';
                                ctx.fillStyle = '#c9d1d9';
                                s.examples.forEach((ex) => {
                                    ctx.fillText('  ' + ex, 40, y);
                                    y += 18;
                                });

                                ctx.fillStyle = '#8b949e';
                                ctx.fillText('  Check: n_' + s.p + ' = ' + s.count + ' divides ' + (g.order / s.size) + ', and ' + s.count + ' ≡ 1 (mod ' + s.p + ')', 40, y);
                                y += 28;
                            });

                            // Group selector buttons
                            const btnY = 340;
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Select a group:', 290, btnY - 10);

                            groupData.forEach((gd, i) => {
                                const bx = 90 + i * 110;
                                ctx.fillStyle = i === selectedGroup ? '#238636' : '#21262d';
                                ctx.beginPath();
                                ctx.roundRect(bx, btnY, 95, 28, 6);
                                ctx.fill();
                                ctx.strokeStyle = '#30363d';
                                ctx.stroke();
                                ctx.fillStyle = '#e6edf3';
                                ctx.font = '13px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(gd.name, bx + 47, btnY + 18);
                            });

                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Click a group to explore its Sylow subgroups', 290, btnY + 55);
                        }

                        canvas.addEventListener('click', (e) => {
                            const rect = canvas.getBoundingClientRect();
                            const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
                            const my = (e.clientY - rect.top) * (canvas.height / rect.height);
                            const btnY = 340;

                            groupData.forEach((gd, i) => {
                                const bx = 90 + i * 110;
                                if (mx >= bx && mx <= bx + 95 && my >= btnY && my <= btnY + 28) {
                                    selectedGroup = i;
                                    draw();
                                }
                            });
                        });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch08-ex04',
                    type: 'short_answer',
                    difficulty: 2,
                    title: 'Finding Sylow Subgroups',
                    question: 'Let G = Z/20Z. Find all Sylow 2-subgroups and all Sylow 5-subgroups.',
                    hint: '|G| = 20 = 2^2 * 5. The Sylow 2-subgroup has order 4, and the Sylow 5-subgroup has order 5. Z/20Z is cyclic, so subgroups are unique.',
                    solution: 'Since Z/20Z is cyclic, there is a unique subgroup of each order dividing 20. The Sylow 2-subgroup is the unique subgroup of order 4: {0, 5, 10, 15} = <5>. The Sylow 5-subgroup is the unique subgroup of order 5: {0, 4, 8, 12, 16} = <4>.'
                },
                {
                    id: 'ch08-ex05',
                    type: 'proof',
                    difficulty: 3,
                    title: 'Cauchy from Sylow I',
                    question: 'Deduce Cauchy\'s theorem from Sylow\'s First Theorem: if p divides |G|, then G has an element of order p.',
                    hint: 'Sylow I gives a subgroup P of order p. What can you say about a non-identity element of P?',
                    solution: 'By Sylow I, G has a subgroup P of order p. Since |P| = p is prime, P is cyclic, say P = <g>. Then |g| = p, so G contains an element of order p.'
                },
                {
                    id: 'ch08-ex06',
                    type: 'proof',
                    difficulty: 4,
                    title: 'Sylow Subgroups of Subgroups',
                    question: 'Let H be a subgroup of a finite group G, and let P be a Sylow p-subgroup of G. Prove that P intersect H is a p-subgroup of H (not necessarily Sylow).',
                    hint: 'P is a p-group, and the intersection of a subgroup with a p-group is a p-group.',
                    solution: 'P intersect H is a subgroup of P. Since P is a p-group, every subgroup of P is also a p-group (its order divides |P| = p^n, hence is a power of p). Therefore P intersect H is a p-subgroup of H. It need not be Sylow in H because its order might not be the full p-part of |H|.'
                }
            ]
        },

        // ===== SECTION 3: Sylow's Second and Third Theorems =====
        {
            id: 'ch08-sec03',
            title: 'Sylow\'s Second and Third Theorems',
            content: `

<p class="section-roadmap"><strong>Section goal:</strong> Prove that all Sylow p-subgroups are conjugate and establish the numerical constraints on the number \\(n_p\\) of Sylow p-subgroups.</p>

<h2>8.3 Sylow's Second and Third Theorems</h2>

<h3>Conjugacy of Sylow Subgroups</h3>

<div class="theorem">
<strong>Theorem 8.13 (Sylow's Second Theorem).</strong>
Let \\(G\\) be a finite group and \\(p\\) a prime. Any two Sylow p-subgroups of \\(G\\) are conjugate. That is, if \\(P, Q \\in \\text{Syl}_p(G)\\), then there exists \\(g \\in G\\) with \\(Q = gPg^{-1}\\).
</div>

<div class="proof">
<strong>Proof.</strong>
Let \\(P\\) be a Sylow p-subgroup and let \\(Q\\) be any Sylow p-subgroup. Consider the action of \\(Q\\) on the set of left cosets \\(G/P\\) by left multiplication. We have \\(|G/P| = [G:P] = m\\) where \\(|G| = p^n m\\) and \\(p \\nmid m\\).

<p>Since \\(Q\\) is a p-group acting on a set of size \\(m\\) with \\(p \\nmid m\\), the number of fixed points of this action is congruent to \\(m \\pmod{p}\\), hence is not zero. So there exists a coset \\(gP\\) fixed by \\(Q\\): for all \\(q \\in Q\\), \\(qgP = gP\\), i.e., \\(g^{-1}qg \\in P\\) for all \\(q \\in Q\\). This means \\(g^{-1}Qg \\le P\\). Since \\(|g^{-1}Qg| = |Q| = p^n = |P|\\), we get \\(g^{-1}Qg = P\\), i.e., \\(Q = gPg^{-1}\\). \\(\\square\\)</p>
</div>

<div class="env-block remark">
<div class="env-title">Remark 8.14</div>
<div class="env-body">
<p>Sylow II has an immediate corollary: a Sylow p-subgroup \\(P\\) is normal in \\(G\\) if and only if \\(n_p = 1\\). Indeed, \\(P\\) is normal if and only if \\(gPg^{-1} = P\\) for all \\(g\\), which by Sylow II means no other Sylow p-subgroup exists.</p>
</div>
</div>

<h3>Counting Sylow Subgroups</h3>

<div class="theorem">
<strong>Theorem 8.15 (Sylow's Third Theorem).</strong>
Let \\(G\\) be a finite group with \\(|G| = p^n m\\), \\(p \\nmid m\\). Then:
<ol>
<li>\\(n_p\\) divides \\(m = [G:P]\\) for any \\(P \\in \\text{Syl}_p(G)\\).</li>
<li>\\(n_p \\equiv 1 \\pmod{p}\\).</li>
</ol>
</div>

<div class="proof">
<strong>Proof.</strong>
Let \\(\\Omega = \\text{Syl}_p(G)\\), so \\(|\\Omega| = n_p\\).

<p><strong>(1)</strong> \\(G\\) acts on \\(\\Omega\\) by conjugation. By Sylow II, this action is transitive (any two Sylow p-subgroups are conjugate). The stabilizer of \\(P \\in \\Omega\\) under this action is the normalizer \\(N_G(P)\\). By the orbit-stabilizer theorem, \\(n_p = |\\Omega| = [G : N_G(P)]\\). Since \\(P \\le N_G(P) \\le G\\), we have \\([G : N_G(P)]\\) divides \\([G : P] = m\\). Thus \\(n_p \\mid m\\).</p>

<p><strong>(2)</strong> Fix a Sylow p-subgroup \\(P\\) and let \\(P\\) act on \\(\\Omega\\) by conjugation. The fixed points of this action are those \\(Q \\in \\Omega\\) with \\(gQg^{-1} = Q\\) for all \\(g \\in P\\), i.e., \\(P \\le N_G(Q)\\). If \\(Q\\) is a fixed point, then both \\(P\\) and \\(Q\\) are Sylow p-subgroups of \\(N_G(Q)\\). By Sylow II applied to \\(N_G(Q)\\), they are conjugate in \\(N_G(Q)\\). But \\(Q\\) is normal in \\(N_G(Q)\\) by definition, so the only conjugate of \\(Q\\) in \\(N_G(Q)\\) is \\(Q\\) itself. Hence \\(P = Q\\). The only fixed point is \\(P\\) itself, so the number of fixed points is 1. Since \\(P\\) is a p-group acting on \\(\\Omega\\), the number of fixed points satisfies \\(|\\text{Fix}| \\equiv |\\Omega| \\pmod{p}\\), giving \\(1 \\equiv n_p \\pmod{p}\\). \\(\\square\\)</p>
</div>

<div class="env-block example">
<div class="env-title">Example 8.16 (Sylow Constraints for |G| = 12)</div>
<div class="env-body">
<p>Let \\(|G| = 12 = 2^2 \\cdot 3\\). Sylow III gives:
<ul>
<li>\\(n_2 \\mid 3\\) and \\(n_2 \\equiv 1 \\pmod{2}\\), so \\(n_2 \\in \\{1, 3\\}\\).</li>
<li>\\(n_3 \\mid 4\\) and \\(n_3 \\equiv 1 \\pmod{3}\\), so \\(n_3 \\in \\{1, 4\\}\\).</li>
</ul>
Both possibilities for each prime actually occur: \\(A_4\\) has \\(n_2 = 1, n_3 = 4\\); \\(D_6\\) has \\(n_2 = 3, n_3 = 1\\).</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 8.17 (Sylow Constraints for |G| = 30)</div>
<div class="env-body">
<p>Let \\(|G| = 30 = 2 \\cdot 3 \\cdot 5\\). Sylow III gives:
<ul>
<li>\\(n_2 \\mid 15\\) and \\(n_2 \\equiv 1 \\pmod{2}\\), so \\(n_2 \\in \\{1, 3, 5, 15\\}\\).</li>
<li>\\(n_3 \\mid 10\\) and \\(n_3 \\equiv 1 \\pmod{3}\\), so \\(n_3 \\in \\{1, 10\\}\\).</li>
<li>\\(n_5 \\mid 6\\) and \\(n_5 \\equiv 1 \\pmod{5}\\), so \\(n_5 \\in \\{1, 6\\}\\).</li>
</ul>
An element-counting argument shows that \\(n_3 = 10\\) or \\(n_5 = 6\\) would produce too many elements, forcing at least one of \\(n_3 = 1\\) or \\(n_5 = 1\\).</p>
</div>
</div>

<div class="viz-placeholder" data-viz="ch08-viz-np-constraints"></div>

`,
            visualizations: [
                {
                    id: 'ch08-viz-np-constraints',
                    title: 'Sylow Number Constraints Calculator',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 440;

                        let inputOrder = 60;

                        function factorize(n) {
                            const factors = {};
                            let d = 2;
                            while (d * d <= n) {
                                while (n % d === 0) {
                                    factors[d] = (factors[d] || 0) + 1;
                                    n /= d;
                                }
                                d++;
                            }
                            if (n > 1) factors[n] = (factors[n] || 0) + 1;
                            return factors;
                        }

                        function sylowConstraints(order) {
                            const factors = factorize(order);
                            const results = [];
                            for (const pStr of Object.keys(factors)) {
                                const p = parseInt(pStr);
                                const k = factors[p];
                                const pk = Math.pow(p, k);
                                const m = order / pk;
                                const candidates = [];
                                for (let d = 1; d <= m; d++) {
                                    if (m % d === 0 && d % p === 1) {
                                        candidates.push(d);
                                    }
                                }
                                results.push({ p, k, pk, m, candidates });
                            }
                            return results;
                        }

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Sylow Number Constraints for |G| = ' + inputOrder, 290, 25);

                            const factors = factorize(inputOrder);
                            let facStr = '';
                            for (const p of Object.keys(factors).sort((a, b) => a - b)) {
                                if (facStr) facStr += ' * ';
                                facStr += p + (factors[p] > 1 ? '^' + factors[p] : '');
                            }
                            ctx.font = '13px sans-serif';
                            ctx.fillStyle = '#8b949e';
                            ctx.fillText(inputOrder + ' = ' + facStr, 290, 45);

                            const results = sylowConstraints(inputOrder);
                            let y = 75;
                            const colors = ['#58a6ff', '#f0883e', '#bc8cff', '#56d364', '#f778ba'];

                            results.forEach((r, i) => {
                                ctx.fillStyle = colors[i % colors.length];
                                ctx.font = 'bold 13px sans-serif';
                                ctx.textAlign = 'left';
                                ctx.fillText('p = ' + r.p + ':  Sylow ' + r.p + '-subgroups have order ' + r.p + '^' + r.k + ' = ' + r.pk, 30, y);
                                y += 20;

                                ctx.fillStyle = '#c9d1d9';
                                ctx.font = '12px sans-serif';
                                ctx.fillText('n_' + r.p + ' | ' + r.m + '  and  n_' + r.p + ' ≡ 1 (mod ' + r.p + ')', 50, y);
                                y += 18;

                                ctx.fillStyle = '#e6edf3';
                                ctx.fillText('Possible values: n_' + r.p + ' in {' + r.candidates.join(', ') + '}', 50, y);
                                y += 25;
                            });

                            if (results.length === 0) {
                                ctx.fillStyle = '#8b949e';
                                ctx.font = '13px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('|G| = 1 has no prime factors.', 290, y);
                            }

                            // Order selector
                            const ctrlY = 330;
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = '13px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Choose |G|:', 290, ctrlY - 10);

                            const orders = [12, 15, 20, 24, 30, 36, 48, 56, 60];
                            orders.forEach((ord, i) => {
                                const col = i % 5;
                                const row = Math.floor(i / 5);
                                const bx = 70 + col * 95;
                                const by = ctrlY + row * 35;
                                ctx.fillStyle = ord === inputOrder ? '#238636' : '#21262d';
                                ctx.beginPath();
                                ctx.roundRect(bx, by, 80, 26, 4);
                                ctx.fill();
                                ctx.strokeStyle = '#30363d';
                                ctx.stroke();
                                ctx.fillStyle = '#e6edf3';
                                ctx.font = '12px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('|G|=' + ord, bx + 40, by + 17);
                            });

                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Click to select a group order', 290, ctrlY + 95);
                        }

                        canvas.addEventListener('click', (e) => {
                            const rect = canvas.getBoundingClientRect();
                            const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
                            const my = (e.clientY - rect.top) * (canvas.height / rect.height);
                            const ctrlY = 330;

                            const orders = [12, 15, 20, 24, 30, 36, 48, 56, 60];
                            orders.forEach((ord, i) => {
                                const col = i % 5;
                                const row = Math.floor(i / 5);
                                const bx = 70 + col * 95;
                                const by = ctrlY + row * 35;
                                if (mx >= bx && mx <= bx + 80 && my >= by && my <= by + 26) {
                                    inputOrder = ord;
                                    draw();
                                }
                            });
                        });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch08-ex07',
                    type: 'short_answer',
                    difficulty: 2,
                    title: 'Sylow Constraints for Order 20',
                    question: 'Let |G| = 20. Find all possible values of n_2 and n_5.',
                    hint: '20 = 2^2 * 5. Apply Sylow III: n_p divides m and n_p is congruent to 1 mod p.',
                    solution: 'n_2 divides 5 and n_2 is odd, so n_2 in {1, 5}. n_5 divides 4 and n_5 ≡ 1 (mod 5), so n_5 in {1}. Therefore n_5 = 1, meaning the Sylow 5-subgroup is always normal in any group of order 20.'
                },
                {
                    id: 'ch08-ex08',
                    type: 'proof',
                    difficulty: 3,
                    title: 'Normal Sylow Subgroup',
                    question: 'Prove that if n_p = 1, then the unique Sylow p-subgroup is normal in G.',
                    hint: 'A Sylow p-subgroup P is normal if and only if gPg^{-1} = P for all g in G. But conjugation sends Sylow p-subgroups to Sylow p-subgroups.',
                    solution: 'For any g in G, gPg^{-1} is a subgroup of G with |gPg^{-1}| = |P| = p^n, so gPg^{-1} is also a Sylow p-subgroup. Since n_p = 1, P is the unique Sylow p-subgroup, so gPg^{-1} = P for all g. By definition, P is normal in G.'
                },
                {
                    id: 'ch08-ex09',
                    type: 'proof',
                    difficulty: 3,
                    title: 'Normalizer Contains Sylow',
                    question: 'Let P be a Sylow p-subgroup of G and let N = N_G(P). Prove that P is the unique Sylow p-subgroup of N, i.e., n_p(N) = 1.',
                    hint: 'P is normal in N by definition of the normalizer. Use the criterion that normal Sylow implies unique.',
                    solution: 'By definition, gPg^{-1} = P for all g in N, so P is normal in N. Since P is a Sylow p-subgroup of G and P <= N <= G, P is also a Sylow p-subgroup of N (because p does not divide [N : P]). A normal Sylow p-subgroup is the unique one (any conjugate equals itself, and all Sylow p-subgroups are conjugate). So n_p(N) = 1.'
                },
                {
                    id: 'ch08-ex10',
                    type: 'multiple_choice',
                    difficulty: 2,
                    title: 'Possible Sylow Numbers',
                    question: 'For a group of order 56 = 2^3 * 7, which of the following is NOT a possible value of n_7?',
                    options: ['1', '8', '7', '2'],
                    correct: 3,
                    hint: 'n_7 divides 8 and n_7 ≡ 1 (mod 7).',
                    solution: 'n_7 divides 8, so n_7 in {1, 2, 4, 8}. Also n_7 ≡ 1 (mod 7), so n_7 in {1, 8}. The value 2 does not satisfy n_7 ≡ 1 (mod 7), so it is not possible.'
                }
            ]
        },

        // ===== SECTION 4: Classifying Small Groups =====
        {
            id: 'ch08-sec04',
            title: 'Classifying Small Groups',
            content: `

<p class="section-roadmap"><strong>Section goal:</strong> Apply the Sylow theorems to classify groups of small orders, illustrating the power of the divisibility and congruence constraints.</p>

<h2>8.4 Classifying Small Groups</h2>

<h3>Groups of Order pq</h3>

<div class="theorem">
<strong>Theorem 8.18 (Groups of Order pq).</strong>
Let \\(p > q\\) be distinct primes and \\(|G| = pq\\).
<ol>
<li>\\(G\\) has a unique (hence normal) Sylow p-subgroup.</li>
<li>If \\(q \\nmid (p - 1)\\), then \\(G \\cong \\mathbb{Z}/pq\\mathbb{Z}\\) (cyclic).</li>
<li>If \\(q \\mid (p - 1)\\), then \\(G\\) is either cyclic or a nonabelian semidirect product \\(\\mathbb{Z}/p\\mathbb{Z} \\rtimes \\mathbb{Z}/q\\mathbb{Z}\\).</li>
</ol>
</div>

<div class="proof">
<strong>Proof.</strong>
<p><strong>(1)</strong> By Sylow III, \\(n_p \\mid q\\) and \\(n_p \\equiv 1 \\pmod{p}\\). Since \\(q < p\\), the only divisor of \\(q\\) that is \\(\\equiv 1 \\pmod{p}\\) is 1. So \\(n_p = 1\\), and the Sylow p-subgroup \\(P\\) is normal.</p>

<p><strong>(2)</strong> Similarly, \\(n_q \\mid p\\) and \\(n_q \\equiv 1 \\pmod{q}\\). The divisors of \\(p\\) are 1 and \\(p\\). If \\(q \\nmid (p-1)\\), then \\(p \\not\\equiv 1 \\pmod{q}\\), so \\(n_q = 1\\). With both \\(P\\) and \\(Q\\) (Sylow q-subgroup) normal and \\(P \\cap Q = \\{e\\}\\), we get \\(G = P \\times Q \\cong \\mathbb{Z}/p\\mathbb{Z} \\times \\mathbb{Z}/q\\mathbb{Z} \\cong \\mathbb{Z}/pq\\mathbb{Z}\\).</p>

<p><strong>(3)</strong> If \\(q \\mid (p-1)\\), then \\(n_q = p\\) is also possible. In this case \\(P\\) is still normal, and \\(G = P \\rtimes Q\\) where the action of \\(Q\\) on \\(P\\) is given by a nontrivial homomorphism \\(Q \\to \\text{Aut}(P) \\cong \\mathbb{Z}/(p-1)\\mathbb{Z}\\). Since \\(q \\mid (p-1)\\), such a nontrivial homomorphism exists, giving exactly one nonabelian group (up to isomorphism). \\(\\square\\)</p>
</div>

<div class="env-block example">
<div class="env-title">Example 8.19 (Order 15)</div>
<div class="env-body">
<p>\\(|G| = 15 = 3 \\cdot 5\\). Here \\(p = 5, q = 3\\). Since \\(3 \\nmid (5-1) = 4\\), the only group of order 15 is \\(\\mathbb{Z}/15\\mathbb{Z}\\).</p>
</div>
</div>

<div class="env-block example">
<div class="env-title">Example 8.20 (Order 21)</div>
<div class="env-body">
<p>\\(|G| = 21 = 3 \\cdot 7\\). Here \\(p = 7, q = 3\\). Since \\(3 \\mid (7-1) = 6\\), there are two groups of order 21: \\(\\mathbb{Z}/21\\mathbb{Z}\\) and a nonabelian group \\(\\mathbb{Z}/7\\mathbb{Z} \\rtimes \\mathbb{Z}/3\\mathbb{Z}\\).</p>
</div>
</div>

<h3>Groups of Order 12</h3>

<div class="theorem">
<strong>Theorem 8.21 (Groups of Order 12).</strong>
There are exactly 5 groups of order 12, up to isomorphism:
<ol>
<li>\\(\\mathbb{Z}/12\\mathbb{Z}\\)</li>
<li>\\(\\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/6\\mathbb{Z} \\cong \\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/3\\mathbb{Z}\\)</li>
<li>\\(A_4\\) (alternating group)</li>
<li>\\(D_6\\) (dihedral group of the hexagon)</li>
<li>\\(\\text{Dic}_3\\) (the dicyclic group, a generalized quaternion group)</li>
</ol>
</div>

<div class="proof">
<strong>Proof sketch.</strong>
<p>We have \\(|G| = 12 = 2^2 \\cdot 3\\). By Sylow III: \\(n_3 \\in \\{1, 4\\}\\) and \\(n_2 \\in \\{1, 3\\}\\).</p>

<p><strong>Case \\(n_3 = 1\\):</strong> Let \\(P_3\\) be the unique (normal) Sylow 3-subgroup. Let \\(P_2\\) be a Sylow 2-subgroup (order 4). Then \\(G = P_3 \\rtimes P_2\\). Since \\(P_2 \\cong \\mathbb{Z}/4\\mathbb{Z}\\) or \\(V_4\\) and \\(\\text{Aut}(P_3) \\cong \\mathbb{Z}/2\\mathbb{Z}\\), we enumerate the semidirect products. This yields \\(\\mathbb{Z}/12\\mathbb{Z}\\), \\(\\mathbb{Z}/2\\mathbb{Z} \\times \\mathbb{Z}/6\\mathbb{Z}\\), \\(D_6\\), and \\(\\text{Dic}_3\\).</p>

<p><strong>Case \\(n_3 = 4\\):</strong> Four Sylow 3-subgroups contribute 8 elements of order 3. The action of \\(G\\) on \\(\\text{Syl}_3(G)\\) gives a homomorphism \\(G \\to S_4\\). The image has order dividing 12 and is a multiple of 4 (the action is transitive). This leads to \\(G \\cong A_4\\). \\(\\square\\)</p>
</div>

<div class="viz-placeholder" data-viz="ch08-viz-small-groups"></div>

`,
            visualizations: [
                {
                    id: 'ch08-viz-small-groups',
                    title: 'Classification of Groups by Order',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 440;

                        const classData = {
                            1: { count: 1, groups: ['{e}'], abelian: 1, nonabelian: 0 },
                            2: { count: 1, groups: ['Z/2Z'], abelian: 1, nonabelian: 0 },
                            3: { count: 1, groups: ['Z/3Z'], abelian: 1, nonabelian: 0 },
                            4: { count: 2, groups: ['Z/4Z', 'V_4'], abelian: 2, nonabelian: 0 },
                            5: { count: 1, groups: ['Z/5Z'], abelian: 1, nonabelian: 0 },
                            6: { count: 2, groups: ['Z/6Z', 'S_3'], abelian: 1, nonabelian: 1 },
                            7: { count: 1, groups: ['Z/7Z'], abelian: 1, nonabelian: 0 },
                            8: { count: 5, groups: ['Z/8Z', 'Z/4xZ/2', 'V_4xZ/2', 'D_4', 'Q_8'], abelian: 3, nonabelian: 2 },
                            9: { count: 2, groups: ['Z/9Z', 'Z/3xZ/3'], abelian: 2, nonabelian: 0 },
                            10: { count: 2, groups: ['Z/10Z', 'D_5'], abelian: 1, nonabelian: 1 },
                            11: { count: 1, groups: ['Z/11Z'], abelian: 1, nonabelian: 0 },
                            12: { count: 5, groups: ['Z/12Z', 'Z/2xZ/6', 'A_4', 'D_6', 'Dic_3'], abelian: 2, nonabelian: 3 },
                            15: { count: 1, groups: ['Z/15Z'], abelian: 1, nonabelian: 0 }
                        };

                        const displayOrders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15];
                        let selectedOrder = 12;

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Number of Groups of Order n (up to isomorphism)', 290, 25);

                            // Bar chart
                            const chartX = 50;
                            const chartY = 50;
                            const chartW = 480;
                            const chartH = 160;
                            const maxCount = 5;
                            const barW = chartW / displayOrders.length - 4;

                            ctx.strokeStyle = '#30363d';
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(chartX, chartY + chartH);
                            ctx.lineTo(chartX + chartW, chartY + chartH);
                            ctx.stroke();

                            displayOrders.forEach((n, i) => {
                                const d = classData[n];
                                const x = chartX + i * (chartW / displayOrders.length) + 2;
                                const abH = (d.abelian / maxCount) * chartH;
                                const naH = (d.nonabelian / maxCount) * chartH;

                                // Abelian portion
                                ctx.fillStyle = '#238636';
                                ctx.fillRect(x, chartY + chartH - abH, barW, abH);

                                // Nonabelian portion
                                ctx.fillStyle = '#f0883e';
                                ctx.fillRect(x, chartY + chartH - abH - naH, barW, naH);

                                // Highlight selected
                                if (n === selectedOrder) {
                                    ctx.strokeStyle = '#e6edf3';
                                    ctx.lineWidth = 2;
                                    ctx.strokeRect(x - 1, chartY + chartH - abH - naH - 1, barW + 2, abH + naH + 2);
                                }

                                // Label
                                ctx.fillStyle = '#8b949e';
                                ctx.font = '11px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(String(n), x + barW / 2, chartY + chartH + 14);

                                // Count on top
                                ctx.fillStyle = '#c9d1d9';
                                ctx.fillText(String(d.count), x + barW / 2, chartY + chartH - abH - naH - 4);
                            });

                            ctx.fillStyle = '#8b949e';
                            ctx.font = '11px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Group order n', 290, chartY + chartH + 30);

                            // Legend
                            ctx.fillStyle = '#238636';
                            ctx.fillRect(380, chartY + 5, 12, 12);
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = '11px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Abelian', 396, chartY + 15);

                            ctx.fillStyle = '#f0883e';
                            ctx.fillRect(380, chartY + 22, 12, 12);
                            ctx.fillStyle = '#c9d1d9';
                            ctx.fillText('Nonabelian', 396, chartY + 32);

                            // Detail panel
                            const d = classData[selectedOrder];
                            const panelY = chartY + chartH + 45;
                            ctx.fillStyle = '#21262d';
                            ctx.beginPath();
                            ctx.roundRect(30, panelY, 520, 130, 8);
                            ctx.fill();
                            ctx.strokeStyle = '#30363d';
                            ctx.stroke();

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 14px sans-serif';
                            ctx.textAlign = 'left';
                            ctx.fillText('Groups of order ' + selectedOrder + '  (' + d.count + ' total: ' + d.abelian + ' abelian, ' + d.nonabelian + ' nonabelian)', 45, panelY + 22);

                            ctx.font = '12px sans-serif';
                            ctx.fillStyle = '#e6edf3';
                            const maxPerRow = 3;
                            d.groups.forEach((g, i) => {
                                const col = i % maxPerRow;
                                const row = Math.floor(i / maxPerRow);
                                ctx.fillText((i + 1) + '. ' + g, 55 + col * 170, panelY + 45 + row * 20);
                            });

                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Click a bar to see details for that order', 290, panelY + 120);
                        }

                        canvas.addEventListener('click', (e) => {
                            const rect = canvas.getBoundingClientRect();
                            const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
                            const my = (e.clientY - rect.top) * (canvas.height / rect.height);
                            const chartX = 50;
                            const chartY = 50;
                            const chartW = 480;
                            const chartH = 160;

                            if (my >= chartY && my <= chartY + chartH + 20) {
                                displayOrders.forEach((n, i) => {
                                    const x = chartX + i * (chartW / displayOrders.length);
                                    const barW = chartW / displayOrders.length;
                                    if (mx >= x && mx <= x + barW) {
                                        selectedOrder = n;
                                        draw();
                                    }
                                });
                            }
                        });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch08-ex11',
                    type: 'proof',
                    difficulty: 3,
                    title: 'Unique Group of Order 15',
                    question: 'Prove that every group of order 15 is cyclic.',
                    hint: 'Show n_3 = 1 and n_5 = 1 using Sylow III, then argue G = P_3 x P_5.',
                    solution: 'Let |G| = 15 = 3 * 5. By Sylow III, n_5 divides 3 and n_5 ≡ 1 (mod 5), so n_5 = 1. Similarly, n_3 divides 5 and n_3 ≡ 1 (mod 3), so n_3 in {1}. (The only divisor of 5 congruent to 1 mod 3 is 1.) Both Sylow subgroups are normal. Since gcd(3,5) = 1, P_3 intersect P_5 = {e}, and |P_3 P_5| = 15 = |G|. So G = P_3 x P_5 = Z/3Z x Z/5Z = Z/15Z.'
                },
                {
                    id: 'ch08-ex12',
                    type: 'short_answer',
                    difficulty: 3,
                    title: 'Groups of Order 35',
                    question: 'How many groups of order 35 are there, up to isomorphism? Justify your answer using the Sylow theorems.',
                    hint: '35 = 5 * 7. Check whether 5 divides 7 - 1 = 6.',
                    solution: 'Since 35 = 5 * 7 with p = 7 > q = 5, and 5 does not divide 7 - 1 = 6, Theorem 8.18 gives exactly one group: Z/35Z. The Sylow constraints force n_5 = 1 and n_7 = 1, so both Sylow subgroups are normal and the group is a direct product Z/5Z x Z/7Z = Z/35Z.'
                },
                {
                    id: 'ch08-ex13',
                    type: 'proof',
                    difficulty: 4,
                    title: 'No Simple Group of Order 12',
                    question: 'Prove that no group of order 12 is simple.',
                    hint: 'If n_3 = 4, count elements and use the action on Sylow 3-subgroups. If n_3 = 1, the Sylow 3-subgroup is a nontrivial normal subgroup.',
                    solution: 'Let |G| = 12. We know n_3 in {1, 4}. If n_3 = 1, the unique Sylow 3-subgroup is normal, so G is not simple. If n_3 = 4, the action of G on Syl_3(G) by conjugation gives a homomorphism f: G -> S_4. The action is transitive, so f is not trivial. If ker(f) = {e}, then G embeds in S_4 and |G| = 12 divides |A_4| = 12, so G is isomorphic to a subgroup of S_4 of order 12, namely A_4. But A_4 has a normal subgroup V_4 of order 4, so A_4 is not simple. In any case, G is not simple.'
                }
            ]
        },

        // ===== SECTION 5: Further Properties of p-Groups =====
        {
            id: 'ch08-sec05',
            title: 'Further Properties of p-Groups',
            content: `

<p class="section-roadmap"><strong>Section goal:</strong> Explore deeper structural properties of p-groups, including the existence of subgroups of every possible order, and introduce nilpotent groups and the upper central series.</p>

<h2>8.5 Further Properties of p-Groups</h2>

<h3>Subgroups of Every Order</h3>

<div class="theorem">
<strong>Theorem 8.22 (Subgroups of p-Groups).</strong>
Let \\(G\\) be a group of order \\(p^n\\). For every \\(0 \\le k \\le n\\), \\(G\\) has a subgroup of order \\(p^k\\). Moreover, every subgroup of order \\(p^k\\) with \\(k < n\\) is contained in a subgroup of order \\(p^{k+1}\\).
</div>

<div class="proof">
<strong>Proof.</strong>
We induct on \\(n\\). The base case \\(n = 0\\) is trivial. For \\(n \\ge 1\\), since \\(Z(G)\\) is nontrivial, it contains an element \\(z\\) of order \\(p\\) (by Cauchy). The subgroup \\(N = \\langle z \\rangle\\) is normal (it lies in the center). Now \\(|G/N| = p^{n-1}\\), and by induction, \\(G/N\\) has subgroups of every order \\(p^j\\) for \\(0 \\le j \\le n-1\\). Their preimages under the projection \\(G \\to G/N\\) give subgroups of \\(G\\) of orders \\(p^j \\cdot p = p^{j+1}\\) for \\(0 \\le j \\le n-1\\). Together with the trivial subgroup, this covers all orders \\(p^0, p^1, \\ldots, p^n\\).

<p>For the second statement, let \\(H \\le G\\) with \\(|H| = p^k\\), \\(k < n\\). Consider the action of \\(G\\) on \\(G/H\\) by left multiplication. The set \\(G/H\\) has \\(p^{n-k}\\) elements. Restricting to the action of \\(Z(G)\\), the number of fixed points is congruent to \\(|G/H| = p^{n-k} \\pmod{p}\\), hence divisible by \\(p\\) (since \\(n - k \\ge 1\\)). A coset \\(gH\\) is fixed by \\(Z(G)\\) if \\(zgH = gH\\) for all \\(z \\in Z(G)\\), i.e., \\(Z(G) \\le gHg^{-1} = H\\) for... Actually, we use a refined approach: consider \\(N_G(H)/H\\), which is a p-group (since \\(H\\) is normal in \\(N_G(H)\\) and \\(|N_G(H)/H|\\) is a power of \\(p\\)). Since \\(H \\lneq G\\), we have \\(N_G(H) \\supsetneq H\\) (this is a standard result for p-groups). Then \\(N_G(H)/H\\) contains a subgroup of order \\(p\\), whose preimage has order \\(p^{k+1}\\). \\(\\square\\)</p>
</div>

<div class="env-block remark">
<div class="env-title">Remark 8.23</div>
<div class="env-body">
<p>The statement that \\(H \\lneq G\\) implies \\(N_G(H) \\supsetneq H\\) for a p-group \\(G\\) is a key fact. It says proper subgroups of p-groups are never self-normalizing. This is proved by letting \\(H\\) act on \\(G/H\\) and showing that fixed points beyond \\(eH\\) exist (as above), which produce elements in \\(N_G(H) \\setminus H\\).</p>
</div>
</div>

<h3>The Upper Central Series and Nilpotent Groups</h3>

<div class="definition">
<strong>Definition 8.24 (Upper Central Series).</strong>
The <em>upper central series</em> of a group \\(G\\) is the ascending chain
\\[
\\{e\\} = Z_0(G) \\le Z_1(G) \\le Z_2(G) \\le \\cdots
\\]
defined recursively by \\(Z_0(G) = \\{e\\}\\) and \\(Z_{i+1}(G)/Z_i(G) = Z(G/Z_i(G))\\). That is, \\(Z_{i+1}(G)\\) is the preimage in \\(G\\) of the center of \\(G/Z_i(G)\\).
</div>

<p>Note that \\(Z_1(G) = Z(G)\\), and each \\(Z_i(G)\\) is normal in \\(G\\).</p>

<div class="definition">
<strong>Definition 8.25 (Nilpotent Group).</strong>
A group \\(G\\) is <em>nilpotent</em> if the upper central series reaches \\(G\\) in finitely many steps: \\(Z_c(G) = G\\) for some \\(c \\ge 0\\). The smallest such \\(c\\) is called the <em>nilpotency class</em> of \\(G\\).
</div>

<div class="env-block example">
<div class="env-title">Example 8.26</div>
<div class="env-body">
<ul>
<li>Abelian groups are nilpotent of class at most 1 (since \\(Z(G) = G\\)).</li>
<li>The dihedral group \\(D_4\\) has \\(Z(D_4) = \\{e, r^2\\}\\) and \\(D_4/Z(D_4) \\cong V_4\\), which is abelian, so \\(Z_2(D_4) = D_4\\). Thus \\(D_4\\) is nilpotent of class 2.</li>
<li>\\(S_3\\) has \\(Z(S_3) = \\{e\\}\\), so the upper central series stalls: \\(Z_i(S_3) = \\{e\\}\\) for all \\(i\\). Hence \\(S_3\\) is not nilpotent.</li>
</ul>
</div>
</div>

<div class="theorem">
<strong>Theorem 8.27 (Finite p-Groups are Nilpotent).</strong>
Every finite p-group is nilpotent.
</div>

<div class="proof">
<strong>Proof.</strong>
Let \\(|G| = p^n\\). We show the upper central series strictly ascends until it reaches \\(G\\). As long as \\(Z_i(G) \\neq G\\), the quotient \\(G/Z_i(G)\\) is a nontrivial p-group, so by Theorem 8.3, its center \\(Z(G/Z_i(G))\\) is nontrivial. This means \\(Z_{i+1}(G) \\supsetneq Z_i(G)\\). Since \\(|G|\\) is finite, the series must eventually reach \\(G\\). \\(\\square\\)
</div>

<div class="theorem">
<strong>Theorem 8.28 (Nilpotent Finite Groups are Products of Sylow Subgroups).</strong>
A finite group \\(G\\) is nilpotent if and only if \\(G\\) is the direct product of its Sylow subgroups. Equivalently, \\(G\\) is nilpotent if and only if every Sylow subgroup is normal.
</div>

<div class="proof">
<strong>Proof sketch.</strong>
<p>(\\(\\Leftarrow\\)) If \\(G = P_1 \\times P_2 \\times \\cdots \\times P_k\\) where each \\(P_i\\) is a p_i-group, then each \\(P_i\\) is nilpotent, and a direct product of nilpotent groups is nilpotent.</p>

<p>(\\(\\Rightarrow\\)) If \\(G\\) is nilpotent and \\(P\\) is a Sylow p-subgroup, one shows that \\(N_G(N_G(P)) = N_G(P)\\). A property of nilpotent groups is that every proper subgroup is properly contained in its normalizer ("the normalizer grows"). If \\(N_G(P) \\neq G\\), then \\(N_G(N_G(P)) \\supsetneq N_G(P)\\). But this contradicts \\(N_G(N_G(P)) = N_G(P)\\). So \\(N_G(P) = G\\), meaning \\(P\\) is normal. With all Sylow subgroups normal and of coprime orders, \\(G\\) decomposes as their direct product. \\(\\square\\)</p>
</div>

<div class="env-block remark">
<div class="env-title">Remark 8.29</div>
<div class="env-body">
<p>The equivalence above provides a concrete test: a finite group is nilpotent if and only if \\(n_p = 1\\) for every prime \\(p\\) dividing \\(|G|\\). This makes nilpotency easy to check once the Sylow numbers are known.</p>
</div>
</div>

<div class="viz-placeholder" data-viz="ch08-viz-central-series"></div>

`,
            visualizations: [
                {
                    id: 'ch08-viz-central-series',
                    title: 'Upper Central Series of a Group',
                    type: 'canvas',
                    setup: (canvas) => {
                        const ctx = canvas.getContext('2d');
                        canvas.width = 580;
                        canvas.height = 420;

                        const groups = [
                            {
                                name: 'D_4 (order 8)',
                                series: ['{e}', 'Z(D_4) = {e, r^2}', 'D_4'],
                                sizes: [1, 2, 8],
                                nilClass: 2,
                                nilpotent: true
                            },
                            {
                                name: 'Q_8 (order 8)',
                                series: ['{e}', 'Z(Q_8) = {1, -1}', 'Q_8'],
                                sizes: [1, 2, 8],
                                nilClass: 2,
                                nilpotent: true
                            },
                            {
                                name: 'Z/8Z (order 8)',
                                series: ['{0}', 'Z/8Z'],
                                sizes: [1, 8],
                                nilClass: 1,
                                nilpotent: true
                            },
                            {
                                name: 'S_3 (order 6)',
                                series: ['{e}', '{e} (center trivial)'],
                                sizes: [1, 1],
                                nilClass: null,
                                nilpotent: false
                            },
                            {
                                name: 'A_4 (order 12)',
                                series: ['{e}', '{e} (center trivial)'],
                                sizes: [1, 1],
                                nilClass: null,
                                nilpotent: false
                            },
                            {
                                name: 'UT_3(F_2) (order 8)',
                                series: ['{I}', 'Z = {I, I+E_{13}}', 'UT_3(F_2)'],
                                sizes: [1, 2, 8],
                                nilClass: 2,
                                nilpotent: true
                            }
                        ];

                        let selected = 0;

                        function draw() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            const g = groups[selected];

                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = 'bold 15px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Upper Central Series: ' + g.name, 290, 25);

                            // Draw the series as ascending boxes
                            const boxX = 60;
                            const totalH = 180;
                            const boxW = 460;
                            const startY = 55;

                            const maxSize = g.sizes[g.sizes.length - 1];
                            const nLevels = g.series.length;

                            for (let i = nLevels - 1; i >= 0; i--) {
                                const h = Math.max(30, (g.sizes[i] / maxSize) * totalH);
                                const y = startY + totalH - h;
                                const w = Math.max(80, (g.sizes[i] / maxSize) * boxW);
                                const x = 290 - w / 2;

                                const alpha = 0.2 + 0.6 * (i / Math.max(1, nLevels - 1));
                                ctx.fillStyle = g.nilpotent ? 'rgba(35, 134, 54, ' + alpha + ')' : 'rgba(240, 136, 62, ' + alpha + ')';
                                ctx.beginPath();
                                ctx.roundRect(x, y, w, h, 6);
                                ctx.fill();
                                ctx.strokeStyle = g.nilpotent ? '#2ea043' : '#f0883e';
                                ctx.lineWidth = 1.5;
                                ctx.stroke();

                                ctx.fillStyle = '#e6edf3';
                                ctx.font = '12px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText('Z_' + i + '(G) = ' + g.series[i], 290, y + h / 2 - 4);
                                ctx.fillStyle = '#8b949e';
                                ctx.font = '11px sans-serif';
                                ctx.fillText('|Z_' + i + '| = ' + g.sizes[i], 290, y + h / 2 + 12);
                            }

                            // Status
                            const statusY = startY + totalH + 25;
                            ctx.font = 'bold 13px sans-serif';
                            ctx.textAlign = 'center';
                            if (g.nilpotent) {
                                ctx.fillStyle = '#2ea043';
                                ctx.fillText('Nilpotent, class ' + g.nilClass, 290, statusY);
                            } else {
                                ctx.fillStyle = '#f0883e';
                                ctx.fillText('Not nilpotent (central series stalls)', 290, statusY);
                            }

                            // Buttons
                            const btnY = 320;
                            ctx.fillStyle = '#c9d1d9';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Select a group:', 290, btnY - 5);

                            groups.forEach((gr, i) => {
                                const col = i % 3;
                                const row = Math.floor(i / 3);
                                const bx = 50 + col * 175;
                                const by = btnY + 5 + row * 35;
                                ctx.fillStyle = i === selected ? '#238636' : '#21262d';
                                ctx.beginPath();
                                ctx.roundRect(bx, by, 160, 26, 4);
                                ctx.fill();
                                ctx.strokeStyle = '#30363d';
                                ctx.stroke();
                                ctx.fillStyle = '#e6edf3';
                                ctx.font = '11px sans-serif';
                                ctx.textAlign = 'center';
                                ctx.fillText(gr.name, bx + 80, by + 17);
                            });

                            ctx.fillStyle = '#8b949e';
                            ctx.font = '12px sans-serif';
                            ctx.textAlign = 'center';
                            ctx.fillText('Click to compare upper central series', 290, btnY + 90);
                        }

                        canvas.addEventListener('click', (e) => {
                            const rect = canvas.getBoundingClientRect();
                            const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
                            const my = (e.clientY - rect.top) * (canvas.height / rect.height);
                            const btnY = 320;

                            groups.forEach((gr, i) => {
                                const col = i % 3;
                                const row = Math.floor(i / 3);
                                const bx = 50 + col * 175;
                                const by = btnY + 5 + row * 35;
                                if (mx >= bx && mx <= bx + 160 && my >= by && my <= by + 26) {
                                    selected = i;
                                    draw();
                                }
                            });
                        });

                        draw();
                    }
                }
            ],
            exercises: [
                {
                    id: 'ch08-ex14',
                    type: 'short_answer',
                    difficulty: 2,
                    title: 'Nilpotency Class',
                    question: 'What is the nilpotency class of Q_8? Compute Z_0(Q_8), Z_1(Q_8), and Z_2(Q_8).',
                    hint: 'Z(Q_8) = {1, -1}. What is Q_8 / Z(Q_8)?',
                    solution: 'Z_0(Q_8) = {1}. Z_1(Q_8) = Z(Q_8) = {1, -1}. Q_8/Z(Q_8) = {1, i, j, k} with the relations becoming trivial, so Q_8/Z(Q_8) is isomorphic to V_4, which is abelian. Thus Z(Q_8/Z(Q_8)) = Q_8/Z(Q_8), so Z_2(Q_8) = Q_8. The nilpotency class is 2.'
                },
                {
                    id: 'ch08-ex15',
                    type: 'proof',
                    difficulty: 3,
                    title: 'S_3 is Not Nilpotent',
                    question: 'Prove that S_3 is not nilpotent by computing its upper central series.',
                    hint: 'First show Z(S_3) = {e}. Then conclude the series never advances.',
                    solution: 'S_3 has 6 elements. The center consists of elements commuting with all others. Since (12)(123) = (13) but (123)(12) = (23), the transposition (12) does not commute with (123). Similarly, no non-identity element commutes with all others. So Z(S_3) = {e}, meaning Z_0 = Z_1 = {e}. Then G/Z_1 = S_3, whose center is again {e}, so Z_2 = Z_1 = {e}. The series stalls at {e} and never reaches S_3, so S_3 is not nilpotent.'
                },
                {
                    id: 'ch08-ex16',
                    type: 'proof',
                    difficulty: 4,
                    title: 'Normal Sylow Implies Nilpotent',
                    question: 'Let G be a finite group in which every Sylow subgroup is normal. Prove that G is the direct product of its Sylow subgroups.',
                    hint: 'If P and Q are Sylow subgroups for distinct primes, show P intersect Q = {e} and that PQ is a subgroup. Use induction on the number of prime factors.',
                    solution: 'Let |G| = p_1^{a_1} ... p_k^{a_k} and let P_i be the (unique, normal) Sylow p_i-subgroup. For distinct primes p_i, p_j, P_i intersect P_j is a subgroup whose order divides both p_i^{a_i} and p_j^{a_j}, so P_i intersect P_j = {e}. Since each P_i is normal, P_i P_j is a subgroup with |P_i P_j| = |P_i||P_j|. By induction, H = P_1 P_2 ... P_k is a subgroup of order |P_1|...|P_k| = |G|, so H = G. The normality and trivial pairwise intersections give G = P_1 x P_2 x ... x P_k.'
                }
            ]
        }
    ]
});
