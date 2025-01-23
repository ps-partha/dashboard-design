import React from 'react'

function Service() {
  return (
    <div className='tube-line'>
      <div className='tube-line-header'>
    <div className='header-one'>
          <h3>In Service</h3>
          <div className='tube-line-button'>
            <h4>See Details</h4>
            <img src='/svg/Group.svg' />
          </div>
        </div>
        <div className='tube-line-header-two'>
          <div className='left-text'>
            <h4>Vehicle</h4>
          </div>
          <div className='right-text'>
            <h4>Status</h4>
          </div>
        </div>
      </div>
      <div className='tube-line-body-items'>
        <div className='in-service-body-item'>
          <img src='/svg/bicycle.svg' />
          <div className='in-service-body-status'>
            <p>Bicycle</p>
            <span className='Available'>Available  <span className='available-value'>9183</span></span>
          </div>
        </div>

        <div className='in-service-body-item'>
          <img src='/svg/taxi.svg' />
          <div className='in-service-body-status'>
            <p>Cab</p>
            <span className='Available'>Available  <span className='available-value'>606</span></span>
          </div>
        </div>

        <div className='in-service-body-item'>
          <img src='/svg/train-01.svg' />
          <div className='in-service-body-status'>
            <p>Train</p>
            <span className='Available'>Available  <span className='available-value'>543</span></span>
          </div>
        </div>
        <div className='in-service-body-item'>
          <img src='/svg/bus-01.svg' />
          <div className='in-service-body-status'>
            <p>bus</p>
            <span className='Available'>Available  <span className='available-value'>8786</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
