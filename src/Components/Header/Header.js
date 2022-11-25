import React from 'react'
import  "./Header.css";


const Header = () => {
    return (
        <div className="header">
        <div className='h-left'>
        <div className='h-name'>
        <div>
        <span>Want anything to be  </span>
        </div>
        <div>
            <span>easy with  <span className='vpn'>LaslesVPN.</span></span>
        </div>
        <div>
        <span>Provide a network for all your needs with ease and fun using LaslesVPN </span>
        <br/>
        <span className='discover'>discover interesting features from us.</span>
        </div>
    
       
        
       
        </div>
       

        <button className='h-button'>Get Started</button>
    
        <div className='h-icons'>
        <ul>
         <img src="Images/Group 1216.svg" />
         <div className='Group1216'>
         <span>90+</span>
         <br/>
         <span>Users</span>
         
      
         </div>
         <img src="Images/Group 1215.svg"/>
         <div className='Group1215'>
         <span>30+</span>
         <br/>
         <span>Location</span>
         
      
         </div>
         <img src="Images/Group 1217.svg"/>
         <div className='Group1217'>
         <span>50+</span>
         <br/>
         <span>Servers</span>
         
      
         </div>
         </ul>
         </div> 
      

        </div>
    
      
         <div className='h-right'>
            <img src="images/Illustration 1.svg"/>
         </div>
        
        </div>
           
                  
          

             

             
    )
}

export default Header;