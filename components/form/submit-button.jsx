import { Loader2, Plus } from "lucide-react";

const SubmitButton = ({ isSubmitting, title }) => {
	return (
		<div className='sm:col-span-1 mt-6'>
			<button
				className='text-foreground bg-btn font-medium rounded-lg text-base py-3 px-3 text-center hover:bg-btn-hover'
				type='submit'
			>
				{isSubmitting ? (
					<Loader2 className='text-foreground h-6 w-6' />
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
