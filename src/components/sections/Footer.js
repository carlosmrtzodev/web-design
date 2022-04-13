import Top from "../elements/Top";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, [showButton]);

  return (
    <>
      <footer className='footer'>
        <div className='footer__logo'>
          <Link to='/'>
            <figure className='footer__logo-figure'>
              <img
                className='footer__logo-figure_logo'
                src='./Logo.svg'
                alt='Footer Logo'
              />
            </figure>
          </Link>

          <p className='footer__logo-copyright'>
            MejorconSalud is a property of Grupo MContigo ©2012 – 2022. All
            rights reserved.
          </p>
        </div>
        <div className='footer__links'>
          <ul className='footer__links-nav'>
            <li className='footer__links-nav_item'>
              <a
                className='footer__links-nav_item-link'
                href='https://mejorconsalud.as.com/politica-de-cookies/'
                rel='noopener noreferrer'>
                Cookies policy
              </a>
            </li>

            <li className='footer__links-nav_item'>
              <a
                className='footer__links-nav_item-link'
                href='https://mejorconsalud.as.com/politica-de-privacidad/'
                rel='noopener noreferrer'>
                Privacy Policy
              </a>
            </li>

            <li className='footer__links-nav_item'>
              <a
                className='footer__links-nav_item-link'
                href='https://mejorconsalud.as.com/terminos-y-condiciones-de-uso/'
                rel='noopener noreferrer'>
                Terms and conditions of use
              </a>
            </li>

            <li className='footer__links-nav_item'>
              <a
                className='footer__links-nav_item-link'
                href='https://mejorconsalud.as.com/quienes-somos/'
                rel='noopener noreferrer'>
                Informative Consent Clause
              </a>
            </li>
          </ul>
        </div>

        <AnimatePresence>
          {showButton && (
            <motion.div
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}>
              <Top scroll={ScrollToTop} />
            </motion.div>
          )}
        </AnimatePresence>
      </footer>
    </>
  );
};

export { Footer };
