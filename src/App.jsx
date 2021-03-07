import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from './reducers/projectsReducer';
import { useEffect, useState } from 'react';

import Preloader from './components/Preloader/Preloader';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import Features from './components/Features/Features';
import Offer from './components/Offer/Offer';
import Feedback from './components/Feedback/Feedback';
import Steps from './components/Steps/Steps';
import Outro from './components/Outro/Outro';
import Footer from './components/Footer/Footer';
import ModalForm from './components/Modal/ModalForm';
import Slider from './components/Slider/Slider';

const App = () => {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	const fetchItems = async () => {
		// const response = await axios.get('https://dostupny-dom.herokuapp.com/get/projects');
		// localStorage.setItem('data', JSON.stringify(response.data));

		// console.log(response.data);
		dispatch(setProjects(JSON.parse(localStorage.getItem('data'))));
	};

	useEffect(() => {
		setTimeout(() => setIsLoaded(true), 500);
		dispatch(setProjects(JSON.parse(localStorage.getItem('data'))));
		// fetchItems();
	}, []);

	const data = useSelector((state) => state.projects.items);

	return (
		<div className='app _load'>
			{!isLoaded && <Preloader />}
			<Slider />
			<Header />
			<Main />
			<Projects />
			<Gallery />
			<Features />
			<Offer />
			<Feedback />
			<Steps />
			<Outro />
			<Footer />
		</div>
	);
};

export default App;
