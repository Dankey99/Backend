'use strict'

const inputOne = document.getElementById(`input_1`);
const inputTwo = document.getElementById(`input_2`);

const inputAdd      = document.getElementById(`button_add`);
const inputSubtract = document.getElementById(`button_subtract`);
const inputMultiply = document.getElementById(`button_multiply`);
const inputDivide   = document.getElementById(`button_divide`);


inputAdd.onclick = () => {
    console.log(inputOne + inputTwo)
};
inputSubtract.onclick = () => {
    console.log(inputOne - inputTwo)
};
inputMultiply.onclick = () => {
    console.log(inputOne * inputTwo)
};
inputDivide.onclick = () => {
    console.log(inputOne / inputTwo)
};

