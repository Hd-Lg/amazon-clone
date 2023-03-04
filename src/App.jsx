import { Route, Routes } from 'react-router-dom';
import { Homepage, Connect, ErrorPage } from './pages';
import Cart from './pages/Cart';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Homepage />} />
			<Route path='/connect' element={<Connect />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
};

export default App;
