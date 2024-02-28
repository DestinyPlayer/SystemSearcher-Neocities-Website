const filler = '<div class="image-button">\n<img src="IMAGEHERE" class="image-base">\n<img src="IMAGEHERE" class="image-content">\n</div>\n\n'

var textFill = ""
function readImages(pixelToggle) {
    target = document.getElementById("fillImages")
    //for (let i = 0; i < images.length; i++) {
    //    textFill = textFill + filler.replace(/IMAGEHERE/g, images[i]);
    //}
    //target.innerHTML = textFill;
    for (let i = 0; i < images.length; i++) {
        var buttonDiv = document.createElement('div');
        buttonDiv.classList.add('image-button');

        var baseImg = document.createElement('img');
        baseImg.classList.add('image-base');
        if (pixelToggle) {
            baseImg.style = "image-rendering: pixelated;"
        }
        baseImg.src = images[i];
        buttonDiv.appendChild(baseImg);

        var contentImg = document.createElement('img');
        contentImg.classList.add('image-content');
        contentImg.src = images[i];
        if (pixelToggle) {
            baseImg.style = "height: 70%;"
        }
        buttonDiv.appendChild(contentImg);

        target.appendChild(buttonDiv);
    }
    
}

//<div class="image-button" style="width:40%;">
//    <img src="/graphics art/sigils/Z/Finalizer 1.png" class="image-base">
//    <img src="/graphics art/sigils/Z/Finalizer 1.png" class="image-content">
//</div>