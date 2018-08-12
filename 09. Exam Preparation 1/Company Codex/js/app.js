$('.form-control').on('input', function () {
    let firstChar = $('#firstName').val().toLowerCase().charAt(0);
    let lastName = $('#lastName').val().toLowerCase();
    let company = $('#company').val().toLowerCase();
    let branch = $('#branch').val().toLowerCase();
    $('#workEmail').val(`${firstChar}.${lastName}@${branch}-${company}.com`);
});
