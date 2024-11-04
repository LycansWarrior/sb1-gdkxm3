export interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
  status: 'Activo' | 'Inactivo';
}

export interface Course {
  id: number;
  name: string;
  instructor: string;
  students: number;
  schedule: string;
}