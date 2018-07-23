function getInfo() {
    $("#stopName").empty();
    $("#buses").empty();
    let url = `https://judgetests.firebaseio.com/businfo/${$("#stopId").val()}.json`;

    $.ajax({
        url,
        success,
        error
    });

    function success(res) {
        $("#stopName").append(res.name);

        let buses = Object.entries(res.buses);

        for (let bus of buses) {
            $("#buses").append(`<li>Bus ${bus[0]} arrives in ${bus[1]} minutes</li>`);
            console.log(bus);
        }
    }

    function error(err) {
        $("#stopName").append("Error");
    }
}
