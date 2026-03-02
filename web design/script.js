let images = ["images1.jpg", "images2.jpg", "images3.jpg"];
let i = 0;

function slideShow() {
    document.getElementById("slide").src = images[i];
    i++;
    if (i == images.length) {
        i = 0;
    }
    setTimeout(slideShow, 3000);
}

slideShow();