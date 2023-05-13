# Dad Jokes

- Fetch data using `async/await`

```javascript

async function generateJoke() {
    const config = {
        headers: { 'Accept': 'application/json' },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
}

```
- Fetch data using `.then()`

```javascript

const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

function generateJoke() {
    const config = {
        headers: { 'Accept': 'application/json' },
    }

    fetch('https://icanhazdadjoke.com', config)
        .then(res => res.json())
        .then((data) => {
        jokeEl.innerHTML = data.joke 
    })
}

```

          
<img src='https://github.com/MityaKimchanskii/HTML_CSS_JavaScript/blob/main/10-dad-jokes/10.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


 
    


