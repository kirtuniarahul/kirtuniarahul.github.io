---
layout: default
title: Education
permalink: /education/
description: "Education and academic background of Kirtunia Rahul."
---

<style>
/* Education timeline — centered degree photos */
.timeline::before{
  display:none;
}

.timeline-card{
  grid-template-columns:300px minmax(0,1fr);
  gap:38px;
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

.education-photo{
  width:270px;
  height:270px;
  aspect-ratio:1 / 1;
  object-fit:cover;
  object-position:center;
  display:block;
  margin:0 auto;
  border-radius:18px;
  border:1px solid rgba(255,255,255,.12);
  box-shadow:0 22px 60px rgba(0,0,0,.28);
}

@media(max-width:700px){
  .timeline-card{
    grid-template-columns:1fr;
    gap:20px;
  }

  .timeline-year{
    width:100%;
  }

  .education-photo{
    width:min(88vw,300px);
    height:min(88vw,300px);
  }
}
</style>

<section class="page-hero">
  <div class="shell">
    <p class="eyebrow">01 · ACADEMIC FOUNDATION</p>
    <h1>Education</h1>
    <p>Mechanical engineering, composite materials, and naval architecture.</p>
  </div>
</section>

<section class="page-content">
  <div class="shell">
    <div class="timeline">
      <article class="timeline-card">
        <div class="timeline-year">
          2025
          <img class="education-photo" src="{{ '/assets/images/education/download.jpg' | relative_url }}" alt="PhD graduation">
        </div>
        <div class="timeline-content">
          <span class="degree-badge">Doctor of Philosophy</span>
          <h3>Mechanical Engineering</h3>
          <h4>Baylor University</h4>
          <h5>Waco, Texas</h5>
          <p class="education-meta">
            January 2021 – May 2025
          </p>
          <p class="education-meta">
            CGPA: 3.95 / 4.00
          </p>          
          <p>
            Dissertation focused on finite-element-based failure analysis of composite structures
            with nondestructive evaluation feature quantification.
          </p>
          <div class="tag-row">
            <span>Composite Failure</span>
            <span>Experimental Validation</span>
            <span>FEA</span>
            <span>NDT</span>
            <span>Damage Mechanics</span>
          </div>
        </div>
      </article>

      <article class="timeline-card">
        <div class="timeline-year">
          2023
          <img class="education-photo" src="{{ '/assets/images/education/IMG_3077.JPG' | relative_url }}" alt="Master's graduation">
        </div>
        <div class="timeline-content">
          <span class="degree-badge alt">Masters</span>
          <h3>Mechanical Engineering</h3>
          <h4>Baylor University</h4>
          <h5>Waco, Texas</h5>
          <p class="education-meta">
            January 2021 – December 2023
          </p>
          <p class="education-meta">
            CGPA: 3.95 / 4.00
          </p>          
          <p>
            Statistical approach for failure analysis involving uncertainty in determining ply orientation.
          </p>
          <div class="tag-row">
            <span>Statistical Analysis</span>
            <span>Nondestructive Testing</span>
            <span>Failure Analysis</span>
          </div>
        </div>
      </article>

      <article class="timeline-card">
        <div class="timeline-year">
          2017
          <img class="education-photo" src="{{ '/assets/images/education/54799072_2690870917594859_4069746392183078912_n.jpg' | relative_url }}" alt="Bachelor's graduation">
        </div>
        <div class="timeline-content">
          <span class="degree-badge third">Bachelors</span>
          <h3>Naval Architecture & Marine Engineering</h3>
          <h4>Bangladesh University of Engineering and Technology (BUET)</h4>
          <h5>Dhaka, Bangladesh</h5>
          <p class="education-meta">
            February 2013 – September 2017
          </p>
          <p class="education-meta">
            CGPA: 3.26 / 4.00
          </p>          
          <p>
            Analysis of pressure characteristics of a propeller blade.
          </p>
          <div class="tag-row">
            <span>Ship Design and Structures</span>
            <span>CAD</span>
            <span>Fluid Mechanics</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
