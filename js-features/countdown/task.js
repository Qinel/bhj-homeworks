const timer = document.getElementById("timer");

let second = 59;

function updateTimer () {
    timerElement.textContent = second;
    second--;

    if (seconds < 0) {
        clearInterval(interval);
        alert("Вы победили в конкурсе!")
    }
}
