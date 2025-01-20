const display = document.getElementById("display");

function updateCalculation(input){
  display.value += input;

}

function clearCalculation(){
  display.value = "";

}

function calculateResult(){
  try {
    display.value = eval(display.value); // Evaluate the mathematical expression
  } catch (error) {
    display.value = "Error"; // Handle invalid inputs
  }
}
