/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("conversion-input")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-conversion")
const volumeEl = document.getElementById("volume-conversion")
const massEl = document.getElementById("mass-conversion")

convertBtn.addEventListener("click", () => {
    const input = Number(inputEl.innerText)    

    if(!isNaN(input)) {
        displayLengthCalcualtion(input)
        displayVolumeCalculation(input)
        displayMassCalculation(input)
    }    
})


function displayLengthCalcualtion(input) {
    const meterValue = (input * 3.281).toFixed(3)
    const feetValue = (input / 3.281).toFixed(3)
    
    lengthEl.innerText = `${input} meter = ${feetValue} feet | ${input} feet = ${meterValue} meters`
}

function displayVolumeCalculation(input) {
    const literValue = (input / 0.264).toFixed(3)
    const gallonValue = (input * 0.264).toFixed(3)
    
    volumeEl.innerText = `${input} liters = ${gallonValue} gallons | ${input} gallons = ${literValue} liters`
}

function displayMassCalculation(input) {
    const kiloValue = (input / 2.204).toFixed(3)
    const poundValue = (input * 2.204).toFixed(3)
    
    massEl.innerText = `${input} kilos = ${poundValue} pounds | ${input} pounds = ${kiloValue} kilos`
}


