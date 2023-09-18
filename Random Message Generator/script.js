// Random msg generator
const myObject = {
  jackpot: ["You won the jackpot! 🏆"],
  drink: ["You should drink: 'water'🍸"],
  food: ["You should eat: 'pizza'🍕"],
};

function getRandomMessage() {
  const keys = Object.keys(myObject); 
  const randomIndex = Math.floor(Math.random() * keys.length); // 0, 1, 2
  const randomKey = keys[randomIndex]; 
  let message = ""; // will concatenate

  switch (randomKey) {
    case "jackpot":
      message += "Jackpot:\n";
      message += myObject[randomKey][0];
      break;
    case "drink":
      message += "Drink:\n";
      message += myObject[randomKey][0];
      break;
    case "food":
      message += "Food:\n";
      message += myObject[randomKey][0];
      break;
    default:
      message += "Unknown key: " + randomKey;
  }
  return message;
}

// console.log(getRandomMessage());

// this function is triggered from html
function displayRandomMessage() {
  const messageElement = document.getElementById("message"); // grab element
  messageElement.innerText = getRandomMessage();             // call function
}



// onclick event to show a picture
function showPicture() {
  const specificImageProbability = 0.2;
  const specificImageURL = "gigachad.jpg";
  const randomNumber = Math.random();
  const imageElement = document.createElement("img");
  if (randomNumber < specificImageProbability) {
    imageElement.src = specificImageURL;
    imageElement.height = "200";
  } else {
    imageElement.src = "https://picsum.photos/200?random=" + Math.random();
  }
  // Grab element to add the image
  const containerElement = document.getElementById("image-container");
  containerElement.innerHTML = ""; // Remove any existing image element
  containerElement.appendChild(imageElement);
}


