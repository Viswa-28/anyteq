gsap.registerPlugin(ScrollTrigger);



gsap.from(".icon", {
    // x: 100,
    y: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".icon",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        // markers: true
    }
});


// gsap.from(".h1", {
//     y: 100,
//     duration: 1,
//     // opacity: 0,
  
    

//     scrollTrigger: {
//         trigger: ".h1",
//         start: "top 80%",
//         end: "bottom 20%",
//         scrub: true,
//         // markers: true
//     }
// });
    
// $(".icon").mouseover(function() {
//  $(this).fadeOut(400);
//  $(this).siblings(".details").fadeIn(500);

// });
// $(".details").mouseleave(function() {
//  $(this).fadeOut(500);
//  $(this).siblings(".icon").fadeIn(500);
// });


// $(".parent").hover(function() {
// $(this).find(".icon").fadeOut(400);
// $(this).find(".details").fadeIn(500);
// $(this).find(".p").fadeOut(400);
// });

// $(".details").mouseleave(function() {
// $(this).fadeOut(500);
// $(this).siblings(".icon").fadeIn(500);
// $(this).siblings(".p").fadeIn(500);
// });



// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need parallax
  parallax: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',

  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',


  },
});

