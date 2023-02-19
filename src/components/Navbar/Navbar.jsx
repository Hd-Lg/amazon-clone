import Categories from './Categories';
import Localisation from './Localisation';
import SearchInput from './SearchInput';
import TopBar from './TopBar';

const Navbar = () => {
	return (
		<nav className='text-white bg-blue-900 top-0 left-0'>
			<TopBar />
			<SearchInput />
			<Categories />
			<Localisation />
		</nav>
	);
};

export default Navbar;
