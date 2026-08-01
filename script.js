document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.calculate');
    const resultDisplay = document.querySelector('.result');
    let currentInput = '';
    let currentOperator = null;
    let firstOperand = null;
    let secondOperand = null;


    document.querySelectorAll('.numbers').forEach(button => {
        button.addEventListener('click', (e) => {
            currentInput += e.target.innerText;
            display.value = currentInput;
        });
    });


    document.querySelectorAll('.pinkButton').forEach(button => {
        button.addEventListener('click', (e) => {
            const operator = e.target.innerText;
            if (operator === "=") {
                secondOperand = parseFloat(currentInput);
                calculateResult();
                display.value = ''; // Clear the top input
                currentInput = '';
            } else {
                if (currentInput !== '') {
                    firstOperand = parseFloat(currentInput);
                    currentInput = ''; // Reset for the next input
                    currentOperator = operator;
                }
            }
        });
    });


    document.querySelector('.grayButton').addEventListener('click', () => {
        currentInput = '';
        display.value = '';
        resultDisplay.value = '';
        firstOperand = null;
        secondOperand = null;
        currentOperator = null;
    });

    
    document.querySelector('#numbersEraser').addEventListener('click', () => {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
    });

    // Event listener for +/- button 
    document.querySelector('.grayButton:nth-of-type(2)').addEventListener('click', () => {
        if (currentInput !== '') {
            currentInput = (parseFloat(currentInput) * -1).toString();
            display.value = currentInput;
        }
    });

    // Event listener for % button 
    document.querySelector('.grayButton:nth-of-type(3)').addEventListener('click', () => {
        if (currentInput !== '') {
            currentInput = (parseFloat(currentInput) / 100).toString();
            display.value = currentInput;
        }
    });


    function calculateResult() {
        let result;
        switch (currentOperator) {
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '×':
                result = firstOperand * secondOperand;
                break;
            case '÷':
                result = firstOperand / secondOperand;
                break;
            default:
                result = secondOperand;
        }
        resultDisplay.value = result;
        firstOperand = result; // To allow for chain calculations
        currentOperator = null;
    }
});
