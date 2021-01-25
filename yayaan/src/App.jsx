import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signout } from './helpers/auth';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './common/footer/index'
import Header from './common/header/header'
import Logo from './assets/YAYAAN.png';
import './indexscss.scss'
function App({ history }) {
  return (
    <div className='main-container'>
           <Header/>
            <ToastContainer />
            <div className="welcome-container">
            <p className="welcome-text">Bienvenido !</p>
            <button className="welcome-button"
                  onClick={() => {
                    signout(() => {
                      toast.error('Signout Successfully');
                      history.push('/');
                    });
                  }}
                  >
                  Signout
                </button>
            <img  src={Logo} alt="Yayaan Logo"/>
           
            
              
        </div>
        <div><Footer/>
     </div>
        
    </div>

  );
}

export default App;