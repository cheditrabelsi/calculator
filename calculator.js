const allowedKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '*', '/'];
document.addEventListener("keydown",(event)=>{
    if(allowedKeys.includes(event.key)){
         appendtodisplay(event.key)
    }
    if(event.key=='Enter'){
        calculate()
    }else{
    if(event.key=='Delete'){
        clearButton()
    }else{
        if(event.key=="Backspace"){
            back=document.getElementById("display").value
            document.getElementById("display").value=back.substring(0,back.length-1)
        }
    }
}
    
   
    
})

function appendtodisplay(value) {
    document.getElementById("display").value+= value;
}


function clearButton() {
    document.getElementById("display").value=""
}

function calculate() {
    try {
        const expression = document.getElementById("display").value;
        console.log(expression)
        const result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}