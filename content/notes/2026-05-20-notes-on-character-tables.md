---
title: "Notes on Character Tables"
date: "2026-05-20"
---

**Characters are constrained by group relations.**

A character table is not filled with random character values such that the row and column orthogonality relations are satisfied. Rather, each row must come from an actual representation $\rho : G \to GL(V)$ so the matrices $\rho(g) : V \to V$ must still satisfy the same group relations.

This is easiest to see for a degree-1 representation $\rho : G \to \mathbb{C}^\times$, since $\chi_V(g) = \rho(g)$ ($\forall g \in G$). Filling in the degree-one rows in the character table is therefore the same as computing the degree-one representations for various $g \in G$.

**Example 1.1** (Degree-one characters of $S_3$). Use the presentation

$$
S_3 = \langle r, s \mid r^3 = s^2 = 1,\ srs = r^{-1} \rangle.
$$

Let $\chi_1$ be a degree-one character. Then,

$$
\chi_1(r^3) = \chi_1(s^2) = 1 \implies \rho_1(r)^3 = \rho_1(s)^2 = 1 \implies \chi_1(r)^3 = \chi_1(s)^2 = 1.
$$

Note that possible values of $\rho_1(r)$ are $1, \omega, \omega^2$, and possible values of $\rho_1(s)$ are $\pm 1$. However, the $\zeta_3$-values for $\rho_1(r)$ do not obey $srs = r^{-1}$ and thus cannot be plausible assignments within a representation $\rho$.

Then, since $\rho$ is degree-one, $\rho(g) \in \mathbb{C}^\times$ and commutes:

$$
\chi(srs) = \chi(r^{-1}) \implies \rho_1(s)\rho_1(r)\rho_1(s) = \rho_1(r)^{-1} \implies \rho_1(r)^2 = 1,
$$

so $\rho_1(r) = \rho_1(r)^2 = \rho_1(r)^3 = 1$. Similarly, $\rho_1(s) = \pm 1$. Hence, splitting across characters, we get two possible degree one character options:

$$
\chi_1 = \begin{cases} r \mapsto 1 \\ s \mapsto 1 \end{cases}
\qquad
\chi_2 = \begin{cases} r \mapsto 1 \\ s \mapsto -1 \end{cases}
$$

so the degree-one section of $S_3$'s character table looks like this:

$$
\begin{array}{c|c|c|c}
\text{class} & e & s & r \\
\text{size} & 1 & 3 & 2 \\
\hline
\chi_1 & 1 & 1 & 1 \\
\chi_2 & 1 & -1 & 1
\end{array}
$$

The takeaway: suppose someone produces a new row for $\chi_i$ of the character table and $\langle \chi_i, \chi_j \rangle = \delta_{ij}$, passing the orthogonality checks. This *doesn't mean* the $\chi_i$ row is valid; rather, $\chi_i(g)$ must satisfy the group relations for each $g \in G$ (for degree-1, since $\operatorname{tr}(g) = \rho(g)$).

Note that for higher degrees, $\operatorname{tr}(g) \neq \rho(g)$, so $\chi_i(g)$ need not follow the group relations.

**How orthogonality helps complete a table.**

The previous section explained where character table rows come from: traces of genuine representations satisfying the group relations.

Orthogonality enters *after* we have some genuine characters in hand. Its role is to compare characters and determine what irreducible pieces they contain (the character rows must be of *irreducible* characters $\chi_1, \chi_2, \ldots, \chi_r$). (How does it check irreducible?)

We can compare characters in the character table through the inner product. Because characters are consistent over conjugacy classes,

$$
\langle \chi, \psi \rangle = \frac{1}{|G|} \sum_{g \in G} \chi(g)\overline{\psi(g)} = \frac{1}{|G|} \sum_{K \text{ is a conj. class}} |K| \chi(g_K)\overline{\psi(g_K)} \qquad g_K \in K
$$

**Example 2.1** (Why do the conjugacy class sizes appear?). Suppose $G = S_3$; its conjugacy classes are

$$
\{1\},\ \{(12), (13), (23)\},\ \{(123), (132)\}.
$$

Then, let $\chi, \psi$ be class functions. From the definition,

$$
\begin{aligned}
\langle \chi, \psi \rangle &= \frac{1}{6} \sum_{g \in G} \chi(g)\overline{\psi(g)} \\
&= \frac{1}{6}\Big( \chi((1))\overline{\psi((1))} \\
&\qquad + \chi((12))\overline{\psi((12))} + \chi((13))\overline{\psi((13))} + \chi((23))\overline{\psi((23))} \\
&\qquad + \chi((123))\overline{\psi((123))} + \chi((132))\overline{\psi((132))} \Big) \\
&= \frac{1}{6}\Big( \chi((1))\overline{\psi((1))} + 3\chi((12))\overline{\psi((12))} + 2\chi((123))\overline{\psi((123))} \Big).
\end{aligned}
$$

which we do by picking representatives for the one-cycles, two-cycles, and three-cycles, as $\chi(g)\overline{\psi(g)}$ is constant over them. The conjugacy class sizes appear to count up the duplicates.

How does orthogonality check irreducibility?

**Example 2.2.** Recall that the two degree-one characters of $S_3$ are $\chi_1 = (1, 1, 1)$ and $\chi_2 = (1, -1, 1)$. If $\chi_1, \chi_2$ are orthogonal, i.e., if the inner product $\langle \chi_1, \chi_2 \rangle = 0$, then the two characters are irreducible. We check this:

$$
\langle \chi_1, \chi_2 \rangle = \frac{1}{6}\Big( 1(1)(1) + 3(1)(-1) + 2(1)(1) \Big) = 0
$$

We emphasize that inner product relation $\langle \chi_i, \chi_j \rangle = \delta_{ij}$ holds for *characters* only, not arbitrary class functions. The practical consequence is that we must first check if $\chi_1, \chi_2$ are characters by mapping them onto relevant representations.

**What orthogonality is really saying.**

For characters $\chi_1, \chi_2$ the fact that $\langle \chi_1, \chi_1 \rangle = 1$ is not merely a coincidence; this reflects that $\chi_1$ has only one irreducible component in common with $\chi_1$ (since $\chi_1$ is irreducible, that component is itself). Similarly, $\langle \chi_1, \chi_2 \rangle = 0$ reflects that $\chi_1, \chi_2$ have no irreducible components in common (and are thus orthogonal).

**Example 2.3.** Suppose $\chi = 2\chi_1 + \chi_2$ and $\psi = \chi_1 + 3\chi_2$ are both characters. Then, by linearity,

$$
\begin{aligned}
\langle \chi, \psi \rangle = \langle 2\chi_1 + \chi_2, \chi_1 + 3\chi_2 \rangle &= 2\langle \chi_1, \chi_1 + 3\chi_2 \rangle + \langle \chi_2, \chi_1 + 3\chi_2 \rangle \\
&= 2(1\langle \chi_1, \chi_1 \rangle + 3\langle \chi_1, \chi_2 \rangle) + \langle \chi_2, \chi_1 \rangle + 3\langle \chi_2, \chi_2 \rangle \\
&= 2(1) + 6(0) + (0) + 3(1) \\
&= 5
\end{aligned}
$$

Note this is a shortcut to $\langle \chi, \psi \rangle = \frac{1}{|G|} \sum_{g \in G} \chi(g)\overline{\psi(g)}$ by taking advantage of $\langle \chi_i, \chi_j \rangle = \delta_{ij}$. Functionally, this is the dot product of each character's multiplicity vectors.

- $\chi$ contains 2 copies of $\chi_1$ and one copy of $\chi_2$.
- $\psi$ contains 1 copy of $\chi_1$ and 3 copies of $\chi_2$.
- $\langle \chi, \psi \rangle$ says there are $(2)(1) = 2$ shared $\chi_1$ copies and $(1)(3) = 3$ shared $\chi_2$ copies for a total of $2 + 3 = 5$ shared irreducible character copies.

Thus, the inner product $\langle \chi, \psi \rangle$ counts the number of copies of irreducibles $\chi_1, \chi_2$ by $m_i n_i$, where each $m_i, n_i$ is a multiplicity of $\chi_1, \chi_2$ respectively.

**What a character table tells us about a representation.**

A character table does more than simply list irreducible characters. Once the irreducible rows are known, it lets us decompose the character of any representation into irreducible pieces.

Suppose

$$
\chi = m_1\chi_1 + m_2\chi_2 + \cdots + m_r\chi_r
$$

where $\chi_1, \ldots, \chi_r$ are irreducible characters and $m_i$ is the multiplicity of $\chi_i$. By orthogonality,

$$
\begin{aligned}
\langle \chi, \chi_j \rangle = \left\langle \sum_{i=1}^{r} m_i\chi_i,\ \chi_j \right\rangle &= \sum_{i=1}^{r} m_i \langle \chi_i, \chi_j \rangle \\
&= m_j \langle \chi_j, \chi_j \rangle \\
&= m_j
\end{aligned}
$$

so the inner product of a character $\chi$ with one of its irreducible constituents $\chi_j$ is its multiplicity $m_j$.

**Example 3.1.** Consider the irreducible characters of $S_3$:

$$
\begin{aligned}
\chi_1 &= (1, 1, 1) \\
\chi_2 &= (1, -1, 1) \\
\chi_3 &= (2, 0, -1)
\end{aligned}
$$

and consider the degree-4 character $\chi = (4, 0, 1)$. Then,

$$
\begin{aligned}
\langle \chi, \chi_1 \rangle &= \frac{1}{6}\big(1(4)(1) + 3(0)(1) + 2(1)(1)\big) = 1 \\
\langle \chi, \chi_2 \rangle &= \frac{1}{6}\big(1(4)(1) + 3(0)(-1) + 2(1)(1)\big) = 1 \\
\langle \chi, \chi_3 \rangle &= \frac{1}{6}\big(1(4)(2) + 3(0)(0) + 2(1)(-1)\big) = 1
\end{aligned}
$$

which correspond to the multiplicity $m_i$ of each irreducible $\chi_i$ in $\chi$. Hence, $\chi = \chi_1 + \chi_2 + \chi_3$. Checking the degrees (by plugging in the identity), we find that:

$$
\chi_1(1) + \chi_2(1) + \chi_3(1) = 1 + 1 + 2 = 4 = \chi(1)
$$

which adds up.

Note then that we immediately know $\chi$ is reducible because $\chi \neq \chi_1$ and $\langle \chi, \chi_1 \rangle = 1 \neq 0$.

The next proposition goes further into character irreducibility without finding invariant subspaces.

**Proposition 3.1.** Suppose $\chi : G \to \mathbb{C}$ is the character of some representation. If $\langle \chi, \chi \rangle = 1$, then $\chi$ is irreducible. If $\langle \chi, \chi \rangle > 1$, then $\chi$ is reducible.

*Proof.* We know $\chi = \sum_{i=1}^{r} m_i\chi_i$. Since $\langle \chi_i, \chi_j \rangle = \delta_{ij}$, $\langle \chi, \chi \rangle = \sum_{i=1}^{r} m_i^2$. The only way for this to equal 1 is if exactly one $m_i = 1$, and the remaining $m_j = 0$. Thus, $\chi = (1)\chi_i$ for some $1 \leq i \leq r$, implying $\chi$ is irreducible.

Similarly, if $\langle \chi, \chi \rangle > 1$, either $m_i = 1, m_j > 0$, or $m_i > 1$, so $\chi$ has more than a single irreducible $\chi_i$ component and is thus reducible. $\square$

**Example 3.2** (The character of a direct sum). Suppose $(V, \rho_V)$ and $(W, \rho_W)$ are representations with characters $\chi_V$ and $\chi_W$ respectively. The action on the direct sum $V \oplus W$ has the representation $\rho_{V \oplus W} : G \to GL(V \oplus W)$:

$$
\rho_{V \oplus W}(g) = \begin{pmatrix} \rho_V(g) & 0 \\ 0 & \rho_W(g) \end{pmatrix}
$$

with character $\chi_{V \oplus W}(g) = \operatorname{tr}(\rho_{V \oplus W}(g)) = \operatorname{tr}(\rho_V(g)) + \operatorname{tr}(\rho_W(g)) = \chi_V(g) + \chi_W(g)$.

Then, suppose $V \cong V_1 \oplus V_2 \oplus V_3$. This implies $\chi = \chi_1 + \chi_2 + \chi_3$. Conversely, if $\chi_V = 2\chi_1 + \chi_2$, this implies $V$ has decomposition $V \cong V_1 \oplus V_1 \oplus V_2$.

**Character tables of direct products.**

Suppose $G$ and $H$ are finite groups. A representation of $G \times H$ can be built from a representation of $G$ and a representation of $H$.

Consider $\rho : G \to GL(V)$ and $\sigma : H \to GL(W)$. On the tensor product $V \otimes W$,[\[1\]](#fn-chartables-1) define

$$
(\rho \otimes \sigma)(g, h) = \rho(g) \otimes \sigma(h)
$$

**Aside 4.1.** An element $g \in G$ acts on $V$, and an element $h \in H$ acts on $W$. An element of $G \times H$ is a pair $(g, h)$. We want this pair to act on a vector space with both a $V$-part and a $W$-part. Call this $V \otimes W$. For now, think of its vectors as $v \otimes w$ for some $v, w \in V, W$ respectively. The definition of the $G \times H$ action is then $(g, h) \cdot (v \otimes w) = (g \cdot v) \otimes (h \cdot w)$ (since the action must be preserved). We observe that this is shorthand for $(\rho \otimes \sigma)(g, h)(v \otimes w) = \rho(g)(v) \otimes \sigma(h)(w)$.

**Example 4.1** (Concrete one-dimensional example). Suppose $V$ and $W$ are both one-dimensional. Assume $\rho(g)v = 2v$ and $\sigma(h)w = -w$. Then on $v \otimes w$,

$$
\begin{aligned}
(\rho \otimes \sigma)(g, h)(v \otimes w) &= \rho(g)v \otimes \sigma(h)w \\
&= 2v \otimes -w \\
&= -2(v \otimes w)
\end{aligned}
$$

**Proposition 4.1.** The following character relation holds: $\chi_{\rho \otimes \sigma}(g, h) = \chi_\rho(g)\chi_\sigma(h)$.

**Example 4.2.** The trace of a tensor product of matrices is the product of their traces,[\[2\]](#fn-chartables-2) so reasonably,

$$
\begin{aligned}
\chi_{\rho \otimes \sigma}(g, h) &= \operatorname{tr}((\rho \otimes \sigma)(g, h)) \\
&= \operatorname{tr}(\rho(g))\operatorname{tr}(\sigma(h)) \\
&= \chi_\rho(g)\chi_\sigma(h)
\end{aligned}
$$

**Example 4.3** ($C_2 \times C_2$). Let $C_2 = \langle s \mid s^2 = 1 \rangle$, with irreducible characters $\chi_1 = (1, 1)$ and $\chi_2 = (1, -1)$.

Now, consider $C_2 \times C_2 = \{(1,1), (s,1), (1,s), (s,s)\}$. To build a character of $C_2 \times C_2$, we choose an irreducible character from the first $C_2$ copy and second from the second $C_2$ copy. Then, there are four possible irreducible characters: $\chi_1 \otimes \chi_1, \chi_1 \otimes \chi_2, \chi_2 \otimes \chi_1, \chi_2 \otimes \chi_2$. We find

$$
\begin{aligned}
(\chi_1 \otimes \chi_1)(g_1, g_2) &= \chi_1(g_1)\chi_1(g_2) \\
(\chi_1 \otimes \chi_2)(g_1, g_2) &= \chi_1(g_1)\chi_2(g_2) \\
(\chi_2 \otimes \chi_1)(g_1, g_2) &= \chi_2(g_1)\chi_1(g_2) \\
(\chi_2 \otimes \chi_2)(g_1, g_2) &= \chi_2(g_1)\chi_2(g_2)
\end{aligned}
$$

and filling out the character table,

$$
\begin{array}{c|c|c|c|c}
\text{class} & (1,1) & (1,s) & (s,1) & (s,s) \\
\text{size} & 1 & 1 & 1 & 1 \\
\hline
\chi_1 \otimes \chi_1 & (1)(1) = 1 & (1)(1) = 1 & (1)(1) = 1 & (1)(1) = 1 \\
\chi_1 \otimes \chi_2 & (1)(1) = 1 & (1)(-1) = -1 & (1)(1) = 1 & (1)(-1) = -1 \\
\chi_2 \otimes \chi_1 & (1)(1) = 1 & (1)(1) = 1 & (-1)(1) = -1 & (-1)(1) = -1 \\
\chi_2 \otimes \chi_2 & (1)(1) = 1 & (1)(-1) = -1 & (-1)(1) = -1 & (-1)(-1) = 1
\end{array}
$$

**Example 4.4** ($S_3 \times S_3$). As another example, we consider $S_3 \times S_3$. Taking the irreducible characters from $S_3$, we find:

$$
\begin{aligned}
\chi_1(g) &= 1 \\
\chi_2(g) &= \operatorname{sgn}(g) \\
\chi_3(g) &= (2, 0, -1)
\end{aligned}
$$

We partially complete the $S_3 \times S_3$ character table.

$$
\begin{array}{c|c|c|c|c|c|c|c|c|c}
\text{classes} & (1,1) & (1,2) & (1,3) & (2,1) & (2,2) & (2,3) & (3,1) & (3,2) & (3,3) \\
\text{size} & 1 & 3 & 2 & 3 & 9 & 6 & 2 & 6 & 4 \\
\hline
\chi_1 \otimes \chi_1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 & 1 \\
\chi_1 \otimes \chi_2 & (1)(1) & (1)(-1) & (1)(1) & (1)(1) & (1)(-1) & (1)(1) & (1)(1) & (1)(-1) & (1)(1) \\
\chi_1 \otimes \chi_3 & & & & & & & & & \\
\chi_2 \otimes \chi_1 & & & & & & & & & \\
\chi_2 \otimes \chi_2 & & & & & & & & & \\
\chi_2 \otimes \chi_3 & & & & & & & & & \\
\chi_3 \otimes \chi_1 & & & & & & & & & \\
\chi_3 \otimes \chi_2 & & & & & & & & & \\
\chi_3 \otimes \chi_3 & & & & & & & & &
\end{array}
$$

We leave the rest as an exercise to the reader.

<p class="note-footnote" id="fn-chartables-1">For what the tensor product of two vectors is, its bilinearity, and a basis for the tensor product of two spaces, see <a href="notes.html#2026-04-15-introductory-notes-on-tensors">Introductory Notes on Tensors</a>.</p>

<p class="note-footnote" id="fn-chartables-2">Derived from the block form of a tensor product of matrices in <a href="notes.html#2026-04-15-introductory-notes-on-tensors">Introductory Notes on Tensors</a>.</p>
