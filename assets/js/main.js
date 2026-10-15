
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
  const photo = document.querySelector('.photo-frame');
  if (!canvas || !host || !photo) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  let dpr = 1;
  let width = 0;
  let height = 0;
  let meshLayer = null;
  let phase = 0;

  const cols = 121;
  const rows = 121;

  function roundedRectPath(context, x, y, w, h, r) {
    const radius = Math.min(r, w / 2, h / 2);
    context.beginPath();
    context.moveTo(x + radius, y);
    context.arcTo(x + w, y, x + w, y + h, radius);
    context.arcTo(x + w, y + h, x, y + h, radius);
    context.arcTo(x, y + h, x, y, radius);
    context.arcTo(x, y, x + w, y, radius);
    context.closePath();
  }

  function buildMesh() {
    const rect = host.getBoundingClientRect();
    const photoRect = photo.getBoundingClientRect();

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
    const lineColor = isLight ? 'rgba(0,115,155,.42)' : 'rgba(40,215,255,.40)';
    const nodeColor = isLight ? 'rgba(0,127,163,.82)' : 'rgba(40,215,255,.88)';
    const lineGlow = isLight ? 'rgba(37,99,185,.16)' : 'rgba(65,135,255,.18)';

    const px = photoRect.left - rect.left;
    const py = photoRect.top - rect.top;
    const pw = photoRect.width;
    const ph = photoRect.height;
    const margin = Math.max(18, Math.min(34, width * 0.035));

    const cut = {
      x: px - margin,
      y: py - margin,
      w: pw + margin * 2,
      h: ph + margin * 2,
      r: 34
    };

    const points = [];
    const sx = width / (cols - 1);
    const sy = height / (rows - 1);

    for (let r = 0; r < rows; r++) {
      const row = [];
      const stagger = (r % 2) * sx * 0.5;
      for (let col = 0; col < cols; col++) {
        const x = col * sx + stagger;
        const y = r * sy;
        row.push({
          x: Math.min(width, x),
          y
        });
      }
      points.push(row);
    }

    function insideCut(p) {
      return p.x > cut.x && p.x < cut.x + cut.w &&
             p.y > cut.y && p.y < cut.y + cut.h;
    }

    function drawEdge(a, b) {
      if (!a || !b || insideCut(a) || insideCut(b)) return;
      m.moveTo(a.x, a.y);
      m.lineTo(b.x, b.y);
    }

    m.save();
    m.lineWidth = 0.72;
    m.strokeStyle = lineColor;
    m.shadowBlur = 3;
    m.shadowColor = lineGlow;
    m.beginPath();

    for (let r = 0; r < rows; r++) {
      for (let col = 0; col < cols; col++) {
        const p = points[r][col];
        if (insideCut(p)) continue;

        drawEdge(p, points[r][col + 1]);
        if (r + 1 < rows) {
          drawEdge(p, points[r + 1][col]);
          drawEdge(p, points[r + 1][col + (r % 2 === 0 ? 1 : -1)]);
        }
      }
    }

    m.stroke();
    m.restore();

    m.save();
    m.fillStyle = nodeColor;
    m.shadowBlur = 3;
    m.shadowColor = nodeColor;

    let visibleNodes = 0;
    for (let r = 0; r < rows; r++) {
      for (let col = 0; col < cols; col++) {
        const p = points[r][col];
        if (insideCut(p)) continue;
        visibleNodes++;
        m.beginPath();
        m.arc(p.x, p.y, visibleNodes % 17 === 0 ? 1.25 : 0.72, 0, Math.PI * 2);
        m.fill();
      }
    }
    m.restore();

    m.save();
    m.globalCompositeOperation = 'destination-out';
    roundedRectPath(m, cut.x, cut.y, cut.w, cut.h, cut.r);
    m.fill();
    m.restore();

    canvas.dataset.meshNodes = String(visibleNodes);
  }

  function animate() {
    if (!meshLayer) {
      requestAnimationFrame(animate);
      return;
    }

    phase += 0.018;
    ctx.clearRect(0, 0, width, height);

    const pulse = 0.82 + Math.sin(phase) * 0.13;
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

