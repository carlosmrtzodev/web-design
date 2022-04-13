import { ArrowLink } from "../Icons/ArrowLink";

const Menu = () => {
  return (
    <>
      <div className='menu'>
        <div className='menu__container'>
          <div className='menu__container-title'>
            <h3 className='menu__container-title_text'>Menu</h3>
          </div>

          <ul className='menu__container-nav'>
            <li className='menu__container-nav_item'>
              <a className='menu__container-nav_item-links' href='#home'>
                Home
              </a>

              <ArrowLink />
            </li>

            <li className='menu__container-nav_item'>
              <a className='menu__container-nav_item-links' href='#about'>
                About
              </a>

              <ArrowLink />
            </li>

            <li className='menu__container-nav_item'>
              <a className='menu__container-nav_item-links' href='#reviews'>
                Reviews
              </a>

              <ArrowLink />
            </li>

            <li className='menu__container-nav_item'>
              <a className='menu__container-nav_item-links' href='#faq'>
                FAQ
              </a>

              <ArrowLink />
            </li>

            <li className='menu__container-nav_item'>
              <a className='menu__container-nav_item-links' href='#contact'>
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
