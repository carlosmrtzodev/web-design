import { useState } from "react";
import { DownIcon } from "../Icons/DownIcon";

const Accordion = ({ title }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className='accordion'>
        <button
          className='accordion__button'
          onClick={() => setActive(!active)}>
          {title}

          <DownIcon />
        </button>

        {active && (
          <div className='accordion__panel'>
            <p className='accordion__panel-text'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export { Accordion };
