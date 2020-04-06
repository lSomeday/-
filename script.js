let h1 = document.querySelector('h1');
let button = document.querySelector('.b-1');
let button2 = document.querySelector('.b-2');


button.onclick = () => {
    h1.style.backgroundColor = 'red';
}

button2.onclick = () => {
    h1.style.backgroundColor = 'yellow';
}