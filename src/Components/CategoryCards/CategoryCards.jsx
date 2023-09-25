import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryCards = () => {
    const [categoryCardsData, setCategoryCardsData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCategoryCardsData(data))
    }, [])


    return (
        <div className="grid grid-cols-4 gap-5">
            {
                categoryCardsData.map(card => <CategoryCard key={card.id} card={card}></CategoryCard>)
            }
        </div>
    );
};

export default CategoryCards;