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

    
<style>
/* ===== Failure Onset conclusion scroll section ===== */

.failure-conclusion {
  margin-top: 64px;
  padding-top: 18px;
}

.failure-conclusion .conclusion-intro {
  max-width: 900px;
  margin: 0 auto 54px;
  text-align: center;
}

.failure-conclusion .conclusion-intro h2 {
  margin: 10px 0 16px;
  font-size: clamp(2.2rem, 4.5vw, 4.2rem);
  line-height: 1.05;
  letter-spacing: -.04em;
}

.failure-conclusion .conclusion-intro p {
  max-width: 800px;
  margin: 0 auto;
  color: var(--muted);
  font-size: 1.05rem;
}

/* Each result remains on the page.
   New images are added below instead of replacing earlier ones. */
.failure-result {
  margin: 0 auto 110px;
  max-width: 1120px;
}

.failure-result-copy {
  max-width: 820px;
  margin: 0 auto 28px;
}

.failure-result-copy .step-label {
  color: var(--cyan);
  font-size: .77rem;
  font-weight: 900;
  letter-spacing: .15em;
  text-transform: uppercase;
}

.failure-result-copy h3 {
  margin: 8px 0 12px;
  font-size: clamp(1.8rem, 3.2vw, 3rem);
  line-height: 1.08;
  letter-spacing: -.03em;
}

.failure-result-copy p {
  color: var(--muted);
  font-size: 1.02rem;
}

/* Large visual containers */
.failure-visual {
  width: min(100%, 1050px);
  margin: 0 auto;
  transform-origin: center top;
  transition: transform .08s linear;
}

.failure-visual.single {
  width: min(100%, 980px);
}

.failure-visual.grid-two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.failure-visual.grid-three {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.failure-visual figure {
  margin: 0;
  padding: 14px;
  border: 1px solid rgba(255,255,255,.11);
  border-radius: 20px;
  background:
    linear-gradient(180deg, rgba(18,38,57,.95), rgba(7,19,31,.97));
  box-shadow: 0 28px 80px rgba(0,0,0,.34);
}

.failure-visual img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 620px;
  object-fit: contain;
  background: #f8fafc;
  border-radius: 14px;
}

.failure-visual.grid-two img {
  max-height: 460px;
}

.failure-visual.grid-three img {
  max-height: 380px;
}

.failure-visual figcaption {
  padding: 12px 4px 2px;
  color: #adc0d0;
  font-size: .84rem;
  line-height: 1.45;
}

/* Apple-like zoom-out on scroll, but images never disappear */
.failure-result.reveal {
  opacity: .96;
}

@media (max-width: 900px) {
  .failure-result {
    margin-bottom: 72px;
  }

  .failure-visual.grid-two,
  .failure-visual.grid-three {
    grid-template-columns: 1fr;
  }

  .failure-visual {
    transform: none !important;
  }

  .failure-visual img,
  .failure-visual.grid-two img,
  .failure-visual.grid-three img {
    max-height: none;
  }
}
</style>


<section class="failure-conclusion">

  <div class="conclusion-intro">
    <p class="eyebrow">BRIEF SUMMARY · CONCLUSION</p>
    <h2>From ply-orientation uncertainty to probability-based failure prediction.</h2>
    <p>
      This research quantified how uncertainty in ply-orientation measurement influences
      composite stiffness and failure prediction. It combined statistical modeling,
      Tsai-Wu failure analysis, Monte Carlo simulation, MVFOSM, and finite-element validation,
      then visualized the resulting uncertainty using cumulative density functions.
    </p>
  </div>


  <!-- POINT 1 -->
  <article class="failure-result reveal">
    <div class="failure-result-copy">
      <span class="step-label">01 · UT uncertainty</span>
      <h3>Statistical failure-envelope analysis of ply-orientation uncertainty.</h3>
      <p>
        Ultrasound-derived ply-orientation measurements were treated as uncertain inputs.
        This allowed inspection variability to be connected directly to the predicted
        structural performance of the laminate.
      </p>
    </div>

    <div class="failure-visual single">
      <figure>
        <img
          src="{{ '/assets/images/research/failure-onset/ut-cscan.png' | relative_url }}"
          alt="Ultrasound C-scan used for ply-orientation measurement">
        <figcaption>
          Ultrasound C-scan used to quantify ply orientation and characterize measurement uncertainty.
        </figcaption>
      </figure>
    </div>
  </article>


  <!-- POINT 2 -->
  <article class="failure-result reveal">
    <div class="failure-result-copy">
      <span class="step-label">02 · Sensitivity of stiffness and failure envelope</span>
      <h3>Greater orientation uncertainty broadens the predicted response.</h3>
      <p>
        The analysis showed that increasing ply-angle uncertainty substantially increases
        the spread in effective stiffness. The failure-envelope transition also changes
        with laminate configuration, while increasing the number of laminas reduces the
        width of the transition from safe to failed states.
      </p>
    </div>

    <div class="failure-visual grid-two">
      <figure>
        <img
          src="{{ '/assets/images/research/failure-onset/stiffness-2deg.png' | relative_url }}"
          alt="Effective stiffness distribution for two degree uncertainty">
        <figcaption>
          Effective stiffness distribution for 2° ply-orientation standard deviation.
        </figcaption>
      </figure>

      <figure>
        <img
          src="{{ '/assets/images/research/failure-onset/stiffness-10deg.png' | relative_url }}"
          alt="Effective stiffness distribution for ten degree uncertainty">
        <figcaption>
          Effective stiffness distribution for 10° ply-orientation standard deviation,
          showing a substantially wider response range.
        </figcaption>
      </figure>

      <figure>
        <img
          src="{{ '/assets/images/research/failure-onset/envelope-6ply.png' | relative_url }}"
          alt="Failure envelope sensitivity for six lamina laminate">
        <figcaption>
          Failure-envelope sensitivity for the 6-lamina laminate.
        </figcaption>
      </figure>

      <figure>
        <img
          src="{{ '/assets/images/research/failure-onset/envelope-18ply.png' | relative_url }}"
          alt="Failure envelope sensitivity for eighteen lamina laminate">
        <figcaption>
          Failure-envelope sensitivity for the 18-lamina laminate; the safe-to-failure
          transition becomes narrower as ply count increases.
        </figcaption>
      </figure>
    </div>
  </article>


  <!-- POINT 3 -->
  <article class="failure-result reveal">
    <div class="failure-result-copy">
      <span class="step-label">03 · CDF failure-envelope comparison</span>
      <h3>Probability of failure was visualized and compared across three prediction approaches.</h3>
      <p>
        The cumulative-density-function representation converts the failure envelope from
        a single deterministic boundary into a probability map. Finite-element Monte Carlo,
        laminate-theory Monte Carlo, and MVFOSM predictions can therefore be compared directly.
      </p>
    </div>

    <div class="failure-visual grid-three">
      <figure>
        <img
          src="{{ '/assets/images/research/failure-onset/cdf-fe-monte-carlo.png' | relative_url }}"
          alt="Finite element Monte Carlo CDF failure envelope">
        <figcaption>
          Finite-element-based Monte Carlo prediction of the probabilistic failure envelope.
        </figcaption>
      </figure>

      <figure>
        <img
          src="{{ '/assets/images/research/failure-onset/cdf-clt-monte-carlo.png' | relative_url }}"
          alt="Classical laminate theory Monte Carlo CDF failure envelope">
        <figcaption>
          Classical-laminate-theory Monte Carlo prediction of the CDF failure envelope.
        </figcaption>
      </figure>

      <figure>
        <img
          src="{{ '/assets/images/research/failure-onset/cdf-mvfosm.png' | relative_url }}"
          alt="MVFOSM CDF failure envelope">
        <figcaption>
          Computationally efficient MVFOSM prediction used for comparison with the
          Monte Carlo and finite-element results.
        </figcaption>
      </figure>
    </div>
  </article>

</section>


<script>
/* Apple-like scale-down while scrolling.
   Figures stay visible and remain in normal page flow. */
document.addEventListener('DOMContentLoaded', function () {
  const results = Array.from(document.querySelectorAll('.failure-result'));

  function updateFailureVisuals() {
    if (window.innerWidth <= 900) return;

    const viewport = window.innerHeight;

    results.forEach(result => {
      const visual = result.querySelector('.failure-visual');
      if (!visual) return;

      const rect = result.getBoundingClientRect();

      /*
        When a section enters, image is about 1.08x.
        As the user scrolls through the section, it settles to 0.94x.
        It never fades out or gets removed.
      */
      const start = viewport * 0.90;
      const end = -rect.height * 0.10;
      const progress = Math.min(
        1,
        Math.max(0, (start - rect.top) / Math.max(start - end, 1))
      );

      const scale = 1.08 - (progress * 0.14);
      visual.style.transform = `scale(${scale.toFixed(3)})`;
    });
  }

  window.addEventListener('scroll', updateFailureVisuals, { passive: true });
  window.addEventListener('resize', updateFailureVisuals, { passive: true });
  updateFailureVisuals();
});
</script>


<div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; margin-top:36px;">
      <a class="hero-link secondary" href="{{ '/research/' | relative_url }}">← Back to Research Projects</a>
      <span style="color:var(--cyan); font-weight:900;">Research Project 1 of 3</span>
      <a class="hero-link primary" href="{{ '/research/l-shaped-delamination/' | relative_url }}">Project 2 →</a>
    </div>

  </div>
</section>
