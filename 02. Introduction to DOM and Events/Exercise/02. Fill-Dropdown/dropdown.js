function addItem() {
    let empty = new RegExp("^\s*$");
    let itemText = document.getElementById("newItemText").value;
    let itemValue = document.getElementById("newItemValue").value;
    if (empty.test(itemText) || empty.test(itemValue)) {
        return;
    }
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
    let option = document.createElement("option");
    option.value = itemValue;
    option.textContent = itemText;
    document.getElementById("menu").appendChild(option);
}
