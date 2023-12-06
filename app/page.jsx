export const runtime = edge;

import Sidebar from "@/components/dashboard/sidebar";

export default function Home() {
	return (
		<main className='flex h-screen'>
			{/* menu items */}
			<Sidebar />
			<div className='p-7 font-bold'>main</div>
		</main>
	);
}
