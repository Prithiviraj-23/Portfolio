import React from 'react'
import { Calendar } from 'lucide-react'

const About = () => {
	return (
		<section className='col-span-4 flex flex-col gap-y-10 px-4 mt-14 bg-slate-400 box-border overflow-y-auto'>

			<h1 className='font-bold text-xl border-black border-b-2 max-w-fit shadow-lg'>About me</h1>
			
 
			<h2 className='font-bold text-xl  border-black border-b-2 max-w-fit shadow-lg'>I'm Prithiviraj and Web developer
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

			<table className='grid grid-cols-3 max-md:flex max-md:flex-col max-md:gap-5 bg-red-300'>
				
					<ul className='flex flex-col justify-between'>
						<li className='font-bold'>Birthday : <span className='font-normal'>23 oct 2005</span></li>
						
						<li className='font-bold'>Website : <span className='font-normal'>www.domain.com</span></li>

						<li className='font-bold'>Degree : <span className='font-normal'>cs</span></li>

						<li className='font-bold'>City : <span className='font-normal'>Thanjavur</span></li>


					</ul>
					<ul className='flex flex-col justify-between'>
						<li className='font-bold'>Age : <span className='font-normal'>18</span></li>
						
						<li className='font-bold'>Email : <span className='font-normal'>prithiviraj.r2022cse@sece.ac</span></li>

						<li className='font-bold'>Phone : <span className='font-normal'>9361354316</span></li>

						<li className='font-bold'>Project : <span className='font-normal'>5</span></li>


					</ul>

				    <div>
						{/* Dark theme */}
					{/* dark:text-white */}

						<div className='flex justify-between mb-1'>
							<span className='text-base font-medium text-black'>Html</span>
							<span className='text-sm font-medium text-black'>90</span>
						</div>
						<div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
							<div className='bg-blue-600 h-2.5 rounded-full' style={{width:'90%'}} ></div>
						</div>
						
						<div className='flex justify-between mb-1'>
							<span className='text-base font-medium text-black'>java</span>
							<span className='text-sm font-medium text-black'>90</span>
						</div>
						<div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
							<div className='bg-blue-600 h-2.5 rounded-full' style={{width:'90%'}}></div>
						</div>

						
						<div className='flex justify-between mb-1'>
							<span className='text-base font-medium text-black'>Tailwind</span>
							<span className='text-sm font-medium text-black'>85</span>
						</div>
						<div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
							<div className='bg-blue-600 h-2.5 rounded-full' style={{width:'85%' }} ></div>
						</div>
						
						<div className='flex justify-between mb-1'>
							<span className='text-base font-medium text-black'>react</span>
							<span className='text-sm font-medium text-black'>80</span>
						</div>
						<div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
							<div className='bg-blue-600 h-2.5 rounded-full' style={{width:'80%' }} ></div>
						</div>

					</div> 
				
			</table>

			<section className='grid grid-cols-2 w-full box-border'>
				<div className='flex flex-col gap-3'>
					<h1 className='font-bold'>Certification</h1>
					

					<h6 className='flex flex-row text-sm gap-2 '>{<Calendar />}2023-aug</h6>
					
					<div className='bg-red-200'>

						<div>
							<h2>
								React 
							</h2>
							<p>
							The React course on AlgoExpert provides comprehensive training in building modern web applications using React. 
							From fundamentals to advanced topics, the course covers everything you need to become proficient in React development.
							</p>
						</div>

					</div>

					<h6 className='flex flex-row text-sm gap-2 '>{<Calendar />}2023-oct</h6>
					
					<div className='bg-red-200'>

						<div>
							<h2>
								Java 
							</h2>
							<p>
							I have successfully completed a comprehensive Java course on Udemy, gaining a strong foundation in Java programming concepts.
						     The course covered key topics such as object-oriented programming, data structures, and algorithms, equipping me with the skills to develop robust Java applications.
							</p>
						</div>

					</div>

					<h6 className='flex flex-row text-sm gap-2 '>{<Calendar />}2024-feb</h6>
					
					<div className='bg-red-200'>

						<div>
							<h2>
								Tailwind 
                            </h2>
							
							<p>
							Sanju's Tailwind CSS course offers a deep dive into the framework, covering its utility-first approach and how to leverage its features to build modern, responsive web designs. 
							Through practical examples and tutorials, the course helps students master Tailwind CSS for their projects.
							</p>
						</div>

					</div>
				</div>

				{/* <div className='flex flex-col gap-3'>
					<h1 className='font-bold'>Certification</h1>
					

					<h6 className='flex flex-row text-sm gap-2 '>{<Calendar />}2023-aug</h6>
					
					<div className='bg-red-200'>

						<div>
							<h2>
								React 
							</h2>
							<p>
							The React course on AlgoExpert provides comprehensive training in building modern web applications using React. 
							From fundamentals to advanced topics, the course covers everything you need to become proficient in React development.
							</p>
						</div>

					</div>

					<h6 className='flex flex-row text-sm gap-2 '>{<Calendar />}2023-oct</h6>
					
					<div className='bg-red-200'>

						<div>
							<h2>
								Java 
							</h2>
							<p>
							I have successfully completed a comprehensive Java course on Udemy, gaining a strong foundation in Java programming concepts.
						     The course covered key topics such as object-oriented programming, data structures, and algorithms, equipping me with the skills to develop robust Java applications.
							</p>
						</div>

					</div>

					<h6 className='flex flex-row text-sm gap-2 '>{<Calendar />}2024-feb</h6>
					
					<div className='bg-red-200'>

						<div>
							<h2>
								Tailwind 
                            </h2>
							
							<p>
							Sanju's Tailwind CSS course offers a deep dive into the framework, covering its utility-first approach and how to leverage its features to build modern, responsive web designs. 
							Through practical examples and tutorials, the course helps students master Tailwind CSS for their projects.
							</p>
						</div>

					</div>
				</div> */}


				

			</section>






		</section>
	)
}

export default About