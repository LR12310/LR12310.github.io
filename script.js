const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

const portfolioImgages = document.querySelectorAll('.portfolio__item')

const portfolioText2 = document.getElementById("2")


const portfolioText = document.querySelectorAll('.portfolio__text')


portfolioImgages.forEach(image => {
    image.addEventListener('hover', () => {

    })
})


const questionsButton = document.getElementById('more')
const hiddenQuestions = document.getElementById('questions__hidden')

hiddenQuestions.style.display = 'none'
questionsButton.innerHTML = "See more"


questionsButton.addEventListener("click", () => {
    console.log('clicked')
    if (hiddenQuestions.style.display === 'none') {
        hiddenQuestions.style.display = 'block'
        onOffSwitch = 1 
        questionsButton.innerHTML = "See less"
    } else {
        hiddenQuestions.style.display = 'none'
        onOffSwitch = 0
        questionsButton.innerHTML = "See more"
    }
})