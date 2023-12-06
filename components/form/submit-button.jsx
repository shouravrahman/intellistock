import { Loader2, Plus } from "lucide-react";

const SubmitButton = ({ isSubmitting, title }) => {
	return (
		<div className='sm:col-span-1 mt-6'>
			<button
				className='text-primary-foreground bg-primary font-medium rounded-lg text-base py-3 px-3 text-center hover:bg-[#222]'
				type='submit'
			>
				{isSubmitting ? (
					<Loader2 className='text-primary-foreground h-6 w-6' />
				) : (
					<div className='font-medium flex items-center'>
						<Plus className='h-6 w-6 mr-2' />
						<p>Save {title}</p>
					</div>
				)}
			</button>
		</div>
	);
};

export default SubmitButton;
