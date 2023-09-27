const userInput = document.querySelector("#input");
const inputbtn = document.querySelector("#addTaskBtn");
const warningText = document.querySelector("p");
const ulList = document.querySelector("ul");
const counter = document.querySelector("small");
const clearAllBtn = document.querySelector("#clearAllBtn");

const taskArray = [];
let countedTasks = 0;
counter.innerText = `Tasks done: ${countedTasks}`;

inputbtn.addEventListener("click", function button12() {
  const userInfo = userInput.value;

  if (userInfo.length == 0) {
    warningText.innerText = "Write something";
    return;
  } 
  else {
    warningText.innerText = "";
  }


  newTask = {
    title: userInfo,
    id: Date.now(),
  };

  taskArray.push(newTask);

 

  const taskItem = document.createElement("li");
  ulList.appendChild(taskItem);

  const spanTag = document.createElement("span");
  spanTag.innerText = userInfo;
  taskItem.appendChild(spanTag);

  spanTag.addEventListener("click", function () {
    if (taskItem.getAttribute("class") == "completed") {
      taskItem.setAttribute("class", "");
      countedTasks--;
    } else {
      taskItem.setAttribute("class", "completed");
      countedTasks++;
    }
    counter.innerText = `tasks done: ${countedTasks}`;
  });

  userInput.value = "";
});

