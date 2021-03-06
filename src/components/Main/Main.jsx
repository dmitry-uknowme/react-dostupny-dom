import React, { useState } from 'react';
import ModalForm from '../Modal/ModalForm';

import './Main.sass';

import house from '../../img/main/main__house.png';
import cloud from '../../img/main/main__cloud.png';
import feature1 from '../../img/main/main__feature1.png';
import feature2 from '../../img/main/main__feature2.png';
import feature3 from '../../img/main/main__feature3.png';
import decorRight from '../../img/main/main__decorRight.png';
import decorLeft from '../../img/main/main__decorLeft.png';

const Main = () => {
	const [isOpen, setIsOpen] = useState(false);

	const close = () => {
		setIsOpen(false);
	};
	return (
		<>
			<ModalForm isOpen={isOpen} close={close} btnText='Позвонить мне' />
			<main className='main anim anim-no-repeat'>
				<div className='container'>
					<h1 className='main__title'>
						Дом <span className='main__titleHighlight'>с участком</span> по цене <br />
						квартиры <span className='main__titleHighlight'>в</span>
						Стерлитамаке!
					</h1>
					<div className='main__body'>
						<img className='main__house' src={house} />
						<img src={cloud} alt='' className='main__cloud' />
						<a type='button' className='btn main__btn' onClick={() => setIsOpen(true)}>
							Заказать
							<br />
							проект
							<svg className='btn-waves' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='200%' height='150%' preserveAspectRatio='none'>
								<defs>
									<path id='gentle-wave' d='M261.77,2c-9.37,0-38.53,18-91.63,18h-83C55.94,20,26.79,38-4.45,38' />
									<filter id='shadow2'>
										<feDropShadow dx={0} dy={-1} stdDeviation={1} floodColor='aqua' height={50} />
									</filter>
									<filter id='shadow1'>
										<feDropShadow dx={0} dy={1} stdDeviation={1} floodColor='green' />
									</filter>
								</defs>
								<use className='btn-wave' xlinkHref='#gentle-wave' x={50} y={0} fill='#fff' fillOpacity={0} stroke='#fff' strokeWidth={1} />
								<image
									className='btn-glow'
									width={279}
									height={52}
									xlinkHref='data:image/png;base64,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'
								/>
							</svg>
							<div className='btn-text'>Заказать проект</div>
						</a>
					</div>
					<h2 className='main__tagline'>Строим теплые дома быстро и по доступной цене!</h2>
				</div>
				<div className='main__features'>
					<div className='container'>
						<div className='main__featuresItem'>
							<img className='main__featuresItemIcon' src={feature1} />
							<h3 className='main__featuresItemDesc'>
								Строим <br />
								<span className='main__featuresItemDescHighlight'> "под ключ" </span>
							</h3>
						</div>
						<div className='main__featuresItem'>
							<img className='main__featuresItemIcon' src={feature2} />
							<h3 className='main__featuresItemDesc'>
								Ипотека от <br />
								<span className='main__featuresItemDescHighlight'> ведущик банков </span>
							</h3>
						</div>
						<div className='main__featuresItem'>
							<img className='main__featuresItemIcon' src={feature3} />
							<h3 className='main__featuresItemDesc'>
								Рассрочка <br />
								<span className='main__featuresItemDescHighlight'> без банков </span>
							</h3>
						</div>
						<div className='main__decor'>
							<img className='main__decorRight' src={decorRight} data-aos='fade-left' data-aos-delay={400} data-aos-duration={1000} />
							<img className='main__decorLeft' src={decorLeft} data-aos='fade-left' data-aos-delay={500} data-aos-duration={1000} />
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Main;
