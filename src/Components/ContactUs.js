import React from 'react'

const ContactUs = () => {

  const [userData,setUserData] =React.useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    address:"",
    message:""
  });

  const postUserData = (event) => {
      let name=event.target.name;
      let value=event.target.value;
      setUserData({...userData,[name]:value});
  }

  const submitData= async (event) => {
      event.preventDefault();
      const { firstName,lastName,phone,email,address,message }=userData;
      if(firstName && lastName && phone&&email&&address&&message) {
        const res=fetch("https://z-pay-7400a-default-rtdb.firebaseio.com/userDataRecords.json",
          { method:"POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify(
              {
                firstName,
                lastName,
                phone,
                email,
                address,
                message
              }
            )
          }
        );
        console.log(res);
        if(res){
          alert("Data Stored");
        }else{
          alert("Pls! fill data");
        }

      }else{
        alert("Pls! fill data");
      }
      
      
  }

  return (
    <>
      <section className='contactus-section'>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className='main-heading'>Connect with Our <br/> Sales Team.</h1>
                  <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, possimus commodi perferendis laborum quisquam eaque saepe eius pariatur dicta tempore necessitatibus harum quis fugiat et consequuntur quia nostrum corrupti? Incidunt!</p>
                  <figure>
                    <img src="./images/hero1.jpg" alt="ContactUsImg" className='img-fluid'/>
                  </figure>
                </div>

                <div className="contact-rightside col-12 col-lg-7">
                    <form method='POST'>
                      <div className="row">
                        <div className="col-12 col-lg-6 contact-input-feild ">
                          <input type="text" className='form-control' name='firstName' value={userData.firstName} onChange={postUserData} placeholder='First name' />
                        </div>
                        <div className="col-12 col-lg-6 contact-input-feild ">
                          <input type="text" className='form-control' name='lastName' value={userData.lastName} onChange={postUserData} placeholder='Last name' />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-lg-6 contact-input-feild ">
                          <input type="text" className='form-control' name='phone' value={userData.phone} onChange={postUserData} placeholder='Phone number' />
                        </div>
                        <div className="col-12 col-lg-6 contact-input-feild ">
                          <input type="text" className='form-control' name='email' value={userData.email} onChange={postUserData} placeholder='Email id' />
                        </div>
                      </div>
                      <div className="col-12 col-lg-12 contact-input-feild ">
                          <input type="text" className='form-control' name='address' value={userData.address} onChange={postUserData} placeholder='Add Address' />
                      </div>
                      <div className="col-12 col-lg-12 ">
                          <input type="text" className='form-control' name='message' value={userData.message} onChange={postUserData} placeholder='Enter Your Message' />
                      </div>
                      <div class="form-check form-checkbox-style ">
                          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                          <label class="form-check-label" className='main-hero-para' for="flexCheckChecked">
                            I agree with all the term and conditions Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                          </label>
                      </div>
                      <button type='submit' onClick={submitData} className='btn btn-style w-100'>Submit</button>
                    </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs