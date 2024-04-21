/* Open menu */
function openNav() {
    document.getElementById("myNav").style.display = "block";
  }

/* Close menu */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
  }

// arrow animation
document.addEventListener('DOMContentLoaded', function() {
  var scrollArrow = document.getElementById('scrollArrow');
  scrollArrow.addEventListener('click', function(event) {
      event.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});


