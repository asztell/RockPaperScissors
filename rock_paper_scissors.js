var userHandShape = "",
    handShape,
    handShapeArr = ["r", "p", "s"],
    r = "r",
    p = "p",
    s = "s",
    wins = 0,
    losses = 0,
    ties = 0;

function rand(min, max) {
  return (Math.floor(Math.random() * (max - min)) + min);
}

//console.log(handShape);
//console.log(i)

function rps () {
    var w = "User wins!",
        l = "User loses...",
        t = "It's a tie!";

    switch (handShape) {
        case r:
            if(userHandShape == p) {
                console.log(w);
                wins++;
                console.log(wins);
            } else if(userHandShape == s){
                console.log(l);
                losses++;
                console.log(losses);
            } else if(userHandShape == r){
                console.log(t);
                ties++;
                console.log(ties);
            }
            break;
        
        case p:
            if(userHandShape == s) {
                console.log(w);
                wins++;
                console.log(wins);
            } else if(userHandShape == r){
                console.log(l);
                losses++;
                console.log(losses);
            } else if(userHandShape == p){
                console.log(t);
                ties++;
                console.log(ties);
            }
            break;
        
        case s:
            if(userHandShape == r) {
                console.log(w);
                wins++;
                console.log(wins);
            } else if(userHandShape == p){
                console.log(l);
                losses++;
                console.log(losses);
            } else if(userHandShape == s){
                console.log(t);
                ties++;
                console.log(ties);
            }
            break;

        default:
            break;
    }
}

document.onkeyup = function(event) {
    var i = rand(0,3);
    handShape = handShapeArr[i];

	userHandShape = String.fromCharCode(event.keyCode).toLowerCase();

    if((userHandShape == r) || (userHandShape == s) || (userHandShape == p)) {
        rps();
    }

    var outputStr = "<p>wins " + wins + "</p>" +
                    "<p>losses " + losses + "</p>" +
                    "<p>ties " + ties + "</p>";

    var output = document.getElementById("output");
    output.innerHTML = outputStr;
}