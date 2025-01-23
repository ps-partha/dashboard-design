import React from 'react'
import TubeLine from './TubeLine'
import Service from './Service'
import Weather from './Weather'
import LiveStreetCamera from './LiveStreetCamera'
import Header from './Header'
import StockMarket from './StockMarket'
import StreetMap from './StreetMap'
import NewsAndMedia from './NewsAndMedia'
import CivicMetrics from './CivicMetrics'
function MainContainer() {
  return (
    <div>
      <Header />
      <div className='main-container'>
        <div className='main-container-left'>
          <div className='main-container-top'>
            <TubeLine />
            <Service />
          </div>
          <div className='main-container-buttom'>
            <LiveStreetCamera />
          </div>
        </div>
        <div className='main-container-right'>
          <Weather />
        </div>
      </div>
      <div className='main-container-bottom-part'>
        <div className='main-container-bottom-item'>
          <StockMarket />
          <StreetMap />
        </div>
        <div className='main-container-bottom-item'>
          <NewsAndMedia />
          <CivicMetrics />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
