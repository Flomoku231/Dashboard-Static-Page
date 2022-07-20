import React from 'react'
import './LeftFooter.css';
import Message from '../../Images/Message.svg';

const LeftFooter = (props) => {
  return (
    <div className='Left__Footer'>
    <button type='button' className="trainercard">
        <img id='footer_profile' src={props.profile} alt=""/>
        <div className="footer__content"><h3 id='footer_Name'>{props.name}</h3>
        <p id='footer_position'>{props.position}</p></div>
        <img id='footer__messageIcon' src={Message} alt=""/>
    </button>
       

    </div>
  )
}

export default LeftFooter