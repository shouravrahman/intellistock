import Sidebar from "@/components/sidebar";

export default function Home() {
	return (
		<main className='flex min-h-screen'>
			{/* menu items */}
			<Sidebar />
			<div className='p-7 font-bold'>main</div>
		</main>
	);
}
