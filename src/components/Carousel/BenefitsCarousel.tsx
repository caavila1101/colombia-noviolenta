import React from "react";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { benefitsData } from "./benefitsData";
import "../cartilla/Cartilla.css";

interface Benefit {
  title: string;
  description: string;
  image: string;
}

const BenefitsCarousel: React.FC = () => {
  return (
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
  );
};

export default BenefitsCarousel;
