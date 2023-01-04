var typed = new Typed(".auto-type", {
    strings: ["Computer Engineer", "Electrical Engineer", "Software Developer", "Web Developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});

var navLinks = document.getElementById("navigation");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}