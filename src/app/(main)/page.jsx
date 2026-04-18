import { Plus } from 'lucide-react';
import data from '../data/friends.json';
import StatCard from '@/components/StatCard';

const statusStyle = {
  'overdue': 'bg-[#EF4444]',
  'almost due': 'bg-[#EFAD44]',
  'on-track': 'bg-[#244D3F]'
}

export default function Home() {

  const total = data.length;
  const onTrack = data.filter(friend => friend.status === 'on-track').length;

  const stats = [
    { value: total, label: 'Total Friends' },
    { value: onTrack, label: 'On Track' },
    { value: 6, label: 'Need Attention' },
    { value: 12, label: 'Interactions This Month' },
  ];

  return (
    <div className='px-4 xl:px-0'>
      {/* Banner Section */}
      <section className="flex flex-col justify-center items-center mt-20 mb-10">
        <h1 className="font-bold text-[#244D3F] text-3xl md:text-5xl text-center mb-4">Friends to keep close in your life</h1>

        <p className="text-[#64748B] text-sm sm:text-[16px] text-center mb-8">Your personal shelf of meaningful connections. Browse, tend, and nurture the<span className='block'>relationships that matter most.</span></p>

        <button className="btn font-semibold text-[16px] bg-[#244D3F] text-white py-[11.5px] px-4"><Plus className='w-4 h-4'></Plus> Add a Friend</button>
      </section>

      {/* Status Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto justify-center gap-6">

        {stats.map((stat) => <StatCard key={stat.label} {...stat} />)}

      </section>

      {/* Friends Section */}
      <section className='max-w-6xl mx-auto mb-20'>
        <hr className="my-10 border-t-2 text-[#E9E9E9]"></hr>
        <h2 className='font-semibold text-2xl text-[#244D3F] mb-4'>Your Friends</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-6'>
          {data.map((friend) => (

            <div key={friend.id} className="bg-white text-center p-6 rounded-lg shadow-md flex flex-col items-center hover:-translate-y-1 hover:shadow-xl cursor-pointer transition duration-300">
              <div className='mb-3'>
                <img className='w-20 h-20 rounded-full' src={friend.picture} alt={`${friend.name}'s picture`} />
              </div>

              <div className='space-y-2'>
                <h2 className='font-semibold text-xl text-[#244D3F]'>{friend.name}</h2>
                <p className='font-medium text-[12px] text-[#244D3F]'>{friend.days_since_contact}d ago</p>

                <div className='space-x-2'>
                  {friend.tags.map((tag, index) => (
                    <span key={index} className='badge font-medium text-[12px] py-1.5 px-2 bg-[#CBFADB] rounded-full uppercase'>{tag}</span>
                  ))}
                </div>

                <p className={`badge text-white font-medium text-[12px]  py-1.5 px-2 rounded-full capitalize ${statusStyle[friend.status]} `}>{friend.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
