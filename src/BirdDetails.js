import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import React, { useState } from "react";

export default function BirdDetails() {
  const { id } = useParams();
  const {
    data: bird,
    error,
    isPending,
  } = useFetch("https://birds-data-json.vercel.app/Tbl_Bird/" + id);
  const navigate = useNavigate();
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    fetch("https://birds-data-json.vercel.app/Tbl_Bird/" + bird.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const ratioX = width / e.target.offsetWidth;
    const ratioY = height / e.target.offsetHeight;

    setMagnifierPosition({
      x: x * ratioX,
      y: y * ratioY,
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="card shadow">
            <div className="card-body">
              {isPending && <div className="text-center">Loading...</div>}
              {error && <div className="text-center text-danger">{error}</div>}
              {bird && (
                <>
                  <h2 className="text-center">{bird.BirdMyanmarName}</h2>
                  <h3 className="text-center mb-4">{bird.BirdEnglishName}</h3>
                  <div className="text-center mb-4 magnifier-container">
                    <img
                      src={process.env.PUBLIC_URL + '/' + bird.ImagePath}
                      alt={bird.BirdEnglishName}
                      className="img-fluid rounded magnifier-image"
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => setShowMagnifier(true)}
                      onMouseLeave={() => setShowMagnifier(false)}
                    />
                    {showMagnifier && (
                      <div
                        className="magnifier"
                        style={{
                          backgroundImage: `url(${process.env.PUBLIC_URL + '/' + bird.ImagePath})`,
                          backgroundPosition: `-${magnifierPosition.x}px -${magnifierPosition.y}px`,
                        }}
                      ></div>
                    )}
                  </div>
                  <p className="text-center">{bird.Description}</p>
                  <div className="text-center">
                    <button onClick={handleClick} className="btn btn-danger me-3">
                      Delete
                    </button>
                    <button
                      onClick={() => navigate("/birds")}
                      className="btn btn-primary"
                    >
                      Back
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
