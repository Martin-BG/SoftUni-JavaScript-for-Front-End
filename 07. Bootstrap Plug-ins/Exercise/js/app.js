$('#facebookButton').on('click', function () {
    socialButton('http://facebook.com');
});

$('#googleButton').on('click', function () {
    socialButton('http://google.com');
});

$('.dropify').dropify();

$('.btn.btn-info').on('click', function () {
    swal("Good job!", "You are registered!", "success");

    clearAllInput();
});

function socialButton(url) {
    swal({
            title: "Leave this site?",
            text: `If you click 'OK', you will be redirected to ${url}`,
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-primary",
            confirmButtonText: "OK",
            closeOnConfirm: true
        },
        function () {
            let href = (url === 'http://google.com') ? `https://accounts.google.com/signup` : `${url}/signup`;
            window.open(`${href}`, 'mywin', 'left=50,top=80,width=600,height=600');
        });
}

function clearAllInput() {
    let enterYourDataInput = $('.form-group .form-control');
    for (const enterYourDataInputElement of enterYourDataInput) {
        $(enterYourDataInputElement).val('');
    }

    let socialMediaProfilesInput = $('.input-group-sm .form-control');
    for (const socialMediaProfile of socialMediaProfilesInput) {
        $(socialMediaProfile).val('');
    }

    $(".dropify-clear").click();
}
