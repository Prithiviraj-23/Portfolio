import React from 'react'
import Nav from './Nav'
import Body from './Body'
import {Outlet} from 'react'
import About from './About'
import Contact from './Contact'
import Tech from './Tech'
import { BrowserRouter, Route, Link ,Routes,HashRouter} from 'react-router-dom';

export const Home = () => {
  return (

	<BrowserRouter>
	<header className='box-border grid grid-cols-5 h-screen w-screen max-md:flex max-md:flex-col max-md:gap-8 dark:bg-gray-950 font-sans'>

{/* dark:text-white dark:bg-gray-800 */}
		<Nav/>
		 
		 <Routes>

			<Route path="/" element={<Body/>} />
			<Route path="/about" element={<About/>} />
			<Route path="/contact" element={<Contact/>} />
			<Route path='/tech'element={<Tech/>}/>
		</Routes>


		
		

	</header>
	</BrowserRouter>
  )
}
