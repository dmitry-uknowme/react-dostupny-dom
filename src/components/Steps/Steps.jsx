import React from 'react';
import './Steps.sass';

import qa from '../../img/steps/steps__qa.png';
import process from '../../img/steps/steps__process.png';
import economy from '../../img/steps/steps__economy-forecast.png';
import contract from '../../img/steps/steps__contract.png';
import sketch from '../../img/steps/steps__sketch.png';
import construction from '../../img/steps/steps__construction.png';

const Steps = () => {
	return (
		<div>
			<section className='steps' id='stepsSection'>
				<h2 className='steps__title'>Этапы работы</h2>
				<div className='steps__basicSteps'>
					<div className='steps__basicStepsItem' data-aos='slide-right' data-aos-delay={200}>
						<img className='steps__basicStepsItemIcon' src={qa} />
						<h3 className='steps__basicStepsItemTitle'>
							Обсуждение <br />
							Проекта
						</h3>
					</div>
					<div className='steps__basicStepsItem' data-aos='slide-down' data-aos-delay={700} data-aos-duration={100}>
						<img className='steps__basicStepsItemIcon' src={process} />
						<h3 className='steps__basicStepsItemTitle'>
							Разработка <br />
							Планировки
						</h3>
					</div>
					<div className='steps__basicStepsItem' data-aos='slide-left' data-aos-delay={250}>
						<img className='steps__basicStepsItemIcon' src={economy} />
						<h3 className='steps__basicStepsItemTitle'>
							Составление <br />
							Сметы
						</h3>
					</div>
				</div>
				<div className='steps__advancedSteps'>
					<div className='steps__advancedStepsItem' data-aos='slide-right' data-aos-delay={350}>
						<img className='steps__advancedStepsItemIcon' src={contract} />
						<h3 className='steps__advancedStepsItemTitle'>
							Заключаем <br />
							Договор
						</h3>
					</div>
					<div className='steps__advancedStepsItem' data-aos='slide-up' data-aos-duration={200}>
						<img className='steps__advancedStepsItemIcon' src={sketch} />
						<h3 className='steps__advancedStepsItemTitle'>
							Подготовительные <br />
							Строительные <br />
							Работы
						</h3>
					</div>
					<div className='steps__advancedStepsItem' data-aos='slide-left' data-aos-delay={300}>
						<img className='steps__advancedStepsItemIcon' src={construction} />
						<h3 className='steps__advancedStepsItemTitle'>Стройка</h3>
					</div>
				</div>
				<div className='container'>
					<section className='offer' data-aos='flip-up' data-aos-delay={500}>
						<h2 className='steps__formTitle'>Узнайте о типичных ошибках заказчика при строительстве дома</h2>
						<h3 className='steps__formSubtitle'>Подпишитесь на информационную рассылку</h3>
						<form className='offer__form'>
							<div className='center'>
								<input className='offer__formEmail input' type='text' placeholder='Ваш Email' />
							</div>
							<div className='center'>
								<a type='button' className='btn offer__formBtn'>
									Заказать звонок
									<svg className='btn-waves' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='300%' height='250%' preserveAspectRatio='none'>
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
									<div className='btn-text' style={{ textTransform: 'uppercase' }}>
										Заказать звонок
									</div>
								</a>
							</div>
						</form>
					</section>
				</div>
			</section>
			<section className='mobileSteps'>
				<h2 className='steps__title'>Этапы работы</h2>
				<div className='swiper-container'>
					<div className='swiper-wrapper'>
						<div className='swiper-slide'>
							<div className='steps__basicStepsItem'>
								<img className='steps__basicStepsItemIcon' src='./img/steps/steps__qa.png' />
								<h3 className='steps__basicStepsItemTitle'>
									Обсуждение <br />
									Проекта
								</h3>
							</div>
						</div>
						<div className='swiper-slide'>
							<div className='steps__basicStepsItem'>
								<img className='steps__basicStepsItemIcon' src='./img/steps/steps__process.png' />
								<h3 className='steps__basicStepsItemTitle'>
									Разработка <br />
									Планировки
								</h3>
							</div>
						</div>
						<div className='swiper-slide'>
							<div className='steps__basicStepsItem'>
								<img className='steps__basicStepsItemIcon' src='./img/steps/steps__economy-forecast.png' />
								<h3 className='steps__basicStepsItemTitle'>
									Составление <br />
									Сметы
								</h3>
							</div>
						</div>
						<div className='swiper-slide'>
							<div className='steps__advancedStepsItem'>
								<img className='steps__advancedStepsItemIcon' src='./img/steps/steps__contract.png' />
								<h3 className='steps__advancedStepsItemTitle'>
									Заключаем <br />
									Договор
								</h3>
							</div>
						</div>
						<div className='swiper-slide'>
							<div className='steps__advancedStepsItem stepsMobile__AdvancedStepsItem'>
								<img className='steps__advancedStepsItemIcon' src='./img/steps/steps__sketch.png' />
								<h3 className='steps__advancedStepsItemTitle'>
									Подготовительные <br />
									Строительные <br />
									Работы
								</h3>
							</div>
						</div>
						<div className='swiper-slide'>
							<div className='steps__advancedStepsItem'>
								<img className='steps__advancedStepsItemIcon' src='./img/steps/steps__construction.png' />
								<h3 className='steps__advancedStepsItemTitle'>Стройка</h3>
							</div>
						</div>
					</div>
				</div>
				<div className='container'>
					<section className='offer'>
						<h2 className='steps__formTitle'>Узнайте о типичных ошибках заказчика при строительстве дома</h2>
						<h3 className='steps__formSubtitle'>Подпишитесь на информационную рассылку</h3>
						<form className='offer__form'>
							<div className='center'>
								<input className='offer__formEmail input' type='text' placeholder='Ваш Email' />
							</div>
							<div className='center'>
								<a type='button' className='btn offer__formBtn'>
									Заказать звонок
									<svg className='btn-waves' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' width='300%' height='250%' preserveAspectRatio='none'>
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
									<div className='btn-text' style={{ textTransform: 'uppercase' }}>
										Заказать звонок
									</div>
								</a>
							</div>
						</form>
					</section>
				</div>
			</section>
		</div>
	);
};

export default Steps;
