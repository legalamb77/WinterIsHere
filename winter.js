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
    var x=event.clientX-100;
    var y=event.clientY-100;
    newImage.style.left = x + "px";
    newImage.style.top = y + "px";
    console.log(event.clientX);
    document.body.appendChild(newImage);
}

document.addEventListener('click', winterNow);