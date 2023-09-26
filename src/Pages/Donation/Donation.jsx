import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../Utility/localStorage";
import Donat from "../../Components/Donat/Donat";

const Donation = () => {
    // const donations = useLoaderData();
    const [donations, setDonations] = useState([]);
    const [donationLength, setDonationLength] = useState(4);
    const [appliedDonation, setAppliedDonation] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDonations(data))
    }, [])

    useEffect(() => {
        const storedDonationId = getStoredDonation();
        if (donations.length > 0) {
            const DonationsApplied = donations.filter(donat => storedDonationId.includes(donat.id));

            setAppliedDonation(DonationsApplied)

        }
    }, [donations]);

    console.log(appliedDonation)

    return (
        <div>
            <div className="grid grid-cols-2 gap-5 my-8">
                {
                    appliedDonation.slice(0, donationLength).map(donat => <Donat key={donat.id} donat={donat}></Donat>)
                }
            </div>
            <div className={ appliedDonation.length < 5 && 'hidden'}>
                <div className={donationLength === appliedDonation.length && 'hidden' || 'text-center mt-3 mb-12'}>
                    <button onClick={() => setDonationLength(appliedDonation.length)} className="py-2 px-4 bg-[#009444] text-xl text-white font-semibold rounded-lg">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Donation;