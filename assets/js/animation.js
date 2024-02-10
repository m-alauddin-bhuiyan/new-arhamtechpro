const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


const workprocess_section = document.querySelector('.workprocess-section');
let workprocess_box = gsap.utils.toArray('.single-process-box');

gsap.registerPlugin(ScrollTrigger);

gsap.to(workprocess_box, {
    xPercent: -100 * (workprocess_box.length - 0),
    duration: 3,
    ease: "sine.in",
    scrollTrigger: {
        trigger: workprocess_section,
        pin:true,
        scrub: 4,
        snap: 1 / (workprocess_box.length - 0),
        end: "+=" + workprocess_section.offsetWidth
    }
});




var timeline = gsap.timeline();
// Default Animation
// ==========================

timeline.from(".banner-main-text",{
    yPercent: -30,
    diration: .20,
    // rotate: "-15deg",
    ease: "power2.in"
})
.from(".service_header",{ //Service Header
    xPercent: -20,
})
.from(".why-choose-us-title",{ //Why Choose US
    xPercent: -50,
})
.from(".testimonial_header",{ //Testmonials
    xPercent: -50,
})
// Animation with Scroll
// =========================
.to(".showreel-section",{
    scrollTrigger:{
        trigger: ".showreel-section",
        start: "top -50px",
        end: "bottom bottom",
        scrub: .25,
    },
})
.to(".video-container",{ // Showreel Section
    scale: 0.5,
    transformOrigin: "center",
    scrollTrigger:{
        trigger: ".video-container",
        start: "top top",
        end: "bottom center",
        pin:true,
        scrub: .25,
    },
    ease: "expoScale(0.5, 1, power2.inOut)",
})
.to(".service_header",{ //Service Header
    xPercent: 0,
    scrollTrigger:{
        trigger: ".service-section",
        end: "top center",
        scrub: 1,
        // markers:true
    },
})
.to(".why-choose-us-title",{ // Why Choose US
    xPercent: 0,
    scrollTrigger:{
        trigger: ".whychoose-us-section",
        end: "top center",
        scrub: 1,
        // markers:true
    },
})
.to(".testimonial_header",{ // Testtimonials
    xPercent: 0,
    scrollTrigger:{
        trigger: ".testmonial-section",
        end: "top center",
        scrub: 1,
        // markers:true
    },
})