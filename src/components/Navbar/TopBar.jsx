import {
	Bars3Icon,
	UserIcon,
	ChevronRightIcon,
	ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const TopBar = () => {
	return (
		<div className='flex items-center justify-around py-4'>
			<Bars3Icon className='w-6 cursor-pointer' />
			<h1>
				<Link to={'/'}>Amazon.fr</Link>
			</h1>
			<Link to='/' className='flex items-center'>
				<p className='text-xs'>Se connecter</p>
				<ChevronRightIcon className='w-3' />
				<UserIcon className='w-7' />
			</Link>
			<div className='relative flex'>
				<ShoppingCartIcon className='w-8 z-0' />
				<span className='absolute text-xs -top-2 left-4 z-10 bg-orange-500 px-2 rounded-full'>
					5
				</span>
			</div>
		</div>
	);
};

export default TopBar;
