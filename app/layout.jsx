import { Poppins } from "next/font/google";
import "../styles/main";

const poppins = Poppins({ subsets: ["latin"] });

export const metadata = {
	title: "Inventory management web app",
	description: "Nextjs",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
