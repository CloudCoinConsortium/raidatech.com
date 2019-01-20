// http://www.stampready.net/dashboard/editor/index.php?demo=9361
// http://xerotheme.com/keyra/01_theme/html/index.html
// https://ramy-creative-one-page.netlify.com/image-demo.html
// https://closy.netlify.com/main.html
// http://piotr.stare.pro/hosting/index3.html
// http://piotr.stare.pro/hosting/index2.html
// https://ramy-creative-one-page.netlify.com/image-demo.html

// https://pixabay.com/en/hacker-cyber-crime-internet-2300772/
// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//     document.getElementById("back-to-top").style.display = "block";
//   } else {
//     document.getElementById("back-to-top").style.display = "none";
//   }
// }

$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });

  var navMain = $("#nav-main");
  navMain.on("click", "a", null, function() {
    navMain.collapse("hide");
  });
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
