const loginBtn = document.querySelector('.login')
const swithFormBtn = document.querySelector('.signup-link b')
const closeBtn = document.querySelector('.login-window-close span')
const formText = document.querySelector('.signup-link span')

const loginWindow = document.querySelector('.login-window')


const signupWindowForm = document.querySelector('.register-window-form')
const loginWindowForm = document.querySelector('.login-window-form')


function hideLoginWindow() {
    loginWindow.style = 'scale: 0'

}
function showLoginWindow() {
    loginWindow.style = 'scale: 1'
}


closeBtn.addEventListener('click', hideLoginWindow)
loginBtn.addEventListener('click', showLoginWindow)

function swithForm() {
    if (swithFormBtn.textContent === 'Sign up') {
        loginWindowForm.style = 'display:none'
        signupWindowForm.style = 'display:block'
        swithFormBtn.textContent = 'Sign in'
        formText.textContent = 'Already have an account ?'
    }
    else {
        loginWindowForm.style = 'display: block'
        signupWindowForm.style = 'display: none'
        swithFormBtn.textContent = 'Sign up'
        formText.textContent = 'Don`t have an account ?'
    }

}

closeBtn.addEventListener('click', hideLoginWindow)
loginBtn.addEventListener('click', showLoginWindow)
swithFormBtn.addEventListener('click', swithForm)


