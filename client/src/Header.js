import React from "react";
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faCalendarDays, faHotel, faPerson} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format} from "date-fns"
import { Button } from "react-bootstrap";
// import Home from './Home'

// import Home from "./Home";
// import {Routes, Route} from 'react-router'





function Search({searchCity, handleSearch, handleSearchCity}){
    

    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult:1,
        children:0,
        room:1
    })
    const handleOption = (name, operation) => {
        setOptions((prev)=>{return{
            ...prev, [name]: operation === "increase" ? options[name] + 1 : options[name] - 1
        }})
    }

    
    
    
    return (
        <div className="search">
               {/* <Routes>
            <Route path="/" element={<Home />} />
            
        </Routes> */}
       
        
            
            <div className="searchContainer">

            <div className="searchList">
                <div className="searchListItem active">
                    <div>
            <FontAwesomeIcon icon={faBed}/>
            <span>Stays</span>
             </div>
             <div>
            <FontAwesomeIcon icon={faHotel}/>
            <span>Hotels</span>
               </div>
                 </div>

                  </div>
                  <h1 className="searchTitle">Find Your Dream Destination Here!</h1>
                  <p>Create an Account To Plan Your Next Trip!</p>
                  <Button className="signBTN">Sign in / Sign Up</Button>
                  <div className="searchHeader">
                    <div className="searchHeaderItem">
                    <FontAwesomeIcon icon={faBed} className='searchHeaderIcon'/>
                    <input onChange={handleSearch}type='text' 
                    placeholder="Where Are You Going" 
                    className="headerSearchInput"
                    
                    />
                    </div>
                    <div className="searchHeaderItem">
                    <FontAwesomeIcon icon={faCalendarDays} className='searchHeaderIcon'/>
                   <span onClick={()=>setOpenDate(!openDate)}className="searchCalander">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                   {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    />}
                    </div>
                    <div className="searchHeaderItem">
                    <FontAwesomeIcon icon={faPerson} className='searchHeaderIcon'/>
                   <span onClick={()=>setOpenOptions(!openOptions)}className="searchCalander">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                   {openOptions && <div className="options">
                    <div className="optionsItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                        <Button 
                        disabled={options.adult<= 1}
                        className="optionCounterButton" onClick={()=>handleOption("adult", "decrease")}>-</Button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <Button className="optionCounterButton"  onClick={()=>handleOption("adult", "increase")}>+</Button>
                        </div>
                    </div>
                    <div className="optionsItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                        <Button 
                         disabled={options.children<= 0}
                        className="optionCounterButton"  onClick={()=>handleOption("children", "decrease")}>-</Button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <Button className="optionCounterButton"  onClick={()=>handleOption("children", "increase")}>+</Button>
                        </div>
                    </div>
                    <div className="optionsItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                        <Button 
                         disabled={options.room<= 1}
                        className="optionCounterButton"  onClick={()=>handleOption("room", "decrease")}>-</Button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <Button className="optionCounterButton"  onClick={()=>handleOption("room", "increase")}>+</Button>
                        </div>
                    </div>
                   </div>}
                    </div>
                    <div className="searchHeaderItem">
                    <Button onClick={handleSearchCity}className="signBTN">Search</Button>
                    </div>
                  </div>
                </div>
                {/* < Home/> */}
            </div>
            
    )
}
export default Search