const tl = gsap.timeline();

tl.to("#apple-logo", {
  opacity: 1,
  delay: 1,
  duration: 2,
});
tl.to("#apple-logo", {
  opacity: 0,
  duration: 2,
});

tl.to(".heading", {
  opacity: 1,
  scale: 1.5,
  duration: 1,
});
tl.to(".heading", {
  opacity: 0,
  scale: 0,
  delay: 2,
  duration: 1,
});

tl.to("#root", {
  y: "-100%",
  duration: 2,
  ease: "power3.out",
});

tl.from("header", {
  opacity: 0,
  scaleX: 0,
  duration: 1,
  ease: "power3.out",
});

tl.from("#logo", {
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

tl.from("nav a", {
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out",
});

tl.from(".text", {
  opacity: 0,
  stagger: 0.1,
  y: 70,
  duration: 1,
  ease: "power3.out",
});
