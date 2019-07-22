import { Component, OnInit } from '@angular/core';
import {TodoService} from './../services/todo.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todo : any = []
  taskEnd: number
  constructor(private _serviTodo:TodoService) { 
    this.taskEnd = _serviTodo.getCountTask()
  }

  ngOnInit() {
    this._serviTodo.getTodo().subscribe(
      (data)=>{
        console.log("data",data);
        
        this.todo = data
      }
    )
  }

  addtask(task:any ,descr:any){
 
    let title = task.value
    let descrip = descr.value
    this._serviTodo.addTodo(task.value,descr.value).subscribe(
      (data)=>{
        console.log("Se inserto la nueva tarea",data);
     this.todo.push(
       data
       )
      }
      ,
      (err)=>{
        console.log("Error",err);
        
      }
    )
     task.value="" 
     descr.value=""
    return false
  }

  deleteTask(idTaskToDelete:string){
    console.log("idDelete",idTaskToDelete);
    
    let id = idTaskToDelete
    this._serviTodo.deleteTodo(id).subscribe((result)=>{
      let indexdelete = this.todo.findIndex(element=> element._id === id)
      indexdelete>=0 ?  this.todo.splice(indexdelete,1) : false
    })
 
  }



}
