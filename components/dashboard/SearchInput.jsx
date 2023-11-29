import { Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
	return (
		<div className='relative w-full '>
			<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
				<Search className='w-4 h-4 text-gray-500 dark:text-gray-400' />
			</div>
			<input
				type={"search"}
				id='simple-search'
				className='bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 py-1 px-2'
				placeholder='Search in customers...'
				required
			/>
		</div>
	);
};

export default SearchInput;
