function addItem() {
    let input = document.getElementById('newItemText');
    let newElementName = input.value;
    input.value = '';
    let newListItem = document.createElement('li');
    newListItem.textContent = newElementName;
    let list = document.getElementById('items');
    list.appendChild(newListItem);
}

function addItemSolutionTwo() {
    let text = document.getElementById('newItemText').value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    document.getElementById("items").appendChild(li);
    document.getElementById('newItemText').value = '';
}
