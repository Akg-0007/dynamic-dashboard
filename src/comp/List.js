import React from 'react'
import line from '../assets/line.svg'
import ellip from '../assets/ellip.png'
import up from '../assets/up.png'
const List = () => {
    const data=[ { name: 'A',no : 130 },
    { name: 'B',no : 234 },
    { name: 'C',no : 14 },
    ]
  return (
    <div className='list bd '>
      <p className='f21'>Monthly Training Activity</p>
      <p className='f21'> <span><img src={up} alt="" /></span>16% more enrools in the month</p>
      {data.map((e)=>{
        return(
      <div className='timeline'>

     <div>
        <div><img src={ellip} alt="" /></div>
        <div className='line'><img src={line} alt="" /></div>
     </div>

     <div>
     <p className='course'>course {e.name}</p>
      <p className='course-p'>{e.no} workers took this course this week</p>
      
     </div>
      
      </div>)
      })
}
     

      
    </div>
  )
}

export default List