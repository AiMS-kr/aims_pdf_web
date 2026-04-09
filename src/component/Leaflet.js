import "../App.css";
import { useState, useEffect } from "react";
import Leaflet1 from "../img/1.jpg";
import Leaflet2 from "../img/2.jpg";
import Leaflet3 from "../img/3.jpg";
import Leaflet4 from "../img/4.jpg";
import Leaflet5 from "../img/5.jpg";
import Leaflet6 from "../img/6.jpg";

import LeafletEn1 from "../img/en1.jpg";
import LeafletEn2 from "../img/en2.jpg";
import LeafletEn3 from "../img/en3.jpg";
import LeafletEn4 from "../img/en4.jpg";
import LeafletEn5 from "../img/en5.jpg";
import LeafletEn6 from "../img/en6.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../carousel.css";

const koImages = [Leaflet1, Leaflet2, Leaflet3, Leaflet4, Leaflet5, Leaflet6];
const enImages = [
  LeafletEn1,
  LeafletEn2,
  LeafletEn3,
  LeafletEn4,
  LeafletEn5,
  LeafletEn6,
];

export const Leaflet = ({ lang }) => {
  const images = lang === "en" ? enImages : koImages;
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft")
        setSelectedIndex((p) => (p === 0 ? images.length - 1 : p - 1));
      if (e.key === "ArrowRight")
        setSelectedIndex((p) => (p === images.length - 1 ? 0 : p + 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedIndex, images.length]);

  return (
    <div>
      <p
        style={{
          fontSize: "7px",
          color: "#f4f4f4",
          textAlign: "center",
          margin: "0px 0px 8px 0px",
        }}
      >
        {lang === "en"
          ? "* Click the PDF download icon on the right or click the images below to enlarge."
          : "* 오른쪽 PDF 다운로드 또는 아래 이미지를 클릭하시면 확대하여 확인할 수 있습니다."}
      </p>
      <Carousel
        showArrows={true}
        infiniteLoop
        // autoPlay
        interval={2000}
        showThumbs={true}
        showStatus={false}
      >
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Leaflet ${index + 1}`}
              loading="lazy"
              onClick={() => setSelectedIndex(index)}
            />
          </div>
        ))}
      </Carousel>

      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "80vw",
              maxHeight: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((p) => (p === 0 ? images.length - 1 : p - 1));
              }}
              aria-label="prev"
              style={{
                position: "absolute",
                left: "-30px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 40,
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              ‹
            </button>

            <img
              src={images[selectedIndex]}
              alt={`fullscreen ${selectedIndex + 1}`}
              style={{
                maxWidth: "75vw",
                maxHeight: "75vh",
                objectFit: "contain",
              }}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex((p) => (p === images.length - 1 ? 0 : p + 1));
              }}
              aria-label="next"
              style={{
                position: "absolute",
                right: "-30px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 40,
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              ›
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              aria-label="close"
              style={{
                position: "absolute",
                top: "-20px",
                right: "-40px",
                background: "rgba(255,255,255,0.08)",
                border: "none",
                color: "white",
                fontSize: "bold",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
