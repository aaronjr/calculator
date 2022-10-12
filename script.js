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
                current.innerHTML = total
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
        current.textContent = " "
        ongoing.textContent = " "
    })

    backspace.addEventListener("click", () =>{
        // do something on clear button
       if(small.length > 0){
        small = small.substring(0, small.length - 1)
        current.textContent = small
       }
    })

    function caluclate(array){
        
        a = parseFloat(array[0])
        b = parseFloat(array[2])
        opperand = array[1]

        if(a == 0 && b == 0 && opperand == "/"){
            result = 0
        }
        else if(opperand == "x"){
            result = a * b
        }
        else if(opperand == "/"){
            result = a / b
        }
        else if(opperand == "-"){
            result = a - b
        }
        else{
            result = a + b
        }
        
        array.push(Math.round(result * 100) / 100)
        return (Math.round(result * 100) / 100)
    }

})