// Accessing elements in todo.html

const addBtn = document.getElementById("addBtn")
const tasksList = document.getElementById("tasks")
const inputField = document.getElementById("input_text")
const countTotal = document.getElementById("countTotal")
const countDone = document.getElementById("countDone")

// Empty list for storing 
var tasks = []

// Variables to count tasks and tasks checked
var numberOfTasks = 0;
var numberOfTasksDone = 0;



// When user writes a task in input field and clicks the "add" button, the task should
// be added to the empty list with a checkbox in front of it

function addTask() {

    // Increase the total number of tasks and use innerHTML to update total number of tasks
    numberOfTasks++
    countTotal.innerHTML = numberOfTasks

    // access value in input-field:
    var taskItem = document.getElementById("input_text").value


    // Using JavaScript Date object to get the time in milliseconds
    var now = new Date()
    // Adding text and date to an object, and adding the object to the list tasks
    const obj = {text: taskItem, date: now}
    tasks.push(obj)
    console.log(tasks)


    // When adding task to the list:
    // <li>-node: will be added to the <ul> tasksList
    // <input>-node of type="checkbox" and id=tasks.length (unique number)
    // <label>-node with for=id of the input. The <label> gets an unique id as well label+tasks.length.
    

    //create <li> node:
    var li = document.createElement("LI")

    // create <input> node. This input field will be of type="checkbox"
    var listElement = document.createElement("input")
    listElement.setAttribute('type', 'checkbox')
    listElement.setAttribute('id', tasks.length)

    // when checkbox is clicked, function updateChecked is triggered
    listElement.addEventListener('click', updateChecked)

    // create <label> node
    var listLabel = document.createElement("label")
    listLabel.setAttribute('id', "label"+tasks.length)

    // gives the label a "for"-value equal to the listElement's id
    listLabel.setAttribute('htmlfor', listElement.id)

    // Add input field value to label of the list item
    listLabel.appendChild(document.createTextNode(taskItem))

    // Add the input-element (checkbpx) and label (text) to the <li>-node
    li.appendChild(listElement)
    li.append(listLabel)


    // Insert the new <li>-node before the first <li>-node in tasksList
    tasksList.insertBefore(li, tasksList.firstChild)

    // Reset inputfield
    inputField.value = ""

    
     
}

// When a checkbox is checked, the number must be updated
// and the text following the checkbox must be lined through

function updateChecked(event) {
    
    // Access checkbox and label from the event
    var checkboxElem = document.getElementById(event.target.id)
    var labelElem = document.getElementById("label"+event.target.id)
    
    
    if (checkboxElem.checked == true) {
        numberOfTasksDone++
        labelElem.style.textDecoration = "line-through"
        
    } else if (checkboxElem.checked == false) {
        numberOfTasksDone--
        labelElem.style.textDecoration = "none"

    } else {
        numberOfTasksDone = 0
    }

    countDone.innerHTML = numberOfTasksDone

}

