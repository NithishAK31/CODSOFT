let currentExpression = ""; 


function appendValue(value) {
    currentExpression += value;
    updateScreen(currentExpression);
}


function calculate() {
    try {
        
        const result = eval(currentExpression);
        currentExpression = result.toString(); 
        updateScreen(currentExpression);
    } catch (error) {
        updateScreen("Error"); 
        currentExpression = ""; 
    }
}


function clearScreen() {
    currentExpression = "";
    updateScreen("0");
}


function updateScreen(value) {
    document.getElementById("screen").value = value;
}
