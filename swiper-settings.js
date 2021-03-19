$(document).ready(function() {var swiper = new Swiper('.swiper-container',{loop: true, loopPreventsSlide: false,
                              
navigation: {nextEl: '.next-right',prevEl: '.next-left',},       });
                                
swiper.on('transitionEnd', function() {$(".next-right").removeClass("mynext");
localStorage.setItem('n1', swiper.activeIndex);  });
var n1 = localStorage.getItem('n1');
                                
function nbox() {if (localStorage.getItem("n1") === null) {
swiper.slideTo(1,0,true); }else {swiper.slideTo(n1,0,true);}  }

$('.reset').click(function() { rhash();});
    
    nbox();  });
