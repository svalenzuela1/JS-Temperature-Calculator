"use strict";

window.onload = function(){
    let calcFahrenheitBtn = document.getElementById("calcFahrenheitBtn");
    calcFahrenheitBtn.onclick = calcFahrenheit;

}

function calcFahrenheit(){
    let cDegreesField = document.getElementById("cDegrees");
    let cDegrees = Number(cDegreesField.value);

    let fDegrees = (cDegrees * 9/5) + 32;

    let fahrenheitResults = document.getElementById("fahrenheitResults");
    fahrenheitResults.value = fDegrees.toFixed(2);
}

