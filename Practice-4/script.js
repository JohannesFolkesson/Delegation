function myList() {

const input = document.querySelector('showList');
const list = document.querySelector('ul')


input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && input.value.trim() !== "") {
        let li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        input.value = ""

    }

})

}

