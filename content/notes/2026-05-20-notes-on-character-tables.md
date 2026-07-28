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

The takeaway: suppose someone produces a new row for $\chi_i$ of the character table and $\langle \chi_i, \chi_j \rangle = \delta_{ij}$, passing the orthogonality checks. This *doesn't mean* the $\chi_i$ row is valid; rather, $\chi_i(g)$ must satisfy the group relations for each $g \in G$.
