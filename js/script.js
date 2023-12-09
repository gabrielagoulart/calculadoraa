const previousOperationText = document.querySelector("previous-operation")
const currentOperationText = document.querySelector("#current-operation")
const buttons = document.querySelectorAll("#buttons-container button")

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ""
    }

    // add digit to calculator screem
    addDigit(digit) {

        // check if current operation alredy has a dot
        if(digit === "." && this.currentOperationText.innerText.includes(".")) {
            return
        }

        this.currentOperation = digit
        this.updateScreen()
    }


    // process all calculator operation
    processOperation(operation) {

        // get current and previous value
        let operationValue
        let previous = +this.previousOperationText.innerText
        let current = +this.currentOperationText.innerText
    }


    // chance values of the calculator screen 
    updateScreen() {
        this.currentOperationText.innerText += this.currentOperation
    }
}

const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
       const value = e.target.innerText 

       if(+value >= 0 || value === ".") {
        calc.addDigit(value)
       } else {
        calc.processOperation(value)
       }
    })
})