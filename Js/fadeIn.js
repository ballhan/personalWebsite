$(function() {	
  documentEl = $(document);	
  documentEl.on('scroll', function() {	
    if (isScrolledIntoView('#imgKik')) {	
        $('#imgKik').addClass("content-fade");	
        $('#imgKik').removeClass("temp-hide");	
    };	
    if (isScrolledIntoView('#imgUWCSA')) {	
        $('#imgUWCSA').addClass("content-fade");	
        $('#imgUWCSA').removeClass("temp-hide");	
    };	
    if (isScrolledIntoView('#imgMonsheong')) {	
        $('#imgMonsheong').addClass("content-fade");	
        $('#imgMonsheong').removeClass("temp-hide");	
    };	
    if (isScrolledIntoView('#textKik')) {	
        $('#textKik').addClass("content-fade");	
        $('#textKik').removeClass("temp-hide");	
    };	
    if (isScrolledIntoView('#imgUWCSA')) {	
        $('#textUWCSA').addClass("content-fade");	
        $('#textUWCSA').removeClass("temp-hide");	
    };	
    if (isScrolledIntoView('#imgMonsheong')) {	
        $('#textMonsheong').addClass("content-fade");	
        $('#textMonsheong').removeClass("temp-hide");	
    };	
    if (isScrolledIntoView('#imgBro')) {	
        $('#imgBro').addClass("content-fade");	
        $('#imgBro').removeClass("temp-hide");	
    };
    if (isScrolledIntoView('#imgSoccer')) {	
        $('#imgSoccer').addClass("content-fade");	
        $('#imgSoccer').removeClass("temp-hide");	
    };		
    if (isScrolledIntoView('#imgCSA')) {	
        $('#imgCSA').addClass("content-fade");	
        $('#imgCSA').removeClass("temp-hide");	
    };	
    if (isScrolledIntoView('#videoDance')) {	
        $('#videoDance').addClass("content-fade");	
        $('#videoDance').removeClass("temp-hide");	
    };	
    if (isScrolledIntoView('#textBro')) {	
        $('#textBro').addClass("content-fade");	
        $('#textBro').removeClass("temp-hide");	
    };	
    if (isScrolledIntoView('#textSoccer')) {	
        $('#textSoccer').addClass("content-fade");	
        $('#textSoccer').removeClass("temp-hide");	
    };		
    if (isScrolledIntoView('#textCSA')) {	
        $('#textCSA').addClass("content-fade");	
        $('#textCSA').removeClass("temp-hide");	
    };	
    if (isScrolledIntoView('#textDance')) {	
        $('#textDance').addClass("content-fade");	
        $('#textDance').removeClass("temp-hide");	
    };	


  });	
});