
function scrollToTop() {
    window.scrollTo(0, 0)
}

function cursorEffect() {

    var cursor = $(".cursor"),
        follower = $(".cursor-follower");

    var posX = 0,
        posY = 0;

    var mouseX = 0,
        mouseY = 0;

    TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            TweenMax.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12
                }
            });

            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });


    cursor.removeClass("active");
    follower.removeClass("active");

    $("a").on("mouseenter", function () {
        cursor.addClass("active");
        follower.addClass("active");
    });
    $("a").on("mouseleave", function () {
        cursor.removeClass("active");
        follower.removeClass("active");
    });

}

var controller = new ScrollMagic.Controller();

function pageHeaderEffect() {

    var pageHeader = $(".internal-page .header");

    var rotateBackToZero = TweenMax.to(pageHeader, 1, {
        // rotation: -10,
        scale: 3,
        opacity: 0,
        ease: Power0.easeNone
    })

    // Create scrollmagic scene
    var parallaxScene = new ScrollMagic.Scene({
        triggerElement: pageHeader, // <-- Use this to select current element
        triggerHook: 0.5,
        duration: '80%',
    })
        //.addIndicators() // add indicators (requires plugin)
        .setTween(rotateBackToZero).addTo(controller);
}

function headlineEffect() {

    Splitting({ target: '.splited-headline', by: 'chars' });

    $(".data").each(function () {

        new ScrollMagic.Scene({
            triggerElement: this.children[0],
            duration: '80%',
            triggerHook: 0.9,
        })
            .setClassToggle(this, "head-in") // add class toggle
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

    });

}

function paragraphEffect() {

    Splitting({ target: '.splited-paragraph', by: 'words' });

    new ScrollMagic.Scene({
        triggerElement: ".splited-paragraph",
        duration: '80%',
        triggerHook: 0.8,
    })
        .setClassToggle(".splited-paragraph", "paragraph-in")
        //.addIndicators()
        .addTo(controller);
}

function meEffect() {
 
    var meTweenMax = TweenMax.fromTo(".me", 1, {
        top: "55px",
        ease: Back.easeInOut.config(1.7)
    }, { top: "-78", ease: Back.easeInOut.config(1.7) })
    var meScene = new ScrollMagic.Scene({
        triggerElement: ".page-footer",
    })
        .setTween(meTweenMax).addTo(controller); 
    
}