function extractText() {
    let result = [];
    $("#items li")
        .toArray()
        .map(e => result.push(e.textContent));
    $("#result").text(result.join(", "));
}
