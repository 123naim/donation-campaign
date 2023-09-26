import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CategoryCard = ({ card }) => {
    const {id, title, category_img, category, color } = card;
    const { category_bg, card_bg, text_button_bg } = color;
    return (
        <div>
            <Link to={`/categoryDetails/${id}`}>
                <img className='w-full h-60 md:h-48  lg:h-44 rounded-t-lg' src={category_img} alt="" />
                <div className='p-3 rounded-b-lg' style={{ backgroundColor: card_bg }}>
                    <h2> <button className='py-1 px-2 rounded font-semibold' style={{ backgroundColor: category_bg, color: text_button_bg }}>{category}</button> </h2>
                    <p style={{ color: text_button_bg }} className='mt-3 font-semibold text-xl'>{title}</p>
                </div>
            </Link>
        </div>
    );
};
CategoryCard.propTypes = {
    card: PropTypes.object
};
export default CategoryCard;