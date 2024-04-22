/* Open menu */
function openNav() {
    document.getElementById("myNav").style.display = "block";
  }

/* Close menu */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }

function closeNav() {
    var navOverlay = document.getElementById('myNav');
    navOverlay.style.display = 'none'; 
  }

//arrow smooth scroll
document.addEventListener('DOMContentLoaded', function() {
  var scrollArrows = document.querySelectorAll('.scrollArrow'); // Select all elements with the class 'scrollArrow'
  scrollArrows.forEach(function(scrollArrow) { // Iterate through each element
      scrollArrow.addEventListener('click', function(event) {
          event.preventDefault();
          var target = document.querySelector(this.getAttribute('href')); // Use 'this' to refer to the current element in the loop
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });
});




