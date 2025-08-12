import React, { useState } from "react";

const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg"
];

const Gallery: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="card">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`img-${i}`}
            className="thumb"
            onClick={() => setOpenIndex(i)}
            onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}}
          />
        ))}
      </div>

      {openIndex !== null && (
        <div className="modal" onClick={() => setOpenIndex(null)}>
          <img src={images[openIndex]} alt="full" className="modal-img" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
