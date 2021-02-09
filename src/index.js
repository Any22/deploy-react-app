import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import {FaYoutubeSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaFacebookSquare} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";

// import {feedback} from './image/feedback.png'


function ComponentsList(){
  return (
    <div>
      <Nv />
      <Compo />
      <Comp1 /> 
      <Slide1/>
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp5 />
    </div> 
  );
}
const Nv = () =>{
  return(
    <div className="nvbar">
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <ReactBootStrap.Navbar.Brand href="#home">Patch Management</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.Nav.Link href="#features">Home</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
      <ReactBootStrap.Nav>
        <ReactBootStrap.Nav.Link href="#pricing">About us</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#deets">Projects</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link eventKey={2} href="#memes">Contact</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
  </div>

  );
  
  
}
const Compo = () =>{
  return (
    <div className="intro" id="#wStart1">
        <h1>Reduce Your Business Risks</h1>
        <h3>Industry Experts in Patch and Vulnerability Management</h3>
        <button type="button" id="button1" className="button"><a href="contact.html"><span>Book a demo</span></a>
        </button>
    </div>                   
  );
}
const Comp1 = () =>{
  return (
    <div className="company" id="wS">
      <div className="about"> 
      <h2>Company</h2> <br />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, facere optio.<br /> Nisi deleniti illum officiis. Neque architecto illum voluptatem exercitationem? <br />Ab beatae architecto laborum provident unde. Molestiae libero voluptas maiores.</p>
      <button type="button" id="button2" className="button"><span>About us</span></button> 
     </div>
    </div>   

  );
}

const Slide1= () =>{
  return(
    <div className="slideshow-container">

      <div className="mySlides">
       <div className="numbertext"></div>
       <img src='https://www.thepcdoctor.com.au/wp-content/uploads/2019/04/why-choose-us.jpg' alt='choose_us'/>
      </div>

      <div className="mySlides">
        <div className="numbertext"></div>
          <img src='https://lh3.googleusercontent.com/1L9CQRs92Gvd3ZVuV4bwS9JW7FVBIoySxRlz2x03DxmIr3hctJYmVFu5732S6B29Yib9Uw=s170' alt='bpractice'/>
      </div>
          
       <div className="mySlides">
         <div className="numbertext"></div>
       <img src='https://lh3.googleusercontent.com/kP6eiOtMLmBDOCzbov3ZXcq3KxN5ZCSYNKcvt0tYaB5eXDEx1ZdC3lo7vrjM83lDLuSbDQ=s86' alt='cycle'/>
       </div>

    </div>

    
  );
}
const Comp2 = () => {
return (
  <div className="intropic" id="introNpic">

      <div className ="contentClass">
         <h2>Our Services</h2> <br/>
         <ul>
           <li>Range of patching solutuions. </li>
           <li>Cater to your patching and vulnerability requirements. </li>
           <li>Flexible patching and vulnerability management solutions.</li>
           <li>Complete visibility</li>
         </ul>
         <div className= "imgCont">
           <img className="imAge" src='https://truedigitalsecurity.com/assets/images/content/Vulnerability_Cycle_01.png' alt="" />
         </div>
      </div>  
  </div>    
);
}

const Comp3 = () =>{
  return (
    <div className="intropic1" id="introNpic1" >
      <div className= "imgCont1">
        <img className="imAge1" src='https://www.manageengine.com/patch-management/images/pmp-banner-images-1.png' alt="" height="240" width="500" />   
      </div> 
      <div className="contentClass1">
        <h2>Choose us</h2>
        <p>Supports Windows/MAC/LINUX and third party patching.</p>
      </div>
    </div>
  
  );
}

const Comp4 = () =>{
  return (
    <div className="feedback">
      <h2>Customer Feedback</h2><br/>
      <img className="imAge2" src='./images/business2.jpeg' alt="" height="240" width="500"/>    
    </div>
  );
}

const Comp5 = () =>{
  return (
    <div className="footer-section">
      <footer>
        <div className="main-footer-content">
          <div className="social_link" id="contact_icon">
            <a  className='icon' href ="https://www.twitter.com"><span><FaTwitterSquare  color='#00acee'/></span></a>
            <a  className='icon' href ="https://www.youtube.com"><span><FaYoutubeSquare  color='#FF0000'/></span></a>
            <a  className='icon' href ="https://www.facebook.com"><span><FaFacebookSquare color='#3b5998'/></span></a> 
            <a  className='icon' href ="https://github.com/Any22/"><span><FaGithubSquare  color='black'/></span></a> 
            <a  className='icon' href ="https://www.instagram.com"><span><FaInstagramSquare  color='#3f729b'/></span></a>
          </div>
          <br/>
        <div className="copyRight">
          <p><span>© Copyright 2020</span> VP Management Solutions </p>
        </div>
        </div>
      </footer>
    </div>
    
  );
}
ReactDOM.render(<ComponentsList />,document.getElementById('root'));

