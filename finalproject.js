document.getElementById('current-year').textContent = new Date().getFullYear();

document.getElementById('caret-icon').addEventListener('click', () =>{
    window.scrollTo({top: 0, behaviour: 'smooth'});
});
const caret = document.getElementById('caret-icon');
caret.style.cursor = 'pointer';