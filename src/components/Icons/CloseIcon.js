const CloseIcon = ({ toggle, setToggle }) => {
  return (
    <>
      <svg
        width='45'
        height='45'
        viewBox='0 0 45 45'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='closeicon'
        onClick={() => setToggle(!toggle)}>
        <path
          d='M30.3599 11.895L22.4043 19.8488L14.4506 11.895L11.7993 14.5463L19.7531 22.5L11.7993 30.4538L14.4506 33.105L22.4043 25.1513L30.3599 33.105L33.0112 30.4538L25.0574 22.5L33.0112 14.5463L30.3599 11.895Z'
          fill='#414141'
        />
      </svg>
    </>
  );
};

export { CloseIcon };
