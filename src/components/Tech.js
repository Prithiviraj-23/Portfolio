import React from 'react'
import react_icon from '../photo/react_icon.png'
import mongodb_icon from '../photo/mongodb_icon.png'
import typescript_icon from '../photo/typescript_icon.png'
import mysql_icon from '../photo/mysql_icon.png'
import java_icon from '../photo/java_icon.png'
import python_icon from '../photo/python_icon.png'
import git_icon from '../photo/git_icon.png'
import c_icon from '../photo/c_icon.png'

export default function Tech() {

	const icon = [react_icon, mongodb_icon, typescript_icon, mysql_icon, java_icon, python_icon, git_icon, c_icon]
	return (
		<div className=' box-border col-span-4  h-screen flex flex-col max-w-full  justify-center items-center overflow-y-auto max-sm:m-24'>
			<div className='flex flex-row flex-wrap max-w-full gap-20 justify-center px-4 '>
			{
				icon.map((icon, i) => {


					return (
						<div className='box-border bg-white shadow-lg rounded-lg h-[150px] max-w-fit '>


							<img src={icon} alt={`${icon}`} key={i} width={150} height={150} className='shadow-xl'></img>


						</div>
					)
				})
			}


		</div>
		</div>
	)
}
