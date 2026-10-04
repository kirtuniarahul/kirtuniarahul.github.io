---
layout: default
title: Research Projects
permalink: /research/
description: "Research projects of Kirtunia Rahul on composite failure analysis, delamination, and UT-informed progressive damage modeling."
---

<section class="page-hero research-hero">
  <div class="shell">
    <p class="eyebrow">02 · RESEARCH PROJECTS</p>
    <h1>Composite Failure Analysis</h1>
    <p>
      Three linked research projects covering failure onset, matrix failure and delamination,
      and progressive failure with nondestructive feature quantification.
    </p>
  </div>
</section>

<section class="page-content research-page">
  <div class="shell">

    <div class="research-intro-grid">
      <div class="research-intro-card">
        <span class="research-number">01</span>
        <h3>Failure Onset</h3>
        <p>Statistical failure envelope analysis of ply-orientation uncertainty.</p>
      </div>

      <div class="research-intro-card">
        <span class="research-number">02</span>
        <h3>Matrix Failure & Delamination</h3>
        <p>L-shaped laminates with inter-ply angle difference under static and fatigue loading.</p>
      </div>

      <div class="research-intro-card">
        <span class="research-number">03</span>
        <h3>Progressive Failure</h3>
        <p>Drilled-hole laminates with UT-informed delamination in finite element models.</p>
      </div>
    </div>

    <details class="research-detail-card" open>
      <summary>
        <div>
          <span class="project-kicker">Project 01 · Failure Onset</span>
          <h2>Laminates with Uncertainty in Determining Ply Orientation</h2>
          <p>
            A statistical and finite-element-based framework for understanding how uncertainty in measured ply
            orientation affects stiffness prediction and Tsai-Wu failure envelopes.
          </p>
        </div>
        <span class="open-indicator">Details</span>
      </summary>

      <div class="research-detail-body">
        <div class="research-media-grid">
          <figure>
            <img src="{{ '/assets/images/research/failure-onset-envelope.png' | relative_url }}" alt="Failure onset envelope visualization">
            <figcaption>Failure envelope and uncertainty visualization.</figcaption>
          </figure>

          <figure>
            <img src="{{ '/assets/images/research/failure-onset-cdf.png' | relative_url }}" alt="CDF comparison for ply orientation uncertainty">
            <figcaption>CDF-based comparison of failure response.</figcaption>
          </figure>

          <figure>
            <img src="{{ '/assets/images/research/failure-onset-fea.png' | relative_url }}" alt="Finite element based failure onset study">
            <figcaption>Finite-element validation of statistical predictions.</figcaption>
          </figure>
        </div>

        <div class="research-two-column">
          <div>
            <h3>Problem</h3>
            <p>
              Ply orientation controls directional stiffness and failure strength in CFRP laminates. Manufacturing
              misalignment or uncertainty from inspection can shift the predicted failure envelope and lead to
              inaccurate repair, replacement, or operating decisions.
            </p>

            <h3>Approach</h3>
            <ul>
              <li>Modeled ply orientation as a stochastic variable.</li>
              <li>Used classical laminate theory and Tsai-Wu failure criteria.</li>
              <li>Compared Monte Carlo simulation, MVFOSM, and finite-element-based prediction.</li>
              <li>Visualized probability of failure using cumulative density functions.</li>
            </ul>
          </div>

          <div>
            <h3>Outcome</h3>
            <p>
              The work shows how small orientation variability can alter stiffness and failure predictions,
              while larger uncertainty broadens the failure envelope and can change an inspector's decision about
              whether a laminate is safe for service.
            </p>

            <div class="tag-row">
              <span>Tsai-Wu</span>
              <span>Monte Carlo</span>
              <span>MVFOSM</span>
              <span>Failure Envelope</span>
              <span>UT Uncertainty</span>
            </div>
          </div>
        </div>
      </div>
    </details>

    <details class="research-detail-card">
      <summary>
        <div>
          <span class="project-kicker">Project 02 · Matrix Failure & Delamination</span>
          <h2>L-Shaped Laminates with Inter-Ply Angle Difference</h2>
          <p>
            Experimental and numerical study of how inter-ply angle difference changes delamination initiation,
            matrix cracking, stiffness degradation, and fatigue life.
          </p>
        </div>
        <span class="open-indicator">Details</span>
      </summary>

      <div class="research-detail-body">
        <div class="research-media-grid">
          <figure>
            <img src="{{ '/assets/images/research/lshape-static-response.png' | relative_url }}" alt="L-shaped laminate static response">
            <figcaption>Force–displacement and stiffness response.</figcaption>
          </figure>

          <figure>
            <img src="{{ '/assets/images/research/lshape-delamination.png' | relative_url }}" alt="Delamination progression in L-shaped laminate">
            <figcaption>Delamination progression and critical stress regions.</figcaption>
          </figure>

          <figure>
            <img src="{{ '/assets/images/research/lshape-xct.png' | relative_url }}" alt="XCT and microscopy of L-shaped laminate damage">
            <figcaption>XCT and microscopy-based damage verification.</figcaption>
          </figure>
        </div>

        <div class="research-two-column">
          <div>
            <h3>Problem</h3>
            <p>
              Curved composite parts such as brackets and L-shaped structures experience high through-thickness
              stresses. These stresses can initiate matrix cracking and delamination, especially when stacking
              sequence and inter-ply angle differences are not optimized.
            </p>

            <h3>Approach</h3>
            <ul>
              <li>Manufactured UD, helicoidal, quasi-isotropic, and cross-ply L-shaped laminates.</li>
              <li>Performed static four-point bending based on ASTM D6415 concepts.</li>
              <li>Used cohesive-zone modeling with experimentally informed interfacial strength.</li>
              <li>Compared static failure with fatigue-driven stiffness degradation and delamination growth.</li>
            </ul>
          </div>

          <div>
            <h3>Outcome</h3>
            <p>
              Quasi-isotropic laminates showed strong delamination resistance, while unidirectional laminates
              exhibited high bending stiffness. The simulations captured load response, delamination onset, and
              the first load drop with close agreement to experiments.
            </p>

            <div class="tag-row">
              <span>L-shaped Laminates</span>
              <span>CZM</span>
              <span>Hashin</span>
              <span>XCT</span>
              <span>Fatigue</span>
            </div>
          </div>
        </div>

        <div class="research-video-grid">
          <video class="research-video" controls muted preload="metadata">
            <source src="{{ '/assets/videos/research/lshape-overview.mp4' | relative_url }}" type="video/mp4">
          </video>

          <video class="research-video" controls muted preload="metadata">
            <source src="{{ '/assets/videos/research/lshape-fatigue.mp4' | relative_url }}" type="video/mp4">
          </video>
        </div>
      </div>
    </details>

    <details class="research-detail-card">
      <summary>
        <div>
          <span class="project-kicker">Project 03 · Progressive Failure</span>
          <h2>Drilled-Hole Laminates with UT-Informed Delamination</h2>
          <p>
            A progressive damage modeling framework where nondestructive inspection data from drilling-induced
            damage is translated into an equivalent finite element damage representation.
          </p>
        </div>
        <span class="open-indicator">Details</span>
      </summary>

      <div class="research-detail-body">
        <div class="research-media-grid">
          <figure>
            <img src="{{ '/assets/images/research/drilled-hole-model.png' | relative_url }}" alt="Drilled hole finite element model">
            <figcaption>Finite element model for drilled-hole laminates.</figcaption>
          </figure>

          <figure>
            <img src="{{ '/assets/images/research/drilled-hole-damage.png' | relative_url }}" alt="Drilling induced damage identification">
            <figcaption>Damage identification and effective radius conversion.</figcaption>
          </figure>

          <figure>
            <img src="{{ '/assets/images/research/drilled-hole-framework.png' | relative_url }}" alt="UT-informed drilling damage framework">
            <figcaption>UT-informed inspection-to-prediction framework.</figcaption>
          </figure>
        </div>

        <div class="research-two-column">
          <div>
            <h3>Problem</h3>
            <p>
              Drilling creates local delamination and damage around holes in composite laminates. Traditional
              workflows can require expensive process simulation before structural simulation, making practical
              assessment time-consuming.
            </p>

            <h3>Approach</h3>
            <ul>
              <li>Used ultrasound inspection to identify drilling-induced delamination features.</li>
              <li>Converted measured damage into an effective finite element representation.</li>
              <li>Modeled progressive failure and stiffness degradation around open-hole laminates.</li>
              <li>Connected inspection data with structural prediction.</li>
            </ul>
          </div>

          <div>
            <h3>Outcome</h3>
            <p>
              The project demonstrates a path from nondestructive inspection to finite element prediction,
              allowing measured delamination features to inform progressive failure simulations more directly.
            </p>

            <div class="tag-row">
              <span>Open-Hole Tension</span>
              <span>UT</span>
              <span>Progressive Damage</span>
              <span>Element Degradation</span>
              <span>Abaqus</span>
            </div>
          </div>
        </div>

        <div class="research-video-grid three-videos">
          <video class="research-video" controls muted preload="metadata">
            <source src="{{ '/assets/videos/research/drilled-hole-overview.mp4' | relative_url }}" type="video/mp4">
          </video>

          <video class="research-video" controls muted preload="metadata">
            <source src="{{ '/assets/videos/research/drilling-process.mov' | relative_url }}" type="video/quicktime">
          </video>

          <video class="research-video" controls muted preload="metadata">
            <source src="{{ '/assets/videos/research/drilled-hole-fea.mp4' | relative_url }}" type="video/mp4">
          </video>
        </div>
      </div>
    </details>

  </div>
</section>
