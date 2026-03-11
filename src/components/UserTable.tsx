import React from 'react';
import { Search, Filter, Plus, Edit2, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const users = [
  { id: 1, name: 'Asha Patel', initials: 'AP', ywId: 'YW-10001', email: 'asha@example.com', level: 'Silver', joined: '6/15/2024' },
  { id: 2, name: 'John Doe', initials: 'JD', ywId: 'YW-10004', email: 'john@example.com', level: 'Gold', joined: '12/11/2023' },
  { id: 3, name: 'Mira Singh', initials: 'MS', ywId: 'YW-10003', email: 'mira@example.com', level: 'Silver', joined: '1/20/2025' },
  { id: 4, name: 'Ravi Kumar', initials: 'RK', ywId: 'YW-10002', email: 'ravi@example.com', level: 'Bronze', joined: '9/1/2024' },
  { id: 5, name: 'Sahil Bejo', initials: 'SB', ywId: 'YW-10000', email: 'sahil@example.com', level: 'Gold', joined: '2/10/2024' },
];

export const UserTable: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="relative w-full md:w-96">
          <input 
            className="w-full pl-4 pr-10 py-2.5 border border-gray-100 rounded-xl bg-gray-50 text-sm focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all" 
            placeholder="Search name, YW ID or email" 
            type="text"
          />
          <Search className="w-5 h-5 absolute right-3 top-2.5 text-gray-300" />
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2.5 border border-gray-100 rounded-xl text-gray-500 hover:bg-gray-50 transition-colors">
            <Filter size={20} />
          </button>
          <button className="px-5 py-2.5 bg-purple-600 text-white rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-purple-700 shadow-md shadow-purple-200 transition-all active:scale-95">
            <Plus size={20} /> Create
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-xs font-bold text-gray-400 border-b border-gray-50">
              <th className="pb-4 px-2"># <span className="ml-1 text-[8px] opacity-50">▲▼</span></th>
              <th className="pb-4 px-2">Name <span className="ml-1 text-[8px] opacity-50">▲▼</span></th>
              <th className="pb-4 px-2">YW ID <span className="ml-1 text-[8px] opacity-50">▲▼</span></th>
              <th className="pb-4 px-2">Email <span className="ml-1 text-[8px] opacity-50">▲▼</span></th>
              <th className="pb-4 px-2">Level <span className="ml-1 text-[8px] opacity-50">▲▼</span></th>
              <th className="pb-4 px-2">Joined <span className="ml-1 text-[8px] opacity-50">▲▼</span></th>
              <th className="pb-4 px-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium text-gray-600">
            {users.map((user, idx) => (
              <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group">
                <td className="py-4 px-2 text-xs text-gray-300">{idx + 1}</td>
                <td className="py-4 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-600 group-hover:bg-purple-50 group-hover:text-purple-600 transition-colors">
                      {user.initials}
                    </div>
                    <span className="font-semibold text-gray-800">{user.name}</span>
                  </div>
                </td>
                <td className="py-4 px-2 text-gray-400">{user.ywId}</td>
                <td className="py-4 px-2 text-gray-400">{user.email}</td>
                <td className="py-4 px-2">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold ${
                    user.level === 'Gold' ? 'bg-amber-50 text-amber-600' : 
                    user.level === 'Silver' ? 'bg-slate-50 text-slate-600' : 
                    'bg-orange-50 text-orange-600'
                  }`}>
                    {user.level}
                  </span>
                </td>
                <td className="py-4 px-2 text-gray-400">{user.joined}</td>
                <td className="py-4 px-2">
                  <div className="flex gap-2">
                    <button className="p-1.5 text-gray-300 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all">
                      <Edit2 size={14} />
                    </button>
                    <button className="p-1.5 text-red-200 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="text-[10px] text-gray-400">
          <p className="font-medium">5 shown • 5 total</p>
          <p>Page 1 / 1</p>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <button className="w-8 h-8 bg-purple-600 text-white rounded-lg text-xs font-bold shadow-md shadow-purple-100">1</button>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
