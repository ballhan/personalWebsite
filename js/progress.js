function move(length, id) {
  var element = document.getElementById(id);
  var pro = length - 1;

  if ((element.style.width) != 0) {
    return;
  }
  var width = 1;
  var id = setInterval(frame,20);

    function frame() {
        if (width >= pro) {
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + '%';    
        }
    }
}

$(function() {
  documentEl = $(document);
  documentEl.on('scroll', function() {
    //console.log(isScrolledIntoView('#portfolio-indi'));
    if (isScrolledIntoView('#portfolio-indi')) {
      move(85, 'HTML/CSS/Bootstrap');
      move(70, 'JavaScript');
      move(70, 'Python');
      move(70, 'C');
      move(50, 'Angular');    
      move(50, 'ReactNative');     
    };
  });
});

