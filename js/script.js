const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const results = document.querySelector('.results');
const showAnsw = document.querySelector('.show-answ');
const closeAnsw = document.querySelectorAll('.close-answ');


btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
});

showAnsw.addEventListener('click', function () {
    results.classList.remove('hidden')
});

closeAnsw.forEach(close => {
    close.addEventListener('click', function () {
        results.classList.add('hidden')
    });
});


