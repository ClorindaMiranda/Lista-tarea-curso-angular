import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private localStorageKey = 'lista de tareas';

  getTasks(): string []{
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];  //getitem para traerlo del localstore
  }

  addTask(task : string){
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }
  deleteTask(index: number){
    const tasks = this.getTasks();
    tasks.splice(index, 1);                                              //del indice solo sacaremos 1
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));   //seteamos en el local storage
  }
}
