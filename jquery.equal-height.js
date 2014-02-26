// https://github.com/eveevans/jquery-equal-height
// version 1.2

(function($) {

  $.fn.make_children_equal_height = function () {
          var make_equal_height = function (element) {            
              var $within = $(element),               
                  el = $within.attr('data-equal-height'), /* caso especial en el que se especifica otro nivel para ajustar alto*/
                  selector = typeof(el) != 'undefined' ? el : '> div',
                  $children = $(selector, $within),
                  tallest = 0;                  
              
              $children.each( function() {
                  var $this = $(this);
                  
                  $this.css('min-height', '');
                  var h = $this.height();
                  if ( h > tallest ) {
                      tallest = h;
                  }
              });
              
              $children.each( function() {
                  // $(this).css('height', tallest + 'px');
                  $(this).animate({'height':tallest});
              });
          };
          
          return this.each( function () {
              make_equal_height(this);
          });
      };

})( jQuery );
