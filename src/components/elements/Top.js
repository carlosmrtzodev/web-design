import { TopIcon } from "../Icons/TopIcon";

const Top = ({ scroll }) => {
  return (
    <>
      <button className='top' onClick={scroll}>
        <TopIcon />
      </button>
    </>
  );
};

export default Top;
