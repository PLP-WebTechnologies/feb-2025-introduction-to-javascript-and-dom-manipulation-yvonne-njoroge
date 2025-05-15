// Change the text content of a paragraph
function changeText() {
  const desc = document.getElementById("description");
  desc.textContent = "You clicked the button. The text is now updated!";
}

// Toggle a CSS style on the title
function toggleHighlight() {
  const title = document.getElementById("mainTitle");
  title.style.color = title.style.color === "blue" ? "black" : "blue";
  title.style.backgroundColor = title.style.backgroundColor === "yellow" ? "white" : "yellow";
}

// Add or remove a new element
function addOrRemoveElement() {
  const container = document.getElementById("messageContainer");
  const existing = document.getElementById("dynamicMessage");

  if (existing) {
    container.removeChild(existing);
  } else {
    const newMsg = document.createElement("p");
    newMsg.id = "dynamicMessage";
    newMsg.textContent = "This message was added with JavaScript!";
    container.appendChild(newMsg);
  }
}
