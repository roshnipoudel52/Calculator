import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Herosection from './Herosection'
import Project from './Project'
import About from './About'
import Contact from './Contact'
import MAp from './MAp'
import { Link } from 'react-router'


export default function Index() {
  return (
    <div>
      <>
      <Link to ="/">
      
      <Herosection/>
   <Project/>
   <About/>
   <Contact/>
   <MAp/>
   
   </Link>
      
      
      
      </>
    </div>
  )
}
