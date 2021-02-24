import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './projects.sass';
import { setActiveId } from './reducers/projectsReducer';

const Projects = () => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.projects.items);
	const activeId = useSelector((state) => state.projects.activeId);

	const setActiveSize = (e) => {
		let id = parseInt(e.target.getAttribute('data-id'));
		dispatch(setActiveId(id));
	};

	return (
		<div>
			<section className='projects anim anim-no-repeat scrollFrom' id='projectsSection'>
				<div className='container'>
					<h2 className='projects__title'>Наши проекты</h2>
					<div className='row'>
						<div className='projects__sizes'>
							{data.map((item) => (
								// console.log(item.image),
								<div key={item._id}>
									{activeId === item.id ? (
										<div className='projects__sizesItemActive' data-id={item.id}>
											{item.size} кв.м
										</div>
									) : (
										<div className='projects__sizesItem' data-id={item.id} onClick={(e) => setActiveSize(e)}>
											{item.size} кв.м
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Projects;
