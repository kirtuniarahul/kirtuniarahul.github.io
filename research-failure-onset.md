---
layout: default
title: "Research Project 1 — Failure Onset"
permalink: /research/failure-onset/
description: "Failure onset analysis of composite laminates with uncertainty in ply orientation."
---

<section class="page-hero">
  <div class="shell">
    <p class="eyebrow">RESEARCH PROJECT 1 OF 3</p>
    <h1>Failure Onset</h1>
    <p>Laminates with Uncertainty in Determining Ply Orientation</p>

    <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:24px;">
      <a class="hero-link secondary" href="{{ '/research/' | relative_url }}">← Back to Research Projects</a>
      <a class="hero-link secondary" href="{{ '/research/l-shaped-delamination/' | relative_url }}">Next: Project 2 →</a>
    </div>
  </div>
</section>

<section class="page-content">
  <div class="shell">

    <div class="project-card" style="margin-bottom:24px;">
      <p class="eyebrow">OVERVIEW</p>
      <h2>Why this research?</h2>
      <p>
        Carbon-fiber laminate performance depends strongly on ply orientation. Manufacturing
        misalignment and uncertainty from inspection can alter stiffness and failure predictions,
        creating uncertainty in decisions about whether a component is safe for operation.
      </p>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:16px; margin:28px 0;">
      <figure style="margin:0;">
        <img src="{{ '/assets/images/research/failure-onset-envelope.png' | relative_url }}"
             alt="Failure envelope visualization"
             style="width:100%; height:220px; object-fit:contain; background:#06111d; border-radius:14px; padding:8px;">
        <figcaption style="color:var(--muted); font-size:.82rem; margin-top:8px;">
          Failure-envelope visualization.
        </figcaption>
      </figure>

      <figure style="margin:0;">
        <img src="{{ '/assets/images/research/failure-onset-cdf.png' | relative_url }}"
             alt="CDF comparison"
             style="width:100%; height:220px; object-fit:contain; background:#06111d; border-radius:14px; padding:8px;">
        <figcaption style="color:var(--muted); font-size:.82rem; margin-top:8px;">
          CDF-based comparison of failure response.
        </figcaption>
      </figure>

      <figure style="margin:0;">
        <img src="{{ '/assets/images/research/failure-onset-fea.png' | relative_url }}"
             alt="Finite element validation"
             style="width:100%; height:220px; object-fit:contain; background:#06111d; border-radius:14px; padding:8px;">
        <figcaption style="color:var(--muted); font-size:.82rem; margin-top:8px;">
          Finite-element validation of the statistical model.
        </figcaption>
      </figure>
    </div>

    <div class="project-grid" style="margin-top:24px;">
      <article class="project-card">
        <h3>Method</h3>
        <ul>
          <li>Ply orientation treated as a stochastic variable.</li>
          <li>Classical laminate theory used to calculate effective stiffness.</li>
          <li>Tsai-Wu criterion used to generate failure envelopes.</li>
          <li>Monte Carlo simulation and MVFOSM compared.</li>
          <li>Finite-element-based Monte Carlo analysis used for validation.</li>
        </ul>
      </article>

      <article class="project-card">
        <h3>Key Outcome</h3>
        <p>
          Increased ply-angle uncertainty broadens stiffness and failure predictions and can
          change the apparent probability of failure. The framework visualizes this uncertainty
          so inspection results can be interpreted in terms of structural performance.
        </p>
        <div class="tag-row">
          <span>Tsai-Wu</span>
          <span>Monte Carlo</span>
          <span>MVFOSM</span>
          <span>Probability of Failure</span>
        </div>
      </article>
    </div>

    <div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; margin-top:36px;">
      <a class="hero-link secondary" href="{{ '/research/' | relative_url }}">← Back to Research Projects</a>
      <span style="color:var(--cyan); font-weight:900;">Research Project 1 of 3</span>
      <a class="hero-link primary" href="{{ '/research/l-shaped-delamination/' | relative_url }}">Project 2 →</a>
    </div>

  </div>
</section>
