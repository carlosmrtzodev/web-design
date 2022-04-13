import { QuoteIcon } from "../Icons/QuoteIcon";
import { Section } from "../containers/Section";

const Reviews = () => {
  return (
    <>
      <Section section='reviews' id='reviews'>
        <div className='reviews__container'>
          <div className='reviews__container-quote'>
            <QuoteIcon />
          </div>

          <div className='reviews__container-text'>
            <p className='reviews__container-text_review'>
              Me gustaría agradecer al sitio, me ayudó de una manera
              inimaginable, el psicólogo fue sumamente servicial y acogedor
              conmigo y me siento mejor conmigo mismo.
            </p>

            <span className='reviews__container-text_author'>
              ~ Maria Montessori ~
            </span>
          </div>

          <ul className='reviews__container-controls'>
            <li className='reviews__container-controls_circle'></li>
            <li className='reviews__container-controls_circle active'></li>
            <li className='reviews__container-controls_circle'></li>
          </ul>
        </div>
      </Section>
    </>
  );
};

export { Reviews };
