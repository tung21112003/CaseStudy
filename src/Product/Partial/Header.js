
import React from 'react';
import { Link } from 'react-router-dom';



export  function Header(){
    return(
     <div className='Header'>
      <Link to = "/main"  style={{marginRight:'5px',textDecorationLine:'none'}}>Home</Link>  / 
      <Link to = "/main/info"  style={{marginRight:'5px',marginLeft:'8px',textDecorationLine:'none'}}>User Profile</Link> / 
      <Link to = "/main/post" style={{marginRight:'5px',marginLeft:'8px',textDecorationLine:'none'}}>Blog</Link>
    

     </div>
     
    
   
    )
}