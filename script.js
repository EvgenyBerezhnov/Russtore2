let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

// Функция, которую нужно вызвать при клике на стрелку
function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

// Исправь ошибки, допущенные при обработке события
function change_theme() {
let header = document.querySelector('header')
header.style.background = 'url(/uploads/2022/11/bg_space.png)'
header.style.backgroundSize = 'cover'
}

let change_theme_button = document.querySelector('.switch-theme-button')
change_theme_button.addEventListener('click', change_theme)
