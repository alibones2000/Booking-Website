import HotelCard from './HotelCard'
// import React, { useState } from 'react'
import './HotelList.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'






function HotelList({hotels, grab}){
    const navigate = useNavigate()
    const eachHotel = hotels?.map(hotel => {
        return <HotelCard key={hotel.id} hotel={hotel} handleReserve={handleReserve} />
        
        function handleReserve(id){
            fetch(`/hotels/${id}`)
            .then(res => res.json())
            .then(data => grab(data.rooms))
            
            navigate('/hotel_info')

            // grab(data.rooms)
          }


    })
    return(
        <div>
    <Link style = {{textDecoration: 'none', color:'black'}} to='/' >
        Back To Home Page </Link>
        <div>
     {eachHotel}
     </div>
     </div>
            

         
    
     
    )

}
export default HotelList