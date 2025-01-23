import React from 'react'

function Weather() {
  return (
    <div className='Weather'>
      <div className='Weather-and-Air'>
        <div className='Weather-header'>
          <p>Weather & Air</p>
          <span>See Details</span>
        </div>
        <div className='Weather-information'>
          <div className='data-location'>
            <div className='weather-loaction'>
              <img src='/svg/akar-icons_location.svg'></img>
              <p>London</p>
            </div>
            <p>Monday, 16 September</p>
          </div>
          <div className='Weather-temperature'>
            <div className='temperature'>
              <img src='/svg/cloud-2.svg'></img>
              <p>32°c</p>
            </div>
            <div className='humidity'>
              <p>Mostly Cloudy</p>
              <span>26°c / 36°c</span>
            </div>
          </div>
          <div className='sun-details'>
            <div className='sunrise'>
              <img src='/svg/sunrise.svg'></img>
              <p>sunrise</p>
              <p>6:00 am</p>
            </div>
            <div className='sunset'>
              <img src='/svg/sunset.svg'></img>
              <p>sunset</p>
              <p>18:00 pm</p>
            </div>
          </div>
          <div className='other-details'>
            <div className='left-details'>
              <div className='item'>
                <img src='/svg/wind.svg'></img>
                <p>17 km/h Wind </p>
              </div>
              <div className='item'>
                <img src='/svg/Direction.svg'></img>
                <p>W Wind Direction </p>
              </div>
              <div className='item'>
                <img src='/svg/rain.svg'></img>
                <p>0% Precipitation </p>
              </div>
            </div>
            <div className='right-details'>
              <div className='item'>
                <img src='/svg/droplet.svg'></img>
                <p>40% Humidity </p>
              </div>
              <div className='item'>
                <img src='/svg/Air-Quality.svg'></img>
                <p>Good Air Quality</p>
              </div>
              <div className='item'>
                <img src='/svg/Pressure.svg'></img>
                <p>1025.9 mph</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='Weather-and-Forecast'>
        <div className='Weather-header'>
          <p>Weather Forecast</p>
        </div>
        <div className='day-forcast'>
          <div className='data-items'>
            <div className='data-item'>
              <img src='/svg/Rainy-Bulk.svg'></img>
              <div className='day-number'>
                <p>Tuesday, 17 September</p>
                <span>Cloudy</span>
              </div>
            </div>
            <div className='day-temperature'>
              <p>27°c</p>
            </div>
          </div>

          <div className='data-items'>
            <div className='data-item'>
              <img src='/svg/Sunny.svg'></img>
              <div className='day-number'>
                <p>Thursday, 18 September</p>
                <span>Sunny</span>
              </div>
            </div>
            <div className='day-temperature'>
              <p>28°c</p>
            </div>
          </div>

          <div className='data-items'>
            <div className='data-item'>
              <img src='/svg/Sunny.svg'></img>
              <div className='day-number'>
                <p>Friday, 19 September</p>
                <span>Sunny</span>
              </div>
            </div>
            <div className='day-temperature'>
              <p>26°c</p>
            </div>
          </div>

          <div className='data-items'>
            <div className='data-item'>
              <img src='/svg/PartlyCloudy.svg'></img>
              <div className='day-number'>
                <p>Saturday, 20 September</p>
                <span>Partly Cloudy</span>
              </div>
            </div>
            <div className='day-temperature'>
              <p>25°c</p>
            </div>
          </div>

          <div className='data-items'>
            <div className='data-item'>
              <img src='/svg/Groupfdf.svg'></img>
              <div className='day-number'>
                <p>Sunday, 21 September</p>
                <span>Partly Cloudy</span>
              </div>
            </div>
            <div className='day-temperature'>
              <p>24°c</p>
            </div>
          </div>

          <div className='data-items'>
            <div className='data-item'>
              <img src='/svg/Groupfdf.svg'></img>
              <div className='day-number'>
                <p>Sunday, 22 September</p>
                <span>Partly Cloudy</span>
              </div>
            </div>
            <div className='day-temperature'>
              <p>25°c</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
