const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

let plusButtons = document.querySelectorAll('.plus-button');



plusButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    let parent = btn.parentElement;
    let content = parent.nextElementSibling;
    content.classList.toggle('hidden');
    })
})
