document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("message").innerText = "Najlepsza decyzja! ❤️";
});

document.getElementById("no").addEventListener("mouseover", function() {
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});

// Dodawanie animowanych serduszek
setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 500);
