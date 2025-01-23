import React from 'react'

function CivicMetrics() {
  return (
    <div className='civic-metrics'>
      <div className='header-one'>
        <h3>Civic Metrics</h3>
        <div className='tube-line-button'>
          <h4>See Details</h4>
          <img src='/svg/Group.svg' />
        </div>
      </div>
      <div className='civic-metrics-body'>
        <div className='civic-metrics-body-items'>
          <div className='civic-metrics-body-item'>
            <img src='/svg/civic-metrics-icons-1.svg' />
            <div className='civic-metrics-body-item-content'>
              <p>Population</p>
              <span>8.9 million</span>
            </div>
          </div>
          <div className='civic-metrics-body-item'>
            <img src='/svg/Job.svg' />
            <div className='civic-metrics-body-item-content'>
              <p>Employment Rate </p>
              <span>61%</span>
            </div>
          </div>
          <div className='civic-metrics-body-item'>
            <img src='/svg/Students.svg' />
            <div className='civic-metrics-body-item-content'>
              <p>Education</p>
              <span>95% Literacy</span>
            </div>
          </div>
        </div>
        <div className='civic-metrics-body-items'>
          <div className='civic-metrics-body-item'>
            <img src='/svg/electric-tower-02.svg' />
            <div className='civic-metrics-body-item-content'>
              <p>Electricity Grid</p>
              <span>98.63% Consumption</span>
            </div>
          </div>
          <div className='civic-metrics-body-item'>
            <img src='/svg/Water.svg' />
            <div className='civic-metrics-body-item-content'>
              <p>Water Supply</p>
              <span>96% Available</span>
            </div>
          </div>
          <div className='civic-metrics-body-item'>
            <img src='/svg/Happiness.svg' />
            <div className='civic-metrics-body-item-content'>
              <p>Happiness</p>
              <span>6.3/10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CivicMetrics
