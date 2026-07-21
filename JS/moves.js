const box = document.getElementById("box");

let x = 0;
let y = 0;

// Move with buttons
function moveRight() {
    x += 20;
    box.style.left = x + "px";
}

function moveLeft() {
    x -= 20;
    box.style.left = x + "px";
}

function moveTop() {
    y -= 20;
    box.style.top = y + "px";
}

function moveBottom() {
    y += 20;
    box.style.top = y + "px";
}

// Move with arrow keys
document.addEventListener("keydown", (event) => {

    if (event.key === "ArrowUp") y -= 30;
    if (event.key === "ArrowDown") y += 30;
    if (event.key === "ArrowLeft") x -= 30;
    if (event.key === "ArrowRight") x += 30;

    box.style.left = x + "px";
    box.style.top = y + "px";
});

// List of colors
const colors = [
    "red", "green", "blue", "yellow", "orange",
    "purple", "pink", "cyan", "brown", "black",
    "gray", "gold", "silver", "violet", "indigo",
    "lime", "teal", "navy", "maroon", "olive",
    "coral", "crimson", "khaki", "lavender", "magenta",
    "turquoise", "salmon", "chocolate", "tomato",
    "plum", "orchid", "beige", "aqua", "aquamarine",
    "bisque", "cadetblue", "chartreuse", "darkblue",
    "darkgreen", "darkorange", "deeppink",
    "dodgerblue", "firebrick", "forestgreen",
    "hotpink", "lightblue", "lightgreen",
    "lightpink", "royalblue", "springgreen"
];

// Function to get a random color
function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Change to a random color on single click
box.addEventListener("click", () => {
    box.style.backgroundColor = randomColor();
});

// Change to another random color on double click
box.addEventListener("dblclick", () => {
    box.style.backgroundColor = randomColor();
});