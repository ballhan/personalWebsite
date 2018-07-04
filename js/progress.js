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

$(document).ready(function() {
  $('#skill').waypoint(function() {
    move(85, 'Html');
    move(80, 'Css');
    move(80, 'Bootstrap');
    move(60, 'JavaScript');
    move(50, 'Python');
    move(30, 'Angular');    
    move(30, 'ReactNative');                
  });
});