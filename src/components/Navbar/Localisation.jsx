import { MapPinIcon } from '@heroicons/react/24/outline';

const Localisation = () => {
	return (
		<div className='flex items-center bg-blue-600 py-2 pl-2 text-sm cursor-pointer'>
			<MapPinIcon className='w-5' />
			<p>Sélectionnez votre adresse de livraison</p>
		</div>
	);
};

export default Localisation;
