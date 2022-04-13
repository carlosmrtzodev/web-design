import "./Main.css";

const Main = ({ children }) => {
  return (
    <>
      <main className='main'>
        <article className='article'>{children}</article>
      </main>
    </>
  );
};

export { Main };
