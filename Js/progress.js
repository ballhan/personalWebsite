function grow(length, id) {
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
    if (isScrolledIntoView('#webSkill')) {
      grow(90, 'skillHtml');
      grow(80, 'skillJs');
      grow(70, 'skillAngular');
      grow(60, 'skillNode.js');
    };

    if (isScrolledIntoView('#otherSkill')) {
      grow(80, 'skillPython');
      grow(70, 'skillC++');
      grow(60, 'skillC');
    };
  });
});
