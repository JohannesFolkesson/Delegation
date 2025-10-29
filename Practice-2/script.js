const filters = document.getElementById('filters');
const list = document.getElementById('todo-list');


filters.addEventListener('click', (event) => {
    if(!event.target.matches('button')) return;
    const filter = event.target.dataset.filter;

list.querySelectorAll('li').forEach((li) => {

        if(filter === 'alla') {
        li.style.display = ''}
        
        else if(li.dataset.status === filter) {
            li.style.display = '';
        }
        else {
            li.style.display = 'none';
        }
})

})
