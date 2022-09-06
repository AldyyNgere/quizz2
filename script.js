// DATABASE
const dbUserName = [];
const dbAlertWelcome = [
  "https://c.tenor.com/oC8CSq25wx4AAAAM/baby-yoda-welcome.gif",
  "https://c.tenor.com/sO7pXz7Bw2MAAAAM/hello-welcome.gif",
  "https://c.tenor.com/wZW05QUURk4AAAAM/welcome-anime.gif",
];
const dbAlertTrue = [
  "https://c.tenor.com/TrlCOvj8uMcAAAAM/nice-bakuretsu.gif",
  "https://c.tenor.com/Mv0jQPEFRpsAAAAM/anime-boy.gif",
  "https://c.tenor.com/GbhGoVjFBHMAAAAM/kanna-kamui-kanna.gif",
  "https://c.tenor.com/YPueK_evpngAAAAM/cardcaptor-sakura-clear-card-sakura-kinomoto.gif",
  "https://c.tenor.com/jXMFX8GNgXwAAAAM/good-anime.gif",
  "https://c.tenor.com/_LumrGir11AAAAAM/thumbs-up-good.gif",
  "https://c.tenor.com/FSK1EksixakAAAAM/thumbs-up-anime.gif",
];
const dbAlertFalse = [
  "https://c.tenor.com/7qbxtJp6bUwAAAAM/ouran-high-school-host-club-anime.gif",
  "https://c.tenor.com/Z3byF8bLPGYAAAAM/juza-hokuto-no-ken.gif",
  "https://c.tenor.com/_x13WijI2eIAAAAM/johnny-test-dukey.gif",
  "https://c.tenor.com/Esjz4JYVTk4AAAAM/wrong-answer-thats-wrong.gif",
  "https://c.tenor.com/lUqi7yZG648AAAAM/wrong-answer-radiant-soul.gif",
  "https://c.tenor.com/HKUjt2Emd8EAAAAM/batman-answer.gif",
  "https://c.tenor.com/yiMbJjztV1QAAAAM/wrong-flashcard.gif",
];
const dbTextTrue = ["Good work", "Nice", "Excellent", "Aweosome", "Cool"];
const dbTextFalse = ["Dont GiveUp", "Try again", "Dont be sad"];

// VARIABLES
let score = 0;
let correctAudio = document.getElementById("correct-audio");
let wrongAudio = document.getElementById("wrong-audio");
let userDisplay = document.querySelector(".username");
let scoreDisplay = document.querySelector(".score-data");
let endImg = document.querySelector(".end-img");

// CONTAINERS VARIABLE
const startCont = document.querySelector(".start-container");
const quest1 = document.querySelector(".question1");
const quest2 = document.querySelector(".question2");
const quest3 = document.querySelector(".question3");
const quest4 = document.querySelector(".question4");
const quest5 = document.querySelector(".question5");
const quest6 = document.querySelector(".question6");
const quest7 = document.querySelector(".question7");
const quest8 = document.querySelector(".question8");
const quest9 = document.querySelector(".question9");
const quest10 = document.querySelector(".question10");
const endCont = document.querySelector(".end-container");

// GET RANDOM DATA
const getRandomAlertWelcome = () => {
  return Math.floor(Math.random() * dbAlertWelcome.length);
};

const getRandomAlertTrue = () => {
  return Math.floor(Math.random() * dbAlertTrue.length);
};

const getRandomAlertFalse = () => {
  return Math.floor(Math.random() * dbAlertFalse.length);
};

const getRandomTextTrue = () => {
  return Math.floor(Math.random() * dbTextTrue.length);
};

const getRandomTextFalse = () => {
  return Math.floor(Math.random() * dbTextFalse.length);
};

// ALERT DATA
function welcomeAlert(username) {
  const randomAlert = getRandomAlertWelcome();

  Swal.fire({
    title: `Welcome ${username}`,
    imageUrl: dbAlertWelcome[randomAlert],
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    confirmButtonColor: "#dc3545",

    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}

function trueAlert() {
  const randomAlertTrue = getRandomAlertTrue();
  const randomTextTrue = getRandomTextTrue();

  Swal.fire({
    title: `${dbTextTrue[randomTextTrue]} ${dbUserName}`,
    imageUrl: dbAlertTrue[randomAlertTrue],
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    confirmButtonColor: "#dc3545",
    footer: `Your score : ${score}`,

    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}

function falseAlert() {
  const randomAlertFalse = getRandomAlertFalse();
  const randomTextFalse = getRandomTextFalse();

  Swal.fire({
    title: `${dbTextFalse[randomTextFalse]} ${dbUserName}`,
    imageUrl: dbAlertFalse[randomAlertFalse],
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    confirmButtonColor: "#dc3545",
    footer: `Your score : ${score}`,

    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}

// ERROR CLASSES
class ErrorLength extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

// CHECK ERROR
class UsernameValidation {
  validation(username) {
    if (username.length == 0) {
      throw new ErrorLength(
        "Please input your name first",
        "username undefined"
      );
    }
  }
}

// GET USERNAME
document.getElementById("btn-start").onclick = () => {
  let username = document.getElementById("username").value;
  let usernameDt = new UsernameValidation();
  usernameDt.validation(username);

  try {
    dbUserName.push(username);
    welcomeAlert(username);
    const startCont = document.querySelector(".start-container");
    startCont.style.display = "none";
    const quest1Cont = document.querySelector(".question1");
    quest1Cont.style.display = "block";
  } catch (error) {
    {
      alert("error");

      console.error(
        `Something is wrong, ${error.message}. error field : ${error.field}`
      );
    }
  } finally {
    document.forms["start-form"].reset();
  }
};

// QUESTION FUNCTION
document.getElementById("btn-answ-1").addEventListener("click", (e) => {
  e.preventDefault();
  let answ1 = document.querySelector("input[type=radio][name=answ1]:checked");
  if (answ1.value == "28") {
    score += 5;
    correctAudio.play();
    trueAlert();
  } else {
    score -= 5;
    wrongAudio.play();
    falseAlert();
  }
  quest1.style.display = "none";
  quest2.style.display = "block";
});

document.getElementById("btn-answ-2").addEventListener("click", (e) => {
  e.preventDefault();
  let answ2 = document.querySelector("input[type=radio][name=answ2]:checked");
  if (answ2.value == "soekarno") {
    score += 5;
    correctAudio.play();
    trueAlert();
  } else {
    score -= 5;
    wrongAudio.play();
    falseAlert();
  }
  quest2.style.display = "none";
  quest3.style.display = "block";
});

document.getElementById("btn-answ-3").addEventListener("click", (e) => {
  e.preventDefault();
  let answ3 = document.querySelector("input[type=radio][name=answ3]:checked");
  if (answ3.value == "garuda") {
    score += 5;
    correctAudio.play();
    trueAlert();
  } else {
    score -= 5;
    wrongAudio.play();
    falseAlert();
  }
  quest3.style.display = "none";
  quest4.style.display = "block";
});

document.getElementById("btn-answ-4").addEventListener("click", (e) => {
  e.preventDefault();
  let answ4 = document.querySelector("input[type=radio][name=answ4]:checked");
  if (answ4.value == "34") {
    score += 5;
    correctAudio.play();
    trueAlert();
  } else {
    score -= 5;
    wrongAudio.play();
    falseAlert();
  }
  quest4.style.display = "none";
  quest5.style.display = "block";
});

document.getElementById("btn-answ-5").addEventListener("click", (e) => {
  e.preventDefault();
  let answ5 = document.querySelector("input[type=radio][name=answ5]:checked");
  if (answ5.value == "yen") {
    score += 5;
    correctAudio.play();
    trueAlert();
  } else {
    score -= 5;
    wrongAudio.play();
    falseAlert();
  }
  quest5.style.display = "none";
  quest6.style.display = "block";
});

document.getElementById("btn-answ-6").addEventListener("click", (e) => {
  e.preventDefault();
  let answ6 = document.querySelector("input[type=radio][name=answ6]:checked");
  if (answ6.value == "australia") {
    score += 5;
    correctAudio.play();
    trueAlert();
  } else {
    score -= 5;
    wrongAudio.play();
    falseAlert();
  }
  quest6.style.display = "none";
  quest7.style.display = "block";
});

document.getElementById("btn-answ-7").addEventListener("click", (e) => {
  e.preventDefault();
  let answ7 = document.querySelector("input[type=radio][name=answ7]:checked");
  if (answ7.value == "pasific") {
    score += 5;
    correctAudio.play();
    trueAlert();
  } else {
    score -= 5;
    wrongAudio.play();
    falseAlert();
  }
  quest7.style.display = "none";
  quest8.style.display = "block";
});

document.getElementById("btn-answ-8").addEventListener("click", (e) => {
  e.preventDefault();
  let answ8 = document.querySelector("input[type=radio][name=answ8]:checked");
  if (answ8.value == "imam") {
    score += 5;
    correctAudio.play();
    trueAlert();
  } else {
    score -= 5;
    wrongAudio.play();
    falseAlert();
  }
  quest8.style.display = "none";
  quest9.style.display = "block";
});

document.getElementById("btn-answ-9").addEventListener("click", (e) => {
  e.preventDefault();
  let answ9 = document.querySelector("input[type=radio][name=answ9]:checked");
  if (answ9.value == "papua") {
    score += 5;
    correctAudio.play();
    trueAlert();
  } else {
    score -= 5;
    wrongAudio.play();
    falseAlert();
  }
  quest9.style.display = "none";
  quest10.style.display = "block";
});

document.getElementById("btn-answ-10").addEventListener("click", (e) => {
  e.preventDefault();
  let answ10 = document.querySelector("input[type=radio][name=answ10]:checked");
  if (answ10.value == "yogyakarta") {
    score += 5;
    correctAudio.play();
    trueAlert();
  } else {
    score -= 5;
    wrongAudio.play();
    falseAlert();
  }

  quest10.style.display = "none";
  endCont.style.display = "block";
  endContainer();
});

const endContainer = () => {
  const randomImg = getRandomAlertTrue();

  userDisplay.textContent = dbUserName;
  if (score < 0) {
    scoreDisplay.style.color = "#dc3545";
  }
  scoreDisplay.textContent = score;
  endImg.src = dbAlertTrue[randomImg];
};
endContainer();

document.getElementById("start-again").addEventListener("click", () => {
  endCont.style.display = "none";
  startCont.style.display = "block";
  score = 0;
  dbUserName.pop();
});
