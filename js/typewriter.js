var i = 0;
var txt = 'Hi, I am Bohan!';
var speed = 40;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("hiText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}