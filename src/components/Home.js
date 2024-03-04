import React from 'react'
import Nav from './Nav'
import Body from './Body'
import {Outlet} from 'react'
import About from './About'

export const Home = () => {
  return (
	<header className='grid grid-cols-5 h-screen w-screen max-md:flex max-md:flex-col max-md:gap-8'>

{/* dark:text-white dark:bg-gray-800 */}
		<Nav/>

		{/* { ismoblie()?<Outlet/>
		:
		<Body/>
		
		} */}
		{/* <Body/> */}
		<About/>

	</header>
  )
}
