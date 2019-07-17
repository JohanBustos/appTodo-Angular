import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todoend : number = 0
  base = "http://localhost:3000/"
  constructor(private http:HttpClient) { }

   getTodo(){
    //return this.todo
     return this.http.get('http://localhost:3000/todo')   
     
  }

  addTodo(task:string,descr:string):any{
    // this.todo.push(
    //   {
    //     "task":task,
    //     "descr":descr
    //   }
    //   )

     return this.http.post('http://localhost:3000/todo',{title:task,descr:descr})
    //  .subscribe((val)=>{
    //   console.log("Insercion completa");
    //   return true
    // },
    // (error)=>{
    //   console.log("Error",error);
    //   return false
    // })
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

  // getOneTodo(task:string){
  //   // let indexToGet : number;
  //   // this.todo.forEach((element,index)=>{
  //   //   if(task == element["task"]){
  //   //     indexToGet = index
  //   //   }
  //   // })
  //   // return this.todo[indexToGet]

  //   this.http.get(``)

  // }

  getCountTask(){
    return this.todoend
  }

  getAddTaskEnd(){
    this.todoend ++
  }

}
