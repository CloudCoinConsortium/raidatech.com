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
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('#back-to-top').fadeIn(); 
        } else { 
            $('#back-to-top').fadeOut(); 
        } 
    });
});