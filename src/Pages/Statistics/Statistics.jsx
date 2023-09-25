import { useLoaderData } from "react-router-dom";

import { PieChart, Pie, Cell } from 'recharts';
import { getStoredDonation } from "../../Utility/localStorage";
import { useEffect, useState } from "react";

const Statistics = () => {
    const donations = useLoaderData();
    const [appliedDonation, setAppliedDonation] = useState([]);

    useEffect(() => {
        const storedDonationId = getStoredDonation();
        if (donations.length > 0) {
            const DonationsApplied = donations.filter(donat => storedDonationId.includes(donat.id));

            setAppliedDonation(DonationsApplied)

        }
    }, [donations]);

    console.log(appliedDonation.length)

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

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize={25} fontWeight={500}>
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div>
            <div>
                <PieChart width={1200} height={400}>
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
                <div className="flex gap-16 justify-center">
                    <div className="flex gap-4 items-center">
                        <span className="text-xl font-semibold">Your donation</span>
                        <div className="w-24 h-3 mt-1 bg-[#00C49F]">
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
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