// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())

function Header() {
//create the elements
const header = document.createElement('div')
const date = document.createElement('span')
const title = document.createElement('h1')
const temp = document.createElement('span')

//set the style
header.classList.add('header')
date.classList.add('date')
temp.classList.add('temp')


//set the content
date.textContent = "SMARCH 28, 2019"
temp.textContent = "98°"

//put together
header.appendChild(date)
header.appendChild(title)
header.appendChild(temp)

return header

}
