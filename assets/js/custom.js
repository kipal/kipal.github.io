(function($){
    $(document).ready(function(){
        $(".headline").click(function(){
            var parentDOM = $(this).parent();
            parentDOM.find(".details").slideToggle("slow", function(){
                parentDOM.toggleClass("active");
            });
        });
    });
}($));
