"use client";

import { useTimeline } from "@/context/TimelineContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#7C3AED", "#1F4D3F", "#34A853"];

const StatsPage = () => {
  const { timeline } = useTimeline();

  const counts = {
    Call: 0,
    Text: 0,
    Video: 0,
  };

  timeline.forEach((item) => {
    if (counts[item.type] !== undefined) {
      counts[item.type]++;
    }
  });

  const data = [
    { name: "Text", value: counts.Text },
    { name: "Call", value: counts.Call },
    { name: "Video", value: counts.Video },
  ];

  return (
    <div className="max-w-6xl mx-auto my-10 md:my-20 px-4 xl:px-0">
      <h1 className="text-[#244D3F] font-bold text-5xl mb-10 text-center md:text-left">
        Friendship Analytics
      </h1>

      <div className="bg-white rounded-lg shadow-sm p-6 flex justify-center">
        <h2>By Interaction Type</h2>

        <div className="w-[300px] h-[300px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                cornerRadius={10}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Legend verticalAlign="bottom" align="center" iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
