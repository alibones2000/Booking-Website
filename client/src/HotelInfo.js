import HotelRooms from './HotelRooms'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function HotelInfo({rooms, grab2}){
    const navigate = useNavigate()
    const eachRoom = rooms?.map(room => {
        return <HotelRooms key={room.id} room={room} handleBook={handleBook}/>

        function handleBook(id){
            fetch(`/rooms/${id}`)
            .then(res => res.json())
            .then(data => grab2(data))
            navigate('/payment')
        }
    })

    return (
        <div>
        {eachRoom}
        </div>
    )
}
export default HotelInfo;