// src/app/services/project.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../../models/model/model.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      name: "Rediseño de sitio web",
      client: "TechCorp",
      status: "En progreso",
      progress: 65,
      priority: "Alta",
      dueDate: "2023-06-15",
      isLate: false,
    },
    {
      id: 2,
      name: "Aplicación móvil",
      client: "HealthPlus",
      status: "Atrasado",
      progress: 40,
      priority: "Alta",
      dueDate: "2023-05-30",
      isLate: true,
    },
    {
      id: 3,
      name: "Campaña de marketing",
      client: "EcoFriendly",
      status: "Finalizado",
      progress: 100,
      priority: "Media",
      dueDate: "2023-05-20",
      isLate: false,
    },
    {
      id: 4,
      name: "Integración de API",
      client: "FinTech",
      status: "En progreso",
      progress: 30,
      priority: "Baja",
      dueDate: "2023-07-10",
      isLate: false,
    },
    {
      id: 5,
      name: "Diseño de logo",
      client: "StartupX",
      status: "Finalizado",
      progress: 100,
      priority: "Media",
      dueDate: "2023-05-15",
      isLate: false,
    },
    {
      id: 6,
      name: "Desarrollo de e-commerce",
      client: "RetailShop",
      status: "Atrasado",
      progress: 75,
      priority: "Alta",
      dueDate: "2023-05-25",
      isLate: true,
    }
  ];

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getClients(): string[] {
    return [...new Set(this.projects.map(project => project.client))];
  }
}