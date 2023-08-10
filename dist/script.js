const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

let btn = document.querySelectorAll('.plus-button');
let list = document.querySelector('.list');


btn.forEach((btns) => {
  btns.addEventListener('click', () => {
        list.classList.toggle('hidden');
    })
})
