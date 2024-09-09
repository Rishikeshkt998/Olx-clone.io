import React, { useState ,useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom'

import Logo from '../../olx-logo.png';
import './Signup.css';
import {auth,firestore} from '../../firebase/config'
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { addDoc ,collection} from 'firebase/firestore';
import { FirebaseContext } from '../../store/FirebaseContext';

export default function Signup() {
  const navigate=useNavigate()
  const [Username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  
  const handleSubmit=(e)=>{
    e.preventDefault()
        if (Username===null ||Username==="" ){
          alert("Username is required!")
        
        } else if(password===null ||password===""){
          alert("Password is required!")
        
        } else if(email===null ||email===""){
          alert("Email is required!")
        
        } else if(phone===null ||phone===""){
          alert("Mobile number is required!")
        }else{
          createUserWithEmailAndPassword(auth,email.trim(),password.trim()).then((result)=>{
            const user =result.user
            updateProfile(user,{displayName:Username}).then(()=>{
              const userCollection=collection(firestore,'users')
              addDoc(userCollection,{
                id:user.uid,
                Username:Username,
                mobilenumber:phone
              }).then(()=>{
                navigate("/login")
              })
            })
          }).catch((error)=>{
            alert(error.message)
          })
  
        }
    }
  
  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={Username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to={'/login'}>
        <a>Login</a>
        </Link>
      </div>
    </div>
  );
}
