import React from 'react';
import './Footer.sass';

import logo from '../../img/logo.png';

import { YMaps, Map, Placemark, Circle } from 'react-yandex-maps';

const Footer = () => {
	return (
		<div>
			<footer className='footer'>
				<div className='footer__info'>
					<div className='footer__contacts'>
						<div className='footer__contactsAddress' data-aos='fade-in' data-aos-delay={650}>
							Стерлитамак, <br />
							ул. Профсоюзная 2к1
						</div>
						<div className='footer__contactsPhone'>8-965-921-9000</div>
						<h3 className='footer__contactsTagline'>Уже работаем!</h3>
					</div>
					<img className='footer__logo' src={logo} alt='Логотип' data-aos='fade-in' data-aos-delay={350} />
					<YMaps className='footer__map'>
						<Map
							defaultState={{
								center: [53.656393, 55.950543],
								zoom: 10,
								controls: ['zoomControl', 'fullscreenControl'],
							}}
							modules={['control.ZoomControl', 'control.FullscreenControl']}>
							<Placemark defaultGeometry={[53.656393, 55.950543]} />
							<Circle
								geometry={[[53.656393, 55.950543], 4000]}
								options={{
									draggable: false,
									fillColor: '#DB709377',
									strokeColor: '#990066',
									strokeOpacity: 0.5,
									strokeWidth: 5,
								}}
							/>
						</Map>
					</YMaps>
				</div>
				<div className='footer__id'>ООО ТЁПЛЫЙ ДОМ ИНН/ОГРН 12345678/12345678</div>
			</footer>
			<div className='mobileFooter'>
				<div className='footer__info'>
					<div className='footer__contacts'>
						<div className='footer__contactsPhone'>8-965-921-9000</div>
						<h3 className='footer__contactsTagline'>Бесплатный Звонок !</h3>
						<div className='footer__contactsAddress'>
							Стерлитамак, <br />
							ул. Профсоюзная 2к1
						</div>
					</div>
					<iframe
						className='footer__map'
						src='https://yandex.ru/map-widget/v1/?um=constructor%3A5af0aae49b155fdeabb01423afe2ba10fe0a2513ad2cbb5d2e36a11195994f1e&source=constructor'
						width={500}
						height={150}
						frameBorder={0}
						data-aos='fade-out'
						data-aos-delay={300}
					/>
					<img className='footer__logo' src='./img/logo.png' alt='Логотип' data-aos='fade-in' data-aos-delay={350} />
				</div>
				<div className='footer__id'>ООО ТЁПЛЫЙ ДОМ ИНН/ОГРН 12345678/12345678</div>
			</div>
		</div>
	);
};

export default Footer;
