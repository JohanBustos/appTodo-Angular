import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import {TodoService } from './../services/todo.service';
@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  task: string 
  descr:string
  idtask:string
  
  constructor(private _serviceTodo:TodoService,private rutaActiva: ActivatedRoute,private router: Router) {
    this.idtask = rutaActiva.snapshot.params.task
    this.task=this._serviceTodo.getOneTodo(this.idtask)["title"]
    this.descr=this._serviceTodo.getOneTodo(this.idtask)["descr"]
   }

  ngOnInit() {
  }
  finalizar(){
    this._serviceTodo.getAddTaskEnd()
    this._serviceTodo.deleteTodo(this.idtask)
    this.router.navigateByUrl("/");
  }

}
