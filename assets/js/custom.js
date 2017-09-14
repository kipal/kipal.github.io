(function($){
    $(document).ready(function(){
        $(".headline").click(function(){
            $(this).toggleClass("active");
            $(this).parent().find(".details").slideToggle("slow");
        });
    });
}($));
