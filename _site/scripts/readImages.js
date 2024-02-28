const filler = '<div class="image-button">\n<img src="IMAGEHERE" class="image-base">\n<img src="IMAGEHERE" class="image-content">\n</div>\n\n'

var textFill = ""
function readImages() {
    target = document.getElementById("fillImages")
    for (let i = 0; i < images.length; i++) {
        textFill = textFill + filler.replace(/IMAGEHERE/g, images[i]);
    }
    target.innerHTML = textFill;
}

//<div class="image-button" style="width:40%;">
//    <img src="/graphics art/sigils/Z/Finalizer 1.png" class="image-base">
//    <img src="/graphics art/sigils/Z/Finalizer 1.png" class="image-content">
//</div>