const theme = document.getElementById('checkbox')
const addToDo = document.getElementById('text');
const list = document.querySelector('.list')




//add to list
function add(inputValue) {
    const newLabel = document.createElement('label');
    const input = document.createElement('input');
    const newDiv = document.createElement('div')
    const span = document.createElement('span');
    const value = document.createElement('span')
    span.className = 'close'
    span.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd"
    d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>`
    value.innerHTML = inputValue
    input.type = 'checkbox';
    newDiv.className = 'added'

    newLabel.prepend(input)
    newLabel.appendChild(value)
    newDiv.prepend(newLabel)
    newDiv.appendChild(span)
    list.prepend(newDiv)

    // remove from list
    const removeButton = document.querySelectorAll('.close')
    removeButton.forEach(el => {
        el.addEventListener('click', () => {
            console.log('REMOVE')
            el.parentElement.remove()
        })
    })
    checked()
}


//user Input - NEXT add userinput value and add function : add(input)
addToDo.addEventListener('keypress', e => {
    let userInput = addToDo.value
    if (userInput !== '') {
        if (e.key === 'Enter') {
            add(userInput)
            addToDo.value = ''
        }
    } else if (userInput == '') {
        if (e.key === 'Enter') {
            console.log('Please entry a to do!')
        }
    }

})


// light and dark mode
function checked() {
    const addedLists = document.querySelectorAll('.added')
    if (theme.checked) {
        document.body.style.backgroundColor = 'hsl(235, 21%, 11%)'
        document.getElementById('moon').style.display = 'none';
        document.getElementById('sun').style.display = 'block'
        document.querySelector('.banner').style.backgroundImage = "url('./images/bg-desktop-dark.jpg')";
        document.getElementById('text').style.color= 'rgb(202, 205, 232)'
        document.querySelector('#text').style.backgroundColor = 'hsl(235, 24%, 19%)';
        addedLists.forEach(el => {
            el.style.backgroundColor = 'hsl(235, 24%, 19%)';
            el.style.color = 'hsl(234, 39%, 85%)';
            el.addEventListener('mouseover', ()=>{
                el.style.backgroundColor = 'hsl(234, 11%, 52%)'
            })
            el.addEventListener('mouseleave', ()=>{
                el.style.backgroundColor = 'hsl(235, 24%, 19%)';
            })
        })
    } else {
        document.body.style.backgroundColor = 'hsl(0, 0%, 98%)'
        document.getElementById('moon').style.display = 'block';
        document.getElementById('sun').style.display = 'none';
        document.querySelector('.banner').style.backgroundImage = "url('./images/bg-desktop-light.jpg')";
        document.getElementById('text').style.color= 'hsl(235, 19%, 35%)'
        addedLists.forEach(el => {
            el.style.backgroundColor = 'hsl(0, 0%, 98%)';
            el.style.color = 'hsl(235, 19%, 35%)'
            el.addEventListener('mouseover', ()=>{
                el.style.backgroundColor = ' hsl(236, 33%, 92%)'
            })
            el.addEventListener('mouseleave', ()=>{
                el.style.backgroundColor = 'hsl(0, 0%, 98%)';
            })
        })
        document.querySelector('#text').style.backgroundColor = 'hsl(0, 0%, 98%)'
    }
}

function complete(){
    if(list.hasChildNodes()){
        console.log('has child')
    } else {
        console.log('no child')
    }
}


add('Complete Todo')
theme.addEventListener('click', checked)


