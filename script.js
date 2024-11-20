//--- display current date and time ---//

// function updateDateTime() {
   // const date = new Date();
   // const currentDateTime = date.toLocaleString();
   // document.querySelector('#currentDateTime').textContent = currentDateTime;
// }
// setInterval(updateDateTime, 1000)

//--- populate facts and prevent repeating facts ---//
function displayfact() {
    const facts = ["fact 1","fact 2","fact 3"]
    const random = Math.floor(Math.random() * facts.length)

    let randomFact = (random, facts[random]);

    document.querySelector('#mantisfacts').textContent = randomFact
}

setInterval(displayfact, 2000)