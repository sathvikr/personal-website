---
title: "Notes on Graph Pebbling"
date: "2026-07-14"
---

**Ordinary graph pebbling.**

Graph pebbling (now a famous mathematical game) was originally introduced to solve the Erdős–Lemke conjecture: given an integer sequence $a_1, a_2, \ldots, a_n$, there exists a subsequence whose sum is divisible by $n$, provided

$$
\sum_{i=1}^{n} \gcd(a_i, n) \geq n
$$

Now, let $G = (V, E)$ be a connected graph.

**Definition 1.1** (Configuration). A *configuration* is an assignment $C : V \to \mathbb{Z}_{\geq 0}$, where $C(v)$ is the number of pebbles placed at vertex $v$.

**Definition 1.2** (Pebbling move). A pebbling move from vertex $u$ to an (adjacent) vertex $v$ does two things:

1. $C(u) \mapsto C(u) - 2$
2. $C(v) \mapsto C(v) + 1$

Thus, moving a pebble across an edge has a cost; the total pebbles in $G$ are decreased by 1.

**Example 1.1.** Consider the path graph $P_3$:

<figure class="note-figure">
<svg viewBox="0 0 240 60" width="240" height="60" role="img" aria-label="Path graph P3: three vertices v0, v1 and v2 connected in a line." fill="none" stroke="currentColor" stroke-width="1.2">
<line x1="44" y1="30" x2="106" y2="30"></line>
<line x1="134" y1="30" x2="196" y2="30"></line>
<circle cx="30" cy="30" r="14"></circle>
<circle cx="120" cy="30" r="14"></circle>
<circle cx="210" cy="30" r="14"></circle>
<g fill="currentColor" stroke="none" font-size="11" font-style="italic" text-anchor="middle" font-family="Georgia, serif">
<text x="30" y="34">v<tspan font-size="8" dy="3">0</tspan></text>
<text x="120" y="34">v<tspan font-size="8" dy="3">1</tspan></text>
<text x="210" y="34">v<tspan font-size="8" dy="3">2</tspan></text>
</g>
</svg>
</figure>

Suppose all pebbles are at $v_0$. To place 1 pebble at $v_1$, we need at least 2 pebbles in $v_0$. To place 1 pebble at $v_2$, we need at least 2 pebbles in $v_1$, and therefore 4 pebbles in $v_0$.

**Example 1.2.** Consider $P_4$. Defining "arrival" at vertex $v$ as having 1 pebble in $v$, we find:

| Vertex | Pebbles needed to guarantee arrival |
| --- | --- |
| $v_0$ | 1 |
| $v_1$ | 2 |
| $v_2$ | 4 |
| $v_3$ | 8 |

It seems $2^k$ pebbles are needed to reach $v_k$ (if all pebbles start at $v_0$) for a path graph $P_{k+1}$.

**Example 1.3** (Reachability depends on the configuration). Consider $P_3$, with $C(v_0) = 3, C(v_1) = 0, C(v_2) = 0$. $v_2$ is not reachable; $(C(v_0), C(v_1), C(v_2)) = (3, 0, 0) \mapsto (1, 1, 0)$ which is a terminal state.

However, $v_2$ *is* reachable under $(2, 1, 0) \mapsto (0, 2, 0) \mapsto (0, 0, 1)$. Both configurations have 3 total pebbles. This emphasizes that reachability depends not only on total pebbles in $G$, but the specific configuration.

**Definition 1.3** ($r$-solvable). Choose a target vertex $r$, called the root. A configuration $C$ is $r$-solvable when a sequence of pebbling moves puts at least 1 pebble in vertex $r$. E.g., in the previous example, the first configuration was not $v_2$-solvable but it was $v_1$-solvable. Thus solvability depends on the configuration and the chosen root.

**Definition 1.4** (Pebbling number). The pebbling number $\pi(G)$ is the smallest integer $k$ such that *every* configuration of $k$ pebbles $C_k$ is $r$-solvable for all $r \in V(G)$.

Note that to prove $\pi(G) \leq k$, we must prove that every $C_k$ is $r$-solvable $\forall r \in V(G)$, whereas to prove $\pi(G) > k$, we must show there exists a configuration $C_k$ that is not $r$-solvable for some $r \in V(G)$.

**Example 1.4** (Computing $\pi(P_3)$). In this example, we explicitly compute $\pi(P_3)$.

*Proof.* We can immediately establish a lower bound from the previous example; since there exists $C_3 = (3, 0, 0)$ that is not $v_2$-solvable, $\pi(P_3) > 3$.

Because $C_4 = (4, 0, 0)$ can reach $v_2$ (the furthest vertex), it is a reasonable conjecture that $\pi(P_3) = 4$. However, we must confirm that *every* 4-pebble configuration can reach every root. Starting with $r = v_2$: we know the $(\ast, \ast, \geq 1), (\ast, \geq 2, \ast), (4, 0, 0)$ configurations are $v_2$-solvable. This leaves $(3, 1, 0)$, which is solvable through the sequence $(3, 1, 0) \mapsto (1, 2, 0) \mapsto (1, 0, 1)$. Hence, $P_3$ is $v_2$-solvable. (The same logic applies for $v_0$, which can be viewed as an endpoint by reversing $P_3$.)

Finally, we must check if $P_3$ is $v_1$-solvable. Immediately, we know that $(\geq 2, \ast, \ast), (\ast, \ast, \geq 2), (\ast, \geq 1, \ast)$ are $v_1$-solvable. These cover all possible cases; thus, $P_3$ is $v_1$-solvable.

Hence, $\pi(P_3) = 4$. $\square$
