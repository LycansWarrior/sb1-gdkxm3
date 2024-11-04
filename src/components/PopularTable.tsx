import React from 'react';

interface PopularItem {
  id: string;
  name: string;
  popularity: number;
  percentage: number;
}

const items: PopularItem[] = [
  { id: '01', name: 'Cuatro', popularity: 80, percentage: 46 },
  { id: '02', name: 'Piano', popularity: 60, percentage: 17 },
  { id: '03', name: 'Coro Juvenil', popularity: 40, percentage: 19 },
  { id: '04', name: 'Contrabajo', popularity: 20, percentage: 25 },
];

export function PopularTable() {
  return (
    <div className="bg-[#1a1b1e] rounded-xl p-6">
      <h3 className="text-white text-lg font-semibold mb-4">Cátedras Populares</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <span className="text-gray-500 w-8">{item.id}</span>
            <span className="text-gray-300 flex-1">{item.name}</span>
            <div className="flex-1">
              <div className="h-2 bg-gray-800 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full"
                  style={{ width: `${item.popularity}%` }}
                />
              </div>
            </div>
            <span className="text-gray-400 w-16 text-right">{item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}