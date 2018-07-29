$.validate({
    modules: "security"
});

$("#bold-btn").on("click", () => {
    $("#format-text input").toggleClass("text-bold");
});

$("#italic-btn").on("click", () => {
    $("#format-text input").toggleClass("text-italic");
});
