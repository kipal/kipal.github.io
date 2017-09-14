(function($){
    $(document).ready(function(){
        $(".headline").click(function(){
            $(this).toggleClass("hover");

            $(this).parent().find(".details").slideToggle("slow", function(){
               var isHidden = $(this).css("display") == "none";
	    });
        });
    });
}($));
