import ApexCharts from 'apexcharts'
import { useLoaderData } from 'react-router-dom';

import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {

    const data = useLoaderData()
    console.log(data);

   
    

    const myData = [
        { name: "Group A", value: 500, fill: "red", startAngle: 0, endAngle: 180},
        { name: "Group B", value: 600, fill: "green", startAngle: 180, endAngle: 360},

    ];

    return (
        <div >


            <div className="flex justify-center mx-auto">
                
                <div className='mb-10'>
                    <PieChart width={800} height={800}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={true}
                            data={myData}
                            outerRadius={300}
                            fill={data.fill}
                            
                            label
                        />

                        {/* Display the tooltips */}
                        <Tooltip />
                    </PieChart>
                </div>
            </div>

            <div className='flex gap-7  justify-center'>
                <div className='flex gap-5 items-center'>
                    <p>Your Donation</p>
                    <div className='w-10 h-3 rounded bg-red-600'></div>
                </div>
                <div className='flex gap-5 items-center'>
                    <p>Total Donation</p>
                    <div className='w-10 h-3 rounded bg-green-600'></div>
                </div>
            </div>



        </div>
    );
};

export default Statistics;