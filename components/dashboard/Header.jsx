import {
	BellDot,
	ChevronDown,
	History,
	LayoutGrid,
	Plus,
	PlusSquare,
	Settings,
	Settings2,
	User2,
} from "lucide-react";
import React from "react";
import SearchInput from "./SearchInput";
import Image from "next/image";

const Header = () => {
	return (
		<div className='bg-slate-100 h-16 flex items-center justify-between px-8 border-b border-slate-200 shadow-sm'>
			{/* left segment */}
			<div className='flex gap-3'>
				{/* activities icon */}
				<button>
					<History className='w-6 h-6' />
				</button>
				{/* search */}
				<SearchInput />
			</div>

			{/* right segment */}
			<div className='flex items-center'>
				{/* plus icon */}

				<div className='has-tooltip pr-3 border-r border-gray-300'>
					<span className='tooltip rounded shadow-lg py-1 px-2 bg-purple-700 text-white mt-10'>
						Create
					</span>
					<button className=' rounded-lg bg-purple-600'>
						<Plus className='h-8 w-8 p-1 text-white' />
					</button>
				</div>

				{/* 3 icons */}
				<div className='flex gap-3 items-center pl-3'>
					<div className='has-tooltip  '>
						<span className='tooltip rounded shadow-lg py-1 px-2 bg-black text-white mt-10'>
							Profile
						</span>
						<button className=' rounded-lg '>
							<User2 className='h-6 w-6 ' />
						</button>
					</div>
					<div className='has-tooltip  '>
						<span className='tooltip rounded shadow-lg py-1 px-2 bg-black  text-white mt-10'>
							Notifications
						</span>
						<button className=' rounded-lg'>
							<BellDot className='h-6 w-6 ' />
						</button>
					</div>
					<div className='has-tooltip border-r border-gray-300 pr-3'>
						<span className='tooltip rounded shadow-lg py-1 px-2 bg-black  text-white mt-10'>
							Notifications
						</span>
						<button className='rounded-lg'>
							<Settings className='h-6 w-6 ' />
						</button>
					</div>
				</div>

				{/* dropdown ,avatar,apps */}

				<div className='flex gap-3 pl-3 items-center'>
					{/* name dropdown */}
					<button className='flex items-center'>
						<span>Mike</span>
						<ChevronDown className='w-4 h-4' />
					</button>

					<button>
						<Image
							width={96}
							height={96}
							alt='user image'
							src={`https://avatars.githubusercontent.com/u/73746355?v=4`}
							className='w-6 h-6 rounded-full border border-slate-800'
						/>
					</button>
					<button className=''>
						<LayoutGrid className='w-6 h-6 text-slate-900' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
