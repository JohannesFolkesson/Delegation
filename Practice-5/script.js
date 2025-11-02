function initializeApp(){


const input = document.querySelector('#newItem');
const list = document.querySelector('#todoList');
const showAll = document.querySelector('#showAll');
const showDone = document.querySelector('#showDone');

input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && input.value.trim() !== "") {
    let li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = ""
   
        }
    })

      list.addEventListener('click', (event) => {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle("done")
     }
    })

    showAll.addEventListener('click', () => {
        document.querySelectorAll('#todoList li').forEach(li => li.style.display = 'list-item')
    })

    showDone.addEventListener('click', () => {
        document.querySelectorAll('#todoList li').forEach(li => { li.style.display = li.classList.contains("done") ? "list-item" : "none"}) 
        
    })


}

