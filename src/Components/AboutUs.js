import React from 'react'
import howToUseApp from '../API/HowToUse'

const AboutUs = () => {
    const [aboutData,setAboutData]=React.useState(howToUseApp);
  return (
    <>
        <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">

                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src="./images/hero3.jpg" alt="" />
                        </div>
                        <div className="col-12 col-lg-5 our-services-list">
                            <h3 className='mini-title'>
                                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                            </h3>
                            <h1 className="main-heading">How to use the App?</h1>
                            {
                                aboutData.map((currEle,index)=>{
                                        const {id,title,info}=currEle;
                                        return<>
                                                <div className="row our-services-info">
                                                    <div className="col-1 our-services-number">{index+1}</div>
                                                    <div className="col-10 our-services-data">
                                                        <h2>{title}</h2>
                                                        <p className="main-hero-para">{info}</p>
                                                    </div>
                                                </div>
                                        </>
                                })
                            }
                            
                            <br/>
                            <button className='btn btn-style btn-style-border'>Learn more</button>
                        </div>

                    </div>
                </div>
        </section>

                            
        <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                    <div className="row">

                        
                        <div className="col-12 col-lg-5 our-services-list our-services our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                            <h3 className='mini-title'>
                                -- SUPPORT IN ANY LANGUAGE
                            </h3>
                            <h1 className="main-heading">World class support is available 24/7</h1>
                            {
                                aboutData.map((currEle,index)=>{
                                        const {id,title,info}=currEle;
                                        return<>
                                                <div className="row our-services-info">
                                                    <div className="col-1 our-services-number">{index+1}</div>
                                                    <div className="col-10 our-services-data">
                                                        <h2>{title}</h2>
                                                        <p className="main-hero-para">{info}</p>
                                                    </div>
                                                </div>
                                        </>
                                })
                            }
                            
                            <br/>
                            <button className='btn btn-style btn-style-border'>Learn more</button>
                        </div>

                        <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                            <img src="./images/hero3.jpg" alt="" />
                        </div>

                    </div>
                </div>
        </section>

    </>
  )
}

export default AboutUs