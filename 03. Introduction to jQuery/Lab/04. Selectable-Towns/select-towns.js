function attachEvents() {
    $("ul").on("click", "li", onListItemClick);
    $("#showTownsButton").on("click", onShowTownsClick);

    function onShowTownsClick() {
        $("#selectedTowns").text(
            $("#items li")
                .toArray()
                .filter(li => $(li).is("[data-selected]"))
                .map(li => li.textContent)
                .join(", ")
        );
    }

    function onListItemClick() {
        if ($(this).is("[data-selected]")) {
            $(this).removeAttr("data-selected");
            $(this).css("background", "");
        } else {
            $(this).attr("data-selected", "true");
            $(this).css("background", "#DDD");
        }
    }
}
