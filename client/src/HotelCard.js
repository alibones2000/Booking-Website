import './HotelList.css'
import { Button } from 'react-bootstrap';
// import { useState } from 'react';
// import { useNavigate } from 'react-router';


function HotelCard({hotel, handleReserve}){
  const {name, location, rating, images, phone_number} = hotel
  // const [rooms, setRooms] = useState([])
  // const navigate = useNavigate()
  

  
 

    // function handleReserve(e){
    //   setRooms(e.target.value)
    //   console.log(hotel.id)
    //   navigate('/hotel_info')
    // }



    

    return(
        <div className='hotel-list' >
    
        <img className='img-size' src={images} alt={''}/>
        <div >
          <h1>{name}</h1>
          <h2>{location}</h2>
          <p>rating: {rating}/5</p>
          <p>Contact: {phone_number} </p>
          <Button onClick={()=>handleReserve(hotel.id)} className="reserve">Reserve</Button>
        </div>
        <div className='listWrapper'>

            </div>
            <div className='listSearch'></div>
   
      </div>
    )
}

export default HotelCard;