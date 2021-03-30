const newItem = document.getElementById('add-btn').addEventListener('click', addListItem);
const deleteListItem = document.getElementById('dlt-btn').addEventListener('click', deleteItem);
const lineThru = document.getElementById('complete-btn').addEventListener('click', strikeThru);
const addDB = document.getElementById("add-btn").addEventListener('click', addDeleteButton);


function addListItem(event) {
    event.preventDefault();
    const input = document.getElementById('new-task').value;
    const newLI = document.createElement('LI');
    newLI.innerHTML = input;
    newLI.classList.add('list-item');
    newLI.setAttribute('id', 'list-item');
    document.getElementById('list').appendChild(newLI);
    console.log(newLI);
 }

 function addDeleteButton (event){
    event.preventDefault();
    const btn = document.getElementById('dlt-btn').value;
    const newDeleteButton = document.createElement('BUTTON');
    btn.innerHTML = newDeleteButton;
    document.getElementById('list').appendChild(newDeleteButton);
    newDeleteButton.setAttribute('id', 'dlt-btn');
    newDeleteButton.classList.add('delete');
    console.log(newDeleteButton);

 }

function deleteItem(event) {
    event.preventDefault();
    console.log('delete-clicked');
}

function strikeThru(event) {
    event.preventDefault();
    console.log('complete-clicked');  
}

