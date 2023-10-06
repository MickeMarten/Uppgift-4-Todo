//Saved variables from HTML
const userInput = document.querySelector("#input");
const inputbtn = document.querySelector("#addTaskBtn");
const warningText = document.querySelector("p");
const ulList = document.querySelector("ul");
const counter = document.querySelector("small");
const clearAllBtn = document.querySelector("#clearAllBtn");
// JavaScript variables
let countedTasks = 0;
// Shows tasks done, "Small-html"
counter.innerText = `Tasks done: ${countedTasks}`;

// Arrays
const taskArray = [];

// Event when "Add button is pushed"
inputbtn.addEventListener("click", function () {
  const userInfo = userInput.value;
// if user input is 0 letters
  if (userInfo.length == 0) {
    warningText.innerText = "You need to add a task!";
    return;
  } else {
    warningText.innerText = "";
  }
// Saves user input in object with unique ID 
  const newTask = {
    title: userInfo,
    id: Date.now(),
  };
// Pushed user input and object into array
  taskArray.push(userInfo);

  // Creates new html elements for user input.
  const taskItem = document.createElement("li");
  ulList.appendChild(taskItem);

  const spanTag = document.createElement("span");
  spanTag.classList.add("spanTag");
  spanTag.innerText = userInfo;
  taskItem.appendChild(spanTag);

  //Creates Trashcan icon for user to delete specific task
  const trashCan = document.createElement("span");
  trashCan.innerHTML = "&#128465;";
  trashCan.setAttribute("class", "trashCan");
  taskItem.appendChild(trashCan);

  
  // lets user cross over completed tasks. Gets css/HTML element.
  spanTag.addEventListener("click", function () {
    if (taskItem.getAttribute("class") == "completed") {
      taskItem.setAttribute("class", "");
      // Removes number to "small" counter
      countedTasks--;
    } else {
      taskItem.setAttribute("class", "completed");
// adds number to "small" counter
      countedTasks++;
    }
    counter.innerText = `tasks done: ${countedTasks}`;
  });

  // Button that clears all tasks and resets counter to 0 and clears array.
  clearAllBtn.addEventListener("click", function () {
    taskArray.length = 0;
    countedTasks = 0;
    counter.innerText = `tasks done: ${countedTasks}`;
    taskItem.remove();
  });

  // Trashcan works. USer can remove specific tasks, also removes task from Array.
  trashCan.addEventListener("click", function () {
    if (taskItem.getAttribute("class") == "completed") {
      countedTasks--;
    }
    counter.innerText = `tasks done: ${countedTasks}`;
    let removeText = taskItem.firstChild.firstChild.textContent;
    let indexToRemove = taskArray.indexOf(removeText);
    taskArray.splice(indexToRemove, 1);

    taskItem.remove();
  });

  // restores input field to 0.
  userInput.value = "";
});
