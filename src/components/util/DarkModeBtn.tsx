'use client';

import useTheme from '@/hooks/useTheme';
import React from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const DarkModeBtn = () => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<div className="text-lg">
			<button
				onClick={toggleTheme}
				className="md:flex relative rounded-full bg-neutral-500/50 shadow hidden">
				<span className="p-2 z-50 text-white">
					<BsSun />
				</span>
				<span className="p-2 z-50 text-white">
					<BsMoon />
				</span>
				<span className="p-2 rounded-full absolute w-1/2 h-full transition-transform dark:translate-x-full dark:bg-yellow-500 bg-red-500" />
			</button>

			<button
				onClick={toggleTheme}
				className="md:hidden shadow p-2 rounded-full dark:bg-yellow-500 bg-red-500">
				{isDark ? (
					<span className="text-white">
						<BsMoon />
					</span>
				) : (
					<span className="text-white">
						<BsSun />
					</span>
				)}
			</button>
		</div>
	);
};

export default DarkModeBtn;
