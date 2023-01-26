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
    const image = currentHotel.photos?.map(image => {
        console.log(image)
        return <img className='grid-img' src={image.img} />
    })
   const detail = currentHotel.informations?.map(description => {
    console.log(description.description)
    return <h4> {description.description} </h4>
   })

   const amentities = currentHotel.informations?.map(amentity => {
    return <ul> {amentity.amentity}</ul>
   })
    return (

        <div>
          
        <Header />
        <div className='top-card'>
            {image}
        </div>
        <div className='parent-info'>
        <div className='htl-details'>
            {detail}
        </div>
        <div className='amentities-holder'>
            {amentities}
        </div>
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