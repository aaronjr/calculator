document.addEventListener("DOMContentLoaded", () => {

    let buttons = document.querySelectorAll('.button')
    let clear = document.querySelector('.clear')
    let backspace = document.querySelector('.backspace') 
    let current = document.querySelector('.current')
    let ongoing = document.querySelector('.ongoing')    
    let array = []

    buttons.forEach(button=>{
        button.addEventListener('click', () => {
            // do something with the button
            console.log(button.firstElementChild.textContent)
            if(button.firstElementChild.textContent != "=" ){
                current.textContent = button.firstElementChild.textContent
                array.push(button.firstElementChild.textContent)
                if(array.length == 3){
                    ongoing.innerHTML = caluclate(array)
                }
            }
            else{
                ongoing.innerHTML = caluclate(array)
            }
        })
    })

    // clear history and reset scren
    clear.addEventListener("click", () =>{
        array.length = 0
        current.textContent = " "
        ongoing.textContent = " "
    })

    backspace.addEventListener("click", () =>{
        // do something on clear button
        array.pop()
        console.log(array)
        current.textContent = array[array.length - 1]
    })

    function caluclate(array){
        a = parseInt(array[0])
        b = parseInt(array[2])
        opperand = array[1]
        console.log(array)
        array.length = 0

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