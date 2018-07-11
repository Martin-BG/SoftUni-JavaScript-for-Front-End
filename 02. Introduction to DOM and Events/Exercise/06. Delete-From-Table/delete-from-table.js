function deleteByEmail() {
    let empty = new RegExp("^\s*$");
    let email = document.getElementsByTagName("input")[0].value;
    if (empty.test(email)) {
        return;
    }
    document.getElementsByTagName("input")[0].value = "";
    document.getElementById("result").textContent = "Not found.";
    let rows = document.getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        if (row.children[1].textContent === email) {
            row.parentNode.removeChild(row);
            document.getElementById("result").textContent = "Deleted.";
        }
    }
}
