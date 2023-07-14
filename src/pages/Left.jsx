import React from 'react'
import log from '../assets/Logo.png'
import category from '../assets/Category.png'
import ticket from '../assets/Ticket Star.png'
import game from '../assets/Game.png'
import location from '../assets/Location.png'


const Left = () => {
  return (
    <div>
        <div className="logo d-flex">
            <img src={log} alt="" />
        </div>
        <div className="navbar">

            <div className="items">
            <div className=" df1 dashboard">
                {/* <span></span> */}
                <span className='img-padding'><img src={category} alt="" /></span>
                <span className=''>Dashborad</span>
            </div>
            <div className=" df1">
                {/* <span></span> */}
                <span className='img-padding'><img src={game} alt="" /></span>
                <span className=''>Trainigs</span>
            </div>
            <div className=" df1">
                {/* <span></span> */}
                <span className='img-padding'><img src={ticket} alt="" /></span>
                <span className=''>Users</span>
            </div>
            <div className=" df1">
                {/* <span></span> */}
                <span className='img-padding'><img src={location} alt="" /></span>
                <span className=''>My Account</span>
            </div>
            <div className=" df1">
                {/* <span></span> */}
                <span className='img-padding'><img src={location} alt="" /></span>
                <span className=''>Support</span>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Left