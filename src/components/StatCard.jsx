
const StatCard = ({ value, label }) => {
    return (
        <div className="bg-white text-center p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <h2 className="font-semibold text-[32px] mb-2">{value}</h2>
            <p className="font-normal text-lg text-[#64748B]">{label}</p>
        </div>
    );
};

export default StatCard;