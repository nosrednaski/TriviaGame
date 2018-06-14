$(document).ready(function(){

    //**************** Variables ****************************
    var correctCount = 0;
    var wrongCount = 0;
    var intervalId;
   
    // Timer
    var countDown = {
        time: 45,
        start: function() {
            intervalId = setInterval(countDown.decrement, 1000);
        },
        stopAndReset: function() {      
          clearInterval(intervalId);
          countDown.time = 45;
        },
        decrement: function() {
          countDown.time--;
          $(".progress").attr("value",countDown.time);
          countDown.zeroCheck();
        },
        zeroCheck: function() {
            if (countDown.time === 0) {
                countDown.stopAndReset();
                $(".progress").hide(200);
                $("#questions").hide(1000);
                $(".footer").hide();
                $("#results").show(1000);
            }
        },
    };
    
   
    //**************************Page Display*************************
    // Hide questions previous to button press
    $("#questions").hide();
    $(".has-bg-img").hide();
    $(".footer").hide();
    $(".progress").hide();
    $("#results").hide();
   
    // Show questions on button press and hide start button
    $("#startButton").click(function(){
        $(".parallax").hide(1000);
        $(".progress").show(200);
        $("#questions").slideToggle(1000);
        $(".has-bg-img").slideDown(1000);
        $(".footer").show(4000);
        window.scrollTo(0, 0);
        // Timer Starts
        countDown.start();
    });
    
    
  
    //Time displays in the progress bar
    $(".progress").attr("value",countDown.time);
    $(".progress").attr("max",countDown.time);
    //Page loads with all radios unchecked
    $(":input").prop("checked", false);

    
    //************************************ Click events ***********************************
    $(".control").on("click", ":input", function(){
        $(".feedbackDisplay").empty();
        //Why won't the feedback empty after the first 2 clicks?
        if ($(this).val() === "true" ) {
            showCorrect();
            
        }; 
         if ($(this).val() === "false") {
            showWrong();
        };
        $("#correctDisplay").text(correctCount);
        $("#wrongDisplay").text(wrongCount);
        
    }); 

    function showCorrect() {
        correctCount++; 
        $(".feedbackDisplay").append("<span class='displaySpan'>Correct!<span>");
        $(".displaySpan").attr("class","has-text-success");
    };

    function showWrong() {
        wrongCount++; 
        $(".feedbackDisplay").append("<span class='displaySpan'>Try Again.<span>");
        $(".displaySpan").attr("class","has-text-danger");  
    };
    
    // Finished Quiz Button
    $(document).on("click", "#finishedButton", function() {
        countDown.stopAndReset();
        $(".progress").hide(200);
        $("#questions").hide(1000);
        $(".footer").hide();
        $("#results").show(1000);
    });

    // Reset Button
    $(document).on("click", "#resetButton", function() {
        correctCount = 0;
        wrongCount = 0;
        $("#results").hide();
        $(".has-bg-img").hide();
        $(".parallax").show();
        $(":input").prop("checked", false);
        $(".feedbackDisplay").empty();
    });

    
});


//List of problems:
// 1. Timer won't start - FINISHED
//     Timer won't display - FINISHED
//      Timer won't stop - FINISHED
//     -Will timer reset with reset function? - FINISHED
// 2. Counters don't count. -FINISHED
//     Counters don't display. -FINISHED
//     -reset? -FINISHED
// 3. Feedback only display after first click event. -FINISHED
//     -will it hide multiple? - FINISHED
// 4. Need sticky progress bar. -FINSISHED
// 5. Can I get feedback to only display in one tile at a time?
// 6. Animate each tile in after the user has found the correct answer for each. 
//     -Solves #5
// 7. Display of correct answers with the results. 
//
//
//
//
//
//


