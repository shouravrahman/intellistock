"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const InventoryOptionCard = ({
	title,
	description,
	linkTitle,
	href,
	enabled,
	img,
}) => {
	return (
		<div className='shadow-lg text-foreground bg-form flex-center flex-col gap-4 p-6 rounded-lg '>
			<h2 className='text-2xl font-semibold '>{title}</h2>
			<div>
				<Image className='' src={img} width={120} height={120} alt={title} />
			</div>
			<p className='text-md font-medium'>{description}</p>
			{enabled ? (
				<Link
					href={href}
					className='px-4 py-2 rounded-md inline-flex  items-center text-primary-foreground bg-btn hover:bg-btnHover  transition-all duration-200 ease'
				>
					{linkTitle}
				</Link>
			) : (
				<button className='px-4 py-2 rounded-md inline-flex  items-center text-primary-foreground bg-accent hover:bg-accent/70'>
					Enable
				</button>
			)}
		</div>
	);
};

export default InventoryOptionCard;
