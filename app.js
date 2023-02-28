let operator = "";
let previousValue = "";
let currentValue = " ";

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector("#clear");
    let equal = document.querySelector("#equal");
    let decimal = document.querySelector("#decimal");
    let numbers = document.querySelectorAll(".button");
    let operators = document.querySelectorAll(".operator");
    let currentDisplay = document.querySelector("#current");
    let previousDisplay = document.querySelector("#previous");


    numbers.forEach((button) => button.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentDisplay.textContent = currentValue;
        }));
    
    operators.forEach((op => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent);
        previousDisplay.textContent = previousValue + " " + operator + " " + currentValue;
        currentDisplay.textContent = currentValue;
       
    })))

    clear.addEventListener("click", function(){
        currentValue = "";   
        operator = "";
        previousDisplay.textContent = currentValue;
        currentDisplay.textContent = currentValue;
        console.log("")
    })

    equal.addEventListener("click", function(){
        if(currentValue != " " && previousValue != ""){
            calculate();
        previousDisplay.textContent = " ";
        if(previousValue.length <= 10){
            currentDisplay.textContent = previousValue;
        }} 
    })

    decimal.addEventListener("click", function(){
        addDecimal();
    })

})

function handleNumber(num){
    if(currentValue.length <= 10){
        currentValue += num;
    }};

function handleOperator(op){
    operator = op;
    previousValue = currentValue;
    currentValue ="";
    }

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    }else if(operator === "-"){
        previousValue -= currentValue;

    }else if(operator === "*"){
        previousValue *= currentValue;

    }else if(operator === "/"){
        previousValue /= currentValue;
    }

    console.log(previousValue)
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();

}

function roundNumber(num){
    return Math.round(num*1000)/1000;
}


function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += ".";
    }}
        
     

