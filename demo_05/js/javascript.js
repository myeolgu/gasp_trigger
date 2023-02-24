// Scroll Scenes
const scenes = gsap.utils.toArray('.scene');

// maybe use dymanic height for pin/scroll ends?
const height = ((scenes.length - 1) * 200) + '%';

// Scenes Timeline
const pinTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".scenes__items",
    pin: ".scenes",
    start: "center center",
    end: `+=${height}`,
    snap: 1 / 4,
    scrub: true,
  }
});
