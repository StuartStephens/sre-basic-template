
(function($) {
  $(function() { // DOM Ready

  $('.c-mobile-nav__toggle').on('click', function() {
	  this.classList.toggle('is-active');
	  $('nav ul').toggle();

	});

  });
})(jQuery);