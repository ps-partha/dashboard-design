import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  const [show, setShow] = React.useState(true);

  const handleNavClick = () => {
    setShow((prevShow) => !prevShow); // Toggle show state
  };

  return (
    <div className={`sidebar ${show ? "expanded" : "collapsed"}`}>
      {/* Profile Section */}
      {!show && <FontAwesomeIcon icon={faArrowRight} onClick={handleNavClick} />}
      <div className="Profile" style={{
        border: show
          ? '2px solid #D9DCE1'
          : 'none',
      }}>
        <img src="/images/partha.jpg" alt="Profile" />
        {show && (
          <div className="user-info">
            <h3>Partha Sarker</h3>
            <p>User_ID#007LND</p>
          </div>
        )}
        {show && <FontAwesomeIcon icon={faArrowRight} onClick={handleNavClick} />}
      </div>

      {/* Menu Section */}
      <div className="menu">
        {/* Menu Part 1 */}
        <div className="menu-part">
          <span className="list-title">{show && "MENU"}</span>
          <ul>
            <li className="active">
              <img src="/svg/dashboard-square-01.svg" alt="Dashboard" />
              {show && <span>Dashboard</span>}
            </li>
            <li>
              <img src="/svg/bus-01.svg" alt="Transportation" />
              {show && <span>Transportation</span>}
            </li>
            <li>
              <img src="/svg/cloud.svg" alt="Weather Update" />
              {show && <span>Weather Update</span>}
            </li>
            <li>
              <img src="/svg/location-08.svg" alt="Maps & Traffic" />
              {show && <span>Maps & Traffic Insights</span>}
            </li>
            <li>
              <img src='/svg/bus-01.svg' />
              {show && <span>Transportation</span>}
            </li>
            <li>
              <img src='/svg/waterfall-up-01.svg' />
              {show && <span>Waterfall</span>}
            </li>
            <li>
              <img src='/svg/news.svg' />
              {show && <span>News</span>}
            </li>
          </ul>
        </div>

        {/* Menu Part 2 */}
        <div className="menu-part">
          <span className="list-title">{show && "OTHER"}</span>
          <ul>
            <li>
              <img src="/svg/settings-01.svg" alt="Settings" />
              {show && <span>Settings</span>}
            </li>
            <li>
              <img src="/svg/headset.svg" alt="Help Center" />
              {show && <span>Help Center</span>}
            </li>
            <li>
              <img src="/svg/About.svg" alt="About" />
              {show && <span>About</span>}
            </li>
            <li>
              <img src="/svg/logout-03.svg" alt="Logout" />
              {show && <span>Logout</span>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
