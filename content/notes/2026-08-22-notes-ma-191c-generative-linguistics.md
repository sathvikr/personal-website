---
title: "Notes, Ma 191c: Mathematical Models of Generative Linguistics"
date: "2026-08-22"
---

**What is linguistics?**

**1.** Syntax is the subset of a language's grammar that has to do with how words legally combine into sentences. (Other subsets include morphology, which deals with how morphemes combine into words, and phonics, which deals with individual unit sounds.)

**2.** Language is not just a "sequence of words" because some sequences are structurally illegal. Rather, language is a "sequence of words that follows a template, paired with a hierarchy." The hierarchy is important, as the same word-sequence with different hierarchy can constitute different sentences:

<p class="note-centered">[I saw [the man with the telescope.]]<br>[I saw [the man][with the telescope.]]</p>

Another example:

<p class="note-centered"><em>I shot an elephant in my pajamas.</em></p>

The sentence has two possible syntactic structures.

<figure class="note-image">
<svg viewBox="0 0 640 250" role="img" aria-label="Syntax tree where the prepositional phrase in my pajamas attaches to the verb phrase." fill="none" stroke="currentColor" stroke-width="1">
<g>
<line x1="320" y1="32" x2="152" y2="68"></line>
<line x1="320" y1="32" x2="420" y2="68"></line>
<line x1="150" y1="88" x2="150" y2="124"></line>
<line x1="418" y1="88" x2="302" y2="124"></line>
<line x1="420" y1="88" x2="420" y2="124"></line>
<line x1="422" y1="88" x2="543" y2="124"></line>
<line x1="300" y1="144" x2="300" y2="184"></line>
<line x1="420" y1="144" x2="420" y2="184"></line>
<line x1="545" y1="144" x2="545" y2="184"></line>
</g>
<g fill="currentColor" stroke="none" font-size="13" text-anchor="middle" font-family="Georgia, serif">
<text x="320" y="24">S</text>
<text x="150" y="82">NP</text>
<text x="420" y="82">VP</text>
<text x="150" y="138">I</text>
<text x="300" y="138">V</text>
<text x="420" y="138">NP</text>
<text x="545" y="138">PP</text>
<text x="300" y="198">shot</text>
<text x="420" y="198">an elephant</text>
<text x="545" y="198">in my pajamas</text>
</g>
</svg>
</figure>

Here, *in my pajamas* modifies the verb phrase: I was wearing the pajamas when I shot the elephant.

<figure class="note-image">
<svg viewBox="0 0 640 310" role="img" aria-label="Syntax tree where the prepositional phrase in my pajamas attaches to the noun phrase an elephant." fill="none" stroke="currentColor" stroke-width="1">
<g>
<line x1="320" y1="32" x2="152" y2="68"></line>
<line x1="320" y1="32" x2="430" y2="68"></line>
<line x1="150" y1="88" x2="150" y2="124"></line>
<line x1="428" y1="88" x2="332" y2="124"></line>
<line x1="432" y1="88" x2="498" y2="124"></line>
<line x1="330" y1="144" x2="330" y2="184"></line>
<line x1="498" y1="144" x2="432" y2="180"></line>
<line x1="502" y1="144" x2="573" y2="180"></line>
<line x1="430" y1="200" x2="430" y2="240"></line>
<line x1="575" y1="200" x2="575" y2="240"></line>
</g>
<g fill="currentColor" stroke="none" font-size="13" text-anchor="middle" font-family="Georgia, serif">
<text x="320" y="24">S</text>
<text x="150" y="82">NP</text>
<text x="430" y="82">VP</text>
<text x="150" y="138">I</text>
<text x="330" y="138">V</text>
<text x="500" y="138">NP</text>
<text x="330" y="198">shot</text>
<text x="430" y="194">NP</text>
<text x="575" y="194">PP</text>
<text x="430" y="254">an elephant</text>
<text x="575" y="254">in my pajamas</text>
</g>
</svg>
</figure>

Here, *in my pajamas* modifies the noun phrase *an elephant*: the elephant is in my pajamas.

**3.** Language can be viewed as a "structure" because it is hierarchically composable. On the morpheme-level, consider:

<p class="note-centered">(un-(friend)-ly))-ness</p>

or as a tree,

<figure class="note-image">
<svg viewBox="0 0 380 260" role="img" aria-label="Morphology tree decomposing unfriendliness into un, friend, ly and ness." fill="none" stroke="currentColor" stroke-width="1">
<g>
<line x1="178" y1="32" x2="128" y2="66"></line>
<line x1="182" y1="32" x2="240" y2="66"></line>
<line x1="118" y1="88" x2="82" y2="122"></line>
<line x1="126" y1="88" x2="168" y2="122"></line>
<line x1="163" y1="144" x2="140" y2="178"></line>
<line x1="171" y1="144" x2="208" y2="178"></line>
<line x1="140" y1="200" x2="140" y2="236"></line>
</g>
<g fill="currentColor" stroke="none" font-size="13" text-anchor="middle" font-family="Georgia, serif">
<text x="180" y="24">N</text>
<text x="120" y="82">Adj</text>
<text x="248" y="82" font-style="italic">-ness</text>
<text x="74" y="138" font-style="italic">un-</text>
<text x="168" y="138">Adj</text>
<text x="140" y="194">N</text>
<text x="212" y="194" font-style="italic">-ly</text>
<text x="140" y="250">friend</text>
</g>
</svg>
</figure>

These trees can be further composed to give a tree structure on the whole sentence.

**4.** An *i-language* is a set of internal grammatical rules in each person's mind. Thus, i-languages for e.g. English differ person-to-person. There is some intuitive sense of "this sentence feels right" (grammaticality) that each person has based on their specific i-language.

**5.** There might be some math involved in linguistics; namely, operators defined on the language-trees.

**Generative linguistics: formal languages.**

Formal languages describe strings of words recognizable by varying classes of automata (called Chomsky hierarchy).

Structures that give rise to formal languages:

- Programming languages
- Some discrete group presentations

The question: which classes of automata can recognize *natural languages*? A grammar is a quadruple

$$
\mathcal{G} = (V_N, V_T, P, S)
$$

where

- $V_N$ and $V_T$ are disjoint finite sets: non-terminal and terminal symbols, respectively.
- $S \in V_N$ is the start symbol.
- $P$ is the set of *production rules*, acting as a finite rewriting system on $V_N \cup V_T$.

The language produced by a grammar $\mathcal{G}$ is given by

$$
L_{\mathcal{G}} = \{w \in V_T^{\star} : S \to_P^{\star} w\}
$$

**Example 2.1.** Consider grammar $\mathcal{G} = (\{S, A\}, \{a, b\}, P, S)$ with productions:

$$
S \to aAS, \quad S \to a, \quad A \to SbA, \quad A \to SS, \quad A \to bA
$$

Note that a possible word in $L_{\mathcal{G}}$ is given by $abaaa$, since

$$
S \Rightarrow aAS \Rightarrow aAa \Rightarrow abAa \Rightarrow abSSa \Rightarrow abSaa \Rightarrow abaaa.
$$

**The Chomsky hierarchy.**

**Type 0:** unrestricted grammar, recognizable by Turing machine. Production rules are general: $\alpha \to \beta$.

**Type 1:** Context-sensitive grammar, recognizable by linear bounded automaton. A context-sensitive grammar is one with

$$
\beta A \gamma \to \beta \alpha \gamma, \quad \text{with } A \in V_N, \alpha, \beta, \gamma \in (V_N \cup V_T)^{\star}, \alpha \neq \varepsilon
$$

Note that the context is fixed and just the middle part is re-written. Type 1 is a more restricted version of Type 0.

**Type 2:** Context-free grammar, recognizable by nondeterministic pushdown automata. Special case of context-sensitive, with $\beta = \gamma = \varepsilon$.

**Type 3:** Regular grammar, recognizable by finite state automata (e.g., NFA, DFA). More restricted version of Type 2 (we'll see why in the next example).

Generally, we find that

$$
\text{Type 3} \subseteq \text{Type 2} \subseteq \text{Type 1} \subseteq \text{Type 0}
$$

in terms of expressive power.

**Example 2.2** (Context-sensitive grammar). Consider the context-sensitive grammar $\mathcal{G} = (\{S, B, C\}, \{a, b, c\}, P, S)$, with production rules

$$
\begin{aligned}
S &\to aSBC, \quad S \to aBC, \quad CB \to BC, \\
aB &\to ab, \quad bB \to bb, \quad bC \to bc, \quad cC \to cc
\end{aligned}
$$

Then, we find possible strings are

- $S \Rightarrow aBC \Rightarrow abC \Rightarrow abc$
- $S \Rightarrow aSBC \Rightarrow aaBCBC \Rightarrow aabCBC \Rightarrow aabBCC \Rightarrow aabbCC \Rightarrow aabbcC \Rightarrow aabbcc$

and in general,

$$
L_{\mathcal{G}} = \{a^n b^n c^n : n \geq 1\}
$$

**Example 2.3** (Context-free grammar). Take the context-free grammar $\mathcal{G} = (\{S\}, \{0, 1\}, P, S)$ where the production rules are given by

$$
S \to 0S1, \quad S \to 01
$$

Then, we find possible strings are

- $01$
- $0011$
- $000111$
- $\ldots$

and in general,

$$
L_{\mathcal{G}} = \{0^n 1^n : n \geq 1\}
$$

We know this $L_{\mathcal{G}}$ is not regular, because finite automata have *fixed memory*; remembering $n$ requires storing a variable.

**Example 2.4** (Regular grammars). Consider $\mathcal{G} = (\{S, A\}, \{0, 1\}, P, S)$, with production rules

$$
S \to 0S, \quad S \to A, \quad A \to 1A, \quad A \to 1
$$

It is clear this is a deterministic finite automaton:

<figure class="note-image">
<svg viewBox="0 0 360 140" role="img" aria-label="Deterministic finite automaton with start state S looping on 0 and accepting state A looping on 1." fill="none" stroke="currentColor" stroke-width="1.1">
<defs>
<marker id="dfa-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" stroke="none"></path>
</marker>
</defs>
<line x1="60" y1="92" x2="126" y2="92" marker-end="url(#dfa-arrow)"></line>
<circle cx="152" cy="92" r="24"></circle>
<circle cx="272" cy="92" r="24"></circle>
<circle cx="272" cy="92" r="28"></circle>
<line x1="178" y1="92" x2="240" y2="92" marker-end="url(#dfa-arrow)"></line>
<path d="M 138 70 C 128 34 176 34 166 70" marker-end="url(#dfa-arrow)"></path>
<path d="M 258 66 C 248 30 296 30 286 66" marker-end="url(#dfa-arrow)"></path>
<g fill="currentColor" stroke="none" font-size="13" text-anchor="middle" font-family="Georgia, serif">
<text x="30" y="96">start</text>
<text x="152" y="97" font-style="italic">S</text>
<text x="272" y="97" font-style="italic">A</text>
<text x="209" y="84">1</text>
<text x="152" y="34">0</text>
<text x="272" y="30">1</text>
</g>
</svg>
</figure>

with $A$ as a terminal state. We observe that right-linear production rules yield finite automata, as the nonterminals $\{S, A\}$ can be viewed as states with terminals (or $\varepsilon$) as transitions. This further cements the idea that regular grammars are constrained (right-linear) context-free grammars.

**How good are CFGs at representing natural language?**

We show not-context-free by highlighting cross-serial dependencies in the language. [Why cross-serial dependencies yield context-free grammars?]

Some examples of context-sensitive languages:

- Dutch.
- Swiss-German. Some legal sentences are of the form

$$
w a^n b^m x c^n d^m y
$$

for example, "Jan säit das mer (d'chind)$^n$ (em Hans)$^m$ es huus hälfed wele (laa)$^n$ (hafte)$^m$ aastriiche."

- $L_{\mathcal{G}} = \{x x^R : x \in \{a, b\}^{\star}\}$ (where $x^R$ is the reversal of $x$).

However, in general, context-sensitive grammars are overkill for representing natural languages. What is the weakest grammar able to represent natural languages?

**Formal languages of finitely presented groups.**

Consider a situation where the grammar is a finite group, e.g., $\mathcal{G} = G = \langle X \mid R \rangle$. Then,

$$
L_G = \{w \in \hat{X}^{\star} : w = 1_G\}
$$

**Example 2.5.** Consider $G = C_3 = \langle a \mid a^3 = 1 \rangle$. Then, $\hat{X} = \{a, a^{-1}\}$, and

$$
L_G = \{a^n : n \equiv 0 \mod 3\}
$$

**Example 2.6.** Consider $G = D_8 = \langle r, s \mid r^4 = s^2 = 1, srs = r^{-1} \rangle$. Then, $\hat{X} = \{r, r^3, s\}$, and

$$
L_G = \{w \in \{r, r^3, s\}^{\star} : w = 1\}
$$

What kind of formal languages can be represented by such finite groups? Algebraic properties of $G$ correspond to the properties of $L_G$. Note that:

1. $L_G$ is *regular* iff $G$ is finite.
2. $L_G$ is context-free iff $G$ has a free subgroup of finite index.

**Example 2.7.** Take the infinite group $G = SL_2(\mathbb{Z}) = \langle S, T \mid S^4 = I, S^2 = (ST)^3 \rangle$, where

$$
S = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}, \quad T = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}
$$

We know $L_G$ is not regular since $G$ is not finite. Consider

$$
A = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}
$$

Since no combination of $A, B$ equals $I$, it follows that $F_2 = \langle A, B \rangle$ is a free group; since $\det A = \det B = 1$, $F_2 \leq G$.

Next, we define $\Gamma(2)$ as the set of matrices congruent to $I_2 \mod 2$. Since

$$
\begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} \equiv \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \mod 2, \quad \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \equiv \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \mod 2
$$

it follows that $A, B \in \Gamma(2)$.

We define $\pi : SL_2(\mathbb{Z}) \to SL_2(\mathbb{F}_2)$, with $\ker \pi = \Gamma(2)$. By the First Isomorphism Theorem,

$$
SL_2(\mathbb{Z})/\Gamma(2) \cong SL_2(\mathbb{F}_2)
$$

so $[SL_2(\mathbb{Z}) : \Gamma(2)] = |SL_2(\mathbb{F}_2)| = 6$. Similarly, since $\Gamma(2) = F_2 \sqcup -IF_2$, $[\Gamma(2) : F_2] = 2$, and $[SL_2(\mathbb{Z}) : F_2] = [SL_2(\mathbb{Z}) : \Gamma(2)][\Gamma(2) : F_2] = (6)(2) = 12$. Since $G$ has a free subgroup $H$ of finite index, $L_G$ is context-free.

This section just shows that there is a nice tie between groups and languages. It doesn't mean we have to use them over production rules.

**Boundaries of Babel problem.**

How do we formally characterize the space of natural languages? It is between context-sensitive and context-free. What is the *geometry* of this space? (Geometry basically means we represent each language as a point, with dimensions such as "head size.")

We want a formal model to describe natural languages. Formal languages are no longer viewed a good way to model generative syntax.

- They focus on strings rather than structures. Remember that the same string can have different meanings based on the hierarchy. Only focusing on the strings means that the hierarchy information is not generated.
- The production rules get too complicated.
- There are too many languages in the context-sensitive class that are not natural languages.

<div class="note-callout">
Stage 1: string problem<br>
CFGs are too weak for some natural-language dependencies<br>
&#8659;<br>
need mildly context-sensitive power
</div>

<div class="note-callout">
Stage 2: structure problem<br>
Knowing which strings are legal isn't enough<br>
&#8659;<br>
need a theory that actually generates syntactic structures
</div>

So, context-sensitive grammar is more powerful about strings, not automatically better about trees.
