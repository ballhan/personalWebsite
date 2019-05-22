$(document).ready(function() {	
    documentEl = $(document);

    window.onload = function() {
        $('#landingText').addClass("content-fade");  
        $('#landingText').removeClass("temp-hide");
    };

    documentEl.on('scroll', function() {
    if (isScrolledIntoView('#imgAbout')) {	
        $('#imgAbout').addClass("content-fade");	
        $('#imgAbout').removeClass("temp-hide");	
        $('#textAbout').addClass("content-fade");	
        $('#textAbout').removeClass("temp-hide");	
    };
    if (isScrolledIntoView('#imgRj')) {    
        $('#imgRj').addClass("content-fade");  
        $('#imgRj').removeClass("temp-hide");
        $('#textRj').addClass("content-fade"); 
        $('#textRj').removeClass("temp-hide");     
    };  
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
    if (isScrolledIntoView('#imgJsGame')) {  
        $('#imgJsGame').addClass("content-fade");    
        $('#imgJsGame').removeClass("temp-hide");
        $('#textJsGame').addClass("content-fade");   
        $('#textJsGame').removeClass("temp-hide");       
    };  	
    /*
    if (isScrolledIntoView('#imgTranslateHelper')) {  
        $('#imgTranslateHelper').addClass("content-fade");    
        $('#imgTranslateHelper').removeClass("temp-hide");
        $('#textTranslateHelper').addClass("content-fade");   
        $('#textTranslateHelper').removeClass("temp-hide");       
    };  	
    */
    if (isScrolledIntoView('#imgThemeChanger')) {  
        $('#imgThemeChanger').addClass("content-fade");    
        $('#imgThemeChanger').removeClass("temp-hide");
        $('#textThemeChanger').addClass("content-fade");   
        $('#textThemeChanger').removeClass("temp-hide");       
    };  	
  });	
});
