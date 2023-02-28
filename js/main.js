$(window).on("load", function(){
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;
    
    $(".hamburger-btn").click(function(){
        $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
        if($(window).width() < 768){
            $(".header .nav").slideToggle();
        }
    })

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");
        }
        else{
            $(".header").removeClass("fixed");
        }
    })

    $.scrollIt({
        topOffset: -50
    });

    function slideShow(){
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        if(slideIndex === slideLen-1){
            slideIndex = 0;
        }
        else{
            slideIndex ++;
        }
        setTimeout(slideShow, 5000);
    }
    slideShow();

    const wHeight = $(window).height();
    $(".gallery-popup .gp-img").css("max-height", wHeight + "px");

    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;
    
    $(".gallery-item").click(function(){
        itemIndex = $(this).index();
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
        gpSlideShow();
    })

    $(".gp-controls .next").click(function(){
        if(itemIndex == totalGalleryItems - 1){
            itemIndex = 0;
        }
        else{
            itemIndex ++;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        }) 
    })

    $(".gp-controls .prev").click(function(){
        if(itemIndex === 0){
            itemIndex = totalGalleryItems - 1;
        }
        else{
            itemIndex --;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        }) 
    })

    function gpSlideShow(){
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
        $(".gallery-popup .gp-img").fadeIn().attr("src", imgSrc);
        $(".gp-counter").text((itemIndex + 1) + "/" + totalGalleryItems);
    }

    $(".gp-close").click(function(){
        $(".gallery-popup").removeClass("open");
    })

    $(".gallery-popup").click(function(event){
        console.log(event.target);
        if($(event.target).hasClass("open")){
            console.log(true);
            $(".gallery-popup").removeClass("open");
        }
    })

})