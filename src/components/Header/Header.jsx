import React from 'react';
import './Header.sass';
import logo from '../../img/header/header__logo.png';

const Header = () => {
	return (
		<header className='header' id='headerSection'>
			<div className='container' style={{ display: 'flex', flexWrap: 'wrap' }}>
				<a className='header__logo' href='./admin.html#content-1'>
					<img className='header__logoImg' src={logo} alt='Логотип' data-aos='fade' data-aos-delay={400} />
				</a>
				<nav className='header__nav' data-aos='slide-right' data-aos-delay={300}>
					<ul className='header__menu'>
						<li className='header__menuItem'>
							<a className='header__menuLink' href='./'>
								Главная
							</a>
						</li>
						<li className='header__menuItem'>
							<a className='header__menuLink' href='#projectsSection'>
								Наши проекты
							</a>
						</li>
						<li className='header__menuItem'>
							<a className='header__menuLink' href='#feedbackSection'>
								Отзывы
							</a>
						</li>
						<li className='header__menuItem'>
							<a className='header__menuLink' href='#stepsSection'>
								Этапы работ
							</a>
						</li>
					</ul>
				</nav>
				<div className='header__contacts' data-aos='slide-left' data-aos-delay={1000}>
					<div className='header__contactsAddress'>
						Стерлитамак, <br />
						ул. Профсоюзная 2к1
					</div>
					<a className='header__contactsCall' href='tel:79659219000'>
						<div className='header__contactsPhone'>
							<h4 className='header__contactsPhoneText'>8-965-921-9000</h4>
							<h5 className='header__contactsPhoneFreecall'>Бесплатный звонок!</h5>
						</div>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
