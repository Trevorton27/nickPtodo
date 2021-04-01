const newItem = document.querySelector('#add-btn').addEventListener('click', addListItem);
const deleteListItem = document.getElementById('dlt-btn').addEventListener('click', deleteItem);
const lineThru = document.getElementById('complete-btn').addEventListener('click', strikeThru);



function addListItem(event) {
    // Stop Automatic Browser Refresh
    event.preventDefault();
    
    const input = document.getElementById('new-task');
    // Preventing Empty List Item // "required" in (HTML) was not functioning "??"
    if (input.value == ''){
        alert("Please Enter Some Text!!!")
    }
    else {
    const taskList = document.getElementById('list');
    //Create New List and Button Elements
    const newLI = document.createElement('LI');
    const deleteButton = document.createElement('BUTTON');
    const completeButton = document.createElement('BUTTON');
    //Set Text Content of Buttons
    deleteButton.textContent = "X"
    completeButton.textContent = "0"
    //Get Text from Input Field
    newLI.textContent = input.value;
    //Give New Elements ID's
    newLI.setAttribute('id', 'list-item');
    deleteButton.setAttribute('id', 'dlt-btn');
    completeButton.setAttribute('id', 'complete-btn');
    //Append Our List Item to the Document
    taskList.append(newLI);
    newLI.append(deleteButton);
    newLI.append(completeButton);
    //Clear Input After Click Event
    input.value = '';
    console.log(newLI)
    }
 }


function deleteItem(event) {
    event.preventDefault();
    console.log('delete-clicked');
}

function strikeThru(event) {
    event.preventDefault();
    console.log('complete-clicked');  
}

