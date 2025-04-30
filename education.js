document.addEventListener('DOMContentLoaded', () => {

    let mm = gsap.matchMedia();

    // mm.add("(orientation: portrait)", () => {

    //     const carousel = document.querySelector(".education-content");
        
    //     gsap.to("#edu-title", { scrollTrigger: {trigger: "#edu-title", start: "top 10%", end: "+=1000", pin: true, pinSpacing: false }  });
    //     gsap.to(carousel, {x: "-240vw", scrollTrigger: {trigger: carousel, start: "top 20.5%", end: "+=1000", scrub: .5, pin: true  } });

    // }); 

    // mm.add("(orientation: portrait)", () => {
    //     const carousel = document.querySelector(".education-content");

    //     console.log(carousel.scrollWidth, window.innerWidth)

    //     // Pin the whole section instead of title separately
    //     gsap.to(carousel, {
    //         x: () => `-${(carousel.scrollWidth +50) - window.innerWidth}px`,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: "#Education",
    //             start: "top 15%",
    //             end: () => `+=${carousel.scrollWidth}`,
    //             scrub: .5,
    //             pin: true,
    //             anticipatedPin: 1
    //         }
    //     });
    // });

});