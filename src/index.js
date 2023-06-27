// GET HTTP Request After the DOM Content has Loaded
document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/ramens")
        .then(response => response.json())
        .then(ramenData => renderRamen(ramenData))
})

// This function renders selected values from a mock database to the DOM
function renderRamen(ramenData) {
    const ramenMenu = document.querySelector("#ramen-menu")
    ramenData.forEach(ramen => {
        const img = document.createElement("img")
        img.src = ramen.image
        ramenMenu.appendChild(img)
    });
}