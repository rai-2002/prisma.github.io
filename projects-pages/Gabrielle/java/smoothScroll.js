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