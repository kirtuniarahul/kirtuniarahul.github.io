
(() => {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('[data-theme-choice]');
  const savedTheme = localStorage.getItem('portfolio-theme');
  const initialTheme = savedTheme === 'light' ? 'light' : 'dark';

  function applyTheme(theme) {
    const nextTheme = theme === 'light' ? 'light' : 'dark';
    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);

    buttons.forEach((button) => {
      const active = button.dataset.themeChoice === nextTheme;
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
  }

  applyTheme(initialTheme);

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      applyTheme(button.dataset.themeChoice);
    });
  });
})();

(() => {
  const canvas = document.getElementById('engineering-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let width = 0, height = 0, dpr = 1;
  let points = [];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(28, Math.min(70, Math.floor(width / 22)));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: 1 + Math.random() * 1.5
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < points.length; i++) {
      const a = points[i];
      a.x += a.vx;
      a.y += a.vy;

      if (a.x < -30) a.x = width + 30;
      if (a.x > width + 30) a.x = -30;
      if (a.y < -30) a.y = height + 30;
      if (a.y > height + 30) a.y = -30;

      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fillStyle = i % 3 === 0
        ? 'rgba(40,215,255,.75)'
        : i % 3 === 1
        ? 'rgba(141,92,255,.58)'
        : 'rgba(65,135,255,.58)';
      ctx.fill();

      for (let j = i + 1; j < points.length; j++) {
        const b = points[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 125) {
          const alpha = (1 - dist / 125) * 0.18;
          ctx.strokeStyle = `rgba(64,180,255,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  requestAnimationFrame(draw);
})();


(() => {
  const canvas = document.getElementById('hero-mesh-canvas');
  const host = document.querySelector('.node-network');
  if (!canvas || !host) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let dpr = 1;
  let width = 0;
  let height = 0;
  let meshLayer = null;
  let phase = 0;

  const cols = 20;
  const rows = 25; // exactly 500 nodes

  function buildMesh() {
    const rect = host.getBoundingClientRect();

    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    meshLayer = document.createElement('canvas');
    meshLayer.width = canvas.width;
    meshLayer.height = canvas.height;
    const m = meshLayer.getContext('2d', { alpha: true });
    m.setTransform(dpr, 0, 0, dpr, 0, 0);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const lineColor = isLight ? 'rgba(0,115,155,.48)' : 'rgba(40,215,255,.48)';
    const nodeColor = isLight ? 'rgba(0,127,163,.90)' : 'rgba(40,215,255,.92)';
    const lineGlow = isLight ? 'rgba(37,99,185,.18)' : 'rgba(65,135,255,.22)';

    const points = [];
    const sx = width / (cols - 1);
    const sy = height / (rows - 1);

    for (let r = 0; r < rows; r++) {
      const row = [];
      const stagger = (r % 2) * sx * 0.5;
      for (let col = 0; col < cols; col++) {
        const x = Math.min(width, col * sx + stagger);
        const y = r * sy;
        row.push({ x, y });
      }
      points.push(row);
    }

    function drawEdge(a, b) {
      if (!a || !b) return;
      m.moveTo(a.x, a.y);
      m.lineTo(b.x, b.y);
    }

    m.save();
    m.lineWidth = 1.05;
    m.strokeStyle = lineColor;
    m.shadowBlur = 4;
    m.shadowColor = lineGlow;
    m.beginPath();

    for (let r = 0; r < rows; r++) {
      for (let col = 0; col < cols; col++) {
        const p = points[r][col];
        drawEdge(p, points[r][col + 1]);

        if (r + 1 < rows) {
          drawEdge(p, points[r + 1][col]);
          drawEdge(p, points[r + 1][col + (r % 2 === 0 ? 1 : -1)]);
        }

        if (r + 2 < rows && col % 3 === 0) {
          drawEdge(p, points[r + 2][col]);
        }
      }
    }

    m.stroke();
    m.restore();

    m.save();
    m.fillStyle = nodeColor;
    m.shadowBlur = 4;
    m.shadowColor = nodeColor;

    let nodeCount = 0;
    for (let r = 0; r < rows; r++) {
      for (let col = 0; col < cols; col++) {
        const p = points[r][col];
        nodeCount++;
        m.beginPath();
        m.arc(p.x, p.y, nodeCount % 13 === 0 ? 1.9 : 1.25, 0, Math.PI * 2);
        m.fill();
      }
    }
    m.restore();

    canvas.dataset.meshNodes = String(nodeCount);
  }

  function animate() {
    if (!meshLayer) {
      requestAnimationFrame(animate);
      return;
    }

    phase += 0.02;
    ctx.clearRect(0, 0, width, height);

    const pulse = 0.84 + Math.sin(phase) * 0.14;
    ctx.save();
    ctx.globalAlpha = pulse;
    ctx.drawImage(meshLayer, 0, 0, meshLayer.width, meshLayer.height, 0, 0, width, height);
    ctx.restore();

    requestAnimationFrame(animate);
  }

  buildMesh();
  window.addEventListener('resize', buildMesh, { passive: true });

  const observer = new MutationObserver((mutations) => {
    if (mutations.some((m) => m.attributeName === 'data-theme')) buildMesh();
  });
  observer.observe(document.documentElement, { attributes: true });

  requestAnimationFrame(animate);
})();

