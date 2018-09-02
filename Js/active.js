$(function() {
  documentEl = $(document);
  documentEl.on('scroll', function() {
    if (isScrolledIntoView('#top-indi')) {
        $(".nav").find(".active").removeClass("active");
        $('#homeNav').parent().addClass("active");
    };

    if (isScrolledIntoView('#portfolio-indi')) {
        $(".nav").find(".active").removeClass("active");
        $('#portfolio-nav').parent().addClass("active");
    };
    if (isScrolledIntoView('#portfolio-indi2')) {
        $(".nav").find(".active").removeClass("active");
        $('#portfolio-nav').parent().addClass("active");
    };
    if (isScrolledIntoView('#about-indi')) {
        $(".nav").find(".active").removeClass("active");
        $('#about-nav').parent().addClass("active");
    };
    if (isScrolledIntoView('#about-indi2')) {
        $(".nav").find(".active").removeClass("active");
        $('#about-nav').parent().addClass("active");
    };
    if (isScrolledIntoView('#contact-indi')) {
        $(".nav").find(".active").removeClass("active");
        $('#contact-nav').parent().addClass("active");
    };

  });
});
