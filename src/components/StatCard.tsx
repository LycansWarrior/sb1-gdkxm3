import React, { ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
  trend: string;
  trendColor: string;
}

export function StatCard({ icon, value, label, trend, trendColor }: StatCardProps) {
  return (
    <div className="bg-[#1a1b1e] p-6 rounded-xl">
      <div className="text-gray-400 mb-4">{icon}</div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
      <div className={`text-sm mt-2 ${trendColor}`}>{trend}</div>
    </div>
  );
}