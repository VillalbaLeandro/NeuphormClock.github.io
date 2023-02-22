const body = document.querySelector("body");
const btnSwitch = document.querySelector(".btnSwitch");
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Add event listener for toggle button
btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
});

// Update the clock hands based on current time
function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    setRotation(secondHand, secondsDegrees);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    setRotation(minsHand, minutesDegrees);

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    setRotation(hourHand, hoursDegrees);
}

// Set the CSS `transform` property for a given element to rotate it by a given angle
function setRotation(element, degrees) {
    if (degrees === 90) {
        element.style.transition = 'none';
    } else {
        element.style.transition = '';
    }
    element.style.transform = `rotate(${degrees}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update to prevent a delay on first run
updateClock();
