'use client';

import useScroll from '@/hooks/useScroll';
import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const TOP_TO_SCREEN = 300;
const BOTTOM_TO_SCREEN = 300;

const RoundBtn = ({
	onClick,
	children,
}: {
	onClick: (e: React.MouseEvent) => void;
	children: React.ReactNode;
}) => (
	<button
		onClick={onClick}
		className="p-2 bg-neutral-600/20 rounded-full hover:bg-neutral-600 hover:text-white">
		{children}
	</button>
);

const ScrollBtn = () => {
	const scrollY = useScroll();

	const handleClickUp = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleClickDown = () => {
		window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
	};

	return (
		<div className="flex flex-col space-y-2">
			{TOP_TO_SCREEN <= scrollY && (
				<RoundBtn onClick={handleClickUp}>
					<IoIosArrowUp />
				</RoundBtn>
			)}
			{BOTTOM_TO_SCREEN <=
				document.body.scrollHeight - window.innerHeight - scrollY && (
				<RoundBtn onClick={handleClickDown}>
					<IoIosArrowDown />
				</RoundBtn>
			)}
		</div>
	);
};

export default ScrollBtn;
