let a = null;
let b = null;
let action = null;
let lastAction = null;



const calculateButton = document.getElementById('calculate');
const addButton = document.getElementById('add');
const multiplayButton = document.getElementById('multiplay');
const subButton = document.getElementById('sub');
const divisionButton = document.getElementById('division');
const ceButton = document.getElementById('ce');
const cButton = document.getElementById('c');

const sqrButton = document.getElementById('sqr');
const sqrtButton = document.getElementById('sqrt');
const invertButton = document.getElementById('invert');
const piNumberButton = document.getElementById('pi');
const eNumberButton = document.getElementById('e');
const resultScr = document.getElementById('result');

const num1Button = document.getElementById('num1');
const num2Button = document.getElementById('num2');
const num3Button = document.getElementById('num3');
const num4Button = document.getElementById('num4');
const num5Button = document.getElementById('num5');
const num6Button = document.getElementById('num6');
const num7Button = document.getElementById('num7');
const num8Button = document.getElementById('num8');
const num9Button = document.getElementById('num9');
const num0Button = document.getElementById('num0');
const dotButton = document.getElementById('dot');

function digitKey(digit) {
    if (resultScr.value === '0') {
        resultScr.value = digit;
    } else {
        resultScr.value = resultScr.value + digit;
    }
} 



num1Button.addEventListener('click', () =>{
    digitKey(1);
})
num2Button.addEventListener('click', () =>{
    digitKey(2);
})
num3Button.addEventListener('click', () =>{
    digitKey(3);
})
num4Button.addEventListener('click', () =>{
    digitKey(4);
})
num5Button.addEventListener('click', () =>{
    digitKey(5);
})
num6Button.addEventListener('click', () =>{
    digitKey(6);
})
num7Button.addEventListener('click', () =>{
    digitKey(7);
})
num8Button.addEventListener('click', () =>{
    digitKey(8);
})
num9Button.addEventListener('click', () =>{
    digitKey(9);
})
num0Button.addEventListener('click', () =>{
    digitKey(0);
})
dotButton.addEventListener('click', () => {
    if(resultScr.value.indexOf('.') === -1){
        if (resultScr.value === 0){
            resultScr.value = resultScr.value + '0';
        }
        resultScr.value = resultScr.value + '.';
    }
})



addButton.addEventListener('click', () => {
    a = parseFloat(resultScr.value);
    resultScr.value = 0;
    action = 'add';
})

subButton.addEventListener('click', (minus) => {
    a = parseFloat(resultScr.value);
    resultScr.value = 0;
    action = 'sub';
})

divisionButton.addEventListener('click', () => {
    a = parseFloat(resultScr.value);
    resultScr.value = 0;
    action = 'div';
    
})

multiplayButton.addEventListener('click', () => {
    a = parseFloat(resultScr.value);
    resultScr.value = 0;
    action = 'mul';
})

sqrButton.addEventListener('click', () => {
    a = parseFloat(resultScr.value);
    action = 'sqr';
    resultScr.value = calculate(action, a);
    a = parseFloat(resultScr.value);
    action = null;
});

sqrtButton.addEventListener('click', () => {
    a = parseFloat(resultScr.value);
    action = 'sqrt';
    resultScr.value = calculate(action, a);
    a = parseFloat(resultScr.value);
    action = null;
});

invertButton.addEventListener('click', () => {
    resultScr.value = resultScr.value * -1;
});

piNumberButton.addEventListener('click', () => {
    digitKey(3.1415926535897);
})

eNumberButton.addEventListener('click', () => {
    digitKey(2.7182818284590);
})


// RESULT!!!!
calculateButton.addEventListener('click', () => {
    console.log(a);
    if (a){
        b = parseFloat(resultScr.value);
        resultScr.value = calculate(action, a, b);
        a = parseFloat(resultScr.value);
        // action = null;
    }
    if(resultScr.value == 'undefined'){
        resultScr.value = '0';
    }
})



cButton.addEventListener('click', () => {
    resultScr.value = 0;
} )

ceButton.addEventListener('click', () => {
    resultScr.value = resultScr.value.slice(0, -1);
    if(resultScr.value == ''){
        resultScr.value = '0';
    }
    
})



if(isFinite(+resultScr.value)  || resultScr.value == 'NaN'){
    resultScr.value = '0';
}








