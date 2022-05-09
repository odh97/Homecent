$(document).ready(function(){

    
    // tab_bar
    $(".tab_bar_inner ul li").eq(4).addClass("on");

    $(".tab_bar_inner ul li").click(function(){
        $(".tab_bar_inner ul li").removeClass("on");
        $(this).addClass("on");
    });

    $(".login_btn").click(function(){
        $(".login_wrap").removeClass("on");
    });
    
});