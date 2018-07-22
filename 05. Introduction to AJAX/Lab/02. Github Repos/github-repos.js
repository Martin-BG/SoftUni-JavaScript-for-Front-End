function loadRepos() {
    $("#repos").empty();
    let url = "https://api.github.com/users/" +
        $("#username").val() + "/repos";
    $.ajax({
        url: url,
        success: displayRepos,
        error: displayError
    });

    function displayRepos(respos) {
        for (let repo of respos) {
            $("#repos")
                .append($('<li>')
                    .append($('<a>')
                        .text(repo.full_name)
                        .attr('href', repo.html_url)));
        }
    }

    function displayError(err) {
        $("#repos")
            .append($("<li>")
                .text(`Error: ${err.responseJSON.message}`));
    }
}
