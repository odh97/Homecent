$(document).ready(function(){

    $(".sub_login ol li").click(function(){

        var subliidx = $(".sub_login ol li").index(this);
        console.log(subliidx);

        $(".login_wrap > div").removeClass("on");
        $(".login_wrap > div").eq(subliidx+1).addClass("on");

    });

    $(".find_close_btn").click(function(){
        $(".login_wrap > div").removeClass("on");
    });

    $(".singup_close_btn").click(function(){
        $(".login_wrap > div").removeClass("on");
    });
    
    $(".find_id .find_list > a").eq(1).click(function(e){
        $(".login_wrap > div").removeClass("on");
        $(".login_wrap > div").eq(2).addClass("on");
    });

    $(".find_password .find_list > a").eq(0).click(function(e){
        $(".login_wrap > div").removeClass("on");
        $(".login_wrap > div").eq(1).addClass("on");
    });

});