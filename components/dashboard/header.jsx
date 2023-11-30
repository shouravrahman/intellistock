import {
	BellDot,
	ChevronDown,
	History,
	LayoutGrid,
	Plus,
	Settings,
	User2,
} from "lucide-react";
import React from "react";
import SearchInput from "./search-input";
import Image from "next/image";

const Header = () => {
	return (
		<div className='inventory-dashboard-header-bg  h-16 flex items-center justify-between px-8 border-b border-slate-200 shadow-sm sticky top-0 z-0'>
			{/* left segment */}
			<div className='flex gap-3'>
				{/* activities icon */}
				<button>
					<History className='w-6 h-6 text-vercel-white' />
				</button>
				{/* search */}
				<SearchInput />
			</div>

			{/* right segment */}
			<div className='flex items-center'>
				{/* plus icon */}

				<div className='has-tooltip pr-3 border-r border-gray-300'>
					<span className='tooltip rounded shadow-lg py-1 px-2 bg-violet-500 text-vercel-white mt-10'>
						Create
					</span>
					<button className=' rounded-lg bg-violet-600'>
						<Plus className='h-8 w-8 p-1 text-vercel-white' />
					</button>
				</div>

				{/* 3 icons */}
				<div className='flex justify-center gap-4 items-center pl-3'>
					<div className='has-tooltip  '>
						<span className='tooltip rounded shadow-lg py-1 px-2 bg-violet-500 text-vercel-white mt-10'>
							Profile
						</span>
						<button className=' rounded-lg '>
							<User2 className='h-6 w-6 text-vercel-white' />
						</button>
					</div>
					<div className='has-tooltip  '>
						<span className='tooltip rounded shadow-lg py-1 px-2 bg-violet-500  text-vercel-white mt-10'>
							Notifications
						</span>
						<button className=' rounded-lg'>
							<BellDot className='h-6 w-6 text-vercel-white' />
						</button>
					</div>
					<div className='has-tooltip border-r border-gray-300 pr-3'>
						<span className='tooltip rounded shadow-lg py-1 px-2 bg-violet-500  text-vercel-white mt-10'>
							Notifications
						</span>
						<button className='rounded-lg'>
							<Settings className='h-6 w-6 text-vercel-white' />
						</button>
					</div>
				</div>

				{/* dropdown ,avatar,apps */}

				<div className='flex gap-3 pl-3 items-center justify-center'>
					{/* name dropdown */}
					<button className='flex items-center text-vercel-white'>
						<span>Mike</span>
						<ChevronDown className='w-4 h-4 text-vercel-white' />
					</button>

					<button>
						<Image
							width={96}
							height={96}
							alt='user image'
							src={`https://avatars.githubusercontent.com/u/73746355?v=4`}
							className='w-8 h-8 rounded-full border-2 border-white outline-none'
						/>
					</button>
					<button className=''>
						<LayoutGrid className='w-6 h-6  text-vercel-white' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
