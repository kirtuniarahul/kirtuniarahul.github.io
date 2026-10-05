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

  align-items: start;

  margin-bottom: 130px;
}


/* --------------------------------
   LEFT SIDE
   -------------------------------- */

.lshape-images {
  display: flex;

  flex-direction: column;

  gap: 22px;
  align-self: start;
}


.lshape-figure {
  margin: 0;

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

/* Keep single-image rows visually proportional to the text ribbon */
.lshape-scroll-row .lshape-images > .lshape-figure:only-child {
  width: min(100%, 72%);
  align-self: center;
}

.lshape-scroll-row .lshape-images > .lshape-figure:only-child img {
  max-height: 420px;
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

  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 14px;

  align-items: start;
}


.lshape-image-pair img {
  max-height: 245px;
}


.lshape-image-three img {
  max-height: 230px;
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

        <p class="eyebrow">
          BRIEF SUMMARY · CONCLUSION
        </p>

        <h2>
          One research program.
          Two loading regimes.
        </h2>

        <p>
          The study combined static and fatigue investigations
          to characterize flexural response, matrix failure,
          delamination initiation, stiffness degradation,
          fatigue life, and damage progression in L-shaped
          composite laminates.
        </p>

      </div>



      <!-- ==================================================
           ROW 1 — MATERIAL / MANUFACTURING
           ================================================== -->

      <div class="lshape-scroll-row">


        <!-- LEFT IMAGE -->

        <div class="lshape-images">

          <figure class="lshape-figure">

            <img
              src="{{ '/assets/images/research/l-shaped/l-shaped-specimen.jpg' | relative_url }}"
              alt="Manufactured L-shaped composite laminate specimen">

            <figcaption>
              Manufactured L-shaped composite laminates with
              controlled inter-ply angle differences.
            </figcaption>

          </figure>

        </div>



        <!-- RIGHT TEXT -->

        <div class="lshape-copy">

          <span class="step-number">
            01 · MATERIAL SYSTEM
          </span>

          <h2>
            Inter-ply angle difference was systematically varied.
          </h2>

          <p>
            L-shaped laminates were manufactured using
            26 unidirectional prepreg plies.
            Four stacking configurations were studied:
            unidirectional, helicoidal,
            quasi-isotropic, and cross-ply.
          </p>

          <p>
            These configurations produced inter-ply
            angle differences of approximately
            0°, 15°, 45°, and 90°.
          </p>

          <div class="lshape-note">

            The objective was to determine how changing the
            orientation difference between adjacent plies
            affects out-of-plane stresses,
            matrix cracking, and delamination.

          </div>

        </div>

      </div>



      <!-- ==================================================
           ROW 2 — STATIC
           ================================================== -->

      <div class="lshape-scroll-row">


        <div class="lshape-images">


          <figure class="lshape-figure">

            <img
              src="{{ '/assets/images/research/l-shaped/four-point-bending-fixture.png' | relative_url }}"
              alt="Static four-point bending fixture">

            <figcaption>
              Static four-point bending configuration used
              to measure flexural response and
              delamination initiation.
            </figcaption>

          </figure>


          <figure class="lshape-figure">

            <img
              src="{{ '/assets/images/research/l-shaped/finite-element-model.png' | relative_url }}"
              alt="Finite element model of L-shaped composite">

            <figcaption>
              Three-dimensional finite element model using
              solid composite plies and cohesive interfaces.
            </figcaption>

          </figure>


        </div>



        <div class="lshape-copy">

          <span class="loading-mode static">
            Static Analysis
          </span>

          <span class="step-number">
            02 · STATIC FAILURE
          </span>

          <h2>
            Static loading identified where delamination begins.
          </h2>

          <p>
            Four-point bending was used to evaluate
            the force-displacement response,
            bending stiffness, matrix failure,
            and delamination initiation.
          </p>

          <p>
            The finite element model was used to examine
            the through-thickness stress state in the
            curved region, particularly the radial stress
            responsible for interlaminar separation.
          </p>


          <h3>
            Modeling strategy
          </h3>

          <ul>

            <li>
              3D solid elements for individual plies
            </li>

            <li>
              Cohesive elements between adjacent plies
            </li>

            <li>
              3D Hashin criterion for matrix failure
            </li>

            <li>
              Traction-separation law for
              delamination initiation
            </li>

            <li>
              Mixed-mode fracture-energy-based
              damage evolution
            </li>

          </ul>


          <div class="lshape-note">

            A key part of the work was using
            experimentally informed interface strength
            rather than relying only on properties
            derived from unidirectional laminates.

          </div>

        </div>

      </div>



      <!-- ==================================================
           ROW 3 — STATIC DAMAGE VALIDATION
           ================================================== -->

      <div class="lshape-scroll-row">


        <div class="lshape-images">


          <div class="lshape-image-three">


            <figure class="lshape-figure">

              <img
                src="{{ '/assets/images/research/l-shaped/microscopy-delamination.png' | relative_url }}"
                alt="Optical microscopy of delamination">

              <figcaption>
                Optical microscopy showing
                experimentally observed
                delamination and matrix damage.
              </figcaption>

            </figure>



            <figure class="lshape-figure">

              <img
                src="{{ '/assets/images/research/l-shaped/fea-delamination.png' | relative_url }}"
                alt="Finite element predicted delamination">

              <figcaption>
                Finite element prediction of
                delamination location and progression.
              </figcaption>

            </figure>



            <figure class="lshape-figure">

              <img
                src="{{ '/assets/images/research/l-shaped/xct-delamination.png' | relative_url }}"
                alt="X-ray CT visualization of delamination">

              <figcaption>
                X-ray CT visualization of
                volumetric delamination in the
                curved laminate.
              </figcaption>

            </figure>


          </div>

        </div>



        <div class="lshape-copy">

          <span class="loading-mode static">
            Static Analysis
          </span>

          <span class="step-number">
            03 · DAMAGE VALIDATION
          </span>

          <h2>
            Simulation was compared with microscopy and X-ray CT.
          </h2>

          <p>
            The predicted locations of matrix failure
            and delamination were compared with
            optical microscopy and volumetric
            X-ray CT observations.
          </p>

          <p>
            This allowed the numerical model to be assessed
            not only by global force-displacement response,
            but also by the actual location and morphology
            of damage inside the laminate.
          </p>


          <div class="lshape-note">

            Static analysis therefore answered the question:
            <strong>
              where does failure initiate,
              and why does it initiate there?
            </strong>

          </div>

        </div>

      </div>



      <!-- ==================================================
           ROW 4 — FATIGUE
           ================================================== -->

      <div class="lshape-scroll-row">


        <div class="lshape-images">


          <figure class="lshape-figure">

            <img
              src="{{ '/assets/images/research/l-shaped/fatigue-stiffness-delamination.png' | relative_url }}"
              alt="Fatigue stiffness degradation and delamination development">

            <figcaption>
              Fatigue stiffness degradation used to track
              progressive damage and delamination growth
              during repeated loading.
            </figcaption>

          </figure>

        </div>



        <div class="lshape-copy">

          <span class="loading-mode fatigue">
            Fatigue Analysis
          </span>

          <span class="step-number">
            04 · CYCLIC DAMAGE
          </span>

          <h2>
            Fatigue analysis tracked how damage evolves with cycles.
          </h2>

          <p>
            Static testing captures failure initiation,
            but real composite structures can experience
            thousands or millions of repeated loading cycles.
          </p>

          <p>
            The fatigue program therefore evaluated
            stiffness degradation,
            fatigue life,
            and progressive delamination
            under cyclic loading.
          </p>


          <h3>
            Fatigue parameters
          </h3>

          <ul>

            <li>
              Displacement-controlled cyclic loading
            </li>

            <li>
              Multiple loading severity levels
            </li>

            <li>
              Stiffness degradation versus cycle count
            </li>

            <li>
              Fatigue-life comparison
            </li>

            <li>
              Interrupted testing for X-ray CT
            </li>

          </ul>


          <div class="lshape-note fatigue-note">

            Fatigue analysis answers a different question:
            <strong>
              once damage begins,
              how does it grow over repeated loading?
            </strong>

          </div>

        </div>

      </div>



      <!-- ==================================================
           ROW 5 — STATIC VS FATIGUE
           ================================================== -->

      <div class="lshape-scroll-row">


        <div class="lshape-images">


          <div class="lshape-image-pair">


            <figure class="lshape-figure">

              <img
                src="{{ '/assets/images/research/l-shaped/microscopy-delamination.png' | relative_url }}"
                alt="Static delamination observation">

              <figcaption>
                Static loading:
                failure initiation and damage morphology
                evaluated through microscopy and X-ray CT.
              </figcaption>

            </figure>



            <figure class="lshape-figure">

              <img
                src="{{ '/assets/images/research/l-shaped/fatigue-stiffness-delamination.png' | relative_url }}"
                alt="Fatigue delamination growth">

              <figcaption>
                Fatigue loading:
                stiffness degradation correlated with
                progressive delamination development.
              </figcaption>

            </figure>


          </div>

        </div>



        <div class="lshape-copy">

          <span class="step-number">
            05 · STATIC vs FATIGUE
          </span>

          <h2>
            The two loading regimes provide complementary failure information.
          </h2>


          <h3>
            Static
          </h3>

          <p>
            Static testing was used to characterize
            flexural response,
            peak load,
            stiffness,
            radial stress,
            matrix failure,
            and initial delamination.
          </p>


          <h3>
            Fatigue
          </h3>

          <p>
            Fatigue testing was used to characterize
            stiffness loss,
            fatigue life,
            and the development of additional
            delaminations with increasing cycle count.
          </p>


          <div class="lshape-note">

            Together, the static and fatigue studies
            provide a more complete description of
            failure in curved composite structures:
            from <strong>damage initiation</strong>
            to <strong>damage accumulation and growth</strong>.

          </div>

        </div>

      </div>



      <!-- ==================================================
           VIDEOS
           ================================================== -->

      <section class="lshape-video-section">

        <p class="eyebrow">
          RESEARCH VIDEOS
        </p>

        <h2>
          Experimental & numerical workflow
        </h2>


        <div class="lshape-video-grid">


          <!-- Slide 28 video -->

          <div class="lshape-video-card">

            <video
              class="lshape-video"
              controls
              muted
              preload="metadata">

              <source
                src="{{ '/assets/videos/research/lshape-overview.mp4' | relative_url }}"
                type="video/mp4">

            </video>

            <h3>
              Research Overview
            </h3>

            <p>
              Embedded video from the L-shaped laminate
              research section of the dissertation presentation.
            </p>

          </div>



          <!-- Fatigue video -->

          <div class="lshape-video-card">

            <video
              class="lshape-video"
              controls
              muted
              preload="metadata">

              <source
                src="{{ '/assets/videos/research/lshape-fatigue.mp4' | relative_url }}"
                type="video/mp4">

            </video>

            <h3>
              Fatigue Testing
            </h3>

            <p>
              Cyclic loading used to investigate
              stiffness degradation,
              fatigue life,
              and progressive damage development.
            </p>

          </div>


        </div>

      </section>



      <!-- ==================================================
           FINAL CONCLUSION
           ================================================== -->

      <div class="lshape-conclusion">

        <p class="eyebrow">
          RESEARCH SUMMARY
        </p>

        <h2>
          Key contribution
        </h2>

        <ul>

          <li>
            Investigated the flexural response and
            damage mechanisms of L-shaped composite laminates
            with different inter-ply angle differences.
          </li>

          <li>
            Developed an experimentally informed
            cohesive-zone modeling strategy for
            delamination and matrix failure.
          </li>

          <li>
            Validated static failure behavior using
            force-displacement response,
            optical microscopy,
            and X-ray CT.
          </li>

          <li>
            Extended the investigation from
            static failure to fatigue loading
            to estimate fatigue life
            and stiffness degradation.
          </li>

          <li>
            Compared the extent of
            delamination and matrix cracking
            under static and cyclic loading conditions.
          </li>

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
