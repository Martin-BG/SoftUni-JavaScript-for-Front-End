let counter = 0;

function attachEvents() {
    let username = 'Anonymous';
    let typeMsg;

    $('#logBtn').click(attachMsg);


    $('#setUsername').click(setUsername);

    function setUsername() {
        if (/\S+/.test($('#usernameInput').val())) {
            if ($('#setUsername').text() === "Set Username") {
                username = $('#usernameInput').val();
                $('#setUsername').text('Log out');
                $('#settedUsername').append($("<h3 id='loggedUser'>" + username + "</h3>"));
                $('#usernameInput').remove();
            }
            else {
                username = 'Anonymous';
                $('#loggedUser').remove();
                $('#setUsername').text('Set Username');
                $('#settedUsername').append($('<input type="text" class="form-control" id="usernameInput" placeholder="Username...">'));
            }
        }
    }

    function deleteRow() {
        let row = $(this).parent().remove();
        counter--;
        checkForEmpty();
    }

    function attachMsg() {
        let logs = $('#logs');
        let message = $('#message').val();
        let container;

        if (/\S+/.test($('#message').val())) {
            if ($('#successBtn').is(':checked')) {
                typeMsg = 'Success';
                container = successMsg();
            }
            else if ($('#infoBtn').is(':checked')) {
                typeMsg = 'Info';
                container = infoMsg();
            }
            else if ($('#errorBtn').is(':checked')) {
                typeMsg = 'Error';
                container = errorMsg();
            }

            let messageBox = ($("<div class='col-6 h3'>" + typeMsg + ": " + message + "</div>"));
            let usernameBox = ($("<div class='col-3 h3 border-left border-right border-dark px-5 text-center'>" + username + "</div>"));
            let archiveBox = ($("<div class='col-3 h3 archive text-center'>Archive</div>"));

            container.append(messageBox, usernameBox, archiveBox);

            logs.append(container);
            logs.append();

            $('#message').val('');

            counter++;
            checkForEmpty();

            $('.archive:last').click(deleteRow);
        }
    }

    function checkForEmpty() {
        if (counter > 0) {
            $('#emptyDb').css('display', 'none');

        } else {
            $('#emptyDb').css('display', 'block');
        }
    }

    function successMsg() {
        return $('<div class="text-white bg-success py-3 row rounded mb-3"></div>');
    }

    function infoMsg() {
        return $('<div class="text-white bg-info py-3 row rounded mb-3"></div>');
    }

    function errorMsg() {
        return $('<div class="text-white bg-danger py-3 row rounded mb-3"></div>');
    }
}

attachEvents();