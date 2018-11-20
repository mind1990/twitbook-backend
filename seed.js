const db = require('./models');

const tasks = [
  {
    task: "task0",
    description: "desc0"
  },
  {
    task: "task1",
    description: "desc1"
  }
];
db.Todo.create( tasks, (err, newTask) => {
  if(err) {
    return console.log(err)
  }
  console.log("saved new task: ", newTask);
});