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
