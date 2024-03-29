window.addEventListener("scroll", function() {
    const distance = window.scrollY;

    let vid = document.getElementById("bg-video");

    //console.log(distance);
    // document.querySelector(".testDiv1").style.transform = `translateX(${distance *-2}px)`
    // document.querySelector(".testDiv2").style.transform = `translateX(${distance * 2}px)`

    //document.querySelector(".testDivV").style.transform = `translateY(${distance * 2}px)`

    vid.pause();

    this.window.onscroll = function() {
      vid.pause();
    }
    
    this.setInterval(function () {
      vid.currentTime = window.scrollY/1000;
    }, 100);




    document.getElementById("card-index0").style.transform = `translateX(${distance * 2}px)`
    document.getElementById("card-index1").style.transform = `translateX(${distance * -2}px)`
    
    


    setTimeout(() => {
      document.querySelector("h3").classList.add("animate-me")
    }, 400) 



  })