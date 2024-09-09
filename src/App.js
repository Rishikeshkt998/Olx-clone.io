import React , { useEffect ,useContext}from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import { Authcontext } from './store/FirebaseContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login'
import Create from './Pages/Create'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import View from './Pages/ViewPost'
import PostView from './store/PostContext';

function App() {
  const {setUser} =useContext(Authcontext)
  useEffect(() => {
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
    
  }, )
  return (
    <div>
      
      <PostView>
      <BrowserRouter>
      
      <Routes>
      <Route path='/' element={<Home />}>
    
    </Route>
    <Route path='/signup' element={<Signup />}>
    
    
    </Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/create' element={<Create/>}></Route> 
    <Route path='/view' element={<View/>}></Route>   

         

      </Routes>
      
        
         

      
  </BrowserRouter>
      </PostView>
      
      
    </div>
  );
}

export default App;
