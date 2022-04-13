import { ArrowLink } from "../Icons/ArrowLink";

const Menu = () => {
  return (
    <>
      <div className='menu'>
        <div className='menu__container'>
          <div className='menu__container-title'>
            <h2 className='menu__container-title_text'>Menu</h2>
          </div>

          <ul className='menu__container-nav'>
            <li className='menu__container-nav_item'>
              <a
                className='menu__container-nav_item-links'
                href='#home'
                rel='noopener noreferrer'>
                Home
              </a>

              <ArrowLink />
            </li>

            <li className='menu__container-nav_item'>
              <a
                className='menu__container-nav_item-links'
                href='#about'
                rel='noopener noreferrer'>
                About
              </a>

              <ArrowLink />
            </li>

            <li className='menu__container-nav_item'>
              <a
                className='menu__container-nav_item-links'
                href='#reviews'
                rel='noopener noreferrer'>
                Reviews
              </a>

              <ArrowLink />
            </li>

            <li className='menu__container-nav_item'>
              <a
                className='menu__container-nav_item-links'
                href='#faq'
                rel='noopener noreferrer'>
                FAQ
              </a>

              <ArrowLink />
            </li>

            <li className='menu__container-nav_item'>
              <a
                className='menu__container-nav_item-links'
                href='#contact'
                rel='noopener noreferrer'>
                Contact
              </a>

              <ArrowLink />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export { Menu };
