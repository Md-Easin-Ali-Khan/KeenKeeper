"use client";

import { useTimeline } from "@/context/TimelineContext";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const color = ["#7E35E1", "#244D3F", "#37A163"];

const StatsPage = () => {
  const { timeline } = useTimeline();

  const counts = {
    Text: 0,
    Call: 0,
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
  ].filter((item) => item.value > 0);

  return (
    <div className="px-4 xl:px-0">
      <div className="max-w-6xl mx-auto my-10 md:my-20">
        <h1 className="font-bold text-3xl md:text-5xl text-[#244D3F] mb-6 text-center md:text-left">
          Friendship Analytics
        </h1>

        <div className="bg-white rounded-lg shadow-sm w-full p-8">
          <h2 className="font-medium text-xl text-[#244D3F] text-center md:text-left">
            By Interaction Type
          </h2>

          <div className=" flex items-center justify-center">
            <div className="w-full h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #E9E9E9",
                    }}
                  />
                  <Pie
                    data={data}
                    dataKey="value"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                  >
                    {data.map((entry, index) => (
                      <Cell key={index} fill={color[index]} />
                    ))}
                  </Pie>

                  <Legend
                    verticalAlign="bottom"
                    align="center"
                    iconType="circle"
                    iconSize={10}
                    wrapperStyle={{
                      paddingTop: "30px",
                    }}
                    formatter={(value) => (
                      <span className="font-normal text-[14px] text-[#64748B] mr-6 text-center">
                        {value}
                      </span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
