---
title: "Notes, Ma 191c: Pre-minimalism Linguistic Models"
date: "2026-08-23"
---

**Transformational grammar (Chomsky, 1957).**

Sentences have

1. Deep structure (closer to semantics): represents the sentence as a tree.
2. Surface structure (language-specific) represents the sentence as a tree after some transformations.

**Example 2.8.** Consider the sentence

<p class="note-centered">John eats the apple.</p>

**1.** *Deep structure* represents the sentence using a tree (imprecise, but bear with this):

<figure class="note-diagram">
<svg viewBox="0 0 360 215" width="360" height="215" role="img" aria-label="Deep structure tree for John eats the apple." fill="none" stroke="currentColor" stroke-width="1">
<g>
<line x1="176" y1="32" x2="106" y2="68"></line>
<line x1="184" y1="32" x2="246" y2="68"></line>
<line x1="100" y1="88" x2="100" y2="126"></line>
<line x1="246" y1="88" x2="209" y2="126"></line>
<line x1="254" y1="88" x2="291" y2="126"></line>
<line x1="205" y1="144" x2="205" y2="184"></line>
<line x1="295" y1="144" x2="295" y2="184"></line>
</g>
<g fill="currentColor" stroke="none" font-size="13" text-anchor="middle" font-family="Georgia, serif">
<text x="180" y="24">S</text>
<text x="100" y="82">NP</text>
<text x="250" y="82">VP</text>
<text x="100" y="138">John</text>
<text x="205" y="138">V</text>
<text x="295" y="138">NP</text>
<text x="205" y="198">eats</text>
<text x="295" y="198">the apple</text>
</g>
</svg>
</figure>

**2.** Transformational grammar equips us with a couple of pre-built transformations that we can use on this tree (passivization, question formation, negation, movement, etc.). The point of these transformations is to produce a list of related sentence-trees and say they are equivalent:

<p class="note-centered">John eats the apple.<br>The apple was eaten by John.<br>Did John eat the apple?<br>Was the apple eaten by John?<br>&#8942;</p>

This approach enables us to create tree families that represent the same semantic idea. The tree-representations for each of these are *surface structure*.

One might ask, "why did we pick *John eats the apple* as the deep structure tree?" We actually did not; we just made some universal assignments:

$$
\begin{aligned}
\text{EATER} &= \text{John} \\
\text{EATEN THING} &= \text{apple}
\end{aligned}
$$

and created a tree out of that; it's just that this tree happened to look like "John eats the apple" when unrolled. The sentence tree itself is surface-level; the deep-level is this abstract assignment tree. So in general,

$$
\text{DeepStructure} \xrightarrow{\text{transforms}} \text{SurfaceStructure}
$$

There are obviously many issues with this. Here are the biggest ones in my opinion:

1. Too many transformations.
2. Transformation rules may not be precise.
3. Multiple hard-coded rules.
4. Messy when dealing with multiple languages, especially because passive transformation rules differ language-to-language.

This motivates the next idea.

**Principles and parameters (Chomsky, 1981).**

Two components:

1. Principles (general grammar rules). E.g., "when building a grammar you must represent lexical word elements syntactically" (Projection Principle) or "each argument of a phrase gets one role" ($\theta$-criterion). These are true for all languages.
2. Parameters (binary variables distinguishing different languages syntactically).

So universal principles plus language-specific parameter settings compose a specific language's grammar. If you were to design a new language, you should note this.

**Example 2.9.** Let's say "heads before complements" is a parameter. Then, for English (param=1) and Japanese (param=0) respectively, possible trees allowed by the grammar are:

<figure class="note-diagram">
<svg viewBox="0 0 460 160" width="460" height="160" role="img" aria-label="Two verb phrase trees: English with the verb before its complement, Japanese with the complement before the verb." fill="none" stroke="currentColor" stroke-width="1">
<g>
<line x1="91" y1="32" x2="59" y2="68"></line>
<line x1="99" y1="32" x2="136" y2="68"></line>
<line x1="55" y1="88" x2="55" y2="128"></line>
<line x1="140" y1="88" x2="140" y2="128"></line>
<line x1="326" y1="32" x2="289" y2="68"></line>
<line x1="334" y1="32" x2="371" y2="68"></line>
<line x1="285" y1="88" x2="285" y2="128"></line>
<line x1="375" y1="88" x2="375" y2="128"></line>
</g>
<g fill="currentColor" stroke="none" font-size="13" text-anchor="middle" font-family="Georgia, serif">
<text x="95" y="24">VP</text>
<text x="55" y="82">V</text>
<text x="140" y="82">DP</text>
<text x="55" y="142">eat</text>
<text x="140" y="142">an apple</text>
<text x="215" y="30">,</text>
<text x="330" y="24">VP</text>
<text x="285" y="82">DP</text>
<text x="375" y="82">V</text>
<text x="285" y="142">ringo-o</text>
<text x="375" y="142">tabe</text>
</g>
</svg>
</figure>

Through P&P, in an idealized world, languages are encoded as bitstrings that represent each parameter, with "general design decisions" enforced through the principles.

Example principles:

- Structure Preservation Principle
- Projection Principle
- Subjacency Principle

Example parameters:

- Head-directionality
- Subject-side
- Pro-drop
- Null-subject
- Word order (SOV, SVO, VSO, VOS, OVS, OSV)

There are a couple problems with P&P:

1. Interdependencies between parameters. Mathematically, an aim is to figure out the "ideal set" of generators, but linguists haven't found this yet.
2. Changes of parameters as languages evolve (e.g., word order changes in Homeric to Classical Greek, switches from Old English to English, etc.).
