/* Live analog watch — visitor local time. Original face, no brand. */
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

  function loadMovement() {
    const host = document.querySelector(".movement");
    if (!host || host.querySelector("svg")) return;
    fetch("movement.svg")
      .then(function (r) { return r.ok ? r.text() : Promise.reject(); })
      .then(function (svg) { host.innerHTML = svg; })
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
