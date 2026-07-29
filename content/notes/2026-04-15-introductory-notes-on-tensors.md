---
title: "Introductory Notes on Tensors"
date: "2026-04-15"
---

**What is $v \otimes w$?** Let $V$ and $W$ be vector spaces. Think of $v \otimes w$ as a new kind of vector built from a $v \in V$ and a $w \in W$. Note that it is *not* an ordered pair: $(v, w) \neq v \otimes w$. Rather, $\otimes : V \times W \to V \otimes W$ is a map that is *bilinear* (linear for both inputs):

$$
\begin{aligned}
(v_1 + v_2) \otimes w &= v_1 \otimes w + v_2 \otimes w \\
v \otimes (w_1 + w_2) &= v \otimes w_1 + v \otimes w_2 \\
(av) \otimes w &= a(v \otimes w) = v \otimes aw
\end{aligned}
$$

**Example** (A basis for $\mathbb{C}^2 \otimes \mathbb{C}^2$). Let $V = W = \mathbb{C}^2$ with bases $e_1, e_2$ and $f_1, f_2$ respectively. Then, $V \otimes W$ has basis $\{e_1 \otimes f_1, e_1 \otimes f_2, e_2 \otimes f_1, e_2 \otimes f_2\}$ (because these are the possible combinations of $V \times W$ for a bilinear map; note that $\dim V \otimes W = (\dim V)(\dim W)$). Then, the basis vectors can be imagined as

$$
\begin{aligned}
e_1 \otimes f_1 &= (1, 0, 0, 0) \\
e_1 \otimes f_2 &= (0, 1, 0, 0) \\
e_2 \otimes f_1 &= (0, 0, 1, 0) \\
e_2 \otimes f_2 &= (0, 0, 0, 1)
\end{aligned}
$$

As an example, take $v = 2e_1 + 3e_2$ and $w = 4f_1 - f_2$. Then,

$$
v \otimes w = 8(e_1 \otimes f_1) - 2(e_1 \otimes f_2) + 12(e_2 \otimes f_1) - 3(e_2 \otimes f_2)
$$

so, in coordinate form, $v \otimes w = (8, -2, 12, -3)$.

**The tensor product of matrices.** Take

$$
A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}, \quad B = \begin{pmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end{pmatrix}
$$

Define $A \otimes B$ as

$$
A \otimes B = \begin{pmatrix} a_{11}B & a_{12}B \\ a_{21}B & a_{22}B \end{pmatrix}
$$

Then,

$$
\begin{aligned}
\operatorname{tr}(A \otimes B) &= \operatorname{tr}(a_{11}B) + \operatorname{tr}(a_{22}B) \\
&= (a_{11} + a_{22})\operatorname{tr}B \\
&= (\operatorname{tr}A)(\operatorname{tr}B)
\end{aligned}
$$

so the trace of a tensor product is the product of the traces. The same diagonal-entry computation generalizes this to dimensions $n > 2$.
