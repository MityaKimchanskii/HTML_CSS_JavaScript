# Scroll Animation

```javascript
const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
} 
```

          
<img src='https://github.com/MityaKimchanskii/HTML_CSS_JavaScript/blob/main/6-scroll-animation/6.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


 
    


