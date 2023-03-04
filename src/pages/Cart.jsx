import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
	return (
		<main className='flex flex-col items-center'>
			<div className='text-center'>
				<h3 className='font-bold'>Votre panier Amazon est vide</h3>
				<p className='text-gray-600'>Rien. Le vide. Nada.</p>
				<Link to={'/'}>Continuer les achats</Link>
			</div>
			<div className='space-y-2'>
				<button className='bg-orange-500 w-full p-3 rounded-md border border-gray-400'>
					<Link to={'/connect'}>Connectez-vous</Link>
				</button>
				<button className=' w-full p-3 rounded-md border border-gray-400'>
					<Link to={'/connect'}>Inscrivez-vous maintenant</Link>
				</button>
			</div>
		</main>
	);
};

export default Cart;
