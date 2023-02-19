import React from 'react';
import { Link } from 'react-router-dom';

const TOS = ({ purpose }) => {
	let text;
	if (purpose === 'creation') {
		text = 'En créant un compte';
	} else if (purpose === 'connect') {
		text = 'En passant votre commande';
	}
	return (
		<p className='text-sm'>
			{text}, vous acceptez les
			<Link to='/' className='text-blue-500'>
				{' '}
				Conditions générales de vente{' '}
			</Link>
			d'Amazon. Veuillez consulter notre{' '}
			<Link to='/' className='text-blue-500'>
				{' '}
				Notice Protection de vos Informations Personnelles{' '}
			</Link>
			, notre{' '}
			<Link to='/' className='text-blue-500'>
				{' '}
				Notice Cookies{' '}
			</Link>{' '}
			et notre
			<Link to='/' className='text-blue-500'>
				{' '}
				Notice Annonces publicitaires basées sur vos centres d'intérêt{' '}
			</Link>
			.
		</p>
	);
};

export default TOS;
