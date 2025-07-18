

let nome = document.getElementById('nome')
let mesa = document.getElementById('mesa')
let avatar = document.getElementById('avatar')
let sistema1 = document.getElementById('sistema1')
let sistema2 = document.getElementById('sistema2')
let code = document.getElementById('code')
let code2 = document.getElementById('code2')
let code3 = document.getElementById('code3')

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    

    nome.style.marginTop = value * 2.5 + 'px';
    mesa.style.top = value * 1.5 + 'px';
    sistema2.style.left = value * 1.5 + 'px';
    code.style.left = value * 1.5 + 'px';
    code2.style.top = value * 1.5 + 'px';
    code2.style.left = value * 1.5 + 'px';
    sistema1.style.left = value *  -1.5 + 'px';
    code3.style.left = value *  -1.5 + 'px';
    code3.style.top = value * 1.5 + 'px';

    
});