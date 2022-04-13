import { Section } from "../containers/Section";
import { Accordion } from "../elements/Accordion";

const FAQ = () => {
  return (
    <>
      <Section section='FAQ' id='faq'>
        <div className='FAQ__title'>
          <h2 className='FAQ__title-text'>FAQ</h2>
        </div>

        <div className='FAQ__container'>
          <Accordion title='¿Cuáles son los pasos para tomar una decisión?' />
          <Accordion title='¿Cuáles son los pasos para tomar una decisión?' />
          <Accordion title='¿Cuáles son los pasos para tomar una decisión?' />
          <Accordion title='¿Cuáles son los pasos para tomar una decisión?' />
        </div>
      </Section>
    </>
  );
};

export { FAQ };
