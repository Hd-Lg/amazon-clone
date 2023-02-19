import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchInput = () => {
	return (
		<form className='flex items-center justify-center w-[90%] mx-auto rounded-lg bg-white'>
			<input
				type={'text'}
				placeholder='Rechercher sur Amazon.fr'
				className='p-2 rounded-lg w-[90%]'
			/>
			<button type='submit' className='bg-orange-500 p-2 rounded-lg '>
				<MagnifyingGlassIcon className='w-6' />
			</button>
		</form>
	);
};

export default SearchInput;
