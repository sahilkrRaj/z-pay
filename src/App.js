import React from 'react'
import AboutUs from './Pages/About'
import Services from './Pages/Services'
import ContactUs from './Pages/Contact'
import Home from './Pages/Home'
import Error from './Pages/Error'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/z-pay" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="*" element={<Error/>}/>
          {/* <Route
            path="*"
            element={<Navigate to="/error" replace />}
          /> */}
      </Routes>
      
    
    </BrowserRouter>
  )
}

export default App
