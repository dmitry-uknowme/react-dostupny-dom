import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import React, { Component, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const Slider = () => {
	const data = useSelector((state) => state.projects.items);

	const swiper = useRef();

	const [index, setIndex] = useState();

	useEffect(() => {
		// swiper = currentSwiper.current.swiper;
		setIndex(swiper.current.swiper.activeIndex);
		// console.log('swiper id', index);
	}, []);

	// console.log(index);

	const params = {
		centeredSlides: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		renderPrevButton: () => <button className='swiper-button-prev'>Prev</button>,
		renderNextButton: () => <button className='swiper-button-next'>Next</button>,
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
		},
		// renderSrollbar: () => (
		// 	<CustomScrollbar>
		// 		<hr />
		// 	</CustomScrollbar>
		// ),
	};

	return (
		<>
			<Swiper {...params} shouldSwiperUpdate activeSlideKey={index} ref={swiper}>
				{!data ? (
					<div>No images</div>
				) : (
					data.map((book) => (
						<div key={book._id}>
							<img src={book.image} alt='' />
						</div>
					))
				)}
			</Swiper>
			<button onClick={() => setIndex(2)}>Click</button>
			<button>Update</button>
		</>
	);
};

export default Slider;
