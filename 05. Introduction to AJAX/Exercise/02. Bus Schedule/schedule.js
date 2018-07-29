function solve() {
    let nextStopId = "depot";
    let nextStopName = "";

    function success(res) {
        nextStopId = res.next;
        nextStopName = res.name;
        $(".info").text(`Next Stop at ${nextStopName}`);
        $("#arrive").attr("disabled", false);
        $("#depart").attr("disabled", true);
    }

    function error(err) {
        $(".info").text("Error");
        $("#arrive").attr("disabled", true);
        $("#depart").attr("disabled", true);
    }

    function depart() {
        $.ajax({
            url: `https://judgetests.firebaseio.com/schedule/${nextStopId}.json`,
            success,
            error
        });
        return nextStopName;
    }

    function arrive() {
        $(".info").text(`Arriving at ${nextStopName}`);
        $("#arrive").attr("disabled", true);
        $("#depart").attr("disabled", false);
        return nextStopName;
    }

    return {
        depart,
        arrive
    };
}


/*function solve() {
    let nextStopId = "depot";
    let nextStopName = undefined;

    function nextStop(nextStop) {
        $(".info").text(`Next stop ${nextStop.name}`);
        nextStopName = nextStop.name;
        nextStopId = nextStop.next;
        $("#arrive").removeAttr("disabled");
    }

    function error() {
        $(".info").text("Error");
        $("#arrive").attr("disabled", true);
        $("#depart").attr("disabled", true);
    }

    function depart() {
        $("#depart").attr("disabled", true);

        $.get("https://judgetests.firebaseio.com/schedule/" + nextStopId + ".json")
            .then(nextStop)
            .catch(error);
    }

    function arrive() {
        $(".info").text(`Arriving at ${nextStopName}`);
        $("#arrive").attr("disabled", true);
        $("#depart").removeAttr("disabled");
    }

    return {
        depart,
        arrive
    };
}*/
