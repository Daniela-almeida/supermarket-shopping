alert("Go to the market");

const paymentForm = prompt(
  "Are you pay with card or money? \na. Card \nb. Money \nc. You will decide at the market"
);
const paymentChoose = paymentForm;

switch (paymentChoose) {
  case "a":
    alert("You take the card");
    break;
  case "b":
    alert("You take money");
    break;
  case "c":
    alert("You will decide at the market");
    break;
  default:
    alert("FinalizaDO");
}

alert("Taked keys of car");

const enterCar = confirm("Do you enter at the car?");

const gasoline = prompt('The car has gasoline? "Sim" / "Não" ');

if (gasoline == "Sim") {
  alert("The car started, proceed ");
} else if (gasoline == "Não") {
  alert("Full the tank with gasoline");
  confirm("Now the tank is full? ");
  alert("We can proceed ");
}

alert("We arrived at the market");
alert("Car parked");
alert("Taking the market cart");

alert("We are looking now to the shop list");

const list = [
  "rice",
  "beans",
  "meat",
  "chocolate",
  "garlic",
  "water",
  "fruits",
  "vegetables",
  "milk",
  "grains",
];

const cart = [];

while (list.length > 0) {
  const item = list.pop();
  alert(`The item ${item} is in the cart`);
  cart.push(item);
  alert(`Items in the cart: ${cart.join(", ")}`);
}

alert("Going to the checkout counter.");
alert("The final total was $225.");

const paymentEnd = prompt(
  "How did u get pay? \na. Credit card \nb. Debit \nc. Money"
);

const paymentFinalChoose = paymentEnd;

switch (paymentFinalChoose) {
  case "a":
    alert("You paid with credit card");
    alert("Thanks, comeback again");
    break;
  case "b":
    alert("You paid with Debit card");
    alert("Thanks, comeback again");
    break;
  case "c":
    alert("You paid with money");
    alert("Thanks, comeback again");
    break;
  default:
    alert("Try again");
}
