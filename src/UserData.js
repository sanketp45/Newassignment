import React from 'react';
import Discussion from './Discussion.jpg';
import Login from "./Login.jpg";
import analysis from './analysis.jpg'
import meeting from './meeting.jpg';
import peace from './peace.jpg';

import './App.css';
const UserData=() =>
{
  return(
   <>
    <div className="wrapper">
    <div className="info">
       <h4>Welcome to the Landkit <br></br>Develop Anything </h4>
        <p>Build a beautiful, modern website with flexible 
        Bootstrap components built from scartch</p>      
       <button   className="buttons">View All Pages</button>  
       <button className="buttons">Documentation</button> 
    </div>
    <div className="photo">
    <img src={Discussion} />
    </div>
    </div>
   <div className="description">
    <div>
      <h4>Build for Developers</h4>
      <p>Landkit is built to make your life easier, Variables,build tooling, 
        Documentation,and reusable components</p>
      
   </div>  
   <div>
    <h4>Designed to be Modern</h4>
     <p>Designed with latest design 
       trends in mind Landkit 
       feels modern, minimal, and beautiful
       
       </p> 
   </div>
    <div>
      <h4>Documentation for everything</h4>
        <p>we have written extensive Documentation
         for components and tools so you never have to reverse engineer everthng</p>       
   </div>
   </div>
   <div className="brands">
     <div>Airbnb</div>  
     <div>Coinbase</div> 
     <div>NetFlix</div>
     <div>Dribble</div>
     

   </div>
     <div className="loginimage">
             <div>
               <img src={Login} />

             </div>
           <div>
              <h4>The most useful resources ever created for dev</h4>
              <p>Using Landkit to build site means never worrying about 
                designing another page or cross browser
                comaptibility, over ever growing library of components 
                and predesigned layouts will make your life easier
              </p>
           
             <div className="points">    
              <div>Lifetime Updates</div>
              <div>Tech Support</div>
              <div>Tones of Assest</div>
              <div>Integration Ready</div>
              </div>    
              </div>
              </div>
         <div className="bootstrapinfo">
            <div className="bootstrapthemes">
             <h4>We have lots of experience Buliding Bootstrap themes</h4>
              <p>We've built well over a dozen Bootstrap themes and sold tens of thousands of copies</p>
               <h5>Bootstrap users since the begining</h5> 
                 <p>We've been developing Bootstrap since it was publicly released in 2011</p>
              <h5>Deep understanding of Bootstrap</h5>
              <p>We've watched Bootstrap grow up over the years and understanding
                it better than almost anyone</p>   
            </div>
              
           <div className="analysisimage">
               <img  src={analysis} />
           </div>
           
        </div>     
       <div class="userresponse">
          <h4>Our Customers are our biggest fans</h4>
        <p><span>We dont like to brag, but we don't mind letting our customers do it for us</span><span>
       Here are a few nice things folks have said about our themes over the years
</span></p>
          

       </div>
       <div className="meeting">
         <div>
           <img src={meeting} />
        </div>
         <div className="airbnb">
          <h2>Airbnb</h2>
          <p><span>Landkit is hands down the most useful front end Bootstrap</span>
          <span> theme I've ever used, I cant wait to see it again 
             for my next project </span> </p>



         </div>


       </div>
       <div className="support">
        <div className="values">
           <h2><span>Stay Focused on Your Bussiness</span>
              <span>Lets us handle the design</span>
            </h2>
            <p><span>You have bussiness to run stop worrying about</span> 
             <span>cross platform browser bugs, designing new pages</span><span> keeping your
               components upto date.Let us do that
             </span>
            </p>  
            <div className="salesdata">
            <p><span>100%</span>
             <span>Satisfacion</span></p>    
             <p><span>24/7</span>
             <span>Support</span></p>
             <p><span>100+</span>
             <span>Sales</span></p>    
               
              
           </div>           

        </div>
          <div>

        <img src={peace} />

          </div>

       </div>
       <div className="bcgrndcolor">
       <div className="pricing">
        <h2>Fair Simple Pricing for all</h2>
        <p><span>All types of bussiness needs access to development resources</span>
        <span>so we give you the option to decide how much you need to use</span></p>

       </div>

 <div className="cards">

 <div className="column">
   <div className="card">
     <h3>$ 29/mo <span>Per Seat</span></h3>
     <p>Rich Responsive landing pages</p>
     <p>100+styles components</p>
     <p>Flexible, Simple License</p>
     <p>Speedy Buliding Tool</p>
     <p>6 months Free supoort</p>
 
   </div>
 </div>

 <div className="column">
   <div className="card">
     <h3>Enterprise</h3>
     <p><span>We offer variable pricing with </span>
     <span>discounts for larger orginizations</span>
     <span> Get in touch with us and we'll figure it out</span>
     <span>something that works for everyone</span> 
     </p>


   </div>
 </div>

 
</div>
<div className="qna">
<div> 
 <h2>Can I use Landkit for my clients</h2>
 <p>Absolutely. The bootstrap Themes License <span>allows you to build
   a website for a presonal use or for a client
 </span>
    </p>
    </div>
<div>
<h2> Do i get free updates</h2>
<p>Yes. We update all of our themes with each bootstrap 
  <span>updates plus are constantly adding new components</span> 
  <span>Pages, and features to our themes</span> 
  </p>
</div>
<div>
<h2> Is there a Money back gurantee</h2>
<p>Yes. Bootstrap themes comes with Satisfacion gurantee 
  <span>Submit and get your money back</span> 
   
  </p>
</div>
<div>
<h2> Does it work with React? Rails ? Laravel ?</h2>
<p>Yes. Landkit has basic CSS/JS File you can include. 
  <span>if you want to enable deeper custmomization, you can intergrate </span> 
  <span>it into your Assests or build process</span> 
  </p>
</div>
</div>

</div>  

<div className="buy">
 <div className="buyinfo">
    <h2>Get a Landkit and Save a time</h2>
    <p><span>stop wasting the time to do it right way</span> 
      <span>build a site from scartch</span>
      <span>Landkit is faster,easier,and you still have complete control</span></p>
 <button className="buttons">Buy It Now </button>
 </div>



</div>

<div className="footer">
<div>
<h2>Landkit</h2>

</div>
<div>
  <div>Products</div>
  <div>Page Builder</div> 
  <div>UI Kit</div>
  <div>Changelog</div> 
  <div>Style Guide</div>
  <div>Documentation</div>
</div>

<div>
  <div>Services</div>
  <div>Documentation</div> 
  <div>Changelog</div>

  <div>Page Builder</div>
  <div>UI kit</div>
</div>

<div>
  <div>Connect</div>
  <div>Page Builder</div> 
  <div>UI Kit</div> 
<div>Changelog</div>
  <div>Style guide</div>
  <div>Documentation</div>
</div>
<div>
  <div>Legal</div>
  <div>Documentation</div> 
  <div>Changelog</div>

  <div>PageBuilder</div>
  
</div>

</div>

 </>
  )


}
export default UserData
