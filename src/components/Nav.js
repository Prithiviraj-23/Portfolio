import React from 'react'
import { Menu } from 'lucide-react';

const Nav = () => {
  return (
	<nav className='col-span-1  flex flex-col justify-around border-black shadow-xl max-md:flex-row max-md:justify-between max-md:items-center max-md:box-border max-md:p-2'>


		<h2 className='font-bold text-xl w-full text-center col-span-2 bg-red-200 max-md:max-w-fit '> Protfolio</h2>

		<div className='w-full flex flex-col gap-5  justify-center items-center text-lg max-sm:hidden max-md:flex-row max-md:justify-between'>
			
		<button className='flex flex-row justify-center items-center shadow-lg gap-4 p-2 max-w-28 border-black border-b-2 '>
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>		 
		<div>
			Home
		 </div>
		</button>
		
		<button className='flex flex-row justify-center items-center shadow-lg gap-4 p-2 max-w-28 border-black border-b-2  bg-gray-50'>
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>		
		<div>
			About
		 </div>
		</button>

		<button className='flex flex-row justify-center items-center shadow-lg gap-4 p-2 max-w-28 border-black border-b-2  bg-gray-50'>

			
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-tree"><path d="M21 12h-8"/><path d="M21 6H8"/><path d="M21 18h-8"/><path d="M3 6v4c0 1.1.9 2 2 2h3"/><path d="M3 10v6c0 1.1.9 2 2 2h3"/></svg>		<div>
			Service
		 </div>
		</button>
		<button className='flex flex-row justify-center items-center shadow-lg gap-4 p-2 max-w-28 border-black border-b-2  bg-gray-50'>

			
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open-dot"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/><circle cx="14" cy="15" r="1"/></svg>		<div>
			Project
		 </div>
		</button>

		<button className='flex flex-row justify-center items-center shadow-lg gap-4 p-2 max-w-28 border-black border-b-2  bg-gray-50'>
			
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>		<div>
         Contact
		</div>
		</button>
		</div>

		<div className='hidden max-sm:block'>
			<Menu/>

		</div>

		</nav>

		
  )
}

export default Nav