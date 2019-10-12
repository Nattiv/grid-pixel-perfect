'use strict'
var gIdx = 101;
var gImgs = getImgs()

function getImgs() {
    gImgs = getFromStorage()
    if (!gImgs) {
        gImgs = createImgs()
        storeImgs(gImgs)
    }
    return gImgs;
}

function createImgs() {
    return [
        createImg('https://i.imgur.com/uytCLzg.jpg', 'Mountain'),
        createImg('https://i.imgur.com/JUwxoua.jpg', 'Wheat'),
        createImg('https://i.imgur.com/shFLQcz.jpg', 'Sunset'),
    ]
}

function createImg(imgUrl, imgTxt) {
    return {
        id: gIdx++,
        url: imgUrl,
        txt: imgTxt
    }
}

function storeImgs() {
    localStorage.setItem('imgs', JSON.stringify(gImgs));
}

function addImg(imgUrl, imgTxt) {
    var ImgAdded = createImg(imgUrl, imgTxt)
    gImgs.unshift(ImgAdded)
    console.log(gImgs)
}

function getFromStorage() {
    var imgs = localStorage.getItem('imgs');
    imgs = JSON.parse(imgs)
    return imgs;
}