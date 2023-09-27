

import { CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis,  } from "recharts";

const Statistics = () => {


    const store = JSON.parse(localStorage.getItem('donations')) || [];
    console.log(store);
    
    const data = store.map(item =>({
        name: 12,
        value: store.length
    }))
    
    const COLORS = ['red', 'green', ];


    return (
        <div >

            <div className="flex justify-center mx-auto">

                <PieChart width={800} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        Tooltip='%'
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>

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