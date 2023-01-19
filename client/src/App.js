import {useEffect, useState} from 'react'
import './App.css';
import {Routes, Route} from 'react-router'
import HotelList from './HotelList';
import { useNavigate } from 'react-router';
import Search from './Header';
import HotelInfo from './HotelInfo'
import { Payment } from '@mui/icons-material';
import Feature from './Featured';
// import Home from './Home';




function App() {
  const [userData, setUserData] = useState({})
  const [hotels, setHotels] = useState([])
  const [rooms, setRooms] = useState([])
  const [searchCity, setSearchCity] = useState('')
  const navigate = useNavigate()
  const [payment, setPayment] = useState({})

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

function grab(rooms){
setRooms(rooms)
}

function grab2(payment){
  setPayment(payment)
}


  


  
    
  return (
    <div className="App">
    
      
       <Routes>
       <Route path="/" element={<Feature hotels={hotels} handleSearch={handleSearch} searchCity={searchCity}  handleSearchCity={handleSearchCity} />} />
       <Route path="/hotel_list" element={<HotelList  grab={grab} hotels={hotels} />} />
       <Route path="/hotel_info" element={<HotelInfo rooms={rooms} grab2={grab2}/>} />
       <Route path="/payment" element={<Payment payment={payment} />} />
      
       {/* <Route path="/login" element={<Login  />} /> */}


       </Routes>
      {/* < Home/> */}
    </div>
  );
}

export default App;
