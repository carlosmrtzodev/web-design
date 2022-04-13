import { useState, useEffect } from "react";
import { Section } from "../containers/Section";

const Hero = () => {
  const [counter, setCounter] = useState(0);

  let sliders = [
    "hero__slider1",
    "hero__slider2",
    "hero__slider3",
    "hero__slider4",
    "hero__slider5",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      counter < 4 ? setCounter(counter + 1) : setCounter(0);
    }, 8000);
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <>
      <Section section={`hero ${sliders[counter]}`} id='home'>
        <div className='hero__text'>
          <div className='hero__text-container'>
            <h2 className='hero__text-container_title'>
              Su viaje de{" "}
              <span className='hero__text-container_title-color'>
                salud emocional
              </span>{" "}
              empieza aqui
            </h2>

            <h3 className='hero__text-container_subtitle'>
              Conoce nuestro profesionales con licencia
            </h3>

            <p className='hero__text-container_paragraph'>
              Todos se someten a un proceso seguro de verificación y
              acreditación, además de adherirse a estrictos códigos de ética y
              confidencialidad.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export { Hero };
