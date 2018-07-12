function search() {
    $("#towns li").css("font-weight", "");
    let searchText = $("#searchText").val();
    let matches = 0;
    $("#towns li:contains('" + searchText + "')")
        .each((index, item) => {
            $(item).css("font-weight", "bold");
            matches++;
        });
    $("#result").text(`${matches} matches found.`);
}

function searchAnother() {
    let searchText = $('#searchText').val();
    let matches = 0;
    $("#towns li").each((index, item) => {
        if (item.textContent.includes(searchText)) {
            $(item).css("font-weight", "bold");
            matches++;
        } else
            $(item).css("font-weight", "");
    });
    $('#result').text(matches + " matches found.");
}
