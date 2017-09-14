(function($){
    $(document).ready(function(){
        $(".headline").click(function(){
            var parentDOM = $(this).parent();
            parentDOM.toggleClass("active");
            parentDOM.find(".details").slideToggle("slow");
        });
    });
}($));
