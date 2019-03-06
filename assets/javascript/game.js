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
   start();
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
   $('#winCount').html(finalScore);

   // random value crystals//
   $('#crystalB1').attr("value", crys1);
   var test = $('#crystalB1').attr("value");

   $('#crystalB2').attr('value', crys2);
   var test = $('#crystalB2').attr("value");

   $('#crystalB3').attr("value", crys3);
   var test = $('#crystalB3').attr("value");

   $('#crystalB4').attr("value", crys4);
   var test = $('#crystalB4').attr("value");

   //When clicked saves to Final score
   //added the .off() because it will repeat the click twice without it and save the last number that
   // was clicked and push it to the total score during the next game.
   $('.button').off().on('click', function () {
       var test1 = $(this).attr('value');
       //Adds to final score when clicked
       finalScore = parseInt(finalScore) + parseInt(test1);
       console.log('Crystal*  ' + test1);
       console.log('finalScore***  ' + finalScore);
       $('#winCount').html(finalScore);

       if (randNum === finalScore) {
           alert('win');
           win++;
           $('.winCount').html(win);
           $('#winCount').html(0);
           reset();

       }
       else if (finalScore > randNum) {
           alert('loser');
           loss++;
           $('.loss').html(loss);
           $('#winCount').html(0);
           reset();
       }

   });

}

//Main------------------------------------
start();