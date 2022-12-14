import React from 'react'
import serviceapi from '../API/serviceApi'
const Services = () => {
    const [serviceData,setServiceData] =React.useState(serviceapi);
    
  return (
    <>
        <section className='service-main-container'>
             <div className='container service-container'>
                <h1 className='main-heading text-center fw-bold'>How to send money</h1>
                <div className="row">
                    {
                        serviceData.map((currEle)=>{
                            const {id,logo,title,info}=currEle;
                            return (
                                <>
                                    <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                                        <i className={`fontawesome-style ${logo}`}></i>
                                        <h2 className="sub-heading">{title}</h2>
                                        <p>{info}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                    
                </div>
             </div>
        </section>
    </>
  )
}

export default Services