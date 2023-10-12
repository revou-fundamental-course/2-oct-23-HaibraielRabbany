function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const scale = document.getElementById("scale").value;
    let result;

    if (scale === "celsius") {
        result = (temperatureInput - 32) * (5/9);
    } else {
        result = (temperatureInput * 9/5) + 32;
    }

    document.getElementById("result").innerHTML = `Converted Temperature: ${result.toFixed(2)} ${scale}`;
}