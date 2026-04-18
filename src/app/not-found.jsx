
const NotFound = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-24 sm:py-32">
            <h1 className="text-9xl">Have to change font</h1>
            <p className="text-base font-semibold text-[#244D3F] uppercase tracking-wide">
                404 Error
            </p>

            <h1 className="text-5xl font-bold mb-6 text-[#244D3F] sm:text-7xl">
                Page not found
            </h1>

            <a
                href="/"
                className="rounded-md bg-[#244D3F] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#45836d] transition-all"
            >
                Go back home
            </a>
        </div>
    );
};

export default NotFound;