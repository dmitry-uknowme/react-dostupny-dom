import './App.css';
import Projects from './Projects';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from './reducers/projectsReducer';
import { useEffect } from 'react';
import Gallery from './Gallery';
function App() {
	const dispatch = useDispatch();

	const fetchItems = async () => {
		const response = await axios.get('https://dostupny-dom.herokuapp.com/get/projects');
		dispatch(setProjects(response.data));
	};

	const data = useSelector((state) => state.projects.items);
	let activeId = useSelector((state) => state.projects.activeId);

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<div className='App'>
			<Gallery />
			<Projects data={data} activeId={activeId} />
		</div>
	);
}

export default App;
