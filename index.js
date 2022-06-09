function opennav() {
  document.getElementById("sidebar").style.left = "0";
}

function closeNav() {
  document.getElementById("sidebar").style.left = "-300px";
}
// ScrollFade 0.1

// ScrollFade 0.1
window.addEventListener('scroll',()=>{
  document.getElementById("sidebar").style.left = "-300px";

})



var fadeElements = document.getElementsByClassName("scrollFade");

function scrollFade() {
  var viewportBottom = window.scrollY + window.innerHeight;

  for (var index = 0; index < fadeElements.length; index++) {
    var element = fadeElements[index];
    var rect = element.getBoundingClientRect();

    var elementFourth = rect.height / 4;
    var fadeInPoint = window.innerHeight - elementFourth;
    var fadeOutPoint = -(rect.height / 2);

    if (rect.top <= fadeInPoint) {
      element.classList.add("scrollFade--visible");
      element.classList.add("scrollFade--animate");
      element.classList.remove("scrollFade--hidden");
    } else {
      element.classList.remove("scrollFade--visible");
      element.classList.add("scrollFade--hidden");
    }

    if (rect.top <= fadeOutPoint) {
      element.classList.remove("scrollFade--visible");
      element.classList.add("scrollFade--hidden");
    }
  }
}

document.addEventListener("scroll", scrollFade);
window.addEventListener("resize", scrollFade);
document.addEventListener("DOMContentLoaded", function () {
  scrollFade();
});


// dark mode 

// const element = document.getElementById("sun");
const element = document.querySelector("#sun");
console.log(element);

element.addEventListener("click",()=>{
  element.classList.toggle('bi-brightness-high-fill');
  element.classList.toggle('bi-moon-fill');
  document.body.classList.toggle('dark');
})

window.addEventListener("load",()=>{
  if(document.body.classList.contains("dark")){
    element.classList.add('bi-brightness-high-fill');
  }else{
    element.classList.toggle('bi-moon-fill');
  }
})
