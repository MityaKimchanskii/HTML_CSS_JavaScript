const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActioveClasses()
        panel.classList.add('active')
    })
})

function removeActioveClasses() {
    panels.forEach((panel) => { 
        panel.classList.remove('active')
    });
}