import { useState } from "react";
import { DownIcon } from "../Icons/DownIcon";
import { AnimatePresence, motion } from "framer-motion";

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

        <AnimatePresence>
          {active && (
            <motion.div
              animate={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className='accordion__panel'>
              <p className='accordion__panel-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export { Accordion };
