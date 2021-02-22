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
      <Slider/>
      <Comp2 />
      <Comp3 />
      <Feedback />
      <Project />
      <Footer />
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
    <div className="intro" id="#wStart1" style={{backgroundImage:"url(image/business2.jpeg)"}}>
        
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

const Slider= () =>{
  return(
    <div className="slideshow-container">

      <div className="mySlides">
       <div className="numbertext"></div>
       <img src='image/choose.jpg' alt='choose_us'/>
      </div>

      <div className="mySlides">
        <div className="numbertext"></div>
          <img src='image/Best_pratice.jpg' alt='bpractice'/>
      </div>
          
       <div className="mySlides">
         <div className="numbertext"></div>
       <img src='image/feed.png' alt='cycle'/>
       </div>
        <div className="mySlides">
         <div className="numbertext"></div>
       <img src='image/customers.png' alt='cycle'/>
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
         </div>
         <div className= "imgCont">
           <img className="imAge" src='image/service3.png' alt="" height="240" width="500"  />
         </div>
    
  </div>    
);
}

const Comp3 = () =>{
  return (
    <div className="intropic1" id="introNpic1" >
      <div className= "imgCont1">
        <img className="imAge1" src='/image/service2.png' alt="" height="240" width="500" />   
      </div> 
      <div className="contentClass1">
        <h2>Choose us</h2>
        <p>Supports Windows/MAC/LINUX and third party patching.</p>
      </div>
    </div>
  
  );
}

const Feedback = () =>{
  return (
    <div className="feedback">
      <h2>Customer Feedback</h2><br/>
      <img className="imAge2" src='/image/feedback.png' alt="" height="240" width="500"/>    
    </div>
  );
}

const Project = () =>{
  return (
    <div class="proJect" id="proj">
    <h2>Support</h2>
    

    <div class="cardcontainer">
      <div class="card-deck">
          <div class="card mb-4">
           
              <div class="card-body">
                <h4 class="card-title">Request Support</h4>
                <p class="card-text">We believe in continued maintenance and reporting. Contact adminitrative support using this online support request form</p>
                <a href="contact.html" class="btn btn-primary"><span>Go</span></a>
              </div>
          </div>
      
          <div class="card mb-4">
            <div class="card-body">
              <h4 class="card-title">Request Demo</h4>
              <p class="card-text">Please don't just take our words.We also conduct a Q/A session to understand your requirements .In addition to this request a free personalized demo today</p>
              <a href="#" class="btn btn-primary">Go</a>
            </div> 
        </div> 
          <div class="w-100 d-none d-sm-block d-md-none"></div>
          <div class="card mb-4">
            <div class="card-body">
              <h4 class="card-title">Need features</h4>
              <p class="card-text">Think you need a feature in Patch Manager service? Let us know</p>
              <a href="#" class="btn btn-primary">Go</a>
            </div>
        </div>

           <div class="w-100 d-none d-md-block d-lg-none"></div>
           <div class="card mb-4">
            <div class="card-body">
              <h4 class="card-title">Get quotes</h4>
              <p class="card-text">Get a personalized quote for your business needs</p>
              <a href="contact.html" class="btn btn-primary">Go</a>
            </div>
        </div>
        
      </div>
  </div>  
  </div>
    
  );


}

const Footer = () =>{
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

