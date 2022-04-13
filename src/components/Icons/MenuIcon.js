const MenuIcon = ({ toggle, setToggle }) => {
  return (
    <>
      <svg
        width='46'
        height='40'
        viewBox='0 0 46 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='menuicon'
        onClick={() => setToggle(!toggle)}>
        <path
          d='M4 8H42.8444V12H4V8ZM4 18H42.8444V22H4V18ZM4 28H42.8444V32H4V28Z'
          fill='#414141'
        />
      </svg>
    </>
  );
};

export { MenuIcon };
