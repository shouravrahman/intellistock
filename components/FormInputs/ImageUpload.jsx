"use client";
import { UploadDropzone } from "@/lib/uploadthings";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";

const ImageUpload = ({
	label,
	imageUrl = "",
	setImageUrl,
	endpoint = "imageUploader",
	className = "col-span-full",
}) => {
	return (
		<div className={className}>
			<div className='flex-between mb-6'>
				<label
					htmlFor='imageUrl'
					className='block mb-2 text-base font-medium text-gray-900'
				>
					{label}
				</label>

				{imageUrl && (
					<button
						onClick={() => setImageUrl("")}
						type='button'
						className='flex space-x-3 bg-vercel-black rounded-md shadow text-vercel-white py-2 px-4'
					>
						<Pencil className='w-4 h-4' />
						<span>Change Image</span>
					</button>
				)}
			</div>
			{imageUrl ? (
				<Image
					src={imageUrl}
					alt='Item image'
					width={1000}
					height={600}
					className='w-full h-64 object-cover border'
				/>
			) : (
				<UploadDropzone
					endpoint={endpoint}
					onClientUploadComplete={(res) => {
						setImageUrl(res[0].url);
						console.log("upload completed");
					}}
					onUploadError={(error) => {
						console.log(`ERROR! ${error.message}`);
					}}
				/>
			)}
		</div>
	);
};

export default ImageUpload;
