
(function($) {
  $(function() { // DOM Ready

  $('.c-nav-toggle__button').on('click', function() {
	  // this.classList.toggle('is-active');
	  $(this).find("span").toggleClass("is-active");
	  // $(this).find("span:before").attr("content", "\\e800");
	  $('.c-nav-toggle__overlay').toggle();

	});

  });
})(jQuery);