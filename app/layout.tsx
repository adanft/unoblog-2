import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AuthProvider from '@/lib/providers/AuthProvider';
import ThemeContextProvider from '@/lib/providers/ThemeProvider';

const inter = Poppins({
	weight: ['400', '500', '600', '700'],
	style: ['normal'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Unoblog',
	description: 'Dive into the world of crypto with us. Stay informed. Stay ahead.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<ThemeContextProvider>
						<div className="bg-primary min-h-screen min-w-full">
							<div className="container mx-auto px-4 flex flex-col min-h-screen">
								<Navbar />
								{children}
								<Footer />
							</div>
						</div>
					</ThemeContextProvider>
				</AuthProvider>
			</body>
		</html>
	);
}
