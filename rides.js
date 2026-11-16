
export const attractions = {
    "Roller Coaster": {
        type: "Amusement Park",
        thrill: "Extreme",
        description: "Experience breathtaking speed, twists and turns!"
    },

    "Wave Pool": {
        type: "Water Park",
        thrill: "Moderate",
        description: "Enjoy refreshing waves and splash-filled adventures!"
    },

    "Water Slides": {
        type: "Water Park",
        thrill: "High",
        description: "Enjoy exciting slides with amazing twists!"
    },

    "Giant Wheel": {
        type: "Amusement Park",
        thrill: "Relaxing",
        description: "Enjoy a beautiful view of the entire park!"
    }
};

export function getAttractionDetails(name) {
    const ride = attractions[name];

    return `
        🎡 ATTRACTION: ${name}
        🎯 CATEGORY: ${ride.type}
        ⚡ THRILL LEVEL: ${ride.thrill}
        ✨ EXPERIENCE: ${ride.description}
    `;
}
