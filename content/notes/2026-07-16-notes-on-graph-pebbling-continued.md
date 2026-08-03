---
title: "Notes on Graph Pebbling (continued)"
date: "2026-07-16"
---

**$t$-reachability, $t$-pebbling number.**

Let $G$ be a connected graph, and $r \in V(G)$ be the root with $C$ as a pebble configuration. A vertex $r$ is $t$-reachable under $C$ if there is a sequence of ordinary pebbling moves after which $C(r) \geq t$. Equivalently, $C$ is $t$-fold $r$-solvable. (Notice that 1-reachable is simply $r$-solvable.)

**Example 2.1.** Consider $G = P_3$, with root $r = v_2$ and all pebbles starting at $v_0$. We recall that moving 1 pebble from $v_0$ to $v_2$ requires 4 initial pebbles. To end with $C(v_2) = 2$, we follow the path:

$$
(8, 0, 0) \mapsto (0, 4, 0) \mapsto (0, 0, 2)
$$

Generally, we conjecture that from a single pile $v$ at distance $d$ from the root, moving $t$ pebbles to the root requires $C(v) \geq (t)(2^n)$.

Notice that $(n+1)$-reachability implies $n$-reachability.

**Definition 2.1.** We define $\pi_t(G)$ as the smallest integer $k$ such that every configuration of $k$ pebbles is $t$-fold $r$-solvable for all $r \in V(G)$. Note that $\pi_1(G) = \pi(G)$.

**Example 2.2** (Trivial $P_2$ example). We compute $\pi_2(P_2)$. Clearly, $\pi_2(P_2) > 2$ (consider $C = (1, 1)$). Fix $r = v_1$; then, $(3, 0)$ is not 2-fold $r$-solvable, so $\pi_2(P_2) > 3$. Since $(4, 0), (3, 1), (\ast, \geq 2)$ are the remaining configurations and 2-fold $v_2$-solvable, $P_2$ is 2-fold $v_1$-solvable. Reversing the direction generalizes to all of $P_2$. Hence, $\pi_2(P_2) = 4$.
