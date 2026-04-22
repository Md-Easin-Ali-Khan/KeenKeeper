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
    <div className="">

      <div className="max-w-6xl mx-auto my-10 md:my-20">

        <h1 className="text-[#244D3F] font-bold text-5xl mb-6">Timeline</h1>
        <div className="mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className=""
          >
            <option value="All">All</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        {/* Timeline list */}
        <div className="flex flex-col gap-6">
          {filteredTimeline.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm py-[21.5px] px-4">
              <div className="flex gap-4 items-center">

                <div className="">
                  <img className="w-10 h-10"
                    src={
                      item.type === "Call" ? "/hand_shake.png" :
                        item.type === "Text" ? "/massage.png" :
                          "/call.png"
                    }
                    alt={item.title} />
                </div>

                <div className="font-normal text-lg text-[#64748B]">
                  <p className={
                    item.type === "Call" ? "font-medium text-xl text-[#244D3F]" :
                      item.type === "Text" ? "font-medium text-xl text-[#244D3F]" :
                        "font-medium text-xl text-[#244D3F]"
                  }>
                    {item.title}</p>
                  <p className="">
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