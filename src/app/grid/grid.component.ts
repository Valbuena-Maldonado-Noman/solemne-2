import { Component } from '@angular/core';
import { EstiloComponent } from '../estilo/estilo.component';
import { Observable, of } from 'rxjs';
import { Project } from '../models/model/model.component'; 
import { ProjectService } from '../services/projectservice/projectservice.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grid',
  imports: [CommonModule, FormsModule, EstiloComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})



export class GridComponent {
  
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  searchTerm: string = '';
  activeTab: string = 'todos';
  selectedClient: string = '';
  selectedPriority: string = '';
  clients: string[] = [];
  
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
      this.filteredProjects = projects;
    });
    
    this.clients = this.projectService.getClients();
  }

  filterProjects(): void {
    // Filtrar por búsqueda
    let result = this.projects.filter(project => 
      project.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    
    // Filtrar por estado
    if (this.activeTab !== 'todos') {
      let statusFilter: string;
      switch (this.activeTab) {
        case 'activos':
          statusFilter = 'En progreso';
          break;
        case 'entregados':
          statusFilter = 'Finalizado';
          break;
        case 'atrasados':
          statusFilter = 'Atrasado';
          break;
        default:
          statusFilter = '';
      }
      
      if (statusFilter) {
        result = result.filter(project => project.status === statusFilter);
      }
    }
    
    // Filtrar por cliente
    if (this.selectedClient) {
      result = result.filter(project => project.client === this.selectedClient);
    }
    
    // Filtrar por prioridad
    if (this.selectedPriority) {
      result = result.filter(project => project.priority === this.selectedPriority);
    }
    
    this.filteredProjects = result;
  }

  onSearch(event: any): void {
    this.searchTerm = event.target.value;
    this.filterProjects();
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.filterProjects();
  }

  onClientChange(client: string): void {
    this.selectedClient = client;
    this.filterProjects();
  }

  onPriorityChange(priority: string): void {
    this.selectedPriority = priority;
    this.filterProjects();
  }
}