$(document).ready(function(){

    /* main_visual */
    var bnnNum = 0;
    var lastNum = $(".main_visual ul li").length-1;
    var banner_w = $(".content1").width();
    
    // 리사이즈
    $(window).resize(function(){
        banner_w = $(".content1").width();
    });
    
    // 오토배너
    function autoBanner(){
        bnnNum++;
        if(bnnNum > lastNum) bnnNum=0;
        $(".main_visual ul").stop().animate({"left":bnnNum * -banner_w},600,"linear",function(){
    
            if($(".main_visual ul li").eq(bnnNum).hasClass("black")){
                $("header").addClass("black");
            }else{
                $("header").removeClass("black");
            }
        });
    }
    
    // 일정한 시간동안 계속반복
    var autoBnn = setInterval(autoBanner,6000);
    
    
    /* allmenu */
    $(".allmenu_btn a").click(function(){
        $(".allmenu").addClass("on");
    });
    
    $(".allmenu_bg").click(function(){
        $(".allmenu").removeClass("on");
    });
    
    
    /* search */
    $(".srch_btn a").click(function(){
        $(".search").addClass("on");
    });
    
    $(".srch_close").click(function(){
        $(".search").removeClass("on");
    });
    
    
    // tab_bar
    $(".tab_bar_inner ul li").eq(0).addClass("on");

    $(".tab_bar_inner ul li").click(function(){
        $(".tab_bar_inner ul li").removeClass("on");
        $(this).addClass("on");
    });
    
});