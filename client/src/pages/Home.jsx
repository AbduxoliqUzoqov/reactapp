import imdg from "../assets/1000106542.jpg"
import React, {useState, useEffect } from 'react';
import { useAuthContext } from "./../context/AuthContext.jsx";
import Modal from "./../components/Modal.jsx";
import Message from "./../components/Messages.jsx";
import axios from "axios";


const Home = () => {
   const [isModalt, setIsModalt] = useState(false);
   const { authUser, setAuthUser } = useAuthContext();
  return (<div>
    <div className="wrapper">
      <section className="flex">
         <div className="chat-data">
           <img src={imdg} alt=""/>
           <div className="flex2">
               <h4>Milligramm</h4>
               <span>*** ta foydalanuvchi</span>
            </div>
         </div>
         <div onClick={()=>setIsModalt(true)} className="auth-user">
            <img src={authUser.image ||imdg} alt=""/>
         </div>
      </section>
      
      <Message/>
      
   </div>
  
   {isModalt && <Modal closeModal={setIsModalt} />}
   </div>);
}

export default Home
