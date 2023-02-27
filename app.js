let operator = "";
let previousValue = "";
let currentValue = " ";

document.addEventListener("DOMContentLoaded", function(){
    let numbers = document.querySelectorAll(".button");
    let operators = document.querySelector(".operator");
    let display = document.querySelector("#display");

    numbers.forEach((button) => button.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        display.textContent = currentValue;
        }))
})

        function handleNumber(num){
            if(currentValue.length <= 5){
                currentValue += num;
            }};

