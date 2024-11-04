import React, { ReactNode } from 'react';

interface LinkProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
}

export function Link({ icon, label, active }: LinkProps) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-[#4fd1c5]/10 text-[#4fd1c5]'
          : 'hover:bg-gray-800/50 text-gray-400'
      }`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}