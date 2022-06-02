
import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"

const scrollTracker = document.querySelector(".scroll-tracker");

const animatedImages = document.querySelectorAll(".image-rotate-in");

const scrollTime = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)]
})

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

scrollTracker.animate(
  {
    transform: ['scaleX(0)', 'scaleX(1)']
  },
  {
    duration: 1,
    timeline: scrollTime,
  }
);
