function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $("<textarea>")
        .val(0)
        .addClass("counter")
        .attr("disabled", true);
    let incrementBtn = $("<button>Increment</button>")
        .addClass("btn")
        .attr("id", "incrementBtn");
    let addBtn = $("<button>Add</button>").addClass("btn")
        .attr("id", "addBtn");
    let list = $('<ul>')
        .addClass("results");

    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    container.append(fragment);

    $(incrementBtn).on("click", function () {
        textArea.val(+textArea.val() + 1);
    });

    $(addBtn).on("click", function () {
        list.append($(`<li>${textArea.val()}</li>`));
    });
}
