import data from '../app/data/friends.json';

const statusStyle = {
    'overdue': 'bg-[#EF4444]',
    'almost due': 'bg-[#EFAD44]',
    'on-track': 'bg-[#244D3F]'
}

const FriendCard = () => {
    return (
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
    );
};

export default FriendCard;