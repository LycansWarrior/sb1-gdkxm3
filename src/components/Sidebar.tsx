import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, BookOpen, Building2, Calendar, Settings, LogOut } from 'lucide-react';

function NavItem({ to, icon: Icon, label }: { to: string; icon: any; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
          isActive
            ? 'bg-[#4fd1c5]/10 text-[#4fd1c5]'
            : 'hover:bg-gray-800/50 text-gray-400'
        }`
      }
    >
      <Icon size={20} />
      <span>{label}</span>
    </NavLink>
  );
}

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#1a1b1e] text-gray-300 fixed left-0 top-0 flex flex-col">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        <nav className="space-y-2">
          <NavItem to="/dashboard" icon={Home} label="Inicio" />
          <NavItem to="/students" icon={User} label="Estudiantes" />
          <NavItem to="/courses" icon={BookOpen} label="Catedras" />
          <NavItem to="/buildings" icon={Building2} label="Bienes" />
          <NavItem to="/events" icon={Calendar} label="Eventos" />
        </nav>
      </div>
      
      <div className="mt-auto p-4 border-t border-gray-800">
        <nav className="space-y-2">
          <NavItem to="/settings" icon={Settings} label="Configuración" />
          <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors hover:bg-gray-800/50 text-gray-400">
            <LogOut size={20} />
            <span>Salir</span>
          </button>
        </nav>
      </div>
    </div>
  );
}