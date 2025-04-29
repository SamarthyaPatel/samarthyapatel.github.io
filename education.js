gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    let mm = gsap.matchMedia();

    mm.add("(orientation: portrait)", () => {

        const carousel = document.querySelector(".education-content");
        
        gsap.to("#edu-title", { scrollTrigger: {trigger: "#edu-title", start: "top 10%", end: "+=1000", pin: true, pinSpacing: false }  });
        gsap.to(carousel, {x: "-240vw", scrollTrigger: {trigger: carousel, start: "top 20.5%", end: "+=1000", scrub: .5, pin: true  } });

    }); 

});