$(function() {	
  documentEl = $(document);	
  documentEl.on('scroll', function() {	
    if (isScrolledIntoView('#imgKik')) {	
        $('#imgKik').addClass("content-fade");	
        $('#imgKik').removeClass("temp-hide");
        $('#textKik').addClass("content-fade");	
        $('#textKik').removeClass("temp-hide");		
    };	
    if (isScrolledIntoView('#imgUWCSA')) {	
        $('#imgUWCSA').addClass("content-fade");	
        $('#imgUWCSA').removeClass("temp-hide");
        $('#textUWCSA').addClass("content-fade");	
        $('#textUWCSA').removeClass("temp-hide");		
    };	
    if (isScrolledIntoView('#imgMonsheong')) {	
        $('#imgMonsheong').addClass("content-fade");	
        $('#imgMonsheong').removeClass("temp-hide");
        $('#textMonsheong').addClass("content-fade");	
        $('#textMonsheong').removeClass("temp-hide");		
    };	
    if (isScrolledIntoView('#imgBro')) {	
        $('#imgBro').addClass("content-fade");	
        $('#imgBro').removeClass("temp-hide");	
        $('#textBro').addClass("content-fade");	
        $('#textBro').removeClass("temp-hide");	
    };
    if (isScrolledIntoView('#imgSoccer')) {	
        $('#imgSoccer').addClass("content-fade");	
        $('#imgSoccer').removeClass("temp-hide");
        $('#textSoccer').addClass("content-fade");	
        $('#textSoccer').removeClass("temp-hide");		
    };		
    if (isScrolledIntoView('#imgCSA')) {	
        $('#imgCSA').addClass("content-fade");	
        $('#imgCSA').removeClass("temp-hide");
        $('#textCSA').addClass("content-fade");	
        $('#textCSA').removeClass("temp-hide");		
    };	
    if (isScrolledIntoView('#videoDance')) {	
        $('#videoDance').addClass("content-fade");	
        $('#videoDance').removeClass("temp-hide");
        $('#textDance').addClass("content-fade");	
        $('#textDance').removeClass("temp-hide");		
    };	
  });	
});