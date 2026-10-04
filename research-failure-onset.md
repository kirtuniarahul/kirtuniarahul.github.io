---
layout: default
title: "Research Project 1 — Failure Onset"
permalink: /research/failure-onset/
description: "Failure onset analysis of composite laminates with uncertainty in ply orientation."
---

<style>
/* =========================================================
   FAILURE ONSET — APPLE-STYLE SCROLL STORY
   Everything here is page-specific, so you do not have to
   modify your global style.css for this research page.
   ========================================================= */

.failure-story {
  --story-cyan: #28d7ff;
  --story-blue: #4187ff;
  --story-violet: #8d5cff;
  --story-panel: rgba(11, 27, 43, 0.88);
  --story-line: rgba(255,255,255,.10);
}

.failure-story .story-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin: 0 0 28px;
}

.failure-story .story-tracker {
  color: var(--story-cyan);
  font-size: .78rem;
  font-weight: 900;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.failure-story .back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 13px;
  border: 1px solid var(--story-line);
  border-radius: 999px;
  text-decoration: none;
  color: #d8e8f5;
  background: rgba(255,255,255,.035);
  transition: .2s ease;
}

.failure-story .back-link:hover {
  color: #fff;
  border-color: rgba(40,215,255,.35);
  transform: translateY(-1px);
}

.failure-story .story-summary {
  max-width: 920px;
  margin: 0 auto 72px;
  text-align: center;
}

.failure-story .story-summary h2 {
  margin: 0 0 16px;
  font-size: clamp(2rem, 4vw, 3.7rem);
  line-height: 1.05;
  letter-spacing: -.035em;
}

.failure-story .story-summary p {
  color: var(--muted);
  font-size: 1.06rem;
  margin: 0 auto;
  max-width: 800px;
}

/* Main Apple-like scrolling composition */
.failure-story .scroll-story {
  display: grid;
  grid-template-columns: minmax(280px, .78fr) minmax(420px, 1.22fr);
  gap: clamp(36px, 7vw, 92px);
  align-items: start;
  position: relative;
}

/* The images stay pinned while text scrolls */
.failure-story .visual-stage {
  position: sticky;
  top: 118px;
  height: calc(100vh - 150px);
  min-height: 520px;
  display: grid;
  place-items: center;
}

/* Each visual set occupies the same pinned stage */
.failure-story .visual-group {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: scale(.93);
  filter: blur(7px);
  pointer-events: none;
  transition:
    opacity .65s cubic-bezier(.2,.8,.2,1),
    transform .65s cubic-bezier(.2,.8,.2,1),
    filter .65s ease;
}

.failure-story .visual-group.active {
  opacity: 1;
  transform: scale(var(--story-scale, 1.04));
  filter: blur(0);
}

/* Controlled image sizes — not oversized */
.failure-story .media-single {
  width: min(100%, 630px);
}

.failure-story .media-grid-four {
  width: min(100%, 690px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.failure-story .media-grid-three {
  width: min(100%, 700px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.failure-story figure {
  margin: 0;
  background: linear-gradient(180deg, rgba(17,38,57,.94), rgba(7,19,31,.96));
  border: 1px solid var(--story-line);
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0 24px 70px rgba(0,0,0,.30);
  overflow: hidden;
}

.failure-story figure img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 340px;
  object-fit: contain;
  background: #f7f9fb;
  border-radius: 10px;
}

.failure-story .media-grid-four figure img {
  max-height: 230px;
}

.failure-story .media-grid-three figure img {
  max-height: 215px;
}

.failure-story figcaption {
  padding: 9px 3px 2px;
  color: #adc0d0;
  font-size: .76rem;
  line-height: 1.35;
}

/* Text steps create enough vertical travel for the animation */
.failure-story .story-steps {
  display: block;
}

.failure-story .story-step {
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: .34;
  transition: opacity .35s ease, transform .35s ease;
  transform: translateY(18px);
}

.failure-story .story-step.active {
  opacity: 1;
  transform: translateY(0);
}

.failure-story .step-number {
  color: var(--story-cyan);
  font-size: .74rem;
  font-weight: 900;
  letter-spacing: .15em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.failure-story .story-step h3 {
  margin: 0 0 14px;
  font-size: clamp(1.8rem, 3.5vw, 3.1rem);
  line-height: 1.08;
  letter-spacing: -.03em;
}

.failure-story .story-step p {
  color: var(--muted);
  font-size: 1.03rem;
  margin: 0;
}

.failure-story .story-step .mini-note {
  margin-top: 18px;
  padding: 13px 15px;
  border-left: 2px solid var(--story-cyan);
  background: rgba(40,215,255,.045);
  color: #bfd1df;
  border-radius: 0 10px 10px 0;
  font-size: .9rem;
}

/* Closing summary from slide 27 */
.failure-story .conclusion-strip {
  margin-top: 60px;
  padding: 28px;
  border: 1px solid var(--story-line);
  border-radius: 20px;
  background:
    radial-gradient(circle at 10% 20%, rgba(40,215,255,.08), transparent 28%),
    radial-gradient(circle at 90% 0%, rgba(141,92,255,.08), transparent 30%),
    rgba(10,25,40,.84);
}

.failure-story .conclusion-strip h3 {
  margin-top: 0;
}

.failure-story .conclusion-strip ul {
  margin-bottom: 0;
  color: var(--muted);
}

.failure-story .project-nav {
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
}

.failure-story .project-nav .current {
  color: var(--story-cyan);
  font-weight: 900;
}

/* Mobile: no sticky overlap; content becomes normal stacked reading */
@media (max-width: 900px) {
  .failure-story .scroll-story {
    grid-template-columns: 1fr;
  }

  .failure-story .visual-stage {
    position: relative;
    top: auto;
    height: auto;
    min-height: 0;
    display: block;
  }

  .failure-story .visual-group {
    position: relative;
    inset: auto;
    opacity: 1;
    transform: none !important;
    filter: none;
    margin: 20px 0 36px;
    display: none;
  }

  .failure-story .visual-group.mobile-show {
    display: grid;
  }

  .failure-story .story-step {
    min-height: auto;
    opacity: 1;
    transform: none;
    padding: 36px 0 10px;
  }

  .failure-story .media-grid-three {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 620px) {
  .failure-story .media-grid-four {
    grid-template-columns: 1fr;
  }
}
</style>


<section class="page-hero">
  <div class="shell">
    <div class="failure-story">

      <div class="story-topbar">
        <span class="story-tracker">Research Project 1 of 3</span>
        <a class="back-link" href="{{ '/research/' | relative_url }}">← Back to Research Projects</a>
      </div>

      <p class="eyebrow">FAILURE ONSET</p>
      <h1>Laminates with Uncertainty in Determining Ply Orientation</h1>
      <p>
        Statistical and finite-element-based evaluation of how uncertainty in measured ply orientation
        changes stiffness and failure prediction in composite laminates.
      </p>

    </div>
  </div>
</section>


<section class="page-content failure-story">
  <div class="shell">

    <div class="story-summary">
      <p class="eyebrow">CONCLUSION · SLIDE 27</p>
      <h2>From UT measurement uncertainty to probability-based failure prediction.</h2>
      <p>
        The study links uncertainty in ply-orientation measurement with laminate performance,
        compares statistical and finite-element failure predictions, and visualizes the resulting
        stiffness and Tsai-Wu failure uncertainty using cumulative density functions.
      </p>
    </div>


    <div class="scroll-story">

      <!-- =====================================================
           PINNED VISUAL STAGE
           ===================================================== -->
      <div class="visual-stage">

        <!-- POINT 1: FIRST IMAGE -->
        <div class="visual-group active mobile-show" data-visual="1">
          <div class="media-single">
            <figure>
              <img
                src="{{ '/assets/images/research/failure-onset/ut-cscan.png' | relative_url }}"
                alt="Ultrasound C-scan used for ply-orientation measurement">
              <figcaption>
                Ultrasound C-scan of the experimental weave used to quantify ply orientation
                and characterize measurement uncertainty.
              </figcaption>
            </figure>
          </div>
        </div>

        <!-- POINT 2: SECOND + THIRD ROW IMAGES FROM SLIDE 27 -->
        <div class="visual-group" data-visual="2">
          <div class="media-grid-four">

            <figure>
              <img
                src="{{ '/assets/images/research/failure-onset/stiffness-2deg.png' | relative_url }}"
                alt="Effective stiffness distribution at lower ply-angle uncertainty">
              <figcaption>
                Effective longitudinal stiffness distribution for 2° ply-orientation standard deviation;
                the predicted range remains comparatively narrow.
              </figcaption>
            </figure>

            <figure>
              <img
                src="{{ '/assets/images/research/failure-onset/stiffness-10deg.png' | relative_url }}"
                alt="Effective stiffness distribution at higher ply-angle uncertainty">
              <figcaption>
                Effective longitudinal stiffness distribution for 10° ply-orientation standard deviation;
                the uncertainty range broadens substantially.
              </figcaption>
            </figure>

            <figure>
              <img
                src="{{ '/assets/images/research/failure-onset/envelope-6ply.png' | relative_url }}"
                alt="Failure envelope sensitivity for six-lamina composite">
              <figcaption>
                Failure-envelope sensitivity for the 6-lamina laminate, showing a broader
                transition between safe and failed states.
              </figcaption>
            </figure>

            <figure>
              <img
                src="{{ '/assets/images/research/failure-onset/envelope-18ply.png' | relative_url }}"
                alt="Failure envelope sensitivity for eighteen-lamina composite">
              <figcaption>
                Failure-envelope sensitivity for the 18-lamina laminate; increasing ply count
                reduces the width of the safe-to-failure transition.
              </figcaption>
            </figure>

          </div>
        </div>

        <!-- POINT 3: FOURTH ROW IMAGES FROM SLIDE 27 -->
        <div class="visual-group" data-visual="3">
          <div class="media-grid-three">

            <figure>
              <img
                src="{{ '/assets/images/research/failure-onset/cdf-fe-monte-carlo.png' | relative_url }}"
                alt="Finite element Monte Carlo CDF failure envelope">
              <figcaption>
                Finite-element-based Monte Carlo simulation of the probabilistic failure envelope.
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
                Computationally efficient MVFOSM prediction used for comparison with Monte Carlo
                and finite-element results.
              </figcaption>
            </figure>

          </div>
        </div>

      </div>


      <!-- =====================================================
           SCROLLING CONCLUSION POINTS
           ===================================================== -->
      <div class="story-steps">

        <article class="story-step active" data-step="1">
          <span class="step-number">01 · UT uncertainty</span>
          <h3>Statistical failure-envelope analysis of ply-orientation uncertainty.</h3>
          <p>
            Ultrasound-derived ply-orientation measurements were treated as uncertain inputs,
            allowing the effect of inspection variability on laminate performance and failure
            decisions to be quantified statistically.
          </p>
          <div class="mini-note">
            As you scroll, the C-scan starts large and gradually contracts into the technical
            figure layout before the next result set appears.
          </div>
        </article>


        <article class="story-step" data-step="2">
          <span class="step-number">02 · Predictive comparison</span>
          <h3>Failure prediction was evaluated across uncertainty level and laminate configuration.</h3>
          <p>
            The work compares the sensitivity of effective stiffness and the failure envelope
            as ply-orientation uncertainty changes. Greater angle uncertainty produces a much
            wider stiffness range, while increasing the number of laminas reduces the width of
            the transition from safe to failed states.
          </p>
          <div class="mini-note">
            This section uses the second and third rows of images from the conclusion slide:
            the two stiffness distributions and the 6- versus 18-lamina failure envelopes.
          </div>
        </article>


        <article class="story-step" data-step="3">
          <span class="step-number">03 · CDF visualization</span>
          <h3>Finite element, Monte Carlo, and MVFOSM predictions were compared through CDF failure envelopes.</h3>
          <p>
            The cumulative-density-function representation provides a visual probability-of-failure
            map rather than a single deterministic boundary. Finite-element Monte Carlo,
            laminate-theory Monte Carlo, and MVFOSM results can therefore be compared directly.
          </p>
          <div class="mini-note">
            The three final images are the fourth-row comparison from the conclusion slide.
          </div>
        </article>

      </div>
    </div>


    <div class="conclusion-strip">
      <p class="eyebrow">BRIEF SUMMARY</p>
      <h3>Research contribution</h3>
      <ul>
        <li>Statistical failure-envelope analysis of UT uncertainty in ply orientation.</li>
        <li>Predictive comparison of finite-element-based Tsai-Wu, Monte Carlo, and computationally efficient MVFOSM approaches.</li>
        <li>Quantification and visualization of effective stiffness and Tsai-Wu failure envelopes using the cumulative density function.</li>
      </ul>
    </div>


    <div class="project-nav">
      <a class="back-link" href="{{ '/research/' | relative_url }}">← Back to Research Projects</a>
      <span class="current">Research Project 1 of 3</span>
      <a class="back-link" href="{{ '/research/l-shaped-delamination/' | relative_url }}">Research Project 2 →</a>
    </div>

  </div>
</section>


<script>
/* ==========================================================
   APPLE-LIKE SCROLL BEHAVIOR
   - switches the active image set when a text step becomes active
   - starts the image set slightly oversized
   - gradually shrinks it as the user scrolls through the step
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const steps = Array.from(document.querySelectorAll('.failure-story .story-step'));
  const visuals = Array.from(document.querySelectorAll('.failure-story .visual-group'));

  if (!steps.length || !visuals.length) return;

  let activeStep = 1;

  function activate(stepNumber) {
    activeStep = Number(stepNumber);

    steps.forEach(step => {
      step.classList.toggle('active', Number(step.dataset.step) === activeStep);
    });

    visuals.forEach(visual => {
      visual.classList.toggle('active', Number(visual.dataset.visual) === activeStep);
      visual.classList.toggle('mobile-show', Number(visual.dataset.visual) === activeStep);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visible.length) {
      activate(visible[0].target.dataset.step);
    }
  }, {
    root: null,
    threshold: [0.25, 0.45, 0.60, 0.75],
    rootMargin: '-15% 0px -20% 0px'
  });

  steps.forEach(step => observer.observe(step));

  function updateScale() {
    if (window.innerWidth <= 900) return;

    const active = steps.find(step => Number(step.dataset.step) === activeStep);
    const visual = visuals.find(v => Number(v.dataset.visual) === activeStep);
    if (!active || !visual) return;

    const rect = active.getBoundingClientRect();
    const viewport = window.innerHeight;

    /* progress: 0 at the beginning of the step, 1 near its end */
    const raw = (viewport * 0.72 - rect.top) / Math.max(rect.height * 0.82, 1);
    const progress = Math.min(1, Math.max(0, raw));

    /* Apple-like zoom-out: 1.10 -> 0.90 */
    const scale = 1.10 - progress * 0.20;

    visual.style.setProperty('--story-scale', scale.toFixed(3));
  }

  window.addEventListener('scroll', updateScale, { passive: true });
  window.addEventListener('resize', updateScale, { passive: true });

  activate(1);
  updateScale();
});
</script>
