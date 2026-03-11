import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { RefreshCw, MoreHorizontal } from 'lucide-react';

const data = [
  { name: 'Restricted', value: 23 },
  { name: 'Other', value: 77 },
];

const COLORS = ['#3b82f6', '#e2e8f0'];

const users = [
  { id: 1, name: 'Narendra Mahto', date: '11 Dec 2025 12:21 am', phone: '9876543210' },
  { id: 2, name: 'Narendra Mahto', date: '11 Dec 2025 12:21 am', phone: '9876543210' },
  { id: 3, name: 'Narendra Mahto', date: '11 Dec 2025 12:21 am', phone: '9876543210' },
  { id: 4, name: 'Narendra Mahto', date: '11 Dec 2025 12:21 am', phone: '9876543210' },
];

export const SidebarStats: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top Gauges */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex justify-around">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#fecaca" strokeDasharray="100, 100" strokeWidth="2" />
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#ef4444" strokeDasharray="90, 100" strokeWidth="3" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold">90%</span>
            </div>
          </div>
          <span className="text-xs font-medium text-gray-500 mt-2 block">Conversion rate</span>
        </div>
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#dcfce7" strokeDasharray="100, 100" strokeWidth="2" />
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#22c55e" strokeDasharray="90, 100" strokeWidth="3" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold">90%</span>
            </div>
          </div>
          <span className="text-xs font-medium text-gray-500 mt-2 block">Bounce rate</span>
        </div>
      </div>

      {/* Restricted Users */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-sm font-bold text-gray-800">Restricted Users</h3>
          <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={18} /></button>
        </div>
        <p className="text-[10px] text-gray-400 mb-6 flex items-center gap-1">
          Last updated 5 mins ago 
          <RefreshCw size={10} className="text-cyan-500" />
        </p>
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-4xl font-bold text-cyan-500">123</span>
            <span className="block text-sm font-semibold text-gray-700">Users</span>
          </div>
          <div className="relative w-24 h-24">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={40}
                  paddingAngle={0}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-700">23%</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                  NM
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">{user.name}</p>
                  <p className="text-[10px] text-gray-400">{user.date}</p>
                </div>
              </div>
              <span className="text-xs font-bold text-gray-800">{user.phone}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
