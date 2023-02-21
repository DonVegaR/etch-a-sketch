
// Event listener 
function getHoverEvent() {
    const squares = document.querySelectorAll('.square')

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'
        })
        square.addEventListener('mouseout', () =>{
            square.style.backgroundColor = 'aquamarine'
        })
    })  
}

//create Squares, divs
function createSquares(size) {
    const container = document.querySelector('#container')
    for (let i = 0; i < size; i++){
        const row = document.createElement('div')
        row.classList.add('row')

        for (let j = 0; j < size; j++){
            const square = document.createElement('div')
            square.classList.add('square')
            row.appendChild(square)
        }

    container.appendChild(row)
    
    }

    //change the width and heigth of the squares to fit the container, css properties
    const dimension = ((500 / size) - 2).toFixed(2)

    const squares = document.querySelectorAll('.square')

    squares.forEach(square => {
        square.style.height = dimension + 'px'
        square.style.width = dimension + 'px'
        square.style.border = '1px solid black'
    })

    getHoverEvent()
}


// function to run when boton cicked
function getNewSquares() {
    let size = parseInt(prompt('How many squares per side?'))

    //conditions to validate input
    while ((isNaN(size)) || (size < 1 || size > 100)){
        alert('Enter a number between 0 and 100')
        size = parseInt(prompt('How many squares per side?'))
    }

    while(container.hasChildNodes()) {
        container.removeChild(container.lastChild)
    }

    //Create the squares
    createSquares(size)
}


createSquares(16)

const buttonElement = document.querySelector('.clear')
buttonElement.addEventListener('click', getNewSquares)



