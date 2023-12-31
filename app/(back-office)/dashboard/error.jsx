"use client";
import Image from "next/image";
import Link from "next/link";
import err from "../../../public/err.svg";
const Error = () => {
	return (
		<div className='flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-primary-foreground'>
			<div className='block md:max-w-lg'>
				<Image
					width='100'
					height='100'
					src={err}
					className='invert'
					alt='404 icon'
				/>
			</div>
			<div className='text-center xl:max-w-4xl'>
				<h1 className='mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-foreground'>
					Something went wrong!
				</h1>
				<p className='mb-5 text-base font-normal text-primary md:text-lg '>
					If you think this is a problem with us, please tell us.
				</p>
				<Link
					href='/'
					className='text-primary-foreground bg-btn hover:bg-btnHover focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 '
				>
					<svg
						className='mr-2 -ml-1 w-5 h-5'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
							clipRule='evenodd'
						></path>
					</svg>
					Go back home
				</Link>
			</div>
		</div>
	);
};

export default Error;
