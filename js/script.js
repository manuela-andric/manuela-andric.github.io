function currentDiv(n,a,b) {
    showDivs(slideIndex = n,a,b);
  }
  
  function showDivs(n,a,b) {
    var i;
    var x = document.getElementsByClassName(a);
    var dots = document.getElementsByClassName(b);
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }