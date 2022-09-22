import React from 'react'
import workapi from '../API/workApi';


const HowItWorks = () => {

    const [workData,setWorkData] =React.useState(workapi);

  return (
    <>
    <section className="work-container container">
        <h1 className='main-heading text-center'></h1>
        <div className="row">
            {
                workData.map((currElem)=>{
                    const {id,logo,title,info}=currElem;
                    return(
                        <div className="col-12 col-lg-4 text-center">
                            <i class={`fontawesome-style ${logo}`}></i>
                            <h2 className='sub-heading'>Download App</h2>
                            <p className="main-hero-para w-100">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.df dfaf dagf das Nemo placeat aliquam, laudantium pariatur?
                            </p>
                        </div>
                    )
                    
                })
            } 
            
            
        </div>
    </section>
    </>
  )
}

export default HowItWorks