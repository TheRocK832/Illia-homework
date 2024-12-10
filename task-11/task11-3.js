document.getElementById("image");
document.getElementById("picturesbtn");


picturesbtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * 9) + 1;
    image.src = `./image/${randomIndex}.png`;
})
