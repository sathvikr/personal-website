---
title: "GPU-Accelerated Simulated Annealing for VLSI Macro Placement"
date: "2026-06-17"
---

Given a rectangular chip die, a set of rectangular macros, fixed pins, and a hypergraph netlist, the program searches for a legal macro placement that minimizes estimated wirelength and overlap, with the heavy cost evaluation on the GPU.

**Background.** Macro placement is an important problem in chip physical design. In modern chips, large blocks such as SRAMs, analog blocks, accelerators, and IP modules must be placed on a two-dimensional die. The placement has to satisfy geometric constraints, such as keeping macros inside the die and avoiding overlap, while also optimizing objectives such as wirelength, routing congestion, and timing.

Input: a rectangular die, a set of rectangular macros (design blocks), and a set of nets (wires) connecting those macros and fixed pins. For example:

```json
{
  "die": {"width": 1000, "height": 1000},
  "macros": [
    {"name": "m0", "width": 100, "height": 80},
    {"name": "m1", "width": 120, "height": 90}
  ],
  "pins": [
    {"name": "p0", "x": 0, "y": 500}
  ],
  "nets": [
    ["m0", "m1", "p0"]
  ]
}
```

The goal is to assign each macro an $(x, y)$ location such that the macros do not overlap and the estimated interconnect cost is low. This is well-suited for CUDA because many parts of the placement objective are parallelizable. For example, the half-perimeter wirelength of each net can be computed independently. Also, many simulated annealing chains can be run independently in parallel, allowing the GPU to explore many possible placements at once.

The program first generates an initial random placement. The CPU baseline improves the placement using simulated annealing. Then the CUDA implementation runs many annealing chains in parallel and returns the best placement found.

**Computation.** Each placement consists of coordinates for $N$ macros $P = \{(x_i, y_i)\}_{i=1}^{N}$ where macro $i$ has width $w_i$ and height $h_i$. The cost function combines wirelength, overlap, and boundary penalties:

$$
C(P) = \alpha \cdot \operatorname{HPWL}(P) + \beta \cdot \operatorname{OverlapPenalty}(P) + \gamma \cdot \operatorname{BoundaryPenalty}(P)
$$

The half-perimeter wirelength of a net $n$ is:

$$
\operatorname{HPWL}(n) = \left(\max_{p \in n} x_p - \min_{p \in n} x_p\right) + \left(\max_{p \in n} y_p - \min_{p \in n} y_p\right)
$$

The total wirelength is $\operatorname{HPWL}(P) = \sum_{n \in \mathcal{N}} \operatorname{HPWL}(n)$ where $\mathcal{N}$ is the set of nets.

The overlap penalty between two macros $i$ and $j$ can be computed using their rectangle intersection area. If macro $i$ occupies $[x_i, x_i + w_i] \times [y_i, y_i + h_i]$ and macro $j$ occupies $[x_j, x_j + w_j] \times [y_j, y_j + h_j]$, then their overlap area is:

$$
\max\!\left(0, \min(x_i + w_i,\, x_j + w_j) - \max(x_i, x_j)\right) \cdot \max\!\left(0, \min(y_i + h_i,\, y_j + h_j) - \max(y_i, y_j)\right)
$$

The total overlap penalty is:

$$
\operatorname{OverlapPenalty}(P) = \sum_{i < j} \operatorname{overlap}(i, j)
$$

The simulated annealing algorithm proposes random moves such as moving one macro to a new location or swapping two macros. If the new placement has cost difference $\Delta C = C(P_{\text{new}}) - C(P_{\text{old}})$, then the move is accepted with probability $p = \min\!\left(1, e^{-\Delta C / T}\right)$ where $T$ is the current temperature.

The CPU version runs a single simulated annealing chain. The CUDA version runs many independent chains in parallel, each starting from a different random initial placement. At the end, the program chooses the best placement among all chains.

**Results.** Each synthetic benchmark below uses the same SA schedule ($T$ from $100$ to $0.001$, cooling $0.995$, $30{,}000$ moves, seed $42$) and the same random initial placement per size. The CPU baseline runs a single annealing chain; the GPU implementation runs $64$ independent chains and keeps the best.

| Benchmark | Macros | Nets | Die | CPU total | GPU total | CPU time | GPU time | Speedup |
|---|--:|--:|--:|--:|--:|--:|--:|--:|
| Small | 8 | 20 | 1000×1000 | 15,145 | 15,086 | 124 ms | 510 ms | 0.24× |
| Medium | 64 | 200 | 4000×4000 | 796,481 | 755,343 | 3,474 ms | 1,241 ms | 2.80× |
| Large | 256 | 1000 | 10000×10000 | 11,826,771 | 11,603,684 | 44,758 ms | 12,761 ms | 3.51× |

The GPU pays off once the problem is large enough to amortize kernel-launch and transfer overhead: it is ~2.8× faster at medium and ~3.5× faster at large, while also reaching a slightly *lower* final cost (more chains explore more of the space). On the tiny 8-macro problem the GPU is slower than the CPU (0.24×) — there isn't enough work to hide the overhead.

**Small benchmark.** 8 macros, 20 nets, 1000×1000 die. Both solvers cut the cost ~99% with zero overlap and zero boundary violation.

| Metric | CPU | GPU |
|---|--:|--:|
| Total cost | 15,144.77 | 15,085.94 |
| HPWL | 15,144.77 | 15,085.94 |
| Overlap | 0.00 | 0.00 |
| Boundary | 0.00 | 0.00 |
| Improvement | 99.12% | 99.13% |
| Runtime | 124.2 ms | 510.1 ms |

<figure class="result-plot"><img src="files/out-20260616-152841/convergence_plot.svg" alt="Convergence: CPU vs GPU, small benchmark" loading="lazy"><figcaption>Best total cost vs. move (log scale).</figcaption></figure>

<div class="result-gifs">
<figure><img src="files/out-20260616-152841/convergence_cpu.gif" alt="CPU convergence, small benchmark" loading="lazy"><figcaption>CPU (1 chain)</figcaption></figure>
<figure><img src="files/out-20260616-152841/convergence_gpu.gif" alt="GPU convergence, small benchmark" loading="lazy"><figcaption>GPU (64 chains)</figcaption></figure>
</div>

**Medium benchmark.** 64 macros, 200 nets, 4000×4000 die.

| Metric | CPU | GPU |
|---|--:|--:|
| Total cost | 796,480.57 | 755,342.94 |
| HPWL | 796,310.11 | 755,104.69 |
| Overlap | 17.05 | 23.82 |
| Boundary | 0.00 | 0.00 |
| Improvement | 97.93% | 98.04% |
| Runtime | 3,474.2 ms | 1,240.8 ms |

<figure class="result-plot"><img src="files/out-20260616-152742/convergence_plot.svg" alt="Convergence: CPU vs GPU, medium benchmark" loading="lazy"><figcaption>Best total cost vs. move (log scale).</figcaption></figure>

<div class="result-gifs">
<figure><img src="files/out-20260616-152742/convergence_cpu.gif" alt="CPU convergence, medium benchmark" loading="lazy"><figcaption>CPU (1 chain)</figcaption></figure>
<figure><img src="files/out-20260616-152742/convergence_gpu.gif" alt="GPU convergence, medium benchmark" loading="lazy"><figcaption>GPU (64 chains)</figcaption></figure>
</div>

**Large benchmark.** 256 macros, 1000 nets, 10000×10000 die.

| Metric | CPU | GPU |
|---|--:|--:|
| Total cost | 11,826,770.79 | 11,603,684.00 |
| HPWL | 11,814,036.77 | 11,597,189.00 |
| Overlap | 1,056.78 | 448.23 |
| Boundary | 21.66 | 20.13 |
| Improvement | 93.05% | 93.18% |
| Runtime | 44,757.9 ms | 12,761.3 ms |

<figure class="result-plot"><img src="files/out-20260616-152519/convergence_plot.svg" alt="Convergence: CPU vs GPU, large benchmark" loading="lazy"><figcaption>Best total cost vs. move (log scale).</figcaption></figure>

<div class="result-gifs">
<figure><img src="files/out-20260616-152519/convergence_cpu.gif" alt="CPU convergence, large benchmark" loading="lazy"><figcaption>CPU (1 chain)</figcaption></figure>
<figure><img src="files/out-20260616-152519/convergence_gpu.gif" alt="GPU convergence, large benchmark" loading="lazy"><figcaption>GPU (64 chains)</figcaption></figure>
</div>

At medium and large sizes a small residual overlap remains (the penalty keeps it tiny but nonzero); the 8-macro case converges to exactly zero overlap.
