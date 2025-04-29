gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {

    const menuList = {
        "about-me": "#main-page",
        "education": "#Education",
        "experience": "#Experience",
        "projects": "#Projects",
    }

    const offset_Y = [0 * innerHeight, 0.199 * innerHeight, 0.199 * innerHeight, 0.299 * innerHeight];

    const sub_menu = document.querySelectorAll("#side-bar h5");

    let mm = gsap.matchMedia();

    mm.add("(orientation: landscape)", () => {
        sub_menu.forEach((menu, index) => {
            menu.addEventListener("click", () => {
                gsap.to(window, {duration: 1, scrollTo:{y:menuList[menu.id], offsetY:offset_Y[index]}} );
            });
        });

        gsap.fromTo("#line-1", {width: "0%", left: 0}, {width: "100%", left: 100, duration: .25, scrollTrigger: {trigger: "#About-Me", start: "top 40%", end: "bottom 21%", toggleActions: "play reverse play reverse"} });
        gsap.fromTo("#about-me", {color: "gray"}, {color: "var(--primary-color)", duration: .25, scrollTrigger: {trigger: "#About-Me", start: "top 40%", end: "bottom 21%", toggleActions: "play reverse play reverse"} });

        

        gsap.fromTo("#line-2", {width: "0%", left: 0}, {width: "100%", left: 100, duration: .25, scrollTrigger: {trigger: "#Education", start: "top 35%", end: "bottom 21%", toggleActions: "play reverse play reverse"} });
        gsap.fromTo("#education", {color: "gray"}, {color: "var(--primary-color)", duration: .25, scrollTrigger: {trigger: "#Education", start: "top 35%", end: "bottom 21%", toggleActions: "play reverse play reverse"} });
        
    

        gsap.fromTo("#line-3", {width: "0%", left: 0}, {width: "100%", left: 100, duration: .25, scrollTrigger: {trigger: "#Experience", start: "top 35%", end: "bottom 21%", toggleActions: "play reverse play reverse"} });
        gsap.fromTo("#experience", {color: "gray"}, {color: "var(--primary-color)", duration: .25, scrollTrigger: {trigger: "#Experience", start: "top 35%", end: "bottom 21%", toggleActions: "play reverse play reverse"} });
        


        gsap.fromTo("#line-4", {width: "0%", left: 0}, {width: "100%", left: 100, duration: .25, scrollTrigger: {trigger: "#Projects", start: "top 35%", end: "bottom 40%", toggleActions: "play reverse play reverse"} });
        gsap.fromTo("#projects", {color: "gray"}, {color: "var(--primary-color)", duration: .25, scrollTrigger: {trigger: "#Projects", start: "top 35%", end: "bottom 40%", toggleActions: "play reverse play reverse"} });
        
        gsap.fromTo([".project-content"], {opacity: 1, scale: 1 }, {opacity: .5, scale: .975, duration: .25, scrollTrigger: {trigger: "#Offsetter", start: "middle 60%", toggleActions: "play reverse play reverse"} });

    });

    var tl = gsap.timeline();

	window.onload = function() {
		gsap.to(window, { scrollTo: 0, duration: .5 });
	};
	

	tl.fromTo(".cursor", { height: "200vw", width: "200vw", borderRadius: "50%", top: "-50vw", left: "-50vw" }, { height: "2em", width: "2em", top: "50%", left: "50%", borderRadius: "50%", duration: 1.5, ease: "power3.inOut" });
	tl.to(".cursor", {
		onComplete: () => {
			document.querySelector(".cursor").classList.add("blend-setter");
	},} );


	gsap.fromTo("#footer-section", { filter: "brightness(0)" }, { filter: "brightness(1)", scrollTrigger: { trigger: "#Offsetter", start: "top bottom", end: "bottom bottom", scrub: 1 } })
	gsap.fromTo("#side-bar", { opacity: 1 }, { opacity: 0, duration: .25, scrollTrigger: { trigger: "#Offsetter", start: "middle 60%", toggleActions: "play reverse play reverse"} } );
    
});
