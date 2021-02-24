import './gallery.sass';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveId, nextActiveId } from './reducers/projectsReducer';
const Gallery = () => {
	const dispatch = useDispatch();

	const currentData = useSelector((state) => state.projects.items);
	const activeId = useSelector((state) => state.projects.activeId);

	const data = useRef(null);
	data.current = currentData;

	const setActiveImage = (e) => {
		const id = parseInt(e.target.getAttribute('data-id'));
		dispatch(setActiveId(id));
	};

	const nextActiveImage = () => {
		dispatch(nextActiveId());
		console.log(activeId, currentData[activeId]['material']);
	};

	const findImageByMaterial = (e) => {
		for (let i = 0; i < currentData.length - 2; i++) {
			dispatch(setActiveId(i));
			console.log(activeId);
		}

		// let scrollProjects = setInterval(() => {
		// 	nextActiveImage();
		// 	if (activeId === 5) {
		// 		clearInterval(scrollProjects);
		// 		return false;
		// 	}
		// 	// if (currentData[activeId]['material'] === e.target.getAttribute('data-material')) {
		// 	// 	clearInterval(scrollProjects);
		// 	// 	return false;
		// 	// }
		// }, 200);
	};

	const [filteredImages, setFilteredImages] = useState([]); //need reduce

	useEffect(() => {
		const images = data.current;
		setFilteredImages(images.filter((image) => image.id !== activeId));
		console.log(data.current);
		console.log(filteredImages);
	}, [activeId]);

	return (
		<div>
			<section className='gallery anim anim-no-repeat' id='gallerySection'>
				<div className='gallery__row'>
					<div className='gallery__unselectedImages'>
						<div className='gallery__unselectedImagesRow'>
							{filteredImages?.map((item) => (
								<img
									key={item._id}
									className='gallery__unselectedImagesItem gallery__img'
									src={item.image}
									alt={`Проект ${item.id}`}
									data-id={item.id}
									data-material={item.material}
									onClick={(e) => setActiveImage(e)}
								/>
							))}
						</div>
					</div>
					<div className='gallery__selectedImage'>
						<img className='gallery__selectedImageItem gallery__img' src={currentData[activeId]?.image} alt={`Проект ${activeId}`} data-id={activeId} data-material={currentData[activeId]?.image} />

						<div className='gallery__selectors'>
							<div className='gallery__selectorsRock' data-material='rock' onClick={findImageByMaterial}>
								Каменные Дома
							</div>
							<div className='gallery__selectorsWood' data-material='wood' onClick={findImageByMaterial}>
								Деревянные Дома
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Gallery;
