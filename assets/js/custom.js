(function($){
    $(document).ready(function(){
        $(".headline").click(function(){
            var parentDOM = $(this).parent();
            parentDOM.find(".details").slideToggle("slow");
            parentDOM.toggleClass("active");
        });
    });
}($));
