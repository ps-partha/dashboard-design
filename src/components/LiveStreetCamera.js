import React from 'react'

function LiveStreetCamera() {
  return (
    <div className='live-street-camera'>
      <div className='header-one'>
        <h3>Live Street Camera (Random)</h3>
        <div className='tube-line-button'>
          <h4>See Details</h4>
          <img src='/svg/Group.svg' />
        </div>
      </div>
      <div className='live-street-camera-body'>
        <div className='live-street-camera-body-left'>
          <div className='live-street-camera-body-header'>
            <img src='/svg/video-01.svg' />
            <h4>Baker Street</h4>
          </div>
          <div className='live-street-camera-body-left-image'>
            <img src='/images/55382c8ead7409c57ff6c28722094b5f.jpeg' />
            <div className='live'>
              <img src='/svg/red-dot-live.svg' />
              <p>Live</p>
            </div>
          </div> 
        </div>
        <div className='live-street-camera-body-right'>
          <div className='live-street-camera-body-item'>
            <div className='live-street-camera-body-header'>
              <img src='/svg/video-01.svg' />
              <h4>Oxford Street</h4>
            </div>
            <div className='live-street-camera-body-right-image'>
              <img src='/images/Live camera.png' />
            </div>
          </div>
          <div className='live-street-camera-body-item'>
            <div className='live-street-camera-body-header'>
              <img src='/svg/video-01.svg' />
              <h4>Oxford Street</h4>
            </div>
            <div className='live-street-camera-body-right-image'>
            <img src='/images/Live camera-1.png' />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default LiveStreetCamera
