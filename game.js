var PlayerName=prompt("enter your name:");
var player=PlayerName;
var userClickedPattern=[];
var gamePattern=[];
var buttonColors=["red", "blue", "green", "yellow"]
var started=0;
var level=0;
$("h1").text("Hello "+PlayerName+" ! Have Fun Playing Flagestrator Game.");
setTimeout(function(){
    $("h1").text("Press A Key to Start");
},3000);

$(document).keypress(function() {
  if (started==0) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = 1;
  }
});
    




function nextSequence(){
    userClickedPattern=[];
    level++;
    var randomNumber=Math.floor(Math.random()*4);
    randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
    playSound(randomChosenColor);
    $("#"+randomChosenColor).css("opacity",0);
    setTimeout(function(){
        $("#"+randomChosenColor).css("opacity", 1);

    },100);
    
    $("h1").text("Level "+(level));
    
}

    $(".btn").click(function () { 

        var userChosenColor=$(this).attr("id");
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer((userClickedPattern.length)-1);
  
   });


   




function playSound(name){
    var aud=new Audio("./sounds/"+name+".mp3");
    aud.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}


function checkAnswer(currentLevel){
    var gameOverMusic=new Audio("./sounds/wrong.mp3");
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }

  
    else{
        if(gamePattern.length>0){
            $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },200);
            gameOverMusic.play();
            $("h1").text("Game over,"+ player+ " Press Any Key to Restart!");
            started=0;
            gamePattern=[];
            level=0;
            

        }
       
    }
   
   
   

}






