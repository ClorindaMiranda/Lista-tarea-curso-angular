import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ListaTareasApp';

  ListTask:string[] = [];
  newTask :string = '';

  
  private _taskService = inject(TaskService);

  ngOnInit(): void {
    this.ListTask = this._taskService.getTasks();
  }

  addTask(){
    this._taskService.addTask(this.newTask);      //agregamos una nueva tarea
    this.newTask= '';                                //vaceamos el input
    this.ListTask = this._taskService.getTasks();   //volvemos a traer la lista de tarea
  }
  deleteTask(index: number){
    this._taskService.deleteTask(index);
    this.ListTask = this._taskService.getTasks();
  }
  }


