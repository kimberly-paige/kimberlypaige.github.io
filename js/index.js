//adding the action to the button
$(document).ready(function() {

     $('a[href*="#"]:not([href="#"])').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
            console.log(target.offset().top)
           $('html, body').animate({

             scrollTop: target.offset().top 
           }, 1000);
           return false;
         }
       }
     });

   });
