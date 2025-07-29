import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { cn } from "../utils/helpers";

const StatsDashboard = () => {
  const [activeData, setActiveData] = useState("fatigue");

  const fatigueData = [
    { name: "Mon", level: 30 },
    { name: "Tue", level: 45 },
    { name: "Wed", level: 60 },
    { name: "Thu", level: 50 },
    { name: "Fri", level: 75 },
    { name: "Sat", level: 85 },
    { name: "Sun", level: 20 },
  ];

  const alertsData = [
    { name: "Jan", count: 2 },
    { name: "Feb", count: 1 },
    { name: "Mar", count: 3 },
    { name: "Apr", count: 0 },
    { name: "May", count: 2 },
    { name: "Jun", count: 1 },
    { name: "Jul", count: 4 },
  ];

  const data = activeData === "fatigue" ? fatigueData : alertsData;
  const dataKey = activeData === "fatigue" ? "level" : "count";

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className='bg-gray-700 text-white p-2 rounded-md border border-gray-600'>
          <p className='label'>{`${label} : ${payload[0].value}${
            activeData === "fatigue" ? "%" : ""
          }`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id='dashboard' className='bg-black text-white py-20 md:py-32'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight'>
            The STOMPVEN Data Hub
          </h2>
          <p className='mt-4 text-lg text-gray-400 max-w-3xl mx-auto'>
            Visualizing safety, one data point at a time. Proactive insights for
            peak performance and prevention.
          </p>
        </div>
        <div className='grid lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2 bg-gray-900 p-6 rounded-2xl border border-gray-800'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-xl font-bold'>
                {activeData === "fatigue"
                  ? "Team Fatigue Levels"
                  : "Proactive Alerts Issued"}
              </h3>
              <div className='flex gap-2 bg-gray-800 p-1 rounded-lg'>
                <button
                  onClick={() => setActiveData("fatigue")}
                  className={cn(
                    "px-3 py-1 text-sm font-semibold rounded-md transition-colors",
                    activeData === "fatigue"
                      ? "bg-cyan-500 text-black"
                      : "text-gray-400 hover:bg-gray-700"
                  )}
                >
                  Fatigue
                </button>
                <button
                  onClick={() => setActiveData("alerts")}
                  className={cn(
                    "px-3 py-1 text-sm font-semibold rounded-md transition-colors",
                    activeData === "alerts"
                      ? "bg-cyan-500 text-black"
                      : "text-gray-400 hover:bg-gray-700"
                  )}
                >
                  Alerts
                </button>
              </div>
            </div>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 20, left: -10, bottom: 5 }}
                >
                  {/* NEW: Add SVG definitions for the gradient */}
                  <defs>
                    <linearGradient
                      id='fatigueGradient'
                      x1='0'
                      y1='0'
                      x2='0'
                      y2='1'
                    >
                      <stop offset='5%' stopColor='#22d3ee' stopOpacity={0.8} />
                      <stop
                        offset='95%'
                        stopColor='#22d3ee'
                        stopOpacity={0.2}
                      />
                    </linearGradient>
                    <linearGradient
                      id='alertsGradient'
                      x1='0'
                      y1='0'
                      x2='0'
                      y2='1'
                    >
                      <stop offset='5%' stopColor='#f87171' stopOpacity={0.9} />
                      <stop
                        offset='95%'
                        stopColor='#b91c1c'
                        stopOpacity={0.4}
                      />
                    </linearGradient>
                  </defs>

                  <XAxis
                    dataKey='name'
                    stroke='#888888'
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke='#888888'
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: "rgba(100, 116, 139, 0.1)" }}
                  />
                  {/* UPDATED: Bar component now uses the gradient */}
                  <Bar
                    dataKey={dataKey}
                    radius={[4, 4, 0, 0]}
                    fill={
                      activeData === "fatigue"
                        ? "url(#fatigueGradient)"
                        : "url(#alertsGradient)"
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className='space-y-8'>
            <div className='bg-gray-900 p-6 rounded-2xl border border-gray-800'>
              <h4 className='text-gray-400 text-sm font-semibold'>
                Avg. Response Time
              </h4>
              <p className='text-4xl font-bold text-cyan-400 mt-2'>18.4s</p>
              <p className='text-sm text-gray-500'>
                From alert to on-field staff acknowledgement.
              </p>
            </div>
            <div className='bg-gray-900 p-6 rounded-2xl border border-gray-800'>
              <h4 className='text-gray-400 text-sm font-semibold'>
                Incidents Prevented
              </h4>
              <p className='text-4xl font-bold text-green-400 mt-2'>12</p>
              <p className='text-sm text-gray-500'>
                High-risk events flagged in the last 6 months.
              </p>
            </div>
            <div className='bg-gray-900 p-6 rounded-2xl border border-gray-800'>
              <h4 className='text-gray-400 text-sm font-semibold'>
                Active Teams
              </h4>
              <p className='text-4xl font-bold text-white mt-2'>86</p>
              <p className='text-sm text-gray-500'>
                Currently protected by the STOMPVEN system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;
