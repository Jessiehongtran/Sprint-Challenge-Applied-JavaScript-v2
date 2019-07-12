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
    const bootstrap = res.data.articles.bootstrap
    console.log(bootstrap)
    bootstrap.forEach(cards=>{
            const showCard = createCard(cards)
            console.log(showCard)
    })

    const javascript = res.data.articles.javascript
    console.log(javascript)
    javascript.forEach(cards=>{
            const showCard = createCard(cards)
            console.log(showCard)
    })

    const jquery = res.data.articles.jquery
    console.log(jquery)
    jquery.forEach(cards=>{
            const showCard = createCard(cards)
            console.log(showCard)
    })

    const node = res.data.articles.node
    console.log(node)
    node.forEach(cards=>{
            const showCard = createCard(cards)
            console.log(showCard)
    })

    const technology = res.data.articles.technology
    console.log(technology)
    technology.forEach(cards=>{
            const showCard = createCard(cards)
            console.log(showCard)
    })
    
    
    
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
    headline.textContent = `${data.headline}`
    link.src = `${data.authorPhoto}`
    authorName.textContent = `By ${data.authorName}`

    //put together
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(img)
    author.appendChild(authorName)
    img.appendChild(link)

    return card
}