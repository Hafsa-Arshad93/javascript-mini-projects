let display = document.getElementById("display");


// Add number or operator to screen

function addValue(value){
    display.value += value;

}

// Clear everything

function clearDisplay(){

    display.value = "";
}

// Delete last character

function deleteNumber(){
    display.value = display.value.slice(0,-1);

}

// Calculate result

function calculate(){

    try{
        display.value = eval(display.value);

    }

    catch{

        display.value = "Error";

    }

}