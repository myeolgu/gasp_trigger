gsap.registerPlugin(ScrollTrigger);

// Scroll Scenes
const scenes = gsap.utils.toArray('.panel');
// maybe use dymanic height for pin/scroll ends?
const height = ((scenes.length - 1) * 200) + '%';


gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "center center",
    end: `+=${height}`,
    pin: true,
    pinSpacing: false,
    snap: 1 / 4
  });
});
