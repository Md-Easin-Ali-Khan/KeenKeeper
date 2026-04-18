
const FooterSection = () => {
    return (
        <section className="bg-[#244D3F] pt-20 px-4 xl:px-0">

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 className="font-bold text-white text-5xl sm:text-6xl mb-4">KeenKeeper</h2>
                    <p className="text-[#FFFFFF] mb-6">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <h3 className="font-medium text-xl text-[#FFFFFF] mb-4">Social Links</h3>
                    <ul className="flex space-x-4">
                        <li className="w-10 h-10 bg-[#FFFFFF] rounded-full flex items-center justify-center"><a href="#"><img src="instagram.png" alt="Instagram" /></a></li>
                        <li className="w-10 h-10 bg-[#FFFFFF] rounded-full flex items-center justify-center"><a href="#"><img src="facebook.png" alt="Facebook" /></a></li>
                        <li className="w-10 h-10 bg-[#FFFFFF] rounded-full flex items-center justify-center"><a href="#"><img src="vector.png" alt="Twitter" /></a></li>
                    </ul>
                </div>

                <hr className="mt-10 border-t-2 text-[#265646]"></hr>
                <div className="flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between my-[30px]">
                    <p className="text-gray-400">© 2026 KeenKeeper. All rights reserved.</p>
                    <ul className="flex text-gray-400 space-x-11">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookies</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FooterSection;