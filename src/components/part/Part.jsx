import React from 'react'
import "../part.css"
import ic from "../photo/div1.png"
import mo from "../photo/Group.png"
import go from "../photo/Group1.png"

const Part = () => {
  return (
    <section className='part'>
        <div className='container'>
            <div className='hol-wrap'>
                <div className="i-wrap">
                    <img src={ic} alt="" />
                    <div className='part-btn'>
                        Why choose me
                    </div>
                </div>
                <div className='part-txt'>
                    <div className='on'>
                    My extensive list of Skills
                    </div>
                    <div className="to">
                         Building the words best marketing websites for over a deoade your trusted
                         partner for strtegy, design, and dev
                    </div>
                </div>
                <div className='group'>
                    <img src={mo} alt="" />
                </div>

                 <div className='bur'>
                    <div className="bur1">
                        <img src={go} alt="" />
                         <h3>HTML&CSS</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores debitis accusantium   sint eaque unde.
                           </p>
                    </div>
                    <div className="bur1" id='ho'>
                         <img src={go} alt="" />
                         <h3>HTML&CSS</h3>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores debitis accusantium sint eaque unde.
                        </p>
                    </div>
                    <div className="bur1">
                         <img src={go} alt="" />
                         <h3>HTML&CSS</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores debitis accusantium sint eaque unde.
                          </p>
                    </div>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default Part