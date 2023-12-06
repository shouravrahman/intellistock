import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const FormHeader = ({ title, href }) => {
	return (
		<div className='flex-between bg-primary py-3 px-16 shadow-sm border-b border-primary-foreground'>
			<h2 className='text-xl text-primary-foreground font-semibold'>{title}</h2>
			<Link href={href} className='text-primary-foreground'>
				<X />
			</Link>
		</div>
	);
};

export default FormHeader;
