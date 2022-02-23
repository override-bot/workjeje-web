var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

var menu = document.getElementById("menu");
var overlay = document.getElementById("overlay");
menu.addEventListener("click", function() {
    overlay.style.display = "block";
    menu.style.display = "none";

});

var close = document.getElementById('overlay-close');
close.addEventListener("click", function() {
    overlay.style.display = "none";
    menu.style.display = "block";

});