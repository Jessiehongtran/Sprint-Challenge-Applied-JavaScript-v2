// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')
// console.log(topics)

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(res =>{
    console.log('show data',res)
    const getTab = res.data.topics
    // console.log(getTab)
    getTab.forEach(tabs => {
        const showTab = createTab(tabs)
        console.log(getTab)
        topics.appendChild(showTab) 
    }

    )
})

.catch(
    error => {
        // Handles failure:
        console.log('The dogs API is currently down, try again later', error)
    }
)

function createTab(){
    const tabs = document.createElement('div')
    console.log(tabs)
    tabs.classList.add('tab')
    tabs.textContent = "topic here"
    return tabs
}

