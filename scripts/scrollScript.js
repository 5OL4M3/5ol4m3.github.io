var slider = document.getElementById('slider');
var active = document.getElementById('active');
var line1 = document.getElementById('line1');
var line2 = document.getElementById('line2');
var line3 = document.getElementById('line3');
var line4 = document.getElementById('line4');

line1.onclick = function() {
    slider.style.transform = 'translateX(0)';
    active.style.left ="0";
}
line2.onclick = function() {
    slider.style.transform = 'translateX(-33.3%)';
    active.style.left ="33.3%";
}
line3.onclick = function() {
    slider.style.transform = 'translateX(-66.6%)';
    active.style.left ="66.6%";
}
