alert("Não posso ser comprado, mas posso ser capturado com um olhar, sou inútil pra um mas inestimável pra dois, quem sou eu?")

const password = document.querySelector('#pw')
const carta = document.querySelector('.pw-text')
const container = document.querySelector('.pw-container')

const verify_pw = setInterval(() => {
    const passwordValue = password.value.toLowerCase()
    const pw = 'amor'
    console.log(passwordValue)
    if(passwordValue == pw) {
        love()
    }
}, 500)


function love() {
    clearInterval(verify_pw)
    
    carta.removeAttribute('hidden')

    container.classList.add('love')
    password.setAttribute('disabled', '')
}

