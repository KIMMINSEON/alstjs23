$(function () {
    
   // 맨위로 가기 
   $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('#top').fadeIn("fast");
        } else {
            $('#top').fadeOut("fast");
        }
    });
    $('#top').click(function () { 
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });
    
    // 메뉴 스크롤
    
    $(window).on('scroll', function(){
        var sT = $(window).scrollTop();
        
        if(sT >= 100){
            $('header').addClass('plus',500),
            $('header h1').addClass('plus_h'),
            $('header nav').addClass('plus_h'),
            $('header #trigger').addClass('plus_t'),
            $('header span').eq(1).addClass('hidden_m');
            
        }else{
            $('header').removeClass('plus',500),
            $('header h1').removeClass('plus_h'),
            $('header nav').removeClass('plus_h'),
            $('header #trigger').removeClass('plus_t'),
            $('header span').eq(1).removeClass('hidden_m');
        }
        
    });
    
    // 모바일 메뉴
    
    var trigger = $('#trigger');
    var menu = $('nav ul');
	$(trigger).on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass("on");
        menu.slideToggle();
    });
    $(window).resize(function () {
        var w = $(window).width();
        if (w > 1280 && menu.is(':hidden')) {
        menu.removeAttr('style');
        }
    });
    
});
