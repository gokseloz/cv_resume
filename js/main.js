//header-link => the right yellow border is creating when clicking the links
// $(".header-nav-link").on("click", function () {
//     $(".target").removeClass("target");
//     $(this).addClass("target")
// });
//end of header-link

//menu-item => when scrolling, menu items also changes
$(document).ready(function () {
    // $(document).on("scroll", onScroll);

    //smoothscroll
    $('.header-nav-link').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('.header-nav-link').each(function () {
            $(this).removeClass('target');
        })
        $(this).addClass('target');

        // var target = this.hash,
        //     menu = target;
        // $target = $(target);
        // $('html, body').stop().animate({
        //     'scrollTop': $target.offset().top
        // }, 300, 'swing', function () {
        //     window.location.hash = target;
        //     $(document).on("scroll", onScroll);
        // });
    });
});

// function onScroll(event) {
//     var scrollPos = $(document).scrollTop();
//     $('.header-nav-link').each(function () {
//         var currLink = $(this);
//         var refElement = $(currLink.attr("href"));
//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//             $('.header-nav-link').removeClass("target");
//             currLink.addClass("target");
//         } else {
//             currLink.removeClass("target");
//         }
//     });
// }
//end of menu-item

//when clicking one of the menu item, header disappears. It works when 900px and lower.
$(".header-nav-link").on("click", function () {
    $(".header").removeClass("is-expanded");
})
//end of disappering menu item


//hamburger-menu => click and header appears
$(".mobile-hamburgerMenu").on("click", function () {
    $(".header").toggleClass("is-expanded")
});
//end of hamburger-menu


//Testimonials => testimonials' slide in aboutMe section
var counter = 0;
const prev = $(".prev");
const next = $(".next");
var wrapperTestimoninals = $(".wrapper-testimonials");
const max = $(".wrapper-item").length - 1;

next.on("click", function(){
    if(counter < max){
        counter++;
        wrapperTestimoninals.css({"left": "-100" * counter + "%", "transition": "left 1s"})
    }
    else if(counter == 2){
        counter = 0;
        wrapperTestimoninals.css({"left": "-100" * counter + "%", "transition": "left 0s"})
    }
})

prev.on("click", function(){
    if(counter > 0){
        counter--;
        wrapperTestimoninals.css({"left": "-100" * counter + "%",  "transition": "left 1s"  })
    }
    else{
        counter = max;
        wrapperTestimoninals.css({"left": "-100" * counter + "%", "transition": "left 0s" })
    }
})
//end of testimonials


//category buttons => buttons to choose specific category in portfolio section
var tab = $(".filter-link");
tab.on("click", function () {
    var i = $(this).index();
    tab.removeClass('active').eq(i).addClass('active');
    if (i == 0) {
        $(".illustration").fadeIn(500);
        $(".video").fadeIn(500);
        $(".media").fadeIn(500);
    } else if (i == 1) {
        $(".illustration").fadeIn(500);
        $(".video").fadeOut(500);
        $(".media").fadeOut(500);
    } else if (i == 2) {
        $(".illustration").fadeOut(500);
        $(".video").fadeOut(500);
        $(".media").fadeIn(500);
    } else if (i == 3) {
        $(".illustration").fadeOut(500);
        $(".video").fadeIn(500);
        $(".media").fadeOut(500);
    }
});
//end of category buttons


//////form-input => error messages, error lines, submit message...
var inputs = $(".form-input");
var errorMsg = $(".form-error-msg")
var email = $(".form-email")

inputs.on("blur", function () {
    if (!$(this).val()) {
        $(this).addClass("has-error")
        $(this).parent().find(errorMsg).css("visibility", "visible");
    } else {
        $(this).removeClass("has-error")
        $(this).parent().find(errorMsg).css("visibility", "hidden");
    }
})

//form-on-submit => 
$(".row2-box2-form").submit(function () {
    $(".submit-info").css("display", "flex")
    inputs.each(function () {
        this.value = "";
    })
    return false
})
//end of form-on-submit

//submit-message => shows a message after clicking submit button on the contact section
$(".message-close").on("click", function () {
    $(".submit-info").css("display", "none")
})
//end of submit-message

inputs.on("invalid", function (e) {
    e.preventDefault();
    $(email).parent().find(errorMsg).css("visibility", "visible");
    $(email).addClass("has-error")
});
//////end of form-input


// //scroll-to-top-button => locate right bottom corner
// var btn = $('#button');
// $(window).scroll(function () {
//     if ($(window).scrollTop() > 1000) {
//         btn.addClass('show');
//     } else {
//         btn.removeClass('show');
//     }
// });
// //end of scroll-to-top-button


$("#home-btn").on("click", function(){
    $(".pages").css("display","none")                               //all pages removes
    $(".home").css({"animation":"fadeIn 1.5s","display":"block"})   //only home page shows
    $(".blog-sidebar-content").css("display","none")                //blog-sidebar removes
    $(".article-content").css("display","none")                     //blog-articles removes
    $(".side-bar-toggle").css("display","none")                     //blog-sidebar hamburger icon removes

})
$("#aboutMe-btn").on("click", function(){
    $(".pages").css("display","none")                                   //all pages removes
    $(".aboutMe").css({"animation":"fadeIn 1.5s","display":"block"})    //only aboutMe page shows
    $(".blog-sidebar-content").css("display","none")                    //blog-sidebar removes
    $(".article-content").css("display","none")                         //blog-articles removes
    $(".side-bar-toggle").css("display","none")                         //blog-sidebar hamburger icon removes
})

$("#resume-btn").on("click", function(){
    $(".pages").css("display","none")                               //all pages removes
    $(".resume").css({"animation":"fadeIn 1.5s","display":"block"}) //only resume page shows
    $(".blog-sidebar-content").css("display","none")                //blog-sidebar removes
    $(".article-content").css("display","none")                     //blog-articles removes
    $(".side-bar-toggle").css("display","none")                     //blog-sidebar hamburger icon removes
})
$("#portfolio-btn").on("click", function(){
    $(".pages").css("display","none")                                   //all pages removes
    $(".portfolio").css({"animation":"fadeIn 1.5s","display":"block"})  //only portfolio page shows
    $(".blog-sidebar-content").css("display","none")                    //blog-sidebar removes
    $(".article-content").css("display","none")                         //blog-articles removes
    $(".side-bar-toggle").css("display","none")                         //blog-sidebar hamburger icon removes
})

$("#blog-btn").on("click", function(){
    $(".pages").css("display","none")                                    //all pages removes
    $(".blog .inner").css({"animation":"fadeIn 1.5s","display":"block"}) //only blog page's inner shows
    $(".blog").css({"animation":"fadeIn 1.5s","display":"block"})        //only blog page shows
    $(".blog-sidebar-content").css("display","none")                     //blog-sidebar shows
    $(".article-content").css("display","none")                          //blog-articles shows
})

$("#contact-btn").on("click", function(){
    $(".pages").css("display","none")                               //all pages removes
    $(".contact").css({"animation":"fadeIn 1.5s","display":"block"})//only contact page shows
    $(".blog-sidebar-content").css("display","none")                //blog-sidebar removes
    $(".article-content").css("display","none")                     //blog-articles removes
    $(".side-bar-toggle").css("display","none")                     //blog-sidebar hamburger icon removes
})

//POSTS
$(".post-1-link").on("click", function(){
    $(".blog .inner").css("display","none")                                         //blogs'inners removes because article-content page comes
    $(".blog-sidebar-content").css({"animation":"fadeIn 1.5s","display":"block"})   //blog-sidebar shows to choose other articles vs.
    $(".article-content").css("display","none")                                     //all other articles remove
    $(".article-content-1").css({"animation":"fadeIn 1.5s","display":"block"})      //only article-1 shows
    $(".side-bar-toggle").css({"animation":"fadeIn 1.5s","display":"block"})        //sidebar hamburger-menu icon shows
})

$(".post-2-link").on("click", function(){
    $(".blog .inner").css("display","none")                                         //blogs'inners removes because article-content page comes
    $(".blog-sidebar-content").css({"animation":"fadeIn 1.5s","display":"block"})   //blog-sidebar shows to choose other articles vs.
    $(".article-content").css("display","none")                                     //all other articles remove
    $(".article-content-2").css({"animation":"fadeIn 1.5s","display":"block"})      //only article-2 shows
    $(".side-bar-toggle").css({"animation":"fadeIn 1.5s","display":"block"})        //sidebar hamburger-menu icon shows
})
$(".post-3-link").on("click", function(){
    $(".blog .inner").css("display","none")                                         //blogs'inners removes because article-content page comes
    $(".blog-sidebar-content").css({"animation":"fadeIn 1.5s","display":"block"})   //blog-sidebar shows to choose other articles vs.
    $(".article-content").css("display","none")                                     //all other articles remove
    $(".article-content-3").css({"animation":"fadeIn 1.5s","display":"block"})      //only article-3 shows
    $(".side-bar-toggle").css({"animation":"fadeIn 1.5s","display":"block"})        //sidebar hamburger-menu icon shows
})
$(".post-4-link").on("click", function(){
    $(".blog .inner").css("display","none")                                         //blogs'inners removes because article-content page comes
    $(".blog-sidebar-content").css({"animation":"fadeIn 1.5s","display":"block"})   //blog-sidebar shows to choose other articles vs.
    $(".article-content").css("display","none")                                     //all other articles remove
    $(".article-content-4").css({"animation":"fadeIn 1.5s","display":"block"})      //only article-4 shows
    $(".side-bar-toggle").css({"animation":"fadeIn 1.5s","display":"block"})        //sidebar hamburger-menu icon shows
})
$(".post-5-link").on("click", function(){
    $(".blog .inner").css("display","none")                                         //blogs'inners removes because article-content page comes
    $(".blog-sidebar-content").css({"animation":"fadeIn 1.5s","display":"block"})   //blog-sidebar shows to choose other articles vs.
    $(".article-content").css("display","none")                                     //all other articles remove
    $(".article-content-5").css({"animation":"fadeIn 1.5s","display":"block"})      //only article-5 shows
    $(".side-bar-toggle").css({"animation":"fadeIn 1.5s","display":"block"})        //sidebar hamburger-menu icon shows
})
$(".post-6-link").on("click", function(){
    $(".blog .inner").css("display","none")                                         //blogs'inners removes because article-content page comes
    $(".blog-sidebar-content").css({"animation":"fadeIn 1.5s","display":"block"})   //blog-sidebar shows to choose other articles vs.
    $(".article-content").css("display","none")                                     //all other articles remove
    $(".article-content-6").css({"animation":"fadeIn 1.5s","display":"block"})      //only article-6 shows
    $(".side-bar-toggle").css({"animation":"fadeIn 1.5s","display":"block"})        //sidebar hamburger-menu icon shows
})
//POSTS


$(".side-bar-toggle").on("click", function () {                     //when articles clicks, hamburger-menu shows
    $(".blog-sidebar-content").toggleClass("sidebar-expanded")      //blog-sidebar shows and hiddens
    $(".article-content").toggleClass("article-content-expanded")   //makes articles'width:100% 
});


