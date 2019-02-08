// http://www.stampready.net/dashboard/editor/index.php?demo=9361
// http://xerotheme.com/keyra/01_theme/html/index.html
// https://ramy-creative-one-page.netlify.com/image-demo.html
// https://closy.netlify.com/main.html
// http://piotr.stare.pro/hosting/index3.html
// http://piotr.stare.pro/hosting/index2.html
// https://ramy-creative-one-page.netlify.com/image-demo.html

// https://pixabay.com/en/hacker-cyber-crime-internet-2300772/

// Subscribe:
// http://kulesh.by/theme/sojka/demo-1/


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
      $("#nav-main").removeClass("nav-normal");
      $("#nav-main").addClass("nav-scroll");
    } else {
      $("#back-to-top").fadeOut();
      $("#nav-main").removeClass("nav-scroll");
      $("#nav-main").addClass("nav-normal");
    }
  });

  var navMain = $("#nav-main");
  navMain.on("click", "a", null, function() {
    navMain.collapse("hide");
  });

  function ckScrollInit(items, trigger) {
    items.each(function() {
      var ckElement = $(this),
        AnimationClass = ckElement.attr("data-animation"),
        AnimationDelay = ckElement.attr("data-animation-delay");

      ckElement.css({
        "-webkit-animation-delay": AnimationDelay,
        "-moz-animation-delay": AnimationDelay,
        "animation-delay": AnimationDelay,
        opacity: 0
      });

      var ckTrigger = trigger ? trigger : ckElement;

      console.log(ckTrigger);

      var wp = new Waypoint({
        element: ckTrigger[0],
        handler: function() {
          if (ckTrigger.hasClass("number")) {
            ckElement.css("opacity", "1");
            var num = ckTrigger.attr("data-number");
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
            ckElement.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step
              });
            
          } else {
            ckElement.addClass("animated").css("opacity", "1");
            ckElement.addClass("animated").addClass(AnimationClass);
          }
          
        },
        offset: "90%"
      });

      /**
      ckTrigger.waypoint(
        function() {
          ckElement.addClass("animated").css("opacity", "1");
          ckElement.addClass("animated").addClass(AnimationClass);
        },
        {
          triggerOnce: true,
          offset: "90%"
        }
      );
      **/
    });
  }

  ckScrollInit($(".animation"));
  
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

//     TODO: Change visibility:
//     https://stackoverflow.com/questions/3331353/transitions-on-the-display-property
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

});
