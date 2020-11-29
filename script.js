   
              //Кнопка proMod
let onOf = true;
let proModOnOffButton = document.getElementById('proMod');
let proModDiv = document.getElementById('addKeyRow');
proModOnOffButton.addEventListener("click", visOnOff);

function visOnOff() {
    if(onOf === true){
        proModDiv.style.visibility = 'visible';
        proModOnOffButton.style.backgroundColor = 'rgb(220, 53, 69)';
        proModOnOffButton.style.color = 'white';
        onOf = false;
    } else{
        proModDiv.style.visibility = 'hidden';
        proModOnOffButton.style.backgroundColor = 'rgb(255, 255, 110)';
        proModOnOffButton.style.color = 'black';
        onOf = true;
    }
}


                    //Калькулятор

//Функции
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function sqr(a){
    return a * a;
}

function sqrt(a){
    return Math.sqrt(a);
}

function calculate(action, a, b){
    switch(action) {
        case 'add':{
            return add(a, b)
        }    
        case 'sub':{
            return sub(a, b)
        }    
        case 'mul':{
            return mul(a, b)
        }    
        case 'div':{
            return div(a, b)
        }    
        case 'sqr':{
            return sqr(a)
        }  
        case 'sqrt':{
            return sqrt(a)
        }  
    }
}

