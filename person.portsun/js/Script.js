// side navigation js code
// used in quaryselecter in progra m

// 1. some javascript js bug amd the bug is line no="7" spme thing wrong 
// ans= Spaling test
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");
let body = document.querySelector("body");
 
menuBtn.onclick = function() {
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
    // body.style.overflow="hidden";
  }
  
  cancelBtn.onclick = function() {
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
    // body.style.overflow="auto";

}

// sticky navigation Menue js code
let val;
let nav = document.querySelector("nav");
window.onscroll=function(){
  if(document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  }else{
    nav.classList.remove("sticky");

  }
}