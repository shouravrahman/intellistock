export const dynamic = "force-dynamic";
import Script from "next/script";
import Sidebar from "@/components/dashboard/sidebar";

export default function Home() {
	return (
		<>
			<Script id='show-banner'></Script>
			<main className='flex h-screen'>
				{/* menu items */}
				<Sidebar />
				<div className='p-7 font-bold'>main</div>
			</main>
		</>
	);
}
