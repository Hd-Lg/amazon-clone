import { useSelector } from 'react-redux';

import Footer from './Footer';
import Navbar from './Navbar/Navbar';
import MobileMenu from './MobileMenu';

const Layout = ({ children }) => {
	const menu = useSelector((store) => store.menu.open);
	console.log('phoneMenu:', menu);
	return (
		<div className='flex flex-col relative w-full'>
			<Navbar />
			{menu && (
				<div className='absolute w-full h-full z-20 bg-gray-300 duration-100 transition-all'>
					<MobileMenu />
				</div>
			)}
			<div className='h-screen p-4'>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
