import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectAllData,
	getAllDataStatus,
	getAllError,
	fetchData,
} from '../features/dataSlice';

const Homepage = () => {
	const dispatch = useDispatch();

	const data = useSelector(selectAllData);
	const dataStatus = useSelector(getAllDataStatus);
	const error = useSelector(getAllError);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch, fetchData]);

	console.log(data);
	return <div>Homepage</div>;
};

export default Homepage;
