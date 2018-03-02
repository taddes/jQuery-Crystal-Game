

var randomNum = (Math.floor(Math.random() * 101 + 19 ));
console.log(randomNum);

var crystalNum = (Math.floor(Math.random() * 12 ));
console.log(crystalNum);
//do for all 4
var crys1Counter = 0;
var crys2Counter = 0;
var crys3Counter = 0;
var crys4Counter = 0;

userNumber = 0;

//crystal 1 
$(".crystals").on("click", ".crys1", function() {
    userNumber += 10;
    alert(userNumber);
});

//crystal 2
$(".crystals").on("click", ".crys2", function(){
    userNumber += 10;
    userTotal = usertotal + crystal2
});

//crystal 3
$(".crystals").on("click", ".crys3", function(){
    userNumber += 10;
    
});

//crystal 4
$(".crystals").on("click", ".crys4", function(){
    userNumber += 10;

});


 $(".userScore").text(userNumber);

var crystalChoices;

var crys1Counter = 0;
var crys2Counter = 0;
var crys3Counter = 0;
var crys4Counter = 0;

var losses = 0;
var wins = 0;

var userNumber;

if (userNumber > randomNum) {
    losses++;
    alert("you lose!");
} 

if (userNumber === randomNum) {
    wins++;
    //reset
}