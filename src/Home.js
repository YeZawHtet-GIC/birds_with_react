import React, { useState } from "react";
import "./App.css";
import BirdFlow1 from "./img/BirdsFlow1.PNG";
import BirdFlow2 from "./img/BirdsFlow2.PNG";
import BirdsMindMap from "./img/BirdsMindMap.PNG";

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle click on an image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12 mb-4">
          <div className="card border-0 shadow h-100" onClick={() => handleImageClick(BirdFlow1)}>
            <img src={BirdFlow1} className="card-img-top rounded" alt="Bird Flow 1" />
            <div className="card-body text-center">
              <h5 className="card-title mb-0">Bird Flow 1</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card border-0 shadow h-100" onClick={() => handleImageClick(BirdFlow2)}>
            <img src={BirdFlow2} className="card-img-top rounded" alt="Bird Flow 2" />
            <div className="card-body text-center">
              <h5 className="card-title mb-0">Bird Flow 2</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="card border-0 shadow h-100" onClick={() => handleImageClick(BirdsMindMap)}>
            <img src={BirdsMindMap} className="card-img-top rounded" alt="Birds Mind Map" />
            <div className="card-body text-center">
              <h5 className="card-title mb-0">Birds Mind Map</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for displaying larger image */}
      {selectedImage && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={selectedImage} alt="Selected Bird" className="img-fluid" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
