function grow(length, id) {
  var element = document.getElementById(id);
  var progress = length;

  if ((element.style.width) != 0) {
    return;
  }
  var width = 1;
  var id = setInterval(frame,20);

    function frame() {
        if (width >= progress) {
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
    if (isScrolledIntoView('#webSkill')) {
      grow(100, 'skillHtml');
      grow(90, 'skillJs');
      grow(80, 'skillAngular');
      grow(70, 'skillNode.js');
    };

    if (isScrolledIntoView('#otherSkill')) {
      grow(85, 'skillPython');
      grow(75, 'skillC++');
      grow(65, 'skillC');
    };
  });
});
