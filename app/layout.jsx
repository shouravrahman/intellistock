import { Inter, Roboto_Mono } from "next/font/google";
import "../styles/main.scss";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto-mono",
});

export const metadata = {
	title: "Inventory management web app",
	description: "Nextjs",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${roboto_mono.variable} font-sans`}>
				{children}
			</body>
		</html>
	);
}
