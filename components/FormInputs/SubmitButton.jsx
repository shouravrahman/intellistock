import { Loader2, Plus } from "lucide-react";
import React from "react";

const SubmitButton = ({ isLoading, title }) => {
	return (
		<div className='sm:col-span-1 mt-6'>
			<button
				className='text-vercel-white bg-vercel-black font-medium rounded-lg text-base py-3 px-3 text-center hover:bg-[#222]'
				type='submit'
			>
				{isLoading ? (
					<Loader2 className='text-vercel-white h-6 w-6' />
				) : (
					<div className=' font-medium flex-between'>
						<Plus className='h-6 w-6 mr-2' />
						<p>Save {title}</p>
					</div>
				)}
			</button>
		</div>
	);
};

export default SubmitButton;
