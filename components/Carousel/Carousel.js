/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector(".carousel-container")
console.log(carouselContainer)

carouselContainer.appendChild(createCarousel())


function createCarousel(){
  //create the elements
  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const imgMountains = document.createElement('img')
  const imgComputer = document.createElement('img')
  const imgTree = document.createElement('img')
  const imgTurnTable = document.createElement('img')
  const rightButton = document.createElement('div')

  //set the style
  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')

  //set the content
  imgMountains.src = "./assets/carousel/mountains.jpeg"
  imgComputer.src = "./assets/carousel/computer.jpeg"
  imgTree.src = "./assets/carousel/trees.jpeg"
  imgTurnTable.src = "./assets/carousel/turntable.jpeg"

  //put together
  carousel.appendChild(leftButton)
  carousel.appendChild(imgMountains)
  carousel.appendChild(imgComputer)
  carousel.appendChild(imgTree)
  carousel.appendChild(imgTurnTable)
  carousel.appendChild(rightButton)

  return Carousel
  
}