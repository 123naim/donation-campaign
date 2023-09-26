

import { PieChart, Pie, Cell } from 'recharts';
import { getStoredDonation } from "../../Utility/localStorage";
import { useEffect, useState } from "react";

const Statistics = () => {
    const [donations, setDonations] = useState([]);
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


    const data = [
        { name: 'Total Donation', value: donations.length - appliedDonation.length },
        { name: 'Your Donation', value: appliedDonation.length }
    ];
    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        const xOffset = x > cx ? -25 : 25;
        const yOffset = 0;

        return (
            <text x={x + xOffset} y={y + yOffset} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize={25} fontWeight={500}>
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (
        <div>
            <div>
                <div className='flex justify-center'>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={130}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                <div className="flex gap-16 justify-center">
                    <div className="flex flex-col-reverse md:flex-row gap-4 items-center">
                        <span className="text-xl font-semibold">Your donation</span>
                        <div className="w-24 h-3 mt-1 bg-[#00C49F]">
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row gap-4 items-center">
                        <span className="text-xl font-semibold">totol donation</span>
                        <div className="w-24 h-3 mt-1 bg-[#FF444A]">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
    ;

export default Statistics;