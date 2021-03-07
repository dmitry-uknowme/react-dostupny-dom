import React from 'react';
import './Features.sass';

import keys from '../../img/features/features__keys.png';
import education from '../../img/features/features__education.png';
import guarantee from '../../img/features/features__guarantee.png';
import heart from '../../img/features/features__heart.png';

const Features = () => {
	return (
		<>
			<section className='features anim anim-no-repeat' data-aos='zoom-in' data-aos-delay={200}>
				<div className='container'>
					<div className='features__row'>
						<div className='features__item' data-id={0}>
							<h3 className='features__itemTitle'>
								Готовые дома <br />
								под ключ
							</h3>
							<p className='features__itemDesc' data-id={0}>
								Ценим каждого клиента, делаем работу качественно и быстро. От конкурентов нас отличает низкая цена на строительные материалы и выполнение работ. <br />
								<br />
								Мы уделяем внимание кадрам компании. В нашей команде только высококвалифицированные специалисты с профильным образованием: дизайнеры, проектировщики, архитекторы, инженеры, сметчики,
								бригады сформированы из
							</p>
							<a className='features__itemExpand' type='button' data-id={0}>
								Подробнее
							</a>
							<img className='features__itemIcon features__itemIconKeys' src={keys} />
						</div>
						<div className='features__item' data-id={1}>
							<h3 className='features__itemTitleEdu features__itemTitle'>Кадры с высшим образованием</h3>
							<p className='features__itemDesc' data-id={1}>
								Ценим каждого клиента, делаем работу качественно и быстро. От конкурентов нас отличает низкая цена на строительные материалы и выполнение работ. <br />
								<br />
								Мы уделяем внимание кадрам компании. В нашей команде только высококвалифицированные специалисты с профильным образованием: дизайнеры, проектировщики, архитекторы, инженеры, сметчики,
								бригады сформированы из
							</p>
							<a className='features__itemExpand' type='button' data-id={1}>
								Подробнее
							</a>
							<img className='features__itemIcon features__itemIconEdu' src={education} />
						</div>
						<div className='features__item' data-id={2}>
							<h3 className='features__itemTitleGuarant'>
								Гарантия <br />
								10 лет
							</h3>
							<p className='features__itemDesc' data-id={2}>
								Ценим каждого клиента, делаем работу качественно и быстро. От конкурентов нас отличает низкая цена на строительные материалы и выполнение работ. <br />
								<br />
								Мы уделяем внимание кадрам компании. В нашей команде только высококвалифицированные специалисты с профильным образованием: дизайнеры, проектировщики, архитекторы, инженеры, сметчики,
								бригады сформированы из
							</p>
							<a className='features__itemExpand' type='button' data-id={2}>
								Подробнее
							</a>
							<img className='features__itemIcon features__itemIconGuarant' src={guarantee} />
						</div>
						<div className='features__item' data-id={3}>
							<h3 className='features__itemTitleBuild features__itemTitle'>Строим как себе!</h3>
							<p className='features__itemDesc' data-id={3}>
								Ценим каждого клиента, делаем работу качественно и быстро. От конкурентов нас отличает низкая цена на строительные материалы и выполнение работ. <br />
								<br />
								Мы уделяем внимание кадрам компании. В нашей команде только высококвалифицированные специалисты с профильным образованием: дизайнеры, проектировщики, архитекторы, инженеры, сметчики,
								бригады сформированы из
							</p>
							<a className='features__itemExpand' type='button' data-id={3}>
								Подробнее
							</a>
							<img className='features__itemIcon features__itemIconHeart' src={heart} />
						</div>
					</div>
				</div>
			</section>
			;
		</>
	);
};

export default Features;
