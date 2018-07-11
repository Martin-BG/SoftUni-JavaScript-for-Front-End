function create(sentences) {
    for (let sentence of sentences) {
        let div = document.createElement("div");
        let p = document.createElement("p");
        p.innerHTML = sentence;
        p.style.display = "none";
        div.appendChild(p);
        div.addEventListener("click", show);
        document.getElementById("content").appendChild(div);

        function show() {
            this.firstChild.style.display = "block";
        }
    }
}
