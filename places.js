// Footer: Display current year and last modified date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempC, windSpeedKmh) {
    // Convert Celsius to Fahrenheit and km/h to mph
    const tempF = tempC * 9 / 5 + 32;
    const windSpeedMph = windSpeedKmh / 1.609;

    // Calculate wind chill factor (Fahrenheit)
    return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(windSpeedMph, 0.16) + 
           0.4275 * tempF * Math.pow(windSpeedMph, 0.16);
}

// Display wind chill in the weather section
function displayWindChill() {
    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);

    if (temperature <= 10 && windSpeed > 4.8) { // Viable conditions for wind chill calculation
        const windChillF = calculateWindChill(temperature, windSpeed);
        const windChillC = (windChillF - 32) * 5 / 9; // Convert result back to Celsius
        document.getElementById("windChill").textContent = `${windChillC.toFixed(1)}°C`;
    } else {
        document.getElementById("windChill").textContent = "N/A";
    }
}

// Run on page load
displayWindChill();
