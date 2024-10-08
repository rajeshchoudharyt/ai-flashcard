import Navbar from "./navbar";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
	return (
		<html suppressHydrationWarning={true} lang="en">
			<ClerkProvider>
				<body>
					<ThemeProvider>
						<Navbar />
						<main>{children}</main>
					</ThemeProvider>
				</body>
			</ClerkProvider>
		</html>
	);
}
