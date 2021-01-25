import React from "react";
import Header from "../common/header/header"
import './estres.css'


import Logo from '../assets/estresimgs/bienestar.jpg';
import Logo2 from '../assets/estresimgs/exe.png';
import Logo3 from '../assets/estresimgs/respiracion.jpg';
import Logo4 from '../assets/estresimgs/f4.jpg';
import Logo5 from '../assets/estresimgs/f5.jpg';
import Logo6 from '../assets/estresimgs/f6.jpg';
import Logo7 from '../assets/estresimgs/f7.jpg';

function Estres() {
  return (
    <div class="container">
        
            <div><a href="https://www.youtube.com/watch?v=I5tip6L5fOQ" target="_blank"><img  src={Logo} alt="Yayaan Logo"/></a></div>
            <div class="vertical"><img src={Logo2} alt="img"/></div>
            <div class="horizontal"><img src={Logo3} alt="img"/></div>
            <div><img src={Logo4}alt="img"/></div>
            <div><img src={Logo5} alt="img"/></div>
            <div><img className="big" src={Logo6} alt="img"/></div>
            <div><a href="https://www.youtube.com/watch?v=yKLjmSMv1KA" target="_blank"><img src={Logo7} alt="img"/> </a></div>
           
           
        </div>
  );
}

export default Estres;