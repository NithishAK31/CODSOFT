let currentExpression = ""; // Stores the entire expression

// Append numbers or operators to the current expression
function appendValue(value) {
    currentExpression += value;
    updateScreen(currentExpression);
}

// Perform the calculation using the current expression
function calculate() {
    try {
        // Evaluate the expression and round to avoid floating-point issues
        const result = eval(currentExpression);
        currentExpression = result.toString(); // Update the expression with the result
        updateScreen(currentExpression);
    } catch (error) {
        updateScreen("Error"); // Handle invalid expressions
        currentExpression = ""; // Reset the expression
    }
}

// Clear the display and reset the expression
function clearScreen() {
    currentExpression = "";
    updateScreen("0");
}

// Update the calculator display
function updateScreen(value) {
    document.getElementById("screen").value = value;
}
