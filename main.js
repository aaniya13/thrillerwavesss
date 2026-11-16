
import { attractions, getAttractionDetails } from "./rides.js";

function showRide(name) {
    const result = document.getElementById("result");

    if (attractions[name]) {
        result.textContent = getAttractionDetails(name);
    }
}

window.showRide = showRide;

console.log("THRILLWAVE JavaScript file imported successfully!");
console.log("Available attractions:", attractions);
