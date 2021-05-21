"use strict";

window.onload = function(){

    let calcCelsiusBtn = document.getElementById("calcCelsiusBtn");
    calcCelsiusBtn.onclick = calcCelsius;

}

function calcCelsius(){
    let fDegreesField = document.getElementById("fDegrees");
    let fDegrees = Number(fDegreesField.value);

    let cDegrees = Math.ceil((fDegrees - 32) * 5/9)

    let celsiusResults = document.getElementById("celsiusResults")
    celsiusResults.value = cDegrees.toFixed(1)
}