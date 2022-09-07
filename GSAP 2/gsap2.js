$(document).ready(function(){
    $("#fullpage").fullpage({
        anchors: ["firstpage", "secondpage", "thirdpage"],
        menu: "#menu",
        autoScrolling: false
    });
});

var controller = new ScrollMagic.Controller();

var scene =  new ScrollMagic.Scene({
    triggerElement: "#section2"
})

.setTween("#bg img", {
    maxWidth: "1100px",
    top: "30%",
    left: "80%",
    opacity: 0.25
})
.addTo(controller); 


//Tween for section 3
var scene = new ScrollMagic.Scene({
    triggerElement: "#section3",
    duration: "300"
})
.setTween("#bg img", {
    top: "20%",
})

.addTo(controller);