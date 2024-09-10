this.vidTimeDelay = true;
window.addEventListener('scroll', function () {
  const vid = document.getElementById('bg-video'); 
  vid.pause();

  const scrollMultiplier = 0.2;

  if(this.vidTimeDelay){
    var currTime = 
      (
        //document.documentElement.scrollTop *
        (window.scrollY * 
        scrollMultiplier) /
        240
      )
    ;
    if(currTime < 0)
      currTime = 0.01;
    if(currTime > vid.duration)
      currTime %= vid.duration;
    if(isNaN(currTime) || !isFinite(currTime))
      currTime = 0.0;
    console.log(`ct:${currTime} | vt:${vid.currentTime}`);
    
    vid.currentTime = currTime;
    this.vidTimeDelay = false;
    this.setTimeout(() => { this.vidTimeDelay = true; }, 100);
  }

  //}, 200);

  // setTimeout(() => {
  //   document.querySelector("h3").classList.add("animated-title");
  // }, 400);
});
