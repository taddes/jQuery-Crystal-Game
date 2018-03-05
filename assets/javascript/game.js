$(document).ready(function() {
  var randomNum = Math.floor(Math.random() * 102 + 19);
  console.log(randomNum);

  var cry1 = Math.floor(Math.random() * 12 + 1);
  var cry2 = Math.floor(Math.random() * 12 + 1);
  var cry3 = Math.floor(Math.random() * 12 + 1);
  var cry4 = Math.floor(Math.random() * 12 + 1);

  var crystalOptions = [];

  crystalOptions.push(cry1);
  crystalOptions.push(cry2);
  crystalOptions.push(cry3);
  crystalOptions.push(cry4);

  var counter = 0;
  var wins = 0;
  var losses = 0;

  function resetGame() {
    randomNum = Math.floor(Math.random() * 102 + 19);

    cry1 = Math.floor(Math.random() * 12 + 1);
    cry2 = Math.floor(Math.random() * 12 + 1);
    cry3 = Math.floor(Math.random() * 12 + 1);
    cry4 = Math.floor(Math.random() * 12 + 1);
    counter = 0;
    crystalOptions = [cry1, cry2, cry3, cry4];
    crystalRegen();
  }

  $(".random-number").text(randomNum);

  $(".total-score").text(counter);

  $(".winSpan").text(wins);

  $(".lossSpan").text(losses);

  var crystals = $(".crystals");

  var crystalImages = [
    "./assets/images/crys1.png",
    "./assets/images/crys2.png",
    "./assets/images/crys3.png",
    "./assets/images/crys4.png"
  ];
 

  console.log(crystalOptions);
  console.log(cry1);
  console.log(cry2);
  console.log(cry3);
  console.log(cry4);

  function crystalRegen() {
    crystals.html("");
  for (var i = 0; i < crystalOptions.length; i++) {
    var crystalImage = $("<img>");

    crystalImage.addClass("crystal-image");

    crystalImage.attr("src", crystalImages[i]);

    crystalImage.attr("data-crystalvalue", crystalOptions[i]);

    crystals.append(crystalImage);
  }
}
  crystalRegen();

  crystals.on("click", ".crystal-image", function() {
    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    if (counter === randomNum) {
      wins++;
      $(".winSpan").text(wins);
      resetGame();
    } else if (counter >= randomNum) {
      losses++;
      $(".lossSpan").text(losses);
      resetGame();
    }
    $(".random-number").text(randomNum);
    $(".total-score").text(counter);
  });
});

