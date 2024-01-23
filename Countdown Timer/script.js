
let targetDate;

function setTargetDate() {
    targetDate = new Date(document.getElementById('datetime').value).getTime();

    if (isNaN(targetDate)) {
        alert('Invalid date and time. Please try again.');
    } else {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
}

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');

    if (targetDate) {
        const currentDate = new Date().getTime();
        const timeDifference = targetDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeDifference < 0) {
            countdownElement.innerHTML = "Time's up!";
        }
    }
}