// Get data from our the mock database
fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramenData => renderRamens(ramenData))

// This function iterate through the ramen data
function renderRamens(ramenData) {
    ramenData.forEach(renderRamen);
}

// This function grabs a dom element, creates an image, sets id and image source to image tag, renders image to the div tag with an id of ramen-menu, and add event listener to image
function renderRamen(ramen) {
    const ramenMenuDiv = document.querySelector("#ramen-menu")
    const img = document.createElement("img")
    // img.id = ramen.id
    img.src = ramen.image
    ramenMenuDiv.appendChild(img)
    img.addEventListener("click", event => renderRamenDetails(ramen))
}

// This function grabs dom elements and assign each to a specific value from ramen data
function renderRamenDetails(ramen) {
    const detailImage = document.querySelector(".detail-image")
    detailImage.src = ramen.image
    detailImage.alt = `This is a picture of a bowl of ${ramen.name}`
    const ramenNameH2 = document.querySelector(".name")
    ramenNameH2.textContent = ramen.name
    const restaurantNameH3 = document.querySelector(".restaurant")
    restaurantNameH3.textContent = ramen.restaurant
    const ratingDisplayH3 = document.querySelector("#rating-display")
    ratingDisplayH3.textContent = ramen.rating
    const commentDisplayH3 = document.querySelector("#comment-display")
    commentDisplayH3.textContent = ramen.comment;
}

// Grab form and add event listener to it.
const newRamenForm = document.querySelector("#new-ramen")
newRamenForm.addEventListener("submit", (event) => submitUserData(event))

// Sends user's inputs and prevent form default
function submitUserData(event) {
    event.preventDefault()
    const newRamenData = {
        name: event.target.name.value,
        restaurant: event.target.restaurant.value,
        image: event.target.image.value,
        rating: event.target.rating.value,
        comment: event.target["new-comment"].value
    }
    renderRamen(newRamenData)
    // const configurationObject = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //     },
    //     body: JSON.stringify(newRamenData)
    // }
    // fetch("http://localhost:3000/ramens", configurationObject)
    //     .then(response => response.json())
    //     .then(userData => renderUserData(userData))
}

// function renderUserData(userData) {
//     const h4 = document.querySelector("h4")
//     h4.textContent = userData.name
//     renderRamen(userData)
// }