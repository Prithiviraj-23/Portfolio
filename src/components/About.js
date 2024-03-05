import React from 'react'
import { Calendar } from 'lucide-react'


const About = () => {
	return (
		<section className='col-span-4 flex flex-col gap-y-10 px-4 p-14  box-border overflow-y-auto bg-gray-300 dark:text-white dark:bg-gray-950'>

			<h1 className='font-bold text-xl  max-w-fit'>About me</h1>
			
 
			<h2 className='font-bold text-xl   max-w-fit '>I'm Prithiviraj and <span className='text-red-500'>Web developer</span>
			</h2>

			<p>
				I am a web student currently pursuing computer science at Sri Eshwar.
				My passion lies in website design and development, and I have completed numerous projects in this field.
				I am proficient in competitive programming and have a good understanding of Tailwind CSS for creating responsive web designs. 
				I have experience in creating and deploying applications using Tailwind CSS.
				 Additionally, I am familiar with Git and GitHub for version control, and I have some knowledge about API creation. 
				 My goal is to continue learning and growing in the field of web development, creating innovative and user-friendly solutions.
				 
			</p>
			
			{/* padding in x */}

			<table className='grid grid-cols-10 max-[710px]:flex max-[710px]:flex-col max-[710px]:justify-around'>
				
					<ul className='flex flex-col justify-between max-w-fit col-span-3 gap-2'>
						<li className='font-bold  border-b-2 p-2 border-gray-400 shadow-lg'>Birthday : <span className='font-normal'>23 oct 2005</span></li>
						
						<li className='font-bold  border-b-2 p-2 border-gray-400 shadow-lg'>Website : <span className='font-normal'>www.domain.com</span></li>

						<li className='font-bold  border-b-2 p-2 border-gray-400 shadow-lg'>Degree : <span className='font-normal'>cs</span></li>

						<li className='font-bold  border-b-2 p-2 border-gray-400 shadow-lg'>City : <span className='font-normal'>Thanjavur</span></li>


					</ul>
					<ul className='flex flex-col justify-between max-w-fit col-span-4 gap-2'>
						<li className='font-bold  border-b-2 p-2 border-gray-400 shadow-lg'>Age : <span className='font-normal'>18</span></li>
						
						<li className='font-bold  border-b-2 p-2 border-gray-400 shadow-lg'>Email : <span className='font-normal'>prithiviraj.r2022cse@sece.ac</span></li>

						<li className='font-bold  border-b-2 p-2 border-gray-400 shadow-lg'>Phone : <span className='font-normal'>9361354316</span></li>

						<li className='font-bold  border-b-2 p-2 border-gray-400 shadow-lg'>Project : <span className='font-normal'>5</span></li>


					</ul>

				    <div className='col-span-3 flex flex-col gap-2'>
						{/* Dark theme */}
					{/* dark:text-white */}

						<div className='flex justify-between mb-1'>
							<span className='text-base font-medium text-black dark:text-white'>Html</span>
							<span className='text-sm font-medium text-black dark:text-white'>90%</span>
						</div>
						<div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
							<div className='bg-red-500 h-2.5 rounded-full' style={{width:'90%'}} ></div>
						</div>
						
						<div className='flex justify-between mb-1'>
							<span className='text-base font-medium text-black dark:text-white'>java</span>
							<span className='text-sm font-medium text-black dark:text-white'>90%</span>
						</div>
						<div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
							<div className='bg-red-500 h-2.5 rounded-full' style={{width:'90%'}}></div>
						</div>

						
						<div className='flex justify-between mb-1'>
							<span className='text-base font-medium text-black dark:text-white '>Tailwind</span>
							<span className='text-sm font-medium text-black dark:text-white'>85%</span>
						</div>
						<div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
							<div className='bg-red-500 h-2.5 rounded-full' style={{width:'85%' }} ></div>
						</div>
						
						<div className='flex justify-between mb-1'>
							<span className='text-base font-medium text-black dark:text-white'>react</span>
							<span className='text-sm font-medium text-black dark:text-white'>80%</span>
						</div>
						<div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
							<div className='bg-red-500 h-2.5 rounded-full' style={{width:'80%' }} ></div>
						</div>

					</div> 
				
			</table>
			<section className='grid grid-cols-2 w-full box-border  max-[680px]:flex max-[680px]:flex-col max-[680px]:gap-15'>
				<div className='flex flex-col gap-5 py-3 px-4  max-[680px]:px-2'>
					<h1 className='font-bold text-xl'>Certification</h1>

					<div className='box-border px-2 flex flex-row gap-4 shadow-lg max-[680px]:px-1'>
					<aside className='h-full w-2 bg-white'></aside>
					<div className='flex flex-col gap-4'>
						<div className='flex flex-col gap-3'>
						<h6 className='flex flex-row text-sm gap-2 items-center '>{<Calendar strokeWidth={1} size={15} />}2023-aug</h6>
						<div className='flex flex-col gap-2'>
							<h2 className='font-bold text-lg'>
							React
							</h2>
							<p>
							The React course on AlgoExpert provides comprehensive training in building modern web applications using React.
							From fundamentals to advanced topics, the course covers everything you need to become proficient in React development.
							</p>
						</div>
						</div>

						<div className='flex flex-col gap-2'>
						<h6 className='flex flex-row text-sm gap-2 items-center '>{<Calendar strokeWidth={1} size={15} />}2023-oct</h6>
						<div className='flex flex-col gap-1'>
							<h2 className='font-bold text-lg'>
							Java
							</h2>
							<p>
							I have successfully completed a comprehensive Java course on Udemy, gaining a strong foundation in Java programming concepts.
							The course covered key topics such as object-oriented programming, data structures, and algorithms, equipping me with the skills to develop robust Java applications.
							</p>
						</div>
						</div>

						<div className='flex flex-col gap-2'>
						<h6 className='flex flex-row text-sm gap-2 items-center '>{<Calendar strokeWidth={1} size={15} />}2024-feb</h6>
						<div className='flex flex-col gap-1'>
							<h2 className='font-bold text-lg'>
							Tailwind
							</h2>
							<p>
							Sanju's Tailwind CSS course offers a deep dive into the framework, covering its utility-first approach and how to leverage its features to build modern, responsive web designs.
							Through practical examples and tutorials, the course helps students master Tailwind CSS for their projects.
							</p>
						</div>
						</div>
					</div>
					</div>
				</div>
				<div className='flex flex-col gap-5 py-3 px-4 max-[680px]:px-2'>
					<h1 className='font-bold text-xl'>Project</h1>

					<div className='box-border px-2 flex flex-row gap-4 shadow-lg max-[680px]:px-1'>
					<aside className='h-full w-2 bg-white'></aside>
					<div className='bg-yellow flex flex-col gap-4'>
						<div className='flex flex-col gap-3'>
						<h6 className='flex flex-row text-sm gap-2 items-center '>{<Calendar strokeWidth={1} size={15} />}2023-aug</h6>
						<div className='flex flex-col gap-2'>
							<h2 className='font-bold text-lg'>
							ISCM
							</h2>
							<p>
							Build a basic ISCM project using SQL for database management and Python for scripting.
							Use SQL to create and manage configuration items, and Python to automate configuration tasks and generate reports, streamlining the ISCM process.
							</p>
						</div>
						</div>

						<div className='flex flex-col gap-2'>
						<h6 className='flex flex-row text-sm gap-2 items-center '>{<Calendar strokeWidth={1} size={15} />}2023-oct</h6>
						<div className='flex flex-col gap-1'>
							<h2 className='font-bold text-lg'>
							Weather App
							</h2>
							<p>
							Develop a weather application using JavaFX to provide a user-friendly interface. Utilize SQL to store and manage data for offline use, while fetching real-time weather information from the OpenWeather API.
							Combine these technologies to create a comprehensive weather app with both local and up-to-date weather data for users.
							</p>
						</div>
						</div>

						<div className='flex flex-col gap-2'>
						<h6 className='flex flex-row text-sm gap-2 items-center '>{<Calendar strokeWidth={1} size={15} />}2024-feb</h6>
						<div className='flex flex-col gap-1'>
							<h2 className='font-bold text-lg'>
							Portfolio
							</h2>
							<p>
								Build a modern portfolio website using React to showcase projects, skills, and achievements.
								Implement responsive design and smooth transitions for an engaging user experience, demonstrating your abilities and personality effectively.
							</p>	
						</div>
						</div>
					</div>
					</div>
				</div>
			</section>

			

		</section>
	)
}

export default About