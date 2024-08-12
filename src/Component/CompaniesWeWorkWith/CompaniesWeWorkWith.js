import React from 'react'
import './CompaniesWeWorkWith.css'
import HpoilLogo from '../../assests/companies-we-work-with/hp.png'
import BharatGasLogo from '../../assests/companies-we-work-with/bharat.png'
import AgspLogo from '../../assests/companies-we-work-with/agsp.png' 
import IoagLogo from '../../assests/companies-we-work-with/ioag.png'
import MeghaGasLogo from '../../assests/companies-we-work-with/megha-gas.png'

function CompaniesWeWorkWith() {
  return (
    <div className='CompaniesWeWorkWith'>
      <h3>Gas Supply Companies We Work With</h3>
        <div className='CompaniesWeWorkWith-logo-container'> 
            <img src={HpoilLogo} className='CompaniesWeWorkWith-logo' alt='Hp Oil Logo'/>
            <img src={BharatGasLogo} className='CompaniesWeWorkWith-logo' alt='Bharat Gas Logo'/>
            <img src={AgspLogo} className='CompaniesWeWorkWith-logo' alt='Agsp Logo'/>
            <img src={IoagLogo} className='CompaniesWeWorkWith-logo' alt='IOAG Logo'/>
            <img src={MeghaGasLogo} className='CompaniesWeWorkWith-logo' alt='Megha Gas Logo'/>
        </div>
    </div>
  )
}

export default CompaniesWeWorkWith
