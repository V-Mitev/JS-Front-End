function subtract() {
    const numberOne = Number(document.getElementById('firstNumber').value);
    const numberTwo = Number(document.getElementById('secondNumber').value);

    let result = document.getElementById('result');

    result.innerHTML = numberOne - numberTwo;
}