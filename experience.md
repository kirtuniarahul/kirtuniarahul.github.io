---
layout: default
title: Experience
permalink: /experience/
description: "Professional experience of Kirtunia Rahul."
---

<style>
/* Experience timeline — centered square logo column */
.timeline-content .degree-badge{
  font-size:1rem;
  padding:9px 14px;
}

.timeline::before{
  display:none;
}

.timeline-card{
  grid-template-columns:260px minmax(0,1fr);
  gap:34px;
  align-items:center;
}

.timeline-year{
  width:100%;
  padding:0;
  border:0;
  background:transparent;
  border-radius:0;
  align-self:center;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:12px;
  text-align:center;
}

.experience-logo{
  width:230px;
  height:230px;
  aspect-ratio:1 / 1;
  object-fit:contain;
  display:block;
  margin:0 auto;
  padding:6px;
  box-sizing:border-box;
  border-radius:18px;
  background:rgba(255,255,255,.96);
  border:1px solid rgba(255,255,255,.12);
}

@media(max-width:700px){
  .timeline-card{
    grid-template-columns:1fr;
    gap:18px;
  }

  .timeline-year{
    width:100%;
  }

  .experience-logo{
    width:200px;
    height:200px;
  }
}
</style>

<section class="page-hero">
  <div class="shell">
    <p class="eyebrow">03 · PROFESSIONAL EXPERIENCE</p>
    <h1>Experience</h1>
    <p>Professional experience across composite structures, pipeline integrity, research, industrial engineering, and naval architecture.</p>
  </div>
</section>

<section class="page-content">
  <div class="shell">
    <div class="timeline">

      <article class="timeline-card">
        <div class="timeline-year">
          Present
          <img class="experience-logo" src="{{ '/assets/images/experience/latham.png' | relative_url }}" alt="Latham logo">
        </div>
        <div class="timeline-content">
          <span class="degree-badge">Senior Composite Structural Engineer</span>
          <h3>Latham</h3>
          <h4>Zephyrhills, Florida</h4>
          <p class="education-meta">Jan 2026–Present</p>
          <ul>
            <li>Supported multiple new product launches through FEA-based structural stress and failure analysis and load case development for manufacturing validation of composite structures under service, transportation, and extreme loading conditions.</li>
            <li>Performed design iterations and structural assessments to evaluate stress, deformation, failure risk, laminate configuration, and reinforcement requirements while balancing structural performance, manufacturability, and cost.</li>
            <li>Led process development trials and root cause analysis to develop new laminate systems and a new flake-resin spray process maintaining structural integrity while reducing manufacturing costs by approximately $1M annually</li>
          </ul>
        </div>
      </article>

      <article class="timeline-card">
        <div class="timeline-year">
          2025
          <img class="experience-logo" src="{{ '/assets/images/experience/cres.png' | relative_url }}" alt="Center for Reliable Energy Systems logo">
        </div>
        <div class="timeline-content">
          <span class="degree-badge alt">Research Engineer II</span>
          <h3>Center for Reliable Energy Systems</h3>
          <h4>Dublin, Ohio</h4>
          <p class="education-meta">Apr 2025–Dec 2025</p>
          <ul>
            <li>Conducted metallic pipeline integrity assessments using classical engineering calculations and finite element analysis (FEA) under burst pressure, bending, axial loading, thermal loading, and geohazard-induced deformation.</li>
            <li>Performed fracture mechanics and Fitness-for-Service (API 579) assessments for damaged steel structures containing ILI (inline inspection) informed defects including corrosion, dents, cracks, weld defects, and gouges.</li>
            <li>Prepared engineering substantiation reports, technical documentation, and engineering procedures supporting regulatory compliance and design validation</li>
          </ul>
        </div>
      </article>

      <article class="timeline-card">
        <div class="timeline-year">
          2025
          <img class="experience-logo" src="{{ '/assets/images/experience/baylor.png' | relative_url }}" alt="Baylor University logo">
        </div>
        <div class="timeline-content">
          <span class="degree-badge third">Graduate Research Assistant</span>
          <h3>Baylor University</h3>
          <h4>Waco, Texas</h4>
          <p class="education-meta">Jan 2021–May 2025</p>
          <ul>
            <li>Developed advanced stress and failure analysis algorithms for FEA using Python and Fortran scripting (ABAQUS subroutines) validated through static and fatigue structural testing with prediction accuracy within 5% of experimental results.</li>
            <li>Developed statistical models for uncertainty quantification, aiding industries in assessing failure probabilities of composite within a confidence interval of 2.</li>
            <li>Designed and conducted static and fatigue experiments to validate structural models and investigate damage initiation and progression in carbon-fiber composite structures</li>
            <li>Developed NDT data analysis algorithms (X-ray CT, Ultrasound) using machine learning based signal and image processing for inherent damage detection and integrated into finite element models to improve structural failure prediction.</li>
          </ul>
        </div>
      </article>

      <article class="timeline-card">
        <div class="timeline-year">
          2019
          <img class="experience-logo" src="{{ '/assets/images/experience/berger.png' | relative_url }}" alt="Berger logo">
        </div>
        <div class="timeline-content">
          <span class="degree-badge alt">Territory Manager- Industrial</span>
          <h3>Berger Paints BD Ltd. Ltd.</h3>
          <h4>Chattogram, Bangladesh</h4>
          <p class="education-meta">March 2019 – November 2019</p>
          <ul>
            <li>Secured $50K contract through technical bid, budget estimation and solution presentation</li>
            <li>Drove NPI by aligning with design and manufacturing teams using DFMEA / DFA principles</li>
          </ul>
        </div>
      </article>

      <article class="timeline-card">
        <div class="timeline-year">
          2018
          <img class="experience-logo" src="{{ '/assets/images/experience/shipdyn.png' | relative_url }}" alt="ShipDyn logo">
        </div>
        <div class="timeline-content">
          <span class="degree-badge third">Assistant Naval Architect</span>
          <h3>ShipDyn Ltd.</h3>
          <h4>Dhaka, Bangladesh</h4>
          <p class="education-meta">Oct 2017–Nov 2020</p>
          <ul>
            <li>Designed hull structure and layout of 'Y-HULL' vessel using AutoCAD and Rhinoceros, maintaining GD&T requirements</li>
            <li>Performed structural stress analysis of marine metallic structures using ABAQUS and MAXSURF for sea-condition design optimization</li>
            <li>Assisted in designing tooling and fixtures; maintained multi-axis CNC programs (G-code & M-code) for plate cutting and assembly operations</li>
            <li>Generated BOQ documents and interfaced with customers to schedule timeline and milestones for project completion.</li>
          </ul>
        </div>
      </article>

    </div>
  </div>
</section>
