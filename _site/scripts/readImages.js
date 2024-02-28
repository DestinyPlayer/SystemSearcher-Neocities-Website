const filler1 = '<div class="image-button" style="width:10%;">\n    <img src="'
const filler2 = ' class="image-base" style="border-radius: 25px;">\n</div>'
function readImages(path) {
    target = document.getElementById("fillImages")
    for (let i = 0; i < images.length; i++) {
        let text = filler1 + images[i] + filler2;
        target.innerHTML = text;
    }
}