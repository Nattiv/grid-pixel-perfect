'use strict'

function renderImgs() {
    var elImages = document.querySelector('.images');
    var strHtmls = ''
    for (var i = 0; i < gImgs.length; i++) {
        var img = gImgs[i];
        console.log(img)
        if (i < 2) strHtmls += `<h2 style="background-image:url(${img.url})" class="img placeholder">${img.txt}</h2>`;
        else strHtmls += `<h2 style="background-image:url(${img.url})" class="img placeholder item-span-2">${img.txt}</h2>`
    }
    elImages.innerHTML = strHtmls;
    console.log(gImgs)
}

function onAddPhoto() {
    var imgUrl = document.querySelector('.img-url').value;
    var imgTxt = document.querySelector('.img-txt').value;
    if (imgTxt === "" || imgUrl === "") return;
    addImg(imgUrl, imgTxt)
    storeImgs()
    renderImgs()
}

function toggleMenu() {
    var mainMenu = document.getElementById('mainMenu');
    console.log(mainMenu);
    mainMenu.classList.toggle('open');
}