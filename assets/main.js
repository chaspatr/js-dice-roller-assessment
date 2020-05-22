//Declare variables from input and results

const rollButton = document.querySelector(".roll-button");
const resetButton = document.querySelector(".reset-button");
const showRollsButton = document.querySelector(".show-rolls-button");
let numOfSides = document.querySelector(".number-of-sides-input");
let dieRolls = [];
const listOfRolls = document.querySelector(".list-of-rolls");
let totalRoll = document.querySelector(".total-value");
let numberOfRolls = document.querySelector(".number-of-rolls");
let index = 1;
let currentRoll = 0;
let sumofRolls = 0;

//event listener fo the roll button that loops a number of times that equals to the number from the 'number-of-rolls' input element

rollButton.addEventListener("click", function () {
  numberOfRolls = document.querySelector(".number-of-rolls");
  index = 1;
  while (index <= numberOfRolls.value) {
    currentRoll = Math.floor(Math.random() * numOfSides.value + 1);
    console.log("Roll " + index + " = " + currentRoll);
    //also add the value of each roll to get the total value of the rolls and display it in the 'total-value' class

    sumofRolls = sumofRolls + currentRoll;
    index++;
    //pushing each roll's value to the array 'die rolls'
    dieRolls.push(currentRoll);
  }
  console.log(dieRolls);
  console.log(sumofRolls);
  totalRoll.innerHTML = sumofRolls;
});

//event listener for the reset button to reset all relevent values back to its original state
resetButton.addEventListener("click", function () {
  index = 1;
  currentRoll = 0;
  sumofRolls = 0;
  numberOfRolls.value = "";
  totalRoll.innerHTML = 0;
  listOfRolls.innerHTML = "";
  dieRolls = [];
  numOfSides.value = "";
});

//event listener for the show rolls button to display the value of each roll from the array that is storing the data
showRollsButton.addEventListener("click", function () {
  listOfRolls.innerHTML = "";
  let counter = 0;
  while (counter < dieRolls.length) {
    //first checking if the roll was the lowest possible value and styling the li to represent the low roll

    if (dieRolls[counter] === 1) {
      listOfRolls.innerHTML =
        listOfRolls.innerHTML +
        "<li style='color:red;' >" +
        dieRolls[counter] +
        "</li>";
    } else {
      //then checking if the roll was the highest possible value and styling the li to represent the high roll
      if (dieRolls[counter] == numOfSides.value) {
        listOfRolls.innerHTML =
          listOfRolls.innerHTML +
          "<li style='color:green;' >" +
          dieRolls[counter] +
          "</li>";
      } else {
        //then if the roll was not the highest or the lowest possible value, there is no styling and li the is added
        listOfRolls.innerHTML =
          listOfRolls.innerHTML + "<li>" + dieRolls[counter] + "</li>";
      }
    }

    counter++;
  }
});
