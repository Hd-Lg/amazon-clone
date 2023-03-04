import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { openMenu } from '../../features/menuSlice';

import {
	Bars3Icon,
	UserIcon,
	ChevronRightIcon,
	ShoppingCartIcon,
} from '@heroicons/react/24/outline';

const TopBar = () => {
	const dispatch = useDispatch();
	return (
		<div className='flex items-center justify-around py-4'>
			<Bars3Icon
				onClick={() => dispatch(openMenu())}
				className='w-6 cursor-pointer'
			/>
			<h1>
				<Link to={'/'}>Amazon.fr</Link>
			</h1>
			<Link to='/connect' className='flex items-center'>
				<p className='text-xs'>Se connecter</p>
				<ChevronRightIcon className='w-3' />
				<UserIcon className='w-7' />
			</Link>
			<div className='relative flex'>
				<Link to={'/cart'}>
					<ShoppingCartIcon className='w-8 z-0' />
					<span className='absolute text-xs -top-2 left-4 z-10 bg-orange-500 px-2 rounded-full'>
						5
					</span>
				</Link>
			</div>
		</div>
	);
};

export default TopBar;
