import friends from "@/app/data/friends.json";
import ContactSection from "@/components/ContactSection";
import { Archive, BellRing, Trash2 } from "lucide-react";
import { notFound } from "next/navigation";

const statusStyle = {
    'overdue': 'bg-[#EF4444]',
    'almost due': 'bg-[#EFAD44]',
    'on-track': 'bg-[#244D3F]'
}

const FriendDetails = async ({ params }) => {
    const { id } = await params;



    const friend = friends.find((friends) => friends.id === parseInt(id));

    if (!friend) {
        notFound()
    }

    const { name, picture, status, tags, bio, email } = friend;

    return (
        <section className="max-w-6xl mx-auto my-10 md:my-20 px-4 xl:px-0">

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

                {/* Contact Section */}
                <div className="col-span-3 md:col-span-2">
                    <ContactSection></ContactSection>
                </div>
            </div>
        </section>
    );


};

export default FriendDetails;