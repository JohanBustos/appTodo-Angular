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
  
    
    this.taskEnd = this._serviTodo.getCountTask()
  }

  ngOnInit() {
    this._serviTodo.getTodo().subscribe(data => {
      this.todo = data
    }) 
  }

  addtask(task:any ,descr:any){

    let status = this._serviTodo.addTodo(task.value,descr.value).subscribe((result)=>{
      console.log("Resukt",result);
      
      this.todo.push(
        {"title":task.value,
          "descr":descr.value}
        )
        task.value="" 
        descr.value=""
    },(err)=>{
        alert('No se pudo registrar la tarea, por favor intente más tarde')
    })


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
