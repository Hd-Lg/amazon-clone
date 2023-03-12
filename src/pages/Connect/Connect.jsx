import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import TOS from './TOS';

import { auth, db } from '../../utils/firebase-config';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Connect = () => {
	const [openRegisterMenu, setOpenRegisterMenu] = useState(false);
	const [openLoginMenu, setOpenLoginMenu] = useState(true);

	const [registerMail, setRegisterMail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginMail, setLoginMail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const [displayName, setDisplayName] = useState('');

	const registerUser = async () => {
		let userCredential;
		try {
			userCredential = await createUserWithEmailAndPassword(
				auth,
				registerMail,
				registerPassword
			);
			console.log(userCredential);
		} catch (error) {
			console.error(error);
		}

		try {
			let user = userCredential.user;
			let userDocRef = doc(db, 'users', user.uid);
			let userDocData = {
				uid: user.uid,
				email: registerMail,
				displayName,
				createdAt: serverTimestamp(),
			};
			await setDoc(userDocRef, userDocData);
			console.log('Document created');
		} catch (error) {
			console.error(error);
		}
	};

	const loginUser = async () => {
		try {
			let userCredential = await signInWithEmailAndPassword(
				auth,
				loginMail,
				loginPassword
			);
			let user = userCredential.user;
			if (user) {
				console.log(`Logged in as uid: ${user.uid}, email: ${user.email}`);
			}
		} catch (error) {}
	};

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
							<div className='space-y-2 mb-4'>
								<div>
									<p className='font-semibold'>Prénom et nom</p>
									<input
										type='text'
										onChange={(e) => setDisplayName(e.target.value)}
										className=' border-2 w-full p-2 rounded-sm'
									/>
								</div>
								<div>
									<p className='font-semibold'>Adresse e-mail</p>
									<input
										type='email'
										className=' border-2 w-full p-2 rounded-sm'
										onChange={(e) => setRegisterMail(e.target.value)}
									/>
								</div>
								<div>
									<p className='font-semibold'>Créer un mot de passe</p>
									<input
										type='password'
										className=' border-2 w-full p-2 rounded-sm'
										onChange={(e) => setRegisterPassword(e.target.value)}
									/>
								</div>
								<button
									onClick={registerUser}
									className='bg-orange-500 w-full p-3 rounded-md border border-gray-400'>
									Continuer
								</button>
							</div>

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
							<div>
								<div className='space-y-2 mb-4'>
									<p className='font-semibold'>Adresse e-mail</p>
									<input
										type='email'
										onChange={(e) => setLoginMail(e.target.value)}
										className=' border-2 w-full p-2 rounded-sm'
									/>
									<p className='font-semibold'>Mot de passe</p>
									<input
										type='password'
										onChange={(e) => setLoginPassword(e.target.value)}
										className=' border-2 w-full p-2 rounded-sm'
									/>
									<button
										onClick={loginUser}
										className='bg-orange-500 w-full p-3 rounded-md border border-gray-400'>
										Continuer
									</button>
								</div>
							</div>
							<TOS purpose={'connect'} />
						</>
					)}
				</div>
			</div>
			<ToastContainer />
		</div>
	);
};

export default Connect;
