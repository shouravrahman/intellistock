"use client";
import { getData } from "@/lib/data-access/getData";
import Form from "@/components/form/form";
import { useEffect, useState } from "react";
import { CategorySchema } from "@/validations/category-schema";

const CategoryUpdateForm = ({ params: { id } }) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			const fetchedData = await getData(`/category/${id}`);
			setData(fetchedData);
		};
		fetchData();
	}, [id]);

	return (
		<div>
			<Form
				title='Update Category'
				apiEndpoint='/api/category'
				successMessage='Category updated!'
				initialData={data}
				isUpdate={true}
				fields={{
					schema: CategorySchema,
					items: [
						{
							type: "text",
							label: "Category Name",
							name: "title",
							className: "sm:col-span-2",
						},
						{
							type: "text",
							label: "Category Description",
							name: "description",
							className: "sm:col-span-2",
						},
					],
				}}
			/>
		</div>
	);
};

export default CategoryUpdateForm;
