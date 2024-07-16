import React from 'react'
import Home from './home/Home';
import { Toaster } from 'react-hot-toast';

import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from './contact/Contact';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser, setAuthUser]= useAuth()
  console.log(authUser);

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes >
      <Route path='/' element={<Home/>}/>
      <Route path='/Course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Contactus' element={<Contact/>}/>

    </Routes>
    <Toaster/>
    </div>

    </>
  )
}

export default App;
