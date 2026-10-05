---
layout: default
title: "Research Project 3 — Progressive Failure"
permalink: /research/ut-progressive-failure/
description: "Progressive failure analysis of drilled-hole composite laminates with UT-informed delamination."
---

<style>

/* =========================================================
   RESEARCH PROJECT 3
   PROGRESSIVE FAILURE
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
   ANALYSIS LABELS
   ----------------------------- */

.analysis-mode {
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


.analysis-mode.ut {
  color: var(--cyan);

  border: 1px solid rgba(40, 215, 255, .30);
  background: rgba(40, 215, 255, .07);
}


.analysis-mode.fea {
  color: #d3b7ff;

  border: 1px solid rgba(141, 92, 255, .35);
  background: rgba(141, 92, 255, .08);
}


.analysis-mode.validation {
  color: #ffd27f;

  border: 1px solid rgba(255, 190, 80, .34);
  background: rgba(255, 190, 80, .07);
}


/* =========================================================
   SCROLL STORY
   ========================================================= */

.progressive-story {
  margin-top: 80px;
}


.progressive-story-intro {
  max-width: 900px;

  margin:
    0 auto
    80px;

  text-align: center;
}


.progressive-story-intro h2 {
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


.progressive-story-intro p {
  max-width: 790px;

  margin: auto;

  color: var(--muted);

  font-size: 1.07rem;

  line-height: 1.7;
}


/* =========================================================
   LEFT IMAGE / RIGHT TEXT
   ========================================================= */

.progressive-scroll-row {
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

.progressive-images {
  display: flex;

  flex-direction: column;

  gap: 22px;
  align-self: center;
  align-items: center;
}


.progressive-figure {
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


.progressive-figure:hover {
  border-color:
    rgba(40,215,255,.38);
}

.progressive-figure figcaption {
  text-align: center;
}

/* Keep single-image rows balanced against the text ribbon */
.progressive-scroll-row .progressive-images > .progressive-figure:only-child {
  width: min(100%, 75%);
  max-width: none;
  margin-left: auto;
  margin-right: auto;
  align-self: center;
}

.progressive-scroll-row .progressive-images > .progressive-figure:only-child img {
  max-height: 320px;
}

/* When a row contains both drilling image and video, keep both compact */
.progressive-scroll-row .progressive-images > .progressive-figure:not(:only-child) {
  width: min(100%, 75%);
  margin-left: auto;
  margin-right: auto;
  align-self: center;
}

.progressive-inline-video {
  max-height: 360px;
  object-fit: contain;
}


.progressive-figure img {
  display: block;

  width: 100%;

  height: auto;

  max-height: 520px;

  object-fit: contain;

  border-radius: 12px;

  background: #f8fafc;
}


.progressive-figure figcaption {
  padding:
    10px 3px
    2px;

  color: #aebfce;

  font-size: .80rem;

  line-height: 1.42;
}


/* --------------------------------
   RIGHT SIDE TEXT
   -------------------------------- */

.progressive-copy {
  position: sticky;

  top: 118px;

  padding-top: 8px;
}


.progressive-copy .step-number {
  display: block;

  margin-bottom: 10px;

  color: var(--cyan);

  font-size: .75rem;

  font-weight: 900;

  letter-spacing: .15em;

  text-transform: uppercase;
}


.progressive-copy h2 {
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


.progressive-copy h3 {
  margin-top: 26px;

  margin-bottom: 9px;
}


.progressive-copy p,
.progressive-copy li {
  color: var(--muted);

  font-size: 1.02rem;

  line-height: 1.72;
}


.progressive-copy ul {
  padding-left: 20px;
}


.progressive-note {
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


.progressive-note.fea-note {
  border-left-color:
    var(--violet);

  background:
    rgba(141,92,255,.06);
}


.progressive-note.validation-note {
  border-left-color:
    #ffbd55;

  background:
    rgba(255,189,85,.06);
}




.progressive-inline-video {
  width: 100%;
  max-height: 560px;
  display: block;
  border-radius: 13px;
  background: #02070d;
}

.progressive-flow-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  color: var(--cyan);
  font-weight: 900;
  letter-spacing: .12em;
  text-transform: uppercase;
  font-size: .76rem;
}

.progressive-flow-arrow::before,
.progressive-flow-arrow::after {
  content: "";
  width: 42px;
  height: 1px;
  background: rgba(40,215,255,.35);
  margin: 0 12px;
}


/* =========================================================
   VIDEOS
   ========================================================= */

.progressive-video-section {
  margin:
    40px 0
    110px;
}


.progressive-video-section h2 {
  margin-bottom: 25px;
}


.progressive-video-grid {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 24px;
}


.progressive-video-card {
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


.progressive-video {
  display: block;

  width: 100%;

  max-height: 430px;

  border-radius: 13px;

  background: #02070d;
}


.progressive-video-card h3 {
  margin:
    14px 3px
    5px;
}


.progressive-video-card p {
  margin:
    0 3px
    4px;

  color: var(--muted);

  font-size: .88rem;
}


/* =========================================================
   CONCLUSION BOX
   ========================================================= */

.progressive-conclusion {
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


.progressive-conclusion h2 {
  margin-top: 8px;
}


.progressive-conclusion li {
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

  .progressive-scroll-row {
    grid-template-columns: 1fr;

    gap: 30px;

    margin-bottom: 80px;

    align-items: start;
  }

  .progressive-images {
    align-self: start;
  }


  .progressive-copy {
    position: static;

    padding-top: 0;
  }


  .progressive-video-grid {
    grid-template-columns: 1fr;
  }


  .progressive-scroll-row .progressive-images > .progressive-figure:only-child,
  .progressive-scroll-row .progressive-images > .progressive-figure:not(:only-child) {
    width: 100%;
  }

  .progressive-figure {
    transform: none !important;
  }


  .progressive-figure img {
    max-height: none;
  }

}


/* Project 3 video + validation refinements */
.progressive-validation-large{
  width:min(100%,75%) !important;
  max-width:none !important;
}
.progressive-validation-large img{
  max-height:520px !important;
}
.progressive-three-video{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:12px;
  width:100%;
  margin:0 auto 16px;
}
.progressive-three-video .progressive-figure{
  width:100% !important;
  max-width:none !important;
  margin:0 !important;
  padding:9px;
}
.progressive-three-video video{
  display:block;
  width:100%;
  height:170px;
  object-fit:contain;
  border-radius:11px;
  background:#02070d;
}
.progressive-media2{
  width:min(100%,75%) !important;
  max-width:none !important;
  margin:0 auto;
}
.progressive-media2 video{
  display:block;
  width:100%;
  max-height:300px;
  object-fit:contain;
  border-radius:12px;
  background:#02070d;
}
@media(max-width:900px){
  .progressive-validation-large{max-width:none !important}
  .progressive-three-video{grid-template-columns:1fr}
  .progressive-three-video video{height:auto;max-height:none}
  .progressive-media2{width:100%}
}

</style>



<!-- =====================================================
     HERO
     ===================================================== -->

<section class="page-hero">

  <div class="shell">

    <p class="eyebrow">
      RESEARCH PROJECT 3 OF 3
    </p>

    <h1>
      Progressive Failure
    </h1>

    <p>
      Drilled-Hole Laminates with UT-Informed Delamination
    </p>


    <div class="project-top-nav">

      <a
        class="hero-link secondary"
        href="{{ '/research/' | relative_url }}">
        ← Back to Research Projects
      </a>


      <a
        class="hero-link secondary"
        href="{{ '/research/l-shaped-delamination/' | relative_url }}">
        ← Research Project 2
      </a>

    </div>

  </div>

</section>



<!-- =====================================================
     GENERAL OVERVIEW
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
        From nondestructive inspection to progressive failure prediction
      </h2>

      <p>
        Drilling is commonly required for mechanically joined composite structures,
        but the process can create delamination around the hole and reduce
        structural performance.
      </p>

      <p>
        This research developed an inspection-to-prediction framework in which
        drilling-induced delamination was identified using ultrasound,
        transferred into the finite element model,
        and used to predict progressive matrix failure,
        interfacial delamination, and fiber failure.
      </p>

    </div>



    <div class="project-grid">


      <article class="project-card">

        <span class="analysis-mode ut">
          Ultrasound Inspection
        </span>

        <h3>
          Damage Characterization
        </h3>

        <ul>

          <li>
            Drilling-induced delamination was identified at individual ply interfaces.
          </li>

          <li>
            Ultrasound A-scan and C-scan data were processed to reconstruct
            damage through the laminate thickness.
          </li>

          <li>
            The damage at each interface was quantified using an effective radius.
          </li>

          <li>
            The through-thickness damage profile was used as the basis
            for the finite element representation.
          </li>

        </ul>

      </article>



      <article class="project-card">

        <span class="analysis-mode fea">
          Finite Element Modeling
        </span>

        <h3>
          Progressive Damage Model
        </h3>

        <ul>

          <li>
            Abaqus/Explicit mesoscale model.
          </li>

          <li>
            3D solid elements for individual composite plies.
          </li>

          <li>
            Cohesive elements for interfacial delamination.
          </li>

          <li>
            Hashin-based matrix and fiber failure initiation.
          </li>

          <li>
            Exponential stiffness degradation for progressive intralaminar damage.
          </li>

        </ul>

      </article>



      <article class="project-card">

        <span class="analysis-mode validation">
          Experimental Validation
        </span>

        <h3>
          Open-Hole Tension & DIC
        </h3>

        <p>
          Structural testing was performed using open-hole tension specimens.
          Digital image correlation was used to measure strain fields around the hole,
          providing a direct comparison with finite element strain contours.
        </p>

      </article>

    </div>



    <!-- =====================================================
         CONCLUSION / SCROLL STORY
         ===================================================== -->

    <section class="progressive-story">


      <div class="progressive-story-intro">

        <p class="eyebrow">
          BRIEF SUMMARY · CONCLUSION
        </p>

        <h2>
          Inspection-informed progressive failure modeling.
        </h2>

        <p>
          The workflow begins with drilling the composite specimen, followed by ultrasound scanning
          to identify the drilling-induced delamination. The measured damage is then converted into the
          finite element domain, the structural response is validated using experimental strain fields,
          and the model follows matrix failure, delamination, and fiber failure through progressive damage simulation.
        </p>

      </div>



      <!-- ==================================================
           FLOW 1 — DRILLING
           ================================================== -->

      <div class="progressive-scroll-row">


        <div class="progressive-images">

          <figure class="progressive-figure">

            <img
              src="{{ '/assets/images/research/progressive-failure/drilling-setup.jpg' | relative_url }}"
              alt="Drilling setup for quasi-isotropic composite specimen">

            <figcaption>
              Drilling setup used to introduce the open hole in the quasi-isotropic laminate.
              A lightly worn 6.25 mm drill bit was used at 1700 rpm with manual feed while the specimen edges were clamped.
            </figcaption>

          </figure>


          <figure class="progressive-figure">

            <video
              class="progressive-inline-video"
              autoplay
              loop
              muted
              playsinline
              preload="auto">

              <source
                src="{{ '/assets/videos/research/progressive-failure/drilling-process.MOV' | relative_url }}"
                type="video/mp4">

            </video>

            <figcaption>
              Drilling process from the experimental program.
            </figcaption>

          </figure>

        </div>



        <div class="progressive-copy">

          <span class="step-number">
            01 · DRILLING
          </span>

          <h2>
            The damage first begins with the drilling process.
          </h2>

          <p>
            Quasi-isotropic composite specimens were manufactured and drilled to create the open-hole configuration used for structural testing.
          </p>

          <p>
            The drilling process itself can introduce interlaminar damage around the hole, so the first step in the workflow was to create the hole under controlled experimental conditions.
          </p>

          <div class="progressive-note">

            <strong>Flow:</strong>
            drilling → nondestructive inspection → damage identification → finite element modeling → structural validation → progressive failure prediction.

          </div>

        </div>

      </div>



      <!-- ==================================================
           FLOW 2 — ULTRASOUND SCANNING
           ================================================== -->

      <div class="progressive-scroll-row">


        <div class="progressive-images">

          <figure class="progressive-figure">

            <img
              src="{{ '/assets/images/research/progressive-failure/ut-immersion-scan.png' | relative_url }}"
              alt="Ultrasound immersion scan of drilled composite specimen">

            <figcaption>
              The drilled specimens were inspected using an in-house ultrasound immersion system with a 15 MHz focused transducer.
            </figcaption>

          </figure>

        </div>



        <div class="progressive-copy">

          <span class="analysis-mode ut">
            Ultrasound Inspection
          </span>

          <span class="step-number">
            02 · SCANNING
          </span>

          <h2>
            After drilling, each specimen was scanned using ultrasound.
          </h2>

          <p>
            The drilled samples were inspected in an immersion scanning system.
            A 15 MHz focused transducer was used to collect ultrasound data through the laminate thickness.
          </p>

          <p>
            The scan data were then processed to locate the front and back surfaces, identify individual interfaces, and isolate the regions affected by drilling.
          </p>

          <div class="progressive-note">

            The scanning step is what connects the physical drilling process to the later damage model.
            The FE model is informed by what was actually measured inside the laminate.

          </div>

        </div>

      </div>



      <!-- ==================================================
           FLOW 3 — UT DAMAGE CHARACTERIZATION
           ================================================== -->

      <div class="progressive-scroll-row">


        <div class="progressive-images">

          <figure class="progressive-figure">

            <img
              src="{{ '/assets/images/research/progressive-failure/ut-damage-profile.png' | relative_url }}"
              alt="Three-dimensional ultrasound-derived drilling damage profile">

            <figcaption>
              Three-dimensional representation of drilling-induced delamination
              through the laminate thickness, quantified using an effective hole radius.
            </figcaption>

          </figure>

        </div>



        <div class="progressive-copy">

          <span class="analysis-mode ut">
            Ultrasound Inspection
          </span>

          <span class="step-number">
            03 · DAMAGE IDENTIFICATION
          </span>

          <h2>
            Drilling-induced delamination was characterized at each interface.
          </h2>

          <p>
            Ultrasound data were processed to identify the top and bottom surfaces
            of the laminate and then isolate the delaminated regions
            at different depths through the thickness.
          </p>

          <p>
            Rather than describing drilling damage using only the maximum
            damaged region, the study quantified the damage
            at individual ply interfaces.
          </p>


          <div class="progressive-note">

            The damage area increased through the laminate thickness,
            so a single two-dimensional damage value would not fully
            describe the actual drilling-induced delamination profile.

          </div>

        </div>

      </div>



      <!-- ==================================================
           ROW 2 — UT TO FEA
           ================================================== -->

      <div class="progressive-scroll-row">


        <div class="progressive-images">

          <figure class="progressive-figure progressive-media2">
            <video autoplay loop muted playsinline preload="auto">
              <source
                src="{{ '/assets/videos/research/progressive-failure/Media2.avi' | relative_url }}"
                type="video/x-msvideo">
            </video>
            <figcaption>
              Inspection-informed damage representation used before FE prediction.
            </figcaption>
          </figure>

          <figure class="progressive-figure">

            <img
              src="{{ '/assets/images/research/progressive-failure/ut-to-fea-damage.png' | relative_url }}"
              alt="Conversion of UT measured delamination into finite element cohesive damage">

            <figcaption>
              UT-measured drilling damage converted into an equivalent
              finite element representation using the effective radius
              of the damaged interface.
            </figcaption>

          </figure>

        </div>



        <div class="progressive-copy">

          <span class="analysis-mode fea">
            Finite Element Modeling
          </span>

          <span class="step-number">
            04 · INSPECTION TO PREDICTION
          </span>

          <h2>
            The measured delamination was transferred directly into the FE model.
          </h2>

          <p>
            The effective radius obtained from the ultrasound reconstruction
            was used to define an equivalent drilling-induced damage region
            within the cohesive interfaces of the finite element model.
          </p>

          <p>
            This provided a direct path from nondestructive inspection
            to structural simulation without first reproducing the complete
            drilling process numerically.
          </p>


          <h3>
            Progressive damage formulation
          </h3>

          <ul>

            <li>
              Solid composite plies
            </li>

            <li>
              Cohesive interfaces
            </li>

            <li>
              Matrix failure
            </li>

            <li>
              Fiber failure
            </li>

            <li>
              Progressive stiffness degradation
            </li>

          </ul>


          <div class="progressive-note fea-note">

            The key contribution is the connection between
            <strong>measured NDT damage</strong>
            and
            <strong>finite element structural prediction</strong>.

          </div>

        </div>

      </div>



      <!-- ==================================================
           ROW 3 — STRUCTURAL VALIDATION
           ================================================== -->

      <div class="progressive-scroll-row">


        <div class="progressive-images">

          <figure class="progressive-figure progressive-validation-large">

            <img
              src="{{ '/assets/images/research/progressive-failure/dic-fea-strain-validation.png' | relative_url }}"
              alt="Experimental DIC strain contours compared with finite element results">

            <figcaption>
              Experimental DIC strain-field evolution compared with
              finite element strain contours at increasing load levels.
            </figcaption>

          </figure>

        </div>



        <div class="progressive-copy">

          <span class="analysis-mode validation">
            Experimental Validation
          </span>

          <span class="step-number">
            05 · STRAIN FIELD VALIDATION
          </span>

          <h2>
            The structural simulation was validated against DIC strain contours.
          </h2>

          <p>
            Open-hole tension testing was used to evaluate the structural
            response of the damaged laminate.
          </p>

          <p>
            Digital image correlation measured the strain field around the hole,
            allowing the experimental strain contours to be compared directly
            with the finite element simulation.
          </p>


          <div class="progressive-note validation-note">

            The experimental and simulated strain fields showed
            similar spatial evolution around the drilled hole,
            supporting the inspection-informed modeling approach.

          </div>

        </div>

      </div>



      <!-- ==================================================
           ROW 4 — PROGRESSIVE FAILURE
           ================================================== -->

      <div class="progressive-scroll-row">


        <div class="progressive-images">

          <div class="progressive-three-video">

            <figure class="progressive-figure">
              <video autoplay loop muted playsinline preload="auto">
                <source
                  src="{{ '/assets/videos/research/progressive-failure/open-hole-experiment.mp4' | relative_url }}"
                  type="video/mp4">
              </video>
              <figcaption>Open-hole experiment.</figcaption>
            </figure>

            <figure class="progressive-figure">
              <video autoplay loop muted playsinline preload="auto">
                <source
                  src="{{ '/assets/videos/research/progressive-failure/progressive-failure-fea.mp4' | relative_url }}"
                  type="video/mp4">
              </video>
              <figcaption>Progressive failure simulation.</figcaption>
            </figure>

            <figure class="progressive-figure">
              <video autoplay loop muted playsinline preload="auto">
                <source
                  src="{{ '/assets/videos/research/progressive-failure/Media1.mp4' | relative_url }}"
                  type="video/mp4">
              </video>
              <figcaption>Damage evolution.</figcaption>
            </figure>

          </div>

          <figure class="progressive-figure">

            <img
              src="{{ '/assets/images/research/progressive-failure/experiment-simulation-failure.png' | relative_url }}"
              alt="Experimental and simulated final failure around the drilled hole">

            <figcaption>
              Final experimental and simulated failure patterns.
              The simulation tracks matrix failure, delamination,
              and fiber failure around the open hole.
            </figcaption>

          </figure>

        </div>



        <div class="progressive-copy">

          <span class="analysis-mode fea">
            Progressive Failure
          </span>

          <span class="step-number">
            06 · DAMAGE EVOLUTION
          </span>

          <h2>
            The model followed matrix failure, delamination, and final fiber failure.
          </h2>

          <p>
            Progressive damage analysis showed that matrix failure developed
            according to ply orientation, while the failure path was also
            influenced by neighboring plies.
          </p>

          <p>
            Interfacial delamination evolved alongside the intralaminar damage,
            followed by fiber failure in the plies aligned with the loading direction.
          </p>

          <p>
            The final experimental and simulated failure shapes showed
            similar overall intensity and geometry.
          </p>


          <div class="progressive-note fea-note">

            This extends the analysis beyond failure initiation:
            the model predicts the sequence from
            <strong>matrix damage → delamination → fiber failure</strong>.

          </div>

        </div>

      </div>



      <!-- ==================================================
           FINAL CONCLUSION FROM SLIDE 90
           ================================================== -->

      <div class="progressive-conclusion">

        <p class="eyebrow">
          RESEARCH SUMMARY
        </p>

        <h2>
          Key contribution
        </h2>

        <ul>

          <li>
            Characterized drilling-induced delamination
            at individual laminate interfaces using ultrasound.
          </li>

          <li>
            Transferred the measured drilling-induced damage
            into the finite element domain.
          </li>

          <li>
            Validated structural simulation results
            using experimental DIC strain contours.
          </li>

          <li>
            Characterized matrix failure,
            interfacial delamination,
            and fiber failure using progressive damage modeling.
          </li>

          <li>
            Demonstrated an inspection-to-prediction framework
            for evaluating the structural performance
            of drilled composite laminates.
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
        href="{{ '/research/l-shaped-delamination/' | relative_url }}">
        ← Research Project 2
      </a>


      <span class="project-counter">
        Research Project 3 of 3
      </span>


      <a
        class="hero-link primary"
        href="{{ '/research/' | relative_url }}">
        Back to Research Projects
      </a>


    </div>


  </div>

</section>




<script>
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('video').forEach(function (video) {
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.setAttribute('playsinline', '');
    const startVideo = function () {
      const p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(function () {});
      }
    };
    video.addEventListener('canplay', startVideo, { once: false });
    startVideo();
  });
});
</script>


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
          '.progressive-figure'
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
