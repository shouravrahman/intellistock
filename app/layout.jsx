import { Rubik, Noto_Sans } from "next/font/google";
import "../styles/main.scss";

const noto = Noto_Sans({
	subsets: ["latin"],
	display: "swap",
	weight: ["500", "600", "700"],
	variable: "--font-noto",
});

const rubik = Rubik({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-rubik",
});

export const metadata = {
	title: "Inventory management web app",
	description: "Nextjs",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${noto.variable} ${rubik.variable} font-sans bg-teal-100`}
			>
				<main>{children}</main>
			</body>
		</html>
	);
}
