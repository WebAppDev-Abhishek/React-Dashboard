import { MetricCard } from './components/MetricCard';
import { MainChart } from './components/MainChart';
import { SidebarStats } from './components/SidebarStats';
import { ActivitySection } from './components/ActivitySection';
import { UserTable } from './components/UserTable';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';

const totalUsersData = [
  { name: 'Kickstart', value: 300, color: '#a855f7' },
  { name: 'Fitstart', value: 175, color: '#f59e0b' },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fc] p-4 md:p-6 lg:p-8 font-sans text-gray-900">
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1600px] mx-auto grid grid-cols-12 gap-6"
      >
        {/* Left Section (Stats & Main Chart) */}
        <section className="col-span-12 lg:col-span-9 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Total Users Donut */}
            <div className="md:col-span-3 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="relative w-24 h-24 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={totalUsersData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={40}
                      paddingAngle={0}
                      dataKey="value"
                      startAngle={90}
                      endAngle={-270}
                    >
                      {totalUsersData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-xs font-bold text-gray-800">475</span>
                </div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-gray-500 truncate">Total Users</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0"></div>
                  <span className="text-[10px] text-gray-400 font-medium">Kickstart</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></div>
                  <span className="text-[10px] text-gray-400 font-medium">Fitstart</span>
                </div>
              </div>
            </div>

            {/* Small Metric Cards Grid */}
            <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <MetricCard title="Kickstart Users" value="123" change="+23" variant="orange" />
              <MetricCard title="Restricted Users" value="123" change="+23" variant="purple" borderBottom />
              <MetricCard title="Paid and pending" value="123" change="+23" variant="cyan" />
              <MetricCard title="Fitstart Users" value="123" change="+23" variant="purple" />
              <MetricCard title="Unrestricted Users" value="123" change="-23" variant="orange" borderBottom />
              <MetricCard title="Waiting room" value="123" change="-23" variant="blue" />
            </div>
          </div>

          {/* Main Chart */}
          <MainChart />
        </section>

        {/* Right Sidebar */}
        <aside className="col-span-12 lg:col-span-3">
          <SidebarStats />
        </aside>

        {/* Bottom Row */}
        <div className="col-span-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-3">
            <ActivitySection />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <UserTable />
          </div>
        </div>
      </motion.main>
    </div>
  );
}
