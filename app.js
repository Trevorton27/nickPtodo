const newItem = document.getElementById('add-btn').addEventListener('click', addListItem);
const lineThru = document.getElementById('list-item').addEventListener('click', addStrike);

function addListItem(event) {
    event.preventDefault();
    const input = getInput()
    const newLI = document.createElement('LI');
    newLI.innerHTML = input;
    newLI.classList.add('list-item');
    newLI.setAttribute('id', 'list-item');
    document.getElementById('list').appendChild(newLI);
    console.log(newLI)
 }


function getInput() {
    return document.getElementById('new-task').value;
}

// works but need to add strike
function addStrike(event) {
    event.preventDefault();
    console.log('clicked');
     
}

