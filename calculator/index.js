let resultArea = document.getElementById('result-area');

function addValue(value) {
    resultArea.innerText += value;
}

function calculate() {
    const result = eval(resultArea.innerText);  //eval helps to do operations with string
    resultArea.innerText = result;
}

function clearAll() {
    resultArea.innerText = '';
}
