$(document).ready(function(){

    //    Declare Variables
    var correct;
    var incorrect;
    
    
    // Hide questions previous to button press
    $("#questions").hide();
    $(".has-bg-img").hide();
    $(".footer").hide();
    // Show first question on button press and hide start button
    $("#startButton").click(function(){
        $(".parallax").hide(1000);
        $("#questions").slideToggle(1000);
        $(".has-bg-img").slideDown(1000);
        $(".footer").show(5000);

    });
});


