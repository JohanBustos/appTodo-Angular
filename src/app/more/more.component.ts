import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import {TodoService } from './../services/todo.service';
import {Todo} from '../interfaces/todo.interfaces'
@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  title: string 
  descr:string
  idtask:string
  dateInit:Date
  
  constructor(private _serviceTodo:TodoService,private rutaActiva: ActivatedRoute,private router: Router) {
    this.idtask = rutaActiva.snapshot.params.task
   }

  ngOnInit() {
    this._serviceTodo.getOneTodo(this.idtask).subscribe((data:Todo)=>{
      this.title  =  data[0].title;
      this.descr = data[0].descr;
      this.dateInit =  new Date(data[0].dateInit);
    },(err)=>{
      alert("Problema con el servidor intente más tarde")
    })
  }
  finalizar(){
    // this._serviceTodo.getAddTaskEnd()
    // this._serviceTodo.deleteTodo(this.idtask)
    // this.router.navigateByUrl("/");
  }

}
