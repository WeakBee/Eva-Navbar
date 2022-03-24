$(document).ready(function () {
  var $win = $(window);

  $win.scroll(function () {
    if ($win.scrollTop() > 0) {
      $("#nav .container").addClass("scrolltop");
    } else {
      $("#nav .container").removeClass("scrolltop");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  autohide = document.querySelector(".navbar");

  navbar_height = document.querySelector(".navbar").offsetHeight;

  if (autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function () {
      let scroll_top = window.scrollY;
      if (scroll_top < last_scroll_top) {
        autohide.classList.remove("scrolled-down");
        autohide.classList.add("scrolled-up");
      } else if (scroll_top < 600) {
      } else {
        autohide.classList.remove("scrolled-up");
        autohide.classList.add("scrolled-down");
      }
      last_scroll_top = scroll_top;
    });
    // window.addEventListener
  }
  // if
});
// DOMContentLoaded  end
