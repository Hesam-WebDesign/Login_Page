const wrapper = document.querySelector('.wrapper')
const loginlink = document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')
const loginButton = document.querySelector('.login-btn')
const closeIcon = document.querySelector('.close-icon')

registerlink.addEventListener('click', () => {
    wrapper.classList.add('active')
})

loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active')
})

loginButton.addEventListener('click', () => {
    wrapper.classList.add('popup')
})

closeIcon.addEventListener('click', () => {
    wrapper.classList.remove('popup')
})
