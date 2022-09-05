const addButton = document.getElementById('btn-main');
const items = document.getElementsByTagName('li');
const btnRemove = document.querySelector('.btn-remove');

addButton.addEventListener('click', () =>{
    const input = document.querySelector('.input-main');
    const list = document.querySelector('ul');

    list.insertAdjacentHTML(
        'afterbegin',
        `<li>${input.value}</li>`
    );
    input.value = '';
});

btnRemove.addEventListener('click', () => {
    const lastItem = document.querySelector('li:last-child')
    lastItem.remove();
});

//git test