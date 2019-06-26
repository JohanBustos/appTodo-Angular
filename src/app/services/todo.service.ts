import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todoend : number = 0
  todo: {}[] = [
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

  getTodo(){
    return this.todo
  }

  addTodo(task:string,descr:string){
    this.todo.push(
      {
        "task":task,
        "descr":descr
      }
      )
  }

  deleteTodo(taskToDelete:string){
    let indexToDelete : number;
    this.todo.forEach((element,index)=>{
      if(taskToDelete == element["task"]){
        indexToDelete = index
      }
    })

    this.todo.splice(indexToDelete,1)
  }

  getOneTodo(task:string){
    let indexToGet : number;
    this.todo.forEach((element,index)=>{
      if(task == element["task"]){
        indexToGet = index
      }
    })
    return this.todo[indexToGet]
  }

  getCountTask(){
    return this.todoend
  }

  getAddTaskEnd(){
    this.todoend ++
  }

}
