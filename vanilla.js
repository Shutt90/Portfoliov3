
//Function taking a class, hexcode and timer to light up any class
function lightUp(className, hex, timer) {
    setInterval(function(){
        className.style.color = hex; 
    }, timer);
    setInterval(function(){
        className.style.color = "black"; 
    }, timer * 2);
}

const html = document.querySelector(".html");
const css = document.querySelector(".css");
const bs = document.querySelector(".bs");
const js = document.querySelector(".js");
const npm = document.querySelector(".npm");
const php = document.querySelector(".php");
const laravel = document.querySelector(".laravel");

lightUp(html, "#dd4b25", 1000);
lightUp(css, "#0d75bb", 1200);
lightUp(bs, "#7610f1", 1400);
lightUp(js, "#efd81d", 1600);
lightUp(npm, "#cb3837", 1800);
lightUp(php, "#777bb3", 2000);
lightUp(laravel, "#f72c1f", 2200);

document.querySelector(".html").addEventListener("mouseenter", function() {
    console.log("Mouse has entered");
})
