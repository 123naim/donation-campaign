import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
// import Banner from "../Banner/Banner";

const CategoryCards = () => {
    const [categoryCardsData, setCategoryCardsData] = useState([]);

    const [getText, setGetText] = useState('');


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCategoryCardsData(data))
    }, []);



    const getInputText = e => {
        e.preventDefault();
        setGetText(e.target.value);
    }

    const handleInputText = getText => {
        if(getText === getText){
            const donationCards = categoryCardsData.filter(donation => donation.category === getText);
            setCategoryCardsData(donationCards)
        }
    }


    return (
        <div>
            <div className="mb-14">
                {/* <Banner></Banner> */}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    categoryCardsData.map(card => <CategoryCard key={card.id} card={card}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryCards;