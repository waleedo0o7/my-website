  $(document).ready(function () {

    var outerStrock = $(".outer-strock");
    var innerStrock = $(".inner-strock");
    
    TweenLite.to(outerStrock, 1, {
      rotation: "360"
    }, 0);
    
    TweenLite.to(innerStrock, 1, {
      rotation: "-360"
    }, 0);

    
    $('.animate').scrolla({
      mobile: false,
      once: false
    });

    // background Parallax Effect start
    // 	init scrollmagic
    // var controller = new ScrollMagic.Controller();

    // // 	loop through slides
    // $("#slider-header").each(function () {

    //   var bg = $(this).find(".bg-img");

    //   // Add tweenmax for background Parallax
    //   var parallax = TweenMax.from(bg, 1, {
    //     y: '-50%',
    //     ease: Power0.easeNone
    //   });

    //   // Create scrollmagic scene
    //   var parallaxScene = new ScrollMagic.Scene({
    //     triggerElement: this, // <-- Use this to select current element
    //     triggerHook: 1,
    //     duration: '100%',
    //   })
    //     .setTween(parallax).addTo(controller);

    // });
    // // background Parallax Effect end

    // var pageHeader = $(".internal-page .header");

    // var rotateBackToZero = TweenMax.to(pageHeader, 1, {
    //   rotation: 0,
    //   ease: Power0.easeNone
    // })

    // // Create scrollmagic scene
    // var parallaxScene = new ScrollMagic.Scene({
    //   triggerElement: pageHeader, // <-- Use this to select current element
    //   triggerHook: 0,
    //   duration: '10%',
    // })
    // .setTween(rotateBackToZero).addTo(controller);

  });

    
    // mousemove effect
    $(document).mousemove(function (event) {


      $(".carousel-item.active img").each(function (index, element) {
        var xPos = (event.clientX / $(window).width()) - 0.5,
          yPos = (event.clientY / $(window).height()) - 0.5,
          box = element;
          //imgPositionLeft = $(this).position().left;
          //imgPositionTop = $(this).position().top;
          //mousePositionX = event.pageX;
          //mousePositionY = event.pageY;
          // console.log(mousePositionX)

        TweenLite.to(box, 1, {
          rotationY: xPos * 50,
          rotationX: yPos * 50,
          ease: Power1.easeOut,
        });

      })

    });
