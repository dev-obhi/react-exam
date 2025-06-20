import React from 'react'
import "../header.css"
import ok from "../photo/grou.png"
import lo from "../photo/face.png"
import fo from "../photo/ins.png"
import mo from "../photo/tw.png"
import phn from "../photo/call.png"

const Header = () => {
  return (
    
    

    <section className='header'>
     <div className='container'>
      <div className='list-wrap'>
        <div  className='logo'>devlop.me</div>
        <div>
          <nav>
            <li><a href="">home</a></li>
            <li><a href="">about</a></li>
            <li><a href="">protfolio</a></li>
            <li><a href="">blog</a></li>
          </nav>
        </div>
        <div className='nav-btn'>
          <img src={ok} alt="" />
             start project
        </div>
      </div>
    </div>

      <div className='banner'>
        <div className="container">
          <h1>Trusted <span>Partner</span>  for your website <span>Develop.</span></h1>

          <div className="text-wrap">
            <div className='left'>
              <div className='gmail'>
                @williamrey
              </div>
              <div className='icon'>
                <div className='bar'></div>
                 <img src={mo} alt="" />
                 <img src={fo} alt="" />
                 <img src={lo} alt="" />
              </div>

            </div>
            <div className="right">
              <p>Building the words best marketing websites for over a deoade your trusted
                 partner for strtegy, design, and dev</p>
                 <div className='bnr-btn'>
                      <img src={phn} alt="" />
                              Sohedule a call
                  </div>
            </div>
          </div>
        </div>
      </div>
      

    </section>
    
  )
}

export default Header


  