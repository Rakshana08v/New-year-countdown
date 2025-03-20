function calculateTimeRemaining(){

    const now = new Date();

    const nextYear = now.getFullYear() + 1;
    const newYearDate = new Date(nextYear,0,1);

    const timeDifference = newYearDate - now;

    const remainingSeconds = Math.floor(timeDifference/1000);
    const seconds = remainingSeconds %60;

    const remainingMinutes = Math.floor(remainingSeconds/60);
    const minutes = remainingMinutes % 60;

    const remainingHours = Math.floor(remainingMinutes / 60);
    const hours = remainingHours % 24;

    const days = Math.floor(remainingHours / 24);

    return{ days,hours,minutes,seconds};
}

function update() {
    const { days, hours, minutes, seconds } = calculateTimeRemaining();
    const currentYear = new Date().getFullYear();
    const timeRemainingString = `${days} days ${hours} hrs ${minutes} mins ${seconds} secs Remains in ${currentYear}`;


    document.getElementById('remaining').innerText = timeRemainingString;

    console.log(timeRemainingString);

}


setInterval(update, 1000);

update();