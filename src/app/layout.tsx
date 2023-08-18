import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { DarkModeBtn, ScrollBtn } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: '3D Portfolio',
	description: '3D 모델링 포트폴리오를 만들어 보세요!',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="p-4">
					<div className="flex justify-between items-center container mx-auto">
						<h1 className="text-3xl font-bold">3D Portfolio</h1>

						<div className="md:flex items-center hidden">
							<Link
								href="/"
								className="font-bold p-2 rounded-lg hover:text-neutral-600">
								가입하기
							</Link>
							<Link
								href="/"
								className="font-bold p-2 rounded-lg hover:text-neutral-600">
								로그인
							</Link>
						</div>
						<button className="md:hidden">={'>'}</button>
					</div>
				</nav>
				<main className="p-4">{children}</main>
				<footer className="p-4"></footer>
				<div className="fixed bottom-3 left-4">
					<DarkModeBtn />
				</div>
				<div className="fixed bottom-3 right-4">
					<ScrollBtn />
				</div>
			</body>
		</html>
	);
}
