window.addEventListener("scroll", function () {
  const distance = window.scrollY;
  //console.log(distance);


  //Sorry my brain hurts, Imma hard code it first
  if(distance <= 945 && distance >= 0) {

      // Cards coming in from the sides row 1
      document.getElementById("card-index0").style.transform =
      `translateX(${distance * 2}px)`;

      document.getElementById("card-index1").style.transform =
        `translateX(${distance * -2}px)`;
  };

  let vid = document.getElementById("bg-video");
  vid.pause(); 

  this.setInterval(function () {
    vid.currentTime = window.scrollY / 1000;
  }, 100);


  setTimeout(() => {
    document.querySelector("h3").classList.add("animated-title");
  }, 400);
});
