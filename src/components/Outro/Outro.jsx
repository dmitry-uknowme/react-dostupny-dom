import React, { useState } from 'react';
import './Outro.sass';

import video from '../../img/outro/outro__video.png';
import play from '../../img/outro/outro__play.png';
import key from '../../img/outro/outro__key.png';

const Outro = () => {
	const [showText, setShowText] = useState(false);

	return (
		<div>
			<section className='outro'>
				<div className='container'>
					<div className='outro__viewable'>
						<div className='center'>
							<button className='outro__viewableTitle' data-aos='zoom-in' data-aos-delay={900} data-aos-duration={500} onClick={() => setShowText((state) => !state)}>
								Прочитать
							</button>
						</div>
						<div className='center'>
							<img className='outro__viewableVideo' src={video} data-aos='zoom-in' data-aos-delay={300} />
						</div>
						<img className='outro__viewablePlay' src={play} data-aos='zoom-out' data-aos-delay={600} />
						<img className='outro__viewableDecor' src={key} data-aos='slide-right' data-aos-delay={350} />
					</div>
					{showText && (
						<div className='outro__readable'>
							<h2 className='outro__title'>Строительство домов под ключ</h2>
							<p className='outro__text'>
								Мы строим под ключ комфортные дома и коттеджи в Стерлитамаке, и сдаем их заказчикам готовыми к проживанию. Мы познакомим вас с технологиями и материалами, которые используем в
								строительстве загородных домов. Вы узнаете все об их преимуществах, особенностях и важных нюансах.
							</p>
							<h2 className='outro__title'>Строительство коттеджей под ключ в Стерлитамаке</h2>
							<p className='outro__text'>
								За время работы мы построили и сдали заказчикам более 800 готовых для заселения домов. Мы строим загородные коттеджи по европейской технологии, соблюдая все требования СНиП и ГОСТ,
								заботимся о здоровье клиентов и применяем только сертифицированные, экологически безопасные материалы, не выделяющие формальдегиды.
							</p>
							<p className='outro__text'>
								Мы самостоятельно изготавливаем деревянные, металлические и железобетонные конструкции для каркасных домов на производственных площадках. У нас большой автопарк строительной техники и
								в наличии механизированное оборудование. В нашей компании работают талантливые инженеры, дизайнеры, и опытные мастера.
							</p>
							<p className='outro__text'>
								На каждом этапе работают специализированные бригады. Благодаря комплексному подходу к строительству домов, мы снижаем затраты и предлагаем клиентам невысокие цены.
							</p>
						</div>
					)}
				</div>
			</section>
		</div>
	);
};

export default Outro;
