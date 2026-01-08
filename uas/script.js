// CLASS (Blueprint)
class Planet {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    getInfo() {
        return `${this.name}: ${this.description}`;
    }
}

// OBJECTS (Instance dari class)
const planets = [
    new Planet("Mercury", "Planet terdekat dengan matahari."),
    new Planet("Venus", "Planet terpanas di tata surya."),
    new Planet("Earth", "Planet tempat kehidupan."),
    new Planet("Mars", "Planet merah yang misterius.")
];

let index = 0;

// Menampilkan data object ke UI
function showPlanet() {
    document.getElementById("planetName").innerText = planets[index].name;
    document.getElementById("planetDesc").innerText = planets[index].description;
    document.getElementById("info").innerText = planets[index].getInfo();
}

// Interaksi UX
function nextPlanet() {
    index++;
    if (index >= planets.length) {
        index = 0;
    }
    showPlanet();
}

// Load awal
showPlanet();
