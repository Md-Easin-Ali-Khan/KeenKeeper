
export default function Home() {
  return (
    <div>
      {/* Banner Section */}
      <section className="flex flex-col justify-center items-center mt-20 mb-10">
        <h1 className="font-bold text-[#244D3F] text-3xl md:text-5xl text-center mb-4">Friends to keep close in your life</h1>

        <p className="text-[#64748B] text-sm sm:text-[16px] text-center mb-8">Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br>
          relationships that matter most.</p>

        <button className="btn font-semibold text-[16px] bg-[#244D3F] text-white py-[11.5px] px-4">+ Add a Friend</button>
      </section>

      {/* Status Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-4 justify-center gap-6">

        <div className="bg-white text-center p-8 rounded-lg shadow-md">
          <h2 className="font-semibold text-[32px] mb-2">10</h2>
          <p className="font-normal text-lg text-[#64748B]">Total Friends</p>
        </div>

        <div className="bg-white text-center p-8 rounded-lg shadow-md">
          <h2 className="font-semibold text-[32px] mb-2">3</h2>
          <p className="font-normal text-lg text-[#64748B]">On Track</p>
        </div>

        <div className="bg-white text-center p-8 rounded-lg shadow-md">
          <h2 className="font-semibold text-[32px] mb-2">6</h2>
          <p className="font-normal text-lg text-[#64748B]">Need Attention</p>
        </div>

        <div className="bg-white text-center p-8 rounded-lg shadow-md">
          <h2 className="font-semibold text-[32px] mb-2">12</h2>
          <p className="font-normal text-lg text-[#64748B]">Interactions This Month</p>
        </div>

      </section>
      <hr className="my-10 text-[#E9E9E9] max-w-6xl mx-auto px-4"></hr>

    </div>
  );
}
