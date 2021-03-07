import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveId, prevActiveId, nextActiveId } from '../../reducers/projectsReducer';

import Portal from '../Portal';
import Slider from 'react-touch-drag-slider';

const FullProjectModal = ({ isOpen, close }) => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.projects.items);
	const activeId = useSelector((state) => state.projects.activeId);
	const [slide, setSlide] = useState(activeId);
	const setActiveProject = (id) => {
		dispatch(setActiveId(id));
	};

	useEffect(() => {
		return () => close();
	}, []);

	return (
		<>
			{isOpen && (
				<Portal>
					<div className='modal__overlay' onClick={close}></div>
					<div className='project-modal__window _load'>
						<div class='project-modal__header'>
							{data.map((project, id) => (
								<div class='project-modal__header-item' onClick={() => setSlide(id)}>
									Проект {id + 1}
								</div>
							))}
						</div>
						<Slider
							onSlideComplete={setSlide}
							onSlideStart={(i) => {
								console.log('started dragging on slide', i);
							}}
							activeIndex={slide}
							threshHold={100}
							transition={0.3}
							scaleOnDrag={true}>
							{data.map(({ image, avatar, name, town, comment, size, _id }, index) =>
								name ? (
									<div class='project-modal__item' key={_id}>
										<div class='project-modal__item-header'>
											<div class='project-modal__item-image'>
												<img src={image} alt='' />
											</div>
											<div class='project-modal__item-comment'>
												<p>{comment}</p>
											</div>
										</div>
										<div class='project-modal__item-body'>
											<div class='project-modal__item-plan'>
												<img src='./img/projects/projects__preview0.png' alt='' />
											</div>
											<div class='project-modal__item-size'>
												<h2>{size} кв.м.</h2>
											</div>
											<div class='project-modal__item-name'>
												<h2>{name}</h2>
												<p>{town}</p>
											</div>
											<div class='project-modal__item-avatar'>
												<img src={avatar} alt='' />
											</div>
										</div>
										<div class='swiper-scrollbar'></div>
									</div>
								) : (
									''
								)
							)}
						</Slider>
					</div>
				</Portal>
			)}
		</>
	);
};

export default FullProjectModal;
