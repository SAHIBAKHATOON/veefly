import React from 'react';
import './Veefly.css'
import youtube from '../src/Asset/youtube_.webp';
import dollar from '../src/Asset/dollar_.webp';
import  payment from '../src/Asset/payment_.webp';
import  promotion from '../src/Asset/promotion_.webp';
const Veefly = () => {
  return (
    <div>
        <div className='text_center'>
            <h1>How <span>VeeFly</span> works?</h1>
        </div>
      


    <div className='images'>
    <div class="images3">
        <div class="five-image">
            <img src={youtube} alt="" />
            <h1>Create your Campaign</h1>
            <p>Copy the video URL and paste it on the dashboard
to create a campaign.</p>
            
        </div>
        
    </div>
    <div class="images3">
        <div class=" second_sec">
            
            <h1>Set a Budget</h1>
            <p>Promote your videos with as little as $10.</p>
            <img src={dollar} />
        </div>
        
    </div>
    <div class="images3">
        <div class="five-image">
            <img src={payment} />
            <h1 className='pay'>Make Payment</h1>
            <p>Select your mode of payment from the
available options.</p>
            
        </div>
        
    </div>

    <div class="images3">
        <div class="second_sec">
           
            <h1>Be Seen on YouTube</h1>
            <p>Launch your campaign to reach the target
audience</p>
<img src={promotion} />
           
        </div>
        
    </div>
    </div>
   
    </div>
  )
}

export default Veefly