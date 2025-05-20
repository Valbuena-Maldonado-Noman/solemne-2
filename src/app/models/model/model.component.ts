// src/app/models/project.model.ts
export interface Project {
  id: number;
  name: string;
  client: string;
  status: 'En progreso' | 'Finalizado' | 'Atrasado';
  progress: number;
  priority: 'Alta' | 'Media' | 'Baja';
  dueDate: string;
  isLate: boolean;
}