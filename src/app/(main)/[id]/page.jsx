'use client'
import friends from "@/app/data/friends.json";
import { Archive, BellRing, Trash2, PhoneCall, Video, MessageSquareText } from "lucide-react";
import { notFound } from "next/navigation";
import { use } from "react";
import toast from "react-hot-toast";
import { useTimeline } from "@/context/TimelineContext"

const statusStyle = {
    'overdue': 'bg-[#EF4444]',
    'almost due': 'bg-[#EFAD44]',
    'on-track': 'bg-[#244D3F]'
}

const stats = [
    { value: 62, label: 'Days Since Contact' },
    { value: 30, label: 'Goal (Days)' },
    { value: "Feb 27, 2026", label: 'Next Due' },
];

const FriendDetails = ({ params }) => {
    const resolvedParams = use(params);
    const id = resolvedParams.id;

    const friend = friends.find((friend) => friend.id === parseInt(id));

    if (!friend) {
        notFound()
    }

    const { name, picture, status, tags, bio, email } = friend;

    const { addEntry } = useTimeline();

    const handleAction = (type) => {
        addEntry(type, name);
        toast.success(`${type} logged!`);
    };

    return (
        <section className="max-w-6xl mx-auto my-10 md:my-20 text-[#E9E9E9]">

            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 md:col-span-1">
                    <div className="bg-white text-center p-6 rounded-lg shadow-sm flex flex-col items-center ">
                        <div className='mb-3'>
                            <img className='w-20 h-20 rounded-full' src={picture} alt={`${name}'s picture`} />
                        </div>

                        <div className='space-y-2'>
                            <h2 className='font-semibold text-xl text-[#244D3F]'>{name}</h2>

                            <p className={`badge text-white font-medium text-[12px]  py-1.5 px-2 rounded-full capitalize ${statusStyle[status] || 'bg-gray-500'} `}>{status}</p>
                            <div className='space-x-2'>
                                {tags.map((tag, index) => (
                                    <span key={index} className='badge font-medium text-[12px] py-1.5 px-2 bg-[#CBFADB] rounded-full uppercase'>{tag}</span>
                                ))}
                            </div>
                            <p className='font-medium text-[#64748B] mt-1 mb-3'>"{bio}"</p>
                            <p className="font-medium text-sm text-[#64748B]">Preferred: {email}</p>
                        </div>
                    </div>

                    <div className="flex flex-col mt-4 space-y-2">
                        <button className="bg-white py-4 inline-flex items-center justify-center gap-2 font-medium text-[16px] text-[#1F2937] border border-[#E9E9E9] rounded-lg">
                            <BellRing className="w-5 h-5" />
                            Snooze 2 weeks
                        </button>

                        <button className="bg-white py-4 inline-flex items-center justify-center gap-2 font-medium text-[16px] text-[#1F2937] border border-[#E9E9E9] rounded-lg">
                            <Archive className="w-5 h-5" />
                            Archive
                        </button>

                        <button className="bg-white text-[#EF4444] py-4 inline-flex items-center justify-center gap-2 font-medium text-[16px] border border-[#E9E9E9] rounded-lg">
                            <Trash2 className="w-5 h-5" />
                            Delete
                        </button>

                    </div>
                </div>

                <div className="col-span-3 md:col-span-2">
                    <div className="space-y-6">
                        {/* Status */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white text-center py-8 px-4 rounded-lg shadow-sm">
                                    <h2 className="font-semibold text-[30px] text-[#244D3F] mb-2">{stat.value}</h2>
                                    <p className="font-normal text-lg text-[#64748B]">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Relationship Goal */}
                        <div className="bg-white p-6 shadow-sm rounded-lg">

                            <div className="flex justify-between items-center">
                                <p className="font-medium text-[#244D3F] text-xl">Relationship Goal</p>
                                <button className="font-medium text-sm text-[#1F2937] bg-[#F8FAFC] py-2 px-[17px] border border-[#E9E9E9] rounded-md">Edit</button>
                            </div>
                            <p className="font-normal text-lg text-[#64748B] mt-4">Connect every <span className="font-bold text-lg text-[#1F2937]">30 days</span></p>
                        </div>

                        {/* Contact */}
                        <div className="bg-white p-6 shadow-sm rounded-lg">
                            <h3 className="font-medium text-xl text-[#244D3F] mb-4">Quick Check-In</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                                <div onClick={() => handleAction('Call')} className="bg-[#F8FAFC] border-2 border-[#E9E9E9] rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-sm cursor-pointer transition duration-300">
                                    <PhoneCall className="w-8 h-8 text-[#1F2937]"></PhoneCall>
                                    <p className="font-normal text-lg text-[#1F2937]">Call</p>
                                </div>

                                <div onClick={() => handleAction('Text')} className="bg-[#F8FAFC] border-2 border-[#E9E9E9] rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-sm cursor-pointer transition duration-300">
                                    <MessageSquareText className="w-8 h-8 text-[#1F2937]"></MessageSquareText>
                                    <p className="font-normal text-lg text-[#1F2937]">Text</p>
                                </div>

                                <div onClick={() => handleAction('Video')} className="bg-[#F8FAFC] border-2 border-[#E9E9E9] rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-sm cursor-pointer transition duration-300">
                                    <Video className="w-8 h-8 text-[#1F2937]"></Video>
                                    <p className="font-normal text-lg text-[#1F2937]">Video</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


};

export default FriendDetails;