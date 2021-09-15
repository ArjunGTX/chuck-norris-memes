const jokeBtn = document.getElementById('joke-btn');
const outputField = document.getElementById('display');

jokeBtn.addEventListener('click',getJoke);

function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
            return response.json();
        })
        .then(data => {
            outputField.innerText = data.value;
        })
}