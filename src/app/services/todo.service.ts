import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  base:string = "http://localhost:3000"
  todoend : number = 0

  constructor(private http:HttpClient) { }

  getTodo(){
    
    return this.http.get("http://localhost:3000/todo")
  }

  addTodo(task:string,descr:string){
      return this.http.post("http://localhost:3000/todo",{
        "title":task,
        "descrip":descr
      })
    }
    
    getOneTodo(idTask:string){
      return this.http.get(`${this.base}/todo/${idTask}`)
    }

    deleteTodo(idTask:string){
      return this.http.delete(`${this.base}/todo/${idTask}`)
    }

    // deleteTodo(taskToDelete:string){
  //   let indexToDelete : number;
  //   this.todo.forEach((element,index)=>{
  //     if(taskToDelete == element["task"]){
  //       indexToDelete = index
  //     }
  //   })

  //   this.todo.splice(indexToDelete,1)
  // }


  getCountTask(){
    return 0
  }

  // getAddTaskEnd(){
  //   this.todoend ++
  // }

}
