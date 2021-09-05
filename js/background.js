// 01.jpg ~ 06.jpg



const imgs = [
    "00.jpg",
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
]

const selectImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${selectImg}`;

document.body.appendChild(bgImage);

console.log(bgImage);

