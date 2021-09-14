const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");


function setTime() {

    timeNow = new Date();

    seconds = timeNow.getSeconds();
    minutes = timeNow.getMinutes();
    hours = timeNow.getHours();

    secondDegrees = ((seconds/60 * 360) + 90);
    minuteDegrees = ((minutes/60 * 360) + 90);
    hourDegrees = ((hours/12 * 360) + 90);

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setTime, 1000);