import React from 'react'
import "./Navbar.css"
 const Navbar = () => {
  return (
  
   <div className='n-wrapper'>

   <div className='n-left'>
   <img src="Images/Logo.svg"/>
   </div>

   <div className='n-right'>
   <div className='n-list'>
    <ul style={{listStyleType: 'none'}}>
        <li>About</li>
        <li>Features</li>
        <li>Pricing </li>
        <li>Testimonials</li>
        <li>Help</li>
        <li>Signin</li>
        
    </ul>
    </div>
    <button className='button'>Signup</button>
   </div>



   </div>
   

  )
}
export default Navbar;