import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../../Utility/localStorage";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const CategoryDetails = () => {
    const categoryData = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    const detailsData = categoryData.find(data => data.id === idInt);
    const { title, category_img, description, color, price } = detailsData;

    const handleApplayDonation = () => {
        saveDonation(idInt);
        toast('You have Successfully added');
    }

    return (
        <div>
            <div className="mt-4 mb-12 mx-auto">
                <img className="w-full md:h-[400px] lg:h-[580px]" src={category_img} alt="" />
                <div className="relative">
                    <div className="w-full h-20 -mt-20 bg-black opacity-50">

                    </div>
                    <div className="absolute top-5 left-5">
                        <h2> <button onClick={handleApplayDonation}      className='py-2 text-xl px-3 text-white rounded font-semibold' style={{ backgroundColor: color.text_button_bg }}>Donation: {price}</button> </h2>
                    </div>
                </div>

                <h2 className="mt-8 mb-4 text-3xl font-semibold">{title}</h2>
                <p>{description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CategoryDetails;