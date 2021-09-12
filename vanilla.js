
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
const db = document.querySelector(".db");

lightUp(html, "#dd4b25", 1000);
lightUp(css, "#0d75bb", 1200);
lightUp(bs, "#7610f1", 1400);
lightUp(js, "#efd81d", 1600);
lightUp(npm, "#cb3837", 1800);
lightUp(php, "#777bb3", 2000);
lightUp(laravel, "#f72c1f", 2200);
lightUp(db, "#dd8a00", 2400);

html.addEventListener("mouseenter", addSpan(html, "HTML"));
css.addEventListener("mouseenter", addSpan(css, "CSS"));
bs.addEventListener("mouseenter", addSpan(bs, "Bootstrap"));
js.addEventListener("mouseenter", addSpan(js, "JavaScript"));
npm.addEventListener("mouseenter", addSpan(npm, "NPM"));
php.addEventListener("mouseenter", addSpan(php, "PHP"));
laravel.addEventListener("mouseenter", addSpan(laravel, "Laravel"));
db.addEventListener("mouseenter", addSpan(db, "MySQL"));

// Function to create a span next to the icons with the text of techName arguement
function addSpan(className, techName){
    var usedOnce = false;
    const location = className;
    const tech = techName;

    return function addSpanElement(){        
        if(!usedOnce){
            var span = document.createElement("span");
            span.className = `${tech}-text`
            span.innerHTML=`${tech}`;
            span.style.color = "black";
            span.style.fontSize = "1.5rem"
            span.style.marginLeft = "1rem"
            location.appendChild(span);
            usedOnce=true;
        }
    }
}

// See-more button with a ripple affect, offseting from left/top of event target pos
const seeMore = document.querySelector(".see-more");

seeMore.addEventListener("mouseover", function(e){

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    const ripple = document.createElement('div');

    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    seeMore.appendChild(ripple);

    setTimeout(() => {
        ripple.remove()
      }, 1000)
    });

    // Adds lightbox effect to everything with class project-images-images

    const lightbox = document.createElement('div')
    lightbox.id = 'lightbox'
    document.body.appendChild(lightbox)
    
    const images = document.querySelectorAll('.projects-images-image')
    images.forEach(image => {
      image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while (lightbox.firstChild) {
          lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
      })
    })
    
    lightbox.addEventListener('click', e => {
      if (e.target !== e.currentTarget) return
      lightbox.classList.remove('active')
    })

    document.addEventListener('keydown', e => {  
        if (e.code == "Escape" || e.code ==  "Enter")
        lightbox.classList.remove('active')
        else return
    });