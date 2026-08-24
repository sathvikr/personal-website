---
title: "Notes, Ma 191c: Government & Binding"
date: "2026-08-24"
source: "[[lecture 2]](https://www.its.caltech.edu/~matilde/LinguisticsMa191c2024Lecture2.pdf)"
continues: "2026-08-23-notes-ma-191c-pre-minimalism-models"
---

**Government and binding.**

This is based on the P&P model.

1. In a syntax tree, a node $X$ *dominates* a node $Y$ if $Y$ is an $n$-th grandchild of $X$.
2. A *maximal projection* of a lexical head is the largest phrase built around that head. For example, in *eat the apple*, if "eat" is the head, then the whole phrase is the maximal projection of "eat."
3. A *governor* is a lexical head.

Now, some rules:

**1.** $A$ m-commands $B$ if the maximal projection of $A$ dominates $B$, and neither $A$ nor $B$ dominate each other.

<figure class="note-diagram">
<svg viewBox="0 0 350 215" width="350" height="215" role="img" aria-label="Tree for John saw Mary, illustrating m-command." fill="none" stroke="currentColor" stroke-width="1">
<g>
<line x1="166" y1="32" x2="101" y2="68"></line>
<line x1="174" y1="32" x2="236" y2="68"></line>
<line x1="95" y1="88" x2="95" y2="126"></line>
<line x1="236" y1="88" x2="204" y2="126"></line>
<line x1="244" y1="88" x2="284" y2="126"></line>
<line x1="200" y1="144" x2="200" y2="184"></line>
<line x1="288" y1="144" x2="288" y2="184"></line>
</g>
<g fill="currentColor" stroke="none" font-size="13" text-anchor="middle" font-family="Georgia, serif">
<text x="170" y="24">S</text>
<text x="95" y="82">NP</text>
<text x="240" y="82">VP</text>
<text x="95" y="138">John</text>
<text x="200" y="138">V</text>
<text x="288" y="138">NP</text>
<text x="200" y="198">saw</text>
<text x="288" y="198">Mary</text>
</g>
</svg>
</figure>

Here, "saw" m-commands "Mary" because neither dominates the other, yet the maximal projection of "saw" ("saw Mary") dominates "Mary."

**2.** $X$ c-commands $Y$ if neither node dominates the other, and the first node that dominates $X$ also dominates $Y$.

<figure class="note-diagram">
<svg viewBox="0 0 350 215" width="350" height="215" role="img" aria-label="Tree for John saw himself, illustrating c-command." fill="none" stroke="currentColor" stroke-width="1">
<g>
<line x1="166" y1="32" x2="101" y2="68"></line>
<line x1="174" y1="32" x2="236" y2="68"></line>
<line x1="95" y1="88" x2="95" y2="126"></line>
<line x1="236" y1="88" x2="204" y2="126"></line>
<line x1="244" y1="88" x2="284" y2="126"></line>
<line x1="200" y1="144" x2="200" y2="184"></line>
<line x1="288" y1="144" x2="288" y2="184"></line>
</g>
<g fill="currentColor" stroke="none" font-size="13" text-anchor="middle" font-family="Georgia, serif">
<text x="170" y="24">S</text>
<text x="95" y="82">NP</text>
<text x="240" y="82">VP</text>
<text x="95" y="138">John</text>
<text x="200" y="138">V</text>
<text x="288" y="138">NP</text>
<text x="200" y="198">saw</text>
<text x="288" y="198">himself</text>
</g>
</svg>
</figure>

Here, "John" c-commands "himself" because 1) neither node dominates the other, and 2) the first node $S$ dominating $\text{NP}_{\text{John}}$ also dominates $\text{NP}_{\text{himself}}$.

**3.** A *barrier* between $A$ and $B$ is a node $X$ in a syntactic tree such that $X$ c-commands $B$ and does not c-command $A$.

<figure class="note-diagram">
<svg viewBox="0 0 560 396" width="560" height="396" role="img" aria-label="Tree for John thinks that Mary saw Bill, illustrating a barrier." fill="none" stroke="currentColor" stroke-width="1">
<g>
<line x1="246" y1="32" x2="111" y2="68"></line>
<line x1="254" y1="32" x2="296" y2="68"></line>
<line x1="105" y1="88" x2="105" y2="126"></line>
<line x1="296" y1="88" x2="191" y2="126"></line>
<line x1="304" y1="88" x2="384" y2="126"></line>
<line x1="185" y1="144" x2="185" y2="184"></line>
<line x1="386" y1="144" x2="306" y2="184"></line>
<line x1="394" y1="144" x2="459" y2="184"></line>
<line x1="300" y1="202" x2="300" y2="242"></line>
<line x1="461" y1="202" x2="411" y2="242"></line>
<line x1="469" y1="202" x2="511" y2="242"></line>
<line x1="405" y1="260" x2="405" y2="300"></line>
<line x1="511" y1="260" x2="484" y2="300"></line>
<line x1="519" y1="260" x2="541" y2="300"></line>
<line x1="480" y1="318" x2="480" y2="358"></line>
<line x1="545" y1="318" x2="545" y2="358"></line>
</g>
<g fill="currentColor" stroke="none" font-size="13" text-anchor="middle" font-family="Georgia, serif">
<text x="250" y="24">S</text>
<text x="105" y="82">NP</text>
<text x="300" y="82">VP</text>
<text x="105" y="138">John</text>
<text x="185" y="138">V</text>
<text x="390" y="138">CP</text>
<text x="185" y="196">thinks</text>
<text x="300" y="196">C</text>
<text x="465" y="196">S</text>
<text x="300" y="254">that</text>
<text x="405" y="254">NP</text>
<text x="515" y="254">VP</text>
<text x="405" y="312">Mary</text>
<text x="480" y="312">V</text>
<text x="545" y="312">NP</text>
<text x="480" y="370">saw</text>
<text x="545" y="370">Bill</text>
</g>
<g fill="currentColor" stroke="none" font-size="9" text-anchor="middle" font-style="italic" font-family="Georgia, serif">
<text x="185" y="208">A</text>
<text x="405" y="324">X</text>
<text x="545" y="382">B</text>
</g>
</svg>
</figure>

In the above tree, "Mary" c-commands "Bill" but does not c-command "thinks", so it is a barrier between "thinks" and "Bill." The point of this barrier becomes apparent when looking at governance.

**4.** $A$ *governs* $B$ iff. $A$ is a governor, $A$ m-commands $B$, and there is no barrier between $A$ and $B$. In the same previous tree, "thinks" is a governor and m-commands "Bill"; however, "thinks" does not *govern* "Bill" because there is a barrier between "thinks" and "Bill." Considering the sentence

<p class="note-centered">John [thinks [that [Mary [saw Bill.]]]]</p>

it makes sense that "thinks" is not related to "Bill" and that the reason for this is the introduction of "Mary." The local relationship is "saw" $\leftrightarrow$ "Bill" not "thinks" $\leftrightarrow$ "Bill". Hence, this makes sense.

**5.** $A$ *binds* $B$ iff. $A$ c-commands $B$ and $A, B$ refer to the same person.

Consider

<figure class="note-diagram">
<svg viewBox="0 0 420 275" width="420" height="275" role="img" aria-label="Tree for John saw his mother, illustrating binding." fill="none" stroke="currentColor" stroke-width="1">
<g>
<line x1="196" y1="32" x2="96" y2="68"></line>
<line x1="204" y1="32" x2="271" y2="68"></line>
<line x1="90" y1="88" x2="90" y2="126"></line>
<line x1="271" y1="88" x2="206" y2="126"></line>
<line x1="279" y1="88" x2="324" y2="126"></line>
<line x1="90" y1="144" x2="90" y2="184"></line>
<line x1="200" y1="144" x2="200" y2="184"></line>
<line x1="326" y1="144" x2="299" y2="184"></line>
<line x1="334" y1="144" x2="366" y2="184"></line>
<line x1="295" y1="202" x2="295" y2="242"></line>
<line x1="370" y1="202" x2="370" y2="242"></line>
</g>
<g fill="currentColor" stroke="none" font-size="13" text-anchor="middle" font-family="Georgia, serif">
<text x="200" y="24">S</text>
<text x="90" y="82">NP</text>
<text x="275" y="82">VP</text>
<text x="90" y="138">N</text>
<text x="200" y="138">V</text>
<text x="330" y="138">NP</text>
<text x="90" y="196">John</text>
<text x="200" y="196">saw</text>
<text x="295" y="196">DET</text>
<text x="370" y="196">N</text>
<text x="295" y="254">his</text>
<text x="370" y="254">mother</text>
</g>
</svg>
</figure>

Here, "John" binds "his"; note that "John" c-commands "saw" but "John" and "saw" are not co-referential because "John" is just an argument of "saw."
