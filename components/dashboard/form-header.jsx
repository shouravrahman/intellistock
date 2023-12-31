import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const FormHeader = ({ title, href }) => {
	return (
		<div className='flex-between bg-card py-3 px-8 md:px-16 shadow-sm border-b border-border'>
			<h2 className='text-xl text-foreground font-semibold'>{title}</h2>
			<Link href={href} className='text-foreground'>
				<X />
			</Link>
		</div>
	);
};

export default FormHeader;
