import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../Utility/localStorage";
import Donat from "../../Components/Donat/Donat";

const Donation = () => {
    const donations = useLoaderData();
    const [appliedDonation, setAppliedDonation] = useState([]);

    useEffect(() => {
        const storedDonationId = getStoredDonation();
        if (donations.length > 0) {
            const DonationsApplied = donations.filter(donat => storedDonationId.includes(donat.id));

            setAppliedDonation(DonationsApplied)

        }
    }, [donations]);
    

    return (
        <div className="grid grid-cols-2 gap-5 my-8">
            {
               appliedDonation.map(donat => <Donat key={donat.id} donat={donat}></Donat>) 
            }
        </div>
    );
};

export default Donation;