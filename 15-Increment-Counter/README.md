# Increment Counter

```javascript

onst counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText

        const increment = target / 1000

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }

    }

    updateCounter();
}) 

```

          
<img src='https://github.com/MityaKimchanskii/HTML_CSS_JavaScript/blob/main/15-Increment-Counter/15.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


 
    


