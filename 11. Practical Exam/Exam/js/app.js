$('input').on({
    click: function () {
        $(this).prop("readonly", false);
    },
    keyup: function (event) {
        if (event.which === 13) {
            $(this).prop("readonly", true);
            $('input').blur();
            event.preventDefault();
            return false;
        }
    }
});

$('button').on({
    click: function () {
        $('#firstName').val('Pesho');
        $('#lastName').val('Peshov');
        $('#phoneNumber').val('555-333-4545');
        $('#ucl').val('9311124003');
        $('.mr-4').prop('checked', false);
        $('#other').prop('checked', true);
        setPositionsToDefault();
    }
});

$('#support').on('click', function () {
    clearPositionsSelection();
    $('#senior').parent().find('span').text('Tech Support');
    $('#regular').parent().find('span').text('Medical Support');
    $('#junior').parent().find('span').text('Assistant Support');
});

$('#crm').on('click', function () {
    clearPositionsSelection();
    $('#senior').parent().find('span').text('Community Manager');
    $('#regular').parent().find('span').text('Customer Care Manager');
    $('#junior').parent().find('span').text('Lead Administrative Officer');
});

$('#marketing').on('click', function () {
    clearPositionsSelection();
    $('#senior').parent().find('span').text('PR Manager');
    $('#regular').parent().find('span').text('Social Media Manager');
    $('#junior').parent().find('span').text('Marketing Specialist');
});

$('#development').on('click', function () {
    clearPositionsSelection();
    $('#senior').parent().find('span').text('Junior Developer');
    $('#regular').parent().find('span').text('Regular Developer');
    $('#junior').parent().find('span').text('Senior Developer');
});

$('#other').on('click', function () {
    clearPositionsSelection();
    setPositionsToDefault();
});

function setPositionsToDefault() {
    $('#senior').parent().find('span').text('Team Lead');
    $('#regular').parent().find('span').text('Regular Employee');
    $('#junior').parent().find('span').text('Intern');
}

function clearPositionsSelection() {
    $('#senior').prop('checked', false);
    $('#regular').prop('checked', false);
    $('#junior').prop('checked', false);
}
