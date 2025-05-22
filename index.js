var crsr = document.querySelector(".cursor");
var crsrb = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (ev) {
  crsr.style.transform = `translate(${ev.x - 10}px, ${ev.y - 10}px)`;
  crsrb.style.transform = `translate(${ev.x - 150}px, ${ev.y - 150}px)`;
});
var links = document.querySelectorAll("#nav a");
links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    crsr.classList.add("cursorLink");
    document.addEventListener("mousemove", function (ev) {
      crsr.style.transform = `translate(${ev.x - 32}px, ${ev.y - 32}px)`;
    });
  });

  link.addEventListener("mouseleave", () => {
    crsr.classList.remove("cursorLink");
    document.addEventListener("mousemove", function (ev) {
      crsr.style.transform = `translate(${ev.x - 10}px, ${ev.y - 10}px)`;
    });
  });
});

gsap.to("#nav", {
  backgroundColor: "black",
  duration: 0.5,
  height: "90px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -10%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
