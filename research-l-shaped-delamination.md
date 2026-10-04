---
layout: default
title: "Research Project 2 — Matrix Failure & Delamination"
permalink: /research/l-shaped-delamination/
description: "Matrix failure and delamination analysis of L-shaped laminates with inter-ply angle difference."
---

<section class="page-hero">
  <div class="shell">
    <p class="eyebrow">RESEARCH PROJECT 2 OF 3</p>
    <h1>Matrix Failure & Delamination</h1>
    <p>L-Shaped Laminates with Inter-Ply Angle Difference</p>

    <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:24px;">
      <a class="hero-link secondary" href="{{ '/research/' | relative_url }}">← Back to Research Projects</a>
      <a class="hero-link secondary" href="{{ '/research/failure-onset/' | relative_url }}">← Project 1</a>
      <a class="hero-link secondary" href="{{ '/research/ut-progressive-failure/' | relative_url }}">Project 3 →</a>
    </div>
  </div>
</section>

<section class="page-content">
  <div class="shell">

    <div class="project-card" style="margin-bottom:24px;">
      <p class="eyebrow">OVERVIEW</p>
      <h2>Curved composite structures under static and fatigue loading</h2>
      <p>
        L-shaped composite brackets develop through-thickness stresses in the curved region.
        This research investigates how inter-ply angle difference affects matrix failure,
        delamination onset, stiffness, and fatigue life.
      </p>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:16px; margin:28px 0;">
      <figure style="margin:0;">
        <img src="{{ '/assets/images/research/lshape-static-response.png' | relative_url }}"
             alt="Static response of L-shaped laminates"
             style="width:100%; height:220px; object-fit:contain; background:#06111d; border-radius:14px; padding:8px;">
        <figcaption style="color:var(--muted); font-size:.82rem; margin-top:8px;">
          Static force–displacement and stiffness response.
        </figcaption>
      </figure>

      <figure style="margin:0;">
        <img src="{{ '/assets/images/research/lshape-delamination.png' | relative_url }}"
             alt="Delamination progression"
             style="width:100%; height:220px; object-fit:contain; background:#06111d; border-radius:14px; padding:8px;">
        <figcaption style="color:var(--muted); font-size:.82rem; margin-top:8px;">
          Delamination progression and critical stress regions.
        </figcaption>
      </figure>

      <figure style="margin:0;">
        <img src="{{ '/assets/images/research/lshape-xct.png' | relative_url }}"
             alt="XCT and microscopy damage verification"
             style="width:100%; height:220px; object-fit:contain; background:#06111d; border-radius:14px; padding:8px;">
        <figcaption style="color:var(--muted); font-size:.82rem; margin-top:8px;">
          XCT and microscopy-based verification.
        </figcaption>
      </figure>
    </div>

    <div class="project-grid">
      <article class="project-card">
        <h3>Experimental Program</h3>
        <ul>
          <li>26-ply T700/250F laminates.</li>
          <li>UD, helicoidal, quasi-isotropic, and cross-ply stacking sequences.</li>
          <li>Static four-point bending.</li>
          <li>Fatigue loading at multiple severity levels.</li>
          <li>Optical microscopy and X-ray CT for damage characterization.</li>
        </ul>
      </article>

      <article class="project-card">
        <h3>Finite Element Model</h3>
        <ul>
          <li>3D solid plies with cohesive interfaces.</li>
          <li>3D Hashin matrix-failure criterion.</li>
          <li>Traction–separation cohesive-zone formulation.</li>
          <li>Benzeggagh–Kenane mixed-mode damage evolution.</li>
          <li>Experimentally informed interlaminar tensile strength.</li>
        </ul>
      </article>
    </div>

    <div class="project-card" style="margin-top:24px;">
      <h3>Key Findings</h3>
      <p>
        Unidirectional laminates showed the highest bending stiffness, while quasi-isotropic
        laminates showed strong resistance to delamination. The finite element predictions
        reproduced the force–displacement response and delamination onset with close agreement
        to the experiments.
      </p>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:18px; margin-top:28px;">
      <video controls muted preload="metadata"
             style="width:100%; max-height:320px; background:#02070d; border-radius:14px;">
        <source src="{{ '/assets/videos/research/lshape-overview.mp4' | relative_url }}" type="video/mp4">
      </video>

      <video controls muted preload="metadata"
             style="width:100%; max-height:320px; background:#02070d; border-radius:14px;">
        <source src="{{ '/assets/videos/research/lshape-fatigue.mp4' | relative_url }}" type="video/mp4">
      </video>
    </div>

    <div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; margin-top:36px;">
      <a class="hero-link secondary" href="{{ '/research/failure-onset/' | relative_url }}">← Project 1</a>
      <span style="color:var(--cyan); font-weight:900;">Research Project 2 of 3</span>
      <a class="hero-link primary" href="{{ '/research/ut-progressive-failure/' | relative_url }}">Project 3 →</a>
    </div>

  </div>
</section>
