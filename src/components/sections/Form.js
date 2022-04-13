import { Section } from "../containers/Section";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submit!");
  };
  return (
    <>
      <Section section='form' id='contact'>
        <div className='form__title'>
          <h2 className='form__title-text'>Contact Form</h2>
        </div>

        <form className='form__container' onSubmit={handleSubmit}>
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
            <button type='submit' className='form__container-submit_button'>
              SUBMIT
            </button>
          </div>
        </form>
      </Section>
    </>
  );
};

export { Form };
