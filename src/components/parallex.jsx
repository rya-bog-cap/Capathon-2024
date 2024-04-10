window.addEventListener("scroll", function () {

  let vid = document.getElementById("bg-video");
  vid.pause(); 

  this.setInterval(function () {
    vid.currentTime = window.scrollY / 1000;
  }, 100);


  // setTimeout(() => {
  //   document.querySelector("h3").classList.add("animated-title");
  // }, 400);
});
