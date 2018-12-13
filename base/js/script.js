$(function() {
  // jQuery goes here...

  // Un comment this line to fade out the red box on page load
  $(".red-box").fadeTo(2000, 0.2);
  $(".green-box").fadeTo(2000, 0.5);
  $(".blue-box").fadeTo(2000, .8);
  $(".red-box").fadeTo(2000, 0.9);
  $(".green-box").fadeTo(2000, 0.6);
  $(".blue-box").fadeTo(2000, .3);

  // $(".green-box").fadeToggle();

  $(".blue-box").slideUp();
  $(".blue-box").slideDown(2000);
  $(".blue-box").animate({
    "margin-left" : "+=200px"
  },1000, "linear");
  $(".blue-box").fadeTo(1000, 0.9);
  $(".blue-box").animate({
    "margin-left" : "-=200px"
  },1000, "linear");
  $('p').animate({
    fontSize : "20px"
  }, 1000)

// $('.lightbox').fadeIn(1000)


});