import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Donat = ({ donat }) => {
    const { id, donation_img, category, color, title, price } = donat;
    return (
        <div>
            <div style={{ backgroundColor: color.card_bg }} className="flex flex-col md:flex-row rounded-lg">
                <figure>
                    <img className='w-full h-full rounded-r-lg md:rounded' src={donation_img} alt="Donation" />
                </figure>
                <div className="p-6 md:px-4 md:py-4">
                    <h2> <button className='py-1 px-2 rounded font-semibold ' style={{ backgroundColor: color.category_bg, color: color.text_button_bg }}>{category}</button> </h2>
                    <p className='mt-2 font-bold text-black text-2xl'>{title}</p>
                    <p style={{ color: color.text_button_bg }} className='  font-semibold text-xl mt-2'>{price}</p>
                    <Link to={`/categoryDetails/${id}`}>
                        <button className='py-1 text-xl px-3 mt-5 text-white rounded font-semibold' style={{ backgroundColor: color.text_button_bg }}>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
Donat.propTypes = {
    donat: PropTypes.object
};


export default Donat;