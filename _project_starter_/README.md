# Split Landing Page

```javascript

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mousemove',() => {
    container.classList.add('hover-left');
})

left.addEventListener('mouseleave',() => {
    container.classList.remove('hover-left');
})

right.addEventListener('mousemove',() => {
    container.classList.add('hover-right');
})

right.addEventListener('mouseleave',() => {
    container.classList.remove('hover-right');
})

```

          
<img src='https://github.com/MityaKimchanskii/HTML_CSS_JavaScript/blob/main/7-split-landing-page/7.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


 
    


