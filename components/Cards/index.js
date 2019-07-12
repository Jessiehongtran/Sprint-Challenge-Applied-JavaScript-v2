// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(res =>{
    console.log('show data',res)
}

)

.catch(

)

function createCard(data){
    //create the elements
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const img = document.createElement('div')
    const link = document.createElement('img')
    const authorName = document.createElement('span')

    //set the style
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    img.classList.add('img-container')

    //set the content
    headline.textContent = `{Headline of article}`
    link.src = `{url of authors image}`
    authorName.textContent = `By {authors name}`

    //put together
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(img)
    author.appendChild(authorName)
    img.appendChild(link)
}