import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'motion/react';
import { Activity, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const AnimatedNumber = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 2,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return <span>{displayValue}</span>;
};

const LiveOrdersSection = () => {
  const [stats, setStats] = useState({ completed: 92, queue: 8, active: 4 });

  useEffect(() => {
    const getTimedStats = () => {
      const now = Date.now();
      // Use an 18-hour window for updates
      const period = 18 * 60 * 60 * 1000;
      const periodIndex = Math.floor(now / period);
      
      // Pseudo-random hash based on period index
      const hash = (seed: number) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
      };

      const completed = Math.floor(88 + hash(periodIndex) * 7); // 88-95%
      const queue = 100 - completed;
      const active = Math.floor(2 + hash(periodIndex * 777) * 5); // 2-7
      
      return { completed, queue, active };
    };

    setStats(getTimedStats());

    // Check every minute if we need to update (though it only changes every 18 hours)
    const interval = setInterval(() => {
      setStats(getTimedStats());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-3 py-1 bg-red-50 text-red-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Activity className="w-3 h-3 mr-2 animate-pulse" /> Live Activity
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-black mb-4">Real-Time Project Progress</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to transparency. Track our current workload and successfully delivered milestones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Active Orders Counter */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-950 text-white p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp className="w-24 h-24" />
            </div>
            <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-4">Active Orders</span>
            <div className="text-8xl font-black text-red-500 mb-4 tabular-nums">
              <AnimatedNumber value={stats.active} />
            </div>
            <p className="text-zinc-400 font-medium">Currently in production</p>
            <div className="mt-8 flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/32/32`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-red-500 flex items-center justify-center text-[10px] font-bold">
                +{stats.active}
              </div>
            </div>
          </motion.div>

          {/* Progress Bars */}
          <div className="lg:col-span-2 space-y-8">
            {/* Completed Orders */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-50 p-8 rounded-3xl border border-black/5"
            >
              <div className="flex justify-between items-end mb-4">
                <div>
                  <div className="flex items-center text-red-700 font-bold text-sm uppercase tracking-wider mb-1">
                    <CheckCircle className="w-4 h-4 mr-2" /> Successfully Completed
                  </div>
                  <h3 className="text-2xl font-bold text-black">Project Delivery Rate</h3>
                </div>
                <div className="text-4xl font-black text-black tabular-nums">
                  {stats.completed}%
                </div>
              </div>
              <div className="h-4 bg-zinc-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stats.completed}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-red-700 rounded-full relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse" />
                </motion.div>
              </div>
              <p className="mt-4 text-gray-500 text-sm">
                Based on total historical orders since inception.
              </p>
            </motion.div>

            {/* Queue Orders */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-50 p-8 rounded-3xl border border-black/5"
            >
              <div className="flex justify-between items-end mb-4">
                <div>
                  <div className="flex items-center text-amber-600 font-bold text-sm uppercase tracking-wider mb-1">
                    <Clock className="w-4 h-4 mr-2" /> Orders in Queue
                  </div>
                  <h3 className="text-2xl font-bold text-black">Upcoming Projects</h3>
                </div>
                <div className="text-4xl font-black text-black tabular-nums">
                  {stats.queue}%
                </div>
              </div>
              <div className="h-4 bg-zinc-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stats.queue}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-amber-500 rounded-full relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-pulse" />
                </motion.div>
              </div>
              <p className="mt-4 text-gray-500 text-sm">
                Scheduled for development in the next cycle.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveOrdersSection;
