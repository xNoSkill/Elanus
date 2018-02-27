// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
// When the user clicks on div, open the popup
function myFunctiontwo() {
    var popup = document.getElementById("popupzwei");
    popup.classList.toggle("show");
}


 
function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();}

function StopSound(soundobj) {
var thissound = document.getElementById(soundobj);
thissound.pause();
thissound.currentTime = 0;
}

function myFunctionthree() {
    var element = document.getElementById("mytext");
    element.classList.toggle("textb");
}
