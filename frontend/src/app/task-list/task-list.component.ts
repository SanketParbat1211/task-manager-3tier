import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { title: '', description: '', status: 'pending' };
  errorMsg = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => (this.tasks = data),
      error: (err) => (this.errorMsg = 'Backend shi connect houn shakla nahi: ' + err.message),
    });
  }

  addTask(): void {
    if (!this.newTask.title.trim()) return;
    this.taskService.createTask(this.newTask).subscribe({
      next: () => {
        this.newTask = { title: '', description: '', status: 'pending' };
        this.loadTasks();
      },
      error: (err) => (this.errorMsg = err.message),
    });
  }

  updateStatus(task: Task, status: Task['status']): void {
    if (!task._id) return;
    this.taskService.updateTask(task._id, { status }).subscribe({
      next: () => this.loadTasks(),
      error: (err) => (this.errorMsg = err.message),
    });
  }

  deleteTask(id?: string): void {
    if (!id) return;
    this.taskService.deleteTask(id).subscribe({
      next: () => this.loadTasks(),
      error: (err) => (this.errorMsg = err.message),
    });
  }
}
