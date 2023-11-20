import React, { useEffect, useState } from 'react'
import { BsArrowUpCircleFill } from "react-icons/bs";
import './BtnToTop.css';

function BtnToTop() {

   const[isVisible, setIsVisible] =  useState(false);
     
    const GoToTop = () => {
          
            window.scrollTo({top:0, left:0, behavior:"smooth",
        })
        
    }


    const listenToScroll = () => {
       let heightToHidden = 400;
       const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

       console.log( document.body.scrollTop || document.documentElement.scrollTop);

       if(winScroll > heightToHidden){
           setIsVisible(true)
       }

       else{
        setIsVisible(false)
       }
}

useEffect(()=> {
    window.addEventListener('scroll' , listenToScroll);
},[]);


  return (
    <div>
       <div className="container-fluid">
        <div className="btnTop bg-dark">
            <div className="row">
            {isVisible && (
                   
                <div className='text-primary  my-2 scroll' >
                  <BsArrowUpCircleFill className='mx-4 fs-3 '  onClick={GoToTop}/>
              </div>
            )}
            </div>
        </div>
       </div>
    </div>
  )
}

export default BtnToTop
