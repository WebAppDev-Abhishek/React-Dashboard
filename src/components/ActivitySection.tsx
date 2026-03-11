import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { MoreHorizontal, ChevronRight } from 'lucide-react';

const data = [
  { name: 'First day', value: 65, color: '#3b82f6' },
  { name: 'Second day', value: 20, color: '#06b6d4' },
  { name: 'Third day', value: 15, color: '#10b981' },
];

const users = [
  { id: 1, name: 'Narendra Mahto', phone: '9876543210' },
  { id: 2, name: 'Narendra Mahto', phone: '9876543210' },
  { id: 3, name: 'Narendra Mahto', phone: '9876543210' },
];

export const ActivitySection: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-base font-bold text-gray-800">Activity</h3>
        <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={20} /></button>
      </div>

      <div className="relative w-48 h-48 mx-auto mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        {/* Labels around chart */}
        <span className="absolute top-2 right-[-20px] text-[10px] font-bold text-gray-600">First day</span>
        <span className="absolute bottom-8 right-[-10px] text-[10px] font-bold text-gray-600">Second day</span>
        <span className="absolute top-10 left-[-15px] text-[10px] font-bold text-gray-600">Third day</span>
      </div>

      <div className="space-y-3 mb-6 flex-grow">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center font-bold text-gray-600">NM</div>
              <span className="font-medium text-gray-700">{user.name}</span>
            </div>
            <span className="text-gray-500 font-bold">{user.phone}</span>
            <button className="px-3 py-1 bg-purple-600 text-white rounded text-[8px] font-semibold hover:bg-purple-700 transition-colors">
              View Score
            </button>
          </div>
        ))}
      </div>

      <button className="w-full text-center text-xs text-gray-400 font-medium flex items-center justify-center gap-1 hover:text-gray-600 transition-colors">
        See more <ChevronRight size={14} />
      </button>
    </div>
  );
};
