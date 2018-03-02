

var randomNum = (Math.floor(Math.random() * 102 + 19));
console.log(randomNum);

var counter = 0;
var wins = 0;
var losses = 0;

$(".random-number").text(randomNum);

$(".total-score").text(counter);

var crystals = $(".crystals");

var crystalImages = ["./assets/images/crys1.png", "./assets/images/crys2.png", "./assets/images/crys3.png", "./assets/images/crys4.png"]
var crystalOptions =[];

var cry1 = ((Math.floor(Math.random() * 12 + 1) ) );
var cry2 = ((Math.floor(Math.random() * 12 + 1) ) );
var cry3 = ((Math.floor(Math.random() * 12 + 1) ) );
var cry4 = ((Math.floor(Math.random() * 12 + 1) ) );

crystalOptions.push(cry1);
crystalOptions.push(cry2);
crystalOptions.push(cry3);
crystalOptions.push(cry4);

console.log(crystalOptions);
console.log(cry1);
console.log(cry2);
console.log(cry3);
console.log(cry4);

for (var i = 0; i < crystalOptions.length; i++) {

    var crystalImage = $("<img>");

    crystalImage.addClass("crystal-image");

    crystalImage.attr("src", crystalImages[i]);

    crystalImage.attr("data-crystalvalue", crystalOptions[i]);

    crystals.append(crystalImage);
}

crystals.on("click", ".crystal-image", function() {


    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    if (counter === randomNum) {
        wins++;
        alert("WIN");
    }

    else if (counter >= randomNum) {
        losses++;
        alert("LOSE");
    } 

    $(".total-score").text(counter);

});




// var crystalNum = (Math.floor(Math.random() * 12 + 1));
// console.log(crystalNum);



// var userNumber = 0;
// $(".totalScore").text(userNumber);



//crystal 1 
// $(".crystals").on("click", ".crys1", function() {
//     userNumber += cry1;
//     alert(userNumber);
// });

// //crystal 2
// $(".crystals").on("click", ".crys2", function(){
//     userNumber += cry2;
// });

// //crystal 3
// $(".crystals").on("click", ".crys3", function(){
//     userNumber += cry3;
    
// });

// //crystal 4
// $(".crystals").on("click", ".crys4", function(){
//     userNumber += cry4;

// });





// var crystalChoices;

// var crys1Counter = 0;
// var crys2Counter = 0;
// var crys3Counter = 0;
// var crys4Counter = 0;

// var losses = 0;
// var wins = 0;


