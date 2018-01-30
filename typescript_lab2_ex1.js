"use strict";
var tasks = [];
var s1;
var s2;
function addTask(task) {
    //let s: string = task;
    tasks.push(task);
    console.log("Task item " + task + " pushed in to array!\n");
    var count = tasks.length;
    return count;
} //addTask
function listAllTasks() {
    tasks.forEach(function (task) {
        console.log(task);
    });
} //listAll
function deleteTask(task) {
    //let remove: string = task;
    for (var i = 0; i < tasks.length; i++) {
        if (task == tasks[i]) {
            tasks.splice(i, 1);
        }
    }
    console.log("Item deleted from task array");
    return tasks.length;
} //delete
s1 = "push task";
s2 = "push task";
addTask(s1);
console.log("Array length after insertion " + tasks.length + "\n");
listAllTasks();
deleteTask(s2);
console.log("\nArray length after deletion " + tasks.length + "\n");
