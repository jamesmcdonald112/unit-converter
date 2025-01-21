const convertBtn = document.getElementById("convert-btn");
const inputBox = document.getElementById("input-box");
const resultLengthText = document.getElementById("result-length-text");
const resultVolumeText = document.getElementById("result-volume-text");
const resultMassText = document.getElementById("result-mass-text");


let unitQuanity = 0;

convertBtn.addEventListener("click", function(){
    unitQuanity = Number(inputBox.value);
    setAllResults(unitQuanity)
   

})

function setAllResults(unitQuantity) {
    setResult(resultLengthText, unitQuantity, "meter", calculateFeet(unitQuantity), calculateMeter(unitQuantity));
    setResult(resultVolumeText, unitQuantity, "liter", calculateGallons(unitQuantity), calculateLiters(unitQuantity));
    setResult(resultMassText, unitQuantity, "kilogram", calculatePounds(unitQuantity), calculateKilograms(unitQuantity));
}

function setResult(resultEl, unitQuantity, unitType, result1, result2) {
    const unitMap = {
        meter: "feet",
        liter: "gallons",
        kilogram: "pounds",
    };
    resultEl.textContent = `${unitQuantity} ${unitType}(s) = ${result1} ${unitMap[unitType]} | ${result1} ${unitMap[unitType]} = ${result2} ${unitType}(s)`;
}

function calculateFeet(meters) {
    return Number((meters * 3.281).toFixed(3));
}

function calculateMeter(feet) {
    return Number((feet / 3.281).toFixed(3));
}

function calculateLiters(gallons) {
    return Number((gallons / 0.264).toFixed(3)); 
}

function calculateGallons(liters) {
    return Number((liters * 0.264).toFixed(3)); 
}

function calculateKilograms(pounds) {
    return Number((pounds / 2.20462).toFixed(3)); 
}

function calculatePounds(kilo) {
    return Number((kilo * 2.20462).toFixed(3)); 
}
