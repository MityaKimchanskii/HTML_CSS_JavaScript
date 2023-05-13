# Wave Animation

```javascript

const labels = document.querySelectorAll('.form-control label')


labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

```

          
<img src='https://github.com/MityaKimchanskii/HTML_CSS_JavaScript/blob/main/8-form-wave-animation/8.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


 
    


