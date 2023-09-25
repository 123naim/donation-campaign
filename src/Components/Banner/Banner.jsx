
const Banner = () => {
    return (
        <div>
            <div>
                <div className="relative">
                    <div>
                        <img className="opacity-10 h-3/4 w-full " src="https://i.ibb.co/VM5Q2mr/donation.jpg" alt="" />
                    </div>
                    <div className="absolute top-[45%] left-[30%]">
                        <h2 className="text-3xl font-bold">I Grow By Helping People In Need</h2>
                        <div className="mt-4 flex justify-center ">
                            <input className="py-2 pl-5 rounded border" type="text" placeholder="Search here...."/>
                            <button className="py-2 px-4 rounded-r-lg -ml-1 bg-[#FF444A]">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;