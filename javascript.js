// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function myFunctiontwo() {
    var popup = document.getElementById("popupzwei");
    popup.classList.toggle("show");
// When the user clicks on div, open the popup
function myFunctionthree() {
    var popup3 = document.getElementById("popupthree");
    popup3.classList.toggle("show");
}
function myFunctionfour() {
    var popup4 = document.getElementById("popupfour");
    popup4.classList.toggle("show");
}

function myFunctionfive() {
    var popup5 = document.getElementById("popupfive");
    popup5.classList.toggle("show");
}

function myFunctionsix() {
    var popup6 = document.getElementById("popupsix");
    popup6.classList.toggle("show");
}

function myFunctionseven() {
    var popup7 = document.getElementById("popupseven");
    popup7.classList.toggle("show");
}

function myFunctioneight() {
    var popup8 = document.getElementById("popupeight");
    popup8.classList.toggle("show");
}

function myFunctionnine() {
    var popup9 = document.getElementById("popupnine");
    popup9.classList.toggle("show");
}

function myFunctionten() {
    var popup10 = document.getElementById("popupten");
    popup10.classList.toggle("show");
}


 
function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
    thissound.play();}

function StopSound(soundobj) {
var thissound = document.getElementById(soundobj);
thissound.pause();
thissound.currentTime = 0;
}

function textFunction() {
    var element = document.getElementById("mytext");
    element.classList.toggle("textb");
}
