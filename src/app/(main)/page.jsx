import { Plus } from 'lucide-react';
import FriendCard from '@/components/FriendCard';
import StatSection from '@/components/StatSection';

export default function Home() {

  return (
    <div className='px-4 xl:px-0'>

      {/* Banner Section */}
      <section className="flex flex-col justify-center items-center mt-20 mb-10">
        <h1 className="font-bold text-[#244D3F] text-3xl md:text-5xl text-center mb-4">Friends to keep close in your life</h1>

        <p className="text-[#64748B] text-sm sm:text-[16px] text-center mb-8">Your personal shelf of meaningful connections. Browse, tend, and nurture the<span className='block'>relationships that matter most.</span></p>

        <button className="btn font-semibold text-[16px] bg-[#244D3F] text-white py-[11.5px] px-4"><Plus className='w-4 h-4'></Plus> Add a Friend</button>
      </section>

      {/* Status Section */}
      <StatSection></StatSection>
      
      {/* Friend Card */}
      <FriendCard></FriendCard>

    </div>
  );
}
