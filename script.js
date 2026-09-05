/*
    TOTALLY NORMAL WEBSITE
    -----------------------
    The entire "gets worse" system lives here.

    Every click increases the chaos level.

    Level 0 = Normal
    Level 1 = Slightly weird
    Level 2 = Annoying
    Level 3 = Bad
    Level 4 = Chaos
    Level 5 = Completely broken
*/

let clickCount = 0;

const mainButton = document.getElementById("mainButton");
const helpButton = document.getElementById("helpButton");

const clickCounter = document.getElementById("clickCount");
const description = document.getElementById("description");
const footerMessage = document.getElementById("footerMessage");

const popupContainer = document.getElementById("popupContainer");

const body = document.body;


/* -----------------------------
   MAIN CLICK SYSTEM
----------------------------- */

mainButton.addEventListener("click", () => {

    clickCount++;

    clickCounter.textContent = clickCount;

    updateWebsite();

});


/* -----------------------------
   UPDATE WEBSITE
----------------------------- */

function updateWebsite() {

    /*
        Remove previous level classes.
    */

    body.classList.remove(
        "level-1",
        "level-2",
        "level-3",
        "level-4",
        "level-5"
    );


    /*
        LEVEL 1
        Slightly worse.
    */

    if (clickCount === 1) {

        body.classList.add("level-1");

        description.textContent =
            "Okay. That button was slightly unnecessary.";

        mainButton.textContent =
            "Click Again";

        footerMessage.textContent =
            "Everything is still fine.";

    }


    /*
        LEVEL 2
        Things start getting weird.
    */

    else if (clickCount === 2) {

        body.classList.add("level-2");

        description.textContent =
            "Why does the website feel different?";

        mainButton.textContent =
            "Probably Fine";

        footerMessage.textContent =
            "Please stop clicking.";

        createPopup(
            "⚠️ Minor inconvenience detected."
        );

    }


    /*
        LEVEL 3
        The website starts actively becoming bad.
    */

    else if (clickCount === 3) {

        body.classList.add("level-3");

        description.textContent =
            "I don't think you're supposed to keep doing that.";

        mainButton.textContent =
            "DO NOT CLICK";

        footerMessage.textContent =
            "This is becoming concerning.";

        createPopup(
            "🚨 You have made a terrible decision."
        );

    }


    /*
        LEVEL 4
        Full chaos begins.
    */

    else if (clickCount === 4) {

        body.classList.add("level-4");

        description.textContent =
            "Okay. The website is officially angry.";

        mainButton.textContent =
            "MAKE IT WORSE";

        footerMessage.textContent =
            "There is no going back.";

        createPopup(
            "💀 SYSTEM: WHY ARE YOU STILL CLICKING?"
        );

        moveButton();

    }


    /*
        LEVEL 5+
        Maximum chaos.
    */

    else {

        body.classList.add("level-5");

        description.textContent =
            "YOU WERE TOLD NOT TO CLICK IT.";

        mainButton.textContent =
            "STOP";

        footerMessage.textContent =
            "ERROR: WEBSITE HAS LOST CONTROL.";

        createPopup(
            "💀 CONGRATULATIONS. YOU BROKE IT."
        );

        moveButton();

        randomizeButton();

        randomText();

    }

}


/* -----------------------------
   POPUP SYSTEM
----------------------------- */

function createPopup(message) {

    const popup = document.createElement("div");

    popup.className = "popup";

    popup.textContent = message;

    /*
        Random position.
    */

    const maxX = window.innerWidth - 280;
    const maxY = window.innerHeight - 120;

    popup.style.left =
        Math.max(10, Math.random() * maxX) + "px";

    popup.style.top =
        Math.max(80, Math.random() * maxY) + "px";


    popupContainer.appendChild(popup);


    /*
        Automatically remove it.
    */

    setTimeout(() => {

        popup.remove();

    }, 3500);

}


/* -----------------------------
   MOVE BUTTON
----------------------------- */

function moveButton() {

    const buttonWidth = mainButton.offsetWidth;
    const buttonHeight = mainButton.offsetHeight;

    const maxX =
        Math.max(10, window.innerWidth - buttonWidth - 20);

    const maxY =
        Math.max(100, window.innerHeight - buttonHeight - 20);


    mainButton.style.position = "fixed";

    mainButton.style.left =
        Math.random() * maxX + "px";

    mainButton.style.top =
        Math.random() * maxY + "px";

    mainButton.style.zIndex = "10001";

}


/* -----------------------------
   RANDOMIZE BUTTON
----------------------------- */

function randomizeButton() {

    const rotations = [
        -15,
        -8,
        5,
        12,
        20,
        -25
    ];

    const rotation =
        rotations[Math.floor(Math.random() * rotations.length)];

    const scale =
        0.7 + Math.random() * 0.8;


    mainButton.style.transform =
        `rotate(${rotation}deg) scale(${scale})`;

}


/* -----------------------------
   RANDOM TEXT
----------------------------- */

function randomText() {

    const messages = [

        "Why are you doing this?",

        "Please reconsider your choices.",

        "This website was a mistake.",

        "I am becoming increasingly concerned.",

        "STOP.",

        "Everything is definitely not fine.",

        "You broke the website.",

        "What have you done?"

    ];


    const message =
        messages[Math.floor(Math.random() * messages.length)];


    description.textContent = message;

}


/* -----------------------------
   HELP BUTTON
----------------------------- */

helpButton.addEventListener("click", () => {

    createPopup(
        "❌ Help is currently unavailable."
    );

});


/* -----------------------------
   EXTRA RANDOM CHAOS
----------------------------- */

setInterval(() => {

    /*
        Only activate after the website
        has become sufficiently broken.
    */

    if (clickCount >= 4) {

        const cards =
            document.querySelectorAll(".card");

        if (cards.length > 0) {

            const randomCard =
                cards[Math.floor(Math.random() * cards.length)];


            randomCard.style.transform =
                `rotate(${Math.random() * 10 - 5}deg)
                 translateY(${Math.random() * 10 - 5}px)`;

        }

    }

}, 1200);
