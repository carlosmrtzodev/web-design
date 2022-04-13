import "./Section.css";

const Section = ({ children, section }) => {
  return <section className={`section ${section}`}>{children}</section>;
};

export { Section };
