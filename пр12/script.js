function startTimer() {
    let count = 0;
    let interval = setInterval(() => {
        count++;
        document.getElementById("timer").textContent = `Прошло: ${count} сек.`;
        if (count === 60) clearInterval(interval);
    }, 1000);
}

function startClock() {
    setInterval(() => {
        let now = new Date();
        document.getElementById("clock").textContent = now.toLocaleTimeString();
    }, 1000);
}

function countdown() {
    let timeLeft = 10;
    let interval = setInterval(() => {
        document.getElementById("countdown").textContent = timeLeft;
        timeLeft--;
        if (timeLeft < 0) clearInterval(interval);
    }, 1000);
}

let images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.png", "image5.png", "image6.png"];
let currentIndex = 0;
function startSlider() {
    setInterval(() => {
        document.getElementById("slider").src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }, 2000);
}

function openFruitImage(fruit) {
    let fruitImages = {
        apple: "apple.png",
        banana: "banana.png",
        cherry: "cherry.png"
    };
    if (fruitImages[fruit]) {
        window.open(fruitImages[fruit], "_blank", "width=400,height=400");
    }
}

function countdownToMidnight() {
    function updateTime() {
        let now = new Date();
        let midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        let diff = midnight - now;
        let hours = Math.floor(diff / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }
    setInterval(updateTime, 1000);
    updateTime();
}