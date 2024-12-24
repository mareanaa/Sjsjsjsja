let points = 0.0;

const clickableImage = document.getElementById("clickable-image");
const pointsDisplay = document.getElementById("points");
const heartsContainer = document.getElementById("hearts-container");

clickableImage.addEventListener("click", (e) => {
    // زيادة النقاط
    points += 0.1;
    pointsDisplay.textContent = points.toFixed(1);

    // إضافة تأثير القلوب
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${e.clientX - 10}px`;
    heart.style.top = `${e.clientY - 10}px`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
});
