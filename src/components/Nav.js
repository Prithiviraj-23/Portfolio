import React, { useState } from 'react'
import { Menu } from 'lucide-react';
import { Home } from 'lucide-react';
import { ListTree } from 'lucide-react';
import { FolderOpenDot } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { CircleUser } from 'lucide-react'
import { BrowserRouter, Route, Link, Routes, HashRouter } from 'react-router-dom';
const Nav = () => {

	const [downdrop, setdowndrop] = useState(false)
	return (

		<nav className='max-w-full box-border col-span-1 max-md:row-span-1 flex flex-col justify-around border-black shadow-xl max-md:flex-row max-md:justify-between max-md:items-center  max-md:py-2 max-md:px-4 dark:text-white dark:bg-gray-900' >


			<h2 className='font-bold text-xl w-full text-center col-span-2  max-md:max-w-fit dark:text-white'> Portfolio</h2>

			<div className='w-full flex flex-col gap-5  justify-center items-center text-lg max-md:flex-row max-md:justify-between max-[710px]:hidden'>
			<Link to='/'>
				<button className='flex flex-row justify-center items-center  shadow-lg gap-4 p-2 max-w-28 border-black md:border-b-2 hover:transform -hover:translate-x-1 -hover:translate-y-1 hover:scale-105 hover:text-red-500'>
					
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
						<div>
							Home
						</div>

				</button>
				
				</Link>
				<Link to='/about'>
				<button className='flex flex-row justify-center items-center  md:shadow-lg gap-4 p-2 max-w-28 border-black md:border-b-2 hover:transform -hover:translate-x-1 -hover:translate-y-1 hover:scale-105 hover:text-red-500'>
					
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
						<div>
							About
						</div>

					
				</button>
				</Link>
				<Link to='.service'>
				<button className='flex flex-row justify-center items-center  md:shadow-lg gap-4 p-2 max-w-28 border-black md:border-b-2 hover:transform -hover:translate-x-1 -hover:translate-y-1 hover:scale-105 hover:text-red-500 '>


					
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-tree"><path d="M21 12h-8" /><path d="M21 6H8" /><path d="M21 18h-8" /><path d="M3 6v4c0 1.1.9 2 2 2h3" /><path d="M3 10v6c0 1.1.9 2 2 2h3" /></svg>		<div>
							Service
						</div>

					
				</button>
				</Link>
				<Link to='/tech'>
				<button className='flex flex-row justify-center items-center  md:shadow-lg gap-4 p-2 max-w-28 border-black md:border-b-2 hover:transform -hover:translate-x-1 -hover:translate-y-1 hover:scale-105 hover:text-red-500 '>
					
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open-dot"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" /><circle cx="14" cy="15" r="1" /></svg>		
						<div>
							Tech
						</div>
					
				</button>
				</Link>
				<Link to='/contact'>
				<button className='flex flex-row justify-center items-center  md:shadow-lg gap-4 p-2 max-w-28 border-black md:border-b-2 hover:transform -hover:translate-x-1 -hover:translate-y-1 hover:scale-105 hover:text-red-500 '>

					
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>	
							<div>
							Contact
						</div>
				
				</button>
					</Link>
			</div>
			<div className="nav-bar relative hidden max-[710px]:block">

				< button className={downdrop ? 'text-red-500' : ''} onClick={() => { setdowndrop(!downdrop); console.log(downdrop); }}>
					<Menu />


				</button>
				{downdrop ?
					<nav className='md:hidden box-border  dark:bg-gray-900 w-36 shadow-lg absolute -right-2 top-9' >
						<div claaName='flex flex-col gap-1'>
							<Link to='/'>				<span className="flex flex-row items-center p-2 gap-3 w-full justify-between hover:text-red-500  hover:transform -hover:translate-x-1 -hover:translate-y-1 hover:scale-105  "><Home size={20} strokeWidth={1} colour="white" /> Home</span>
							</Link>
							<Link to='about'>
								<span className="flex flex-row  items-center p-2 gap-3 w-full justify-between hover:text-red-500  hover:transform -hover:translate-x-1 -hover:translate-y-1 hover:scale-105  "><CircleUser size={20} strokeWidth={1} colour="white" />About me</span>


							</Link>
							<Link to='/service'>
								<span className="flex flex-row items-center p-2 gap-3 w-full justify-between hover:text-red-500  hover:transform -hover:translate-x-1 -hover:translate-y-1 hover:scale-105"><ListTree size={20} strokeWidth={1} colour="white" /> Service</span>

							</Link>
							<Link to='/tech'>
								<span className="flex flex-row items-center p-2 gap-3 w-full justify-between hover:text-red-500  hover:transform -hover:translate-x-1 -hover:translate-y-1 hover:scale-105  "><FolderOpenDot size={20} strokeWidth={1} colour="white" />Tech</span>
							</Link>
							<Link to='/contact'>
								<span className="flex flex-row items-center p-2 gap-3 w-full justify-between hover:text-red-500  hover:transform -hover:translate-x-1 -hover:translate-y-1 hover:scale-105"><CircleUserRound size={20} strokeWidth={1} colour="white" />Contact</span>

							</Link>				</div>

					</nav> : null}
			</div>
			{/* <Home size={20} strokeWidth={2} colour="white"/>
		<CircleUser />
		<ListTree />
		<FolderOpenDot />
		<CircleUserRound /> */}

		</nav>








	)
}

export default Nav