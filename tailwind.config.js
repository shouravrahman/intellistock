/** @type {import('tailwindcss').Config} */
import { withUt } from "uploadthing/tw";

export default withUt({
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				vercelHover: "hsl(218, 12%, 83%);",
				cardForeground: "var(--card-color-foreground))",
				btnHover: "var(--color-btnHover)",
				border: "var(--color-border)",
				ring: "var(--color-ring)",
				background: "var(--color-background)",
				foreground: "var(--color-foreground)",
				primary: {
					DEFAULT: "var(--color-primary)",
					foreground: "var(--color-primary-foreground)",
				},
				form: "var(--color-form)",
				table: "var(--color-table)",
				tableHover: "var(--color-table-hover)",
				card: "var(--color-card)",
				tooltips: "var(--color-tooltips)",
				btn: "var(--color-btn)",
				accent: "var(--color-accent)",
			},
			borderRadius: {
				xl: `calc(var(--radius) + 4px)`,
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["var(--font-noto)"],
				rubik: ["var(--font-rubik)"],
			},
			fontSize: {
				sm: "0.875rem",
				base: "1rem",
				lg: "1.125rem",
				xl: "1.25rem",
				"2xl": "1.5rem",
				"3xl": "1.875rem",
				"4xl": "2.25rem",
				"5xl": "3rem",
				"6xl": "4rem",
			},
			spacing: {
				"1/2": "50%",
				"1/3": "33.333333%",
				"2/3": "66.666667%",
				"1/4": "25%",
				"2/4": "50%",
				"3/4": "75%",
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
});
