function calc() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("sum").value = num1 + num2;
    // document.getElementsByTagName("input")[2].value = num1 + num2;
    // document.querySelectorAll("input")[2].value = num1 + num2;
}
