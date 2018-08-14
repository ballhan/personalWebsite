$(function() {
  documentEl = $(document);
  documentEl.on('scroll', function() {
    if (isScrolledIntoView('#indi-kik')) {
        $('#experiences-kik').addClass("content-fade");
        $('#experiences-kik').removeClass("temp-hide");
    };
    if (isScrolledIntoView('#indi-uwcsa')) {
        $('#experiences-uwcsa').addClass("content-fade");
        $('#experiences-uwcsa').removeClass("temp-hide");
    };
    if (isScrolledIntoView('#indi-monsheong')) {
        $('#experiences-monsheong').addClass("content-fade");
        $('#experiences-monsheong').removeClass("temp-hide");
    };
    if (isScrolledIntoView('#indi-bro')) {
        $('#about-bro').addClass("content-fade");
        $('#about-bro').removeClass("temp-hide");
    };
    if (isScrolledIntoView('#indi-sport')) {
        $('#about-sport').addClass("content-fade");
        $('#about-sport').removeClass("temp-hide");
    };
    if (isScrolledIntoView('#indi-club')) {
        $('#about-uwcsa').addClass("content-fade");
        $('#about-uwcsa').removeClass("temp-hide");
    };
    if (isScrolledIntoView('#indi-latin')) {
        $('#about-latin').addClass("content-fade");
    	$('#about-latin').removeClass("temp-hide");
    };
    if (isScrolledIntoView('#indi-coffee')) {
        $('#about-coffee').addClass("content-fade");
        $('#about-coffee').removeClass("temp-hide");
    };
  });
});
