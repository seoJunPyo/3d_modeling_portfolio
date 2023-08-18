import React from 'react';
import { throttle } from 'lodash';

const useScroll = () => {
	const [scrollY, setScrollY] = React.useState(window.scrollY);

	React.useEffect(() => {
		const handleScroll = throttle(() => {
			setScrollY(window.scrollY);
		}, 1000);

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return scrollY;
};

export default useScroll;
