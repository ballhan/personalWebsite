function changeTheme() {
  var body = document.getElementById("body");
  var sun = document.getElementById("sun");
  var moon = document.getElementById("moon");
  var contactIcon = document.querySelectorAll(".contactIcon");

  if (body.className == "bdLightMode"){
    body.classList.replace('bdLightMode', 'bdDarkMode');
    sun.style.display = "none";
    moon.style.display = "block";
    contactIcon.forEach(element => {
      element.style.color = "#ffffff";
    });
    
  } else {
    body.classList.replace('bdDarkMode', 'bdLightMode');
    sun.style.display = "block";
    moon.style.display = "none";
    contactIcon.forEach(element => {
      element.style.color = "#000000";
    });
  }
}