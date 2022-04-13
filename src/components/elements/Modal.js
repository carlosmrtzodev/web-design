import { CloseIcon } from "../Icons/CloseIcon";

const Modal = ({ toggle, setToggle }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Search Works");
  };

  return (
    <>
      <div className='modal'>
        <div className='modal__container'>
          <CloseIcon toggle={toggle} setToggle={setToggle} />

          <div className='modal__container-title'>
            <h2 className='modal__container-title_text'>Search Bar</h2>
          </div>

          <form className='modal__container-form' onSubmit={handleSubmit}>
            <input
              type='text'
              className='modal__container-form_input'
              placeholder='Search'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export { Modal };
