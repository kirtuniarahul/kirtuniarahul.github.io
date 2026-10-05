---
layout: default
title: "Research Project 2 — Matrix Failure & Delamination"
permalink: /research/l-shaped-delamination/
description: "Matrix failure and delamination analysis of L-shaped composite laminates under static and fatigue loading."
---

<style>

/* =========================================================
   RESEARCH PROJECT 2
   MATRIX FAILURE & DELAMINATION
   ========================================================= */


/* -----------------------------
   HERO / TOP NAVIGATION
   ----------------------------- */

.project-top-nav {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 24px;
}


/* -----------------------------
   STATIC / FATIGUE LABELS
   ----------------------------- */

.loading-mode {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 10px;
  padding: 7px 12px;

  border-radius: 999px;

  font-size: .73rem;
  font-weight: 900;
  letter-spacing: .14em;
  text-transform: uppercase;
}


.loading-mode.static {
  color: var(--cyan);

  border: 1px solid rgba(40, 215, 255, .30);
  background: rgba(40, 215, 255, .07);
}


.loading-mode.fatigue {
  color: #d3b7ff;

  border: 1px solid rgba(141, 92, 255, .35);
  background: rgba(141, 92, 255, .08);
}


/* =========================================================
   CONCLUSION / SCROLL STORY
   ========================================================= */

.lshape-story {
  margin-top: 80px;
}


/* Main title before scroll section */

.lshape-story-intro {
  max-width: 900px;

  margin:
    0 auto
    80px;

  text-align: center;
}


.lshape-story-intro h2 {
  margin:
    10px 0
    18px;

  font-size:
    clamp(
      2.2rem,
      4.6vw,
      4.5rem
    );

  line-height: 1.04;

  letter-spacing: -.04em;
}


.lshape-story-intro p {
  max-width: 790px;

  margin: auto;

  color: var(--muted);

  font-size: 1.07rem;

  line-height: 1.7;
}


/* =========================================================
   LEFT IMAGE / RIGHT TEXT
   ========================================================= */

.lshape-scroll-row {
  display: grid;

  grid-template-columns:
    minmax(360px, .92fr)
    minmax(420px, 1.08fr);

  gap:
    clamp(
      38px,
      5vw,
      72px
    );

  align-items: center;

  margin-bottom: 130px;
}


/* --------------------------------
   LEFT SIDE
   -------------------------------- */

.lshape-images {
  display: flex;

  flex-direction: column;

  gap: 22px;
  align-self: center;
  align-items: center;
}


.lshape-figure {
  margin: 0 auto;

  padding: 12px;

  border:
    1px solid
    rgba(255,255,255,.11);

  border-radius: 18px;

  background:
    linear-gradient(
      180deg,
      rgba(18,38,57,.96),
      rgba(7,19,31,.97)
    );

  box-shadow:
    0 22px 60px
    rgba(0,0,0,.30);

  transform-origin: center;

  transition:
    transform .08s linear,
    border-color .25s ease;
}


.lshape-figure:hover {
  border-color:
    rgba(40,215,255,.38);
}

.lshape-figure figcaption {
  text-align: center;
}

/* Keep the three-result validation set stacked and compact */
.lshape-image-three .lshape-figure {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(125px, .42fr);
  gap: 12px;
  align-items: center;
  padding: 10px;
}

.lshape-image-three .lshape-figure figcaption {
  padding: 0;
  font-size: .78rem;
  line-height: 1.36;
}

/* Keep single-image rows visually proportional to the text ribbon */
.lshape-scroll-row .lshape-images > .lshape-figure:only-child {
  width: 52%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
}

.lshape-scroll-row .lshape-images > .lshape-figure:only-child img {
  max-height: 320px;
}


/* BIGGER IMAGES */

.lshape-figure img {
  display: block;

  width: 100%;

  height: auto;

  max-height: 520px;

  object-fit: contain;

  border-radius: 12px;

  background: #f8fafc;
}


/* image caption */

.lshape-figure figcaption {
  padding:
    10px 3px
    2px;

  color: #aebfce;

  font-size: .80rem;

  line-height: 1.42;
}


/* two images side by side */

.lshape-image-pair {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 16px;

  align-items: start;
}


/* three images */

.lshape-image-three {
  display: grid;

  grid-template-columns: 1fr;

  gap: 10px;

  align-items: start;

  width: min(100%, 520px);
  margin: 0 auto;
}


.lshape-image-pair img {
  max-height: 330px;
}


.lshape-image-three img {
  max-height: 180px;
}


/* --------------------------------
   RIGHT SIDE TEXT
   -------------------------------- */

.lshape-copy {
  position: sticky;

  top: 118px;

  padding-top: 8px;
}


.lshape-copy .step-number {
  display: block;

  margin-bottom: 10px;

  color: var(--cyan);

  font-size: .75rem;

  font-weight: 900;

  letter-spacing: .15em;

  text-transform: uppercase;
}


.lshape-copy h2 {
  margin:
    8px 0
    18px;

  font-size:
    clamp(
      2rem,
      3.5vw,
      3.3rem
    );

  line-height: 1.07;

  letter-spacing: -.035em;
}


.lshape-copy h3 {
  margin-top: 26px;

  margin-bottom: 9px;
}


.lshape-copy p,
.lshape-copy li {
  color: var(--muted);

  font-size: 1.02rem;

  line-height: 1.72;
}


.lshape-copy ul {
  padding-left: 20px;
}


/* Highlight box */

.lshape-note {
  margin-top: 25px;

  padding:
    17px
    19px;

  border-left:
    3px solid
    var(--cyan);

  border-radius:
    0 12px 12px 0;

  background:
    rgba(40,215,255,.055);

  color: #c3d5e2;

  line-height: 1.6;
}


/* Fatigue variation */

.lshape-note.fatigue-note {
  border-left-color:
    var(--violet);

  background:
    rgba(141,92,255,.06);
}


/* =========================================================
   VIDEOS
   ========================================================= */

.lshape-video-section {
  margin:
    40px 0
    110px;
}


.lshape-video-section h2 {
  margin-bottom: 25px;
}


.lshape-video-grid {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 24px;
}


.lshape-video-card {
  padding: 14px;

  border:
    1px solid
    rgba(255,255,255,.11);

  border-radius: 20px;

  background:
    rgba(10,25,40,.92);

  box-shadow:
    0 25px 70px
    rgba(0,0,0,.32);
}


.lshape-video {
  display: block;

  width: 100%;

  max-height: 430px;

  border-radius: 13px;

  background: #02070d;
}


.lshape-video-card h3 {
  margin:
    14px 3px
    5px;
}


.lshape-video-card p {
  margin:
    0 3px
    4px;

  color: var(--muted);

  font-size: .88rem;
}


/* =========================================================
   CONCLUSION BOX
   ========================================================= */

.lshape-conclusion {
  margin-top: 60px;

  padding: 30px;

  border:
    1px solid
    rgba(255,255,255,.11);

  border-radius: 22px;

  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(40,215,255,.08),
      transparent 28%
    ),
    radial-gradient(
      circle at 90% 10%,
      rgba(141,92,255,.09),
      transparent 30%
    ),
    rgba(10,25,40,.88);
}


.lshape-conclusion h2 {
  margin-top: 8px;
}


.lshape-conclusion li {
  color: var(--muted);

  margin-bottom: 9px;
}


/* =========================================================
   BOTTOM NAV
   ========================================================= */

.research-project-nav {
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 12px;

  flex-wrap: wrap;

  margin-top: 42px;
}


.research-project-nav .project-counter {
  color: var(--cyan);

  font-weight: 900;
}


/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 900px) {

  .lshape-scroll-row {
    grid-template-columns: 1fr;

    gap: 30px;

    margin-bottom: 80px;

    align-items: start;
  }

  .lshape-images {
    align-self: start;
  }


  .lshape-copy {
    position: static;

    padding-top: 0;
  }


  .lshape-image-pair,
  .lshape-image-three,
  .lshape-video-grid {
    grid-template-columns: 1fr;
  }

  .lshape-image-three .lshape-figure {
    display: block;
  }

  .lshape-image-three .lshape-figure figcaption {
    padding: 10px 3px 2px;
  }


  .lshape-scroll-row .lshape-images > .lshape-figure:only-child {
    width: 100%;
  }

  .lshape-figure {
    transform: none !important;
  }


  .lshape-figure img,
  .lshape-image-pair img,
  .lshape-image-three img {
    max-height: none;
  }

}


/* Revised Project 2 media layout */
.lshape-method-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:18px;
  width:100%;
  margin:0 auto;
  align-items:start;
}
.lshape-method-grid .lshape-figure{
  width:100%;
  margin:0 auto;
}
.lshape-method-grid img{
  width:100%;
  max-height:300px;
  object-fit:contain;
}
.lshape-inline-video{
  display:block;
  width:100%;
  max-height:300px;
  border-radius:12px;
  background:#02070d;
  object-fit:contain;
}
.lshape-video-crop{
  overflow:hidden;
  border-radius:12px;
  background:#02070d;
}
.lshape-video-crop .lshape-inline-video{
  transform:scale(2);
  transform-origin:40% 60%;
  max-height:360px;
  object-fit:cover;
}
.lshape-fea-animation-card{
  grid-column:1 / -1;
  width:100%;
  max-width:760px;
  justify-self:center;
}
.lshape-fea-animation-card .lshape-video-crop{
  min-height:320px;
}
.lshape-fea-animation-card .lshape-inline-video{
  height:320px;
  max-height:320px;
}
.lshape-result-stack{
  display:grid;
  grid-template-columns:1fr;
  gap:12px;
  width:min(100%,520px);
  margin:0 auto;
}
.lshape-result-stack .lshape-figure{
  display:block;
  width:100%;
  margin:0 auto;
  padding:9px;
  text-align:center;
}
.lshape-result-stack .lshape-figure img{
  width:auto;
  max-width:100%;
  max-height:165px;
  margin:0 auto;
}
.lshape-result-stack .lshape-figure figcaption{
  padding:8px 3px 1px;
  font-size:.78rem;
  line-height:1.36;
  text-align:center;
}
.lshape-fatigue-media{
  display:grid;
  grid-template-columns:1fr;
  gap:14px;
  width:min(100%,560px);
  margin:0 auto;
}
.lshape-fatigue-media .lshape-figure{
  width:100%;
  margin:0 auto;
}
.lshape-fatigue-media img{
  width:100%;
  max-height:290px;
  object-fit:contain;
}
.lshape-method-copy h3{
  margin-top:22px;
  margin-bottom:7px;
}
.lshape-method-copy h3:first-of-type{
  margin-top:10px;
}
@media(max-width:900px){
  .lshape-method-grid{grid-template-columns:1fr}
  .lshape-method-grid img,
  .lshape-inline-video,
  .lshape-fatigue-media img{max-height:none}
  .lshape-video-crop .lshape-inline-video{
    transform:scale(1.45);
    max-height:none;
  }
  .lshape-result-stack,
  .lshape-fatigue-media{width:100%}
  .lshape-result-stack .lshape-figure img{max-height:none}
}

</style>



<!-- =====================================================
     HERO
     ===================================================== -->

<section class="page-hero">

  <div class="shell">

    <p class="eyebrow">
      RESEARCH PROJECT 2 OF 3
    </p>

    <h1>
      Matrix Failure & Delamination
    </h1>

    <p>
      L-Shaped Composite Laminates with Inter-Ply Angle Difference
    </p>


    <div class="project-top-nav">

      <a
        class="hero-link secondary"
        href="{{ '/research/' | relative_url }}">
        ← Back to Research Projects
      </a>


      <a
        class="hero-link secondary"
        href="{{ '/research/failure-onset/' | relative_url }}">
        ← Research Project 1
      </a>


      <a
        class="hero-link secondary"
        href="{{ '/research/ut-progressive-failure/' | relative_url }}">
        Research Project 3 →
      </a>

    </div>

  </div>

</section>



<!-- =====================================================
     PREVIOUS VERSION / GENERAL OVERVIEW
     ===================================================== -->

<section class="page-content">

  <div class="shell">


    <div
      class="project-card"
      style="margin-bottom:24px;">

      <p class="eyebrow">
        OVERVIEW
      </p>

      <h2>
        Failure behavior of curved composite structures
      </h2>

      <p>
        L-shaped composite components experience significant
        through-thickness stresses in the curved region.
        These stresses can initiate matrix cracking and
        interlaminar delamination.
      </p>

      <p>
        This research investigated how changing the
        inter-ply angle difference affects flexural response,
        delamination resistance, matrix failure, and fatigue
        performance of curved composite laminates.
      </p>

    </div>



    <div class="project-grid">


      <!-- STATIC -->

      <article class="project-card">

        <span class="loading-mode static">
          Static Analysis
        </span>

        <h3>
          Static Four-Point Bending
        </h3>

        <ul>

          <li>
            Four stacking configurations were investigated:
            unidirectional, helicoidal,
            quasi-isotropic, and cross-ply.
          </li>

          <li>
            Inter-ply angle differences were
            0°, 15°, 45°, and 90°.
          </li>

          <li>
            Four-point bending was used to characterize
            flexural response and delamination initiation.
          </li>

          <li>
            Radial stress was examined to identify
            critical interlaminar failure locations.
          </li>

          <li>
            Optical microscopy and X-ray CT were used
            to compare experimentally observed damage
            with finite element predictions.
          </li>

        </ul>

      </article>



      <!-- FINITE ELEMENT -->

      <article class="project-card">

        <h3>
          Finite Element Modeling
        </h3>

        <ul>

          <li>
            Composite plies were modeled using
            3D solid elements.
          </li>

          <li>
            Interfaces between plies were modeled
            using cohesive elements.
          </li>

          <li>
            A 3D Hashin matrix-failure formulation
            was used for intralaminar damage.
          </li>

          <li>
            Cohesive-zone modeling was used
            to predict delamination initiation
            and progression.
          </li>

          <li>
            Experimentally determined
            interlaminar tensile strength was used
            to define interface properties.
          </li>

        </ul>

      </article>



      <!-- FATIGUE -->

      <article class="project-card">

        <span class="loading-mode fatigue">
          Fatigue Analysis
        </span>

        <h3>
          Cyclic Loading & Fatigue Life
        </h3>

        <ul>

          <li>
            Displacement-controlled cyclic loading
            was used for fatigue testing.
          </li>

          <li>
            Stiffness degradation was tracked
            as the number of loading cycles increased.
          </li>

          <li>
            Fatigue life was evaluated at
            different loading severities.
          </li>

          <li>
            Interrupted fatigue testing
            was combined with X-ray CT.
          </li>

          <li>
            Delamination growth was correlated
            with stiffness loss.
          </li>

        </ul>

      </article>

    </div>



    <div
      class="project-card"
      style="margin-top:24px;">

      <h3>
        Why both static and fatigue?
      </h3>

      <p>
        Static loading was used to understand
        <strong>where failure begins</strong> and how
        radial stresses initiate delamination.
        Fatigue loading was used to understand
        <strong>how damage develops with repeated loading</strong>,
        including stiffness degradation, fatigue life,
        and progressive delamination.
      </p>

    </div>



    <!-- =====================================================
         SLIDE 56 CONCLUSION STORY
         ===================================================== -->

    <section class="lshape-story">

      <div class="lshape-story-intro">
        <p class="eyebrow">METHOD · RESULTS</p>
        <h2>From material system to static and fatigue damage.</h2>
        <p>
          The research follows a clear sequence: manufacture L-shaped laminates with controlled
          inter-ply angle differences, evaluate them under static and cyclic four-point bending,
          model the static response using a cohesive-zone finite element framework, and validate
          the observed damage using microscopy and X-ray CT.
        </p>
      </div>


      <!-- ==================================================
           ROW 1 — MATERIAL SYSTEM
           ================================================== -->

      <div class="lshape-scroll-row">

        <div class="lshape-images">
          <figure class="lshape-figure">
            <img
              src="{{ '/assets/images/research/l-shaped/l-shaped-specimen.jpg' | relative_url }}"
              alt="Manufactured L-shaped composite laminate specimen">

            <figcaption>
              Manufactured L-shaped composite laminates with controlled inter-ply angle differences.
            </figcaption>
          </figure>
        </div>

        <div class="lshape-copy">
          <span class="step-number">01 · MATERIAL SYSTEM</span>

          <h2>Inter-ply angle difference was systematically varied.</h2>

          <p>
            L-shaped laminates were manufactured from 26 unidirectional T700/250F prepreg plies.
            Four stacking configurations were investigated: unidirectional, helicoidal,
            quasi-isotropic, and cross-ply.
          </p>

          <p>
            These produced inter-ply angle differences of approximately 0°, 15°, 45°, and 90°.
            The objective was to determine how the orientation difference between neighboring plies
            changes flexural response, matrix cracking, and delamination.
          </p>

          <div class="lshape-note">
            The study isolates <strong>inter-ply angle difference</strong> as a design variable
            and tracks how that variable changes both static and fatigue damage mechanisms.
          </div>
        </div>

      </div>


      <!-- ==================================================
           ROW 2 — STATIC / STATIC FEA / FATIGUE METHODS
           ================================================== -->

      <div class="lshape-scroll-row">

        <div class="lshape-images">

          <div class="lshape-method-grid">

            <figure class="lshape-figure">
              <img
                src="{{ '/assets/images/research/l-shaped/finite-element-model.png' | relative_url }}"
                alt="Finite element model of L-shaped laminate">
              <figcaption>Three-dimensional finite element model of the L-shaped laminate.</figcaption>
            </figure>

            <figure class="lshape-figure">
              <video class="lshape-inline-video" autoplay loop muted playsinline preload="auto">
                <source
                  src="{{ '/assets/videos/research/lshape-fatigue.mp4' | relative_url }}"
                  type="video/mp4">
              </video>
              <figcaption>Displacement-controlled cyclic four-point bending test.</figcaption>
            </figure>

            <figure class="lshape-figure lshape-fea-animation-card">
              <div class="lshape-video-crop">
                <video class="lshape-inline-video" autoplay loop muted playsinline preload="auto">
                  <source
                    src="{{ '/assets/videos/research/lshape-overview.mp4' | relative_url }}"
                    type="video/mp4">
                </video>
              </div>
              <figcaption>FEA animation focused on the curved region.</figcaption>
            </figure>

          </div>

        </div>


        <div class="lshape-copy lshape-method-copy">

          <span class="step-number">02 · STATIC FEA & FATIGUE METHOD</span>

          <h2>Static and fatigue behavior were evaluated experimentally and numerically.</h2>

          <h3>Static Analysis</h3>
          <p>
            Four-point bending was used to identify flexural response and delamination initiation.
          </p>

          <h3>Static FEA</h3>
          <p>
            3D solid plies and cohesive interfaces were used to predict matrix failure
            and radial-stress-driven delamination.
          </p>

          <h3>Fatigue</h3>
          <p>
            Displacement-controlled loading at 3 Hz and R = 0.1 was used to track
            stiffness degradation, fatigue life, and delamination growth.
          </p>

        </div>

      </div>


      <!-- ==================================================
           ROW 3 — STATIC RESULTS
           ================================================== -->

      <div class="lshape-scroll-row">

        <div class="lshape-images">

          <div class="lshape-result-stack">

            <figure class="lshape-figure">
              <img
                src="{{ '/assets/images/research/l-shaped/microscopy-delamination.png' | relative_url }}"
                alt="Optical microscopy of delamination">
              <figcaption>Optical microscopy showing experimentally observed delamination and matrix damage.</figcaption>
            </figure>

            <figure class="lshape-figure">
              <img
                src="{{ '/assets/images/research/l-shaped/fea-delamination.png' | relative_url }}"
                alt="Finite element prediction of delamination">
              <figcaption>Finite element prediction of delamination location and progression.</figcaption>
            </figure>

            <figure class="lshape-figure">
              <img
                src="{{ '/assets/images/research/l-shaped/xct-delamination.png' | relative_url }}"
                alt="X-ray CT visualization of delamination">
              <figcaption>X-ray CT visualization of the three-dimensional delamination morphology.</figcaption>
            </figure>

          </div>

        </div>


        <div class="lshape-copy">

          <span class="loading-mode static">Static Results</span>
          <span class="step-number">03 · STATIC DAMAGE & VALIDATION</span>

          <h2>Static loading identified the critical delamination locations.</h2>

          <p>
            UD showed the highest bending stiffness, while QI showed the highest peak load
            and delamination resistance.
          </p>

          <p>
            Experimental and simulated peak loads differed by about 0.7–6.6%.
            Microscopy and X-ray CT confirmed the predicted damage locations.
          </p>

        </div>

      </div>


      <!-- ==================================================
           ROW 4 — FATIGUE RESULTS FROM SLIDES 49 & 54
           ================================================== -->

      <div class="lshape-scroll-row">

        <div class="lshape-images">

          <div class="lshape-fatigue-media">

            <figure class="lshape-figure">
              <img
                src="{{ '/assets/images/research/l-shaped/Picture12.png' | relative_url }}"
                alt="Fatigue microscopy showing delamination and transverse cracking">
              <figcaption>
                High-severity fatigue damage showing delamination (DE) and transverse cracking (TC).
              </figcaption>
            </figure>

            <figure class="lshape-figure">
              <img
                src="{{ '/assets/images/research/l-shaped/Picture11.png' | relative_url }}"
                alt="Quasi-isotropic fatigue stiffness degradation and progressive delamination">
              <figcaption>
                QI interrupted fatigue test showing Stage-1 and Stage-2 delamination growth.
              </figcaption>
            </figure>

          </div>

        </div>


        <div class="lshape-copy">

          <span class="loading-mode fatigue">Fatigue Results</span>
          <span class="step-number">04 · FATIGUE DAMAGE DEVELOPMENT</span>

          <h2>Damage increased with cyclic severity and stiffness degradation.</h2>

          <p>
            At 80% severity, UD developed multiple delaminations without transverse cracking,
            while HC, QI, and CP showed delamination with transverse cracking.
          </p>

          <p>
            For QI, the first delamination formed near one-third of the thickness.
            A second delamination formed near three-fifths, with about
            <strong>40% stiffness loss</strong> and a <strong>95% increase in delaminated area</strong>.
          </p>

        </div>

      </div>


      <!-- ==================================================
           CONCLUSION
           ================================================== -->

      <div class="lshape-conclusion">

        <p class="eyebrow">RESEARCH SUMMARY</p>
        <h2>Key contribution</h2>

        <ul>
          <li>Manufactured L-shaped laminates with controlled inter-ply angle differences.</li>
          <li>Combined static four-point bending, cohesive-zone FEA, fatigue testing, microscopy, and X-ray CT.</li>
          <li>Used experimentally informed interface strength to improve progressive delamination prediction.</li>
          <li>Compared static and fatigue damage mechanisms through matrix cracking, delamination, and stiffness degradation.</li>
          <li>Demonstrated strong agreement between numerical predictions and experimentally observed damage locations.</li>
        </ul>

      </div>

    </section>


    <!-- =====================================================
         BOTTOM NAVIGATION
         ===================================================== -->

    <div class="research-project-nav">


      <a
        class="hero-link secondary"
        href="{{ '/research/failure-onset/' | relative_url }}">
        ← Research Project 1
      </a>


      <span class="project-counter">
        Research Project 2 of 3
      </span>


      <a
        class="hero-link primary"
        href="{{ '/research/ut-progressive-failure/' | relative_url }}">
        Research Project 3 →
      </a>


    </div>


  </div>

</section>



<!-- =====================================================
     SUBTLE APPLE-LIKE IMAGE SCALE
     IMAGES NEVER DISAPPEAR
     ===================================================== -->

<script>

document.addEventListener(
  'DOMContentLoaded',
  function () {

    const figures =
      Array.from(
        document.querySelectorAll(
          '.lshape-figure'
        )
      );


    function updateFigures() {

      if (window.innerWidth <= 900) {
        return;
      }


      const viewportHeight =
        window.innerHeight;


      figures.forEach(
        figure => {

          const rect =
            figure.getBoundingClientRect();


          /*
             Image gets slightly larger
             when entering the viewport
             and gently settles smaller.

             It NEVER fades.
             It NEVER disappears.
             It remains in normal document flow.
          */


          const start =
            viewportHeight * .95;


          const end =
            -rect.height * .20;


          let progress =
            (start - rect.top) /
            Math.max(
              start - end,
              1
            );


          progress =
            Math.min(
              1,
              Math.max(
                0,
                progress
              )
            );


          const scale =
            1.055 -
            progress * .055;


          figure.style.transform =
            `scale(${scale.toFixed(3)})`;

        }
      );

    }


    window.addEventListener(
      'scroll',
      updateFigures,
      {
        passive: true
      }
    );


    window.addEventListener(
      'resize',
      updateFigures,
      {
        passive: true
      }
    );


    updateFigures();

  }
);

</script>
