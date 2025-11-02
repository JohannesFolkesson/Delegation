document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {

        console.log('Du klickade på:', e.target.textContent);
    }

})

const ul = document.querySelector('ul');
const btn = document.createElement('button');
btn.textContent = 'Lägg till ny li';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    const newLi = document.createElement('li')
    newLi.textContent = 'Banan'
    ul.appendChild(newLi);
})

