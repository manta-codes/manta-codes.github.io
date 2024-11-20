//--- display current date and time ---//

// function updateDateTime() {
   // const date = new Date();
   // const currentDateTime = date.toLocaleString();
   // document.querySelector('#currentDateTime').textContent = currentDateTime;
// }
// setInterval(updateDateTime, 1000)

//--- populate facts and prevent repeating facts ---//
function displayfact() {

    const facts = 
    [
        "All mantis shrimp species can be divided into ‘spearers’ or ‘smashers’, based on the types of claws they have and tactics they use to kill the prey.",
        "Mantis shrimp smashers can punch at same velocity as a gunshot from a .22 caliber rifle.",
        "Their punch is so fast it results in ‘cavitation’ bubbles. This is a super heated bubble and small flash of light, which for split seconds also generates temperates of 4,400c (which is nearly as hot as the sun) in the surrounding water.",
        "The mantis shrimp has 12-16 different colour photoreceptors for colour analysis in their retinas. Three times more than a human."
    ]
    const random = Math.floor(Math.random() * facts.length)

    let randomFact = (random, facts[random]);

    document.querySelector('#mantisfacts').textContent = randomFact
}

setInterval(displayfact, 5000)