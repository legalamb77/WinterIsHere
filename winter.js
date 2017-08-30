var sound = new Howl({
  src: ['assets/winterishere.mp3']
});

function winterNow(event){
    //play sound using howler
    sound.play();
    //display image where the click is
}

document.addEventListener('click', winterNow);