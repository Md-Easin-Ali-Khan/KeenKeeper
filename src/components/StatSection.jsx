import data from '../app/data/friends.json';

const total = data.length;
const onTrack = data.filter(friend => friend.status === 'on-track').length;

const stats = [
    { value: total, label: 'Total Friends' },
    { value: onTrack, label: 'On Track' },
    { value: 6, label: 'Need Attention' },
    { value: 12, label: 'Interactions This Month' },
];


const StatSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto justify-center gap-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white text-center p-8 rounded-lg shadow-sm">
                    <h2 className="font-semibold text-[32px] text-[#244D3F] mb-2">{stat.value}</h2>
                    <p className="font-normal text-lg text-[#64748B]">{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

export default StatSection;