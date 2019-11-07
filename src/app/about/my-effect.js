function componentIntroJQ() {

    // add internal-page class to body
    $("body").addClass("internal-page-body");

    var controller = new ScrollMagic.Controller();

    var pageHeader = $(".internal-page .header");

    var rotateBackToZero = TweenMax.to(pageHeader, 1, {
        rotation: -20,
        scale: 3,
        opacity: 0,
        ease: Power0.easeNone
    })

    // Create scrollmagic scene
    var parallaxScene = new ScrollMagic.Scene({
        triggerElement: pageHeader, // <-- Use this to select current element
        triggerHook: 0,
        duration: '80%',
    })
        .setTween(rotateBackToZero).addTo(controller);

}