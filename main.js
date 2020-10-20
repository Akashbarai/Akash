//preloader
$(window).on("load", function(){

    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });
});
$(document).ready(function () {
    // Super Slide
    $('#slides').superslides({
        play : 5000,
        animation : 'fade',
        pagination : false
    });
    //Typed Js
    var typed = new Typed('.tu', {
        // Waits 1000ms after typing "First"
        strings: ['Web Developer.','Apps Developer.','LEDP Trainer.'],
        typeSpeed : 40,
        loop : true,
        showCursor: false
    });
    //owl-carosoul
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    //Easy piechart

    $('.chart').easyPieChart({
      easing: 'easeInOut',
      barColor: 'white',
      trackColor: false,
      scaleColor:false,
      linewidth: 4,
      size     :152,
      onStep:function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
    }
    });
    //Counter js
    $('.num').counterUp({
        delay:10,
        time:1000
    });
    //Smooth Scroll Navigation
    //BOM= browser  object model
    //DOM= document object model
    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop:targetPosition - 50 },"slow");
    });
    // Fancy App
    $('[data-fancybox]').fancybox();
    // Sort and Filter
    // Apply Filter
    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

});
 