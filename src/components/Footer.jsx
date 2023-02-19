import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const footerLinks = [
	{
		id: 1,
		name: 'Retours',
		href: '/',
	},
	{
		id: 2,
		name: 'Chez vous',
		href: '/',
	},
	{
		id: 3,
		name: 'Service Client',
		href: '/',
	},
	{
		id: 4,
		name: 'Vos commandes',
		href: '/',
	},
	{
		id: 5,
		name: 'Votre Compte',
		href: '/',
	},
	{
		id: 6,
		name: 'Vendre sur Amazon',
		href: '/',
	},
	{
		id: 7,
		name: 'Vos listes',
		href: '/',
	},
	{
		id: 8,
		name: 'Créer un compte professionnel gratuit',
		href: '/',
	},
	{
		id: 9,
		name: 'Trouver une liste',
		href: '/',
	},
	{
		id: 10,
		name: 'Trouver un cadeau',
		href: '/',
	},
];

const Footer = () => {
	return (
		<footer className=' flex flex-col bg-blue-600 text-white bottom-0 text-center'>
			<div className='py-2'>
				<ChevronUpIcon className='w-6 mx-auto' />
				<p className='uppercase text-xs'>haut de la page</p>
			</div>
			<div className='grid grid-cols-2 bg-blue-800 '>
				{footerLinks.map((link) => (
					<Link to={link.href} key={link.id}>
						{link.name}
					</Link>
				))}
			</div>
			<div className='bg-blue-900 space-y-5  py-5'>
				<p>
					Déjà client(e)? <Link to={'/'}>Se connecter</Link>
				</p>
				<div className='text-gray-300 text-xs space-x-5 '>
					<Link to={'/'}>Conditions générales de ventes</Link>
					<Link to={'/'}>Vos informations personelles</Link>
					<Link to={'/'}>Cookies</Link>
					<Link to={'/'}>Annonces basées sur vos centres d’intérêt</Link>
					<p>© 1996-2023, Amazon.com Inc.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
