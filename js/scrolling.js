$(document).ready(function(){
  
  $('.scroll').click(function(e){

    
    var linkHref = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(linkHref).offset().top 
     }, "slow"); 

    e.preventDefault(); 

  });

 }); 