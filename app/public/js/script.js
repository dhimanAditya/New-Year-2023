const newYearTime = new Date("Jan 1, 2023");

function format(num) {
    let newNum = Math.floor(num);
    return (newNum < 10) ? "0"+newNum: newNum;
}

function updateCountdown() {
    let timeNow = new Date();
    let timeLeft = newYearTime - timeNow;

    days.innerText = format(timeLeft / 86400000);
    hours.innerText = format((timeLeft % 86400000) / 3600000);
    minutes.innerText = format((timeLeft % 3600000) / 60000);
    seconds.innerText = format((timeLeft % 60000) / 1000);

    setTimeout(updateCountdown, 1000);
}