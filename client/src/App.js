import {useEffect, useState} from 'react'
import './App.css';
import {Routes, Route} from 'react-router'
import HotelList from './HotelList';
import { useNavigate } from 'react-router';
import HotelInfo from './HotelInfo'
import Payment from './Payment';
import Feature from './Featured';
import Confirmation from './Confirmation';

// import Home from './Home';




function App() {
  const [userData, setUserData] = useState({})
  const [hotels, setHotels] = useState([])
  const [rooms, setRooms] = useState([])
  const [searchCity, setSearchCity] = useState('')
  const navigate = useNavigate()
  const [payment, setPayment] = useState({})
  const [currentHotel, setCurrentHotel] = useState({})
  

  useEffect(() => {
    fetch('/me')
    .then(r => {
      if(r.ok){
        r.json()
        .then(data => {
          setUserData(data)
        })
      }
    })
  }, [])

  useEffect(() =>{
    fetch('/hotels')
    .then(res => res.json())
    .then(data => {
      if (!data.message){ 
        setHotels(data)
      } 
    })
  
  },[])

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchCity(e.target.value)
  

  }
  
  function handleSearchCity(){
    fetch(`/search?location=${searchCity}`)
    .then(res => res.json())
    .then(data =>setHotels(data) )
    navigate('/hotel_list')
  }

function grab(hotel){
setRooms(hotel.rooms)
}

function grab2(payment){
  setPayment(payment)
}


  


  
    
  return (
    <div className="App">
    
      
       <Routes>
       <Route path="/" element={<Feature hotels={hotels} handleSearch={handleSearch} searchCity={searchCity}  handleSearchCity={handleSearchCity} />} />
       <Route path="/hotel_list" element={<HotelList  grab={grab} hotels={hotels} setCurrentHotel={setCurrentHotel} handleSearchCity={handleSearchCity} />} />
       <Route path="/hotel_info" element={<HotelInfo rooms={rooms} grab2={grab2} hotels={hotels} currentHotel={currentHotel} />} />
       <Route path="/payment" element={<Payment payment={payment}/>} />
       <Route path="/confirmation" element={<Confirmation />} />
        {/* <Route path="/login" element={<Login  />} /> */}
       </Routes>
      
    </div>
  );
}

export default App;
