/* Live analog watch — visitor local time. Original face, no brand.
   Background movement is scroll-driven, not a CSS infinite spin. */
(function () {
  const CX = 120;
  const CY = 120;
  let started = false;
  let raf = 0;
  let lastMinute = -1;
  let reduced = false;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function timeLabel(d) {
    const h = d.getHours();
    const m = d.getMinutes();
    const h12 = h % 12 || 12;
    const ap = h < 12 ? "AM" : "PM";
    return "Local time " + h12 + ":" + pad(m) + " " + ap;
  }

  function setHands(face, d) {
    const ms = d.getMilliseconds();
    const s = d.getSeconds() + ms / 1000;
    const m = d.getMinutes() + s / 60;
    const h = (d.getHours() % 12) + m / 60;
    const hour = face.querySelector(".hand-hour");
    const minute = face.querySelector(".hand-minute");
    const second = face.querySelector(".hand-second");
    if (hour) hour.setAttribute("transform", "rotate(" + (h * 30) + " " + CX + " " + CY + ")");
    if (minute) minute.setAttribute("transform", "rotate(" + (m * 6) + " " + CX + " " + CY + ")");
    if (second) second.setAttribute("transform", "rotate(" + (s * 6) + " " + CX + " " + CY + ")");
  }

  function paint() {
    const root = document.querySelector(".live-watch");
    const face = root && root.querySelector("svg");
    if (!face) return;
    const d = new Date();
    setHands(face, d);
    const key = d.getHours() * 60 + d.getMinutes();
    if (key !== lastMinute) {
      lastMinute = key;
      root.setAttribute("aria-label", timeLabel(d));
    }
  }

  function loop() {
    paint();
    raf = requestAnimationFrame(loop);
  }

  function stopLoop() {
    if (raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  }

  function startLoop() {
    stopLoop();
    paint();
    if (!reduced) raf = requestAnimationFrame(loop);
  }

  const GEARS = [
    { sel: ".mv-rotor", ox: 400, oy: 400, ratio: 1 },
    { sel: ".mv-center", ox: 400, oy: 400, ratio: 0.74 },
    { sel: ".mv-barrel", ox: 268, oy: 388, ratio: 0.36 },
    { sel: ".mv-third", ox: 508, oy: 478, ratio: 2.4 },
    { sel: ".mv-fourth", ox: 400, oy: 548, ratio: 1.55 },
    { sel: ".mv-escape", ox: 512, oy: 332, ratio: 4.2 },
    { sel: ".mv-pinion", ox: 698, oy: 400, ratio: 3.1 },
    { sel: ".mv-crown", ox: 783, oy: 400, ratio: 2.2 }
  ];

  function initMovementScroll() {
    const host = document.querySelector(".movement");
    if (!host || host.dataset.scrollBound) return;
    host.dataset.scrollBound = "1";

    let lastY = window.scrollY || 0;
    let lastT = performance.now();
    let vel = 0;
    let angle = lastY * 0.14;
    let coast = 0;
    let mvRaf = 0;

    function applyPose(frozen) {
      const svg = host.querySelector("svg");
      const y = window.scrollY || 0;
      const hero = document.querySelector(".hero");
      const heroH = hero ? hero.offsetHeight : 560;
      const one = document.body.classList.contains("is-one");

      let op = 0.13;
      if (one) op = 0;
      else {
        const t = Math.min(1, Math.max(0, (y - heroH * 0.12) / (heroH + 320)));
        op = 0.15 * (1 - t * 0.76);
      }
      host.style.opacity = String(op);
      host.style.visibility = one ? "hidden" : "visible";

      host.style.transform = "translate(-50%, -50%)";

      if (!svg) return;
      const a = frozen ? y * 0.14 : angle;
      for (let i = 0; i < GEARS.length; i++) {
        const g = GEARS[i];
        const el = svg.querySelector(g.sel);
        if (!el) continue;
        el.style.transformBox = "view-box";
        el.style.transformOrigin = g.ox + "px " + g.oy + "px";
        if (g.sel === ".mv-crown") {
          el.style.transform = "perspective(90px) rotateX(" + (a * g.ratio).toFixed(3) + "deg)";
        } else {
          el.style.transform = "rotate(" + (a * g.ratio).toFixed(3) + "deg)";
        }
      }
      const bal = svg.querySelector(".mv-balance");
      if (bal) {
        bal.style.transformBox = "view-box";
        bal.style.transformOrigin = "572px 214px";
        const osc = frozen ? 0 : Math.sin(a * 0.09) * 50;
        bal.style.transform = "rotate(" + osc.toFixed(3) + "deg)";
      }
    }

    function tick(now) {
      const y = window.scrollY || 0;
      const dt = Math.max(8, Math.min(48, now - lastT));
      const inst = ((y - lastY) / dt) * 1000;
      vel = vel * 0.84 + inst * 0.16;
      const dy = y - lastY;
      lastY = y;
      lastT = now;

      if (!reduced) {
        angle += dy * 0.165 + vel * 0.0035;
        if (Math.abs(dy) > 0.15) coast = vel * 0.011;
        else {
          angle += coast * (dt / 16);
          coast *= 0.962;
        }
      }

      applyPose(reduced);
      mvRaf = requestAnimationFrame(tick);
    }

    window.addEventListener("scroll", function () {}, { passive: true });
    lastY = window.scrollY || 0;
    lastT = performance.now();
    applyPose(reduced);
    mvRaf = requestAnimationFrame(tick);
  }

  function loadMovement() {
    const host = document.querySelector(".movement");
    if (!host) return;
    const boot = function () {
      initMovementScroll();
    };
    if (host.querySelector("svg")) {
      boot();
      return;
    }
    fetch("movement.svg?v=8")
      .then(function (r) { return r.ok ? r.text() : Promise.reject(); })
      .then(function (svg) {
        host.innerHTML = svg;
        boot();
      })
      .catch(function () {});
  }

  function initClock() {
    if (started) return;
    const root = document.querySelector(".live-watch");
    if (!root) return;
    started = true;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced = !!mq.matches;
    const onMq = function () {
      reduced = !!mq.matches;
      document.body.classList.toggle("reduce-motion", reduced);
      startLoop();
    };
    if (mq.addEventListener) mq.addEventListener("change", onMq);
    else if (mq.addListener) mq.addListener(onMq);
    document.body.classList.toggle("reduce-motion", reduced);

    loadMovement();
    startLoop();

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stopLoop();
        paint();
      } else {
        startLoop();
      }
    });
  }

  window.initClock = initClock;
})();
