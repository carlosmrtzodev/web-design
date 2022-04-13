import { useState } from "react";
import { Menu } from "../elements/Menu";
import { Link } from "react-router-dom";
import { Modal } from "../elements/Modal";
import { MenuIcon } from "../Icons/MenuIcon";
import { CloseIcon } from "../Icons/CloseIcon";
import { SearchIcon } from "../Icons/SearchIcon";
import { AnimatePresence, motion } from "framer-motion";

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

            <AnimatePresence>
              {menu && (
                <motion.div
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.4 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}>
                  <Menu />
                </motion.div>
              )}
            </AnimatePresence>
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

            <AnimatePresence>
              {modal && (
                <motion.div
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeOut", duration: 0.4 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}>
                  <Modal toggle={modal} setToggle={setModal} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </header>
    </>
  );
};

export { Header };
