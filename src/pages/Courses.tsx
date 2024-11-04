import React, { useState, useEffect } from 'react';
import { Search, Plus, MoreVertical, Users } from 'lucide-react';
import { Modal } from '../components/Modal';
import { Course } from '../types';
import { INITIAL_COURSES } from '../data/mockData';

export function Courses() {
  const [courses, setCourses] = useState<Course[]>(INITIAL_COURSES);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    instructor: '',
    students: 0,
    schedule: '',
  });

  useEffect(() => {
    if (editingCourse) {
      setFormData(editingCourse);
    } else {
      setFormData({
        name: '',
        instructor: '',
        students: 0,
        schedule: '',
      });
    }
  }, [editingCourse]);

  const filteredCourses = courses.filter((course) =>
    Object.values(course).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCourse) {
      setCourses(courses.map((c) =>
        c.id === editingCourse.id ? { ...formData, id: c.id } : c
      ));
    } else {
      setCourses([...courses, { ...formData, id: courses.length + 1 }]);
    }
    setIsModalOpen(false);
    setEditingCourse(null);
  };

  const handleDelete = (id: number) => {
    if (confirm('¿Estás seguro de que deseas eliminar esta catedra?')) {
      setCourses(courses.filter((c) => c.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Catedras</h1>
        <button
          onClick={() => {
            setEditingCourse(null);
            setIsModalOpen(true);
          }}
          className="bg-[#4fd1c5] hover:bg-[#45b8ac] text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={20} />
          Nueva Catedra
        </button>
      </div>

      <div className="bg-[#1a1b1e] rounded-xl p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar catedra..."
              className="w-full pl-10 pr-4 py-2 bg-[#141517] border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-[#4fd1c5]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-[#141517] p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{course.name}</h3>
                <button className="p-1 hover:bg-gray-800 rounded">
                  <MoreVertical size={16} className="text-gray-400" />
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <Users size={16} />
                  <span>{course.instructor}</span>
                </div>
                <div className="text-gray-400">
                  {course.students} estudiantes
                </div>
                <div className="text-gray-400">
                  {course.schedule}
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <button
                  onClick={() => {
                    setEditingCourse(course);
                    setIsModalOpen(true);
                  }}
                  className="flex-1 py-2 px-3 bg-[#4fd1c5]/10 text-[#4fd1c5] rounded-lg hover:bg-[#4fd1c5]/20"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="flex-1 py-2 px-3 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingCourse(null);
        }}
        title={editingCourse ? 'Editar Catedra' : 'Nueva Catedra'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Nombre
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 bg-[#141517] border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-[#4fd1c5]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Instructor
            </label>
            <input
              type="text"
              value={formData.instructor}
              onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
              className="w-full px-3 py-2 bg-[#141517] border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-[#4fd1c5]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Número de Estudiantes
            </label>
            <input
              type="number"
              value={formData.students}
              onChange={(e) => setFormData({ ...formData, students: parseInt(e.target.value) })}
              className="w-full px-3 py-2 bg-[#141517] border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-[#4fd1c5]"
              required
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Horario
            </label>
            <input
              type="text"
              value={formData.schedule}
              onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
              className="w-full px-3 py-2 bg-[#141517] border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-[#4fd1c5]"
              required
              placeholder="Ej: Lun, Mie 15:00-17:00"
            />
          </div>
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(false);
                setEditingCourse(null);
              }}
              className="flex-1 px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-3 py-2 bg-[#4fd1c5] text-white rounded-lg hover:bg-[#45b8ac]"
            >
              {editingCourse ? 'Guardar' : 'Crear'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}