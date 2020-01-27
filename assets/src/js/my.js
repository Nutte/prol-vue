$(function () {

    $(window).scroll(function () {
		var windowTop = $(window).scrollTop();
		windowTop >= 50 ? $('#heder').addClass('navSkrol') : $('nav').removeClass('navSkrol');
		

	});


});

// Back to top button

var btn = $('#go-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});