var soundNormal = new Howl({
  src: ['assets/winterishere.mp3']
});
var soundGold = new Howl({
  src: ['assets/AUGH.mp3']
});

function winterNow(event){
    //display image where the click is
    var newImage = document.createElement("img");
    var goldOrNormal = Math.random();
    if(goldOrNormal>0.1){
      newImage.setAttribute('src', 'assets/Coldwraith.png');
      //play sound using howler
      soundNormal.play();
    }
    else{
      newImage.setAttribute('src', 'assets/goldenCold.gif');
      soundGold.play();
    }
    newImage.setAttribute('class', 'overlays');
    var x=event.clientX-100;
    var y=event.clientY-100;
    newImage.style.left = x + "px";
    newImage.style.top = y + "px";
    console.log(event.clientX);
    document.body.appendChild(newImage);
}

document.addEventListener('click', winterNow);