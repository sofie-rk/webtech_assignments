/* Part 2 */
console.log('PART 2')
// Prints integers from 1 to 20 in developer console
for (let i = 1; i < 21; i++) {
    console.log(i)
}

/* Part 3 */
console.log('PART 3')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < numbers.length; i++) {
    // Loop from i=0 up to the length of the array numbers.
    // Will use i to access elements in the array numbers: numbers[i]

    if (numbers[i]%3 == 0 && numbers[i]%5 == 0) {
        // if divisible by both 3 and 5, log eplekake
        console.log("eplekake")
    } else if (numbers[i]%3 == 0) {
        // or if divisible by 3, log eple
        console.log("eple")
    } else if (numbers[i]%5 == 0) {
        // or if divisible by 5, log kake
        console.log("kake")
    } 
    // The assignment did not say anything about "else" 
}

/* Part 4 */

// returns the element that has the ID attribute "title"
let title = document.getElementById("title")
// Set the text content of the title
title.innerText = "Hello JavaScript"

/* Part 5 */

// Creating a variable since this element is used in many functions later
let magic = document.getElementById("magic")


function changeDisplay () {
    // div with id=magic is removed from the document flow
    magic.style.display = "none"
}

function changeVisibility () {
    // div with id=magic is invisible, but takes up place in the document flow
    magic.style.visibility = "hidden"
    magic.style.display = "block"
    
}

function reset () {
    // The defualt values, visibility: visible, display: block
    magic.style.visibility = "visible"
    magic.style.display = "block"

}

/* Part 6 */
const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'Java',
    'AJAX',
    'JSON',
    'React',
    'Angular',
    'Bootstrap',
    'Node.js'
];

for (let i = 0; i < technologies.length; i++) {
    // looping through all the elements in technologies
    var li = document.createElement("LI")                   // create <li> node
    var text = document.createTextNode(technologies[i])     // create text node with text from technologies-array
    li.appendChild(text)                                    // append the text to <li>
    document.getElementById("tech").appendChild(li)       // append <li> to <ul> with id="tech"
    // Now, a new <li> is added to the <ul> (list)
}



