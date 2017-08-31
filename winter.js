var sound = new Howl({
  src: ['assets/winterishere.mp3']
});

function winterNow(event){
    //play sound using howler
    sound.play();
    //display image where the click is
    var newImage = document.createElement("img");
    newImage.setAttribute('src', 'assets/Coldwraith.png');
    newImage.setAttribute('class', 'overlays');
    newImage.style.left = event.clientX + "px";
    newImage.style.top = event.clientY + "px";
    console.log(event.clientX);
    document.body.appendChild(newImage);
}

document.addEventListener('click', winterNow);