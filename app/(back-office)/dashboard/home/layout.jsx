import HomeNavbar from "@/components/dashboard/HomeNavbar";
const Layout = ({ children }) => {
	return (
		<main className='font-noto font-medium h-screen bg-teal-100'>
			<HomeNavbar />
			{children}
		</main>
	);
};

export default Layout;
