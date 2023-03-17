import cn from 'classnames';
import { Link } from 'react-router-dom';
import { scrollToElementIdHandler } from '../../../service/utilsService';
import { ReactComponent as CloverSvg } from './svg/clover-svgrepo-com.svg';

import style from './footer.module.css';

const FooterComponent = () => {

  return (
    <div className={cn(style.container)}>
      <div className={cn(style.upper)}>
        <div className={style.svgContainer}>
          <CloverSvg />
        </div>
        <div className={cn(style.tutotarial)}>
          <ul>
            <li><h3>Начать</h3></li>
            <li onClick={() => scrollToElementIdHandler("hero")}>Давайте приступим</li>
            <li onClick={() => scrollToElementIdHandler("hero")}>Мобильное приложение</li>
          </ul>
        </div>
        <div className={cn(style.links)}>
          <ul>
            <li><h3>О проекте</h3></li>
            <li><Link to={"/faq"}>FAQ</Link></li>
            <li>
              <Link to={"/term-of-use"}>Пользовательское соглашение</Link>
            </li>
            <li>
              <Link to={"/privacy-policy"}>Политика конфиденциальности</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={cn(style.bottom)}>
        <ul>
          <li>Домой</li>
          <li>Особенности</li>
          <li>Галерея</li>
        </ul>
        <ul>
          <li>Контакты</li>
          <li>О разработке</li>
          <li>Отзывы</li>
        </ul>
        <div className={style.social}>
          <div><i className="fab fa-telegram"></i></div>
          <div><i className="fab fa-vk"></i></div>
          <div><i className="fab fa-instagram"></i></div>
          <div><i className="fab fa-facebook"></i></div>
          <div><i className="fab fa-blogger"></i></div>
        </div>
        <div className={cn(style.time)}>
          <p>© 2021–{new Date().getFullYear()}, Memorush, официальный сайт</p>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent;
