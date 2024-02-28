const filler1 = '<div class="image-button">\n    <img src="'
const filler2 = '" class="image-base" style="border-radius: 25px;">\n</div>\n\n'

var textFill = ""
function readImages() {
    target = document.getElementById("fillImages")
    for (let i = 0; i < images.length; i++) {
        textFill = textFill + (filler1 + images[i] + filler2);
        target.innerHTML = textFill;
    }
}

//<div class="image-button" style="width:40%;">
//    <img src="/graphics art/sigils/Z/Finalizer 1.png" class="image-base">
//    <img src="/graphics art/sigils/Z/Finalizer 1.png" class="image-content">
//</div>