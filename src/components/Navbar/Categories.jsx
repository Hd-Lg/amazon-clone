import { Link } from 'react-router-dom';

const categories = [
	{
		id: 1,
		name: 'Amazon Basics',
		link: '/',
	},
	{
		id: 2,
		name: 'Ventes Flash',
		link: '/',
	},
	{
		id: 3,
		name: 'Meilleures ventes',
		link: '/',
	},
	{
		id: 4,
		name: 'Prime',
		link: '/',
	},
	{
		id: 5,
		name: 'Livres',
		link: '/',
	},
	{
		id: 6,
		name: 'Dernières Nouveautés',
		link: '/',
	},
	{
		id: 7,
		name: 'Cuisine et Maison',
		link: '/',
	},
	{
		id: 8,
		name: 'Informatique',
		link: '/',
	},
	{
		id: 9,
		name: 'High-Tech',
		link: '/',
	},
	{
		id: 10,
		name: 'Cartes cadeaux',
		link: '/',
	},
	{
		id: 11,
		name: 'Listes de Cadeaux',
		link: '/',
	},
	{
		id: 12,
		name: 'Musique',
		link: '/',
	},
];

const Categories = () => {
	return (
		<div className='w-full overflow-x-scroll whitespace-nowrap scroll-smooth space-x-7 text-large p-4'>
			{categories.map((category) => (
				<Link to={category.link} key={category.id}>
					{category.name}
				</Link>
			))}
		</div>
	);
};

export default Categories;
