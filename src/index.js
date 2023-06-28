// Get data from our the mock database
fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramenData => renderRamens(ramenData))

// This function iterate through the ramen data
function renderRamens(ramenData) {
    ramenData.forEach(renderRamen);
}

// This function grabs a dom element, creates an image, sets id and image source to image tag, renders image to the div element with an id of ramen-menu, and add event listener to image
function renderRamen(ramen) {
    const ramenMenu = document.querySelector("#ramen-menu")
    const img = document.createElement("img")
    img.id = ramen.id
    img.src = ramen.image
    ramenMenu.appendChild(img)
    img.addEventListener("click", event => renderRamenDetails(ramen))
}

// This function grabs dom elements and assign each to a specific value from ramen data
function renderRamenDetails(ramen) {
    const detailImage = document.querySelector(".detail-image")
    detailImage.src = ramen.image
    detailImage.alt = ramen.name
    const ramenName = document.querySelector(".name")
    ramenName.textContent = ramen.name
    const restaurantName = document.querySelector(".restaurant")
    restaurantName.textContent = ramen.restaurant
    const ratingDisplay = document.querySelector("#rating-display")
    ratingDisplay.textContent = ramen.rating
    const commentDisplay = document.querySelector("#comment-display")
    commentDisplay.textContent = ramen.comment
}