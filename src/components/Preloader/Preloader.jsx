import React from 'react';
import './Preloader.sass';
const Preloader = () => {
	return (
		<section className='preloader'>
			<div className='preloader__image _bounce'>
				<div className='preloader__border _spin _rotate'></div>
			</div>
		</section>
	);
};

export default Preloader;
