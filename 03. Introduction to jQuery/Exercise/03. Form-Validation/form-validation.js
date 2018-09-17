function validate() {
    //TODO - refactor
    $("#companyInfo").css("display", "none");
    let submit = $("#submit");
    let company = $("#company");
    let companyInfo = $("#companyInfo");
    let valid = $("#valid");
    let isCompany = () => company.is(":checked");
    let format = (field, v) => (!v) ? field.css("border", "2px solid red") : field.css("border", "none");
    let inputs = $(".pairContainer input").toArray().map(i => $(i).attr("id"));


    submit.on("click", function (e) {
        e.preventDefault();
        validateForm();
    });

    companyInfo.css("display", "table");

    let validations = {
        username: (v) => (/^[a-zA-Z0-9]{3,20}$/g).test(v),
        password: (v) => (/^\w{5,15}$/g).test(v) && $("#confirm-password").val() === v,
        "confirm-password": (v) => validations.password(v),
        email: (v) => (/^.*?@.*?\..*$/g).test(v),
        company: (v) => true,
        companyNumber: (v) => isCompany() ? (v >= 1000 && v <= 9999) : true,
    };

    function validateForm() {
        let formValidity = true;
        for (let input of inputs) {
            let field = $("input[id=${input}]");
            let fieldValidity = validations[input](field.val());
            format(field, fieldValidity);
            formValidity &= fieldValidity;
        }
        (formValidity) ? valid.css("display", "table") : valid.css("display", "none");
    }

    company.change(() => {
        if (company.is(":checked")) {
            $("#companyInfo").css("display", "block");
        } else {
            $("#companyInfo").css("display", "none");
        }
    });
}
