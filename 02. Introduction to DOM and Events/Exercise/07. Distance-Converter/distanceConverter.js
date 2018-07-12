function attachEventsListeners() {
    let button = document.getElementById("convert");
    button.addEventListener("click", convertDistance);

    function convertDistance() {
        let inputDist = Number(document.getElementById("inputDistance").value);
        let inputUnit = document.getElementById("inputUnits").value;
        let outputUnit = document.getElementById("outputUnits").value;
        let outputDist = convFromM(convToM(inputDist, inputUnit), outputUnit);
        document.getElementById("outputDistance").value = outputDist;
        document.getElementById("inputDistance").value = inputDist;
    }

    function convToM(value, unit) {
        switch (unit) {
            case "km":
                return value * 1000;
            case "m":
                return value;
            case "cm":
                return value * 0.01;
            case "mm":
                return value * 0.001;
            case "mi":
                return value * 1609.34;
            case "yrd":
                return value * 0.9144;
            case "ft":
                return value * 0.3048;
            case "in":
                return value * 0.0254;
        }
    }

    function convFromM(value, unit) {
        switch (unit) {
            case "km":
                return value / 1000;
            case "m":
                return value;
            case "cm":
                return value / 0.01;
            case "mm":
                return value / 0.001;
            case "mi":
                return value / 1609.34;
            case "yrd":
                return value / 0.9144;
            case "ft":
                return value / 0.3048;
            case "in":
                return value / 0.0254;
        }
    }
}

// Credits to kostovhg:
// https:github.com/kostovhg/SoftUni/blob/master/FrontEnd/JavaScriptForFrontEnd/d_DOMAndEvents/g_DistanceConverter/distanceConverter.js
function betterSolution() {

    let units = {
        'km': 1000, 'm': 1, 'cm': 0.01, 'mm': 0.001,
        'mi': 1609.34, 'yrd': 0.9144, 'ft': 0.3048, 'in': 0.0254,
    };

    function attachEvent() {
        let [fromUnits, toUnits] = [
            document.getElementById('inputUnits'),
            document.getElementById('outputUnits'),
        ];
        document.getElementById('convert').addEventListener('click', function () {
            document.getElementById('outputDistance').value =
                document.getElementById('inputDistance').value * units[fromUnits.value] / units[toUnits.value];
        });
    }

    return attachEvent();
}
