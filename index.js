// Write your code here!
const main = document.querySelector("main");
main.remove(main)

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Joy wanjiru is the champion"
 document.body.append(newHeader)
