let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( function(button){
    button.addEventListener('click', (e =>{
        switch (e.target.innerText) {
            case "AC":
                 display.innerText = " ";
            break;
            case "←":
                if(display.innerText ){
                    display.innerText = display.innerText.slice(0,-1);
                }
            break;
           default: display.innerText += e.target.innerText;
                
        }}))});