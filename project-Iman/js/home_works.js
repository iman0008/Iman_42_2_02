let inputGmail = document.querySelector("#gmail_input");
let buttonGmail = document.querySelector("#gmail_button");
let resultGmail = document.querySelector("#gmail_result");

const regExpGmail = /@gmail.com/;
buttonGmail.onclick = () => {
  if (regExpGmail.test(inputGmail.value)) {
    resultGmail.innerHTML = "you are registration successful!";
    resultGmail.style.color = "green";
  } else {
    resultGmail.innerHTML = "you not registration";
    resultGmail.style.color = "red";
  }
};

let child = document.querySelector(".child_block");
let positionX = 0;
let positionY = 0;

const moveBlock = () => {
  if (positionX <= 450 && positionY === 0) {
    positionX++;
    child.style.left = positionX + "px";
    child.style.transform = "rotate(90deg)";
    setTimeout(moveBlock, 0);
  } else if (positionY <= 450 && positionX > 440) {
    positionY++;
    child.style.top = positionY + "px";
    setTimeout(moveBlock, 0);
    child.style.transform = "rotate(180deg)";
  } else if (positionX >= 0) {
    positionX--;
    child.style.left = positionX + "px";
    setTimeout(moveBlock, 0);
    child.style.transform = "rotate(270deg)";
  } else if (positionY >= 0) {
    positionY--;
    child.style.top = positionY + "px";
    setTimeout(moveBlock, 0);
    child.style.transform = "rotate(360deg)";
  }
};
moveBlock();

const seconds = document.querySelector("#seconds");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");
timer = 0;
switcher = true;
start.onclick = function () {
  if (switcher === true) {
    const timerId = setInterval(function () {
      if (timer <= 999) {
        timer++;
        seconds.innerHTML = timer;
      }
    }, 1000);
    stop.onclick = function () {
      clearInterval(timerId);
      switcher = true;
    };
    reset.onclick = function () {
      clearInterval(timerId);
      timer = 0;
      seconds.innerHTML = "0";
    };
  }
  switcher = false;
};


const charactersList = document.querySelector('.characters-list')
const xhr = new XMLHttpRequest()
xhr.open('GET', '../data/persons.json')
xhr.onload = () => {
  const response = JSON.parse(xhr.response)
  response.forEach(element => {
    const cardPerson = document.createElement("div");
    cardPerson.className = "character-card";
    cardPerson.innerHTML = `
        <img src="${element.person_photo}" alt="iman">
      <h4>${element.name}</h4>
      <strong>${element.age}</strong>
      <p>${element.description}</p>
    `
    charactersList.append(cardPerson)
  })
}
xhr.send()
