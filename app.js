
document.getElementById('add-btn')
.addEventListener('click', addListItem);

function addListItem(event) {
    event.preventDefault()
    const input = document.getElementById('new-task');
    const text = input.value;
    const newLI = document.createElement('li');
    const taskList = document.getElementById('list');
    const deleteButton = createDeleteButton(newLI);
    const completeButton = createCompleteButton(newLI);

    newLI.textContent = text;   

    newLI.append(deleteButton);
    newLI.append(completeButton);
    taskList.append(newLI);
    
    newLI.setAttribute('id', 'list-item');

    input.value = '';
 }


function createDeleteButton(newLI) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    deleteButton.setAttribute('id', 'dlt-btn');

    deleteButton.addEventListener('click', () => {
        newLI.remove()
    })
    return deleteButton;
 }
  

function createCompleteButton(newLI) {
    
    const completeButton = document.createElement('button');
    completeButton.textContent = "O";
    completeButton.setAttribute('id', 'complete-btn');

    completeButton.addEventListener('click', (event) => {
        event.preventDefault()
        newLI.style.textDecoration = 'line-through';
    })
    return completeButton;
 }
