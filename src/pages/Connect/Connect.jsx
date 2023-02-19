import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import TOS from './TOS';

const Connect = () => {
	const [openRegisterMenu, setOpenRegisterMenu] = useState(false);
	const [openLoginMenu, setOpenLoginMenu] = useState(true);
	console.log(openRegisterMenu);
	return (
		<div>
			<h2 className='text-3xl mb-2'>Bienvenue</h2>
			<div className='border-2 h-full p-5 space-y-3'>
				{/* Create account */}
				<div>
					<div className='flex items-center space-x-2 mb-2 '>
						<input
							type={'checkbox'}
							className='w-5 h-5'
							value={openRegisterMenu}
							onClick={() => setOpenRegisterMenu(!openRegisterMenu)}
						/>
						<p className='text-xs'>
							<span className='font-semibold text-base'>Créer un compte.</span>{' '}
							Nouveau chez Amazon?
						</p>
					</div>
					{openRegisterMenu && (
						<>
							<form className='space-y-2 mb-4'>
								<div>
									<p className='font-semibold'>Prénom et nom</p>
									<input
										type='text'
										className=' border-2 w-full p-2 rounded-sm'
									/>
								</div>
								<div>
									<p className='font-semibold'>
										Numero de telephone portable ou adresse e-mail
									</p>
									<input
										type='email || tel  '
										className=' border-2 w-full p-2 rounded-sm'
									/>
								</div>
								<div>
									<p className='font-semibold'>Créer un mot de passe</p>
									<input
										type='text'
										className=' border-2 w-full p-2 rounded-sm'
									/>
								</div>
								<button className='bg-orange-500 w-full p-3 rounded-md border border-gray-400'>
									Continuer
								</button>
							</form>

							<TOS purpose={'creation'} />

							{/* Professional account */}
							<div className='text-xs text-gray-500 flex items-center justify-center my-2'>
								<div className='border-t-2 w-8' />
								<p className='px-2'>Vous achetez pour votre entreprise?</p>
								<div className='border-t-2 w-8' />
							</div>
							<Link to={'/'} className='flex justify-between '>
								<p className='text-sm'>Créez un compte professionnel gratuit</p>
								<ChevronRightIcon className='w-4' />
							</Link>
						</>
					)}
				</div>
				{/* Connect to account */}
				<div>
					<div className='flex items-center space-x-2 mb-2'>
						<input type={'checkbox'} className='w-5 h-5' />
						<p className='text-xs'>
							<span className='font-semibold text-base'>Connexion.</span> Deja
							client(e)?
						</p>
					</div>
					{openLoginMenu && (
						<>
							<form className='space-y-2 mb-4'>
								<div>
									<p className='font-semibold'>Email ou numero de telephone</p>
									<input
										type='email || tel'
										className=' border-2 w-full p-2 rounded-sm'
									/>
								</div>

								<button className='bg-orange-500 w-full p-3 rounded-md border border-gray-400'>
									Continuer
								</button>
							</form>
							<TOS purpose={'connect'} />
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Connect;
