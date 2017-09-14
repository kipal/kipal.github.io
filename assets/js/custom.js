(function($){
    $(document).ready(function(){
        $(".headline").click(function(){
            var headlineDOM = $(this);

            $(this).parent().find(".details").slideToggle("slow", function(){
               var isHidden = $(this).css("display") == "none";

               if (isHidden) {
                   headlineDOM.addClass("hover");
               }
	    });
        });
    });
}($));
