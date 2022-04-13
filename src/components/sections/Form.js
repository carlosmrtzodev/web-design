import "./Form.css";
import { Section } from "../containers/Section";

const Form = () => {
  return (
    <>
      <Section section='form'>
        <div className='form__title'>
          <h2 className='form__title-text'>Contact Form</h2>
        </div>
        <form className='form__container'>
          <div className='form__container-group'>
            <input
              className='form__container-group_inputs'
              placeholder='Name'
            />
          </div>

          <div className='form__container-group'>
            <input
              className='form__container-group_inputs'
              placeholder='E-mail'
            />
          </div>

          <div className='form__container-group'>
            <textarea
              className='form__container-group_textarea'
              placeholder='Message'
              rows='8'
            />
          </div>

          <div className='form__container-submit'>
            <button className='form__container-submit_button'>SUBMIT</button>
          </div>
        </form>
      </Section>
    </>
  );
};

export { Form };
