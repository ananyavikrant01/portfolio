const nav = [
  ["index.html", "Home"],
  ["about.html", "Bio Data"],
  ["case-study.html", "Projects"],
  ["ananya_resume.html", "Resume"],
];
const cur = document.body.dataset.page;
document
  .querySelector(".site")
  .insertAdjacentHTML(
    "afterbegin",
    `<nav>${nav.map((n) => `<a href="${n[0]}" class="${cur == n[0] ? "on" : ""}">${n[1]}</a>`).join("")}<span class="sp"></span><a class="dot" href="https://linkedin.com" style="background:var(--yellow)">in</a><a class="dot" href="https://dribbble.com" style="background:var(--pink)">●</a><a class="dot" href="https://github.com" style="background:var(--green)">gh</a><a class="cta ${cur == "contact.html" ? "on" : ""}" href="contact.html">♥ Contact</a></nav>`,
  );
document
  .querySelector(".site")
  .insertAdjacentHTML("beforeend", "<footer>© 2026 Ananya Vikrant </footer>");
const tl = document.getElementById("type");
if (tl) {
  const s = tl.dataset.text;
  let i = 0;
  (function n() {
    tl.firstChild.textContent = s.slice(0, i++);
    if (i <= s.length) setTimeout(n, 45);
  })();
}
document.addEventListener("mousemove", (e) =>
  document
    .querySelectorAll(".face")
    .forEach(
      (f, i) =>
        (f.style.transform = `translate(${(e.clientX / innerWidth - 0.5) * (i ? -14 : 14)}px,${(e.clientY / innerHeight - 0.5) * 10}px)`),
    ),
);
document.querySelectorAll(".filters button").forEach(
  (b) =>
    (b.onclick = () => {
      document.querySelectorAll(".filters button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      document
        .querySelectorAll("[data-c]")
        .forEach((p) => (p.hidden = b.dataset.f != "all" && p.dataset.c != b.dataset.f));
    }),
);
setTimeout(
  () => document.querySelectorAll(".bar i").forEach((i) => (i.style.width = i.dataset.w)),
  200,
);
const f = document.getElementById("cf");
if (f)
  f.onsubmit = (e) => {
    e.preventDefault();
    f.querySelector("button").textContent = "Sent! (demo)";
    f.reset();
  };

// Folder windows
let z = 40;
const open = (id) => {
  const w = document.getElementById(id);
  w.hidden = false;
  w.style.zIndex = ++z;
  w.querySelectorAll(".bar i").forEach((i) => {
    i.style.width = 0;
    setTimeout(() => (i.style.width = i.dataset.w), 50);
  });
};
document.querySelectorAll(".fold").forEach((b) => (b.onclick = () => open(b.dataset.open)));
document.querySelectorAll(".win").forEach((w) => {
  w.querySelector(".x").onclick = () => (w.hidden = true);
  const bar = w.querySelector(".wbar");
  let d = null;
  bar.onmousedown = (e) => {
    if (e.target.closest(".x")) return;
    w.style.zIndex = ++z;
    const r = w.getBoundingClientRect();
    w.style.transform = "none";
    w.style.left = r.left + "px";
    w.style.top = r.top + "px";
    d = [e.clientX - r.left, e.clientY - r.top];
  };
  addEventListener("mousemove", (e) => {
    if (d) {
      w.style.left = e.clientX - d[0] + "px";
      w.style.top = e.clientY - d[1] + "px";
    }
  });
  addEventListener("mouseup", () => (d = null));
});
addEventListener("keydown", (e) => {
  if (e.key == "Escape") document.querySelectorAll(".win").forEach((w) => (w.hidden = true));
});
