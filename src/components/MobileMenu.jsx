import { XMarkIcon, UserIcon, HomeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../features/menuSlice';

const tendancesLinks = [
	{ id: 1, name: 'Meilleures ventes', href: '/' },
	{ id: 2, name: 'Dernières Nouveautés', href: '/' },
	{ id: 3, name: 'Baromètres des ventes', href: '/' },
];

const bestCategoriesLink = [
	{ id: 1, name: 'Cuisine et Maison', href: '/' },
	{ id: 2, name: 'Informatique', href: '/' },
	{ id: 3, name: 'Livres', href: '/' },
	{ id: 4, name: 'High-Tech', href: '/' },
];

const servicesLinks = [
	{ id: 1, name: 'Ventes Flash et Promotions', href: '/' },
	{ id: 2, name: 'Paiement en plusieurs fois', href: '/' },
	{ id: 3, name: 'Essayer Amazon Prime', href: '/' },
	{ id: 4, name: 'Prime Video', href: '/' },
];

const MobileMenu = () => {
	const dispatch = useDispatch();
	return (
		<nav className='w-4/5 h-screen bg-slate-300 overflow-scroll'>
			<XMarkIcon
				onClick={() => dispatch(closeMenu())}
				className='w-8 text-white absolute z-20 top-9 right-10'
			/>
			{/* Header */}
			<div className='bg-blue-900 text-white w-full h-[15%] grid grid-cols-2 px-2 py-2'>
				<div className='flex items-end'>
					<Link to={'/'} className='font-semibold text-3xl hover:text-gray-300'>
						<span className='text-xl'>Parcourir</span> Amazon
					</Link>
				</div>
				<div>
					<Link to={'/connect'} className='flex hover:text-gray-300'>
						Identifiez-vous <UserIcon className='w-5 ml-1' />
					</Link>
				</div>
			</div>
			{/* Link Home */}
			<Link
				to='/'
				className='bg-slate-100 flex items-center justify-around h-[10%] cursor-pointer font-semibold mb-2'>
				Page d'accueil Amazon
				<HomeIcon className='w-6' />
			</Link>

			{/* Tendances */}
			<div className='bg-slate-100 flex flex-col space-y-8 h-auto cursor-pointer mb-2 pl-4 py-2'>
				<h3 className='font-semibold'>Tendances</h3>
				{tendancesLinks.map((link) => (
					<Link key={link.id} to={link.href}>
						{link.name}
					</Link>
				))}
			</div>
			{/* Best Categories */}
			<div className='bg-slate-100 flex flex-col space-y-8 h-auto cursor-pointer mb-2 pl-4 py-2'>
				<h3 className='font-semibold'>Meilleures Categories</h3>
				{bestCategoriesLink.map((link) => (
					<Link key={link.id} to={link.href}>
						{link.name}
					</Link>
				))}
				{/* Add dropdown menu */}
				<p>Afficher Tout</p>
			</div>
			{/* Services */}
			<div className='bg-slate-100 flex flex-col space-y-8 h-auto cursor-pointer mb-2 pl-4 py-2'>
				<h3 className='font-semibold'>Programmes Et Services</h3>
				{servicesLinks.map((link) => (
					<Link key={link.id} to={link.href}>
						{link.name}
					</Link>
				))}
				{/* Add dropdown menu */}
				<p>Afficher Tout</p>
			</div>
		</nav>
	);
};

export default MobileMenu;
