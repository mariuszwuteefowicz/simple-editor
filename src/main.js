textarea = document.querySelector('.textarea--js')
const loadButton = document.querySelector('.load--js');
const saveButton = document.querySelector('.save--js');

saveButton.addEventListener('click', () => {
    localStorage.setItem('content', textarea.value)
})

loadButton.addEventListener('click', () => {
    textarea.value = localStorage.getItem('content');
    
})