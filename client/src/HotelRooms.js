import './HotelRoom.css'
import { Button } from 'react-bootstrap';

function HotelRooms({room, handleBook}){
    const {beds, images, price} = room
    return(
        <div className="rooms">
            <img className='img-rooms' src={images} alt={''}/>
            <h2>{beds}</h2>
            <p>${price}</p>
            <Button onClick={()=> handleBook(room.id)}className='room-btn'>Book</Button>
        </div>
    )
}
export default HotelRooms;