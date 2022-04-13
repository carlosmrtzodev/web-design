const Section = ({ children, section, id }) => {
  return (
    <>
      <section className={`section ${section}`} id={id}>
        {children}
      </section>
    </>
  );
};

export { Section };
