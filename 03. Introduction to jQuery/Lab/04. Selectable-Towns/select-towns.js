function attachEvents() {
    $("ul").on("click", "li", onListItemClick);
    $("#showTownsButton").on("click", onShowTownsClick);

    function onShowTownsClick() {
        $("#selectedTowns").text(
            $("#items li")
                .toArray()
                .filter(li => typeof $(li).attr("data-selected") !== typeof undefined && $(li).attr("data-selected") === "true")
                .map(li => li.textContent)
                .join(", ")
        );
    }

    function onListItemClick() {
        let attr = $(this).attr("data-selected");
        if (typeof attr !== typeof undefined && attr === "true") {
            $(this).removeAttr("data-selected");
            $(this).css("color", "");
        } else {
            $(this).attr("data-selected", "true");
            $(this).css("color", "#DDD");
        }
    }
}
