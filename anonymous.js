$(function(){
    $("#load").click(function(){
        $.get("STanonymous.txt", function(Response){
            $("#result").empty();
            $("#result").append(Response);
        });
    });
});