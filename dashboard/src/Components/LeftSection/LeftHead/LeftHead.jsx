import React from 'react'
import './LeftHead.css';
import CompanyLogo from '../../Images/logo192.png';

const LeftHead = () => {
  return (
    <div className='Left__Head'>
        <div className="Left__Head-brand">
          <img id='Left__Head-brand' src={CompanyLogo} alt="" />
          <h2 id='brand-name'>Orizon Academy</h2>
          <p id='brand-motto'>Learning With fun</p>
        </div>
    </div>
  )
}

export default LeftHead;