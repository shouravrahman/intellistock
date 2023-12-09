"use client";

const Button = ({ label, onClick, disabled }) => {
	return (
		<button
			className='px-3 py-2 rounded-md inline-flex font-semibold items-center bg-primary text-white hover:bg-vercelHover hover:text-foreground transition-all duration-200 ease'
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
};
export default Button;
