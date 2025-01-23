import React from 'react'

function Header() {
    const [refresh, setRefresh] = React.useState(60);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setRefresh(refresh => {
                if (refresh > 0) {
                    return refresh - 1;
                }else {
                    return 60;
                }
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='header'>
            <div className='header-left'>
                <div className='time'>
                    <h2>11:30 AM</h2>
                    <p>Sun | 22 Sep, 2024</p>
                </div>
                <div className='search'>
                    <div className='search-location'>
                        <select>
                            <option value='London' selected>London</option>
                            <option value='New York'>New York</option>
                            <option value='Paris3'>Paris</option>
                            <option value='Berlin'>Berlin</option>
                        </select>
                    </div>
                    <div className='Line'>|</div>
                    <div className='search-input'>
                        <img src='/svg/search-01.svg' />
                        <input type="text" placeholder='Search' />
                    </div>
                </div>
            </div>
            <div className='header-rigth'>
                <img src='/svg/Notification Bell.svg' className='notification' />
                <div className='reload'>
                    <img src='/svg/reload.svg' />
                    <p>{refresh}s</p>
                </div>
                <div className='Emergency'>
                    <img src='/svg/phone.svg' />
                    <p>Emergency</p>
                </div>
            </div>
        </div>
    )
}

export default Header
