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
      </footer>
    </>
  );
};

export { Footer };
