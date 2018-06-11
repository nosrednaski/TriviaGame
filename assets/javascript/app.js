$(document).ready(function(){

    //    Declare Variables
    var correctCount = 0;
    var wrongCount = 0;
    var countDownFrom = 1;             
    var intervalId;              
    
    // Hide questions previous to button press
    $("#questions").hide();
    $(".has-bg-img").hide();
    $(".footer").hide();
    $(".progress").hide();
    $("#results").hide();
    // $(".parallax").hide();
    // Show first question on button press and hide start button
    $("#startButton").click(function(){
        $(".parallax").hide(1000);
        $(".progress").show(200);
        $("#questions").slideToggle(1000);
        $(".has-bg-img").slideDown(1000);
        $(".footer").show(4000);
        // Timer Starts
        run();
    });

    //Timer Function
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }
      console.log(countDownFrom);
      //  The decrement function.
      function decrement() {
  
        //  Decrease number by one.
        countDownFrom--;
  
        //  Show the number in the #show-number tag.
        $(".progress").attr("value",countDownFrom);
  
  
        //  Once number hits zero...
        if (countDownFrom === 0) {
  
          //  ...run the stop function.
          stop();
  
          // Show results when time is up
          $(".progress").hide(200);
          $("#questions").hide(1000);
          $(".has-bg-img").hide(1000);
          $(".footer").hide(1000);
          $("#results").show(1000);
        }
      }
  
      //  The stop function
      function stop() {
  
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
      }
  

      

      //###########################################

    //Page loads with all radios unchecked
    $(":input").prop("checked", false);

    // Click event logic
    $(":input").on("click",function(){
        $("#hideIt").hide(200);
        //Why won't the feedback hide after the first 2 clicks?
        if ($(this).val() === "true" ) {
            showCorrect();
        } 
         if ($(this).val() === "false") {
            showWrong();
        }
    }) 

   //Question: How would you disable all radios just on 1 tile after correct answer is selected?? 
   
    //Function for if correct option is selected
    function showCorrect() {
        $(".control").append("<div id='hideIt' class='feedbackDisplay'>Correct!<div>");
        $(".feedbackDisplay").attr("class","has-text-success");
        correctCount++; 
    }

    //Function for if wrong option is selected
    function showWrong() {
        $(".control").append("<div id='hideIt' class='feedbackDisplay'>Try Again.<div>");
        $(".feedbackDisplay").attr("class","has-text-danger");
        wrongCount++;     
    }

    
    
});


