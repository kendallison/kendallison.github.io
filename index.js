
import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"

const scrollTracker = document.querySelector(".scroll-tracker");

const animatedImages = document.querySelectorAll(".image-rotate-in");

const animatedLip = document.querySelector(".lip-down");

const aniTounge = document.querySelector(".tounge-move");

const animatedLipTime = new ScrollTimeline({
  scorllOffsets: [
    { target: animatedLip, edge: "end", threshold: "0" },
    { target: animatedLip, edge: "start", threshold: "0" }
  ],
});

const aniToungeTime = new ScrollTimeline({
  scrollOffsetts: [
    { target: aniTounge, edge: "end", threshold: "1" },
    { target: aniTounge, edge: "start", threshold: "1" }
  ],
});

animatedImages.forEach(image => {
  const animatedImageTime = new ScrollTimeline({
    scrollOffsets: [
      { target: image, edge: "end", threshold: "0" },
      { target: image, edge: "start", threshold: "0" }
    ],
  });
  image.animate(
    {
      transform: ["translateY(800px)", "translate(0)"],
    },
    {
      duration: 1,
      timeline: animatedImageTime,
    }
  );
});

animatedLip.animate(
  {
    transform: ["translateY(-100px)", "translate(0)"],
  },
  {
    duration: 1,
    timeline: animatedLipTime,
  }
);

aniTounge.animate(
  {
    transform: ["translateY(-800px)", "translate()"],
  },
  {
    duration: 1,
    timeline: animatedLipTime,
  }
);
