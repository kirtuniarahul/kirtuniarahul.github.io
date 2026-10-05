---
layout: default
title: "Research Project 1 — Failure Onset"
permalink: /research/failure-onset/
description: "Failure onset analysis of composite laminates with uncertainty in ply orientation."
---

<style>
.project-top-nav{display:flex;gap:10px;flex-wrap:wrap;margin-top:24px}.analysis-mode{display:inline-flex;align-items:center;gap:8px;margin-bottom:10px;padding:7px 12px;border-radius:999px;font-size:.73rem;font-weight:900;letter-spacing:.14em;text-transform:uppercase}.analysis-mode.uncertainty{color:var(--cyan);border:1px solid rgba(40,215,255,.30);background:rgba(40,215,255,.07)}.analysis-mode.probability{color:#d3b7ff;border:1px solid rgba(141,92,255,.35);background:rgba(141,92,255,.08)}.failure-story{margin-top:80px}.failure-story-intro{max-width:900px;margin:0 auto 80px;text-align:center}.failure-story-intro h2{margin:10px 0 18px;font-size:clamp(2.2rem,4.6vw,4.5rem);line-height:1.04;letter-spacing:-.04em}.failure-story-intro p{max-width:790px;margin:auto;color:var(--muted);font-size:1.07rem;line-height:1.7}.failure-scroll-row{display:grid;grid-template-columns:minmax(440px,1.15fr) minmax(330px,.85fr);gap:clamp(42px,7vw,90px);align-items:center;margin-bottom:130px}.failure-images{display:flex;flex-direction:column;gap:26px}.failure-figure{margin:0;padding:14px;border:1px solid rgba(255,255,255,.11);border-radius:20px;background:linear-gradient(180deg,rgba(18,38,57,.96),rgba(7,19,31,.97));box-shadow:0 28px 80px rgba(0,0,0,.33);transform-origin:center;transition:transform .08s linear,border-color .25s ease}.failure-figure:hover{border-color:rgba(40,215,255,.38)}.failure-figure img{display:block;width:100%;height:auto;max-height:620px;object-fit:contain;border-radius:13px;background:#f8fafc}.failure-figure figcaption{padding:12px 4px 3px;color:#aebfce;font-size:.84rem;line-height:1.5}.failure-image-pair{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}.failure-image-three{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.failure-image-pair img{max-height:430px}.failure-image-three img{max-height:350px}.failure-copy{position:sticky;top:125px;padding-top:30px}.failure-copy .step-number{display:block;margin-bottom:10px;color:var(--cyan);font-size:.75rem;font-weight:900;letter-spacing:.15em;text-transform:uppercase}.failure-copy h2{margin:8px 0 18px;font-size:clamp(2rem,3.5vw,3.3rem);line-height:1.07;letter-spacing:-.035em}.failure-copy h3{margin-top:26px;margin-bottom:9px}.failure-copy p,.failure-copy li{color:var(--muted);font-size:1.02rem;line-height:1.72}.failure-copy ul{padding-left:20px}.failure-note{margin-top:25px;padding:17px 19px;border-left:3px solid var(--cyan);border-radius:0 12px 12px 0;background:rgba(40,215,255,.055);color:#c3d5e2;line-height:1.6}.failure-note.probability-note{border-left-color:var(--violet);background:rgba(141,92,255,.06)}.failure-conclusion{margin-top:60px;padding:30px;border:1px solid rgba(255,255,255,.11);border-radius:22px;background:radial-gradient(circle at 10% 20%,rgba(40,215,255,.08),transparent 28%),radial-gradient(circle at 90% 10%,rgba(141,92,255,.09),transparent 30%),rgba(10,25,40,.88)}.failure-conclusion h2{margin-top:8px}.failure-conclusion li{color:var(--muted);margin-bottom:9px}.research-project-nav{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:42px}.research-project-nav .project-counter{color:var(--cyan);font-weight:900}@media(max-width:900px){.failure-scroll-row{grid-template-columns:1fr;gap:30px;margin-bottom:80px}.failure-copy{position:static;padding-top:0}.failure-image-pair,.failure-image-three{grid-template-columns:1fr}.failure-figure{transform:none!important}.failure-figure img,.failure-image-pair img,.failure-image-three img{max-height:none}}
</style>

<section class="page-hero">
  <div class="shell">
    <p class="eyebrow">RESEARCH PROJECT 1 OF 3</p>
    <h1>Failure Onset</h1>
    <p>Laminates with Uncertainty in Determining Ply Orientation</p>
    <div class="project-top-nav">
      <a class="hero-link secondary" href="{{ '/research/' | relative_url }}">← Back to Research Projects</a>
      <a class="hero-link secondary" href="{{ '/research/l-shaped-delamination/' | relative_url }}">Research Project 2 →</a>
    </div>
  </div>
</section>

<section class="page-content">
  <div class="shell">
    <div class="project-card" style="margin-bottom:24px;">
      <p class="eyebrow">OVERVIEW</p>
      <h2>Quantifying uncertainty in composite failure prediction</h2>
      <p>The strength and stiffness of a composite laminate depend strongly on ply orientation. However, manufacturing variation and uncertainty in nondestructive inspection can cause the measured orientation to differ from the designed fiber direction.</p>
      <p>This research investigated how ply-orientation uncertainty affects effective stiffness, and the resulting probability of failure.</p>
    </div>

    <div class="project-grid">
      <article class="project-card">
        <span class="analysis-mode uncertainty">Orientation Uncertainty</span>
        <h3>Statistical Modeling</h3>
        <ul>
          <li>Ply orientation was treated as a stochastic variable.</li>
          <li>Classical laminate theory was used to calculate effective laminate properties.</li>
          <li>Tsai-Wu failure criteria were used to generate laminate failure envelopes.</li>
        </ul>
      </article>

      <article class="project-card">
        <h3>Predictive Methods</h3>
        <ul>
          <li>Monte Carlo simulation</li>
          <li>Mean Value First Order Second Moment method (MVFOSM)</li>
          <li>Finite-element-based Monte Carlo analysis</li>
          <li>Cumulative density functions for probability-of-failure visualization</li>
        </ul>
      </article>

      <article class="project-card">
        <span class="analysis-mode probability">Probability of Failure</span>
        <h3>Inspection to Structural Decision</h3>
        <p>The goal was not only to predict a single failure load, but to show how uncertainty in orientation measurement changes the probability that a laminate will fail under a given loading condition.</p>
      </article>
    </div>

    <section class="failure-story">
      <div class="failure-story-intro">
        <p class="eyebrow">METHOD</p>
        <h2>From orientation uncertainty to probability-based failure prediction.</h2>
        <p>The study connects uncertainty in measured ply orientation with laminate stiffness and structural failure prediction, then visualizes that uncertainty through probabilistic failure envelopes.</p>
      </div>

      <div class="failure-scroll-row">
        <div class="failure-images">
          <figure class="failure-figure">
            <img src="{{ '/assets/images/research/failure-onset/ut-cscan.png' | relative_url }}" alt="Ultrasound C-scan used for ply orientation measurement">
            <figcaption>Ultrasound C-scan used to quantify ply orientation and characterize measurement uncertainty.</figcaption>
          </figure>
        </div>

        <div class="failure-copy">
          <span class="analysis-mode uncertainty">Orientation Uncertainty</span>
          <span class="step-number">01 · UT MEASUREMENT</span>
          <h2>Ply-orientation uncertainty was treated as a structural input.</h2>
          <p>The measured orientation of the composite plies can vary because of manufacturing misalignment and inspection uncertainty. Rather than treating the measured orientation as exact, this study represented it statistically.</p>
          <p>The resulting variability was propagated through the laminate model to determine how uncertainty in fiber orientation influences stiffness and failure prediction.</p>
          <div class="failure-note">The key idea is simple: <strong>uncertainty in inspection should lead to uncertainty in structural prediction.</strong></div>
        </div>
      </div>

      <div class="failure-scroll-row">
        <div class="failure-images">
          <div class="failure-image-pair">
            <figure class="failure-figure">
              <img src="{{ '/assets/images/research/failure-onset/stiffness-2deg.png' | relative_url }}" alt="Effective stiffness distribution for two degree orientation uncertainty">
              <figcaption>Effective stiffness distribution for a standard deviation of 2° in ply orientation.</figcaption>
            </figure>
            <figure class="failure-figure">
              <img src="{{ '/assets/images/research/failure-onset/stiffness-10deg.png' | relative_url }}" alt="Effective stiffness distribution for ten degree orientation uncertainty">
              <figcaption>Effective stiffness distribution for a standard deviation of 10° in ply orientation, showing a much wider response range.</figcaption>
            </figure>
            <figure class="failure-figure">
              <img src="{{ '/assets/images/research/failure-onset/envelope-6ply.png' | relative_url }}" alt="Failure envelope sensitivity for six lamina laminate">
              <figcaption>Failure-envelope sensitivity for a 6-lamina laminate.</figcaption>
            </figure>
            <figure class="failure-figure">
              <img src="{{ '/assets/images/research/failure-onset/envelope-18ply.png' | relative_url }}" alt="Failure envelope sensitivity for eighteen lamina laminate">
              <figcaption>Failure-envelope sensitivity for an 18-lamina laminate.</figcaption>
            </figure>
          </div>
        </div>

        <div class="failure-copy">
          <span class="step-number">02 · STIFFNESS & FAILURE SENSITIVITY</span>
          <h2>Greater orientation uncertainty produces a wider range of predicted behavior.</h2>
          <p>For a quasi-isotropic laminate, increasing the uncertainty in ply angle substantially widened the predicted range of effective stiffness.</p>
          <p>The same uncertainty also affected the failure envelope. As the uncertainty increased, the transition between safe and failed regions (Blue to Red) became narrower.</p>
          <h3>Main observation</h3>
          <p>A small inspection uncertainty can still produce a meaningful variation in predicted structural response, while larger uncertainty can dramatically broaden the range of possible stiffness and failure loads.</p>
          <div class="failure-note">This is why ply-orientation uncertainty cannot simply be ignored when making structural integrity decisions.</div>
        </div>
      </div>

      <div class="failure-scroll-row">
        <div class="failure-images">
          <div class="failure-image-three">
            <figure class="failure-figure">
              <img src="{{ '/assets/images/research/failure-onset/cdf-fe-monte-carlo.png' | relative_url }}" alt="Finite element Monte Carlo cumulative density failure envelope">
              <figcaption>Finite-element-based Monte Carlo simulation of the probabilistic failure envelope.</figcaption>
            </figure>
            <figure class="failure-figure">
              <img src="{{ '/assets/images/research/failure-onset/cdf-clt-monte-carlo.png' | relative_url }}" alt="Classical laminate theory Monte Carlo cumulative density failure envelope">
              <figcaption>Classical laminate theory Monte Carlo prediction of the CDF failure envelope.</figcaption>
            </figure>
            <figure class="failure-figure">
              <img src="{{ '/assets/images/research/failure-onset/cdf-mvfosm.png' | relative_url }}" alt="MVFOSM cumulative density failure envelope">
              <figcaption>Computationally efficient MVFOSM prediction used for comparison with Monte Carlo and finite-element results.</figcaption>
            </figure>
          </div>
        </div>

        <div class="failure-copy">
          <span class="analysis-mode probability">Probability of Failure</span>
          <span class="step-number">03 · CDF FAILURE ENVELOPE</span>
          <h2>Failure was visualized as a probability instead of a single deterministic boundary.</h2>
          <p>Monte Carlo simulation was used to repeatedly sample uncertain ply orientations and generate a distribution of failure envelopes.</p>
          <p>The cumulative density function converted this information into a probability-of-failure map. The results were then compared with MVFOSM and finite-element-based Monte Carlo simulation.</p>
          <h3>Why this matters</h3>
          <p>A deterministic failure envelope only identifies a boundary between safe and failed conditions. The probabilistic envelope instead shows how confident that decision is when the measured ply orientation is uncertain.</p>
          <div class="failure-note probability-note">This makes the model more useful for inspection decisions, because the result can be expressed as a <strong>likelihood of failure</strong> rather than only “safe” or “failed.”</div>
        </div>
      </div>

      <div class="failure-conclusion">
        <p class="eyebrow">RESEARCH SUMMARY</p>
        <h2>Key contribution</h2>
        <ul>
          <li>Developed a statistical failure-envelope framework for uncertainty in ply-orientation measurement.</li>
          <li>Evaluated the influence of orientation uncertainty on effective laminate stiffness and Tsai-Wu failure prediction.</li>
          <li>Compared classical laminate theory Monte Carlo, finite-element Monte Carlo, and MVFOSM approaches.</li>
          <li>Used cumulative density functions to visualize stiffness uncertainty and probability of failure.</li>
          <li>Demonstrated how inspection uncertainty can influence decisions about whether a composite structure is safe for continued operation.</li>
        </ul>
      </div>
    </section>

    <div class="research-project-nav">
      <a class="hero-link secondary" href="{{ '/research/' | relative_url }}">← Back to Research Projects</a>
      <span class="project-counter">Research Project 1 of 3</span>
      <a class="hero-link primary" href="{{ '/research/l-shaped-delamination/' | relative_url }}">Research Project 2 →</a>
    </div>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function () {
  const figures = Array.from(document.querySelectorAll('.failure-figure'));
  function updateFigures() {
    if (window.innerWidth <= 900) return;
    const viewportHeight = window.innerHeight;
    figures.forEach(figure => {
      const rect = figure.getBoundingClientRect();
      const start = viewportHeight * .95;
      const end = -rect.height * .20;
      let progress = (start - rect.top) / Math.max(start - end, 1);
      progress = Math.min(1, Math.max(0, progress));
      const scale = 1.055 - progress * .055;
      figure.style.transform = `scale(${scale.toFixed(3)})`;
    });
  }
  window.addEventListener('scroll', updateFigures, { passive: true });
  window.addEventListener('resize', updateFigures, { passive: true });
  updateFigures();
});
</script>
