import type { Metadata } from "next";
import "./globals.css";
import Theme from "@/components/Theme";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
	title: "NextJs Form Example",
	description: "NextJs Form Example",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className="antialiased"
			>
				<Navbar />
				{children}
			</body>
			<Theme />
		</html>
	);
}
