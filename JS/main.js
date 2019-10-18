

$(window).scroll(function(){
    if(isScrolledIntoView("#bounce") ){
      //$(this).children(‘p’).text(‘visible’);
      $("#bounce").addClass("animated bounceInDown");
    }
  });


 function isScrolledIntoView(elem){
    var $elem = $(elem);
    var $window = $(window);
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    //var elemBottom = elemTop + $elem.height();
    var elemBottom = elemTop;
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
 }
 
 