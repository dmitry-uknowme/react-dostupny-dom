import React, { useState } from 'react';
import './Feedback.sass';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-touch-drag-slider';

import defaultAvatar from '../../img/feedback/feedback__img.png';
import { setActiveId, prevActiveId, nextActiveId } from '../../reducers/projectsReducer';

const Feedback = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.projects.items);
	const activeId = useSelector((state) => state.projects.activeId);

	const setActiveComment = (id) => {
		dispatch(setActiveId(id));
	};

	const nextActiveComment = (id) => {
		dispatch(nextActiveId());
	};

	const prevActiveComment = (id) => {
		dispatch(prevActiveId());
	};

	// if (activeId === data.length - 1) {
	// 	console.log('Last SLides');

	// 	data = data[0];
	// 	// data = [...data, ...data];
	// 	// console.log('new data', data);
	// }

	const nextSlide = () => {
		if (activeId < data.length - 1) {
			nextActiveComment();
		} else {
			setActiveComment(0);
		}
	};

	const prevSlide = () => {
		if (activeId > 0) {
			prevActiveComment();
		} else {
			setActiveComment(data.length - 1);
		}
	};

	return (
		<div>
			<section class='feedback' data-aos='slide-up' data-aos-delay='400' id='feedbackSection'>
				<div class='container'>
					<div class='feedback__reviewUp' onClick={nextSlide}></div>
					<div class='feedback__reviewDown' onClick={prevSlide}></div>
					<Slider
						onSlideComplete={setActiveComment}
						onSlideStart={(i) => {
							console.log('started dragging on slide', i);
						}}
						activeIndex={activeId}
						threshHold={100}
						transition={0.3}
						scaleOnDrag={true}>
						{data.map(({ avatar, name, town, comment }, index) =>
							name ? (
								<React.Fragment key={index}>
									<div class='feedback__row'>
										<img class='feedback__img' src={avatar || defaultAvatar} alt='Ксения' />
										<div class='feedback__review'>
											<h3 class='feedback__reviewName'>{name}</h3>
											<h4 class='feedback__reviewTown'>{town}</h4>
											<p class='feedback__reviewText'>{comment}</p>
											<a class='feedback__reviewExpand' href='#gallerySection'>
												Посмотреть проект
											</a>
										</div>
									</div>
								</React.Fragment>
							) : (
								''
							)
						)}
					</Slider>
				</div>
			</section>
		</div>
	);
};

export default Feedback;
