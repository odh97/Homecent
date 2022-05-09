$(document).ready(function(){

    /* allmenu */
    $(".allmenu_btn a").click(function(){
        $(".allmenu").addClass("on");
    });
    
    $(".allmenu_bg").click(function(){
        $(".allmenu").removeClass("on");
    });

    $(".popularity h3 a").click(function(){
        $(".popularity h3 a").removeClass("on");
        $(this).addClass("on");
    });
    
    /* search */
    $(".srch_btn a").click(function(){
        $(".search").addClass("on");
    });
    
    $(".srch_close").click(function(){
        $(".search").removeClass("on");
    });

    $(".like").click(function(){
        $(this).toggleClass("on");
    });






    
    // tab_bar
    $(".tab_bar_inner ul li").eq(1).addClass("on");

    $(".tab_bar_inner ul li").click(function(){
        $(".tab_bar_inner ul li").removeClass("on");
        $(this).addClass("on");
    });
    
});