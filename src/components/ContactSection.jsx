import { MessageSquareText, PhoneCall, Video } from "lucide-react";

const stats = [
    { value: 62, label: 'Days Since Contact' },
    { value: 30, label: 'Goal (Days)' },
    { value: "Feb 27, 2026", label: 'Next Due' },
];

const ContactSection = () => {
    return (
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

                    <div className="bg-[#F8FAFC] border-2 border-[#E9E9E9] rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-sm cursor-pointer transition duration-300">
                        <PhoneCall className="w-8 h-8"></PhoneCall>
                        <p className="font-normal text-lg text-[#1F2937]">Call</p>
                    </div>

                    <div className="bg-[#F8FAFC] border-2 border-[#E9E9E9] rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-sm cursor-pointer transition duration-300">
                        <MessageSquareText className="w-8 h-8"></MessageSquareText>
                        <p className="font-normal text-lg text-[#1F2937]">Text</p>
                    </div>

                    <div className="bg-[#F8FAFC] border-2 border-[#E9E9E9] rounded-lg p-4 flex flex-col items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-sm cursor-pointer transition duration-300">
                        <Video className="w-8 h-8"></Video>
                        <p className="font-normal text-lg text-[#1F2937]">Video</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactSection;