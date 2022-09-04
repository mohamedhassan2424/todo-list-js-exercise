// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title,descriptions) {
  const task = {
    title:title,
    descriptions: descriptions,
    complete: false,
    logState: function(){
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markCompleted: function(){
      this.complete = true;
    }
  };

  /*taskTitles.push(title);
  taskDescriptions.push(descriptions);
  taskComplete.push(false);*/
return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// Print the state of a task to the console in a nice readable way
/*function logTaskState(task) {
  //const title = taskTitles[taskIndex];
  //const complete = taskComplete[taskIndex];
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}
function completeTask(task) {
  task.complete = true;
}*/


// DRIVER CODE BELOW

//newTask("Clean Cat Litter"); // task 0
//newTask("Do Laundry"); // task 1

const task1=newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2=newTask("Do Laundry", "😨");
const tasks=[task1,task2];


task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
task1.title;
task1.markCompleted();
//console.log(tasks)