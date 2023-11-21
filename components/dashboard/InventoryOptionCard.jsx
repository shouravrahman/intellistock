"use client";

import React from "react";
import { Shirt } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import Icon from "./sidebar/Icon";

const InventoryOptionCard = ({
	title,
	description,
	linkTitle,
	href,
	enabled,
	img,
}) => {
	console.log(img);
	return (
		<div className='shadow-lg bg-white flex-center flex-col gap-4 p-6 rounded'>
			<h2 className='text-2xl font-bold'>{title}</h2>
			<div>
				<Image src={img} width={120} height={120} alt={title} />
			</div>
			<p className='line-clamp-1'>{description}</p>
			{enabled ? (
				<Link
					href={href}
					className='px-3 py-2 rounded-md inline-flex items-center bg-purple-600 text-white'
				>
					{linkTitle}
				</Link>
			) : (
				<button className='px-3 py-2 rounded-md inline-flex items-center text-white bg-purple-600'>
					Enable
				</button>
			)}
		</div>
	);
};

export default InventoryOptionCard;
