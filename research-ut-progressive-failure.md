---
layout: default
title: "Research Project 3 — Progressive Failure"
permalink: /research/ut-progressive-failure/
description: "Progressive failure analysis of drilled-hole laminates with UT-informed delamination."
---

<section class="page-hero">
  <div class="shell">
    <p class="eyebrow">RESEARCH PROJECT 3 OF 3</p>
    <h1>Progressive Failure</h1>
    <p>Drilled-Hole Laminates with UT-Informed Delamination</p>

    <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:24px;">
      <a class="hero-link secondary" href="{{ '/research/' | relative_url }}">← Back to Research Projects</a>
      <a class="hero-link secondary" href="{{ '/research/l-shaped-delamination/' | relative_url }}">← Project 2</a>
    </div>
  </div>
</section>

<section class="page-content">
  <div class="shell">

    <div class="project-card" style="margin-bottom:24px;">
      <p class="eyebrow">OVERVIEW</p>
      <h2>Inspection-to-prediction framework for drilling-induced damage</h2>
      <p>
        Drilling can introduce delamination around holes in composite laminates. This research
        uses ultrasound inspection to quantify that damage and translate it into a finite element
        representation for progressive failure prediction.
      </p>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:16px; margin:28px 0;">
      <figure style="margin:0;">
        <img src="{{ '/assets/images/research/drilled-hole-model.png' | relative_url }}"
             alt="Finite element model of drilled-hole laminate"
             style="width:100%; height:220px; object-fit:contain; background:#06111d; border-radius:14px; padding:8px;">
        <figcaption style="color:var(--muted); font-size:.82rem; margin-top:8px;">
          Mesoscale finite element model.
        </figcaption>
      </figure>

      <figure style="margin:0;">
        <img src="{{ '/assets/images/research/drilled-hole-damage.png' | relative_url }}"
             alt="Drilling-induced damage identification"
             style="width:100%; height:220px; object-fit:contain; background:#06111d; border-radius:14px; padding:8px;">
        <figcaption style="color:var(--muted); font-size:.82rem; margin-top:8px;">
          UT-based drilling-damage identification.
        </figcaption>
      </figure>

      <figure style="margin:0;">
        <img src="{{ '/assets/images/research/drilled-hole-framework.png' | relative_url }}"
             alt="Inspection-to-prediction framework"
             style="width:100%; height:220px; object-fit:contain; background:#06111d; border-radius:14px; padding:8px;">
        <figcaption style="color:var(--muted); font-size:.82rem; margin-top:8px;">
          NDT-informed inspection-to-prediction framework.
        </figcaption>
      </figure>
    </div>

    <div class="project-grid">
      <article class="project-card">
        <h3>Method</h3>
        <ul>
          <li>Drilling-induced delamination identified using ultrasound inspection.</li>
          <li>Measured damage converted to an effective radius for modeling.</li>
          <li>Mesoscale Abaqus/Explicit model used for open-hole loading.</li>
          <li>Progressive stiffness degradation used to represent damage evolution.</li>
        </ul>
      </article>

      <article class="project-card">
        <h3>Research Contribution</h3>
        <p>
          The framework connects measured damage directly to structural simulation, reducing the
          need to reproduce the complete drilling process before evaluating the residual structural
          performance of the laminate.
        </p>
        <div class="tag-row">
          <span>UT</span>
          <span>Open-Hole Tension</span>
          <span>Abaqus/Explicit</span>
          <span>Progressive Damage</span>
        </div>
      </article>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:18px; margin-top:28px;">
      <video controls muted preload="metadata"
             style="width:100%; max-height:300px; background:#02070d; border-radius:14px;">
        <source src="{{ '/assets/videos/research/drilled-hole-overview.mp4' | relative_url }}" type="video/mp4">
      </video>

      <video controls muted preload="metadata"
             style="width:100%; max-height:300px; background:#02070d; border-radius:14px;">
        <source src="{{ '/assets/videos/research/drilling-process.mov' | relative_url }}" type="video/quicktime">
      </video>

      <video controls muted preload="metadata"
             style="width:100%; max-height:300px; background:#02070d; border-radius:14px;">
        <source src="{{ '/assets/videos/research/drilled-hole-fea.mp4' | relative_url }}" type="video/mp4">
      </video>
    </div>

    <div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; margin-top:36px;">
      <a class="hero-link secondary" href="{{ '/research/l-shaped-delamination/' | relative_url }}">← Project 2</a>
      <span style="color:var(--cyan); font-weight:900;">Research Project 3 of 3</span>
      <a class="hero-link primary" href="{{ '/research/' | relative_url }}">Back to Research Projects</a>
    </div>

  </div>
</section>
