document.addEventListener("DOMContentLoaded", () => {

    let buttons = document.querySelectorAll('.button')
    let clear = document.querySelector('.clear')
    let backspace = document.querySelector('.backspace') 
    let current = document.querySelector('.current')
    
    let array = []

    buttons.forEach(button=>{
        button.addEventListener('click', () => {
            // do something with the button
            console.log(button.firstElementChild.textContent)
            if(button.firstElementChild.textContent != "=" ){
                current.textContent = button.firstElementChild.textContent
                array.push(button.firstElementChild.textContent)
            }
            else{
                caluclate(array)
            }
        })
    })

    clear.addEventListener("click", () =>{
        // do something on clear button
        array = []
    })

    backspace.addEventListener("click", () =>{
        // do something on clear button
    })

    function caluclate(array){
        console.log(array.join(' '))
    }



})