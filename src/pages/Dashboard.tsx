import React from 'react';
import { StatCard } from '../components/StatCard';
import { PopularTable } from '../components/PopularTable';
import { BookOpen, Calendar, Building2, Users } from 'lucide-react';

export function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Inicio</h1>
        <p className="text-gray-400">
          Bienvenido al sistema
          <br />
          un sistema enfocado en la gestión total
        </p>
        <p className="text-gray-600 text-sm mt-4">Administración prolongada.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<BookOpen size={24} />}
          value={10}
          label="Total Catedras"
          trend="+10% de asignaciones"
          trendColor="text-green-500"
        />
        <StatCard
          icon={<Calendar size={24} />}
          value={28}
          label="Eventos Cerca"
          trend="+8% mes entrante"
          trendColor="text-blue-500"
        />
        <StatCard
          icon={<Building2 size={24} />}
          value={9}
          label="Nuevos Bienes"
          trend="+25% mes entrante"
          trendColor="text-purple-500"
        />
        <StatCard
          icon={<Users size={24} />}
          value={12}
          label="Nuevos Alumnos"
          trend="+3% al mes"
          trendColor="text-cyan-500"
        />
      </div>

      <PopularTable />
    </div>
  );
}