//PAGE TRANSITION FUNCTION
function pageTransition() {
  const anchors = document.querySelectorAll("a");
  const transition_el = document.querySelector(".transition");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 300);
}

//NAV BAR FUNCTIONALITY
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  //document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  //document.getElementById("main").style.marginLeft = "0";
}

//SCROLL FUNCTION
function scrollEffect() {
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
}

//FORM VALIDATION
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

