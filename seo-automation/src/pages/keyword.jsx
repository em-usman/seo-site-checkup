import React from 'react'
import '../styles/keyword.css'
// import dashboard from '../images/dashboard.png'


function keyword() {
  return (
    <section className="responsive-section">
    <div className="content">
      <h1>Create automated checkups</h1>
      <p>
        Get a quick overview of your site's load speed, and uptime with built-in automation tools.
        Website monitoring and site load speed features offer a one-step tool to create automation
        processes for specific time intervals.
      </p>
      <button>Start Free Trial</button>
    </div>
    <div className="map-container">
      {/* <img src={dashboard} alt="World Map" className="map-image" /> */}
    </div>
  </section>
  )
}

export default keyword