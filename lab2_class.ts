import {Tasks} from "./interface_lab2";

class myClass implements Tasks
{
    tasks: Array<string> = [];

    addTask(task: string): number
    {
        //let s: string = task;

        this.tasks.push(task);

        console.log("Task item " + task + " pushed in to array!\n");
    
        let count: number = this.tasks.length;

        return count;
    }//addTask

    listAllTasks()
    {
        this.tasks.forEach(function(task){
            console.log(task);
        });
    }//listAll

    deleteTask(task: string): number
    {
        //let remove: string = task;

        for(let i = 0; i < this.tasks.length; i++)
        {
            if(task == this.tasks[i])
            {
                this.tasks.splice(i, 1);
            }
        }

        console.log("Item deleted from task array");

        return this.tasks.length;
    }//delete
}//class


let newClass = new myClass();

//newClass.addTask("Hello");

//newClass.listAllTasks();

//newClass.deleteTask("Hello");

console.log("Number of items: ", newClass.addTask("first task"));

console.log("Number of items: ", newClass.addTask("second task"));

newClass.listAllTasks();

console.log("Number of items: ", newClass.deleteTask("second task"));

newClass.listAllTasks();
