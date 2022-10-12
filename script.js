document.addEventListener("DOMContentLoaded", () => {

    // get neccesary components to update
    let buttons = document.querySelectorAll('.button')
    let clear = document.querySelector('.clear')
    let backspace = document.querySelector('.backspace')
    let current = document.querySelector('.current')
    let ongoing = document.querySelector('.ongoing')
    let small = ""
    let array = []
    let opperands = ["x", "/", "+", "-"]

    // add event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // do something with the button
            clicked = button.firstElementChild.textContent

            // For equals and if first two parts of the equation
            // add the most recetn sum to the other two parts
            // use the calculate function to do the math
            // update HTML
            // set array and small to empty
            // make first section of array the total to continue doing maths
            if (clicked == "=" && array.length == 2) {
                array.push(small)
                total = caluclate(array)
                ongoing.innerHTML = total
                current.innerHTML = total
                array = []
                small = ""
                array.push(total)
            }
            // if equals but top not met, do nothing
            else if (clicked == "=") { }
            // if opperand chosen
            else if (opperands.includes(clicked)) {
                current.textContent = clicked
                // check to see if first part of equation is ready
                if (small.length > 0) {
                    array.push(small)
                    // set small back to empty after saved in array
                    small = ""
                }
                // add operand ready to the equation for later
                if (array.length == 1) {
                    array.push(clicked)
                }
            }
            // add number to current number, to make numbers bigger than one digit
            else {
                small += clicked
                current.textContent = small
                console.log(small)
            }
        })
    })

    // clear array and small and reset screen to empty
    clear.addEventListener("click", () => {
        array.length = 0
        small = ""
        current.textContent = " "
        ongoing.textContent = " "
    })

    // remove last digit from number held in small
    backspace.addEventListener("click", () => {
        if (small.length > 0) {
            small = small.substring(0, small.length - 1)
            current.textContent = small
        }
    })

    // calculte function
    function caluclate(array) {

        // get parts from array
        a = parseFloat(array[0])
        b = parseFloat(array[2])
        let opperand = array[1]

        // check for 0 / 0
        if (a == 0 && b == 0 && opperand == "/") {
            result = 0
        }
        // check remaining operands
        else if (opperand == "x") {
            result = a * b
        }
        else if (opperand == "/") {
            result = a / b
        }
        else if (opperand == "-") {
            result = a - b
        }
        else {
            result = a + b
        }

        // return rounded to two decimal places
        return (Math.round(result * 100) / 100)
    }
})