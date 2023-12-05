"use client";

const Button = ({ label, onClick, disabled }) => {
	return (
		<button
			className='px-3 py-2 rounded-md inline-flex font-semibold items-center text-white bg-[#126cfd] hover:bg-[#09367f] hover:text-white transition-all duration-200 ease'
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
};
export default Button;
