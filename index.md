---
layout: default
title: Home
description: "Engineering portfolio of Kirtunia Rahul, Ph.D. — composite structures, finite element analysis, and advanced manufacturing."
---
<nav class="home-tabs">
  <a href="#education">Education</a>
  <a href="#research">Research Projects</a>
  <a href="#experience">Experience</a>
  <a href="#publications">Publications</a>
</nav>

<section class="hero section-dark">
  <div class="container hero-grid">
    <div class="hero-copy">
      <p class="eyebrow">Composite Structural Engineer · FEA · Advanced Manufacturing</p>
      <h1>Kirtunia Rahul, Ph.D.</h1>
      <p class="hero-lead">
        I work at the intersection of composite mechanics, structural simulation,
        manufacturing, and product development — turning analysis into practical
        engineering decisions.
      </p>

      <div class="hero-actions">
        <a class="btn btn-primary" href="{{ '/projects/' | relative_url }}">View Projects</a>
        <a class="btn btn-outline" href="{{ '/resume/' | relative_url }}">View Resume</a>
      </div>

      <div class="quick-links">
        <a href="mailto:kirtunia_rahul1@alumni.baylor.edu">Email</a>
        <a href="https://www.linkedin.com/in/kirtunia-rahul" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/kirtuniarahul" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>

    <div class="hero-photo-wrap">
      <img class="hero-photo" src="{{ '/assets/images/profile.png' | relative_url }}" alt="Portrait of Kirtunia Rahul">
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">What I do</p>
      <h2>Engineering across analysis, materials, and manufacturing</h2>
    </div>

    <div class="card-grid three">
      <article class="info-card">
        <h3>Structural Simulation</h3>
        <p>Finite element analysis, nonlinear response, load-path evaluation, deformation control, and design iteration.</p>
      </article>

      <article class="info-card">
        <h3>Composite Engineering</h3>
        <p>Laminate design, failure analysis, reinforcement strategy, delamination, testing, and NDT-informed modeling.</p>
      </article>

      <article class="info-card">
        <h3>Manufacturing & Value Engineering</h3>
        <p>Material optimization, DFM, process development, automation enablement, and engineering support from concept to production.</p>
      </article>
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Selected work</p>
      <h2>Featured engineering projects</h2>
    </div>

    <div class="featured-project">
      <div class="featured-media">
        <img src="{{ '/assets/images/fea-project.png' | relative_url }}" alt="Finite element analysis project visualization">
      </div>
      <div class="featured-copy">
        <span class="tag">FEA · Composites · Optimization</span>
        <h3>Composite Structural Optimization</h3>
        <p>
          FEA-driven design optimization of fiberglass composite structures under realistic loading conditions,
          including deformation control, reinforcement placement, laminate decisions, and manufacturing feasibility.
        </p>
        <a class="text-link" href="{{ '/projects/' | relative_url }}">Explore projects →</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-heading">
      <p class="eyebrow">Research background</p>
      <h2>Composite failure, NDT, and computational mechanics</h2>
    </div>

    <div class="split-grid">
      <div>
        <p>
          My doctoral research focused on failure analysis of composite structures using
          finite element modeling and nondestructive evaluation. My work combines
          simulation, testing, microscopy, and image-based characterization.
        </p>
        <a class="btn btn-secondary" href="{{ '/research/' | relative_url }}">Research overview</a>
      </div>

      <div class="stat-grid">
        <div class="stat-card"><strong>Ph.D.</strong><span>Mechanical Engineering</span></div>
        <div class="stat-card"><strong>FEA</strong><span>ABAQUS · ANSYS · SolidWorks</span></div>
        <div class="stat-card"><strong>NDT</strong><span>UT · XCT · Microscopy</span></div>
        <div class="stat-card"><strong>CAD</strong><span>SolidWorks · Automation</span></div>
      </div>
    </div>
  </div>
</section>

<section class="section section-dark">
  <div class="container cta">
    <div>
      <p class="eyebrow">Let’s connect</p>
      <h2>Interested in composite structures, simulation, or advanced manufacturing?</h2>
    </div>
    <a class="btn btn-primary" href="{{ '/contact/' | relative_url }}">Contact Me</a>
  </div>
</section>
