import React from 'react';
import { Bell, ChevronDown } from 'lucide-react';

export function Header() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Buscar aquí..."
          className="w-96 px-4 py-2 rounded-lg bg-[#1a1b1e] text-gray-300 border border-gray-700 focus:outline-none focus:border-[#4fd1c5]"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-white">
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-2">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <ChevronDown size={20} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}