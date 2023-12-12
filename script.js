const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var crsr = document.querySelector(".crsr");
document.addEventListener("mousemove", function (dets) {
  gsap.to(crsr, {
    left: dets.x,
    top: dets.y,
  });
});
