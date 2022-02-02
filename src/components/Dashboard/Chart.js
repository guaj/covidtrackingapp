import "./chart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart() { //    Random data for the line chart about positive covid cases
    const data = [
        {
            name: 'Jan',
            "Active User": 4000,
        },
        {
            name: 'Feb',
            "Active User": 3454,
        },
        {
            name: 'Mar',
            "Active User": 2277,
        },
        {
            name: 'Apr',
            "Active User": 2563,
        },
        {
            name: 'May',
            "Active User": 1525,
        },
        {
            name: 'Jun',
            "Active User": 4565,
        },
        {
            name: 'Jul',
            "Active User": 3545,
        },
        {
            name: 'Aug',
            "Active User": 2395,
        },
        {
            name: 'Sep',
            "Active User": 3490,
        },
        {
            name: 'Oct',
            "Active User": 4451,
        },
        {
            name: 'Nov',
            "Active User": 2015,
        },
        {
            name: 'Dec',
            "Active User": 2500,
        },

    ];

    return <div className="chart">
        <h3 className="chartTitle">New Cases</h3>
         <div className="toppart">
            <div className="checkboxCases">New Cases
            </div>
                        </div>

        <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke="#7F7FD5" />
                <Line type="monotone" dataKey="Active User" />
                <Tooltip />
                <CartesianGrid stroke="#CED3DF" strokeDasharray="5 5" />
            </LineChart>
        </ResponsiveContainer>
    </div>;


}
