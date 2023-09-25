import { useState } from "react";

const Banner = () => {
    const [getText, setGetText] = useState('');
    const [text, setText] = useState('');

    const getInputText = e => {
        e.preventDefault();
        setGetText(e.target.value);
    }

    const handleInputText = getText => {
        setText(getText)
    }

    console.log(text)

    return (
        <div>
            <div>
                <div className="relative">
                    <div>
                        <img className="opacity-10 h-3/4 w-full " src="https://i.ibb.co/T1XfzC9/Rectangle-4281.png" alt="" />
                    </div>
                    <div className="absolute top-[45%] left-[30%]">
                        <h2 className="text-3xl text-black font-bold">I Grow By Helping People In Need</h2>
                        <div className="mt-4 flex justify-center ">
                            <input onChange={getInputText} className="py-2 pl-5 rounded border" type="text" name="text" placeholder="Search here...." />
                            <button onClick={() => handleInputText(getText)} className="py-2 px-4 text-white font-semibold rounded-r-lg -ml-1 bg-[#FF444A]">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;