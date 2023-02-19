import Categories from './Categories';
import SearchInput from './SearchInput';
import TopBar from './TopBar';

const Navbar = () => {
	return (
		<nav className='text-white bg-blue-900'>
			<TopBar />
			<SearchInput />
			<Categories />
		</nav>
	);
};

export default Navbar;
