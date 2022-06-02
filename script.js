const container = document.querySelector("#container");
container.style.textAlign = "center"

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red"
paragraph.style.color = "red"

const heading = document.createElement("h3");
heading.textContent = "I'm a blue h3!";
heading.style.color = "blue"

const newDIV = document.createElement("div")
newDIV.style.backgroundColor = "pink"
newDIV.style.border = ".1em solid black"
newDIV.style.textAlign = "center"


const newHeading = document.createElement("h1")
newHeading.textContent = "i'm in a div"

const newParagraph = document.createElement("p")
newParagraph.textContent = "ME TOO!"


newDIV.appendChild(newHeading);
newDIV.appendChild(newParagraph);

container.appendChild(newDIV);


container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(heading);
container.appendChild(newDIV);