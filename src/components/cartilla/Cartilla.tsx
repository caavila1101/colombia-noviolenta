import "./Cartilla.css";
import cartillaImg from "../../assets/images/cartilla-noviolencia.png";
import avatarImg from "../../assets/images/avatar-rodrigo.png";
import avatarClickImg from "../../assets/images/avatar-click-rodrigo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Image } from "react-bootstrap";
import BenefitCard from "./cards/Card";
import benefitsDataCard from "./cards/BenefitsData";
import { benefitsData } from "../Carousel/benefitsData";
import cartillaPDF from "../../assets/pdf/cartilla.pdf";
import { useState } from "react";

interface Benefit {
  title: string;
  description: string;
  image: string;
}

function Cartilla() {

  const [isClicked, setIsClicked] = useState(false);

  function handleAvatarClick() {
    const link = document.createElement("a");
    link.href = cartillaPDF;
    link.download = "Cartilla_Noviolencia.pdf";
    link.click();

    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 6000);
  }

  return (
    <div className="yoga-container">
      {/* Hero */}
      <Image 
        src={cartillaImg} 
        fluid 
        className="hero-image" 
      />

      <section>
        <div className="benefits">
          <h2 className="benefits-title">
            ✨ Bienvenido a esta aventura hacia la Noviolencia ✨
          </h2>
        
          <div className="benefits-content">
            <div className="benefits-text">
              <p>
                ¿Alguna vez te has preguntado cómo sería un mundo con menos conflictos y más justicia?
                Esta cartilla te invita a descubrir, de manera práctica y divertida,
                cómo la Noviolencia puede transformar tu vida y la de quienes te rodean.
              </p>
              <p>
                🌍 Aquí encontrarás historias, ideas y ejemplos que te mostrarán que la paz no es solo un sueño,
                sino un camino que podemos recorrer juntos.
              </p>
              <p><strong>👉 Desliza el carrusel y conoce todo lo que aprenderás en esta experiencia:</strong></p>
            </div>

            <div className="benefits-carousel">
              <Carousel fade interval={8000} controls indicators>
                {benefitsData.map((item: Benefit, index: number) => (
                  <Carousel.Item key={index}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        display: "block",
                        margin: "0 auto",
                        borderRadius: "20px",
                        maxHeight: "320px",
                        width: "100%",
                        objectFit: "cover",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
                      }}
                    />
                    <Carousel.Caption
                      style={{
                        background: "rgba(0, 0, 0, 0.5)",
                        borderRadius: "12px",
                        padding: "10px 20px",
                      }}
                    >
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section>
        <section className="benefits first-step">
          <p className="title">Tu primer paso hacia la Noviolencia 👣</p>
          <section className="benefits-information">
              {benefitsDataCard.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  title={benefit.title}
                  imageSrc={benefit.imageSrc}
                  modalContent={benefit.modalContent}
                  width={350}        
                  minHeight={300}   
                  className="benefit-card"
                />
              ))} 
          </section>
        </section>
      </section>   

      <img 
        src={isClicked ? avatarClickImg : avatarImg} 
        alt="Avatar" 
        className="floating-avatar" 
        onClick={handleAvatarClick}
      />       
      
    </div>
  );
}

export default Cartilla;
