$(document).ready(function() {var swiper = new Swiper('.swiper-container',{loop: true, loopPreventsSlide: false,
                              
navigation: {nextEl: '.next-right',prevEl: '.next-left',},       });
                                
								
var n1 = localStorage.getItem('n1');
      				
swiper.on('transitionEnd', function() {$(".next-right").removeClass("mynext");
localStorage.setItem('n1', swiper.activeIndex);  }); 
                         
function nbox() {if (localStorage.getItem("n1") === null) {
swiper.slideTo(1,0,true); }else {swiper.slideTo(n1,0,true);}  }

$('.reset').click(function() {$("#popup").fadeToggle('fast');  });

nbox();

    
    
  });