import React from 'react'
import { PieChart, Pie, Cell } from 'recharts';

const Quiz = () => {
    const data = [
        { name: 'passed', value: 1434, color: 'green' },
        { name: 'fail', value: 423, color: 'red' },
        
      ];
      const cx = 93;
const cy = 93;
const iR = 50;
const oR = 100;
const value = 50;
  return (
    <div className='main-small  bd'>
          <p className='f21'>Quiz Passing %</p>
          <div className='quiz-df'>
        <div>
        <PieChart width={197} height={210}>
        <Pie
          dataKey="value"
          startAngle={360}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {/* {needle(value, data, cx, cy, iR, oR, '#d0d000')} */}
      </PieChart>
        </div>
        <div className='flex-c'>
        <div className='flex'>
            <div className='green-c'></div>
            <div>  <p className='font-w7'>passed</p><p>324</p></div>
           
        </div>
        <div className='flex'>
            <div className='red-c'></div>
            <div>  <p className='font-w7'>fail</p><p>24</p></div>
           
        </div>
        </div>
        </div>
        <div>
         
        </div>
        
    </div>
  )
}

export default Quiz