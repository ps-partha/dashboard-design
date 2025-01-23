import React from 'react'

function TubeLine() {
  return (
    <div className='tube-line'>
      <div className='tube-line-header'>
        <div className='header-one'>
          <h3>Tube Line 1</h3>
          <div className='tube-line-button'>
            <h4>See Details</h4>
            <img src='/svg/Group.svg' />
          </div>
        </div>
        <div className='tube-line-header-two'>
          <div className='left-text'>
          <h4>Tube Line</h4>
          </div>
          <div className='right-text'>
            <h4>Status</h4>
          </div>
        </div>
      </div>
      <div className='tube-line-body-items'>
          <div className='tube-line-body-item'>
            <h4>H&C</h4>
            <div className='tube-line-body-status green'>
              <img src='/svg/Ellipse 43.svg' />
              <p>Good Service</p>
            </div>
          </div>
          <div className='tube-line-body-item '>
            <h4>Jublee</h4>
            <div className='tube-line-body-status green'>
              <img src='/svg/Ellipse 43.svg' />
              <p>Good Service</p>
            </div>
          </div>
          <div className='tube-line-body-item'>
            <h4>Trem</h4>
            <div className='tube-line-body-status Yellow'>
              <img src='/svg/yellow-dot.svg' />
              <p>Minor Delay</p>
            </div>
          </div>
          <div className='tube-line-body-item'>
            <h4>Bakerloo</h4>
            <div className='tube-line-body-status red'>
              <img src='/svg/red-dot.svg' />
              <p>Suspended</p>
            </div>
          </div>
          <div className='tube-line-body-item'>
            <h4>Circle</h4>
            <div className='tube-line-body-status green'>
              <img src='/svg/Ellipse 43.svg' />
              <p>Good Service</p>
            </div>
          </div>
          <div className='tube-line-body-item'>
            <h4>District</h4>
            <div className='tube-line-body-status Yellow'>
              <img src='/svg/yellow-dot.svg' />
              <p>Minor Delay</p>
            </div>
          </div>

          <div className='tube-line-body-item'>
            <h4>Metropoliton</h4>
            <div className='tube-line-body-status green'>
              <img src='/svg/Ellipse 43.svg' />
              <p>Good Service</p>
            </div>
          </div>

          <div className='tube-line-body-item'>
            <h4>Victoria</h4>
            <div className='tube-line-body-status red'>
              <img src='/svg/red-dot.svg' />
              <p>Suspended</p>
            </div>
          </div>
          <div className='tube-line-body-item'>
            <h4>W & C</h4>
            <div className='tube-line-body-status Yellow'>
              <img src='/svg/yellow-dot.svg' />
              <p>Minor Delay</p>
            </div>
          </div>
          <div className='tube-line-body-item'>
            <h4>London Underground</h4>
            <div className='tube-line-body-status green'>
              <img src='/svg/Ellipse 43.svg' />
              <p>Good Service</p>
            </div>
          </div>
          <div className='tube-line-body-item'>
            <h4>Elizabeth Line</h4>
            <div className='tube-line-body-status green'>
              <img src='/svg/Ellipse 43.svg' />
              <p>Good Service</p>
            </div>
          </div>
          <div className='tube-line-body-item'>
            <h4>DLR</h4>
            <div className='tube-line-body-status Yellow'>
              <img src='/svg/yellow-dot.svg' />
              <p>Minor Delay</p>
            </div>
          </div>
          <div className='tube-line-body-item'>
            <h4>Northern</h4>
            <div className='tube-line-body-status red'>
              <img src='/svg/red-dot.svg' />
              <p>Suspended</p>
            </div>
          </div>
          <div className='tube-line-body-item'>
            <h4>Central</h4>
            <div className='tube-line-body-status red'>
              <img src='/svg/red-dot.svg' />
              <p>Suspended</p>
            </div>
          </div>





        </div>
    </div>
  )
}

export default TubeLine
