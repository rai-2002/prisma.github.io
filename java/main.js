/* Open menu */
function openNav() {
    document.getElementById("myNav").style.display = "block";
  }

/* Close menu */
function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

// function closeNav() {
//     document.getElementById("myNav").style.display = "none";
//   }

// function closeNav() {
//     var navOverlay = document.getElementById('myNav');
//     navOverlay.style.display = 'none'; 
//   }

  // Top scroll bar
  window.onscroll = function() {myFunction()};
  
  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
   }