var audio = new Audio('assets/winterishere.mp3');

function winterNow(event){
    //play sound
    audio.play();
    //display image where the click is
}

document.addEventListener('click', winterNow);