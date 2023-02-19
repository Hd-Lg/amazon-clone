import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div>
			<div className='text-gray-500'>
				<h2 className='text-7xl uppercase'>Désolé</h2>
				<p className='text-xl'>cette page n'existe pas (plus).</p>
			</div>
			<div>
				<p>
					Reformulez votre recherche ou allez sur
					<Link to={'/'} className='text-blue-500'>
						{' '}
						la page d'accueil d'Amazon
					</Link>
				</p>
				{/* Add image dog */}
			</div>
		</div>
	);
};

export default ErrorPage;
