import { Component, OnInit } from '@angular/core';
import {TodoService} from './../services/todo.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todo = []
  taskEnd: number
  constructor(private _serviTodo:TodoService) { 
    this.todo = _serviTodo.getTodo()
    this.taskEnd = _serviTodo.getCountTask()
  }

  ngOnInit() {
  }

  addtask(task:any ,descr:any){
    // this.todo.push(
    //   {"task":task.value,
    //     "descr":descr.value}
    //   )
    this._serviTodo.addTodo(task.value,descr.value)
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
