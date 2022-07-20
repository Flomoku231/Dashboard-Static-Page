import React from 'react'
import './Head.css'
import Search from '../../Images/Search.svg';
import Menu from '../../Images/SearchMenu.svg';
import HeadMessage from '../../Images/HeadMessage.svg';
import Notification from '../../Images/Notification.svg';
import TraineeProfilePicture from '../../Images/PHP.jpeg';

const Head = () => {
  return (
    <div className="RightSide__Head">
        <div className="Head-text">
            <h2>Courses Dashboard</h2>
            <p>Hello Emmanuel, Welcome back!</p>
        </div>
        <div className="Search-input">
           <img src={Search} alt="" id='Search-icon' /> <input type="text" id='RightHead-Search' placeholder='Seach dashboard' />
           <img src={Menu} alt="" id='Search-menuIcon' />
        </div>
        <div className="Head-icon">
            <img src={HeadMessage} alt="" id='Head__icon-message' /> <img src={Notification} alt="" id='Head__icon-notification'/> 
            <img id='Profile_Picture' src={TraineeProfilePicture} alt="" />
        </div>
    </div>
  )
}

export default Head