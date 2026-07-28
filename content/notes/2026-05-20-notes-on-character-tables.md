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
