import { Search } from "lucide-react";
import React from "react";

const SearchInput = () => {
	return (
		<div className='relative w-full '>
			<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
				<Search className='w-4 h-4 text-white' />
			</div>
			<input
				type={"search"}
				id='simple-search'
				className='bg-form border border-border/20 text-foreground text-sm rounded-lg focus:ring-ring focus:border-ring block w-full pl-10 py-1 px-2'
				placeholder='Search in customers...'
				required
			/>
		</div>
	);
};

export default SearchInput;
