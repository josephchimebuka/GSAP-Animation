var tl = gsap.timeline({repeat:4})
function init(){
tl.set("h1, h2", {xPercent:-100})
  .to("h1,h2", {duration:3, x:800, xPercent:0, ease:"slow(0.6, 1.2)", stagger:0.2},"0.5")
    .from("h1", {duration:3, scale:0, ease:"slow(0.6, 0.6, true)",stagger:0.2}, "<")
}

window.addEventListener("load", function(event){
    console.log("load")
    gsap.set("#demo", {autoAlpha:1})
    init();
}) ;