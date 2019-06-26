import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todo = [
    {
      "task": "Tarea # 1",
      "descr": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      "task": "Tarea # 2",
      "descr": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      "task": "Tarea # 3",
      "descr": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      "task": "Tarea # 4",
      "descr": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      "task": "Tarea # 5",
      "descr": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
      "task": "Tarea # 6",
      "descr": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }

  ]
  constructor() { }

  ngOnInit() {
  }

  addtask(task:any ,descr:any){
    this.todo.push(
      {"task":task.value,
        "descr":descr.value}
      )
     task.value="" 
     descr.value=""
    return false
  }

  deleteTask(taskToDelete:string){
    let indexToDelete : number;
    this.todo.forEach((element,index)=>{
      if(taskToDelete == element.task){
        indexToDelete = index
      }
    })
    this.todo.splice(indexToDelete,1)
  }



}
