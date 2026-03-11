import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { name: 'Jan', kickstart: 0.5, fitstart: 1.2 },
  { name: 'Feb', kickstart: 0.8, fitstart: 0.5 },
  { name: 'Mar', kickstart: 0.6, fitstart: 2.4 },
  { name: 'Apr', kickstart: 0.7, fitstart: 0.8 },
  { name: 'May', kickstart: 1.5, fitstart: 2.4 },
  { name: 'Jun', kickstart: 2.4, fitstart: 1.3 },
  { name: 'Jul', kickstart: 0.5, fitstart: 1.0 },
  { name: 'Aug', kickstart: 0.8, fitstart: 0.9 },
];

export const MainChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-end mb-6">
        <div className="inline-flex bg-gray-100 rounded-lg p-1">
          <button className="px-6 py-2 bg-purple-600 text-white text-sm font-medium rounded-md shadow-sm">Month</button>
          <button className="px-6 py-2 text-gray-500 text-sm font-medium hover:text-gray-700">Week</button>
        </div>
      </div>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              dx={-10}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              iconType="circle"
              formatter={(value) => <span className="text-xs font-medium text-gray-600 uppercase">{value} users</span>}
            />
            <Line 
              type="monotone" 
              dataKey="kickstart" 
              stroke="#3b82f6" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#3b82f6' }} 
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="fitstart" 
              stroke="#a16207" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#a16207' }} 
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
