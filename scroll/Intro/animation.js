gsap.registerPlugin(ScrollTrigger);

gsap.to('.c', {
  scrollTrigger: {
    trigger: '.c',
    toggleActions: 'restart pause reserve pause',
  },
  x: 400,
  rotation: 360,
  duration: 3,
  markers: true,
});
