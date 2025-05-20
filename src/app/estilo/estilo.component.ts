import { Component, Input } from '@angular/core';
import { Project } from '../models/model/model.component'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-estilo',
  imports: [CommonModule],
  templateUrl: './estilo.component.html',
  styleUrl: './estilo.component.css'
})
export class EstiloComponent {

  

@Input() project!: Project;

  getStatusColor(status: string): string {
    switch (status) {
      case 'En progreso':
        return 'bg-primary';
      case 'Finalizado':
        return 'bg-success';
      case 'Atrasado':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }

  getProgressColor(progress: number, isLate: boolean): string {
    if (isLate) return 'bg-danger';
    if (progress === 100) return 'bg-success';
    return 'bg-primary';
  }
}
