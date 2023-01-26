import './HotelRoom.css'
import { Button } from 'react-bootstrap';

function HotelRooms({room, handleBook, hotel}){
    const {beds, images, price} = room
    
    return(
        <div className="rooms">
            <img className='img-rooms' src={images} alt={''}/>
            <h2>{beds}</h2>
            <h4 className='price'>${price}</h4>
            <h6 className='No'>No Refunds after 48 Hours</h6>
            <Button onClick={()=> handleBook(room.id)}className='room-btn'>Book</Button>
        </div>
    )
}
export default HotelRooms;