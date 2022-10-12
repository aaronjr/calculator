document.addEventListener("DOMContentLoaded", () => {

    let buttons = document.querySelectorAll('.button')
    let clear = document.querySelector('.clear')
    let backspace = document.querySelector('.backspace') 
    let current = document.querySelector('.current')
    let ongoing = document.querySelector('.ongoing')    
    let small = ""
    let array = []
    let opperands = ["x", "/", "+", "-"]

    buttons.forEach(button=>{
        button.addEventListener('click', () => {
            // do something with the button
            clicked = button.firstElementChild.textContent

            if(clicked == "=" && array.length == 2){
                array.push(small)
                total = caluclate(array)
                ongoing.innerHTML = total
                array = []
                small = ""
                array.push(total)
                console.log(array)
            }
            else if(clicked == "="){}
            else if(opperands.includes(clicked)){
                current.textContent = clicked
                if(small.length > 0){
                    array.push(small)
                    small = ""
                }
                if(array.length == 1){
                    array.push(clicked)
                }
            }
            else{ 
                small += clicked
                current.textContent = small
                console.log(small)
            }
        })
    })

    // clear history and reset scren
    clear.addEventListener("click", () =>{
        array.length = 0
        small = ""
        console.log(array, small)
    })

    backspace.addEventListener("click", () =>{
        // do something on clear button
       
    })

    function caluclate(array){
        a = parseInt(array[0])
        b = parseInt(array[2])
        opperand = array[1]

        if(opperand == "x"){
            array.push(a * b)
            return a * b
        }
        else if(opperand == "/"){
            array.push(a / b)
            return a / b
        }
        else if(opperand == "-"){
            array.push(a - b)
            return a - b
        }
        else{
            array.push(a + b)
            return a + b
        }
    }



})