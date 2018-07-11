function toggle() {
    let state = document.getElementsByClassName("button")[0].innerHTML;
    if (state === "More") {
        document.getElementsByClassName("button")[0].innerHTML = "Less";
        document.getElementById("extra").style.display = "block";
    } else {
        document.getElementsByClassName("button")[0].innerHTML = "More";
        document.getElementById("extra").style.display = "none";
    }
}
