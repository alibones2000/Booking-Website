import HotelCard from './HotelCard'
// import React, { useState } from 'react'
import './HotelList.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MailList from './MailList'







function HotelList({hotels, grab, setCurrentHotel}){
    const navigate = useNavigate()
    const eachHotel = hotels?.map(hotel => {

        console.log(hotel)
        return <HotelCard key={hotel.id} hotel={hotel} handleReserve={handleReserve} />
        
        function handleReserve(hotel){
            fetch(`/hotels/${hotel.id}`)
            .then(res => res.json())
            .then(data => grab(data))
            setCurrentHotel(hotel)
            
            navigate('/hotel_info')

            // grab(data.rooms)
          }


    })
    return(
        <div>
            <Header />
    <Link style = {{textDecoration: 'none', color:'black'}} to='/' >
        Back To Home Page </Link>
        
        <div className='hotelList'>
     {eachHotel}
     </div>
    <MailList />
     <Footer />
      </div>
            

         
    
     
    )

}
export default HotelList