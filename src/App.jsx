import { Route, Routes } from 'react-router-dom';
import { Homepage, Connect, ErrorPage } from './pages';
import Cart from './pages/Cart';
import Profile from './pages/Profile/Profile';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/connect' element={<Connect />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/profile' element={<Profile />} />
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
};

export default App;
