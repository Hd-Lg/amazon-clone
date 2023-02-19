import Footer from './Footer';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
	return (
		<div className='flex flex-col'>
			<Navbar />
			<div className='h-screen p-4'>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
