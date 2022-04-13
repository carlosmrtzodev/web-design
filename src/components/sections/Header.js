import "./Header.css";

const Header = () => {
  return (
    <>
      <header className='header'>
        <nav className='header__navbar'>
          <div className='header__navbar-menu'>
            <figure className='header__navbar-menu_figure'>
              <img
                src='./Menu.svg'
                alt='Menu'
                className='header__navbar-menu_figure-icon'
              />
            </figure>
          </div>

          <div className='header__navbar-logo'>
            <figure className='header__navbar-logo_figure'>
              <img
                src='./Logo.svg'
                alt='Logo'
                className='header__navbar-logo_figure-image'
              />
            </figure>
          </div>

          <div className='header__navbar-search'>
            <figure className='header__navbar-search_figure'>
              <img
                src='./Search.svg'
                alt='Search'
                className='header__navbar-search_figure-icon'
              />
            </figure>
          </div>
        </nav>
      </header>
    </>
  );
};

export { Header };
