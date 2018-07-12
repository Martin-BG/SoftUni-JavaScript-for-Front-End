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
