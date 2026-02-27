console.log("JavaScript File is linked");

// Variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
let currrentDraggedElement = null;
const resetBtn = document.querySelector("#reset-btn");
const labelBox = document.querySelector("#label-box");


// Functions
function dragStart() {
    console.log("Started Dragging");
    // whatever the user is dragging, store it in currrentDraggedElement
    currrentDraggedElement = this;
}

function dragOver(e) {
    e.preventDefault();
    console.log("drag over called");
}

function dropped(e) {
    e.preventDefault();
    console.log("dropped");

    // Prevents a label from being dropped inside the target zone if it finds a label already inside it
    // Checks to see if the element using .this already has an element that has a class with label.
    // Yes = Exits the function with return
    // No = Continues to run the rest of the code 
    if(this.querySelector(".label")) {
        return;
    }

    //drop the piece
    this.appendChild(currrentDraggedElement);

    //reset the reference
    currrentDraggedElement = null;
}

function resetPuzzle() {
    console.log("Reset puzzle");
    // Returns labels found in a target zone back to their original location the label box
    // Runs a for each loop and looks for a label class in each zone
    // If a label is found then it will return it to its original location the label box

    targetZones.forEach(zone => {
        const foundLabel = zone.querySelector(".label");

    if(foundLabel) {
        labelBox.appendChild(foundLabel);
    }
})}


// Event Listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);
})

resetBtn.addEventListener("click", resetPuzzle);