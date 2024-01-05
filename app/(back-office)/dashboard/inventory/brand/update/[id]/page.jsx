"use client";
import { getData } from "@/lib/data-access/getData";
import Form from "@/components/form/form";
import { BrandSchema } from "@/validations/brands-schema";
import { useEffect, useState } from "react";

const BrandUpdateForm = ({ params: { id } }) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			const fetchedData = await getData(`/brand/${id}`);
			setData(fetchedData);
		};
		fetchData();
		console.log(data);
	}, [id]);

	return (
		<div>
			<Form
				title='Update Brand'
				apiEndpoint='/api/brand'
				successMessage='Brand updated!'
				initialData={data}
				isUpdate={true}
				fields={{
					schema: BrandSchema,
					items: [
						{
							type: "text",
							label: "Brand Name",
							name: "title",
							className: "sm:col-span-2",
						},
					],
				}}
			/>
		</div>
	);
};

export default BrandUpdateForm;
