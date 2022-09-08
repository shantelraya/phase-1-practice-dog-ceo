console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds = []

document.addEventListener("DOMContentLoaded", function () {
    dogImages();
    dogBreeds();
    filterBreeds();
})

function dogImages(){
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => {
    const images  = document.getElementById("dog-image-container");
