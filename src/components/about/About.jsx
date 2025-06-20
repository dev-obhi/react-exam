import React from 'react'
import "../about.css"
import ico from "../photo/div.png"

const About = () => {
  return (
    <section className='about'>
        <div className="container">
            <div className="side-icon">
                <div><img src={ico} alt="" /></div>
                
                <div className='ab-btn'>
                    About
                </div>
            </div>
            <div className='ab-text'>
                <h2>I've been <span>Developing</span>  Websites since <span>2013</span></h2>
                <p>we start every new client interaotion with an in-depth discover call where we get to know each other 
                    and recommand the best cours of action </p>
            </div>
            <div className='button'>
                <div className='b-txt'>Previously worked on </div>
                <div className="fb">
                    <div className="top">
                        <div className='buttons' id='one '>awwward</div>
                        <div className='buttonss' id='two'>Facebook</div>
                        <div className='buttonsss' id='tree'>cssDesign</div>

                    </div>
                    <div className="bot">
                        <div className='buttons' id='one '>CSS INNER</div>
                        <div className='buttonss' id='two'>/thoughtWork</div>
                        <div className='buttonsss' id='tree'>Autodesk</div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About