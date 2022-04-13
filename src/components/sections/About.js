import { Section } from "../containers/Section";

const About = () => {
  return (
    <>
      <Section section='about' id='about'>
        <div className='about__row'>
          <div className='about__row-text'>
            <h2 className='about__row-text_title'>Title</h2>

            <p className='about__row-text_paragraph'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>

          <figure className='about__row-figure'>
            <img
              className='about__row-figure_ilustration'
              src='./image-1.svg'
              alt='Ilustration 1'
            />
          </figure>
        </div>

        <div className='about__row alternative'>
          <figure className='about__row-figure'>
            <img
              className='about__row-figure_ilustration'
              src='./image-2.svg'
              alt='Ilustration 2'
            />
          </figure>

          <div className='about__row-text right'>
            <h2 className='about__row-text_title'>Title</h2>

            <p className='about__row-text_paragraph'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export { About };
