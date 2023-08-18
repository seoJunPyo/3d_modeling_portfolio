import React from 'react';

const getLocalTheme = (): Theme =>
	(localStorage.getItem('theme') as Theme) ??
	(window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light');

const setLocalTheme = (theme: Theme) => {
	localStorage.setItem('theme', theme);
};

const useTheme = () => {
	const [theme, setTheme] = React.useState<Theme>(getLocalTheme);
	const isDark = theme === 'dark';

	React.useEffect(() => {
		document.body.classList[isDark ? 'add' : 'remove']('dark');
		setLocalTheme(isDark ? 'dark' : 'light');
	}, [isDark]);

	React.useEffect(() => {
		const transitionDuration = getComputedStyle(
			document.documentElement
		).getPropertyValue('--transition-duration');

		const timerId = setTimeout(() => {
			document.body.style.display = 'block';
		}, Number(transitionDuration) * 1000);

		return () => {
			clearTimeout(timerId);
		};
	}, []);

	return {
		isDark,
		toggleTheme() {
			setTheme(isDark ? 'light' : 'dark');
		},
	};
};

export default useTheme;
