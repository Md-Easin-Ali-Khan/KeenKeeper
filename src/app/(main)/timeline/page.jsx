'use client'

import { useTimeline } from "@/context/TimelineContext";
import { useState } from "react";

const TimelinePage = () => {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("All");

  const filteredTimeline = timeline.filter(item => {
    if (filter === "All") return true;
    return item.type.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div>

      <div className="relative max-w-6xl mx-auto my-10 md:my-20 px-4 xl:px-0">

        <h1 className="text-[#244D3F] font-bold text-5xl mb-6 text-center md:text-left">Timeline</h1>
        <div className="relative w-full md:max-w-80 mb-6  bg-[#F8FAFC] border-2 border-[#E9E9E9] rounded-lg">
          <select className="font-normal text-lg text-[#64748B] appearance-none w-full p-4"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Timeline list */}
        <div className="flex flex-col gap-6">
          {filteredTimeline.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm py-[21.5px] px-4">
              <div className="flex gap-4 items-center">

                <div>
                  <img className="w-10 h-10"
                    src={
                      item.type === "Call" ? "/phone.png" :
                        item.type === "Text" ? "/massage.png" :
                          "/call.png"
                    }
                    alt={item.title} />
                </div>

                <div className="font-normal space-y-1 text-lg text-[#64748B]">
                  <p>
                    {item.title}
                  </p>

                  <p className="text-[16px]">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default TimelinePage;