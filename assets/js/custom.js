(function($){
    $(document).ready(function(){
        $(".headline").click(function(){
            $(this).parent().find(".details").toggle();
        });
    });
}($));
