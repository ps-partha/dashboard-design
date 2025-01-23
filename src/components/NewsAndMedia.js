import React from 'react'

function NewsAndMedia() {
  return (
    <div className='news-and-media'>
      <div className='header-one'>
        <h3>News & Media</h3>
        <div className='tube-line-button'>
          <h4>See Details</h4>
          <img src='/svg/Group.svg' />
        </div>
      </div>
      <div className='news-and-media-body'>
        <div className='news-and-media-body-item'>
          <img src='/images/news-item-1.png' />
          <div className='news-and-media-body-item-content'>
            <h4>Work From Home Policies Amidstt</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel neque vel ipsum placerat.</p>
          <div className='news-and-media-body-item-footer'>
            <p>BBC News</p>
            <p>2 hours ago | London</p>
          </div>
          </div>
        </div>
        <div className='news-and-media-body-item'>
          <img src='/images/news-item-2.png' />
          <div className='news-and-media-body-item-content'>
            <h4>Q3 Earnings Amidst Global Expansion</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel neque vel ipsum placerat.</p>
            <div className='news-and-media-body-item-footer'>
            <p>BBC News</p>
            <p>2 hours ago | London</p>
          </div>
          </div>
        </div>
        <div className='news-and-media-body-item'>
        <img src='/images/news-item-3.png' />
          <div className='news-and-media-body-item-content'>
            <h4>Researchers are trying to monitor sugar levels</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel neque vel ipsum placerat.</p>
            <div className='news-and-media-body-item-footer'>
            <p>BBC News</p>
            <p>2 hours ago | London</p>
          </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default NewsAndMedia
