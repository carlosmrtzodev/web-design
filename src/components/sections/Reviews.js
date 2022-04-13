import { useState } from "react";
import { Review } from "../elements/Review";
import { QuoteIcon } from "../Icons/QuoteIcon";
import { Section } from "../containers/Section";

const Reviews = () => {
  const [active, setActive] = useState(0);

  return (
    <>
      <Section section='reviews' id='reviews'>
        <div className='reviews__container'>
          <div className='reviews__container-quote'>
            <QuoteIcon />
          </div>

          {active === 0 ? (
            <Review
              review='Me gustaría agradecer al sitio, me ayudó de una manera inimaginable,
          el psicólogo fue sumamente servicial y acogedor conmigo y me siento
          mejor conmigo mismo.'
              author='~ Maria Montessori ~'
            />
          ) : active === 1 ? (
            <Review
              review='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
              author='~ Leanne Graham ~'
            />
          ) : active === 2 ? (
            <Review
              review='There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form, by injected humour.'
              author='~ Ervin Howell ~'
            />
          ) : null}

          <ul className='reviews__container-controls'>
            <li
              className={`reviews__container-controls_circle ${
                active === 0 ? `active` : `inactive`
              }`}
              onClick={() => setActive(0)}></li>

            <li
              className={`reviews__container-controls_circle ${
                active === 1 ? `active` : `inactive`
              }`}
              onClick={() => setActive(1)}></li>

            <li
              className={`reviews__container-controls_circle ${
                active === 2 ? `active` : `inactive`
              }`}
              onClick={() => setActive(2)}></li>
          </ul>
        </div>
      </Section>
    </>
  );
};

export { Reviews };
