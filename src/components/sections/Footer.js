import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer__logo'>
          <figure className='footer__logo-figure'>
            <img
              className='footer__logo-figure_logo'
              src='./Logo.svg'
              alt='Footer Logo'
            />
          </figure>

          <p className='footer__logo-copyright'>
            MejorconSalud © 2012 – 2022. All rights reserved.
          </p>
        </div>

        <div className='footer__links'>
          <ul className='footer__links-nav'>
            <li className='footer__links-nav_item'>
              <a className='footer__links-nav_item-link' href='#'>
                Política de Cookies
              </a>
            </li>

            <li className='footer__links-nav_item'>
              <a className='footer__links-nav_item-link' href='#'>
                Política de Privacidad
              </a>
            </li>

            <li className='footer__links-nav_item'>
              <a className='footer__links-nav_item-link' href='#'>
                Términos y condiciones de uso
              </a>
            </li>

            <li className='footer__links-nav_item'>
              <a className='footer__links-nav_item-link' href='#'>
                Cláusula Informativa de Consentimiento
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export { Footer };
