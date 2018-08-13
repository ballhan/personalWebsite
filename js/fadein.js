$(function() {
  documentEl = $(document);
  documentEl.on('scroll', function() {
    if (isScrolledIntoView('#experiences-kik')) {
        $('#experiences-kik').addClass("content-fade");
    };
    if (isScrolledIntoView('#experiences-uwcsa')) {
        $('#experiences-uwcsa').addClass("content-fade");
    };
    if (isScrolledIntoView('#experiences-monsheong')) {
        $('#experiences-monsheong').addClass("content-fade");
    };
    if (isScrolledIntoView('#about-bro')) {
        $('#about-bro').addClass("content-fade");
    };
    if (isScrolledIntoView('#about-sport')) {
        $('#about-sport').addClass("content-fade");
    };
    if (isScrolledIntoView('#about-uwcsa')) {
        $('#about-uwcsa').addClass("content-fade");
    };
    if (isScrolledIntoView('#about-latin')) {
        $('#about-latin').addClass("content-fade");
    };
    if (isScrolledIntoView('#about-coffee')) {
        $('#about-coffee').addClass("content-fade");
    };
  });
});
