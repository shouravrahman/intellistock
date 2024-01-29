/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
	return (
		<>
			<Script id='show-banner'></Script>
			<div className='flex flex-col min-h-screen max-w-max'>
				<header className='w-full h-20 flex items-center justify-between px-6 bg-[#FFDFD2] border-b-2 border-b-[#ecbfaea9]'>
					<Link className='text-2xl font-bold text-gray-900' href='#'>
						<Image
							src='/Intellistock-logos_white.png'
							className='invert object-contain max-w-full h-auto p-10'
							width={300}
							height={300}
							alt='logo'
							priority
						/>
					</Link>
					<nav className='flex items-center gap-4'>
						<Link className=' hover:text-gray-700 text-gray-900 ' href='#'>
							Features
						</Link>
						<Link className='hover:text-gray-700 text-gray-900 ' href='#'>
							Pricing
						</Link>
						<Link className='hover:text-gray-700 text-gray-900' href='#'>
							Log In
						</Link>
						<Button
							variant='outline'
							className='ml-4 px-6 py-4 text-white'
							href='/signup'
						>
							Sign Up
						</Button>
					</nav>
				</header>
				<main className='flex-1'>
					<section className='relative w-full py-20 px-6 bg-[#FFDFD2] text-center  h-screen bg-center bg-cover'>
						<h1 className='text-7xl font-bold text-gray-900 font-rubik'>
							Manage Your Invoices Effortlessly
						</h1>
						<p className='mt-4 text-lg text-gray-900'>
							Invoice Express provides a simple and efficient way to manage all
							your invoices. Save time, stay organized, and get paid faster.
						</p>
						<Button className='mt-8 px-8 py-6 text-xl' variant='secondary'>
							<Link href='/dashboard/home/overview'>Get Started</Link>
						</Button>
						<Image
							src='/hero-dash.png'
							className='max-w-full h-auto p-10 mx-auto'
							width={1000}
							height={900}
							alt='dashboard'
							priority
						/>
					</section>

					<section className='max-w-7xl mx-auto w-full py-20 px-6'>
						<h2 className='text-3xl font-bold text-center text-gray-900 '>
							Why Choose Invoice Express?
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
							<div className='flex flex-col items-center text-center'>
								<ClockIcon className='h-12 w-12 text-gray-900 ' />
								<h3 className='mt-4 text-xl font-bold text-gray-900 '>
									Save Time
								</h3>
								<p className='mt-2 text-gray-600 '>
									Automate your invoicing process and focus on what really
									matters.
								</p>
							</div>
							<div className='flex flex-col items-center text-center'>
								<BarChartIcon className='h-12 w-12 text-gray-900 ' />
								<h3 className='mt-4 text-xl font-bold text-gray-900 '>
									Increase Efficiency
								</h3>
								<p className='mt-2 text-gray-600 '>
									Keep track of your invoices and payments with our intuitive
									dashboard.
								</p>
							</div>
							<div className='flex flex-col items-center text-center'>
								<FolderIcon className='h-12 w-12 text-gray-900 ' />
								<h3 className='mt-4 text-xl font-bold text-gray-900 '>
									Stay Organized
								</h3>
								<p className='mt-2 text-gray-600 '>
									Store all your invoices in one place and access them anytime,
									anywhere.
								</p>
							</div>
						</div>
					</section>
					<section className=' w-full  py-20 px-6 bg-[#ffe5db]'>
						<div className='max-w-7xl mx-auto'>
							<h2 className='text-3xl font-bold text-center text-gray-900 '>
								Key Features
							</h2>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-10'>
								<div className='flex flex-col items-center text-center'>
									<FileIcon className='h-12 w-12 text-gray-900 ' />
									<h3 className='mt-4 text-xl font-bold text-gray-900 '>
										Invoice Tracking
									</h3>
									<p className='mt-2 text-gray-600 '>
										Keep track of all your invoices and their status in
										real-time.
									</p>
								</div>
								<div className='flex flex-col items-center text-center'>
									<BellIcon className='h-12 w-12 text-gray-900 ' />
									<h3 className='mt-4 text-xl font-bold text-gray-900 '>
										Automated Reminders
									</h3>
									<p className='mt-2 text-gray-600 '>
										Send automated reminders to your clients for unpaid
										invoices.
									</p>
								</div>
								<div className='flex flex-col items-center text-center'>
									<PencilIcon className='h-12 w-12 text-gray-900 ' />
									<h3 className='mt-4 text-xl font-bold text-gray-900 '>
										Customizable Templates
									</h3>
									<p className='mt-2 text-gray-600 '>
										Customize your invoice templates to match your brand.
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className='max-w-7xl py-20 px-6 mx-auto'>
						<h2 className='text-3xl font-bold text-center text-gray-900'>
							Frequently Asked Questions
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
							<div className='flex flex-col items-start'>
								<h3 className='text-xl font-bold text-gray-900 '>
									How do I start using Invoice Express?
								</h3>
								<p className='mt-2 text-gray-600 '>
									Simply sign up and start creating your invoices. It's that
									easy!
								</p>
							</div>
							<div className='flex flex-col items-start'>
								<h3 className='text-xl font-bold text-gray-900 '>
									Can I customize my invoices?
								</h3>
								<p className='mt-2 text-gray-600 '>
									Yes, Invoice Express provides customizable templates for your
									invoices.
								</p>
							</div>
							<div className='flex flex-col items-start'>
								<h3 className='text-xl font-bold text-gray-900 '>
									Is my data secure?
								</h3>
								<p className='mt-2 text-gray-600 '>
									Absolutely! We use industry standard encryption to ensure your
									data is secure.
								</p>
							</div>
							<div className='flex flex-col items-start'>
								<h3 className='text-xl font-bold text-gray-900 '>
									Can I track my invoices?
								</h3>
								<p className='mt-2 text-gray-600 '>
									Yes, Invoice Express provides real-time tracking of all your
									invoices.
								</p>
							</div>
						</div>
					</section>
					<section className='max-w-9xl w-full py-20 px-6 bg-[#ffe5db]'>
						<h2 className='text-3xl font-bold text-center text-gray-900'>
							Our Happy Customers
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
							<div className='flex flex-col items-center text-center'>
								<img
									className='h-48 w-48 rounded-full'
									height='200'
									src='/placeholder.svg'
									style={{
										aspectRatio: "200/200",
										objectFit: "cover",
									}}
									width='200'
									alt='image'
								/>
								<h3 className='mt-4 text-xl font-bold text-gray-90'>
									John Doe
								</h3>
								<p className='mt-2 text-gray-800 '>
									&quot Invoice Express has made my invoicing process so much
									easier and efficient!
								</p>
							</div>
							<div className='flex flex-col items-center text-center'>
								<img
									className='h-48 w-48 rounded-full'
									height='200'
									src='/placeholder.svg'
									style={{
										aspectRatio: "200/200",
										objectFit: "cover",
									}}
									width='200'
								/>
								<h3 className='mt-4 text-xl font-bold text-gray-900 '>
									Jane Smith
								</h3>
								<p className='mt-2 text-gray-600 '>
									"I love the customizable templates. They match my brand
									perfectly!"
								</p>
							</div>
							<div className='flex flex-col items-center text-center'>
								<Image
									className='h-48 w-48 rounded-full'
									height='200'
									alt='image'
									src='/placeholder.svg'
									style={{
										aspectRatio: "200/200",
										objectFit: "cover",
									}}
									width='200'
								/>
								<h3 className='mt-4 text-xl font-bold text-gray-900 '>
									Robert Johnson
								</h3>
								<p className='mt-2 text-gray-600 '>
									"The invoice tracking feature is a game changer. Highly
									recommended!"
								</p>
							</div>
						</div>
					</section>
					<section className=' w-full py-20 px-6 text-center'>
						<h2 className='text-3xl font-bold text-gray-900'>
							Ready to Get Started?
						</h2>
						<p className='mt-4 text-lg text-gray-600 dark:text-gray-400'>
							Join thousands of satisfied customers using our app globally.
						</p>
						<Button
							variant='outline'
							className='ml-4 px-6 py-4 text-white mt-8'
							href='/signup'
						>
							Sign Up Now
						</Button>
					</section>
				</main>
				<footer className='w-full h-20 flex items-center justify-center border-t bg-[#ffece4]'>
					<p className='text-sm text-gray-900 '>
						© Invoice Express. All rights reserved.
					</p>
				</footer>
			</div>
		</>
	);
}
function BarChartIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<line x1='12' x2='12' y1='20' y2='10' />
			<line x1='18' x2='18' y1='20' y2='4' />
			<line x1='6' x2='6' y1='20' y2='16' />
		</svg>
	);
}

function BellIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9' />
			<path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
		</svg>
	);
}

function ClockIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<circle cx='12' cy='12' r='10' />
			<polyline points='12 6 12 12 16 14' />
		</svg>
	);
}

function FileIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' />
			<polyline points='14 2 14 8 20 8' />
		</svg>
	);
}

function FolderIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z' />
		</svg>
	);
}

function PencilIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z' />
			<path d='m15 5 4 4' />
		</svg>
	);
}
