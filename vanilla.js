
//Function taking a class, hexcode and timer to light up any class
function lightUp(className, hex, timer) {
    setInterval(function(){
        document.querySelector(className).style.color = hex; 
    }, timer);
    setInterval(function(){
        document.querySelector(className).style.color = "black"; 
    }, timer * 2);
}

lightUp(".html", "#dd4b25", 1000);
lightUp(".css", "#0d75bb", 1200);
lightUp(".bs", "#7610f1", 1400);
lightUp(".js", "#efd81d", 1600);
lightUp(".npm", "#cb3837", 1800);
lightUp(".php", "#777bb3", 2000);
lightUp(".laravel", "#f72c1f", 2200);

