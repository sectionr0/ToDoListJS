const backgroundImage = document.querySelector("body");

function paintImage(num) {
    const img = new Image();
    img.src = `images/${num + 1}.jpg`;
    img.classList.add("bgImage");
    backgroundImage.prepend(img);
}

function getRandom() {
    const num = Math.floor(Math.random() * 4);
    return num;
}

function init() {
    const randomnum = getRandom();
    paintImage(randomnum);
}

init();
