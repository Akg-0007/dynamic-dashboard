import React, { useState } from 'react'
import chart from '../assets/Chart.png'
import CArea from '../comp/CArea'
import Clock from '../comp/Clock'
import Doun from '../comp/Doun'
import Barc from '../comp/Barc'
import List from '../comp/List'
import Quiz from '../comp/Quiz'
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


// import { Chart } from 'react-chartjs-2';

const Right = () => {
  
  return (
    <div>
      <div className='navb'>
        <h1 className='h1col'>Hello Punnet dhiman</h1>
        <p className='navp'>following is your organization’s performance summary</p>


      </div>
        <div className='bar-clock'>
        <CArea text="In Training Workers" col="green"/>
        <CArea text="video watch-time (hrs)" col="red"/>
        <CArea text="% workers passing quiz" col="green"/>
        <CArea text="avg. days taken" col="blue"/>
        </div>
        <div className='bar-clock'>
          <Clock></Clock>
          <Barc w="900" h="400"></Barc>
        </div>
        <div className="bar-clock">
          <List></List>
          <Quiz></Quiz>
          <Doun></Doun>
          
        </div>
    </div>
  )
}

export default Right