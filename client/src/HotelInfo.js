import HotelRooms from './HotelRooms'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import MailList from './MailList'
import Header from './Header'

function HotelInfo({rooms, grab2, hotels, currentHotel}){
    const navigate = useNavigate()
    const eachRoom = rooms?.map(room => {
        console.log(hotels)
        const hotel = hotels.filter(hotel => {
            return hotel.id === room.hotel_id
        })
        return <HotelRooms key={room.id} room={room} handleBook={handleBook} hotel={hotel}/>
        
        function handleBook(id){
            fetch(`/rooms/${id}`)
            .then(res => res.json())
            .then(data => grab2(data))
            navigate('/payment')
        }
    })
    const image = currentHotel.photos?.map(img => {
        console.log(img)
        return <img className='grid-img' src={img.img} />
    })
   console.log(currentHotel)
    return (

        <div>
          
        <Header />
        <div className='top-card'>
            {image}
        </div>
        <div className='amentities'>
            
        </div>
        <div className='info-htl'>
        {eachRoom}
        </div>
        <MailList />
        <Footer />
        </div>

    )
}
export default HotelInfo;