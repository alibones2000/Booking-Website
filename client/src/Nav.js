import React from 'react'
import './navBar.css'




function NavCom(){
    return(
       <div className='navBar'>
      <div className='navContainer'>
        <span className='logo'>Dream Booking</span>
        <div className='navItems'>
      </div>
         </div>
            <button className='navButton'>Login</button>
            <button className='navButton'>SignUp</button>
        </div>
   
  );
}

export default NavCom