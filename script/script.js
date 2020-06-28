let introElements = document.getElementById("intro").children;
let mobileMenu = document.getElementById('menu-toggle');
let desktopMenu = document.getElementById('desktop-menu');
let overlay = document.getElementById('overlay');
let navigation = document.getElementById("top-Navigation");
let portfolio = document.getElementById("portfolio");
let aboutMe = document.getElementById("about-me");
let contact = document.getElementById("contact");
var mq = window.matchMedia('@media all and (max-width: 769px)');
let navHeight = 100;
let showMenu = false;


ready = (callbackFunction) => {
  if(document.readyState != 'loading')
    callbackFunction(event)
  else
    document.addEventListener("DOMContentLoaded", callbackFunction)
}

ready(event => {
    document.getElementsByTagName("html")[0].style.visibility = "visible";
})

window.onscroll = () => {
  showIntroElements();
  updateNavigationDesign();
}

//update navigation design at certain point
updateNavigationDesign = () => {
  if (window.pageYOffset > 550 && mq) {
    navigation.style.backgroundColor = "#FFF";
    navigation.style.boxShadow = "1px 1px 10px #919090";
    desktopMenu.style.color = "#660066";

  }
  else {
    navigation.style.backgroundColor = "transparent";
    navigation.style.boxShadow = "none";
    desktopMenu.style.color = "#FFF";
  }
}

showIntroElements = () => {
  for (let i = 0; i < introElements.length; i++) {
    if (introElements[i].offsetTop <= navHeight + scrollY) {
      introElements[i].style.opacity = 0;
      introElements[i].style.transform = "translate(1000px)";
    } else {
      introElements[i].style.opacity = 1;
      introElements[i].style.transform = "translate(0)";
    }
  }
}

toggleMenu = () => {
  if (showMenu === false) {
    mobileMenu.style.top = "160px";
    overlay.style.height = "150px";
    showMenu = true;
  }
  else {
    mobileMenu.style.top = "10px";
    overlay.style.height = "0";
    showMenu = false;
  }
}

scrollToElement = (whereTo) => {
  const addedPixels = -50;
  let location = whereTo.offsetTop + addedPixels;
  window.scrollTo({
    top: location,
    left: 0,
    behavior: 'smooth'
  });
}
