import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CArea = ({text,col}) => {
    const data = [
        {
          name: 'M',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
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
          name: 'T',
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
          name: 'S',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'S',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
   
      
    <div className='main-small bd '>
        <p className='f21'>{text}</p>
        <div className="main-small-inner">
            <div className="">
                <p className='small1'>3,345</p>
                <span className='perc' style={{backgroundColor:col,color:"white", opacity: 0.3}}>20%</span><span>234</span>
            </div>
            <div className="">
            <AreaChart
          width={143}
          height={100}
          data={data && data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill={col} />
          <XAxis dataKey="name" tickLine={false}></XAxis>
        </AreaChart>
            </div>
        </div>
        

      
    </div>
  )
}

export default CArea