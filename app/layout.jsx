import { Poppins } from "next/font/google";
import "../styles/main.scss";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

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
