---
title: "Schur's Lemma"
date: "2026-05-09"
---

**Irreducibility forces equivariant maps to be isomorphisms or zero.**

An ordinary linear map $T : V \to W$ can behave differently on different parts of $V$; it might kill one line, preserve others, shift some lines, and collapse everything else.

A $G$-equivariant map has much less freedom. It must preserve:

$$
T(g \cdot v) = g \cdot T(v)
$$

or in other words, be $G$-linear. $T$ sends the orbit of $v$ compatibly to the orbit of $T(v)$.

When $V$ and $W$ are irreducible, they have no nonzero proper $G$-invariant subspaces. However, the kernel and image of an equivariant map are automatically $G$-invariant subspaces.

**Example 1.1** (Why $\ker T$ is $G$-invariant). Let $T : V \to W$ be equivariant, and suppose $v \in \ker T$. Then, $T(v) = 0$. To show that $\ker T$ is $G$-invariant (i.e., show $g \cdot v \in \ker T$), we take any $g \in G$; since $T$ is equivariant,

$$
T(g \cdot v) = g \cdot T(v) = g \cdot 0 = 0
$$

implying $g \cdot v \in \ker T$, and $\ker T$ is a $G$-invariant subspace of $V$. (Equivariance implies that if $T$ kills $v$, then $T$ kills the entire orbit of $v$.)

**Example 1.2** (Why $\operatorname{im} T$ is $G$-invariant). Let $w \in \operatorname{im} T$. Then, there exists a $v \in V$ such that $T(v) = w$. Then,

$$
g \cdot T(v) = g \cdot w \implies T(g \cdot v) = g \cdot w
$$

implying $g \cdot w \in \operatorname{im} T$, and $\operatorname{im} T$ is a $G$-invariant subspace of $W$.

Hence, to find $V$ or $W$ submodules we can find an equivariant map $T$; $\ker T$ and $\operatorname{im} T$ are $G$-invariant subspaces.

**What irreducibility does to $\ker T$ and $\operatorname{im} T$.**

Suppose $V$ is irreducible and $T : V \to W$ is an equivariant map. We know $\ker T \leq V$; since $V$ has no proper nontrivial $G$-invariant subspaces, $\ker T = \{0\}$ or $\ker T = V$. Note that if $\ker T = V$, then $T = 0$; this usually won't happen as we constrain $T$ to be a *nontrivial* equivariant map.

Suppose $W$ is irreducible and $T : V \to W$ is an equivariant map. We know $\operatorname{im} T \leq W$; since $W$ has no nontrivial proper $G$-invariant subspaces, $\operatorname{im} T = \{0\}, W$. If $\operatorname{im} T = \{0\}$, then $T = 0$. Hence, if $W$ is irreducible, then either $T = 0$ or $\operatorname{im} T = W$.

Now, suppose again $V, W$ are irreducible, and $0 \neq T : V \to W$ is equivariant. From irreducibility of $V$, we conclude that $\ker T = \{0\}$; it follows that $T(v_1 - v_2) = 0 \implies v_1 - v_2 = 0$ for any $(v_1 - v_2) \in V$. By linearity, this implies $T(v_1) - T(v_2) = 0 \implies v_1 - v_2 = 0$. Hence, $T(v_1) = T(v_2) \implies v_1 = v_2$, implying $T$ is injective.

Similarly, from irreducibility of $W$, we conclude $\operatorname{im} T = W$, implying $T$ is surjective. Hence, $T$ is an isomorphism, and $V \cong W$.

**Example 1.3** (Trivial representation to sign representation). Let $G = C_2 = \{e, s\}$. Let $V = \mathbb{C}$ be the trivial representation $s \cdot v = v$ and $W = \mathbb{C}$ be the sign representation $s \cdot w = -w$.

We know every linear map $T : V \to W$ has the form $T(v) = av$ for some $a \in \mathbb{C}$. For equivariance, we require

$$
\begin{aligned}
s \cdot T(v) = T(s \cdot v) &\implies -T(v) = T(v) \\
&\implies -av = av \\
&\implies a = 0
\end{aligned}
$$

Hence, $T = 0$ is the only equivariant map from $V$ to $W$ (homomorphism, i.e. map respecting the $G$ action on $V$ and $W$); this means $\operatorname{Hom}_{\mathbb{C}C_2}(V, W) = \{0\}$.

We could have gotten this without computation through Schur's Lemma. Since $V$ and $W$ are irreducible (as $\dim V = \dim W = 1$), any equivariant map between them must be an isomorphism or 0; the trivial and sign representations are not isomorphic, so $T = 0$, and $\operatorname{Hom}_{\mathbb{C}C_2}(V, W) = \{0\}$.

(If the representations were unfamiliar, then we would have to do the $T(g \cdot v) = g \cdot T(v)$ check.)

**Example 1.4** (Trivial representation to itself). Now, let $V$ and $W$ be the trivial representation. Then, $T(v) = av$ for $a \in \mathbb{C}$, and

$$
T(s \cdot v) = s \cdot T(v) \implies av = av
$$

so all nonzero maps of $T$ are isomorphisms; in fact, they are scalar maps, and $\operatorname{Hom}_{\mathbb{C}C_2}(V, W) = \{T_a(v) = av : a \in \mathbb{C}\}$.

Alternatively, by Schur's Lemma, since $V$ and $W$ are irreducible, all equivariant maps between them must be isomorphisms or 0; the trivial representation is isomorphic with itself, so $\operatorname{Hom}_{\mathbb{C}C_2}(V, W) = \{T_a(v) = av : a \in \mathbb{C}\}$.

**Equivariant endomorphisms of irreducible representations are scalars.**

Let $V$ be a finite-dimensional irreducible complex representation, and let $T \in \operatorname{End}_G(V)$ (so $T$ is equivariant). Because $V$ is finite-dimensional over $\mathbb{C}$, $T$ has an eigenvalue $\lambda \in \mathbb{C}$ ($n \times n$ $\mathbb{C}$-valued matrices have $n$ eigenvalues). Define $S = T - \lambda I$.

First, we show $S$ is equivariant. In other words, we show $S(g \cdot v) = g \cdot S(v)$, or $(T - \lambda I)(g \cdot v) = g \cdot (T - \lambda I)(v)$. By linearity, $(T - \lambda I)(g \cdot v) = T(g \cdot v) - \lambda I(g \cdot v)$; since $T$ is equivariant, this equals $g \cdot T(v) - g \cdot \lambda I v = g \cdot (T(v) - \lambda I v) = g \cdot S(v)$. Hence, $S : V \to V$ is equivariant.

Since $\lambda$ is an eigenvalue of $T$, there exists some $0 \neq v \in V$ such that $T(v) = \lambda v$, implying $T(v) - \lambda v = (T - \lambda I)(v) = 0$, meaning $v \in \ker(T - \lambda I)$, and $\ker(T - \lambda I) \neq 0$. In addition to this, since $T - \lambda I$ is equivariant and $V$ is irreducible, $\ker(T - \lambda I) = V$, meaning $T - \lambda I = 0$, so $T = \lambda I$.

Hence,

$$
\operatorname{End}_{\mathbb{C}G}(V) = \{\lambda I : \lambda \in \mathbb{C}\}
$$

or in other words, every equivariant endomorphism $T : V \to V$ is a scalar.

Two examples of non-scalar equivariant endomorphisms (and thus reducible $V$):

**Example 1.5** (Why two eigenvalues reveal reducibility). Let

$$
T = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}
$$

be an equivariant endomorphism $T : V \to V$ of some representation $V = \mathbb{C}^2$. We compute the eigenspaces:

$$
\begin{aligned}
E_2 &= \ker(T - 2I) = \operatorname{span}\{(1, 0)^T\} \\
E_5 &= \ker(T - 5I) = \operatorname{span}\{(0, 1)^T\}
\end{aligned}
$$

since an eigenspace of $T$ is the kernel of $T - \lambda I : V \to V$ which is equivariant, each $T$-eigenspace is $G$ invariant. They are neither zero nor $V$ so $V$ is reducible.

In general, a nonzero proper eigenspace of $T : V \to V$ implies $V$ is reducible as it implies $\ker(T - \lambda I) \neq 0$. Two distinct eigenvalues are a special case forcing nonzero proper eigenspaces (since if $\ker(T - \lambda I) = V$, then $T = \lambda I$ and there wouldn't be other eigenvalues).

**Example 1.6** (A non-scalar upper triangular map). Suppose

$$
T = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}
$$

is an equivariant endomorphism of a representation $V = \mathbb{C}^2$. The only eigenvalue is $\lambda = 3$, and

$$
E_3 = \ker(T - 3I) = \operatorname{span}\{(1, 0)^T\}
$$

which is $G$-invariant. Then, $\ker(T - 3I) \neq \{0\}$ is a nontrivial proper $G$-invariant subspace of $V$, so $V$ is reducible.

**Example 1.7** (A reducible representation). Now, let $G = C_3 = \langle r \rangle$ act on $\mathbb{C}^2$ by

$$
\rho(r) = \begin{pmatrix} \omega & 0 \\ 0 & \omega^2 \end{pmatrix}
$$

Let

$$
T = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
$$

We compute all nonzero equivariant maps $T : \mathbb{C}^2 \to \mathbb{C}^2$ such that $T(g \cdot v) = g \cdot T(v)$, or in this case, if $T(\rho(g)v) = \rho(g)T(v)$ for all $g \in G$. Since $r$ generates $C_3$, we can simply check $\rho(r)$:

$$
\begin{aligned}
T(\rho(r)v) &= \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} \omega & 0 \\ 0 & \omega^2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} a\omega & b\omega^2 \\ c\omega & d\omega^2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} \\
\rho(r)T(v) &= \begin{pmatrix} \omega & 0 \\ 0 & \omega^2 \end{pmatrix} \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} a\omega & b\omega \\ c\omega^2 & d\omega^2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix}
\end{aligned}
$$

so we need

$$
\begin{pmatrix} a\omega & b\omega^2 \\ c\omega & d\omega^2 \end{pmatrix} = \begin{pmatrix} a\omega & b\omega \\ c\omega^2 & d\omega^2 \end{pmatrix} \implies T = \begin{pmatrix} a & 0 \\ 0 & d \end{pmatrix}
$$

Schur's Lemma does not force $a = d$, since $V = (\mathbb{C}^2, \rho)$ is *reducible* (in fact, it is decomposable, as $\rho(g)$ is diagonal for all $g \in C_3$). We know $\mathbb{C}^2 = U_1 \oplus U_2$, where

$$
U_1 = \operatorname{span}\{(1, 0)^T\} \quad U_2 = \operatorname{span}\{(0, 1)^T\}
$$

and we note that these are both $G$-invariant subspaces by computing $\rho(r)(U_i) \subseteq U_i$.

**Example 1.8** (An equivariant projection). Continuing with the previous representation $\rho$, define $P(x, y) = (x, 0)$. Then,

$$
P\rho(r) = \begin{pmatrix} \omega & 0 \\ 0 & 0 \end{pmatrix} = \rho(r)P
$$

Then, $\ker P = \operatorname{span}\{(0, 1)^T\} < \mathbb{C}^2$, and $\operatorname{im} P = \operatorname{span}\{(1, 0)^T\} < \mathbb{C}^2$. Hence, $V$ is reducible.
