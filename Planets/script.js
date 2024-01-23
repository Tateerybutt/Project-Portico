
const ageInput = document.getElementById("age");
const weightInput = document.getElementById("weight");

function calculatePlanetValues(planet) {
    const age = parseFloat(ageInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(age) || isNaN(weight)) {
        alert("Please enter both age and weight before calculating.");
        return;
    }

    const planetData = {
        Mercury: { gravity: 3.7, yearLength: 0.24 },
        Venus: { gravity: 8.87, yearLength: 0.62 },
        Earth: { gravity: 9.81, yearLength: 1 },
        Mars: { gravity: 3.711, yearLength: 1.88 },
        Jupiter: { gravity: 24.79, yearLength: 11.86 },
        Saturn: { gravity: 10.44, yearLength: 29.46 },
        Uranus: { gravity: 8.69, yearLength: 84.01 },
        Neptune: { gravity: 11.15, yearLength: 164.8 },
        Pluto: { gravity: 0.62, yearLength: 248.09 }
    };

    const planetGravity = planetData[planet].gravity;
    const planetYearLength = planetData[planet].yearLength;

    let newAge;

    if (planet !== 'Pluto') {
        newAge = age / planetYearLength;
    } else {
        // Adjusting for Pluto's longer year
        newAge = age / (planetYearLength / 2.44);
    }

    const newWeight = weight * (planetGravity / 9.81);

    const results = `<b>Age: </b>${newAge.toFixed(2)} years<br><b>Weight: </b>${newWeight.toFixed(2)} kg`;

    // Clear results from other boxes
    clearResults();

    const resultsDiv = document.getElementById(`${planet.toLowerCase()}-results`);
    resultsDiv.innerHTML = results;
}

// Clear results from all planet boxes
function clearResults() {
    const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto'];
    planets.forEach(planet => {
        const resultsDiv = document.getElementById(`${planet}-results`);
        resultsDiv.innerHTML = '';
    });
}