import React from 'react'
import my_photo from '../photo/my_photo.jpg'

const Body = () => {
  return (

	// <section className='flex flex-row justify-center place-items-center'>
	<section className=' w-max-full  col-span-4 flex flex-row justify-around items-center gap-7 px-4 max-md:flex-col max-md:items-start max-md:gap-4 max-md:px-2'>
		<div className='flex flex-col gap-4  max-md:order-last'>

			
			<h1 className='font-bold text-lg'>Hello,my name is <span className='font-family-monos'>Prithiviraj</span></h1>
            <h1 className='font-bold text-lg'>I'm a <span className='font-family-monos'>Student</span></h1>
			<p>"I'm a web student currently pursuing computer science at Sri Eshwar. I have a strong interest in website design and development and have completed numerous projects in this field. I am also proficient in competitive programming."</p>
		</div>
		<div className='border-2 border-black p-1 shadow-lg min-w-[200px] max-w-[200px]'>
			<img src={my_photo} alt='my photo' width={500} height={500}className='shadow-xl'></img>

			
		</div>
		
	</section>
	// </section>
  )
}

export default Body