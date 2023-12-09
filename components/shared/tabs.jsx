import { Tab } from "@headlessui/react";
import React from "react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Tabs({ children }) {
	// Use React.Children.toArray to convert children into an array
	const tabComponents = React.Children.toArray(children);

	// Extract tab labels and content components
	const tabLabels = tabComponents.map((child) => child.props.label);
	const tabContents = tabComponents.map((child) => child.props.children);

	return (
		<div className='w-full max-w-4xl mx-auto px-8 md:px-16 py-8 md:py-16 sm:px-2'>
			<Tab.Group>
				<Tab.List className='flex space-x-1 rounded-xl bg-background p-1'>
					{tabLabels.map((label) => (
						<Tab
							key={label}
							className={({ selected }) =>
								classNames(
									"w-full rounded-lg py-2 md:py-2.5 text-sm md:text-lg font-medium leading-5",
									"ring-ring ring-offset-1 ring-offset-violet-400 focus:outline-none focus:ring-0",
									selected
										? "bg-primary text-primary-foreground shadow"
										: "text-foreground bg-form hover:bg-primary-foreground/[0.12] hover:text-foreground"
								)
							}
						>
							{label}
						</Tab>
					))}
				</Tab.List>
				<Tab.Panels className='mt-2 w-full'>
					{tabContents.map((content, idx) => (
						<Tab.Panel
							key={idx}
							className={classNames(
								"rounded-lg w-full  p-3 h-full",
								"ring-ring ring-offset-1 ring-offset-violet-400 focus:outline-none focus:ring-0"
							)}
						>
							{content}
						</Tab.Panel>
					))}
				</Tab.Panels>
			</Tab.Group>
		</div>
	);
}
