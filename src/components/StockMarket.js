import React from 'react'

function StockMarket() {
  return (
    <div className='stock-market'>
      <div className='header-one'>
        <h3>Stock Market</h3>
        <div className='tube-line-button'>
          <h4>See Details</h4>
          <img src='/svg/Group.svg' />
        </div>
      </div>
      <div className='stock-market-body'>
        <div className='stock-market-data'>
        <p className='price'>MKS (22 Sep)</p>
        <h2 className='price'>$361.40</h2>
        <span className='price-value'>+0.5%</span>
        </div>
        <div className='stock-market-graph'>
          <p className='price'>Price: $361.40 (2.90%)</p>
          <img src='/svg/Vectorxx.svg' />
        </div>
      </div>
    </div>
  )
}

export default StockMarket
