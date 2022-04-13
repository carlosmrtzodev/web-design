const Review = ({ review, author }) => {
  return (
    <>
      <div className='reviews__container-text'>
        <p className='reviews__container-text_review'>{review}</p>

        <span className='reviews__container-text_author'>{author}</span>
      </div>
    </>
  );
};

export { Review };
