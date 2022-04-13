import "./Accordion.css";
import { useState } from "react";

const Accordion = ({ title }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className='accordion'>
        <button class='accordion__button' onClick={() => setActive(!active)}>
          {title}
          <img className='accordion__button-down' src='./Down.svg' alt='Down' />
        </button>

        {active && (
          <div class='accordion__panel'>
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
