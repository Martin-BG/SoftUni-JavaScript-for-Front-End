function extractText() {
    let result = [];
    $("#items li")
        .toArray()
        .map(e => result.push(e.textContent));
    $("#result").text(result.join(", "));
}

function extractTextAnoter() {
    $("#result").text(
        $("#items li")
            .toArray()
            .map(li => li.textContent)
            .join(", ")
    );
}
