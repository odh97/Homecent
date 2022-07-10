$(document).ready(function(){

    $(".plus_btn > span").click(function(){
        $("footer").toggleClass("on");
    });


    
    // tab_bar
    $(".tab_bar_inner ul li").eq(3).addClass("on");

    $(".tab_bar_inner ul li").click(function(){
        $(".tab_bar_inner ul li").removeClass("on");
        $(this).addClass("on");
    });
    
});