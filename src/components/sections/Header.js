import { useState } from "react";
import { Menu } from "../elements/Menu";
import { Link } from "react-router-dom";
import { MenuIcon } from "../Icons/MenuIcon";
import { CloseIcon } from "../Icons/CloseIcon";
import { SearchIcon } from "../Icons/SearchIcon";
import { Modal } from "../elements/Modal";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <header className='header'>
        <nav className='header__navbar'>
          <div className='header__navbar-menu'>
            {menu ? (
              <CloseIcon toggle={menu} setToggle={setMenu} />
            ) : (
              <MenuIcon toggle={menu} setToggle={setMenu} />
            )}

            {menu && <Menu />}
          </div>

          <div className='header__navbar-logo'>
            <Link to=''>
              <figure className='header__navbar-logo_figure'>
                <img
                  src='./Logo.svg'
                  alt='Logo'
                  className='header__navbar-logo_figure-image'
                />
              </figure>
            </Link>
          </div>

          <div className='header__navbar-search'>
            <SearchIcon toggle={modal} setToggle={setModal} />

            {modal && <Modal toggle={modal} setToggle={setModal} />}
          </div>
        </nav>
      </header>
    </>
  );
};

export { Header };
