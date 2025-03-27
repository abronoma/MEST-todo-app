//select Elements
const inputElement = document.getElementById("taskInput");
console.log(inputElement);
const buttonElement = document.getElementById("taskButton");
console.log(buttonElement);
const listElement = document.getElementById("taskList");
console.log(listElement);

const addTask = () => {
  //get what was typed as a value
  const task = inputElement.value;

  if (task === "") {
    alert("kindly add a task😂");
    return;
  }
  //get a way to add it to the task lists
  //create an li elements
  const liElements = document.createElement("li");
  //assign the value of the task to the li
  liElements.innerHTML = ` <P>${task}</P> <button>Delete❌<button>`;
  //append the li element to the ul or taskelements
  taskList.appendChild(liElements);
};

taskButton.addEventListener("click", addTask);
inputElement.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
