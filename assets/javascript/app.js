$(document).ready(function(){

    //    Declare Variables
    var correct;
    var incorrect;
    var correctCount = 0;
    var wrongCount = 0;
    
    
    // Hide questions previous to button press
    // $("#questions").hide();
    // $(".has-bg-img").hide();
    // $(".footer").hide();
    $(".parallax").hide();
    // Show first question on button press and hide start button
    $("#startButton").click(function(){
        $(".parallax").hide(1000);
        $("#questions").slideToggle(1000);
        $(".has-bg-img").slideDown(1000);
        $(".footer").show(5000);
    });

    //Page loads with all radios unchecked
    $(":input").prop("checked", false);

    // Click event logic
    $(":input").on("click",function(){
        $("#hideIt").hide(0);
        //Why won't the feedback hide after the first 2 clicks?
        if ($(this).val() === "true" ) {
            showCorrect();
            $(this).append("<div id='hideIt' class='feedbackDisplay'>Correct!<div>");
            $(".feedbackDisplay").attr("class","has-text-success");
        } 
         if ($(this).val() === "false") {
            showWrong();
            $(this).append("<div id='hideIt' class='feedbackDisplay'>Try Again.<div>");
            $(".feedbackDisplay").attr("class","has-text-danger");
        }
        console.log($(this)) ;
    }) 

   //Question: How would you disable all radios just on 1 tile after correct anser is selected?? 
   
    //Function for if correct option is selected
    function showCorrect() {
        // $(".control").append("<div id='hideIt' class='feedbackDisplay'>Correct!<div>");
        // $(".feedbackDisplay").attr("class","has-text-success");
        
        var correctCount = 0;
        correctCount++; 
        console.log(correctCount);
    
    }

    //Function for if wrong option is selected
    function showWrong() {
        
        
        var wrongCount = 0;
        wrongCount++;   
        console.log(wrongCount);
    }

    
    
});


