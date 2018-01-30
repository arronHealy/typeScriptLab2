"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myClass = /** @class */ (function () {
    function myClass() {
        this.tasks = [];
    }
    myClass.prototype.addTask = function (task) {
        //let s: string = task;
        this.tasks.push(task);
        console.log("Task item " + task + " pushed in to array!\n");
        var count = this.tasks.length;
        return count;
    }; //addTask
    myClass.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    }; //listAll
    myClass.prototype.deleteTask = function (task) {
        //let remove: string = task;
        for (var i = 0; i < this.tasks.length; i++) {
            if (task == this.tasks[i]) {
                this.tasks.splice(i, 1);
            }
        }
        console.log("Item deleted from task array");
        return this.tasks.length;
    }; //delete
    return myClass;
}()); //class
var newClass = new myClass();
//newClass.addTask("Hello");
//newClass.listAllTasks();
//newClass.deleteTask("Hello");
console.log("Number of items: ", newClass.addTask("first task"));
console.log("Number of items: ", newClass.addTask("second task"));
newClass.listAllTasks();
console.log("Number of items: ", newClass.deleteTask("second task"));
newClass.listAllTasks();
