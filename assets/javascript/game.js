var crys1 = Math.floor(Math.random() * (12 - 1) + 1);
var crys2 = Math.floor(Math.random() * (12 - 1) + 1);
var crys3 = Math.floor(Math.random() * (12 - 1) + 1);
var crys4 = Math.floor(Math.random() * (12 - 1) + 1);

//counter//
var win = 0;
var loss = 0;
var finalScore;

//Functions//
function reset() {
   //reset//
   randNum = Math.floor(Math.random() * (120 - 19) + 19);
   console.log('#randomNumbberGen =  ' + randNum);
   crys1 = Math.floor(Math.random() * (12 - 1) + 1);
   crys2 = Math.floor(Math.random() * (12 - 1) + 1);
   crys3 = Math.floor(Math.random() * (12 - 1) + 1);
   crys4 = Math.floor(Math.random() * (12 - 1) + 1)
   finalScore = 0;

   //HTML//
   $('#randomNumberGen').html(randNum);
   $('#winCount').html(finalScore);
   start(0);
}

function start() {
   //reset//
   randNum = Math.floor(Math.random() * (120 - 19) + 19);
   console.log('randomNumberGen =  ' + randNum);
   crys1 = Math.floor(Math.random() * (12 - 1) + 1);
   crys2 = Math.floor(Math.random() * (12 - 1) + 1);
   crys3 = Math.floor(Math.random() * (12 - 1) + 1);
   crys4 = Math.floor(Math.random() * (12 - 1) + 1)
   finalScore = 0;

   $('#randomNumberGen').html(randNum);
   $('#currentScore').html(finalScore);

   // random value crystals//
   $('#crystalnumber1').attr("value", crys1);
   var test = $('#crystalnumber1').attr("value");

   $('#crystalnumber2').attr('value', crys2);
   var test = $('#crystalnumber2').attr("value");

   $('#crystalnumber3').attr("value", crys3);
   var test = $('#crystalnumber3').attr("value");

   $('#crystalnumber4').attr("value", crys4);
   var test = $('#crystalnumber4').attr("value");

   //When clicked saves to Final score
   //added the .off() because it will repeat the click twice without it and save the last number that
   // was clicked and push it to the total score during the next game.
   $('.button').off().on('click', function () {
       var test1 = $(this).attr('value');
       //Adds to final score when clicked
       finalScore = parseInt(finalScore) + parseInt(test1);
       console.log('Crystal*  ' + test1);
       console.log('finalScore***  ' + finalScore);
       $('#currentScore').html(finalScore);

       if (randNum === finalScore) {
           alert('win');
           win++;
           $('#winCount').html(win);
           $('#currentScore').html(0);
           reset();

       }
       else if (finalScore > randNum) {
           alert('loser');
           loss++;
           $('#lossCount').html(loss);
           $('#currentScore').html(0);
           reset();
       }

   });

}

//Main------------------------------------
start();