$(function() {
  documentEl = $(document);
  documentEl.on('scroll', function() {
    if (isScrolledIntoView('#experiences-kik')) {
        $('#experiences-kik').addClass("content-fade");
        $('#experiences-kik').removeClass("temp-hide");
    };
    if (isScrolledIntoView('#experiences-uwcsa')) {
        $('#experiences-uwcsa').addClass("content-fade");
        $('#experiences-uwcsa').removeClass("temp-hide");
    };
    if (isScrolledIntoView('#experiences-monsheong')) {
        $('#experiences-monsheong').addClass("content-fade");
        $('#experiences-monsheong').removeClass("temp-hide");
    };
    if (isScrolledIntoView('#about-bro')) {
        $('#about-bro').addClass("content-fade");
        $('#about-bro').removeClass("temp-hide");
    };
    if (isScrolledIntoView('#about-sport')) {
        $('#about-sport').addClass("content-fade");
        $('#about-sport').removeClass("temp-hide");
    };
    if (isScrolledIntoView('#about-uwcsa')) {
        $('#about-uwcsa').addClass("content-fade");
        $('#about-uwcsa').removeClass("temp-hide");
    };
    if (isScrolledIntoView('#about-latin')) {
        $('#about-latin').addClass("content-fade");
    	$('#about-latin').removeClass("temp-hide");
    };
    if (isScrolledIntoView('#about-coffee')) {
        $('#about-coffee').addClass("content-fade");
        $('#about-coffee').removeClass("temp-hide");
    };
  });
});
