let container = document.querySelector(".container")
let info = document.querySelector(".info")
let form = document.querySelector("form")
let content = document.querySelector(".content")
let button_1 = document.getElementById("button_1")
let button_2 = document.getElementById("button_2")
let button_3 = document.getElementById("button_3")
let button_4 = document.getElementById("button_4")
let button_5 = document.getElementById("button_5")
let button_6 = document.getElementById("button_6")
let text_1 = document.querySelector(".h2")
let text_2 = document.querySelector("li")
let text_3 = document.querySelector(".h2_2")
let text_4 = document.querySelector(".h2_3")
let text_5 = document.querySelector(".h2_4")
let text_6 = document.querySelector(".h2_5")
let button = document.querySelector("button")
let input_1 = document.getElementById("input_1")
let input_2 = document.getElementById("input_2")
let input_3 = document.getElementById("input_3")
let input_4 = document.getElementById("input_4")
button_1.addEventListener('click', function(){
    info.style.display='block'
    content.style.justifyContent='space-between'
})
button_2.addEventListener('click', function(){
    form.style.display='block'
    content.style.justifyContent='space-between'
})
button_3.addEventListener('click', function(){
    form.style.background='linear-gradient(140deg, rgba(0,0,0,1) 0%, rgba(147,151,152,0.8315475848542542) 100%)'
    info.style.background='linear-gradient(140deg, rgba(0,0,0,1) 0%, rgba(147,151,152,0.8315475848542542) 100%)'
})
button_4.addEventListener('click', function(){
    container.style.background='url(./img/w1.jpg)'
    container.style.backgroundSize='100%'
    info.style.color='black' 
    info.style.border='3px solid black'
    form.style.color='black'
    form.style.border='3px solid black'
    form.style.background='none'
    info.style.background='none'
    content.style.border='black'
    button_1.style.border='3px solid black'
    button_2.style.border='3px solid black'
    button_3.style.border='3px solid black'
    button_4.style.border='3px solid black'
    button_5.style.border='3px solid black'
    button_6.style.border='3px solid black'
    button_1.style.color='black'
    button_2.style.color='black'
    button_3.style.color='black'
    button_4.style.color='black'
    button_5.style.color='black'
    button_6.style.color='black'
    text_1.style.borderBottom='3px solid black'
    text_3.style.borderBottom='3px solid black'
    text_4.style.borderBottom='3px solid black'
    text_5.style.borderBottom='3px solid black'
    text_6.style.borderBottom='3px solid black'
    input_1.style.border='3px solid black'
    input_2.style.border='3px solid black'
    input_3.style.border='3px solid black'
    input_4.style.border='3px solid black'
    
})
