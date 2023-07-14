import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const Doun = () => {
    const data = [
        {
          name: 'M',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'T',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'W',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'TH',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'F',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Sa',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Su',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        }
         
         
      ];
  return (
    <div className='bd pad'>
        <div className='df'>
            <div>
                <p className='f21'>daily training completions</p>
            </div>
            <div>
                <p className='f21'>last 7 days</p>
            </div>
        </div>
          <BarChart
          width={500}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={15}
        >
          <XAxis dataKey="name" scale="auto" padding={{ left: 10, right: 10 }} tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          
          <Bar dataKey="pv" fill="#0D62FF" background={{ fill: '#eee' }} />
        </BarChart>
    </div>
  )
}

export default Doun