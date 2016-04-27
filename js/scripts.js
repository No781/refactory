// credits to Teegan Lincoln
// http://codepen.io/teeganlincoln/pen/MaNxBv

$(document).ready(function(){
   var $sm = 480;

   function resizeThis() {
      var $imgH = $('#offer .middle img').width();
      if ($(window).width() >= $sm) {
         $('#offer .left, #offer .right, #offer .offer-section, #offer .middle').css('height', $imgH);
      } else {
         $('#offer .left,.right,.offer-section').css('height', 'auto');
      }
   }

   resizeThis();

   $(window).resize(function(){
      resizeThis();
   });

   $(window).scroll(function() {
      $('#offer .offer-section').each(function(){
         var $elementPos = $(this).offset().top;
         var $scrollPos = $(window).scrollTop();

         var $sectionH = $(this).height();
         var $h = $(window).height();
         var $sectionVert = (($h/2)-($sectionH/4));


         if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
            $(this).addClass('animate');
         } else {
            $(this).removeClass('animate');
         }
      });
   });
});