//NAV BAR FUNCTIONALITY
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

window.onload = function () {
  const REACT = document.querySelector(".react");
  const NODE = document.querySelector(".node");
  const SASS = document.querySelector(".sass");
  window.addEventListener("scroll", scrollEffect);

  function scrollEffect() {
    if (window.scrollY >= 450) {
      REACT.style.opacity = "1";
      REACT.style.transform = "translateX(0px)";
      REACT.style.transition = "1s ease-in";
    } else {
      REACT.style.opacity = "0";
      REACT.style.transform = "translateX(-500px)";
    }

    if (window.scrollY >= 650) {
      NODE.style.opacity = "1";
      NODE.style.transform = "translateX(0px)";
      NODE.style.transition = "1s ease-in";
    } else {
      NODE.style.opacity = "0";
      NODE.style.transform = "translateX(-500px)";
    }

    if (window.scrollY >= 800) {
      SASS.style.opacity = "1";
      SASS.style.transform = "translateX(0px)";
      SASS.style.transition = "1s ease-in";
    } else {
      SASS.style.opacity = "0";
      SASS.style.transform = "translateX(-500px)";
    }
  }
};
